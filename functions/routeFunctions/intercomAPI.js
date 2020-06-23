const functions = require("firebase-functions");
var moment = require("moment");
var Intercom = require("intercom-client");
var axios = require("axios");

// Intercom API key
// stored as environment var: https://firebase.google.com/docs/functions/config-env
var client = new Intercom.Client({
  token: functions.config().intercom.key,
});

// defaults for axios requests
axios.defaults.baseURL = "https://api.intercom.io";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  functions.config().intercom.key
}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const adminEmailToID = async (fromEmail) => {
  const admins = await client.admins.list();
  const id = admins.body.admins.find(
    (entry) => entry.email.toLowerCase() === fromEmail.toLowerCase()
  ).id;

  return id;
};

const adminExists = async (adminEmail) => {
  try {
    const admins = await client.admins.list();
    const numFound = admins.body.admins.filter(
      (entry) => entry.email.toLowerCase() === adminEmail.toLowerCase()
    ).length;
    console.log("numFound", numFound);
    if (numFound > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    // the .length above will error if the user is not found
    return false;
  }
};

// takes a contact's email address and a note - adds the note to the contact
const addNoteToContact = async (customerEmail, note) => {
  try {
    // find the contact's ID
    const response = await axios.post("/contacts/search", {
      query: { field: "email", operator: "~", value: customerEmail },
    });

    // bail if there are no matches
    if (response.data.total_count === 0) {
      addUser(customerEmail);
      return addNoteToContact(customerEmail, note);
    }

    const id = response.data.data[0].id;

    // add the note
    // 3939922 is my id
    const secondResponse = await axios.post(`/contacts/${id}/notes`, {
      body: note,
      admin_id: "3939922",
    });

    return true;
  } catch (error) {
    return false;
  }
};

const userExists = async (customerEmail) => {
  // this must be done with axios - the intercom library doesn't support this endpoint
  //   tilde operator ensures no capitalization tweaks necessary
  const response = await axios.post("/contacts/search", {
    query: { field: "email", operator: "~", value: customerEmail },
  });

  const numberEntries = response.data.total_count;

  let name = null;

  if (numberEntries > 0) {
    if (response.data.data[0].name) {
      name = response.data.data[0].name;
    }
    return [true, name];
  } else {
    return [false, name];
  }
};

const addUser = async (email) => {
  await axios.post("/contacts", {
    email: email,
    role: "user",
  });
};

const createSendMessage = async (
  fromEmail,
  fromID,
  toEmail,
  lsProdData,
  skus,
  name,
  personalMessage
) => {
  // get current date for message
  const date = moment(new Date()).format("MM/DD/YYYY");

  // compile message object
  var message = {
    message_type: "email",
    subject: `Following Up About Our ${date} Meeting`,
    template: "personal",
    body: `<html>
      <body>
        <p>
          ${name ? ` ${name},` : ""}
        </p>
        ${personalMessage ? `<p>${personalMessage}</p>` : ""}
        <p>Here are the items we looked at today:</p>
        <ul>
          ${lsProdData
            .map((item) => {
              return `<li><a href="https://livingspaces.com/${item.pid}">${item.title}</a> - $${item.price.salePrice}</li>`;
            })
            .join("")}
        </ul>
        <p>Here is a link to the list of items on our website:&nbsp;
          <a
            href="https://www.livingspaces.com/sharelist?pid=${skus.join(",")}"
          >
            Shopping List</a
          >
        </p>
      </body>
    </html>`,
    from: {
      type: "admin",
      id: fromID,
    },
    to: {
      type: "contact",
      email: toEmail,
    },
  };

  // gone ahead 'n' send it
  res = await client.messages.create(message);
  console.log(JSON.stringify(res));
  return `Email send successful: ${fromEmail} emailed ${toEmail}`;
};

module.exports = {
  adminEmailToID,
  createSendMessage,
  userExists,
  addUser,
  adminExists,
  addNoteToContact,
};

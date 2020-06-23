const functions = require("firebase-functions");
const livingSpacesAPI = require("./routeFunctions/livingSpacesAPI");
const intercomAPI = require("./routeFunctions/intercomAPI");

const whitelist = [
  "https://www.livingspaces.com",
  "https://internal-intercom-app.firebaseapp.com",
  "http://localhost:3000", // remove these for final deploy
  "https://localhost:3000/",
];
const cors = require("cors")({
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.json({ msg: "This is CORS-enabled for only example.com." });
  });
});

exports.corsTest = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    response.status(200).send("hello world!!!!!"); // leaving for debugging
  });
});

/*
Adds a note for a given email address. User is created if none exists with that email address

Takes the following:
{
    "email": "billybob@yahoo.com"
    "note": "Initiated chat on 1/1/11"
}
*/
exports.addNoteToContact = functions.https.onRequest(
  async (request, response) => {
    return cors(request, response, async () => {
      let success = await intercomAPI.addNoteToContact(
        request.body.email,
        request.body.note
      );
      success
        ? response.status(200).json({ noteAdded: true })
        : response.status(500).json({ noteAdded: false });
    });
  }
);

exports.findAdmin = functions.https.onRequest(async (request, response) => {
  return cors(request, response, async () => {
    let adminExists = await intercomAPI.adminExists(request.body.email);
    adminExists
      ? response.status(200).json({ userFound: true })
      : response.status(200).json({ userFound: false });
  });
});

/*
Checks if user exists for given email. Creates one if they don't exist.

Takes the following:
{
    "email": "billybob@yahoo.com"
}
*/
exports.checkCreateUser = functions.https.onRequest(
  async (request, response) => {
    return cors(request, response, async () => {
      response.set("Access-Control-Allow-Origin", "*");
      try {
        let { email } = request.body;

        const [userExists] = await intercomAPI.userExists(email);

        // create user in intercom if none exist with that email
        if (!userExists) {
          await intercomAPI.addUser(email);
        }
        response.status(200).send("User created successfully");
      } catch (error) {
        response.status(500).send(error);
      }
    });
  }
);

/*
Creates and sends email message via intercom

Takes the following:
{
    "skus": "[251060,265267,90333]",
    "fromEmail": "josh.simmons@livingspaces.com",
    "toEmail": "jcpsimmons@gmail.com",
    "contactName": "Josh" <- optional, can be blank
    "message": "optional message" <- optional, can be blank,
    "contactPrepped": "true"
}
*/
exports.sendMessage = functions.https.onRequest(async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  return cors(request, response, async () => {
    try {
      // input parsing
      let { skus, fromEmail, toEmail, contactName, message } = request.body;
      // set contactName and message to null if an empty string was set
      contactName = contactName === "" ? null : contactName;
      message = message === "" ? null : message;
      skus = JSON.parse(skus); // to array

      // list all of the admins, and then find the one with the corresponding 'from' email
      const fromID = await intercomAPI.adminEmailToID(fromEmail);
      const productData = await livingSpacesAPI.getProductData(skus);
      const [userExists, searchedContactName] = await intercomAPI.userExists(
        toEmail
      );

      // if no contact name was sent but one was found, overwrite it with the found value
      if (contactName === null && searchedContactName !== null) {
        contactName = searchedContactName;
      }

      // Create and send the message
      const status = await intercomAPI.createSendMessage(
        fromEmail,
        fromID,
        toEmail,
        productData,
        skus,
        contactName,
        message
      );

      // console.log("status", JSON.stringify(status));
      response.status(200).send(status);
    } catch (error) {
      console.log(error.message);
      response
        .status(500)
        .send(`There was an error with your request: ${error.message}`);
    }
  });
});

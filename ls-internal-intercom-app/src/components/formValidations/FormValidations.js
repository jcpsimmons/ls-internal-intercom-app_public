const allowSkus = (event) => {
  // If key isn't a number or comma, prevent its entry
  if (!/\d|,/i.test(event.key)) {
    event.preventDefault();
  }
};

const validateSkus = async (skus) => {
  skus = skus.toString();

  if (skus.endsWith(",")) return "SKU list cannot end with a comma";

  let res = await fetch(
    `https://www.livingspaces.com/api/restfulproducts?pid=${skus}`
  );

  if (res.status === 400) return "SKU invalid";

  let data = await res.json();
  if (data.numFound !== skus.split(",").length)
    return "One or more SKUs are invalid";

  if (skus === "") {
    return "Enter at least one SKU";
  } else if (skus.match(/(\d{5,6},?)*/)[0].length !== skus.length) {
    return "Invalid SKU(s) entered";
  } else {
    return null;
  }
};

const validateLsEmailPrefix = (event) => {
  if (/\s|@/.test(event.key)) {
    event.preventDefault();
  }
};

const validateContactName = (event) => {
  if (!/([A-Z]|-|\s|.)/i.test(event.key)) {
    event.preventDefault();
  }
};

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export {
  allowSkus,
  validateContactName,
  validateEmail,
  validateSkus,
  validateLsEmailPrefix,
};

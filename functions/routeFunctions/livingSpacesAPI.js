var axios = require("axios");

const getProductData = async (skus) => {
  const restfulUrl = `https://www.livingspaces.com/api/restfulproducts?pid=${skus.join(
    ","
  )}`;

  let productData = await axios.get(restfulUrl);
  productData = productData.data.products;

  return productData;
};

module.exports = { getProductData: getProductData };

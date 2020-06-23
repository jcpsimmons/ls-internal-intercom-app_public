import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styled from "styled-components";

const Progress = styled(LinearProgress)`
  margin: 1em auto;
`;

export default function ProductBullet({ sku }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const getSkuData = async (sku) => {
    try {
      let res = await fetch(
        `https://www.livingspaces.com/api/restfulproducts?pid=${sku}`
      );
      let data = await res.json();
      setName(data.products[0].title);
      setPrice(`$${data.products[0].price.salePrice}`);
    } catch (error) {
      setName(`${sku} - product not found`);
    }
  };

  if (sku.length === 5 || sku.length === 6) {
    getSkuData(sku);
  }
  return (
    <div>
      {sku.length < 5 || sku.length > 6 ? (
        <Progress />
      ) : (
        <li>
          <a
            href={`https://livingspaces.com/${sku}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1251ba" }}
          >
            {name}
          </a>
          {` - ${price}`}
        </li>
      )}
    </div>
  );
}

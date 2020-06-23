import React from "react";
import styled from "styled-components";

const CustomFooter = styled.footer`
  margin-top: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #212121;
  color: #ababab;
  font-size: 0.8rem;
  font-variant: small-caps;
  & > a {
    color: #ababab;
  }
`;

export default function Footer() {
  return (
    <CustomFooter>
      &copy; 2020{" "}
      <a target="_blank" href="https://livingspaces.com">
        Living Spaces
      </a>
      , All Rights Reserved
    </CustomFooter>
  );
}

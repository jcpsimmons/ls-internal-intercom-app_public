import React from "react";
import { Link } from "@material-ui/core";
import styled from "styled-components";

const LogoContainer = styled.div`
  padding: 0.75rem 0 0.75rem;
  & img {
    width: 12rem;
    height: auto;
  }
  & a {
    color: #fff !important;
  }
  & p {
    font-variant: small-caps;
    margin-top: 0.3rem;
    margin-bottom: 0;
    font-size: 0.8rem;
    text-align: center;
    letter-spacing: 1.4px;
  }
`;

export default function LogoBox() {
  return (
    <LogoContainer>
      <Link href="/">
        <img src="/img/LS-Header-Logo.png" alt="" />
        <p>Internal Intercom App</p>
      </Link>
    </LogoContainer>
  );
}

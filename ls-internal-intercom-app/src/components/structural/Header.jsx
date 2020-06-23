import React, { useContext } from "react";
import app from "../../base";
import styled from "styled-components";
import { Link } from "@material-ui/core";

import { AuthContext } from "../../Auth";

import LogoBox from "./headerComponents/LogoBox";

const CustomHeader = styled.div`
  display: flex;
  background-color: #212121;
  margin-bottom: 2rem;
  padding: 0 1rem;
  align-items: baseline;
  justify-content: space-between;
  align-items: center;

  & > div {
    margin: auto 1rem;
  }

  & h1 {
    display: inline;
    color: #fff;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    & h1 {
      font-size: 1.25em;
    }
  }
`;

const ButtonHolder = styled.div`
  margin-right: -1rem;
  & > div {
    display: flex;
  }
  & a {
    font-weight: bold;
    color: #fff !important;
  }
  & a > h3 {
    font-variant: small-caps;
    font-size: 0.8rem;
  }
  & a:nth-of-type(2) > h3 {
    border-left: 1px solid #989898;
    margin-left: 0.75em;
    padding-left: 0.75em;
  }
  @media (max-width: 768px) {
    & h3 {
      font-size: 0.75em;
    }
  }
`;

const signOut = () => {
  app.auth().signOut();
};

export default function Header() {
  const { currentUser } = useContext(AuthContext);

  return (
    <CustomHeader>
      <LogoBox />
      <ButtonHolder>
        {currentUser ? (
          <Link href="#" onClick={signOut}>
            <h3>Log Out</h3>
          </Link>
        ) : (
          <div>
            <Link href="/login">
              <h3>Log In</h3>
            </Link>
            <Link href="/signup">
              <h3>Sign Up</h3>
            </Link>
          </div>
        )}
      </ButtonHolder>
    </CustomHeader>
  );
}

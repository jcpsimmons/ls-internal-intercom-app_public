import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1em;
  width: 50%;
  margin: auto;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9em;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

export default function IntercomDisclaimer({ page }) {
  return (
    <Container>
      {page === "login" ? (
        <div>
          <p>Log in with your @livingspaces.com email address.</p>{" "}
          <p>
            If you haven't created an account on this site yet please{" "}
            <a href="/signup">sign up</a> before logging in.
          </p>
        </div>
      ) : (
        <div>
          <p>Create an account with your @livingspaces.com email account.</p>
          <p>
            <b>
              You must have a valid account with Intercom in order to register
              for this application.
            </b>
          </p>
        </div>
      )}
    </Container>
  );
}

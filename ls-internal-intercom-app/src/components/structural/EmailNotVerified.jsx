import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto 2rem auto;
  text-align: center;
`;

export default function EmailNotVerified({ email }) {
  //   const sendEmailLink = () => {};

  return (
    <Container>
      <h2>Email Not Verified</h2>
      <p>{`You must click the confirmation link sent to your email at ${email}`}</p>
      <p>
        If you did not receive the email, please wait up to 2 hours and check
        your junk folder.
      </p>
      {/* pull below code from App.js once you can assure it's working */}
      {/* <p>
        <a onClick={sendEmailLink} href="#">
          Click here
        </a>{" "}
        to request a new email link.
      </p> */}
    </Container>
  );
}

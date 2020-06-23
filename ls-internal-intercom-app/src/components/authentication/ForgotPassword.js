import React, { useState } from "react";
import { Input, Button, InputAdornment } from "@material-ui/core";
import styled from "styled-components";

import app from "../../base.js";

import LoadingSpinner from "../structural/LoadingSpinner";

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  & > * {
    margin-bottom: 1rem !important;
    margin: auto auto 1rem !important;
  }
`;

const ForgotPassword = ({ visible }) => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const lsEmail = email.value + "@livingspaces.com";
    try {
      let res = await app.auth().sendPasswordResetEmail(lsEmail);
      setEmailSent(true);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    visible(false);
  };

  return (
    <Container>
      {emailSent ? (
        <div>
          <h1>Password Reset Link Sent</h1>
          <p>A password reset link has been sent to the email provided.</p>
          <p>
            Please allow up to two hours for password reset link to appear
            before requesting again - check your junk/spam folder.
          </p>
        </div>
      ) : (
        <div>
          <h1>Forgot Password</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              type="text"
              placeholder="Vanessa.Smith"
              endAdornment={
                <InputAdornment position="end">
                  @livingspaces.com
                </InputAdornment>
              }
            />
            <Button color="primary" variant="contained" type="submit">
              Reset Password
            </Button>
            <Button
              onClick={handleBackToLogin}
              color="secondary"
              variant="contained"
            >
              Back to Login
            </Button>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default ForgotPassword;

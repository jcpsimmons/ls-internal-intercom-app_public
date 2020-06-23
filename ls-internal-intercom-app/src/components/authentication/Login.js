import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Input, InputAdornment, Button } from "@material-ui/core";
import styled from "styled-components";

import app from "../../base.js";
import { AuthContext } from "../../Auth.js";

import { validateLsEmailPrefix } from "../formValidations/FormValidations";

import ForgotPassword from "./ForgotPassword";
import IntercomDisclaimer from "./intercomDisclaimer/IntercomDisclaimer";

const Container = styled.div`
  text-align: center;
  & button {
    width: auto;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  & > * {
    margin-bottom: 1rem !important;
    margin: auto auto 1rem !important;
    width: 30ch;
  }
`;

const Login = ({ history }) => {
  const [forgotPasswordView, setForgotPasswordView] = useState(false);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const lsEmail = email.value + "@livingspaces.com";

      try {
        await app.auth().signInWithEmailAndPassword(lsEmail, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const forgotPasswordClick = () => {
    setForgotPasswordView(true);
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {!forgotPasswordView ? (
        <div>
          <h1>Log in</h1>
          <Form onSubmit={handleLogin}>
            <Input
              name="email"
              type="text"
              onKeyPress={validateLsEmailPrefix}
              placeholder="Vanessa.Smith"
              endAdornment={
                <InputAdornment position="end">
                  @livingspaces.com
                </InputAdornment>
              }
            />
            <Input name="password" type="password" placeholder="Password" />
            <Button color="primary" variant="contained" type="submit">
              Log in
            </Button>
            <Button
              onClick={forgotPasswordClick}
              color="secondary"
              variant="contained"
              type="submit"
            >
              Forgot Password
            </Button>
          </Form>
          <IntercomDisclaimer page="login" />
        </div>
      ) : (
        <ForgotPassword visible={setForgotPasswordView} />
      )}
    </Container>
  );
};

export default withRouter(Login);

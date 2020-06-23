import React, { useCallback, useState, useContext } from "react";
import { withRouter } from "react-router";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import styled from "styled-components";

import app from "../../base";
import { AuthContext } from "../../Auth";

import { validateLsEmailPrefix } from "../formValidations/FormValidations";

import LoadingSpinner from "../structural/LoadingSpinner";
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
    width: 25ch;
  }
`;

const fields = [
  {
    name: "email",
    type: "text",
    placeholder: "Vanessa.Smith",
    decorText: "@livingspaces.com",
    validation: validateLsEmailPrefix,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
];

const SignUp = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const user = useContext(AuthContext); // might be able to remove this?

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      const { email, password, confirmPassword } = event.target.elements;

      const lsEmail = email.value + "@livingspaces.com";

      if (password.value !== confirmPassword.value) {
        setErrors({
          ...errors,
          confirmPassword: "Your password and confirmed password must match.",
        });
      } else {
        let res = await fetch(
          "https://us-central1-internal-intercom-app.cloudfunctions.net/findAdmin",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: lsEmail }),
          }
        );

        let data = await res.json();

        if (!data.userFound) {
          setErrors({ email: `${lsEmail} not registered with Intercom` });
          setLoading(false);
          return;
        }
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(lsEmail, password.value);
          await app.auth().currentUser.sendEmailVerification(); // I think this works...
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }
      setLoading(false);
    },
    [history]
  );

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1>Sign up</h1>
          <Form onSubmit={handleSignUp}>
            {fields.map((f, i) => (
              <TextField
                key={`TextField_${i}`}
                name={f.name}
                type={f.type}
                onKeyPress={f.validation ? f.validation : null}
                placeholder={f.placeholder}
                error={Boolean(errors[f.name])}
                helperText={errors[f.name] ? errors[f.name] : ""}
                InputProps={{
                  endAdornment: <InputAdornment>{f.decorText}</InputAdornment>,
                }}
              />
            ))}
            <Button color="primary" variant="contained" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      )}
      <IntercomDisclaimer />
    </Container>
  );
};

export default withRouter(SignUp);

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { Help } from "@material-ui/icons";

import ResponseView from "./ResponseView";
import HelpPopover from "./HelpPopover";
import LoadingSpinner from "../../structural/LoadingSpinner";
import {
  validateEmail,
  validateSkus,
  allowSkus,
  validateContactName,
} from "../../formValidations/FormValidations";

import { AuthContext } from "../../../Auth";

const PageContainer = styled.div`
  text-align: center;
  & > h2 {
    margin-bottom: 1.5rem;
  }
  & svg {
    display: inline-block;
    vertical-align: bottom;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  padding: 2rem;
  & > div {
    margin: auto;
    margin-bottom: 1.5rem;
    width: 35ch;
  }
  & pre {
    color: rgba(0, 0, 0, 0.5) !important;
  }
`;

const CustomButton = styled(Button)`
  width: 25ch;
  margin: auto !important;
`;

const SendEmailForm = ({ state, dispatch }) => {
  const [success, setSuccess] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const user = useContext(AuthContext);

  // on component mount, update the email with the one from the context store
  useEffect(() => {
    dispatch({ field: "fromEmail", value: user.currentUser.email });
  }, []);

  const clearForm = () => {
    dispatch({ field: "toEmail", value: "" });
    dispatch({ field: "skus", value: "" });
    dispatch({ field: "contactName", value: "" });
    dispatch({ field: "message", value: "" });
  };

  const removeTrailingComma = (e) => {
    const val = e.target.value;
    if (val.endsWith(",")) {
      const removedComma = val.substring(0, val.length - 1);
      dispatch({ field: "skus", value: removedComma });
    }
  };

  const handleBlur = async () => {
    // add form error if email isn't formatted correctly
    if (!validateEmail(state.toEmail)) {
      dispatch({
        field: "errors",
        value: { ...state.errors, toEmail: "Not a valid email" },
      });
      return;
    }
    // remove all toEmail errors if it passes validation
    dispatch({ field: "errors", value: { ...state.errors, toEmail: null } });

    setSubmitDisabled(true);
    try {
      const res = await fetch(
        "https://us-central1-internal-intercom-app.cloudfunctions.net/checkCreateUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: state.toEmail }),
        }
      );
    } catch (error) {
      console.log(error.message);
    }
    setSubmitDisabled(false);
  };

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
    // reset any errors on field change
    dispatch({
      field: "errors",
      value: { ...state.errors, [e.target.name]: null },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ field: "loading", value: true });

    // test validations here with state and return if invalid
    const skuValidationMessage = await validateSkus(state.skus);
    const toEmailMessage =
      !state.errors.toEmail && state.toEmail === ""
        ? "Must enter an email address"
        : state.errors.toEmail;
    const tempErrors = {
      toEmail: toEmailMessage,
      skus: skuValidationMessage,
    };
    dispatch({ field: "errors", value: tempErrors });

    // if any value in the temp errors object has a non-null value, don't allow submit and stop loading state
    if (Object.keys(tempErrors).some((k) => tempErrors[k])) {
      dispatch({ field: "loading", value: false });
      return;
    }

    const formatSkus = (skus) => {
      skus = JSON.stringify(skus.split(",").map((n) => parseInt(n)));
      return skus;
    };

    try {
      const postData = Object.assign({}, state); // need to do this to duplicate instead of referencing

      // format SKUs
      postData.skus = formatSkus(postData.skus);

      const res = await fetch(
        "https://us-central1-internal-intercom-app.cloudfunctions.net/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      res.status !== 200 ? setSuccess(false) : setSuccess(true);

      console.log(res);
    } catch (error) {
      setSuccess(false);
      console.error(error.message);
    }
    dispatch({ field: "loading", value: false });
    setSubmitted(true);
  };

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const { errors, fromEmail, toEmail, skus, contactName, message } = state;

  return state.loading ? (
    <LoadingSpinner />
  ) : (
    <PageContainer>
      <h2>
        Email a Customer <Help onClick={handleHelpClick} />
      </h2>
      {showHelp ? <HelpPopover displayModal={setShowHelp} /> : ""}
      <div>
        <Form
          className
          noValidate
          autoComplete="off"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <TextField
            value={fromEmail}
            disabled
            id="standard-basic"
            name="fromEmail"
            label="Your Email"
          />
          <TextField
            value={toEmail}
            onBlur={handleBlur}
            required
            helperText={errors.toEmail ? errors.toEmail : false}
            error={Boolean(errors.toEmail)}
            type="email"
            id="standard-basic"
            name="toEmail"
            label="Customer Email"
          />
          <TextField
            value={skus}
            onKeyPress={allowSkus}
            required
            helperText={errors.skus ? errors.skus : false}
            onBlur={removeTrailingComma}
            error={Boolean(errors.skus)}
            id="standard-basic"
            name="skus"
            label="SKUs (commma separated)"
          />
          <TextField
            value={contactName}
            onKeyPress={validateContactName}
            helperText={errors.contactName ? errors.contactName : false}
            error={Boolean(errors.contactName)}
            id="standard-basic"
            name="contactName"
            label="Customer Name (optional)"
            inputProps={{ maxLength: 50 }}
          />
          <TextField
            value={message}
            helperText={errors.message ? errors.message : false}
            error={Boolean(errors.message)}
            multiline
            rows={4}
            id="standard-basic"
            name="message"
            label="Message (optional, 300 characters max)"
            inputProps={{ maxLength: 300 }}
          />
          <CustomButton
            disabled={submitDisabled}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send an Email
          </CustomButton>
          {submitDisabled ? (
            <pre>Checking if contact exists/creating contact</pre>
          ) : (
            ""
          )}
        </Form>
      </div>

      {submitted ? (
        <ResponseView
          success={success}
          showModal={setSubmitted}
          clearForm={clearForm}
        />
      ) : (
        ""
      )}
    </PageContainer>
  );
};

export default SendEmailForm;

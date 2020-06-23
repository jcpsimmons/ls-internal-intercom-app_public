import React, { useReducer } from "react";
import styled from "styled-components";

import SendEmailForm from "./sendEmailApp/SendEmailForm";
import SendEmailPreviewContainer from "./sendEmailPreview/SendEmailPreviewContainer";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > * {
    flex-basis: calc(50% - 5rem);
    @media (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 2em;
    }
  }
`;

const initialState = {
  fromEmail: "",
  toEmail: "",
  skus: "",
  contactName: "",
  message: "",
  loading: false,
  errors: {},
};

function reducer(state, { field, value }) {
  return { ...state, [field]: value };
}

export default function SendEmailContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <SendEmailForm state={state} dispatch={dispatch} />
      <SendEmailPreviewContainer state={state} />
    </Container>
  );
}

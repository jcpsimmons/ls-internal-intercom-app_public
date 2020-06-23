import React from "react";
import styled from "styled-components";

import ToEmailChip from "./ToEmailChip";
import SendEmailPreview from "./SendEmailPreview";

const Container = styled.div`
  display: flex;
  flex-direction: column !important;
  & > * {
    margin-bottom: 1.5rem;
  }
`;

const DisclaimerText = styled.p`
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9em;
`;

export default function SendEmailPreviewContainer({ state }) {
  return (
    <Container>
      <h2>Preview</h2>
      {state.toEmail ? <ToEmailChip toEmail={state.toEmail} /> : ""}
      <SendEmailPreview state={state} />
      <DisclaimerText>
        Upon email send, placeholder items will be filled in with actual product
        names and prices. Actual email may vary in appearance.
      </DisclaimerText>
    </Container>
  );
}

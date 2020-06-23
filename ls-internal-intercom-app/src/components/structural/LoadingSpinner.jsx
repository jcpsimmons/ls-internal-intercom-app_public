import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  );
}

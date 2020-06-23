import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";

const PageContainer = styled.div`
  text-align: center;
`;

const CustomList = styled(List)`
  max-width: 50ch;
  margin: auto !important;
  background-color: white;

  & a {
    text-decoration: none;
  }
`;

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function AppDirectory() {
  return (
    <PageContainer>
      <h2>Application Directory</h2>
      <CustomList>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemLink href="sendEmail">
            <ListItemText primary="Email Customer" />
          </ListItemLink>
        </ListItem>
      </CustomList>
    </PageContainer>
  );
}

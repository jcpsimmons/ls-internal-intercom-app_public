import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";

const HelpDialogStyle = styled.div`
  & .exampleText > p {
    font-size: 0.8em;
    font-weight: bold;
    margin-right: 0.5em;
    margin-bottom: 0.25em;
  }
  & .exampleText > * {
    display: inline-block;
  }
  & h4 {
    border-top: 2px solid #bdbdbd;
    padding-top: 1em;
    margin-bottom: 0.25em;
  }
  & p {
    margin-top: 0.25em;
  }
  & pre {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
`;

const bodyText = [
  {
    title: "From Email",
    example: "max.verstappen@livingspaces.com",
    text:
      "This field will be prepopulated with the @livingspaces.com you signed in with.",
  },
  {
    title: "To Email",
    text:
      "The email address of the contact you want to send a message to. This form only accepts one email address",
    example: "lhamilton@aol.com",
  },
  {
    title: "SKUs",
    text: "Product SKUs separated by commas (no spaces).",
    example: "248786,251326,95022",
  },
  {
    title: "Contact Name",
    text: "Optional. The name of the contact you are emailing.",
  },
  {
    title: "Message",
    text:
      "Optional. A personal message to be included before the list of products in your email. Max 300 characters.",
  },
];

export default function HelpPopover({ displayModal }) {
  const closeModal = () => {
    displayModal(false);
  };

  return (
    <div>
      <Dialog
        onClose={closeModal}
        open={true}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          How to Use This Application
        </DialogTitle>
        <DialogContent>
          <HelpDialogStyle>
            <p>
              This application was designed for Living Spaces in-store staff to
              be able to email customers to follow up on a store meeting.
            </p>
            {bodyText.map((i, index) => {
              return (
                <div key={`bodyText_${index}`}>
                  <h4>{i.title}</h4>
                  {i.example ? (
                    <div className="exampleText">
                      <p>Example:</p>
                      <pre>{i.example}</pre>
                    </div>
                  ) : (
                    ""
                  )}
                  <p>{i.text}</p>
                </div>
              );
            })}
          </HelpDialogStyle>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

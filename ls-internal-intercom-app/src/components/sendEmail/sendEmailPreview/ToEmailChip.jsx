import React from "react";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

export default function ToEmailChip({ toEmail }) {
  return (
    <div>
      <Chip
        icon={<FaceIcon />}
        label={`To: ${toEmail}`}
        clickable
        color="primary"
      />
    </div>
  );
}

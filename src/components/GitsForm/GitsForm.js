import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const GitsForm = ({ onChageText, onButtonClick }) => {
  return (
    <Box className="form">
      <TextField label="Name" onChange={onChageText} />
      <Button onClick={onButtonClick}>Get Gits</Button>
    </Box>
  );
};

export default GitsForm;

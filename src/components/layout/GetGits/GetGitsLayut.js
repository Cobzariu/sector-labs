import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Input, TextField, Typography } from "@mui/material";
import api from "../../../api/api";
import GitList from "../../GitsList/GitsList";
import "./GetGitsLayout.css";

const GetGitsLayut = () => {
  const [input, setInput] = useState("");
  const [gitsList, setGitsList] = useState([]);
  return (
    <Box className="main">
      <Box className="form">
        <TextField
          label="Name"
          onChange={(elem) => {
            setInput(elem.target.value);
          }}
        />
        <Button
          onClick={async () => {
            const result = await api.getGits(input);
            setGitsList(result);
          }}
        >
          Get Gits
        </Button>
      </Box>
      <GitList data={gitsList} />
    </Box>
  );
};

export default GetGitsLayut;

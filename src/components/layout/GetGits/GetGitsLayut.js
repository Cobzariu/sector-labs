import React, { useState } from "react";
import { Box } from "@mui/system";

import api from "../../../api/api";
import GitList from "../../GitsList/GitsList";
import "./GetGitsLayout.css";
import GitsForm from "../../GitsForm/GitsForm";

const GetGitsLayut = () => {
  const [input, setInput] = useState("");
  const [gitsList, setGitsList] = useState([]);
  return (
    <Box className="main">
      <GitsForm
        input={input}
        onChageText={(elem) => {
          setInput(elem.target.value);
        }}
        onButtonClick={async (elem) => {
          const result = await api.getGits(input);
          setGitsList(result);
        }}
      />

      <GitList data={gitsList} />
    </Box>
  );
};

export default GetGitsLayut;

import React from "react";
import { Box } from "@mui/system";
import "./GitsList.css";
import GitsListItem from "../GitsListItem/GitsListItem";

const GitsList = ({ data }) => {
  return (
    <Box className="list">
      {data.map((gits, index) => (
        <GitsListItem gits={gits} key={index} />
      ))}
    </Box>
  );
};

export default GitsList;

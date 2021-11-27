import React, { useEffect } from "react";
import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./GitsList.css";
import api from "../../api/api";
import GitsListItem from "../GitsListItem/GitsListItem";

const GitsList = ({ data }) => {
  return (
    <Box className="list">
      {data.map((gits, index) => (
        <GitsListItem gits={gits} />
      ))}
    </Box>
  );
};

export default GitsList;

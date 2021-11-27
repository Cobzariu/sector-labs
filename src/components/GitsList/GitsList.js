import React from "react";
import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./GitsList.css";

const GitsList = ({ data }) => {
  const getFiles = (files) => {
    const filesArray = Object.keys(files).map((file) => files[file]);
    return filesArray.map((file) => (
      <Box className="file">
        <Link href={file.raw_url}>{file.filename} </Link>
        <span className="language">{file.language}</span>
      </Box>
    ));
  };
  return (
    <Box className="list">
      {data.map((gits, index) => (
        <Box className="item">
          {/* <Typography>Gits number {index} </Typography> */}
          {/* <Typography>{gits.comments}</Typography> */}
          {getFiles(gits.files)}
        </Box>
      ))}
    </Box>
  );
};

export default GitsList;

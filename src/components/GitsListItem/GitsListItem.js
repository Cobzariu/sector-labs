import React, { useEffect, useState } from "react";
import { Avatar, Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./GitsListItem.css";
import api from "../../api/api";

const GitsListItem = ({ gits }) => {
  const [forks, setForks] = useState([]);
  async function getForks() {
    const response = await api.getForks(gits.forks_url);
    setForks(response);
  }

  useEffect(() => {
    getForks();
  }, []);

  const renderFiles = (files) => {
    const filesArray = Object.keys(files).map((file) => files[file]);
    return filesArray.map((file) => (
      <Box className="file">
        <Link href={file.raw_url}>{file.filename} </Link>
        {file.language !== null ? (
          <span className="language">{file.language}</span>
        ) : null}
      </Box>
    ));
  };
  const renderForks = () => {
    return forks.map((fork) => (
      <Box className="fork">
        <Avatar src={fork.owner.avatar_url} />
        {fork.owner.login}
      </Box>
    ));
  };
  return (
    <Box className="item">
      <Box className="filesBox"> {renderFiles(gits.files)}</Box>
      {forks.length > 0 ? (
        <Box className="forkBox">Forkey by {renderForks()}</Box>
      ) : null}
    </Box>
  );
};

export default GitsListItem;

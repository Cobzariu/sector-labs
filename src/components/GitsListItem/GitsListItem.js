import React, { useEffect, useState } from "react";
import { Avatar, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./GitsListItem.css";
import api from "../../api/api";

const GitsListItem = ({ gits }) => {
  const [forks, setForks] = useState([]);
  async function getForks() {
    const response = await api.getForks(gits.forks_url);
    const filteredResponse = response
      .sort(function (a, b) {
        var d1 = new Date(a.created_at);
        var d2 = new Date(b.created_at);
        if (d1 < d2) return 1;
        else return -1;
      })
      .slice(0, 3);
    setForks(filteredResponse);
  }

  useEffect(() => {
    getForks();
  }, []);

  const renderFiles = (files) => {
    const filesArray = Object.keys(files).map((file) => files[file]);
    return filesArray.map((file, index) => (
      <Box className="file" key={index}>
        <Link href={file.raw_url} target="_blank">
          {file.filename}
        </Link>
        {file.language !== null ? (
          <span className="language">{file.language}</span>
        ) : null}
      </Box>
    ));
  };
  const renderForks = () => {
    return forks.map((fork, index) => (
      <Box className="fork" key={index}>
        <Avatar src={fork.owner.avatar_url} />
        <Box className="forkOwnerBox">{fork.owner.login}</Box>
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

import React from 'react';
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const MainHeader = () => {
  return (
    <AppBar position="static" style={{backgroundColor:"rgb(31, 160, 246)"}}>
      <Toolbar>
        <Typography variant="h6" style={{fontWeight:"bold"}}>TECHNOTE</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;

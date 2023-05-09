import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
const Nav=styled(AppBar)`
background-color:`
const MainHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">DIGINOTE</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;

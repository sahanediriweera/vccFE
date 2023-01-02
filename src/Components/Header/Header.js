import * as React from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { connect } from "react-redux";

function Header({isAuthenticated}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color ="CaptionText">
            COVID-19 VACCINATION MANAGEMENT SYSTEM 
          </Typography>
          {isAuthenticated? <> <Button color="inherit">Log Out</Button></>: <>          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button></>}

        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => ({
 isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {
})(Header);



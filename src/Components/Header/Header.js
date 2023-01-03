import * as React from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { connect } from "react-redux";

import { logOut } from '../../redux/auth/auth.actions';
import { Link } from 'react-router-dom';

function Header({isAuthenticated, logOut}) {

  const onChange = ()=> {
    logOut();
  }

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
          {isAuthenticated? <> <Button onClick={onChange} color="inherit">Log Out</Button></>:     
          <>   <Link to={"/login"}>
                < Button  color="inherit">
            Login </Button>
            </Link> 
            <Link to={"register"}> <Button color="inherit">Sign Up</Button></Link>
          </>}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => ({
 isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {
  logOut
})(Header);



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';


export const NavBar = () => {
  let pages = ['home','login','register'];
  const { loggedIn_user } = useSelector((state)=>state.entity);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const Navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(()=>{
    if(loggedIn_user['user_type'] === "user"){
      pages.push('pet details')
    }
  },[])

  return (
    <AppBar 
    style={{backgroundColor:"#0066b2"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography onClick={()=>{
                      
                      Navigate(`/${(page === "home")?"":page}`)
                  }} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {(loggedIn_user['user_type'] === "user")?
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={()=>{

                    // Navigate(`/${(page === "home")?"":page}`)
                }} textAlign="center">Pet Details
                </Typography>
              </MenuItem>:""}

              {(loggedIn_user['user_type'] === 'admin')?
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography onClick={()=>{
                Navigate('/create')
              }} textAlign="center">Pet Details
              </Typography>
            </MenuItem>:""}

            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{
                  Navigate(`/${(page === "home")?"":page}`)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            {(loggedIn_user['user_type'] === "user")?
              <Button onClick={()=>{
                Navigate("/pet")
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Pet Details
              </Button>:""}
            
              {(loggedIn_user['user_type'] === 'admin')?
                <Button onClick={()=>{
                  Navigate("/create")
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Create
                </Button>:""}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
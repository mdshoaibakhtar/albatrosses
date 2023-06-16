import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Blog'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const openSideOption = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const changeTab = (page) => {
    if(page === "Products"){
        navigate("/products")
    } 
    if(page === "Blog"){
        navigate("/blog")
    }
  };
  const chooseSideBarOption = (page) => {
    if(page === "Profile"){
        navigate("/profile")
    }
    setAnchorElUser(false)
  };

  return (
    <AppBar position="static" id="navbar" style={{backgroundColor:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="/" sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} > 
            Falcons
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={(e) => changeTab(page)} sx={{ my: 2, color: 'white', display: 'block' }}>{page}</Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={openSideOption} sx={{ p: 0 }}>
                <EmojiEmotionsSharpIcon style={{fill:"white", width:"2em", height:"2em"}}/>
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right'}} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} open={Boolean(anchorElUser)} onClose={chooseSideBarOption}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={(e) => chooseSideBarOption(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
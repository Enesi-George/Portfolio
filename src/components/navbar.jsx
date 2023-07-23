import * as React from 'react';
import './navbar.css';
import { CSSTransition } from 'react-transition-group';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <CSSTransition
    in={isMounted}
    timeout={500}
    classNames="slide-down"
    unmountOnExit>
    <AppBar 
    className="fixed-navbar"
    position="fixed" 
    sx={{
        bgcolor:'white',
        color:'black'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
           padding:'0px 78px'
        }}>
          <Typography sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >  
            <img src='src\logos\portfolio.png' 
            width={40} 
            height={30}
            />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="src/logos/portfolio.png"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontStyle:'italic',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            George
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#D3D3D3"
              sx={{
                border:'2px solid #D3D3D3', 
                borderRadius:2,
                margin:'0px 0px 0px -78px',
                padding:'4px 10px'
                
               }}
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
              }}>
                <Box sx={{
                  display:'flex',
                  flexDirection:'column',
                  margin:'20px 0px',
                  gap:'20px'
                }}>
                  <Link className='link' style={{my:'20px', borderBottom:'2px solid #D3D3D3'}} to='/'>Home</Link>
                  <Link className='link' style={{my:'20px', borderBottom:'2px solid #D3D3D3'}} to='/about'>About</Link>
                  <Link className='link' style={{my:'20px', borderBottom:'2px solid #D3D3D3'}} to='/skill'>Skill</Link>
                  <Link className='link' style={{my:'20px', borderBottom:'2px solid #D3D3D3'}} to='/work-expeience'>Work-experience</Link>
                  <Link className='link' style={{my:'20px', borderBottom:'2px solid #D3D3D3'}} to='/project'>Project</Link>
                  <Link className='link' style={{my:'20px', borderBottom:'2px solid #D3D3D3'}} to='/contact'>Contact</Link> 
                </Box>
               
            </Menu>
          </Box>
          <Typography sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >  
            <img src='' 
            width={40} 
            height={30}
            />
          </Typography>
          <Typography
            variant="italic"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontSize:'20px',
              fontWeight: 700,
              fontStyle:'italic',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            George
          </Typography>
   
          <Box 
          sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent:'right',
          
            }}>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/skill'>Skill</Link>
          <Link className='link' to='/work-expeience'>Work-experience</Link>
          <Link className='link' to='/project'>Project</Link>
          <Link className='link' to='/contact'>Contact</Link>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    </CSSTransition>

  );
}
export default ResponsiveAppBar;
import React from 'react';
import './framerMotion.css';
import { styled, useTheme } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, Box, Paper, IconButton, Tooltip, Button, Grid } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom';
import MyProfileaImage from '../logos/facedeep.jpg';



const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  border:'0px',
  marginTop:'120px'
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: theme.spacing(4),
  },
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  borderRadius:'0px!important',
  boxShadow:'none'
}));

const Media = styled(CardMedia)(({ theme }) => ({
  margin: 'auto',
  width: '300px',
  height: '300px',
  border: '10px solid #E41B17',
  borderRadius: '50%',
  [theme.breakpoints.down('sm')]: {
    // marginRight: theme.spacing(0),
    width: '200px',
    height: '200px',
  },
  [theme.breakpoints.up('lg')]: {
    marginRight: theme.spacing(20),
    width: '400px',
    height: '400px',
  },
  opacity: 0.8,
}));

const Content = styled(CardContent)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
    marginLeft: 20,
  },
  [theme.breakpoints.up('lg')]: {
    // marginLeft: 80,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  border: 0,
  boxShadow: 'none',
  textAlign: 'left',
  color: 'black',
  fontWeight: 600,
  fontSize: '55px',
  marginTop: '0px',
}));

const HomePage = () => {
  const theme = useTheme();

  return (
    
    <Wrapper className="fade-in-y">
      <CardContainer>
        <Grid container>
        <Grid item xs={12} md={6}>
            <Media
              component="img"
              src={MyProfileaImage} 
              alt="Card Image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Content>
              <Typography variant="h2" sx={{ fontWeight: 500 }}> Hi There</Typography>
              <Typography variant="h2" sx={{ fontWeight: 500 }}> i'm George Enesi</Typography>
              <Typography variant='h6'>I Am a Software Developer</Typography>
              <Typography variant='h6'>and Marine Engineer</Typography>
              <Item>
                <Button
                component={Link}
                to="/about"
                  sx={{
                    textTransform: 'capitalize',
                    px: 3,
                    color: 'white',
                    borderRadius: '30px',
                    bgcolor: '#022F8E',
                    fontSize: 16,
                    boxShadow: '1px 4px 10px #000437',
                    '&:hover': {
                      bgcolor: '#022F8E',
                      opacity: 0.9,
                    },
                  }}>
                  About me <ArrowCircleDownIcon sx={{ fontSize: '17px', pl: 1 }} />
                </Button>
              </Item>
              <Item>
                <Tooltip title="LinkedIn">
                  <IconButton target="blank" href="https://www.linkedin.com/in/enesi-george-mariner/" sx={{ borderRadius: '50%', backgroundColor: 'black', marginRight: '15px' }}>
                    <LinkedInIcon sx={{ color: '#0AC9FF' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton 
                  target="blank" 
                  href="https://github.com/Enesi-George?tab=repositories" 
                  sx={{ 
                    borderRadius: '50%', 
                    backgroundColor: 'black', 
                    marginRight: '15px' }}>
                    <GitHubIcon sx={{ color: '#0AC9FF' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Twitter">
                  <IconButton 
                 target="blank" 
                 href="https://twitter.com/EnesiGeorge1" 
                 sx={{ 
                   borderRadius: '50%', 
                   backgroundColor: 'black', 
                   marginRight: '15px' }}>
                    <TwitterIcon sx={{ color: '#0AC9FF' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="georgeenesi81@gmail.com">
                  <IconButton sx={{ borderRadius: '50%', backgroundColor: 'black', marginRight: '15px' }}>
                    <EmailIcon sx={{ color: '#0AC9FF' }} />
                  </IconButton>
                </Tooltip>
              </Item>
            </Content>
          </Grid>

        </Grid>
      </CardContainer>
    </Wrapper>
  );
};

export default HomePage;

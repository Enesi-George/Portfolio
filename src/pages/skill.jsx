import React from 'react';
import './framerMotion.css';
import { styled } from '@mui/system';
import { Card, CardMedia, Typography, Box, Grid } from '@mui/material';
import JavascriptLogo from '../logos/js.jpeg';
import PythonLogo from '../logos/python.jpeg';
import MERNLogo from '../logos/mern.png';
import DjangoLogo from '../logos/django.png';
import GitLogo from '../logos/git and github.webp';
import HtmlIcon from '../logos/html5.png';
import CSSIcon from '../logos/CSS3.png';
import MuiIcon from '../logos/mui.png';
import bootstrapIcon from '../logos/bootstrap.png';



const Wrapper = styled('div')({
  padding: '0px 16px',
  marginTop: '40px',
});

const LanguageCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const LanguageLogo = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: '100px',
  backgroundColor: '#ffffff',
  margin: '0 auto 16px',
  objectFit: 'contain',
}));
const LanguageName = styled(Typography)({
  textAlign: 'center',
});

const Skill = () => {
  return (
    <Box 
    
    sx={{
      padding: '0px 102px',
      marginTop:'120px'
    }}>
      
      <Box 
      className="rotate"
      sx={{
        display:"flex",
        justifyContent:'center',
        bgcolor:'white',
        p:1,
        borderRadius:'40px',
        boxShadow:'2px 2px 5px #d3d3d3'
        }}>
          <Typography 
          color="black" 
          variant component ='h2'
          xs={12}
          
          > 
          Skills
          </Typography>
      </Box>

      <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={JavascriptLogo} alt="Javascript" />
            <LanguageName variant="h6">JavaScript</LanguageName>
            <LanguageName component='Typography'>Experience: 3yrs</LanguageName>
          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={PythonLogo} alt="Python" />
            <LanguageName variant="h6">Python</LanguageName>
            <LanguageName component='Typography'>Experience: 2yrs</LanguageName>

          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={MERNLogo} alt="Mern" />
            <LanguageName variant="h6">MERN</LanguageName>
            <LanguageName component='Typography'>Experience: 1.5yrs</LanguageName>
          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={DjangoLogo} alt="Django"/>
            <LanguageName variant="h6">Django</LanguageName>
            <LanguageName component='Typography'>Experience: 2yrs</LanguageName>

          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={GitLogo} alt="Git_and_Github"  />
            <LanguageName variant="h6">Git and GitHub</LanguageName>
            <LanguageName component='Typography'>Experience: 2yrs</LanguageName>

          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={HtmlIcon} alt="Html" />
            <LanguageName variant="h6">Html</LanguageName>
            <LanguageName component='Typography'>Experience: 3yrs</LanguageName>

          </LanguageCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={CSSIcon} alt="CSS"/>
            <LanguageName variant="h6">CSS</LanguageName>
            <LanguageName component='Typography'>Experience: 3yrs</LanguageName>

          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={bootstrapIcon} alt="bootstrap"/>
            <LanguageName variant="h6">Bootstrap5</LanguageName>
            <LanguageName component='Typography'>Experience: 3yrs</LanguageName>

          </LanguageCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={MuiIcon} alt="material_UI"/>
            <LanguageName variant="h6">MUI</LanguageName>
            <LanguageName component='Typography'>Experience: 2yrs</LanguageName>

          </LanguageCard>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}>
          <LanguageCard>
            <LanguageLogo component="img" image={HtmlIcon} alt="Html"/>
            <LanguageName variant="h6">Html</LanguageName>
          </LanguageCard>
        </Grid> */}
        {/* Add other cards for more languages */}
      </Grid>
    </Wrapper>

    </Box>

  );
};

export default Skill;

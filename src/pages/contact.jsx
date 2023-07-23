import * as React from 'react';
import './project.css';
import './framerMotion.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box, Divider, Grid, Link, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import {Link as RouterBtn} from 'react-router-dom';


export default function Project() {
  return (
    <Box
      className="fade-in-y"
      sx={{
        margin: '100px 24px',
        color: 'black',
      }}
    >
      <Divider 
      color="black" 
      variant 
      component="h2"
      textAlign='center' >
        Contact
      </Divider>
      <List
        sx={{
          width: '100%',
          maxWidth: 900,
          bgcolor: 'transparent',
          color: 'black',
        }}
      >
        <Grid item xs={12} sx={{ margin: '20px 0px' }}>
          <ListItem
          className ='link'>
          <IconButton 
          sx={{ 
          borderRadius: '50%', 
          backgroundColor: 'black', 
          marginRight: '15px' 
          }}>
              <RingVolumeIcon sx={{ color: '#0AC9FF' }} />
        </IconButton>
          <Typography component='span' variant >+2348164165724, +2349027420668</Typography>
          </ListItem>
        </Grid>

        <Grid item xs={12} sx={{ margin: '20px 0px' }}>
          <ListItem
          className ='link'>
          <IconButton 
          sx={{ 
          borderRadius: '50%', 
          backgroundColor: 'black', 
          marginRight: '15px' 
          }}>
            <EmailIcon sx={{ color: '#0AC9FF' }} />
        </IconButton>
          <Typography component='span' variant >georgeenesi81@gmail.com</Typography>
          </ListItem>
        </Grid>

        <Grid item xs={12} sx={{ margin: '20px 0px' }}>
          <ListItem
          className ='link'
          component={RouterBtn}
          target='blank'
          to='https://www.linkedin.com/in/enesi-george-mariner/'>
          <IconButton 
          sx={{ 
          borderRadius: '50%', 
          backgroundColor: 'black', 
          marginRight: '15px' 
          }}>
              <LinkedInIcon sx={{ color: '#0AC9FF' }} />
        </IconButton>
          <Typography component='span' variant >LinkedIn</Typography>
          </ListItem>
        </Grid>

        <Grid item xs={12} sx={{ margin: '20px 0px' }}>
          <ListItem
          className ='link'
          component={RouterBtn}
          target='blank'
          to='https://github.com/Enesi-George?tab=repositories'>
          <IconButton 
          sx={{ 
          borderRadius: '50%', 
          backgroundColor: 'black', 
          marginRight: '15px' 
          }}>
              <GitHubIcon sx={{ color: '#0AC9FF' }} />
        </IconButton>
          <Typography component='span' variant >GitHub</Typography>
          </ListItem>
        </Grid>

        <Grid item xs={12} sx={{ margin: '20px 0px' }}>
          <ListItem
          className ='link'
          component={RouterBtn}
          target='blank'
          to='https://twitter.com/EnesiGeorge1'>
          <IconButton 
          sx={{ 
          borderRadius: '50%', 
          backgroundColor: 'black', 
          marginRight: '15px' 
          }}>
              <TwitterIcon sx={{ color: '#0AC9FF' }} />
        </IconButton>
          <Typography component='span' variant > Twitter</Typography>
          </ListItem>
        </Grid>





 
      </List>
    </Box>
  );
}

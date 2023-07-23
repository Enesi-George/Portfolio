import React from 'react';
import './project.css';
import './framerMotion.css';
import { styled, useTheme } from '@mui/system';
import { Box, Divider, Grid, IconButton, Link, Paper, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import RingVolumeIcon from '@mui/icons-material/RingVolume';


const Item = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textAlign: 'left',
    padding: '20px 16px', // Adjust padding for smaller devices
    color: 'black',
    fontWeight: 600,
    fontSize: '20px', // Adjust font size for smaller devices
    gap: '10px' // Adjust gap between elements for smaller devices
  }));

const Contact = () => {
  return (
    <Box
    className="scale-up"
    sx={{
        display: 'flex',
        justifyContent: 'left',
        marginTop: '20px', // Adjust margin for smaller devices
        color: 'black',
        bgcolor: 'transparent'
    }}>
      
      <Grid item xs={12} sm={12} md={8} lg={6}> {/* Adjust Grid item size for different screen sizes */}
        <Item>
          <Divider 
            variant='h6' 
            component={'h6'}
            textAlign="left"
          >
            Contact
          </Divider>
          <Link className='link'>
            <IconButton sx={{ 
              borderRadius: '50%', 
              backgroundColor: 'black', 
              marginRight: '15px',
            }}>
              <RingVolumeIcon sx={{ color: '#0AC9FF' }} />
            </IconButton> 
            <Typography 
              variant
              component='span'
            >
              +2348164165724, +2349027420668
            </Typography>
          </Link>
          <Link className='link'>
            <IconButton sx={{ 
              borderRadius: '50%', 
              backgroundColor: 'black', 
              marginRight: '15px' 
            }}>
              <EmailIcon sx={{ color: '#0AC9FF' }} />
            </IconButton>
            <Typography
              variant 
              component='span'
            >
              georgeenesi81@gmail.com
            </Typography>                  
          </Link>
          <Link className='link' target='blank' href='https://www.linkedin.com/in/enesi-george-mariner/'>
            <IconButton sx={{ 
              borderRadius: '50%', 
              backgroundColor: 'black', 
              marginRight: '15px' 
            }}>
              <LinkedInIcon sx={{ color: '#0AC9FF' }} />
            </IconButton>
            <Typography
              variant 
              component='span'
            >
              linkedin.com/in/enesi-george-mariner
            </Typography>
          </Link>
          <Link 
            className='link' 
            target='blank' 
            href='https://github.com/Enesi-George?tab=repositories'
          >
            <IconButton sx={{ 
              borderRadius: '50%', 
              backgroundColor: 'black', 
              marginRight: '15px' 
            }}
            >
              <GitHubIcon sx={{ color: '#0AC9FF' }} />
            </IconButton>
            <Typography 
              variant
              component='span'
            >
              @Enesi-George                    
            </Typography>
          </Link>
          <Link  
            className='link' 
            target='blank' 
            href="https://twitter.com/EnesiGeorge1"
          >
            <IconButton sx={{ 
              borderRadius: '50%', 
              backgroundColor: 'black', 
              marginRight: '15px' 
            }}>
              <TwitterIcon sx={{ color: '#0AC9FF' }} />
            </IconButton>
            <Typography 
              variant
              component='span'
            >
              @EnesiGeorge1                  
            </Typography>
          </Link>
        </Item>
      </Grid>
    </Box>
  )
}

export default Contact

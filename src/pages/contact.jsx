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
    display:'flex',
    flexDirection:'column',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textAlign: 'left',
    padding:'60px 102px',
    color: 'black',
    fontWeight: 600,
    fontSize: '55px',
    gap:'20px'
  }));

const Contact = () => {
  return (
    <Box
    className="scale-up"
    sx={{
        display:'flex',
        justifyContent:'left',
        marginTop:'50px',
        color:'black',
        bgcolor:'transparent'
    }}>
      
      <Grid item xs={12} >

      <Item>
      <Divider 
            variant='h6' 
            component={'h6'}
            textAlign="left">
               Contact
            </Divider>
      <Link className='link' >
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
                  sx={{
                    fontSize:'15px'
                  }}
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
                  sx={{
                    fontSize:'15px'
                  }}>
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
                  sx={{
                    fontSize:'15px'
                  }}>
                    linkedin.com/in/enesi-george-mariner
                    
                  </Typography>

                </Link>
                <Link 
                  className='link' target='blank'
                  href='https://github.com/Enesi-George?tab=repositories'>
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
                  sx={{
                    fontSize:'15px'
                  }}>
                    @Enesi-George                    
                  </Typography>
                </Link>
                <Link  
                className='link' 
                target='blank' 
                href="https://twitter.com/EnesiGeorge1">
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
                  sx={{
                    fontSize:'15px'
                  }}>
                    @EnesiGeorge1                  
                  </Typography>
                </Link>

    </Item>
      </Grid>
    </Box>
  )
}

export default Contact

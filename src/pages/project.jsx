import * as React from 'react';
import './project.css';
import './framerMotion.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Project() {


  return (
    <Box 
    className="fade-in-y"
    sx={{
      margin:'120px 102px',
      color:'black'
      }}>
        <Divider
          color="black" 
          variant component ='h2'
          xs={12}>
          Projects
      </Divider>
      <List
      sx={{ 
        width: '100%', 
        maxWidth: 900,
        bgcolor: 'transparent', 
        color:'black' 
      }}
    >

<Grid xs={12} sx={{margin:'20px 0px'}}>
      <ListItem  xs={12}>
        <ListItemIcon sx={{ mr:-2 }}>
          <FolderSharedIcon sx={{ color: '#0AC9FF' }}  />
        </ListItemIcon>
        <Typography 
        variant='h6'
        component={'h2'}>
          Airbnb Cloning Assessment

        </Typography>
      </ListItem>
           <ListItem sx={{ pl: 7, mt:-2 }}>
            <ListItemIcon sx={{mr:-6}}>
              <LaunchIcon fontSize='small' sx={{ color: '#0AC9FF' }}  />
            </ListItemIcon>
            <Link className='link' target='blank' href='https://64ad433dec9502008918aa31--friendly-genie-09a8d8.netlify.app/'>Landing page of an Airbnb</Link>
          </ListItem>
          <Divider >
        <SchoolOutlinedIcon sx={{ fontSize: 17, color:'text.disabled' }}/>
      </Divider>
      </Grid>
 
      <Grid xs={12} sx={{margin:'20px 0px', }}>
      <ListItem  xs={12}>
        <ListItemIcon sx={{ mr:-2 }}>
          <FolderSharedIcon sx={{ color: '#0AC9FF' }}  />
        </ListItemIcon>
        <Typography 
        variant='h6'
        component={'h2'}>
          Hotel and Suites Accomodation webpage service
        </Typography>
      </ListItem>
           <ListItem sx={{ pl: 7, mt:-2 }}>
            <ListItemIcon sx={{mr:-6}}>
              <LaunchIcon fontSize='small' sx={{ color: '#0AC9FF' }}  />
            </ListItemIcon>
            <Link className='link' target='blank' href='https://github.com/Enesi-George/Hotel-and-Suites-Accomodation-webpage-service'>
              Developing a UI And implementing booking and payment integration using paystack api
            </Link>
          </ListItem>
          <Divider >
        <SchoolOutlinedIcon sx={{ fontSize: 17, color:'text.disabled' }}/>
      </Divider>
      </Grid>
      <Grid xs={12} sx={{margin:'20px 0px'}}>
      <ListItem  xs={12}>
        <ListItemIcon sx={{ mr:-2 }}>
          <FolderSharedIcon sx={{ color: '#0AC9FF' }}  />
        </ListItemIcon>
        <Typography 
        variant='h6'
        component={'h2'}>
          React Redux Implentation

        </Typography>
      </ListItem>
           <ListItem sx={{ pl: 7, mt:-2 }}>
            <ListItemIcon sx={{mr:-6}}>
              <LaunchIcon fontSize='small' sx={{ color: '#0AC9FF' }}  />
            </ListItemIcon>
            <Link className='link' target='blank' href='https://github.com/Enesi-George/React-redux-resuable-code'>
              writing react redux reusable, consuming using github  users api for testing
            </Link>
          </ListItem>
          <Divider >
        <SchoolOutlinedIcon sx={{ fontSize: 17, color:'text.disabled' }}/>
      </Divider>
      </Grid>
      <Grid xs={12} sx={{margin:'20px 0px'}}>
      <ListItem  xs={12}>
        <ListItemIcon sx={{ mr:-2 }}>
          <FolderSharedIcon sx={{ color: '#0AC9FF' }}  />
        </ListItemIcon>
        <Typography 
        variant='h6'
        component={'h2'}>
          MERN STACK for an e-shop 

        </Typography>
      </ListItem>
           <ListItem sx={{ pl: 7, mt:-2 }}>
            <ListItemIcon sx={{mr:-6}}>
              <LaunchIcon fontSize='small' sx={{ color: '#0AC9FF' }}  />
            </ListItemIcon>
            <Link className='link' target='blank' href='https://github.com/Enesi-George/MERN-DEVELOPMENT-FOR-AN-E-SHOP-BACKEND-'>
              MERN development for a e-commerce website
            </Link>
          </ListItem>
          <Divider >
        <SchoolOutlinedIcon sx={{ fontSize: 17, color:'text.disabled' }}/>
      </Divider>
      </Grid>
      <Grid xs={12} sx={{margin:'20px 0px'}}>
      <ListItem  xs={12}>
        <ListItemIcon sx={{ mr:-2 }}>
          <FolderSharedIcon sx={{ color: '#0AC9FF' }}  />
        </ListItemIcon>
        <Typography 
        variant='h6'
        component={'h2'}>
          DJANGO E-commerce

        </Typography>
      </ListItem>
           <ListItem sx={{ pl: 7, mt:-2 }}>
            <ListItemIcon sx={{mr:-6}}>
              <LaunchIcon fontSize='small' sx={{ color: '#0AC9FF' }}  />
            </ListItemIcon>
            <Link className='link' target='blank' href='https://github.com/Enesi-George/E-commerce'>
              Developing a fullstack eshop website with Django, Javascripts and Boostrap5
            </Link>
          </ListItem>
          <Divider >
        <SchoolOutlinedIcon sx={{ fontSize: 17, color:'text.disabled' }}/>
      </Divider>
      </Grid>


 

     
    </List>
    </Box>

  );
}
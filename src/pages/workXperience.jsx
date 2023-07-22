import React from 'react';
import './framerMotion.css';
import { Box, Divider, Grid, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


const WorkXperience = () => {
  return (
    <Box 
    className="slide-in-right"
    sx={{
        border:'1px solid #d3d3d3',
        margin:'120px 102px',
        bgcolor:'white',
        padding:'30px 50px',
        color:'black',
        borderRadius:'20px'      
    }}>
          <Divider
          color="black" 
          variant component ='h2'
          xs={12}>
          Work Experience
      </Divider>

      <Grid 
      container 
      spacing={6}
      sx={{
        mt:2
      }}
      >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box 
          sx={{
            lineHeight: '30px',
            
          }}>
              <Typography variant component={'h2'}>
                FullStack Web Developer 
              </Typography>
              <Box>
              <Typography> Telnet Nigeria Limited</Typography>
              <Typography variant component='i' >Lagos, Nigeria </Typography>
              <Typography 
              gap={1} 
              sx={{
                display:'flex', 
                flexDirection:'row',
                fontSize:'13px',
                mt:1
                }} > 
              <AccessTimeIcon sx={{ fontSize: 17 }} /> Aug,19 - Current 
              </Typography>
              </Box>
        </Box>
        <Divider> 
          <WorkspacesIcon sx={{ fontSize: 17, color:'text.disabled' }}/>    
        </Divider>
        </Grid>    
      <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box 
          sx={{
            lineHeight: '30px',
            
          }}>
              <Typography variant component={'h2'}>
                Marine Engineering Technician 
              </Typography>
              <Box>
              <Typography> ODMEC Nigeria Limited</Typography>
              <Typography variant component='i' >Lagos, Nigeria </Typography>
              <Typography 
              gap={1} 
              sx={{
                display:'flex', 
                flexDirection:'row',
                fontSize:'13px',
                mt:1
                }} > 
              <AccessTimeIcon sx={{ fontSize: 17 }} /> Mar,13 - May,19 
              </Typography>
              </Box>
        </Box>
        <Divider> 
          <WorkspacesIcon sx={{ fontSize: 17, color:'text.disabled' }}/>    
        </Divider>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box 
          sx={{
            lineHeight: '30px',
            
          }}>
              <Typography variant component={'h2'}>
                Production Machine Operator 
              </Typography>
              <Box>
              <Typography> Pure-Chem Manufactoring NIG LTD</Typography>
              <Typography variant component='i' >Ogun, Nigeria </Typography>
              <Typography 
              gap={1} 
              sx={{
                display:'flex', 
                flexDirection:'row',
                fontSize:'13px',
                mt:1
                }} > 
              <AccessTimeIcon sx={{ fontSize: 17 }} /> Feb,14 - Oct,15 
              </Typography>
              </Box>
        </Box>
        <Divider> 
          <WorkspacesIcon sx={{ fontSize: 17, color:'text.disabled' }}/>    
        </Divider>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box 
          sx={{
            lineHeight: '30px',
            
          }}>
              <Typography variant component={'h2'}>
                Pardee Food NIG LTD 
              </Typography>
              <Box>
              <Typography> Telnet Nigeria Limited</Typography>
              <Typography variant component='i' >Ogun, Nigeria </Typography>
              <Typography 
              gap={1} 
              sx={{
                display:'flex', 
                flexDirection:'row',
                fontSize:'13px',
                mt:1
                }} > 
              <AccessTimeIcon sx={{ fontSize: 17 }} /> Mar,13 - Jan,14 
              </Typography>
              </Box>
        </Box>
        <Divider> 
          <WorkspacesIcon sx={{ fontSize: 17, color:'text.disabled' }}/>    
        </Divider>

        </Grid>
    </Grid>
    </Box>
  )
}

export default WorkXperience

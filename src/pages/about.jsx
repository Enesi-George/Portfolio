import React from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import './framerMotion.css';

const About = () => {
  return (
    <Box
      className="scale-up"
      sx={{
        color: 'black',
        padding: '20px', 
        margin:'100px 24px',

      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Box
            sx={{
              bgcolor: 'white',
              padding: '30px',
              borderRadius: '40px',
              boxShadow: '1px 1px 5px #d3d3d3',
            }}
          >
            <Divider
              variant="h6"
              component="h1"
              textAlign="left"
            >
              About me
            </Divider>
            <Typography
              variant="h6"
              sx={{
                marginTop: '20px',
                lineHeight: '1.6', 
              }}
            >
              I am a versatile and dedicated professional, proficient in both Fullstack Development and Marine Engineering. With a passion for innovation and problem-solving, I excel in delivering exceptional results. As a Fullstack Developer, I am skilled in frontend technologies like HTML, CSS, and JavaScript, and backend languages like Node.js and Python. As a Marine Engineer, I specialize in solving technological problems, bringing innovative technology into the marine engineering society and the marine industry at large.
              <br />
              My commitment to excellence and adaptability allows me to thrive in diverse environments, making me a valuable asset to any team. I am eager to contribute my skills and passion to your company and its ongoing success.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

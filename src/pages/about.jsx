import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import './framerMotion.css';


const About = () => {
  return (
    <Box
    className="scale-up"
    sx={{
        color:'black',
        padding:'0px 102px',
        marginTop:'120px',
    }}>
        <Box sx={{
            bgcolor:'white',
            padding:'60px 55px',
            borderRadius:'40px',
            boxShadow:'1px 1px 5px #d3d3d3'

        }}>
            <Divider 
            variant='h6' 
            component={'h1'}
            textAlign="left">
                About me
            </Divider>
            <Typography 
            variant='h6'
            sx={{
                marginTop:'20px',
                lineHeight:'40px'
            }}>I am a versatile and dedicated professional, 
            proficient in both Fullstack Development and Marine Engineering. 
            With a passion for innovation and problem-solving, 
            I excel in delivering exceptional results. As a Fullstack Developer, 
            I am skilled in frontend technologies like HTML, CSS, and JavaScript, 
            and backend languages like Node.js and Python. As a Marine Engineer, 
            I specialize in solving technological problem, bringing innovative technology into marine engineering society and the marine industry at large.
            <br />
            My commitment to excellence and 
            adaptability allows me to thrive in diverse environments, making me a valuable asset to any team. 
            I am eager to contribute my skills and passion to your company and its ongoing success.
            </Typography>
        </Box>

    </Box>
  )
}

export default About;

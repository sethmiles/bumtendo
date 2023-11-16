import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';

export const About = () => {
  const { isMobile } = useUiContext();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        padding: '20px',

        color: '#fff',
      }}
    >
      <Box
        sx={{
          color: '#fff',
          fontFamily: 'Courier',
          fontWeight: 'bold',
          marginTop: '20px',
          marginLeft: '20px',
          fontSize: '60px',
        }}
      >
        /about me
      </Box>
      <Box
        sx={{
          color: '#fff',
          fontFamily: 'Courier',
          padding: '5px',
          marginTop: '30px',
          marginRight: '100px',
          marginLeft: '20px',
          fontSize: '30px',
        }}
      >
        Hello my name is Cory Howard. I am a professional video editor, tattoo
        artist, and avid tetris player.
        <br></br>
        <br></br>
        If you are interested in reaching out to me for video work, tattoos, or
        artwork purchase please email me at bumtendo@gmail.com
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        find me online
        <br></br>
        <br></br>
        <br></br>
        <Box
          sx={{
            color: '#fff',
            fontFamily: 'Courier',
            padding: '5px',
            marginTop: '30px',
            marginRight: '100px',
            marginLeft: '20px',
            fontSize: '30px',
            ':hover': {
              ':before': {
                content: '"<"',
              },
              ':after': {
                content: '">"',
              },
            },
          }}
        >
          <a href="https://www.youtube.com/bumtendo" target="_blank">
            youtube.com/bumtendo
          </a>
        </Box>
        <Box
          sx={{
            color: '#fff',
            fontFamily: 'Courier',
            padding: '5px',
            marginTop: '30px',
            marginRight: '100px',
            marginLeft: '20px',
            fontSize: '30px',
            ':hover': {
              ':before': {
                content: '"<"',
              },
              ':after': {
                content: '">"',
              },
            },
          }}
        >
          <a href="https://www.instagram.com/bumtendo/" target="_blank">
            instagram.com/bumtendo
          </a>
        </Box>
      </Box>
    </Box>
  );
};

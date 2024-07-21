import React from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '20px',
        padding: '50px',
        fontFamily: 'Courier',
        alignItems: 'center',
      }}
    >
      <Box>
        Follow me on <a href="https://www.instagram.com/bumtendo">Instagram</a>
        <br />
        DM or Email me: bumtendo@gmail.com
      </Box>
    </Box>
  );
};

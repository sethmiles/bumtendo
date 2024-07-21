import React from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '60px',
        marginBottom: '25px',
        fontFamily: 'Courier',
        alignItems: 'center',
      }}
    >
      <ArrowBackIcon
        sx={{
          fontSize: '50px',
          marginRight: '48px',
          cursor: 'pointer',
          ':hover': { color: 'red' },
        }}
        onClick={() => {
          window.location.href = '/';
        }}
      />
      <Box sx={{ color: 'red' }}>/</Box>
      <Box>{title}</Box>
    </Box>
  );
};

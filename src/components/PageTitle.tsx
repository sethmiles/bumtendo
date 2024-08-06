import React from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useUiContext } from '../context/UiContext';

export const PageTitle = ({ title }: { title: string }) => {
  const { isMobile } = useUiContext();

  return (
    <Box
      sx={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: isMobile ? '40px' : '60px',
        marginBottom: '25px',
        fontFamily: 'Courier',
        alignItems: 'center',
      }}
    >
      <ArrowBackIcon
        sx={{
          fontSize: isMobile ? '40px' : '50px',
          marginRight: isMobile ? '24px' : '48px',
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

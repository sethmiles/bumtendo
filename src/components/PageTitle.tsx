import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '60px',
        marginBottom: '25px',
        fontFamily: 'Courier',
      }}
    >
      <Box sx={{ color: 'red' }}>/</Box>
      <Box>{title}</Box>
    </Box>
  );
};

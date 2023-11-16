import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';

export const Editing = () => {
  const { isMobile } = useUiContext();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        placeItems: 'center',
        placeContent: 'center',
        color: '#fff',
      }}
    >
      Editing Page
    </Box>
  );
};

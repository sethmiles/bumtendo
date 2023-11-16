import React from 'react';
import { Box } from '@mui/material';

export const PageWrapper = ({ children }: { children: any }) => {
  return (
    <Box className="page-wrapper" sx={{ padding: '20px' }}>
      {children}
    </Box>
  );
};

import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { useUiContext } from '../context/UiContext';

export const Paragraph = ({
  children,
  sx = {},
}: {
  children: any;
  sx?: SxProps<Theme>;
}) => {
  const { isMobile } = useUiContext();
  return (
    <Box
      sx={{
        fontSize: isMobile ? '18px' : '30px',
        paddingLeft: '35px',
        lineHeight: '40px',
        maxWidth: '900px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

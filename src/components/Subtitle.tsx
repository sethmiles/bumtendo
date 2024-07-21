import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { useUiContext } from '../context/UiContext';

export const Subtitle = ({
  title,
  sx = {},
}: {
  title: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        fontWeight: 100,
        fontSize: '40px',
        marginBottom: '25px',
        ...sx,
      }}
    >
      {title}
    </Box>
  );
};

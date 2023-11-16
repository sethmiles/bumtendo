import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import whiteBoldBumtendo from '../whiteBoldBumtendo.png';
import { useUiContext } from '../context/UiContext';

const links = [
  { name: 'editing', url: '/editing' },
  { name: 'artwork', url: '/artwork' },
  { name: 'about me', url: '/about' },
];

export const Home = () => {
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
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${whiteBoldBumtendo})`,
          maxWidth: '600px',
          width: '50vw',
          height: '200px',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          ...(isMobile && { flexDirection: 'column' }),
          a: { textDecoration: 'none' },
        }}
      >
        {links.map((link) => (
          <Link to={link.url}>
            <Box
              sx={{
                color: '#fff',
                fontFamily: 'VT323',
                fontSize: '35px',
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
              {link.name}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

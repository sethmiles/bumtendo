import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';
import { PageTitle } from '../components/PageTitle';
import { Paragraph } from '../components/Paragraph';
import c1 from '../images/cory1.jpeg';
import c2 from '../images/cory2.jpeg';
import c3 from '../images/cory3.jpeg';
import { PageWrapper } from '../components/PageWrapper';

export const AboutPage = () => {
  const { isMobile } = useUiContext();

  return (
    <PageWrapper>
      <PageTitle title="about me" />
      <Box
        sx={{
          width: '100%',
          display: isMobile ? 'block' : 'flex',
        }}
      >
        <Box sx={{}}>
          <Paragraph sx={{ marginBottom: '40px' }}>
            Hello my name is Cory Howard. I am a professional video editor,
            tattoo artist, and avid tetris player.
          </Paragraph>
          <Paragraph sx={{ marginBottom: '75px' }}>
            If you are interested in reaching out to me for video work, tattoos,
            or artwork purchase please email me at <br />
            <a href="mailto:bumtendo@gmail.com" className="link">
              bumtendo@gmail.com
            </a>
          </Paragraph>

          <Paragraph sx={{ marginBottom: '40px' }}>find me online</Paragraph>
          <Paragraph>
            <Box
              className="link"
              sx={{
                marginTop: '30px',
                marginLeft: '20px',
              }}
            >
              <a href="https://www.youtube.com/bumtendo" target="_blank">
                youtube.com/bumtendo
              </a>
            </Box>
            <Box
              className="link"
              sx={{
                marginTop: '30px',
                marginLeft: '20px',
              }}
            >
              <a href="https://www.instagram.com/bumtendo/" target="_blank">
                instagram.com/bumtendo
              </a>
            </Box>
          </Paragraph>
        </Box>
        <Box
          sx={
            isMobile
              ? { paddingTop: '50px' }
              : { paddingLeft: '50px', paddingRight: '35px', flexGrow: 1 }
          }
        >
          <img src={c3} width="100%" />
        </Box>
      </Box>
    </PageWrapper>
  );
};

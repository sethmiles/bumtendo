import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';
import CoryHoward_SizzleReel_2024 from '../video/CoryHoward_SizzleReel_2024.mp4';
import { PageTitle } from '../components/PageTitle';
import { Subtitle } from '../components/Subtitle';
import SouthIcon from '@mui/icons-material/South';

const videoSections: Record<string, string[]> = {
  reel: ['https://www.youtube.com/embed/qIYBHa8x8LI?si=hKZgwxw7fMTojcj7'],
  'motion graphics': [
    'https://www.youtube-nocookie.com/embed/rotuA7yPYBY?si=onEXZyzeTt7m2Bsj',
    'https://www.youtube.com/embed/k9VHwD7p-_g?si=bRCXrmpDAW_vNnUI',
    'https://www.youtube.com/embed/qluW4spCyhQ?si=ozavN4eQOx7hzTfc',
    'https://www.youtube.com/embed/jPkj_b0A1DI?si=eT6-1oOO4JU9ijCj',
  ],
  editing: [
    'https://www.youtube.com/embed/u5pH-pwCyXE?si=D8yzxoHKfl9wRSax',
    'https://www.youtube.com/embed/BSfCI6qW7bM?si=h4y4SS31-TjeLeTD',
    'https://www.youtube.com/embed/dTzwlqy6BEY?si=FxNPvqPVMEb8pnk0',
    'https://www.youtube.com/embed/4Cf-7G4WqEg?si=dkmO2gZuzQGf0kVu',
  ],
  trailer: [
    'https://www.youtube.com/embed/0dltP93fobA?si=sbsFtQChw_0bDBYP',
    'https://www.youtube.com/embed/dWjKhcANQ6k?si=1CyBzVmGF8VkF7u-',
  ],
  'short films': [
    'https://www.youtube.com/embed/MpL8yTiiQQw?si=2MMDgHsCzl3P64D7',
    'https://www.youtube.com/embed/xSxEwFwPB0c?si=5Kw6P_Gsim34Fa2p',
    'https://www.youtube.com/embed/lvPqn8xIP_M?si=nFoWt2OmeJJXNsrG',
    'https://www.youtube.com/embed/uemnwEg6gUw?si=KaMrk9eG0rmKHuOb',
  ],
};

const RenderSection = ({
  title,
  videoLinks,
}: {
  title: string;
  videoLinks: string[];
}) => (
  <Box>
    <Subtitle title={title} />
    <Box sx={{ display: 'flex', gap: '24px', width: '100%', flexWrap: 'wrap' }}>
      {videoLinks.map((link) => (
        <RenderYoutubeVideo key={link} link={link} />
      ))}
    </Box>
  </Box>
);

const RenderYoutubeVideo = ({ link }: { link: string }) => (
  <Box
    sx={{
      flexGrow: 1,
      minWidth: '500px',
      maxWidth: '800px',
      aspectRatio: '16/9',
    }}
  >
    <iframe
      width="100%"
      height="100%"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </Box>
);

export const EditingPage = () => {
  const { isMobile } = useUiContext();
  const myRef = useRef(null);

  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Box
          sx={{ position: 'absolute', top: '24px', left: '24px', zIndex: 125 }}
        >
          <PageTitle title="editing" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            animation: 'move-up .8s ease-in-out 2s forwards',
            bottom: '-200px',
            left: '48px',
            '@keyframes move-up': {
              '0%': { bottom: '-150px' },
              '75%': { bottom: '50px' },
              '100%': { bottom: '24px' },
            },
            zIndex: 100,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <SouthIcon
              sx={{
                fontSize: '100px',
                cursor: 'pointer',
                ':hover': {
                  color: 'red',
                },
              }}
              onClick={() => {
                console.log('clicked');
                // @ts-ignore
                myRef?.current?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            />
            <Box sx={{ fontSize: '48px' }}>scroll down bitch</Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: '100%' }}>
          <video
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            muted
            autoPlay
            loop
          >
            <source src={CoryHoward_SizzleReel_2024} type="video/mp4" />
          </video>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        ></Box>
        <Box
          ref={myRef}
          sx={{
            backdropFilter: 'blur(50px)',
            backgroundColor: 'rgba(34,34,34,0.6)',
            boxShadow: '0px -50px 50px rgba(34,34,34,.6)',
            padding: '24px',
            zIndex: 125,
            position: 'relative',
            scrollMarginTop: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '92px',
          }}
        >
          {Object.entries(videoSections).map(([sectionName, videoLinks]) => (
            <RenderSection title={sectionName} videoLinks={videoLinks} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';
import externalDenver2 from '../video/externalDenver2.mp4';
import externalDenverPoster from '../video/externalDenverPoster.jpg';
import slaveToTheRaveCredits from '../video/slaveToTheRaveCredits.mp4';
import slaveToTheRaveIntro from '../video/slaveToTheRaveIntro.mp4';
import OncleJazzTakyon from '../video/OncleJazzTakyon.mp4';
import OncleJazzPoster from '../video/onclejazzthumbnain.png';
import { PageTitle } from '../components/PageTitle';
import { Subtitle } from '../components/Subtitle';

import slaveToRaveIntroPoster from '../video/slaveToRaveIntroPoster.jpg';
import slaveToRaveCreditsPoster from '../video/slaveToRaveCreditsPoster.jpg';
import { PageWrapper } from '../components/PageWrapper';

const renderVideo = (video: any, poster: any) => (
  <Box sx={{ maxWidth: '450px' }}>
    <video
      controls
      style={{
        width: '100%',
      }}
      poster={poster}
    >
      <source src={video} type="video/mp4" />
    </video>
  </Box>
);

export const EditingPage = () => {
  const { isMobile } = useUiContext();

  return (
    <PageWrapper>
      <PageTitle title="editing" />
      <Subtitle title="reel" />
      <Box>
        <video
          controls
          style={{
            width: '90vw',
            maxWidth: '1080px',
          }}
          poster={externalDenverPoster}
        >
          <source src={externalDenver2} type="video/mp4" />
        </video>
      </Box>
      <Subtitle title="motion graphics" sx={{ marginTop: '75px' }} />
      <Box
        sx={{
          display: 'flex',
          gap: '30px',
          ...(isMobile && { flexDirection: 'column' }),
        }}
      >
        {renderVideo(externalDenver2, externalDenverPoster)}
        {renderVideo(slaveToTheRaveCredits, slaveToRaveCreditsPoster)}
        {renderVideo(slaveToTheRaveIntro, slaveToRaveIntroPoster)}
      </Box>
      <Subtitle title="editing" sx={{ marginTop: '75px' }} />
      <Box
        sx={{
          display: 'flex',
          gap: '30px',
          ...(isMobile && { flexDirection: 'column' }),
        }}
      >
        {renderVideo(OncleJazzTakyon, OncleJazzPoster)}
      </Box>
      <Subtitle title="short films" sx={{ marginTop: '75px' }} />
      <Box
        sx={{
          display: 'flex',
          gap: '30px',
          ...(isMobile && { flexDirection: 'column' }),
        }}
      >
        {renderVideo(slaveToTheRaveIntro, slaveToRaveIntroPoster)}
        {renderVideo(externalDenver2, externalDenverPoster)}
        {renderVideo(slaveToTheRaveCredits, slaveToRaveCreditsPoster)}
      </Box>
    </PageWrapper>
  );
};

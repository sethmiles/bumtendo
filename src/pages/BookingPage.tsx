import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';
import { PageTitle } from '../components/PageTitle';
import { Paragraph } from '../components/Paragraph';
import { PageWrapper } from '../components/PageWrapper';
import { InlineWidget } from 'react-calendly';

export const BookingPage = () => {
  const { isMobile } = useUiContext();

  return (
    <PageWrapper>
      <PageTitle title="booking" />
      <Box
        sx={{
          width: '100%',
          display: isMobile ? 'block' : 'flex',
        }}
      >
        <Paragraph sx={{ marginBottom: '40px' }}>
          Tattoo pricing
          <ul>
            <li>Small: $100</li>
            <li>Medium: $150</li>
          </ul>
        </Paragraph>
      </Box>
      <InlineWidget
        url="https://calendly.com/aminycartoon/flash-tattoo"
        styles={{
          height: '1800px',
        }}
        pageSettings={{
          hideGdprBanner: true,
          backgroundColor: '#000',
          primaryColor: '#ff0000',
          textColor: '#fff',
        }}
      />
    </PageWrapper>
  );
};

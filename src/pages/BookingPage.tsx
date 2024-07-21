import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';
import { PageTitle } from '../components/PageTitle';
import { Paragraph } from '../components/Paragraph';
import { PageWrapper } from '../components/PageWrapper';
import { InlineWidget } from 'react-calendly';
import { Footer } from '../components/Footer';

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
          Tattoo Booking
          <br />
          <br />
          Hello! Thank you for your interest in booking with me!
          <br />
          <br />
          I do handpoked, machineless, tattoos. This process may take more time
          but is overall less traumatic to your skin and for some can be a
          little less over-stimulating/painful.
          <br />
          <br />
          Pricing typically ranges from $125-200 per Tattoo :)
          <br />
          <br />
        </Paragraph>
      </Box>
      <InlineWidget
        url="https://calendly.com/aminycartoon/flash-tattoo"
        styles={{
          height: '1000px',
        }}
        pageSettings={{
          hideGdprBanner: true,
          backgroundColor: '#000',
          primaryColor: '#ff0000',
          textColor: '#fff',
        }}
      />

      <Paragraph sx={{ marginBottom: '40px' }}>
        <br />
        <br />
        Feel free to reach out to me for any further questions
        <br />
        <br />
        <Footer />
        <br />
      </Paragraph>
    </PageWrapper>
  );
};

import React from 'react';
import { Box } from '@mui/material';
import { useUiContext } from '../context/UiContext';
import a from '../images/1.jpg';
import b from '../images/2.jpg';
import c from '../images/3.jpg';
import d from '../images/4.jpg';
import e from '../images/5.jpg';
import f from '../images/6.jpg';
import g from '../images/7.jpg';
import h from '../images/8.jpg';
import i from '../images/9.jpg';
import j from '../images/10.jpg';
import k from '../images/11.jpg';
import l from '../images/12.jpg';
import m from '../images/13.jpg';
import n from '../images/14.jpg';
import o from '../images/15.jpg';
import p from '../images/16.jpg';
import q from '../images/17.jpg';
import r from '../images/18.jpg';
import s from '../images/19.jpg';
import t from '../images/20.jpg';
import u from '../images/21.jpg';
import v from '../images/22.jpg';
import w from '../images/23.jpg';
import x from '../images/24.jpg';
import y from '../images/25.jpg';
import z from '../images/26.jpg';
import aa from '../images/27.jpg';
import ab from '../images/28.jpg';

const images = [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
  aa,
  ab,
];

const shuffle = (array: any[]): any[] => {
  const copiedArray = array.slice(0);
  var copy = [],
    n = copiedArray.length,
    i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(copiedArray.splice(i, 1)[0]);
  }

  return copy;
};

const renderImage = (image: any) => (
  <Box
    sx={{
      backgroundImage: `url(${image})`,
      flexGrow: 1,
      aspectRatio: '1 / 1' /* ⏹ a perfect square */,
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}
  />
);

export const Artwork = () => {
  const { isMobile } = useUiContext();
  let tempChunk: any[] = [];
  const chunkedImages: any[][] = [];
  const shuffledImages = shuffle(images);
  shuffledImages.forEach((image, index) => {
    if (index % 3 === 0 && index !== 0) {
      chunkedImages.push(tempChunk);
      tempChunk = [image];
    } else {
      tempChunk.push(image);
    }
  });

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        padding: '20px',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          color: '#fff',
          fontFamily: 'Courier',
          fontWeight: 'bold',
          marginTop: '20px',
          marginLeft: '20px',
          fontSize: '60px',
        }}
      >
        /artwork
      </Box>

      {/* This is where the image html is generated from the array of images */}
      {chunkedImages.map((chunk) => (
        <Box sx={{ display: 'flex', gap: '24px', marginTop: '24px' }}>
          {chunk.map((image) => renderImage(image))}
        </Box>
      ))}
    </Box>
  );
};

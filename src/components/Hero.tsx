import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)`
  background-image: url('/images/pexels-andrea-piacquadio-987209.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  return (
    <HeroContainer />
  );
};

export default Hero;

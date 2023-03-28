import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)`
  background-image: url('/images/pexels-ron-lach-10143338.jpg');
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

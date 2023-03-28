import React from 'react';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import MissionStatement from '../components/MissionStatement';

function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <FeaturedProducts />
      <FeaturedCategories />
    </>
  );
}

export default Home

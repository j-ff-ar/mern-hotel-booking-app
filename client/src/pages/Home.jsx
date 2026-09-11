import React from 'react'
import Hero from '../components/Hero';
import FeaturedDesitnations from '../components/FeaturedDesitnations';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDesitnations />
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home

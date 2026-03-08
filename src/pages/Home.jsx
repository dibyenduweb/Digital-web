import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import Facts from '../components/home/Facts';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Blog from '../components/home/Blog';
import Team from '../components/home/Team';
import Testimonial from '../components/home/Testimonial';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <main>
      <HeroCarousel />
      <Facts />
      <About />
      <Services initialServicesToShow={3} showViewAllButton={true} />
      <Projects />
      <Blog />
      {/* <Team /> */}
      <Testimonial />
      <Contact />
    </main>
  );
};

export default Home;
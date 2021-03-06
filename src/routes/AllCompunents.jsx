import React from 'react';
import AboutME from '../components/AboutME';
import Client from '../components/Client';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/header';
import Navbar from '../components/Navbar';
import ProjectSlider from '../components/ProjectSlider';

export default function AllCompunents() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutME />
      <ProjectSlider />
      <Client />
      <Contact />
      <Footer />

    </>

  )
}

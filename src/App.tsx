import React from 'react';
import './App.css';
import AboutME from './components/AboutME';
import Client from './components/Client';
import Header from './components/header';
import Navbar from './components/Navbar';
import ProjectSlider from './components/ProjectSlider';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutME />
      <ProjectSlider />
      <Client />
    </>
  );
}

export default App;

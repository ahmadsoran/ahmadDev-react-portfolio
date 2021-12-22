import React from 'react';
import './App.css';
import AboutME from './components/AboutME';
import Header from './components/header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutME />
    </>
  );
}

export default App;

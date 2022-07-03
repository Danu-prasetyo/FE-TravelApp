import React from 'react';
import Carousel from './components/Carousel';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Gallery />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
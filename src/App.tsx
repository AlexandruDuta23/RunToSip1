import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import WhatsAppJoin from './components/WhatsAppJoin';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <WhatsAppJoin />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
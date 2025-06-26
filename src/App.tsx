import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import WhatsAppJoin from './components/WhatsAppJoin';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Schedule />
        <WhatsAppJoin />
        <Articles />
        <Gallery />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
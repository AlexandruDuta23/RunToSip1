import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import WhatsAppJoin from './components/WhatsAppJoin';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Crew from './components/Crew';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import CrewPage from './components/CrewPage';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Schedule />
      <WhatsAppJoin />
      <Articles />
      <Gallery />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
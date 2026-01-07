import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import your portfolio pages
import GreenfieldAcademy from './pages/GreenfieldAcademy';
import FashionBoutique from './pages/FashionBoutique/FashionBoutique';
import Fitness from './pages/fitness/Fitness';
import SafariTours from './pages/SafariTours/SafariTours';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

const WebMtaaniWebsite = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greenfield-academy" element={<GreenfieldAcademy />} />
        <Route path="/fashion-boutique" element={<FashionBoutique />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/safari-tours" element={<SafariTours />} />
      </Routes>
    </Router>
  );
};

export default WebMtaaniWebsite;
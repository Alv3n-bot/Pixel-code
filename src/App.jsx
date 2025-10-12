import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Add this import
import ScrollToTop from "./components/ScrollToTop";

// pages
import SafariTours from './pages/SafariTours/SafariTours';
import FashionBoutique from './pages/FashionBoutique/FashionBoutique';
import Restaurant from './pages/Restaurant/Restaurant';
import LawFirm from './pages/LawFirm/LawFirm';
import Fitness from './pages/fitness/Fitness';
import Careers from './pages/careers/careers';
//components
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const MainSite = () => (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
        />

        <main id="home" className="mt-6 space-y-12">
          <Hero scrollToSection={scrollToSection} />
          <Services scrollToSection={scrollToSection} />
          <About />
          <Portfolio scrollToSection={scrollToSection} />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );

  return (
    <Router>
     
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/safari-tours" element={<SafariTours />} />
        <Route path="/fashion-boutique" element={<FashionBoutique />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/law-firm" element={<LawFirm />} />
        <Route path="/fitness-app" element={<Fitness />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;

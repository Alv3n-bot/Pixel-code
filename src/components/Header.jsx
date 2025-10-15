import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

function Header({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const timeoutRef = useRef(null);

  const navLinks = [
    { label: "Services", id: "#services" },
    { label: "Portfolio", id: "#portfolio" },
    { label: "About", id: "#about" },
    { label: "Contact", id: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (currentScrollY > lastScrollY + 10 && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY <= 100) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsVisible(true);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Spacer div to prevent content overlap */}
      <div 
        className={`transition-all duration-300 ${
          isVisible ? 'pt-20' : 'pt-0'
        }`}
      />
      
      <header
        ref={headerRef}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-2xl bg-slate-950/80 border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/10 flex items-center justify-between px-8 py-4 w-full max-w-6xl transition-all duration-300 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-20 opacity-0 invisible'
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900 border-2 border-purple-500 rounded-md flex items-center justify-center text-purple-400 font-mono font-bold text-lg shadow-md shadow-purple-500/30 group-hover:border-purple-400 group-hover:shadow-purple-500/50 transition-all duration-200">
              P&C
            </div>
            <div className="flex flex-col">
              <div className="font-mono font-bold text-xl text-gray-100 tracking-wider uppercase">
                Pixel & Code
              </div>
              <div className="text-xs text-purple-400 font-mono tracking-widest">
                Software Solutions
              </div>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className="relative text-slate-300 font-semibold cursor-pointer hover:text-white transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button
            className="ml-4 bg-gray-900 border-2 border-purple-500 text-purple-400 font-mono font-semibold px-5 py-2.5 rounded-lg hover:bg-purple-500 hover:text-gray-900 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-102 transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Get a Quote
          </button>
        </nav>

        <button
          className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <nav className="relative flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-8 py-4 rounded-xl text-xl"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
                setMobileMenuOpen(false);
              }}
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
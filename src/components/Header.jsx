import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 48 48" className="w-8 h-8">
              <circle cx="24" cy="24" r="22" fill="none" stroke="#10b981" strokeWidth="2" />
              <line x1="24" y1="2" x2="24" y2="46" stroke="#10b981" strokeWidth="1.5" />
              <line x1="2" y1="24" x2="46" y2="24" stroke="#10b981" strokeWidth="1.5" />
              <line x1="8" y1="8" x2="40" y2="40" stroke="#10b981" strokeWidth="1.5" />
              <line x1="40" y1="8" x2="8" y2="40" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="3" fill="#10b981" />
              <circle cx="24" cy="8" r="2" fill="#10b981" />
              <circle cx="24" cy="40" r="2" fill="#10b981" />
              <circle cx="8" cy="24" r="2" fill="#10b981" />
              <circle cx="40" cy="24" r="2" fill="#10b981" />
            </svg>
            <span className="text-xl font-bold text-black">Web<span className="text-emerald-500">Mtaani</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {['Home', 'Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
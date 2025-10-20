import { Mail, Phone, Instagram, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-16 md:mt-20 border-t border-purple-500/20 bg-slate-950/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-500/10 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-center sm:text-left">
        
        {/* Logo & Brand Section */}
        <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 md:gap-5">
          <a
            href="#home"
            className="flex items-center gap-3 sm:gap-3.5 md:gap-4 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-900 border-2 border-purple-500 rounded-xl flex items-center justify-center text-purple-400 font-mono font-bold text-base sm:text-lg shadow-md shadow-purple-500/30 group-hover:border-purple-400 group-hover:shadow-purple-500/50 transition-all duration-200">
              P&C
            </div>
            <div className="flex flex-col">
              <div className="font-mono font-bold text-sm sm:text-base md:text-lg text-gray-100 tracking-wider uppercase leading-tight">
                Pixel & Code
              </div>
              <div className="text-[10px] sm:text-xs text-purple-400 font-mono tracking-widest">
                Software Solutions
              </div>
            </div>
          </a>

          <p className="text-slate-400 text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 leading-tight sm:leading-relaxed max-w-xs">
            A Nairobi-based web studio crafting modern websites, digital
            products, and seamless user experiences for forward-thinking
            brands.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-black text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-5">
            Contact
          </h3>
          <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 md:gap-4 text-slate-300 text-[10px] sm:text-xs md:text-sm">
            <a
              href="mailto:alvinkamotho@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>pxcsoftwares@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>+254 794 994 316</span>
            </div>
            <p className="text-slate-500 mt-1 text-[9px] sm:text-[10px] md:text-xs">
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Explore Links */}
        <div className="text-center sm:text-right">
          <h3 className="font-black text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-5">
            Explore
          </h3>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-slate-300 text-[10px] sm:text-xs md:text-sm">
            <a href="#portfolio" className="hover:text-purple-400 transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
            <Link
              to="/careers"
              className="hover:text-purple-400 transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/20 px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm text-slate-400 gap-3 sm:gap-0 rounded-b-2xl sm:rounded-b-3xl bg-slate-950/60">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Pixel & Code. All rights reserved.
        </p>

        <div className="flex gap-5 sm:gap-6 md:gap-8">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Instagram className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Linkedin className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="#"
            aria-label="Website"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Globe className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

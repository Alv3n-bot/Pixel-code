import { Mail, Phone, Instagram, Linkedin, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-16 md:mt-20 border-t border-purple-500/20 bg-slate-950/90 backdrop-blur-xl rounded-t-2xl sm:rounded-t-3xl shadow-2xl shadow-purple-500/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Logo & Brand Section */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <a href="#home" className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-900 border-2 border-purple-500 rounded-md flex items-center justify-center text-purple-400 font-mono font-bold text-sm sm:text-base md:text-lg shadow-md shadow-purple-500/30 group-hover:border-purple-400 group-hover:shadow-purple-500/50 transition-all duration-200">
              P&C
            </div>
            <div className="flex flex-col">
              <div className="font-mono font-bold text-xs sm:text-sm md:text-base lg:text-xl text-gray-100 tracking-wider uppercase leading-tight">
                Pixel & Code
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-xs text-purple-400 font-mono tracking-widest">
                Software Solutions
              </div>
            </div>
          </a>

          <p className="text-slate-400 text-[9px] sm:text-[10px] md:text-xs lg:text-sm mt-1 sm:mt-2 md:mt-3 leading-tight sm:leading-relaxed max-w-xs">
            A Nairobi-based web studio crafting modern websites, digital
            products, and seamless user experiences for forward-thinking
            brands.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-black text-white text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4">Contact</h3>
          <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 text-slate-300 text-[9px] sm:text-[10px] md:text-xs lg:text-sm">
            <a
              href="mailto:alvinkamotho@gmail.com"
              className="flex items-center gap-1 sm:gap-1.5 md:gap-2 hover:text-purple-400 transition-colors break-all"
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0" />
              <span className="leading-tight">alvinkamotho@gmail.com</span>
            </a>
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0" />
              <span className="leading-tight">+254 794 994 316</span>
            </div>
            <p className="text-slate-500 mt-0.5 sm:mt-1 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Explore Links */}
        <div className="text-right">
          <h3 className="font-black text-white text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4">Explore</h3>
          <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 text-slate-300 text-[9px] sm:text-[10px] md:text-xs lg:text-sm">
            <a
              href="#portfolio"
              className="hover:text-purple-400 transition-colors leading-tight"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="hover:text-purple-400 transition-colors leading-tight"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors leading-tight"
            >
              Contact
            </a>
            <a
              href="/careers"
              className="hover:text-purple-400 transition-colors leading-tight"
            >
              Careers
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/20 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex flex-col sm:flex-row justify-between items-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-slate-400 gap-3 sm:gap-0">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} Pixel & Code. All rights reserved.</p>

        <div className="flex gap-4 sm:gap-5 md:gap-6">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Instagram className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Linkedin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="#"
            aria-label="Website"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Globe className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
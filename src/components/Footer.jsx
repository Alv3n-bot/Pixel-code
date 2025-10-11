import { Mail, Phone, Instagram, Linkedin, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-purple-500/20 bg-slate-950/90 backdrop-blur-xl rounded-t-3xl shadow-2xl shadow-purple-500/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo & Brand Section */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-3 group">
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
          </a>

          <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xs">
            A Nairobi-based web studio crafting modern websites, digital
            products, and seamless user experiences for forward-thinking
            brands.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-black text-white text-lg mb-4">Contact</h3>
          <div className="flex flex-col gap-3 text-slate-300 text-sm">
            <a
              href="mailto:alvinkamotho@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Mail size={16} className="text-purple-400" />
              alvinkamotho@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-purple-400" />
              +254 794 994 316
            </div>
            <p className="text-slate-500 mt-1">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Explore Links */}
        <div className="lg:text-right">
          <h3 className="font-black text-white text-lg mb-4">Explore</h3>
          <div className="flex flex-col gap-2 text-slate-300 text-sm">
            <a
              href="#portfolio"
              className="hover:text-purple-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="hover:text-purple-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="#careers"
              className="hover:text-purple-400 transition-colors"
            >
              Careers
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/20 px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Pixel & Code. All rights reserved.</p>

        <div className="flex gap-6 mt-4 sm:mt-0">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            aria-label="Website"
            className="hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

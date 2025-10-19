import { Mail, Phone, Instagram, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950/90 backdrop-blur-xl border-t border-purple-500/20">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10 lg:py-12">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 lg:gap-10 justify-between">
          {/* Logo & Brand Section */}
          <div className="flex-1 min-w-[200px]">
            <a href="#home" className="flex items-center gap-3 group mb-3">
              <div className="w-12 h-12 bg-gray-900 border-2 border-purple-500 rounded-xl flex items-center justify-center text-purple-400 font-mono font-bold text-lg shadow-lg shadow-purple-500/30 group-hover:border-purple-400 group-hover:shadow-purple-500/50 transition-all duration-300">
                P&C
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-lg text-gray-100 tracking-wider uppercase">
                  Pixel & Code
                </span>
                <span className="text-xs text-purple-400 font-mono tracking-widest">
                  Software Solutions
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              A Nairobi-based web studio crafting modern websites, digital
              products, and seamless user experiences for forward-thinking
              brands.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[180px]">
            <h6 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h6>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:pxcsoftwares@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="break-all">pxcsoftwares@gmail.com</span>
              </a>
              <a
                href="tel:+254794994316"
                className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>+254 794 994 316</span>
              </a>
              <p className="text-slate-500 text-xs">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="flex-1 min-w-[150px]">
            <h6 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Explore
            </h6>
            <div className="flex flex-col gap-2">
              <a href="#portfolio" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Portfolio
              </a>
              <a href="#services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Services
              </a>
              <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Contact
              </a>
              <Link to="/careers" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Careers
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex-1 min-w-[150px]">
            <h6 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h6>
            <div className="flex flex-col gap-2">
              <a href="#terms" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Use
              </a>
              <a href="#privacy" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-8 border-purple-500/20" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Pixel & Code. All Rights Reserved.
          </span>

          <div className="flex justify-center sm:justify-end gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-400 hover:text-purple-400 transition-all transform hover:scale-110 duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-purple-400 transition-all transform hover:scale-110 duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="text-slate-400 hover:text-purple-400 transition-all transform hover:scale-110 duration-300"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { useState } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, Globe, Zap, Sparkles, Rocket } from 'lucide-react';

function Hero({ scrollToSection }) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 py-4 sm:px-8 sm:py-20">
      {/* Animated background elements - reduced pulse for subtlety */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]"></div>
      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-xl border border-purple-500/30 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-6 sm:mb-8 group hover:bg-purple-500/30 transition-all">
          <Sparkles size={16} className="text-purple-400" />
          <span className="font-bold text-xs sm:text-sm text-purple-200">Local • Reliable • Professional</span>
        </div>
<h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-[0.95] text-white">
  Design and Build{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
    Impactful Digital Solutions
  </span>{" "}
  for a Global Audience.
</h1>
       <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-medium">
  We craft <span className="text-white font-bold">modern, lightning-fast</span> websites, e-commerce stores, and digital solutions that help you build trust, reach more customers and grow your business online.
</p>
        <div className="flex gap-4 sm:gap-5 flex-wrap mb-6 sm:mb-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="group relative bg-gray-900 border-2 border-purple-500 text-purple-400 font-mono font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg overflow-hidden shadow-md shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-200 flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <Rocket
              size={16}
              className="relative z-10 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="relative z-10 group-hover:text-purple-300 text-sm sm:text-base">Request a Quote</span>
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping top-2 right-2"></span>
              <span className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping bottom-2 left-2 delay-100"></span>
            </span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#portfolio");
            }}
            className="backdrop-blur-xl bg-white/10 border-2 border-white/20 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-sm sm:text-base"
          >
            View Portfolio
          </button>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Serving Nairobi & remote clients globaly — friendly pricing, support in English
        </p>
        {/* "Why Choose Us" content for mobile */}
        <div className="xl:hidden bg-slate-900/50 border border-purple-500/30 rounded-2xl p-4 mt-6">
          <Zap size={20} className="text-purple-400 mb-3" />
          <h3 className="font-black text-lg text-white mb-2">Why Choose Us</h3>
          <p className="text-slate-300 text-xs mb-4">
            Fast delivery • Local pricing • Aftercare & training
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="font-black text-white text-sm">1-6 weeks</div>
              <div className="text-xs text-slate-400">Typical delivery</div>
            </div>
            <div>
              <div className="font-black text-white text-sm">24/7</div>
              <div className="text-xs text-slate-400">Support available</div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating card */}
       <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 backdrop-blur-2xl bg-slate-900/50 border border-purple-500/30 rounded-3xl p-6 lg:p-8 shadow-2xl shadow-purple-500/20 max-w-xs hover:scale-105 transition-transform duration-500">
        <Zap size={24} className="text-purple-400 mb-3 lg:mb-4" />
        <h3 className="font-black text-xl lg:text-2xl text-white mb-2 lg:mb-3">
          Why Choose Us
        </h3>
        <p className="text-slate-300 text-xs lg:text-sm mb-4 lg:mb-6">
          Fast delivery • Local pricing • Aftercare & training
        </p>
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          <div>
            <div className="font-black text-white text-base lg:text-lg">1-3 weeks</div>
            <div className="text-xs text-slate-400">Typical delivery</div>
          </div>
          <div>
            <div className="font-black text-white text-base lg:text-lg">24/7</div>
            <div className="text-xs text-slate-400">Support available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
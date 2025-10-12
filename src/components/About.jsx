import { useState } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, Globe, Zap, Sparkles, Rocket } from 'lucide-react';

function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-slate-950 rounded-2xl sm:rounded-3xl"></div>

      <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-center">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pixel & Code</span>
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 hover:border-purple-500/40 transition-all duration-500 md:row-span-3">
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-slate-300 leading-relaxed">
            <span className="text-white font-black text-base sm:text-lg md:text-lg lg:text-xl">Pixel & Code</span> is a Nairobi-based freelance web development studio focused on building fast, secure, and affordable websites for East African businesses. We blend clean design, reliable code, and local market insight.
          </p>

          <div>
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-3 md:mb-3 lg:mb-4 flex items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
              <Sparkles className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-purple-400" />
              What We Do
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-2.5 lg:space-y-3 text-slate-300 text-sm sm:text-sm md:text-base lg:text-base">
              {["Responsive websites & landing pages", "E-commerce & booking platforms", "Performance optimization & security", "Maintenance, support, & training"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-1.5 sm:mt-1.5 md:mt-2 lg:mt-2 flex-shrink-0"></div>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-3 md:mb-3 lg:mb-4 flex items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
              <Rocket className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-purple-400" />
              Our Process
            </h3>
            <ol className="space-y-2 sm:space-y-2.5 md:space-y-2.5 lg:space-y-3 text-slate-300 text-sm sm:text-sm md:text-base lg:text-base">
              {["Discovery & Quote", "Design & Prototype", "Development & Testing", "Launch & Transfer", "Ongoing Support"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-3 md:gap-3.5 lg:gap-4">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs sm:text-xs md:text-sm lg:text-sm">
                    {idx + 1}
                  </span>
                  <span className="pt-1 sm:pt-1 md:pt-1 lg:pt-1 leading-tight">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 md:contents">
          <div className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-6 md:p-7 lg:p-8 hover:border-purple-500/40 transition-all duration-500">
            <h3 className="font-black text-lg sm:text-xl md:text-xl lg:text-2xl text-white mb-4 sm:mb-5 md:mb-5 lg:mb-6">Contact</h3>
            <div className="space-y-3 sm:space-y-3.5 md:space-y-3.5 lg:space-y-4 text-slate-300 text-sm sm:text-sm md:text-base lg:text-base">
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                <Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-purple-400" />
                <span>+254 794 994 316</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                <Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-purple-400" />
                <span className="break-all">alvinkamotho@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                <Globe className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-purple-400" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-6 md:p-7 lg:p-8">
            <h3 className="font-black text-lg sm:text-xl md:text-xl lg:text-2xl text-white mb-3 sm:mb-3 md:mb-3 lg:mb-4">Guarantee</h3>
            <p className="text-slate-200 leading-relaxed text-sm sm:text-sm md:text-base lg:text-base">
              Every project includes clear scope, on-time delivery, and a <span className="font-bold text-white">30-day handover support window</span> after launch.
            </p>
          </div>
        </div>

        <div className="backdrop-blur-2xl bg-slate-900/50 border border-slate-700/30 rounded-2xl sm:rounded-3xl p-5 sm:p-5 md:p-5 lg:p-6 text-center md:col-span-2">
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-slate-400 leading-tight">
            Trusted by East African startups and small businesses since 2023
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
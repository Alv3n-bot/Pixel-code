import { useState } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, Globe, Zap, Sparkles, Rocket } from 'lucide-react';

function About() {
  return (
    <section id="about" className="relative py-24 px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-slate-950 rounded-3xl"></div>

      <h2 className="relative z-10 text-5xl sm:text-6xl font-black text-white mb-16 text-center">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pixel & Code</span>
      </h2>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-3xl p-10 space-y-8 hover:border-purple-500/40 transition-all duration-500">
          <p className="text-lg text-slate-300 leading-relaxed">
            <span className="text-white font-black text-xl">Pixel & Code</span> is a Nairobi-based freelance web development studio focused on building fast, secure, and affordable websites for East African businesses. We blend clean design, reliable code, and local market insight.
          </p>

          <div>
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
              <Sparkles size={24} className="text-purple-400" />
              What We Do
            </h3>
            <ul className="space-y-3 text-slate-300">
              {["Responsive websites & landing pages", "E-commerce & booking platforms", "Performance optimization & security", "Maintenance, support, & training"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
              <Rocket size={24} className="text-purple-400" />
              Our Process
            </h3>
            <ol className="space-y-3 text-slate-300">
              {["Discovery & Quote", "Design & Prototype", "Development & Testing", "Launch & Transfer", "Ongoing Support"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          <div className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-500">
            <h3 className="font-black text-2xl text-white mb-6">Contact</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-purple-400" />
                <span>+254 794 994 316</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-purple-400" />
                <span>alvinkamotho@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-purple-400" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8">
            <h3 className="font-black text-2xl text-white mb-4">Guarantee</h3>
            <p className="text-slate-200 leading-relaxed">
              Every project includes clear scope, on-time delivery, and a <span className="font-bold text-white">30-day handover support window</span> after launch.
            </p>
          </div>

          <div className="backdrop-blur-2xl bg-slate-900/50 border border-slate-700/30 rounded-3xl p-6 text-center">
            <p className="text-sm text-slate-400">
              Trusted by East African startups and small businesses since 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
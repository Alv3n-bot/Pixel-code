import { useState } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, Globe, Zap, Sparkles, Rocket } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: "Starter Website",
    subtitle: "Perfect for new businesses",
    price: "KSh 25,000+",
    features: ["5-page responsive site", "Mobile-optimized", "Contact form", "Basic SEO"],
    description: "Launch-ready in 1-2 weeks",
    cta: "Get Started"
  },
  {
    id: 2,
    title: "Growth Site",
    subtitle: "For established brands",
    price: "KSh 80,000+",
    features: ["Custom design", "E-commerce ready", "Analytics", "Performance optimized"],
    description: "Delivered in 3-6 weeks",
    cta: "Request Quote"
  },
  {
    id: 3,
    title: "Enterprise",
    subtitle: "Complex applications",
    price: "KSh 250,000+",
    features: ["Full-stack solution", "API integration", "Custom features", "Ongoing support"],
    description: "Timeline varies by scope",
    cta: "Discuss Project"
  }
];

function Services({ scrollToSection }) {
  return (
    <section id="services" className="relative py-24 px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 rounded-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
          Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pricing</span>
        </h2>
        <p className="text-lg text-slate-300 font-medium">
          Simple, transparent pricing built for small businesses. All prices in <span className="font-bold text-purple-400">KSh</span>.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {SERVICES.map((service, idx) => (
          <div
            key={service.id}
            className="group relative backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-black text-2xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {service.subtitle}
                  </p>
                </div>
                <div className="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-400 mb-6 pb-6 border-b border-slate-700/50">
                {service.description}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              >
                {service.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
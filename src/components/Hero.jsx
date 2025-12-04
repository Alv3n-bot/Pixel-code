import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Professional Digital Solutions for Your Business
        </h1>
        
        <p className="text-lg md:text-xl mb-10 text-blue-100">
          Websites • Apps • AI Automation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            Get Free Quote <ArrowRight size={20} />
          </a>
          <a 
            href="#portfolio"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View Our Work
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Check className="text-emerald-300" size={20} />
            <span>20+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-emerald-300" size={20} />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-emerald-300" size={20} />
            <span>Affordable Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
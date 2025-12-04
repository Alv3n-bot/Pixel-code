import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Professional Digital Solutions to Transform Your Business
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Websites • Apps • AI Automation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-green-400 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
            Get Your Free Quote <ArrowRight size={20} />
          </button>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
            View Our Work
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Check className="text-green-300" size={20} />
            <span>20+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-300" size={20} />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-300" size={20} />
            <span>Affordable Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
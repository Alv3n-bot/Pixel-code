import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Digital?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join 20+ successful businesses that trust WebMtaani with their online presence
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
          Start Your Project Today <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTA;
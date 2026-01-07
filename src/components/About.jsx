import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={28} />, number: "20+", label: "Happy Clients" },
    { icon: <Award size={28} />, number: "50+", label: "Projects Completed" },
    { icon: <Zap size={28} />, number: "3+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Hero About Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600">
              About
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Pixel & Code partners with Kenyan businesses and educational institutions to build digital solutions that drive measurable growth and streamline operations.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              From startups to established enterprises, our clients gain the technical infrastructure and online presence needed to compete in today's digital economy.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-600">{stat.icon}</div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-lg mb-2">Our Mission</p>
              <p className="text-sm text-blue-100">
                Empowering Kenyan organizations with scalable digital infrastructure and strategic online positioning.
              </p>
            </div>
          </div>
        </div>

        {/* What We Deliver */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What Your Business Gets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  💼
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Enterprise-Grade Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your business receives professional-quality websites, systems, and digital infrastructure built to scale with transparent, competitive pricing.
                </p>
              </div>
            </div>

            <div className="group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Data-Driven Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your marketing campaigns are optimized through analytics and performance tracking, ensuring every shilling spent generates measurable returns.
                </p>
              </div>
            </div>

            <div className="group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Local Market Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your brand connects with Kenyan audiences through culturally relevant content and strategies tailored to local consumer behavior and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
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
              About <span className=" font-bold text-black">Web<span className="text-emerald-500">Mtaani</span></span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We're a team of digital experts based in Kenya, helping local businesses and schools thrive online with affordable, effective solutions.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              No fancy jargon, just real results that work for the Kenyan market.
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
                Making professional digital marketing accessible for every Kenyan business.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  💰
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Affordable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional quality at prices that work for Kenyan businesses. No hidden charges.
                </p>
              </div>
            </div>

            <div className="group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quick turnaround without compromising quality. Your project gets priority attention.
                </p>
              </div>
            </div>

            <div className="group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Real Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track ROI and share metrics that matter. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section with Real Images 
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Team</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Passionate professionals dedicated to your success
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                  alt="Alex Kipchoge"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Alex Kipchoge</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces" 
                  alt="Grace Omondi"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Grace Omondi</h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces" 
                  alt="Kevin Mutua"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Kevin Mutua</h3>
              <p className="text-gray-600">Digital Marketer</p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces" 
                  alt="Lucy Kamau"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Lucy Kamau</h3>
              <p className="text-gray-600">Social Media Manager</p>
            </div>
          </div>
        </div> */}  

      </div>
    </section>
  );
};

export default About;
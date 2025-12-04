import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const GreenfieldAcademy = () => {
  return (
    <>
      <div className="bg-white">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Greenfield Academy</h1>
            <p className="text-2xl text-blue-100 mb-8">Modern Educational Platform with Online Admissions</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Visit Website
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">The Challenge</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Greenfield Academy was losing prospective students to competitors with better online presence. Parents couldn't easily access information about admissions, curriculum, or fees.
                </p>
                <p className="text-lg text-gray-600">
                  They needed a modern, professional website that could showcase their institution and streamline the admissions process.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop" 
                alt="Greenfield Academy"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Solution</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Custom Website</h3>
                <p className="text-gray-600">
                  Beautiful, responsive website showcasing programs, faculty, facilities, and student achievements with modern design.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Online Admissions</h3>
                <p className="text-gray-600">
                  Streamlined application system allowing parents to apply online, track status, and receive instant notifications.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Mobile Optimized</h3>
                <p className="text-gray-600">
                  Fully responsive design ensuring perfect experience on smartphones, tablets, and desktops for all visitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-50 p-8 rounded-xl">
                <TrendingUp className="text-blue-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">40%</p>
                <p className="text-gray-600">Increase in Admissions</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <Users className="text-purple-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">2,500+</p>
                <p className="text-gray-600">Monthly Visitors</p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl">
                <Zap className="text-green-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">95%</p>
                <p className="text-gray-600">Mobile Traffic</p>
              </div>
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-4xl font-bold text-gray-900 mb-2">4.9/5</p>
                <p className="text-gray-600">Parent Ratings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Features Implemented</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Online Admissions Portal</p>
                <p className="text-gray-600 text-sm">Complete application system with document uploads</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Student Portal</p>
                <p className="text-gray-600 text-sm">Secure access for grades, assignments, and notices</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Event Calendar</p>
                <p className="text-gray-600 text-sm">Integrated calendar showing school events</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Photo Gallery</p>
                <p className="text-gray-600 text-sm">Professional gallery showcasing school life</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Staff Directory</p>
                <p className="text-gray-600 text-sm">Easy access to teacher profiles and contacts</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ News & Blog</p>
                <p className="text-gray-600 text-sm">Regular updates about school activities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Want Similar Results for Your School?</h2>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
              Get Your Free Quote
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GreenfieldAcademy;
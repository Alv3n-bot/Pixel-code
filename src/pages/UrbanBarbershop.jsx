import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const UrbanBarbershop = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Urban Barbershop</h1>
            <p className="text-2xl text-orange-100 mb-8">Booking System & Social Media Campaign</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                Book Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">The Challenge</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Urban Barbershop was receiving bookings only through phone calls, causing missed appointments and no-shows. They needed to digitize their booking system and increase their social media presence.
                </p>
                <p className="text-lg text-gray-600">
                  They wanted to build brand awareness among younger customers and showcase their work online.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop" 
                alt="Urban Barbershop"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Solution</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Booking System</h3>
                <p className="text-gray-600">
                  Online appointment system with available time slots, automatic confirmations, and reminders.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Social Media Management</h3>
                <p className="text-gray-600">
                  Professional content creation and management across Instagram, Facebook, and TikTok.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Portfolio Showcase</h3>
                <p className="text-gray-600">
                  Professional gallery displaying before/after photos and team expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-orange-50 p-8 rounded-xl">
                <TrendingUp className="text-orange-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">60%</p>
                <p className="text-gray-600">More Bookings</p>
              </div>
              <div className="bg-red-50 p-8 rounded-xl">
                <Users className="text-red-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">5,000+</p>
                <p className="text-gray-600">Instagram Followers</p>
              </div>
              <div className="bg-pink-50 p-8 rounded-xl">
                <Zap className="text-pink-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">85%</p>
                <p className="text-gray-600">No-Show Reduction</p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-4xl font-bold text-gray-900 mb-2">4.9/5</p>
                <p className="text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Features Implemented</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Online Booking System</p>
                <p className="text-gray-600 text-sm">Real-time availability and instant confirmations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ SMS Reminders</p>
                <p className="text-gray-600 text-sm">Automatic appointment reminders reduce no-shows</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Service Menu</p>
                <p className="text-gray-600 text-sm">Complete pricing and service descriptions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Team Profiles</p>
                <p className="text-gray-600 text-sm">Showcase barbers and their expertise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Social Content Calendar</p>
                <p className="text-gray-600 text-sm">Consistent daily posts across all platforms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Customer Loyalty Program</p>
                <p className="text-gray-600 text-sm">Rewards system to encourage repeat visits</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Growing Your Service Business?</h2>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all transform hover:scale-105">
              Let's Discuss Your Goals
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default UrbanBarbershop;
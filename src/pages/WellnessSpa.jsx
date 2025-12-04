import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const WellnessSpa = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Wellness Spa</h1>
            <p className="text-2xl text-teal-100 mb-8">Appointment Booking & Service Showcase</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all">
                Explore Services
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
                  Wellness Spa had a full booking schedule but limited visibility online. Customers had to call or visit in person to book services, and the business couldn't showcase their services effectively.
                </p>
                <p className="text-lg text-gray-600">
                  They needed an online presence to attract new customers and streamline the booking process.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop" 
                alt="Wellness Spa"
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
                <div className="text-4xl mb-4">💆</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Service Showcase</h3>
                <p className="text-gray-600">
                  Beautiful presentation of all services with detailed descriptions, pricing, and duration.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Booking</h3>
                <p className="text-gray-600">
                  Online appointment system with real-time availability and automatic confirmations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Loyalty Program</h3>
                <p className="text-gray-600">
                  Membership packages and rewards system to encourage repeat bookings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-teal-50 p-8 rounded-xl">
                <TrendingUp className="text-teal-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">45%</p>
                <p className="text-gray-600">More Bookings</p>
              </div>
              <div className="bg-cyan-50 p-8 rounded-xl">
                <Users className="text-cyan-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">800+</p>
                <p className="text-gray-600">Monthly Bookings</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <Zap className="text-blue-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">70%</p>
                <p className="text-gray-600">Repeat Customers</p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-4xl font-bold text-gray-900 mb-2">4.8/5</p>
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
                <p className="font-semibold text-gray-900 mb-2">✅ Online Booking Calendar</p>
                <p className="text-gray-600 text-sm">Real-time availability with staff scheduling</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Service Packages</p>
                <p className="text-gray-600 text-sm">Bundled services at discounted prices</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Payment Integration</p>
                <p className="text-gray-600 text-sm">Secure online payment and deposits</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Client Reviews</p>
                <p className="text-gray-600 text-sm">Showcase testimonials and ratings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Newsletter Integration</p>
                <p className="text-gray-600 text-sm">Send promotions and booking reminders</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Staff Management</p>
                <p className="text-gray-600 text-sm">Manage therapist schedules and availability</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Grow Your Service Business Online</h2>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WellnessSpa;
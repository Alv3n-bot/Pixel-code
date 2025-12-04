import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const UrbanBarbershop = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Urban Barbershop</h1>
          <p className="text-orange-100 text-lg">Online booking system & social media campaign</p>
        </div>
      </header>

      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=600&fit=crop"
          alt="Urban Barbershop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Urban Barbershop was losing customers due to long wait times and no way to book appointments online. We built them an online booking system and launched a social media campaign to drive awareness.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">No online booking - customers had to call or wait</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">Minimal social media presence</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">No way to showcase their barbers and services</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">Lost customers to competitors with online booking</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We created a professional website with an integrated booking system. We also launched a comprehensive social media strategy featuring the barbers, haircuts, and customer transformations.
            </p>

            <div className="bg-orange-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Key Features Implemented:</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Online appointment booking system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Barber profiles and specialties</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Before/After gallery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Daily Instagram & TikTok content</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Automated booking reminders via WhatsApp</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Customer loyalty program tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            
            <div className="mb-8 pb-8 border-b border-orange-400">
              <p className="text-orange-100 text-sm mb-1">Client Type</p>
              <p className="text-lg font-semibold">Service Business</p>
            </div>

            <div className="mb-8 pb-8 border-b border-orange-400">
              <p className="text-orange-100 text-sm mb-1">Services</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Website Design</li>
                <li>✓ Booking System</li>
                <li>✓ Social Media Management</li>
                <li>✓ Content Creation</li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-orange-400">
              <p className="text-orange-100 text-sm mb-1">Timeline</p>
              <p className="text-lg font-semibold">6 Weeks</p>
            </div>

            <div>
              <p className="text-orange-100 text-sm mb-1">Budget</p>
              <p className="text-lg font-semibold">KES 35,000</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">5,000+</p>
              <p className="text-gray-600">Instagram Followers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">80%</p>
              <p className="text-gray-600">Bookings Online</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">2x</p>
              <p className="text-gray-600">Customer Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">50%</p>
              <p className="text-gray-600">Wait Time Reduced</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Level Up Your Service Business</h2>
          <p className="text-orange-100 mb-6 text-lg">We specialize in helping service businesses go digital</p>
          <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrbanBarbershop;
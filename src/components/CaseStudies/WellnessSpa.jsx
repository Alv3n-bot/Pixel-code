import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessSpa = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Wellness Spa</h1>
          <p className="text-teal-100 text-lg">Appointment booking & service showcase</p>
        </div>
      </header>

      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=600&fit=crop"
          alt="Wellness Spa"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Wellness Spa struggled with no online booking system and low visibility. We created a beautiful website showcasing their services and integrated a booking system to reduce administrative overhead.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-600">Minimal online presence - only on Google Maps</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-600">No way to showcase services & therapists online</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-600">Manual appointment scheduling was time-consuming</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-teal-500 flex-shrink-0" />
                <span className="text-gray-600">No booking confirmation or reminder system</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We designed a serene website that perfectly reflects the wellness brand. We integrated a smart booking system with automatic confirmations, reminders, and payment processing to streamline operations.
            </p>

            <div className="bg-teal-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Key Features Implemented:</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Online appointment booking with calendar sync</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Therapist profiles & specialties</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Service pricing & package options</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Automated booking confirmations & SMS reminders</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Online payment processing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Customer reviews & ratings section</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            
            <div className="mb-8 pb-8 border-b border-teal-400">
              <p className="text-teal-100 text-sm mb-1">Client Type</p>
              <p className="text-lg font-semibold">Wellness & Spa</p>
            </div>

            <div className="mb-8 pb-8 border-b border-teal-400">
              <p className="text-teal-100 text-sm mb-1">Services</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Website Design</li>
                <li>✓ Booking System</li>
                <li>✓ Payment Processing</li>
                <li>✓ SMS Integration</li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-teal-400">
              <p className="text-teal-100 text-sm mb-1">Timeline</p>
              <p className="text-lg font-semibold">7 Weeks</p>
            </div>

            <div>
              <p className="text-teal-100 text-sm mb-1">Budget</p>
              <p className="text-lg font-semibold">KES 42,000</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">70%</p>
              <p className="text-gray-600">Online Bookings</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">90%</p>
              <p className="text-gray-600">No-Show Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">4.9/5</p>
              <p className="text-gray-600">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">45%</p>
              <p className="text-gray-600">Revenue Growth</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Wellness Business</h2>
          <p className="text-teal-100 mb-6 text-lg">We help service-based businesses thrive online</p>
          <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-all">
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellnessSpa;
import React from 'react';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreshGrocers = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Fresh Grocers Kenya</h1>
          <p className="text-green-100 text-lg">E-commerce platform with M-Pesa integration</p>
        </div>
      </header>

      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop"
          alt="Fresh Grocers"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fresh Grocers Kenya wanted to expand their business by offering online ordering with home delivery. They needed an e-commerce platform that integrated with M-Pesa for payments - crucial for their Kenyan market.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">No online ordering system - only physical store sales</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Needed M-Pesa payment integration for local customers</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Inventory management was done manually</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Needed delivery tracking system</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We built a complete e-commerce platform with M-Pesa integration, inventory management, and order tracking. Customers can browse products, order online, and track deliveries in real-time.
            </p>

            <div className="bg-green-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Key Features Implemented:</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">M-Pesa payment integration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Real-time inventory management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Order tracking system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Customer reviews and ratings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Delivery radius calculator</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Admin dashboard for orders and inventory</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            
            <div className="mb-8 pb-8 border-b border-green-400">
              <p className="text-green-100 text-sm mb-1">Client Type</p>
              <p className="text-lg font-semibold">E-commerce Business</p>
            </div>

            <div className="mb-8 pb-8 border-b border-green-400">
              <p className="text-green-100 text-sm mb-1">Services</p>
              <ul className="space-y-2 text-sm">
                <li>✓ E-commerce Development</li>
                <li>✓ M-Pesa Integration</li>
                <li>✓ Admin Dashboard</li>
                <li>✓ Mobile App (iOS/Android)</li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-green-400">
              <p className="text-green-100 text-sm mb-1">Timeline</p>
              <p className="text-lg font-semibold">12 Weeks</p>
            </div>

            <div>
              <p className="text-green-100 text-sm mb-1">Budget</p>
              <p className="text-lg font-semibold">KES 85,000</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">300%</p>
              <p className="text-gray-600">Revenue Increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">2,000+</p>
              <p className="text-gray-600">Online Orders</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">1,500+</p>
              <p className="text-gray-600">Active Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Online?</h2>
          <p className="text-green-100 mb-6 text-lg">Let's build your e-commerce success story</p>
          <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-all">
            Start Your Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreshGrocers;
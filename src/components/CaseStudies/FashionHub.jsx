import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FashionHub = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Fashion Hub KE</h1>
          <p className="text-pink-100 text-lg">Complete e-commerce solution with inventory</p>
        </div>
      </header>

      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
          alt="Fashion Hub"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fashion Hub KE needed to expand from physical retail to online sales. We built a modern e-commerce platform with advanced inventory management and marketing tools.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="text-pink-500 flex-shrink-0" />
                <span className="text-gray-600">Physical store inventory couldn't sync online</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-pink-500 flex-shrink-0" />
                <span className="text-gray-600">Needed multiple payment methods</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-pink-500 flex-shrink-0" />
                <span className="text-gray-600">Wanted marketing features like discounts & email campaigns</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-pink-500 flex-shrink-0" />
                <span className="text-gray-600">Complex product variants (sizes, colors)</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We created a comprehensive e-commerce solution with real-time inventory sync, multiple payment methods, marketing automation, and advanced product management for fashion items with variants.
            </p>

            <div className="bg-pink-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Key Features Implemented:</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span className="text-gray-700">Real-time inventory management with store sync</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span className="text-gray-700">Product variants (sizes, colors, styles)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span className="text-gray-700">Multiple payment methods (Card, M-Pesa, PayPal)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span className="text-gray-700">Discount codes & promotional campaigns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span className="text-gray-700">Email marketing automation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span className="text-gray-700">Wishlist & product recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-rose-600 text-white p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            
            <div className="mb-8 pb-8 border-b border-pink-400">
              <p className="text-pink-100 text-sm mb-1">Client Type</p>
              <p className="text-lg font-semibold">Fashion Retail</p>
            </div>

            <div className="mb-8 pb-8 border-b border-pink-400">
              <p className="text-pink-100 text-sm mb-1">Services</p>
              <ul className="space-y-2 text-sm">
                <li>✓ E-commerce Platform</li>
                <li>✓ Inventory System</li>
                <li>✓ Payment Integration</li>
                <li>✓ Marketing Tools</li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-pink-400">
              <p className="text-pink-100 text-sm mb-1">Timeline</p>
              <p className="text-lg font-semibold">14 Weeks</p>
            </div>

            <div>
              <p className="text-pink-100 text-sm mb-1">Budget</p>
              <p className="text-lg font-semibold">KES 75,000</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-600 mb-2">250%</p>
              <p className="text-gray-600">Sales Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-600 mb-2">10,000+</p>
              <p className="text-gray-600">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-600 mb-2">5,000+</p>
              <p className="text-gray-600">Active Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-600 mb-2">3.2%</p>
              <p className="text-gray-600">Conversion Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Scale Your Fashion Business Online</h2>
          <p className="text-pink-100 mb-6 text-lg">We specialize in fashion e-commerce solutions</p>
          <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-lg font-semibold transition-all">
            View Our Fashion Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionHub;
import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const FashionHub = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Fashion Hub KE</h1>
            <p className="text-2xl text-pink-100 mb-8">Complete E-Commerce Solution with Inventory</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all">
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
                  Fashion Hub was manually managing inventory across multiple warehouses and had no online presence. They were losing customers to competitors selling online.
                </p>
                <p className="text-lg text-gray-600">
                  They needed a modern e-commerce platform that could handle complex inventory, multiple sizes/colors, and seamless ordering experience.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                alt="Fashion Hub"
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
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Advanced Store</h3>
                <p className="text-gray-600">
                  Beautiful e-commerce store with advanced filtering, size/color variants, and recommendations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Inventory</h3>
                <p className="text-gray-600">
                  Real-time inventory management across warehouses with automated stock alerts.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Sales analytics, customer insights, and trend reports for business decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-pink-50 p-8 rounded-xl">
                <TrendingUp className="text-pink-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">5x</p>
                <p className="text-gray-600">Revenue Growth</p>
              </div>
              <div className="bg-rose-50 p-8 rounded-xl">
                <Users className="text-rose-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">3,500+</p>
                <p className="text-gray-600">Monthly Orders</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <Zap className="text-purple-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">99.8%</p>
                <p className="text-gray-600">Uptime</p>
              </div>
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-4xl font-bold text-gray-900 mb-2">4.9/5</p>
                <p className="text-gray-600">Store Rating</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Features Implemented</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Size/Color Variants</p>
                <p className="text-gray-600 text-sm">Complex product variants with separate inventory</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Multiple Warehouses</p>
                <p className="text-gray-600 text-sm">Manage stock across multiple locations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Wishlist Feature</p>
                <p className="text-gray-600 text-sm">Save items and get notified on price changes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Return Management</p>
                <p className="text-gray-600 text-sm">Easy returns and exchange process</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Social Integration</p>
                <p className="text-gray-600 text-sm">Share products on Instagram and Facebook</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Customer Segmentation</p>
                <p className="text-gray-600 text-sm">Targeted marketing to customer groups</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Launch Your Fashion Store Online</h2>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105">
              Get Your Store Today
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FashionHub;
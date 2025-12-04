import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const FreshGrocers = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Fresh Grocers Kenya</h1>
            <p className="text-2xl text-green-100 mb-8">E-Commerce Platform with M-Pesa Integration</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all">
                Visit Store
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
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
                  Fresh Grocers was operating only through physical stores, limiting their reach and customer base. With increasing competition from online retailers, they needed to establish an online presence.
                </p>
                <p className="text-lg text-gray-600">
                  The biggest challenge was integrating M-Pesa payments for local customers and managing inventory across online and offline channels.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1552821519-7ceac1d0a28b?w=600&h=400&fit=crop" 
                alt="Fresh Grocers"
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
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Full E-Commerce Store</h3>
                <p className="text-gray-600">
                  Complete online store with product listings, categories, search functionality, and shopping cart system.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">M-Pesa Payment</h3>
                <p className="text-gray-600">
                  Seamless M-Pesa integration for easy payment processing. Customers pay directly from their phones.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Inventory Management</h3>
                <p className="text-gray-600">
                  Real-time inventory tracking synced between online store and physical locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-green-50 p-8 rounded-xl">
                <TrendingUp className="text-green-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">3x</p>
                <p className="text-gray-600">Sales Growth</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-xl">
                <Users className="text-emerald-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">1,200+</p>
                <p className="text-gray-600">Online Orders/Month</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <Zap className="text-blue-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">98%</p>
                <p className="text-gray-600">Uptime</p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-xl">
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
                <p className="font-semibold text-gray-900 mb-2">✅ M-Pesa Integration</p>
                <p className="text-gray-600 text-sm">Complete payment processing with M-Pesa API</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Product Filters</p>
                <p className="text-gray-600 text-sm">Advanced filtering by category, price, and availability</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Order Tracking</p>
                <p className="text-gray-600 text-sm">Real-time order status updates and notifications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Delivery Management</p>
                <p className="text-gray-600 text-sm">Integrated delivery system with multiple options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Customer Reviews</p>
                <p className="text-gray-600 text-sm">Product reviews and ratings system</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Admin Dashboard</p>
                <p className="text-gray-600 text-sm">Complete backend for inventory and orders</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FreshGrocers;
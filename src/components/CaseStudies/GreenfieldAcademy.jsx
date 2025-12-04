import React from 'react';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const GreenfieldAcademy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Greenfield Academy</h1>
          <p className="text-blue-100 text-lg">Modern school website with online admissions system</p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop"
          alt="Greenfield Academy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Case Study Content */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Greenfield Academy needed a modern online presence to attract new students and streamline their admissions process. They were losing potential enrollments because their outdated website couldn't handle online applications.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Outdated website design that didn't reflect the school's quality</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">No online admissions system - all applications were manual</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Poor mobile experience affecting potential parents</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Limited visibility on search engines</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We built a modern, fully responsive website with an integrated online admissions portal. The site showcases the school's programs, facilities, and student achievements while making it easy for parents to apply online.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Key Features Implemented:</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Online admissions portal with automated confirmation emails</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Student success stories and photo gallery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Teacher profiles and department pages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Event calendar and news blog</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Mobile-optimized design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">SEO optimization for local search</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            
            <div className="mb-8 pb-8 border-b border-blue-400">
              <p className="text-blue-100 text-sm mb-1">Client Type</p>
              <p className="text-lg font-semibold">Educational Institution</p>
            </div>

            <div className="mb-8 pb-8 border-b border-blue-400">
              <p className="text-blue-100 text-sm mb-1">Services</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Web Design</li>
                <li>✓ Web Development</li>
                <li>✓ Online Portal</li>
                <li>✓ SEO Optimization</li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-blue-400">
              <p className="text-blue-100 text-sm mb-1">Timeline</p>
              <p className="text-lg font-semibold">8 Weeks</p>
            </div>

            <div>
              <p className="text-blue-100 text-sm mb-1">Budget</p>
              <p className="text-lg font-semibold">KES 55,000</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-green-500" size={32} />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">40%</p>
              <p className="text-gray-600">Increase in Online Applications</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">3x</p>
              <p className="text-gray-600">More Website Traffic</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">85%</p>
              <p className="text-gray-600">Mobile Users</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-orange-600" size={32} />
              </div>
              <p className="text-3xl font-bold text-orange-600 mb-2">95%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Website Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop"
              alt="Dashboard"
              className="rounded-xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Mobile View"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-6 text-lg">Let's create something amazing together</p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreenfieldAcademy;
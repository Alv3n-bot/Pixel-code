import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TechInstitute = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Tech Institute</h1>
            <p className="text-2xl text-indigo-100 mb-8">Online Learning Platform & Student Portal</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
                Explore Platform
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all">
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
                  Tech Institute wanted to expand beyond physical classrooms and reach students across Kenya. They needed a complete learning management system for online courses, assignments, and student tracking.
                </p>
                <p className="text-lg text-gray-600">
                  The platform needed to be user-friendly for both instructors and students while providing comprehensive learning analytics.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop" 
                alt="Tech Institute"
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
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Learning Platform</h3>
                <p className="text-gray-600">
                  Complete LMS with video hosting, live classes, assignments, and progress tracking.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Student Portal</h3>
                <p className="text-gray-600">
                  Dashboard for grades, course materials, assignments, and communication with instructors.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Analytics & Reporting</h3>
                <p className="text-gray-600">
                  Comprehensive insights into student performance and learning outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-indigo-50 p-8 rounded-xl">
                <TrendingUp className="text-indigo-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
                <p className="text-gray-600">Active Students</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <Users className="text-blue-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">12</p>
                <p className="text-gray-600">Active Courses</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <Zap className="text-purple-600 mx-auto mb-4" size={40} />
                <p className="text-4xl font-bold text-gray-900 mb-2">92%</p>
                <p className="text-gray-600">Completion Rate</p>
              </div>
              <div className="bg-cyan-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-4xl font-bold text-gray-900 mb-2">4.7/5</p>
                <p className="text-gray-600">Platform Rating</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Features Implemented</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Video Hosting</p>
                <p className="text-gray-600 text-sm">Stream quality video content without buffering</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Live Classes</p>
                <p className="text-gray-600 text-sm">Interactive live sessions with Q&A functionality</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Assignment System</p>
                <p className="text-gray-600 text-sm">Upload, submission, and grading system</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Discussion Forums</p>
                <p className="text-gray-600 text-sm">Peer-to-peer learning and collaboration</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Grade Management</p>
                <p className="text-gray-600 text-sm">Automatic grading and transcript generation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold text-gray-900 mb-2">✅ Mobile Access</p>
                <p className="text-gray-600 text-sm">Full platform access on mobile devices</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Online Courses?</h2>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105">
              Start Building Your Platform
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TechInstitute;
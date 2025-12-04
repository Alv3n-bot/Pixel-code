import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechInstitute = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Tech Institute</h1>
          <p className="text-indigo-100 text-lg">Online learning platform & student portal</p>
        </div>
      </header>

      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&h=600&fit=crop"
          alt="Tech Institute"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tech Institute needed an online learning platform to reach students beyond their physical location. We built a complete LMS with video courses, quizzes, and student progress tracking.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600">Limited to physical classroom capacity</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600">No way to deliver online courses</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600">Manual student progress tracking</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600">Missing out on online education market</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We developed a custom Learning Management System with video streaming, interactive quizzes, assignments, and certificates. Students can learn at their own pace while instructors monitor progress.
            </p>

            <div className="bg-indigo-50 p-8 rounded-xl mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Key Features Implemented:</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Video course hosting & streaming</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Interactive quizzes & assessments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Assignment submission & grading</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Automated certificates of completion</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Student progress dashboard</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-gray-700">Discussion forums for student interaction</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            
            <div className="mb-8 pb-8 border-b border-indigo-400">
              <p className="text-indigo-100 text-sm mb-1">Client Type</p>
              <p className="text-lg font-semibold">Educational Tech</p>
            </div>

            <div className="mb-8 pb-8 border-b border-indigo-400">
              <p className="text-indigo-100 text-sm mb-1">Services</p>
              <ul className="space-y-2 text-sm">
                <li>✓ LMS Development</li>
                <li>✓ Video Integration</li>
                <li>✓ Custom Portal</li>
                <li>✓ Mobile App</li>
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-indigo-400">
              <p className="text-indigo-100 text-sm mb-1">Timeline</p>
              <p className="text-lg font-semibold">16 Weeks</p>
            </div>

            <div>
              <p className="text-indigo-100 text-sm mb-1">Budget</p>
              <p className="text-lg font-semibold">KES 120,000</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-2">5,000+</p>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-2">50+</p>
              <p className="text-gray-600">Online Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-2">150%</p>
              <p className="text-gray-600">Revenue Increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-2">92%</p>
              <p className="text-gray-600">Completion Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your School with Online Learning</h2>
          <p className="text-indigo-100 mb-6 text-lg">We help educational institutions go digital</p>
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-all">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechInstitute;
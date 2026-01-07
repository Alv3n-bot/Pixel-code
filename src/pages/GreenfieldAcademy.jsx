import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Award, Users, BookOpen, Trophy, Heart, Shield, Star, Clock, Calendar, Download, Send, ArrowUp, Bell, GraduationCap, Microscope, Palette, Music } from 'lucide-react';

export default function GreenfieldAcademy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const stats = [
    { number: '1,200+', label: 'Students' },
    { number: '85+', label: 'Teachers' },
    { number: '25', label: 'Years' },
    { number: '98%', label: 'Success Rate' }
  ];

  const programs = [
    { icon: BookOpen, title: 'Primary School', description: 'Foundation education with focus on core subjects and character development', grades: 'Grades 1-5' },
    { icon: GraduationCap, title: 'Middle School', description: 'Comprehensive curriculum preparing students for advanced learning', grades: 'Grades 6-8' },
    { icon: Trophy, title: 'High School', description: 'College prep programs with advanced placement courses', grades: 'Grades 9-12' },
    { icon: Microscope, title: 'STEM Program', description: 'Advanced science, technology, engineering, and mathematics', grades: 'All Levels' }
  ];

  const features = [
    { icon: Award, title: 'Excellence in Education', description: 'Award-winning curriculum and teaching methodologies recognized nationally' },
    { icon: Users, title: 'Small Class Sizes', description: 'Average 15:1 student-teacher ratio for personalized attention' },
    { icon: Heart, title: 'Holistic Development', description: 'Focus on academic, social, emotional, and physical growth' },
    { icon: Shield, title: 'Safe Environment', description: 'State-of-the-art security and caring, supportive atmosphere' },
    { icon: Star, title: 'Expert Faculty', description: 'Highly qualified teachers with advanced degrees and certifications' },
    { icon: Trophy, title: 'Proven Results', description: '98% college acceptance rate and numerous scholarship awards' }
  ];

  const staff = [
    { name: 'Dr. Sarah Mitchell', title: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'Prof. James Anderson', title: 'Academic Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { name: 'Maria Rodriguez', title: 'Head of STEM', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
    { name: 'David Chen', title: 'Sports Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' }
  ];

  const gallery = [
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', alt: 'Students in classroom' },
    { url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop', alt: 'Science laboratory' },
    { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', alt: 'Library facilities' },
    { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop', alt: 'Sports activities' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop', alt: 'Art class' },
    { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop', alt: 'Campus grounds' }
  ];

  const specialPrograms = [
    { icon: Palette, title: 'Arts & Culture', color: 'bg-purple-100 text-purple-600' },
    { icon: Music, title: 'Music & Drama', color: 'bg-pink-100 text-pink-600' },
    { icon: Trophy, title: 'Athletics', color: 'bg-blue-100 text-blue-600' },
    { icon: Microscope, title: 'Robotics', color: 'bg-green-100 text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      {showAnnouncement && (
        <div className="bg-green-600 text-white py-2 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Bell className="w-4 h-4" />
            <span>Open House: January 15, 2025 - Register Now!</span>
          </div>
          <button onClick={() => setShowAnnouncement(false)} className="hover:bg-green-700 p-1 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Greenfield Academy</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {['Home', 'About', 'Programs', 'Admissions', 'Staff', 'Gallery', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all transform hover:scale-105">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Programs', 'Admissions', 'Staff', 'Gallery', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 rounded"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Where Future Leaders <span className="text-green-600">Begin Their Journey</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Excellence in education since 2000. Nurturing minds, building character, inspiring success.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('programs')} className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 flex items-center gap-2">
                  Explore Programs <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-white text-green-600 px-8 py-4 rounded-full border-2 border-green-600 hover:bg-green-50 transition-all">
                  Book a Visit
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
                alt="Happy students"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Greenfield Academy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of excellence, innovation, and holistic education that prepares students for success in an ever-changing world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide a nurturing and challenging educational environment that empowers every student to reach their full potential academically, socially, and emotionally.
              </p>
              <p className="text-gray-600">
                We believe in developing critical thinkers, compassionate leaders, and lifelong learners who will make positive contributions to society.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3">
                {['Excellence in all endeavors', 'Integrity and honesty', 'Respect and inclusivity', 'Innovation and creativity', 'Community and collaboration'].map((value, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education from primary through high school with specialized programs to nurture every talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-green-600 font-medium mb-3">{program.grades}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          {/* Special Programs */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Special Programs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specialPrograms.map((sp, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-16 h-16 ${sp.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <sp.icon className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-gray-900">{sp.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Greenfield Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart and makes us the preferred choice for families seeking excellence in education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 border-2 border-gray-100 rounded-xl hover:border-green-600 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-green-50 p-8 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "Greenfield Academy has been transformational for our daughter. The dedicated teachers, comprehensive curriculum, and nurturing environment have helped her flourish both academically and personally."
            </p>
            <p className="font-semibold text-gray-900">- Jennifer Martinez, Parent</p>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced educators committed to excellence and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our vibrant campus and see students engaged in learning, sports, and creative activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((image, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl group cursor-pointer">
                <img src={image.url} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-all font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Admissions Information</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join our community of learners. Start your journey with Greenfield Academy today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Admission Process</h3>
              <ul className="space-y-2 text-green-100">
                <li>1. Submit online application</li>
                <li>2. Schedule campus tour</li>
                <li>3. Assessment & interview</li>
                <li>4. Receive decision</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Important Dates</h3>
              <ul className="space-y-2 text-green-100">
                <li>Open House: Jan 15, 2025</li>
                <li>Application Deadline: Mar 1</li>
                <li>Admissions Testing: Mar 15</li>
                <li>Enrollment: Apr 1-30</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl">
              <Download className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Requirements</h3>
              <ul className="space-y-2 text-green-100">
                <li>Completed application form</li>
                <li>Birth certificate</li>
                <li>Previous school records</li>
                <li>Health records</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all transform hover:scale-105 inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-green-600`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-green-600`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-green-600`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-green-600`}
                    placeholder="Your message..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Education Boulevard<br />Greenfield City, State 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@greenfieldacademy.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all transform hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all transform hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all transform hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all transform hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Greenfield</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to achieve excellence and make a positive impact on the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Programs', 'Admissions', 'Faculty', 'Events'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                {['Parent Portal', 'Student Portal', 'Calendar', 'Employment', 'News'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and events.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-green-600"
                />
                <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Greenfield Academy. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110 flex items-center justify-center z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
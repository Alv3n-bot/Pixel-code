import { useState } from 'react';
import { Scale, Building2, Users, Home, Shield, Globe, Check, Loader2, Phone, Mail, MapPin, Clock, Linkedin, Twitter } from 'lucide-react';

const LawFirm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Business formation, contracts, mergers & acquisitions, and corporate governance."
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Divorce, child custody, adoption, and matrimonial property disputes."
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Property transactions, land disputes, lease agreements, and conveyancing."
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Comprehensive defense representation for criminal charges and litigation."
    },
    {
      icon: Globe,
      title: "Immigration Law",
      description: "Work permits, visas, citizenship applications, and immigration appeals."
    },
    {
      icon: Scale,
      title: "Litigation",
      description: "Civil litigation, commercial disputes, and alternative dispute resolution."
    }
  ];

  const testimonials = [
    {
      name: "James Mwangi",
      role: "CEO, TechCorp Kenya",
      text: "Legal Associates handled our company merger with exceptional professionalism. Their attention to detail and expertise in corporate law is unmatched."
    },
    {
      name: "Sarah Njeri",
      role: "Business Owner",
      text: "After struggling with a property dispute for years, Legal Associates resolved it within months. Highly recommend their real estate team."
    },
    {
      name: "David Omondi",
      role: "Private Client",
      text: "The family law team showed great compassion during my custody case. They fought hard and delivered the best outcome for my family."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', date: '' });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://webdesign.ke/wp-content/uploads/2025/04/booking-and-listing-website-design-kenya-1119x800.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/70" />
        </div>
        
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-12 h-12 text-amber-400" />
                <span className="text-amber-400 text-xl font-semibold tracking-wider">LEGAL ASSOCIATES</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Your Trusted Legal Partners
              </h1>
              <p className="text-2xl md:text-3xl text-slate-200 mb-8 font-light">
                Expertise. Integrity. Results.
              </p>
              <button
                onClick={scrollToBooking}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About Our Firm
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                For over 15 years, Legal Associates has been representing clients across Kenya with unwavering dedication and exceptional legal expertise. Our team of seasoned attorneys brings together decades of combined experience in diverse areas of law.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We pride ourselves on providing personalized legal solutions tailored to each client's unique needs. Whether you're an individual seeking justice or a corporation navigating complex legal landscapes, we're here to guide you every step of the way.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our commitment to excellence, ethical practice, and client satisfaction has made us one of Kenya's most trusted law firms.
              </p>
              <div className="flex flex-wrap gap-8 text-slate-900">
                <div>
                  <div className="text-4xl font-bold text-amber-600 mb-1">15+</div>
                  <div className="text-sm text-slate-600 font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600 font-semibold">Cases Won</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-600 mb-1">98%</div>
                  <div className="text-sm text-slate-600 font-semibold">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Legal team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Practice Areas
            </h2>
            <p className="text-xl text-slate-300">
              Comprehensive legal services across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-amber-500 group"
                >
                  <Icon className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Book a Consultation
            </h2>
            <p className="text-xl text-slate-600">
              Take the first step towards resolving your legal matter
            </p>
          </div>

          {showSuccess && (
            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg flex items-start shadow-lg">
              <Check className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-1 text-lg">Consultation Scheduled!</h3>
                <p className="text-green-800">Your consultation has been scheduled. Our team will reach out shortly to confirm the details.</p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+254 712 345 678"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Legal Service Required *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition appearance-none bg-white"
              >
                <option value="">Select a service...</option>
                {practiceAreas.map((area, index) => (
                  <option key={index} value={area.title}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-400 disabled:cursor-not-allowed text-slate-900 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Scheduling...
                </>
              ) : (
                'Schedule Consultation'
              )}
            </button>

            <p className="text-sm text-slate-500 text-center mt-4">
              * All fields are required. We'll contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-600">
              Hear from those we've represented
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500"
              >
                <div className="text-amber-500 text-5xl mb-4 font-serif">"</div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                    <p className="text-slate-600">Upperhill Towers, 5th Floor</p>
                    <p className="text-slate-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+254 700 123 456</p>
                    <p className="text-slate-600">+254 722 987 654</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@legalassociates.co.ke</p>
                    <p className="text-slate-600">consult@legalassociates.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819651230577!2d36.82194631475395!3d-1.2864284359970563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6d3b3b3b3%3A0x1234567890abcdef!2sUpperhill%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-amber-400" />
                <span className="text-xl font-bold">Legal Associates</span>
              </div>
              <p className="text-slate-400 mb-4">
                Your trusted legal partners for over 15 years.
              </p>
              <p className="text-slate-400 text-sm">
                Expertise. Integrity. Results.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition">Practice Areas</a></li>
                <li><button onClick={scrollToBooking} className="text-slate-400 hover:text-white transition">Book Consultation</button></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition group">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition group">
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2025 Legal Associates. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed to practice law in Kenya</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawFirm;
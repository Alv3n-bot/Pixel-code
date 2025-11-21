import React, { useState } from 'react';
import {
  Smartphone, Megaphone, Code, Palette,
  CheckCircle2, BarChart3, Shield, Zap,
  ArrowRight, Menu, X, Mail, Phone, MapPin
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg"></div>
              <span className="text-lg font-semibold tracking-tight">PXCSoftwares</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="hidden md:block px-5 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
              Get Started
            </button>

            <button
              className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1 border-t border-slate-800/50">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-2 px-5 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Re-imagine Your{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Transform ordinary digital products into extraordinary experiences that
                captivate your audience and drive measurable results.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
                <button className="px-6 py-2.5 text-sm font-medium border border-slate-700 rounded-lg hover:bg-slate-800/50 transition-all duration-200">
                  Our Services
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=947&auto=format&fit=crop"
                alt="Digital Experience"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Shield, label: 'Quality Assurance' },
              { icon: Code, label: 'Expert Coding' },
              { icon: Zap, label: 'Fast Delivery' },
              { icon: BarChart3, label: 'Analytics' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-xl border border-slate-800/50 hover:border-violet-500/30 transition-all duration-300 text-center group"
              >
                <feature.icon className="w-7 h-7 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs sm:text-sm font-medium text-slate-300">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-violet-600/20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                alt="Team Member"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Our team transforms ideas into{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  digital solutions
                </span>
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: CheckCircle2,
                    title: 'Customer-Centric Focus',
                    desc: 'We put your customers at the heart of everything we do, ensuring exceptional user experiences.'
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Scalable Solutions',
                    desc: 'Build solutions that grow with your business and adapt to changing market demands.'
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Data-Driven Strategies',
                    desc: 'Leverage analytics and insights to make informed decisions and optimize performance.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
{/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-violet-400 mb-2 tracking-wide uppercase">About Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Innovating Since{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                2020
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We're a dynamic team of creative minds and technical experts dedicated to transforming businesses through cutting-edge digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-violet-600/20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop"
                alt="PXCSoftware Team"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Building the future of{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  digital excellence
                </span>
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                Founded in 2020, PXCSoftware emerged with a vision to bridge the gap between innovative technology and exceptional user experiences. What started as a small team of passionate developers has grown into a powerhouse of 20+ talented professionals delivering world-class digital solutions.
              </p>

              <p className="text-slate-400 leading-relaxed">
                With over 100 successful projects delivered across various industries, we've established ourselves as trusted partners for businesses looking to elevate their digital presence. Our expertise spans web development, mobile applications, digital marketing, and custom software solutions.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    5+
                  </div>
                  <div className="text-xs text-slate-400">Years</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    100+
                  </div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    20+
                  </div>
                  <div className="text-xs text-slate-400">Talents</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Innovation First',
                  desc: 'We embrace emerging technologies and creative solutions to stay ahead of the curve.'
                },
                {
                  icon: Shield,
                  title: 'Quality Commitment',
                  desc: 'Every project meets our rigorous standards for excellence and reliability.'
                },
                {
                  icon: Zap,
                  title: 'Agile Approach',
                  desc: 'We adapt quickly to changes and deliver results with speed and precision.'
                },
                {
                  icon: BarChart3,
                  title: 'Results Driven',
                  desc: 'We measure success by the tangible impact we create for our clients.'
                }
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800/50 hover:border-violet-500/30 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-base mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-violet-500/20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg">
              To empower businesses worldwide with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology when combined with creativity, strategy, and a deep understanding of our clients' needs.
            </p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-violet-400 mb-2 tracking-wide uppercase">Our Services</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Innovative Digital Solutions
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We believe technology and design can transform businesses and propel them into the future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Palette,
                title: 'Web Design',
                desc: 'Create visually stunning and user-friendly websites that captivate your audience.',
                image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop'
              },
              {
                icon: Megaphone,
                title: 'Digital Marketing',
                desc: 'Leverage cutting-edge strategies to drive brand awareness and growth.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
              },
              {
                icon: Code,
                title: 'App Development',
                desc: 'Build powerful, scalable applications that deliver seamless experiences.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
              },
              {
                icon: Smartphone,
                title: 'Graphic Design',
                desc: 'Transform your brand vision into stunning visual assets that stand out.',
                image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-violet-500/30 transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="p-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">{service.desc}</p>
                  <button className="text-cyan-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-violet-400 mb-2 tracking-wide uppercase">Featured Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Impactful Projects
            </h2>
            <p className="text-slate-400 mt-3 leading-relaxed">
              We take pride in delivering solutions that create real impact and drive success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Dynamic Odyssey', category: 'Web Development', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop' },
              { title: 'Design Dynamo', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop' },
              { title: 'Fashion Velocity', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
              { title: 'Code Craftsmen', category: 'App Development', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop' }
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden cursor-pointer h-64 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium text-cyan-400 mb-2 block tracking-wide">{project.category}</span>
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <button className="px-4 py-1.5 border border-slate-700 rounded-lg text-xs font-medium hover:bg-slate-800/50 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-violet-400 tracking-wide uppercase">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Crafting experiences,{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  delivering success
                </span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Our focus is not just on delivering projects but creating experiences that
                leave a lasting impact. We believe in the power of our core values.
              </p>

              <div className="space-y-4">
                {[
                  { number: '15+', label: 'Years of Experience' },
                  { number: '200+', label: 'Strategic talent in our diverse team' },
                  { number: '98%', label: 'Client satisfaction rate' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">
                      <span className="font-semibold text-white">{stat.number}</span> {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <button className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                More About Us
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-violet-600/20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-violet-400 mb-2 tracking-wide uppercase">Our Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Seamless Process, Stellar Solutions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into understanding your goals, challenges, and target audience.' },
              { step: '02', title: 'Planning', desc: 'We create a strategic roadmap aligned with your business objectives.' },
              { step: '03', title: 'Execution', desc: 'Our team brings your vision to life with precision and creativity.' },
              { step: '04', title: 'Launch', desc: 'We ensure a smooth deployment and provide ongoing support.' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800/50 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-slate-800/50">
              <h2 className="text-3xl font-bold mb-3">Request a Quote</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Ready to transform your digital presence? Let's discuss your project.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500 transition text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500 transition text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500 transition text-sm"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-violet-500 transition resize-none text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
                alt="Contact us"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg"></div>
                <span className="text-lg font-semibold">PXCSoftware</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Transforming digital experiences through innovation and creativity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">Quick Links</h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">Services</h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Web Design</a></li>
                <li><a href="#" className="hover:text-white transition">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition">App Development</a></li>
                <li><a href="#" className="hover:text-white transition">Graphic Design</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">Contact Info</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                  <span>hello@pxcsoftware.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2025 PXCSoftware. All rights reserved.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center hover:border-violet-500/30 transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center hover:border-violet-500/30 transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center hover:border-violet-500/30 transition">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
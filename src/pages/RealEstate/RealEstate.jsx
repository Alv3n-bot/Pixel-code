import React, { useState, useEffect } from 'react';
import { Home, MapPin, Bed, Bath, Maximize, Search, ChevronRight, Star, Phone, Mail, Menu, X } from 'lucide-react';

export default function RealEstateWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const properties = [
    {
      id: 1,
      title: "Modern Villa Oasis",
      location: "Beverly Hills, CA",
      price: "$4,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      type: "luxury",
      featured: true
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      type: "apartment",
      featured: true
    },
    {
      id: 3,
      title: "Coastal Estate",
      location: "Malibu, CA",
      price: "$8,500,000",
      beds: 6,
      baths: 5,
      sqft: "6,500",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      type: "luxury",
      featured: false
    },
    {
      id: 4,
      title: "Urban Loft",
      location: "Brooklyn, NY",
      price: "$1,850,000",
      beds: 2,
      baths: 2,
      sqft: "1,900",
      image: "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=800&q=80",
      type: "apartment",
      featured: false
    },
    {
      id: 5,
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$5,600,000",
      beds: 4,
      baths: 4,
      sqft: "5,100",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      type: "luxury",
      featured: true
    },
    {
      id: 6,
      title: "Garden Townhouse",
      location: "San Francisco, CA",
      price: "$2,400,000",
      beds: 3,
      baths: 2,
      sqft: "2,200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      type: "house",
      featured: false
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Home className={`h-8 w-8 ${scrolled ? 'text-purple-600' : 'text-white'}`} />
              <span className={`ml-2 text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                LuxeHomes
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200">
              Discover luxury properties in the world's most prestigious locations
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
                  <MapPin className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
                <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
                  <Home className="text-gray-400 mr-2" />
                  <select className="w-full outline-none text-gray-700">
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 font-semibold">
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '500+', label: 'Premium Properties' },
              { number: '1,200+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Agents' },
              { number: '25+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-transform">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked selection of our finest listings
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap px-4">
            {[
              { label: 'All Properties', value: 'all' },
              { label: 'Luxury', value: 'luxury' },
              { label: 'Apartments', value: 'apartment' },
              { label: 'Houses', value: 'house' }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-64">
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-1">
                      <Star className="h-4 w-4" fill="currentColor" />
                      Featured
                    </div>
                  )}
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Bed className="h-5 w-5" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-5 w-5" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="h-5 w-5" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-bold text-purple-600">{property.price}</span>
                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center gap-2 group">
                      <span className="hidden sm:inline">View Details</span>
                      <span className="sm:hidden">View</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8">
            Let our expert agents guide you through your real estate journey
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Call Us Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-2xl font-bold">LuxeHomes</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding luxury properties worldwide.
              </p>
            </div>
            
            {[
              {
                title: 'Quick Links',
                links: ['About Us', 'Properties', 'Agents', 'Contact']
              },
              {
                title: 'Services',
                links: ['Buy Property', 'Sell Property', 'Rent Property', 'Property Management']
              },
              {
                title: 'Contact',
                links: ['info@luxehomes.com', '+1 (555) 123-4567', '123 Real Estate Ave', 'Los Angeles, CA']
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LuxeHomes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolio = [
    {
      id: 1,
      category: "schools",
      title: "Greenfield Academy",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      description: "Modern school website with online admissions"
    },
    {
      id: 2,
      category: "business",
      title: "Fresh Grocers Kenya",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      description: "E-commerce platform with M-Pesa integration"
    },
    {
      id: 3,
      category: "business",
      title: "Urban Barbershop",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop",
      description: "Booking system and social media campaign"
    },
    {
      id: 4,
      category: "schools",
      title: "Tech Institute",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
      description: "Online learning platform and student portal"
    },
    {
      id: 5,
      category: "ecommerce",
      title: "Fashion Hub KE",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Complete e-commerce solution with inventory"
    },
    {
      id: 6,
      category: "business",
      title: "Wellness Spa",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      description: "Appointment booking and service showcase"
    }
  ];

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Real results for real businesses across Kenya
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'schools', 'business', 'ecommerce'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                  <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
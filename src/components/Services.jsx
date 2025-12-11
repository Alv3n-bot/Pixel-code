import React from 'react';
import { Globe, Share2, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Design & Development",
      description: "Modern websites that convert visitors into customers. Responsive, fast, and built to grow your business.",
      link: "#services"
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "AI Automation ",
      description: "Streamline your workflows and save time with AI-powered automation. Automate customer support, lead collection, emails, forms, and repetitive tasks so you can focus on growing your business.",
      link: "#services"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Ads that bring real customers. Targeted campaigns on Facebook, Instagram, and Google that deliver results.",
      link: "#services"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete digital solutions to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <a 
                href={service.link}
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Mwangi",
      role: "Principal, Greenfield Academy",
      content: "WebMtaani transformed our online presence. Admissions increased by 40% since the new website launched!",
      rating: 5
    },
    {
      name: "David Ochieng",
      role: "Owner, Fresh Grocers",
      content: "Professional service at an affordable price. Our online sales have tripled in just 3 months.",
      rating: 5
    },
    {
      name: "Sarah Kamau",
      role: "Manager, Urban Barbershop",
      content: "The social media management service is excellent. Our Instagram following grew from 200 to 5,000!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
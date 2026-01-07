import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "10,000",
      popular: true,
      features: [
        "1-3 page website",
        "Mobile responsive design",
        "WhatsApp integration",
        "Contact form setup",
        "Basic SEO optimization",
        "1 week delivery",
        "2 revision rounds",
      ]
    },
    {
      name: "Business",
      price: "45,000",
      popular: false,
      features: [
        "Up to 8 pages",
        "Custom design & branding",
        "Blog/CMS setup",
        "WhatsApp & contact forms",
        "Google Analytics integration",
        "M-Pesa ready structure",
        "2-3 weeks delivery",
        "3 revision rounds",
        "Life Time support"
      ]
    },
    {
      name: "Premium",
      price: "120,000",
      priceLabel: "Starting at",
      popular: false,
      features: [
        "E-commerce functionality",
        "M-Pesa payment integration",
        "Custom admin dashboard",
        "Product management system",
        "Order tracking",
        "Custom features as needed",
        "4-6 weeks delivery",
        "Dedicated support",
        "Life Time support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Clear Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Straightforward packages designed for Kenyan businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-4 ring-blue-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              
              <div className="mb-6">
                {plan.priceLabel && (
                  <span className="text-sm text-gray-500 block mb-1">{plan.priceLabel}</span>
                )}
                <span className="text-5xl font-bold text-blue-600">KES {plan.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 rounded-lg font-semibold transition-all text-center ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ongoing Maintenance</h3>
              <p className="text-gray-600">Keep your website secure and up-to-date</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-4">KES 5,000/month</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Regular security updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Content updates (minor changes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Technical support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Performance monitoring</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Optional monthly service to ensure your website stays fast, secure, and functional. No long-term contracts required.
                </p>
                <a 
                  href="#contact"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          All prices are one-time payments. Hosting and domain registration billed separately.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
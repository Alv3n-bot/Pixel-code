import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "25,000",
      popular: false,
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Contact form integration",
        "Basic SEO setup",
        "2 rounds of revisions",
        "1 month support"
      ]
    },
    {
      name: "Growth",
      price: "45,000",
      popular: true,
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "WhatsApp integration",
        "Advanced SEO optimization",
        "Blog setup",
        "Social media integration",
        "5 rounds of revisions",
        "3 months support"
      ]
    },
    {
      name: "Premium",
      price: "60,000",
      popular: false,
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Payment gateway setup",
        "Advanced animations",
        "Custom features",
        "Priority support",
        "Unlimited revisions",
        "6 months support",
        "Free hosting (1 year)"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional quality at prices that make sense for Kenyan businesses
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <div className="mb-6">
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

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}>
                {plan.popular ? 'Get Started' : 'Get Quote'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
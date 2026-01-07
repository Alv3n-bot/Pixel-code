import React, { useState } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    
    // WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = '254794994316';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help your business grow online
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/254794994316" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="text-green-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600">+254 794994316</p>
                </div>
              </a>

              <a 
                href="tel:+254794994316"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Phone className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+254 794994316</p>
                </div>
              </a>

              <a 
                href="mailto:pxcsoftwares@gmail.com"
                className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Mail className="text-purple-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">pxcsoftwares@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
              ></textarea>
              
              <button 
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
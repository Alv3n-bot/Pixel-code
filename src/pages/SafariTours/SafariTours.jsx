import { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock, Star, X, Check, Loader2, Menu } from 'lucide-react';
import HeroImage from './images/Hero.jpg';

const SafariTours = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tour: '',
    date: '',
    guests: 1
  });
  const [availability, setAvailability] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tours = [
    {
      id: 1,
      name: "Maasai Mara Safari",
      location: "Maasai Mara National Reserve",
      duration: "3 Days / 2 Nights",
      price: 850,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      description: "Experience the iconic Maasai Mara, home to the Great Migration and abundant wildlife including the Big Five.",
      highlights: ["Game drives twice daily", "Luxury tented camp", "Cultural Maasai village visit", "Professional guide"],
      maxCapacity: 12
    },
    {
      id: 2,
      name: "Amboseli Elephant Safari",
      location: "Amboseli National Park",
      duration: "4 Days / 3 Nights",
      price: 1200,
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
      description: "Marvel at large elephant herds with the majestic Mount Kilimanjaro providing a stunning backdrop.",
      highlights: ["Elephant tracking", "Kilimanjaro views", "Observation Hill visit", "Bush breakfast experience"],
      maxCapacity: 8
    },
    {
      id: 3,
      name: "Tsavo Adventure",
      location: "Tsavo East & West National Parks",
      duration: "5 Days / 4 Nights",
      price: 1500,
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
      description: "Explore Kenya's largest national park, known for red elephants, diverse landscapes, and rich history.",
      highlights: ["Two parks exploration", "Mzima Springs visit", "Lugard Falls", "Night game drives"],
      maxCapacity: 10
    },
    {
      id: 4,
      name: "Lake Nakuru & Naivasha",
      location: "Rift Valley Lakes",
      duration: "2 Days / 1 Night",
      price: 650,
      image: "https://images.unsplash.com/photo-1623745493572-ef78d94249f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMG5ha3VydSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      description: "Discover flamingo-filled lakes, rhino sanctuaries, and incredible birdlife in the Great Rift Valley.",
      highlights: ["Flamingo viewing", "Boat safari", "Rhino sanctuary", "Crescent Island walk"],
      maxCapacity: 15
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      rating: 5,
      text: "An absolutely unforgettable experience! The guides were knowledgeable and the wildlife encounters were breathtaking."
    },
    {
      name: "David Chen",
      country: "Singapore",
      rating: 5,
      text: "Safari Tours Kenya exceeded all expectations. Professional service, amazing accommodations, and incredible sights!"
    },
    {
      name: "Emma Williams",
      country: "UK",
      rating: 5,
      text: "The Maasai Mara safari was the highlight of our African adventure. Highly recommend this company!"
    }
  ];

  const checkAvailability = (tourId, date) => {
    if (!tourId || !date) {
      setAvailability(null);
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setAvailability({ status: 'invalid', message: 'Please select a future date' });
      return;
    }

    const tour = tours.find(t => t.id === parseInt(tourId));
    const dayOfWeek = selectedDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    let spotsLeft = tour.maxCapacity;

    if (isWeekend) {
      spotsLeft = Math.floor(spotsLeft * 0.4);
    } else {
      spotsLeft = Math.floor(spotsLeft * 0.7);
    }

    const randomFactor = Math.random();
    if (randomFactor < 0.2) {
      spotsLeft = 0;
    }

    if (spotsLeft === 0) {
      setAvailability({ status: 'unavailable', message: 'Fully booked for this date' });
    } else if (spotsLeft <= 3) {
      setAvailability({ status: 'limited', message: `Only ${spotsLeft} spots remaining!`, spotsLeft });
    } else {
      setAvailability({ status: 'available', message: `${spotsLeft} spots available`, spotsLeft });
    }
  };

  useEffect(() => {
    checkAvailability(formData.tour, formData.date);
  }, [formData.tour, formData.date]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', tour: '', date: '', guests: 1 });
      setAvailability(null);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openModal = (tour) => {
    setSelectedTour(tour);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTour(null);
  };

  const selectTourFromModal = () => {
    setFormData(prev => ({ ...prev, tour: selectedTour.id.toString() }));
    closeModal();
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-emerald-900 text-white sticky top-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
            Safari Tours Kenya
          </h1>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-300 transition-colors">Home</button>
            <button onClick={() => scrollToSection('tours')} className="hover:text-amber-300 transition-colors">Tours</button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-amber-300 transition-colors">Book Now</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-300 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-300 transition-colors">Contact</button>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-900 pb-4">
            <div className="flex flex-col items-center space-y-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-amber-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('tours')} className="hover:text-amber-300 transition-colors">Tours</button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-amber-300 transition-colors">Book Now</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-300 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-amber-300 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </header>

      <div id="home" className="relative h-screen">
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${HeroImage})` }}
         >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Discover Kenya's Untamed Wilderness
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Embark on an unforgettable safari adventure with us.
            </p>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              Book Your Adventure
            </button>
          </div>
        </div>
      </div>

      <section id="tours" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Our Signature Safari Tours
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Explore Kenya's premier national parks with our expertly crafted itineraries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    {tour.name}
                  </h3>
                  <div className="flex items-center text-stone-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-stone-600 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {tour.duration}
                  </div>
                  <button
                    onClick={() => openModal(tour)}
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-b from-green-50 to-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Reserve Your Safari
            </h2>
            <p className="text-lg text-stone-600">
              Secure your spot on an extraordinary journey
            </p>
          </div>

          {showSuccess && (
            <div className="mb-8 bg-green-100 border-l-4 border-green-600 p-4 rounded-lg flex items-start">
              <Check className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-green-900 mb-1">Booking Received!</h3>
                <p className="text-green-800">Your safari booking has been received! We'll contact you shortly with confirmation details.</p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Select Tour
              </label>
              <select
                name="tour"
                value={formData.tour}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition appearance-none bg-white"
              >
                <option value="">Choose a safari tour...</option>
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.id}>
                    {tour.name} - ${tour.price} ({tour.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  min="1"
                  max="15"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {availability && (
              <div className={`mb-6 p-4 rounded-lg ${
                availability.status === 'available' ? 'bg-green-50 border border-green-200' :
                availability.status === 'limited' ? 'bg-amber-50 border border-amber-200' :
                availability.status === 'unavailable' ? 'bg-red-50 border border-red-200' :
                'bg-stone-50 border border-stone-200'
              }`}>
                <p className={`font-semibold ${
                  availability.status === 'available' ? 'text-green-800' :
                  availability.status === 'limited' ? 'text-amber-800' :
                  availability.status === 'unavailable' ? 'text-red-800' :
                  'text-stone-800'
                }`}>
                  {availability.status === 'available' && '✓ '}
                  {availability.status === 'limited' && '⚠ '}
                  {availability.status === 'unavailable' && '✕ '}
                  {availability.status === 'invalid' && '⚠ '}
                  {availability.message}
                </p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || availability?.status === 'unavailable' || availability?.status === 'invalid'}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-stone-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Complete Booking'
              )}
            </button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-green-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Traveler Stories
            </h2>
            <p className="text-lg text-green-100">
              Hear from our satisfied adventurers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-stone-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-green-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-600">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-8">
            Get in Touch
          </h2>
          <p className="text-lg text-stone-600 mb-4">We're here to answer your questions and plan your perfect safari.</p>
          <div className="space-y-4">
            <p className="text-lg text-stone-600"><strong>Email:</strong> info@safaritourskenya.com</p>
            <p className="text-lg text-stone-600"><strong>Phone:</strong> +254 123 456 789</p>
            <p className="text-lg text-stone-600"><strong>Address:</strong> 123 Safari Lane, Nairobi, Kenya</p>
          </div>
        </div>
      </section>

      <footer className="bg-green-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Safari Tours Kenya. All rights reserved.</p>
      </footer>

      {showModal && selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img
                src={selectedTour.image}
                alt={selectedTour.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-green-900 mb-2">
                {selectedTour.name}
              </h2>
              <div className="flex items-center text-stone-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                {selectedTour.location}
              </div>

              <div className="flex items-center gap-6 mb-6 text-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-700" />
                  <span className="font-semibold">{selectedTour.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-amber-500">${selectedTour.price}</span>
                  <span className="text-stone-600 ml-2">per person</span>
                </div>
              </div>

              <p className="text-stone-700 mb-6 leading-relaxed">
                {selectedTour.description}
              </p>

              <h3 className="text-xl font-bold text-green-900 mb-4">
                Tour Highlights
              </h3>
              <ul className="space-y-3 mb-8">
                {selectedTour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={selectTourFromModal}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafariTours;
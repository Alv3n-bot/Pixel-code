import { useState } from 'react';
import { Dumbbell, Calendar, Users, Award, Clock, Check, X, Loader2, User, Heart, Zap, Target } from 'lucide-react';
import HeroImage from './images/Hero.jpg';

const Fitness = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [bookedClasses, setBookedClasses] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [membershipForm, setMembershipForm] = useState({
    name: '',
    email: '',
    phone: '',
    plan: ''
  });

  const membershipPlans = [
    {
      id: 1,
      name: "Basic",
      price: 2500,
      duration: "month",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "Free Wi-Fi",
        "2 group classes per week"
      ],
      color: "from-slate-600 to-slate-800"
    },
    {
      id: 2,
      name: "Premium",
      price: 4500,
      duration: "month",
      popular: true,
      features: [
        "Unlimited gym access",
        "All group classes",
        "Personal locker",
        "Nutritional guidance",
        "1 personal training session/month"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      name: "Elite",
      price: 7500,
      duration: "month",
      features: [
        "24/7 gym access",
        "Unlimited classes",
        "Private locker",
        "Personal trainer (4 sessions/month)",
        "Nutrition & meal planning",
        "Spa & sauna access",
        "Guest passes (2/month)"
      ],
      color: "from-purple-600 to-pink-600"
    }
  ];

  const classes = [
    {
      id: 1,
      name: "Morning HIIT",
      instructor: "Sarah Johnson",
      time: "6:00 AM - 7:00 AM",
      day: "Mon, Wed, Fri",
      spots: 15,
      booked: 8,
      intensity: "High",
      description: "High-intensity interval training to kickstart your day"
    },
    {
      id: 2,
      name: "Yoga Flow",
      instructor: "Michael Chen",
      time: "9:00 AM - 10:00 AM",
      day: "Tue, Thu",
      spots: 20,
      booked: 12,
      intensity: "Low",
      description: "Gentle yoga practice for flexibility and mindfulness"
    },
    {
      id: 3,
      name: "Spin Class",
      instructor: "Emily Davis",
      time: "6:30 PM - 7:30 PM",
      day: "Mon, Wed, Fri",
      spots: 12,
      booked: 10,
      intensity: "High",
      description: "Intense cycling workout with motivating music"
    },
    {
      id: 4,
      name: "Strength Training",
      instructor: "David Omondi",
      time: "5:00 PM - 6:00 PM",
      day: "Tue, Thu, Sat",
      spots: 10,
      booked: 5,
      intensity: "Medium",
      description: "Build muscle and strength with guided weightlifting"
    },
    {
      id: 5,
      name: "Boxing Fitness",
      instructor: "Alex Martinez",
      time: "7:00 PM - 8:00 PM",
      day: "Mon, Thu",
      spots: 15,
      booked: 11,
      intensity: "High",
      description: "Combat-inspired cardio workout"
    },
    {
      id: 6,
      name: "Pilates",
      instructor: "Rachel Kim",
      time: "10:00 AM - 11:00 AM",
      day: "Wed, Sat",
      spots: 18,
      booked: 9,
      intensity: "Low",
      description: "Core strengthening and flexibility exercises"
    }
  ];

  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "HIIT & Cardio",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
      bio: "Certified fitness trainer specializing in high-intensity workouts"
    },
    {
      name: "Michael Chen",
      specialty: "Yoga & Wellness",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
      bio: "Yoga instructor focused on mind-body connection"
    },
    {
      name: "Amie Esther",
      specialty: "Strength & Conditioning",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=400&q=80",
      bio: "Former athlete turned strength training specialist"
    },
    {
      name: "Emily Davis",
      specialty: "Cycling & Endurance",
      experience: "5 years",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80",
      bio: "Spin instructor with infectious energy and motivation"
    }
  ];

  const handleBookClass = (classItem) => {
    setSelectedClass(classItem);
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    if (bookedClasses.find(c => c.id === selectedClass.id)) {
      alert('You have already booked this class');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setBookedClasses([...bookedClasses, selectedClass]);
      setIsProcessing(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setShowBookingModal(false);
      }, 2000);
    }, 1000);
  };

  const cancelBooking = (classId) => {
    setBookedClasses(bookedClasses.filter(c => c.id !== classId));
  };

  const handleMembershipSelect = (plan) => {
    setSelectedPlan(plan);
    setMembershipForm(prev => ({ ...prev, plan: plan.name }));
    setShowMembershipModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setMembershipForm(prev => ({ ...prev, [name]: value }));
  };

  const handleMembershipSubmit = () => {
    if (!membershipForm.name || !membershipForm.email || !membershipForm.phone) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setMembershipForm({ name: '', email: '', phone: '', plan: '' });
      setTimeout(() => {
        setShowSuccess(false);
        setShowMembershipModal(false);
      }, 3000);
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-orange-100 text-orange-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Dumbbell className="w-14 h-14 text-orange-500" />
                <span className="text-orange-500 text-2xl font-bold tracking-wider">FITLIFE GYM</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
                Get Fit.<br/>Stay Fit.
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light">
                Memberships, class schedules, and personal trainers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('memberships')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
                >
                  View Memberships
                </button>
                <button
                  onClick={() => scrollToSection('classes')}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
                >
                  Browse Classes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Users className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-orange-100">Active Members</div>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Expert Trainers</div>
            </div>
            <div>
              <Target className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-orange-100">Weekly Classes</div>
            </div>
            <div>
              <Heart className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="memberships" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Membership Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-orange-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">KES {plan.price.toLocaleString()}</span>
                    <span className="text-xl">/{plan.duration}</span>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleMembershipSelect(plan)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold transition-colors"
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section id="classes" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Class Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Join our expert-led fitness classes
            </p>
          </div>

          {bookedClasses.length > 0 && (
            <div className="mb-12 bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Your Booked Classes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookedClasses.map((classItem) => (
                  <div key={classItem.id} className="bg-white p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{classItem.name}</div>
                      <div className="text-sm text-gray-600">{classItem.day} - {classItem.time}</div>
                    </div>
                    <button
                      onClick={() => cancelBooking(classItem.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem) => {
              const isBooked = bookedClasses.find(c => c.id === classItem.id);
              const spotsLeft = classItem.spots - classItem.booked;
              
              return (
                <div
                  key={classItem.id}
                  className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-orange-500 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {classItem.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getIntensityColor(classItem.intensity)}`}>
                        {classItem.intensity}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{classItem.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-semibold">{classItem.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{classItem.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{classItem.day}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Availability</span>
                        <span className={`font-bold ${spotsLeft <= 3 ? 'text-red-600' : 'text-green-600'}`}>
                          {spotsLeft} spots left
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${spotsLeft <= 3 ? 'bg-red-500' : 'bg-green-500'}`}
                          style={{ width: `${((classItem.spots - spotsLeft) / classItem.spots) * 100}%` }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookClass(classItem)}
                      disabled={isBooked || spotsLeft === 0}
                      className={`w-full py-3 rounded-lg font-bold transition-colors ${
                        isBooked
                          ? 'bg-green-100 text-green-700 cursor-not-allowed'
                          : spotsLeft === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-orange-600 hover:bg-orange-700 text-white'
                      }`}
                    >
                      {isBooked ? 'Booked ✓' : spotsLeft === 0 ? 'Fully Booked' : 'Book Class'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Meet Our Trainers
            </h2>
            <p className="text-xl text-gray-400">
              Expert guidance from certified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{trainer.specialty}</p>
                  <p className="text-gray-400 text-sm mb-3">{trainer.bio}</p>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Award className="w-4 h-4" />
                    <span>{trainer.experience} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Dumbbell className="w-8 h-8 text-orange-500" />
                <span className="text-xl font-bold">FitLife Gym</span>
              </div>
              <p className="text-gray-400">
                Your journey to a healthier lifestyle starts here.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-orange-500 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('memberships')} className="text-gray-400 hover:text-white transition">Memberships</button></li>
                <li><button onClick={() => scrollToSection('classes')} className="text-gray-400 hover:text-white transition">Classes</button></li>
                <li><a href="#trainers" className="text-gray-400 hover:text-white transition">Trainers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-orange-500 mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">Westlands, Nairobi</p>
              <p className="text-gray-400 mb-2">+254 700 123 456</p>
              <p className="text-gray-400">info@fitlifegym.co.ke</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2025 FitLife Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Class Booking Modal */}
      {showBookingModal && selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            {!showSuccess ? (
              <>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Book Class
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedClass.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedClass.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
                    <p><strong>Time:</strong> {selectedClass.time}</p>
                    <p><strong>Days:</strong> {selectedClass.day}</p>
                    <p><strong>Intensity:</strong> {selectedClass.intensity}</p>
                  </div>
                </div>

                <button
                  onClick={confirmBooking}
                  disabled={isProcessing}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-600 mb-2">
                  Class Booked!
                </h2>
                <p className="text-gray-600">
                  See you in class!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Membership Modal */}
      {showMembershipModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            {!showSuccess ? (
              <>
                <button
                  onClick={() => setShowMembershipModal(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Join {selectedPlan.name} Plan
                </h2>
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Monthly Fee:</span>
                    <span className="text-3xl font-bold text-orange-600">
                      KES {selectedPlan.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={membershipForm.name}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={membershipForm.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={membershipForm.phone}
                      onChange={handleFormChange}
                      placeholder="+254 712 345 678"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <button
                  onClick={handleMembershipSubmit}
                  disabled={isProcessing}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-600 mb-2">
                  Welcome to FitLife!
                </h2>
                <p className="text-gray-600">
                  Your membership application has been received. We'll contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fitness;
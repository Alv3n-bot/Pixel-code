import { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, Check, Loader2, Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import HeroImage from './images/Hero.jpg';

const Restaurant = () => {
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    deliveryOption: 'pickup'
  });

  const menuItems = [
    // Starters
    { id: 1, name: "Samosas", category: "Starters", price: 250, description: "Crispy pastries filled with spiced vegetables or beef" },
    { id: 2, name: "Grilled Maize", category: "Starters", price: 150, description: "Fresh maize grilled to perfection with butter" },
    { id: 3, name: "Chicken Wings", category: "Starters", price: 450, description: "Spicy marinated wings with house sauce" },
    { id: 4, name: "Beef Kebabs", category: "Starters", price: 350, description: "Tender beef skewers with African spices" },
    
    // Main Dishes
    { id: 5, name: "Nyama Choma", category: "Main Dishes", price: 1200, description: "Traditional grilled goat meat with ugali and kachumbari" },
    { id: 6, name: "Tilapia Fish", category: "Main Dishes", price: 950, description: "Whole fried tilapia served with sukuma wiki" },
    { id: 7, name: "Beef Stew", category: "Main Dishes", price: 750, description: "Tender beef in rich tomato gravy with rice" },
    { id: 8, name: "Chicken Biryani", category: "Main Dishes", price: 850, description: "Fragrant spiced rice with tender chicken pieces" },
    { id: 9, name: "Vegetable Pilau", category: "Main Dishes", price: 550, description: "Spiced rice with mixed vegetables and coconut" },
    { id: 10, name: "Grilled Chicken", category: "Main Dishes", price: 900, description: "Half chicken marinated in herbs, served with chips" },
    
    // Desserts
    { id: 11, name: "Mandazi", category: "Desserts", price: 200, description: "Sweet fried dough, perfect with chai" },
    { id: 12, name: "Fruit Salad", category: "Desserts", price: 300, description: "Fresh tropical fruits with passion fruit dressing" },
    { id: 13, name: "Chocolate Cake", category: "Desserts", price: 400, description: "Rich chocolate cake with vanilla cream" },
    
    // Drinks
    { id: 14, name: "Kenyan Chai", category: "Drinks", price: 150, description: "Traditional milky spiced tea" },
    { id: 15, name: "Fresh Juice", category: "Drinks", price: 250, description: "Mango, passion, or mixed fruit" },
    { id: 16, name: "Tusker Beer", category: "Drinks", price: 300, description: "Kenya's finest lager beer" },
    { id: 17, name: "Soft Drinks", category: "Drinks", price: 120, description: "Coca-Cola, Fanta, or Sprite" },
    { id: 18, name: "Dawa Cocktail", category: "Drinks", price: 450, description: "Honey, lime, and vodka - a Kenyan classic" }
  ];

  const categories = ['All', 'Starters', 'Main Dishes', 'Desserts', 'Drinks'];

  const filteredMenu = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      setOrder(order.map(orderItem => 
        orderItem.id === item.id 
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const updateQuantity = (itemId, change) => {
    setOrder(order.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromOrder = (itemId) => {
    setOrder(order.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return order.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return order.reduce((total, item) => total + item.quantity, 0);
  };

  const formatPrice = (price) => {
    return `KES ${price.toLocaleString()}`;
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);

      setTimeout(() => {
        setOrderSuccess(false);
        setShowCheckout(false);
        setOrder([]);
        setCustomerInfo({ name: '', phone: '', deliveryOption: 'pickup' });
      }, 3000);
    }, 2500);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setOrderSuccess(false);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-amber-400 mb-6 tracking-wide">
              Kilimanjaro Grill
            </h1>
            <p className="text-2xl md:text-3xl text-amber-100 mb-8 font-light italic">
              Authentic African flavors, served fresh.
            </p>
            <button
              onClick={scrollToMenu}
              className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Cart Icon */}
        <button
          onClick={() => setShowCart(true)}
          className="fixed top-6 right-6 z-40 bg-red-700 p-4 rounded-full shadow-2xl hover:bg-red-800 transition-all"
        >
          <ShoppingBag className="w-6 h-6 text-white" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-400 text-red-900 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-red-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                Welcome to Kilimanjaro Grill, where tradition meets taste. For over a decade, we've been serving authentic Kenyan cuisine that celebrates the rich culinary heritage of East Africa.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                From our signature Nyama Choma to freshly grilled tilapia, every dish is prepared with love using traditional recipes passed down through generations. Our warm, inviting atmosphere makes every meal a celebration.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Join us for an unforgettable dining experience that brings the heart of Kenya to your table.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                alt="Restaurant ambiance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-red-900 mb-4">
              Our Menu
            </h2>
            <p className="text-lg text-stone-600">
              Explore our selection of authentic dishes
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-red-700 text-white shadow-lg'
                    : 'bg-amber-100 text-red-900 hover:bg-amber-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-amber-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-red-900">
                      {item.name}
                    </h3>
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <button
                    onClick={() => addToOrder(item)}
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-red-900 mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-stone-600">
              We'd love to serve you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Location</h3>
                  <p className="text-stone-600">Kimathi Street, Nairobi CBD</p>
                  <p className="text-stone-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Phone</h3>
                  <p className="text-stone-600">+254 700 123 456</p>
                  <p className="text-stone-600">+254 722 987 654</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Email</h3>
                  <p className="text-stone-600">info@kilimanjarogrill.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Hours</h3>
                  <p className="text-stone-600">Mon - Fri: 11:00 AM - 10:00 PM</p>
                  <p className="text-stone-600">Sat - Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819651230577!2d36.82194631475395!3d-1.2864284359970563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6d3b3b3b3%3A0x1234567890abcdef!2sKimathi%20Street%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
                Kilimanjaro Grill
              </h3>
              <p className="text-red-200">
                Authentic African flavors, served fresh daily.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={scrollToMenu} className="text-red-200 hover:text-white transition">Menu</button></li>
                <li><a href="#about" className="text-red-200 hover:text-white transition">About</a></li>
                <li><a href="#contact" className="text-red-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-400 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-red-800 pt-8 text-center text-red-200">
            <p>© 2025 Kilimanjaro Grill. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowCart(false)}
          />
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-red-700 text-white p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold">Your Order</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-red-800 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {order.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag className="w-16 h-16 mx-auto text-stone-300 mb-4" />
                  <p className="text-stone-500 text-lg">Your order is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {order.map((item) => (
                      <div key={item.id} className="flex justify-between items-center bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <div className="flex-1">
                          <h3 className="font-semibold text-stone-900">
                            {item.name}
                          </h3>
                          <p className="text-red-700 font-bold text-sm">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 bg-white rounded-full hover:bg-stone-200 transition border border-stone-300"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 bg-white rounded-full hover:bg-stone-200 transition border border-stone-300"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromOrder(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-amber-300 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-stone-700">Total</span>
                      <span className="text-3xl font-bold text-red-900">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-lg font-bold text-lg transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            {!orderSuccess ? (
              <>
                <button
                  onClick={closeCheckout}
                  className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-red-900 mb-2">
                    Complete Your Order
                  </h2>
                  <p className="text-stone-600">
                    Fill in your details below
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg mb-6 border-2 border-amber-200">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600 font-semibold">Order Total:</span>
                    <span className="text-2xl font-bold text-red-900">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      placeholder="+254 712 345 678"
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Delivery Option *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setCustomerInfo(prev => ({ ...prev, deliveryOption: 'pickup' }))}
                        className={`p-4 rounded-lg border-2 font-semibold transition ${
                          customerInfo.deliveryOption === 'pickup'
                            ? 'border-red-700 bg-red-50 text-red-900'
                            : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        Pickup
                      </button>
                      <button
                        onClick={() => setCustomerInfo(prev => ({ ...prev, deliveryOption: 'delivery' }))}
                        className={`p-4 rounded-lg border-2 font-semibold transition ${
                          customerInfo.deliveryOption === 'delivery'
                            ? 'border-red-700 bg-red-50 text-red-900'
                            : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        Delivery
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full bg-red-700 hover:bg-red-800 disabled:bg-stone-400 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing Order...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-600 mb-2">
                  Order Placed!
                </h2>
                <p className="text-stone-600 text-lg mb-4">
                  We'll confirm your order shortly
                </p>
                <p className="text-sm text-stone-500">
                  Order #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
import { useState } from 'react';
import { ShoppingCart, X, Trash2, Plus, Minus, Phone, Check, Loader2, Tag } from 'lucide-react';

const FashionBoutique = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: "Silk Evening Dress",
      price: 8500,
      category: "Women",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80"
    },
    {
      id: 2,
      name: "Linen Blazer",
      price: 6200,
      category: "Men",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80"
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 4800,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80"
    },
    {
      id: 4,
      name: "Cotton Maxi Skirt",
      price: 3200,
      category: "Women",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80"
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: 12000,
      category: "Men",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80"
    },
    {
      id: 6,
      name: "Gold Statement Necklace",
      price: 2800,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80"
    },
    {
      id: 7,
      name: "Casual Denim Jeans",
      price: 4500,
      category: "Men",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80"
    },
    {
      id: 8,
      name: "Floral Summer Top",
      price: 2400,
      category: "Women",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80"
    }
  ];

  const categories = ['All', 'Women', 'Men', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const formatPrice = (price) => {
    return `KES ${price.toLocaleString()}`;
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handlePayment = () => {
    if (!phoneNumber.match(/^\+254\d{9}$/)) {
      alert('Please enter a valid M-Pesa number (+254...)');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);

      setTimeout(() => {
        setPaymentSuccess(false);
        setShowCheckout(false);
        setCart([]);
        setPhoneNumber('');
      }, 3000);
    }, 2500);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setPhoneNumber('');
    setPaymentSuccess(false);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-stone-200">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-3 h-full">
            <div 
              className="bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80)' }}
            />
            <div 
              className="bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80)' }}
            />
            <div 
              className="bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80)' }}
            />
          </div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-stone-900 mb-6 tracking-tight">
              Nairobi Fashion Co
            </h1>
            <p className="text-2xl md:text-3xl text-stone-700 mb-8 font-light">
              Style. Simplicity. Sustainability.
            </p>
            <button
              onClick={scrollToProducts}
              className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Cart Icon */}
        <button
          onClick={() => setShowCart(true)}
          className="fixed top-6 right-6 z-40 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          <ShoppingCart className="w-6 h-6 text-stone-900" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Tag className="w-5 h-5 text-stone-600" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-stone-900 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">
              Our Collection
            </h2>
            <p className="text-lg text-stone-600">
              Curated pieces for the modern wardrobe
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-stone-700">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-amber-700 mb-4">
                    {formatPrice(product.price)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowCart(false)}
          />
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-stone-900">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-stone-100 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingCart className="w-16 h-16 mx-auto text-stone-300 mb-4" />
                  <p className="text-stone-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-stone-50 p-4 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-stone-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-amber-700 font-bold mb-2">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 bg-white rounded-full hover:bg-stone-200 transition"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 bg-white rounded-full hover:bg-stone-200 transition"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-stone-700">Total</span>
                      <span className="text-3xl font-bold text-stone-900">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Checkout with M-Pesa
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* M-Pesa Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            {!paymentSuccess ? (
              <>
                <button
                  onClick={closeCheckout}
                  className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-stone-900 mb-2">
                    M-Pesa Payment
                  </h2>
                  <p className="text-stone-600">
                    Enter your phone number to complete payment
                  </p>
                </div>

                <div className="mb-6">
                  <div className="bg-stone-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-600">Amount to Pay:</span>
                      <span className="text-2xl font-bold text-green-600">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    M-Pesa Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+254712345678"
                    className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-lg"
                  />
                  <p className="text-xs text-stone-500 mt-2">
                    Format: +254XXXXXXXXX
                  </p>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-stone-400 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      Pay Now
                    </>
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-600 mb-2">
                  Payment Successful!
                </h2>
                <p className="text-stone-600 text-lg mb-4">
                  Your order has been confirmed
                </p>
                <p className="text-sm text-stone-500">
                  Transaction ID: MPesa{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Nairobi Fashion Co</h3>
          <p className="text-stone-400 mb-6">
            Style. Simplicity. Sustainability.
          </p>
          <div className="text-stone-500 text-sm">
            <p>© 2025 Nairobi Fashion Co. All rights reserved.</p>
            <p className="mt-2">Contact: info@nairobifashion.co.ke | +254 700 123 456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionBoutique;
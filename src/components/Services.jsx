import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Starter",
    subtitle: "Perfect for new businesses",
    price: 18000,
    features: [
      "5-page responsive site",
      "Mobile-optimized",
      "Contact form",
      "Basic SEO",
    ],
    description: "Launch-ready in 1-2 weeks",
  },
  {
    id: 2,
    title: "Growth",
    subtitle: "For established brands",
    price: 30000,
    features: [
      "Custom design",
      "E-commerce ready",
      "Analytics",
      "Performance optimized",
    ],
    description: "Delivered in 3-6 weeks",
  },
  {
    id: 3,
    title: "Enterprise",
    subtitle: "Complex applications",
    price: 60000,
    features: [
      "Full-stack solution",
      "API integration",
      "Custom features",
      "Ongoing support",
    ],
    description: "Timeline varies by scope",
  },
];

function Services({ scrollToSection }) {
  const [currency, setCurrency] = useState("KES");
  const [symbol, setSymbol] = useState("KSh");
  const [rate, setRate] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [paymentOption, setPaymentOption] = useState("full");
  const [successData, setSuccessData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    async function fetchLocationAndRates() {
      try {
        const locRes = await fetch("https://ipapi.co/json/");
        const locData = await locRes.json();
        const currencyCode = locData.currency || "KES";
        const rateRes = await fetch(`https://api.exchangerate-api.com/v4/latest/KES`);
        const rateData = await rateRes.json();
        const conversionRate = rateData?.rates?.[currencyCode];
        if (conversionRate && conversionRate > 0) {
          setCurrency(currencyCode);
          setRate(conversionRate);
          const symbols = {
            USD: "$", EUR: "€", GBP: "£", INR: "₹", KES: "KSh",
            NGN: "₦", ZAR: "R", CAD: "CA$", AUD: "A$", JPY: "¥", CNY: "¥",
            BRL: "R$", MXN: "MX$", AED: "د.إ", SAR: "﷼", TRY: "₺", RUB: "₽",
            KRW: "₩", SGD: "S$", HKD: "HK$", SEK: "kr", NOK: "kr", DKK: "kr",
            CHF: "CHF", PLN: "zł", THB: "฿", IDR: "Rp", MYR: "RM", PHP: "₱",
            VND: "₫", EGP: "E£", ILS: "₪", CLP: "CLP$", ARS: "ARS$", COP: "COL$",
            PEN: "S/",
          };
          setSymbol(symbols[currencyCode] || currencyCode);
        }
      } catch {
        // fallback silently
      }
    }
    fetchLocationAndRates();
  }, []);

  const formatPrice = (price) => {
    const converted = price * rate;
    return `${symbol} ${Math.round(converted).toLocaleString()}`;
  };

  const handlePayment = (service) => {
    setSelectedService(service);
    setPaymentOption("full");
    setShowModal(true);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    if (typeof window.PaystackPop === 'undefined') {
      alert('Payment system is loading. Please try again in a moment.');
      return;
    }
    const amount = paymentOption === "deposit" ? selectedService.price * 0.5 : selectedService.price;
    const handler = window.PaystackPop.setup({
      key: 'pk_test_9963a1ff8d3156706b837c804839760bfb0289d2',
      email: formData.email,
      amount: amount * 100,
      currency: currency || "KES",
      ref: "pxc_" + new Date().getTime(),
      metadata: {
        custom_fields: [
          {
            display_name: "Service",
            variable_name: "service_name",
            value: selectedService.title,
          },
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: formData.name,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: formData.phone,
          },
          {
            display_name: "Payment Type",
            variable_name: "payment_type",
            value: paymentOption === "deposit" ? "50% Deposit" : "Full Payment",
          },
        ],
      },
      callback: function (response) {
        setShowModal(false);
        setSuccessData({
          reference: response.reference,
          email: formData.email
        });
        setShowSuccess(true);
        console.log('Payment successful:', response);
      },
      onClose: function () {
        console.log('Payment popup closed');
      },
    });
    handler.openIframe();
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '' });
    setPaymentOption("full");
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setSuccessData(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <>
      <section
        id="services"
        className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 rounded-2xl sm:rounded-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-6">
            Services &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Pricing
            </span>
          </h2>
        </div>
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group relative backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl md:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col items-start justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-6 gap-1 sm:gap-2">
                  <div className="w-full">
                    <h3 className="font-black text-xs sm:text-sm md:text-lg lg:text-2xl text-white mb-0.5 sm:mb-1 md:mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-slate-400 leading-tight">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="font-black text-xs sm:text-sm md:text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 whitespace-nowrap">
                    {formatPrice(service.price)}
                  </div>
                </div>
                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 text-slate-300"
                    >
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-purple-400 mt-1 md:mt-1.5 lg:mt-2 flex-shrink-0"></div>
                      <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs text-slate-400 mb-2 sm:mb-3 md:mb-4 lg:mb-6 pb-2 sm:pb-3 md:pb-4 lg:pb-6 border-b border-slate-700/50 leading-tight">
                  {service.description}
                </p>
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handlePayment(service);
                    }}
                    className="relative w-full flex justify-center items-center group text-white font-bold text-[9px] sm:text-[10px] md:text-sm lg:text-base py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl bg-slate-800/40 border border-purple-500/20 hover:border-purple-400 transition-all duration-300"
                  >
                    <span className="relative z-10 group-hover:text-purple-300 transition-all duration-300">
                      Get Started
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md md:rounded-lg lg:rounded-xl"></div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact");
                    }}
                    className="relative w-full flex justify-center items-center group text-white font-bold text-[9px] sm:text-[10px] md:text-sm lg:text-base py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl bg-slate-800/40 border border-purple-500/20 hover:border-purple-400 transition-all duration-300"
                  >
                    <span className="relative z-10 group-hover:text-purple-300 transition-all duration-300">
                      Book A Free Consultation
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md md:rounded-lg lg:rounded-xl"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-slate-900 border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-500/20">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-2">
                Book {selectedService?.title}
              </h3>
              <p className="text-sm text-slate-400">
                Enter your details to proceed with payment
              </p>
              <div className="mt-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {formatPrice(paymentOption === "deposit" ? selectedService?.price * 0.5 : selectedService?.price)}
              </div>
            </div>
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Payment Option
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-slate-300 text-sm">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="deposit"
                      checked={paymentOption === "deposit"}
                      onChange={() => setPaymentOption("deposit")}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    Pay 50% Deposit ({formatPrice(selectedService?.price * 0.5)})
                  </label>
                  <label className="flex items-center gap-2 text-slate-300 text-sm">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="full"
                      checked={paymentOption === "full"}
                      onChange={() => setPaymentOption("full")}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    Pay 100% Full ({formatPrice(selectedService?.price)})
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Confirmation Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-slate-900 border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-500/20 text-center">
            <button
              onClick={closeSuccess}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <CheckCircle size={56} className="mx-auto text-purple-400 mb-4" />
            <h3 className="text-2xl font-black text-white mb-4">
              Payment Successful! 🎉
            </h3>
            <p className="text-purple-300 mb-4 font-mono bg-slate-800/50 px-3 py-1 rounded-lg">
              Reference: {successData?.reference}
            </p>
            <p className="text-sm text-slate-300 mb-6">
              We'll contact you at <span className="font-semibold text-white">{successData?.email}</span> to start your project.
            </p>
            <button
              onClick={closeSuccess}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
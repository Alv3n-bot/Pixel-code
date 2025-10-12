import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const filtered = value.replace(/[^0-9+\-]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      setError("");
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validatePhoneNumber = () => {
    const { phone } = formData;
    if (!phone) return "";
    const digits = phone.replace(/[^\d]/g, "");
    if (digits.length < 7 || digits.length > 15) {
      return "Please enter a valid phone number (7–15 digits).";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneError = validatePhoneNumber();
    if (phoneError) {
      setError(phoneError);
      return;
    }

    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwlPbhDTQnWTc4w2rHOb0iVDYmETGPOK1o-4DlE5HHGdxwvaxzIBVsQkNb5-xwBqjaQ0w/exec";

      const form = new FormData();
      form.append("Name", formData.name);
      form.append("Email", formData.email);
      form.append("Number", formData.phone);
      form.append("Message", formData.message);
      form.append("Service", formData.service);

      const response = await fetch(scriptURL, { method: "POST", body: form });

      if (response.ok) {
        setMessage("✅ Thank you! Form submitted successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError("❌ Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("❌ There was an error submitting. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrefill = () => {
    setFormData({
      name: "Demo Client",
      email: "demo@client.com",
      phone: "+254700123456",
      service: "Growth site (KSh 80,000+)",
      message: "This is a demo brief for testing.",
    });
    setMessage("Prefilled demo values.");
    setError("");
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-slate-950 rounded-2xl sm:rounded-3xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-5 md:mb-6 text-center">
          Contact &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Quote
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-center max-w-2xl mx-auto px-2">
          Get a quick quote or discuss your next web project. Typical reply time: under 24 hours.
        </p>
        <div className="grid grid-cols-[1.5fr_1fr] md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1fr_400px] gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          >
            {[
              { label: "Full name", name: "name", type: "text", placeholder: "Jane Mwangi", required: true },
              { label: "Email", name: "email", type: "email", placeholder: "you@example.com", required: true },
              { label: "Phone (optional)", name: "phone", type: "tel", placeholder: "+254...", required: false },
            ].map(({ label, name, type, placeholder, required }) => (
              <div key={name}>
                <label className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-bold block mb-1 sm:mb-1.5 md:mb-2">{label}</label>
                <input
                  className="w-full rounded-lg sm:rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  placeholder={placeholder}
                />
              </div>
            ))}

            {error && <p className="text-[10px] sm:text-xs md:text-sm text-red-400 mt-1">{error}</p>}

            <div>
              <label className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-bold block mb-1 sm:mb-1.5 md:mb-2 tracking-wide">
                Service interested
              </label>
              <div className="relative">
                <select
                  className="w-full rounded-lg sm:rounded-xl border border-purple-500/30 bg-slate-950/70 text-white px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-3.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent hover:border-purple-500/50 transition-all duration-300 appearance-none pr-8 sm:pr-10 md:pr-12"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="Starter Website">Starter Website — simple one-page site to introduce your brand</option>
                  <option value="Business Website">Business Website — multi-page site to showcase your services and company</option>
                  <option value="Online Store">Online Store — full eCommerce setup with payments and inventory</option>
                  <option value="Custom Web System">Custom Web System — built-from-scratch solution for unique business needs</option>
                  <option value="Website Redesign">Website Redesign — modernize and improve your existing website</option>
                  <option value="SEO & Google Ranking">SEO & Google Ranking — make your site easier to find on search engines</option>
                  <option value="Mobile App">Mobile App — Android & iOS app for your business or platform</option>
                </select>
                <ChevronDown
                  className="absolute right-2 sm:right-2.5 md:right-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 pointer-events-none"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-bold block mb-1 sm:mb-1.5 md:mb-2">Project brief</label>
              <textarea
                className="w-full rounded-lg sm:rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 min-h-20 sm:min-h-24 md:min-h-28 lg:min-h-32 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Describe your project, timeline, and budget"
              />
            </div>

            <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Request"}
              </button>
              <button
                type="button"
                className="backdrop-blur-xl bg-white/10 border border-white/20 text-white font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base hover:bg-white/20 transition-all"
                onClick={handlePrefill}
              >
                Prefill Demo
              </button>
            </div>

            {message && (
              <div className="bg-purple-500/20 border border-purple-500/30 text-purple-200 p-3 sm:p-3.5 md:p-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm">
                {message}
              </div>
            )}
          </form>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <div className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="font-black text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">Quick Quote</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-400 mb-3 sm:mb-4 md:mb-5 lg:mb-6">Typical timelines & starting prices:</p>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 text-slate-300 text-[10px] sm:text-xs md:text-sm">
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="leading-tight">Starter: 1–2 weeks • KSh 25,000+</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400 mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="leading-tight">Growth: 3–6 weeks • KSh 80,000+</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0"></div>
                  <span className="leading-tight">Enterprise: 6+ weeks • Custom pricing</span>
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="font-black text-sm sm:text-base md:text-lg lg:text-xl text-white mb-2 sm:mb-3 md:mb-4">Payment</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 leading-tight">
                Bank transfer, MPesa, or Stripe for card payments.
              </p>
            </div>

            <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="font-black text-sm sm:text-base md:text-lg lg:text-xl text-white mb-2 sm:mb-3 md:mb-4">Availability</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-200 leading-tight">
                Current lead time: <span className="font-bold">2 weeks</span> for new projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
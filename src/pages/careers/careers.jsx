import { useState } from 'react';
import { Code, Megaphone, Users, Zap, ChevronDown, Upload, Briefcase, Clock, MapPin } from 'lucide-react';

const POSITIONS = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Tech",
    type: "Full-time / Freelance",
    location: "Remote / Nairobi",
    icon: Code,
    description: "Build responsive, high-performance websites using React, Tailwind CSS, and modern web technologies.",
    requirements: [
      "2+ years experience with React and modern JavaScript",
      "Strong understanding of responsive design and CSS",
      "Experience with Tailwind CSS or similar frameworks",
      "Portfolio showcasing web projects"
    ],
    responsibilities: [
      "Develop client websites from design to deployment",
      "Optimize performance and ensure cross-browser compatibility",
      "Collaborate with designers and backend developers",
      "Maintain code quality and documentation"
    ]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    department: "Tech",
    type: "Full-time",
    location: "Nairobi",
    icon: Code,
    description: "Design and build complete web applications with both frontend and backend expertise.",
    requirements: [
      "3+ years full-stack development experience",
      "Proficiency in React, Node.js, and databases",
      "Experience with API design and integration",
      "Understanding of cloud services (AWS, Digital Ocean, etc.)"
    ],
    responsibilities: [
      "Architect and develop full-stack applications",
      "Design and implement RESTful APIs",
      "Manage databases and server infrastructure",
      "Lead technical implementation of complex projects"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Tech",
    type: "Full-time / Freelance",
    location: "Remote / Nairobi",
    icon: Zap,
    description: "Create beautiful, intuitive designs that enhance user experience and drive engagement.",
    requirements: [
      "2+ years UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio of web design projects",
      "Understanding of design systems and accessibility"
    ],
    responsibilities: [
      "Design user interfaces for web applications",
      "Create wireframes, prototypes, and mockups",
      "Conduct user research and usability testing",
      "Collaborate with developers on implementation"
    ]
  },
  {
    id: 4,
    title: "WordPress Developer",
    department: "Tech",
    type: "Freelance",
    location: "Remote",
    icon: Code,
    description: "Develop custom WordPress themes and plugins for client projects.",
    requirements: [
      "2+ years WordPress development experience",
      "Strong PHP and JavaScript skills",
      "Experience with page builders and ACF",
      "Knowledge of WordPress best practices and security"
    ],
    responsibilities: [
      "Build custom WordPress themes from scratch",
      "Develop plugins and custom functionality",
      "Optimize WordPress sites for performance",
      "Maintain and update existing WordPress projects"
    ]
  },
  {
    id: 5,
    title: "Sales Executive",
    department: "Sales",
    type: "Full-time / Commission-based",
    location: "Nairobi",
    icon: Megaphone,
    description: "Drive business growth by connecting with potential clients and closing web development deals.",
    requirements: [
      "2+ years B2B sales experience (tech/digital preferred)",
      "Excellent communication and negotiation skills",
      "Self-motivated with proven track record",
      "Understanding of web development services"
    ],
    responsibilities: [
      "Generate leads and build client relationships",
      "Conduct sales presentations and demos",
      "Negotiate contracts and close deals",
      "Meet and exceed monthly sales targets"
    ]
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Sales",
    type: "Full-time",
    location: "Nairobi",
    icon: Users,
    description: "Expand our client base and identify new business opportunities in the East African market.",
    requirements: [
      "3+ years business development experience",
      "Strong network in Kenyan business community",
      "Strategic thinking and market analysis skills",
      "Track record of meeting revenue goals"
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build partnerships with agencies and corporates",
      "Develop pricing strategies and proposals",
      "Manage key client accounts and relationships"
    ]
  }
];

function Careers() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    linkedin: "",
    coverLetter: "",
    availability: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = (position) => {
    setSelectedPosition(position);
    setFormData(prev => ({ ...prev, position: position.title }));
    setShowApplicationForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwlPbhDTQnWTc4w2rHOb0iVDYmETGPOK1o-4DlE5HHGdxwvaxzIBVsQkNb5-xwBqjaQ0w/exec";
      
      const form = new FormData();
      form.append("Name", formData.fullName);
      form.append("Email", formData.email);
      form.append("Number", formData.phone);
      form.append("Position", formData.position);
      form.append("Experience", formData.experience);
      form.append("Portfolio", formData.portfolio);
      form.append("LinkedIn", formData.linkedin);
      form.append("Message", formData.coverLetter);
      form.append("Availability", formData.availability);
      form.append("Type", "Career Application");

      const response = await fetch(scriptURL, { method: "POST", body: form });

      if (response.ok) {
        setSubmitMessage("✅ Application submitted successfully! We'll review and get back to you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          portfolio: "",
          linkedin: "",
          coverLetter: "",
          availability: ""
        });
        setTimeout(() => {
          setShowApplicationForm(false);
          setSubmitMessage("");
        }, 3000);
      } else {
        setSubmitMessage("❌ Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      setSubmitMessage("❌ There was an error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 to-slate-950"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-5 md:mb-6">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pixel & Code</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Build the future of web development in East Africa. We're looking for talented developers, designers, and sales professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-400 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span>Nairobi & Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span>Full-time & Freelance</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span>Flexible Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12 md:mb-16 text-center">
            Open Positions
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {POSITIONS.map((position) => {
              const Icon = position.icon;
              return (
                <div
                  key={position.id}
                  className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
                          <span className="px-3 py-1 bg-purple-500/20 rounded-full">{position.department}</span>
                          <span className="px-3 py-1 bg-slate-700/50 rounded-full">{position.type}</span>
                          <span className="px-3 py-1 bg-slate-700/50 rounded-full">{position.location}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(position)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 sm:px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                            <span className="leading-tight">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-3">Responsibilities</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 flex-shrink-0"></div>
                            <span className="leading-tight">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-slate-900 border border-purple-500/30 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-purple-500/20 p-6 sm:p-8 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                  Apply for {selectedPosition?.title}
                </h3>
                <p className="text-sm text-slate-400">{selectedPosition?.department} • {selectedPosition?.location}</p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-slate-400 hover:text-white transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-slate-400 font-bold block mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Jane Mwangi"
                    className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-400 font-bold block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-slate-400 font-bold block mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+254 712 345 678"
                    className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-400 font-bold block mb-2">Years of Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 3 years"
                    className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 font-bold block mb-2">
                  Portfolio / Website {selectedPosition?.department === "Tech" && "*"}
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  required={selectedPosition?.department === "Tech"}
                  placeholder="https://yourportfolio.com"
                  className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 font-bold block mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 font-bold block mb-2">Availability *</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select availability...</option>
                  <option value="Immediate">Immediate</option>
                  <option value="2 weeks">2 weeks notice</option>
                  <option value="1 month">1 month notice</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400 font-bold block mb-2">Cover Letter / Why You? *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us why you're a great fit for this role..."
                  className="w-full rounded-xl border border-purple-500/20 bg-slate-950/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-xl text-sm ${
                  submitMessage.includes("✅") 
                    ? "bg-green-500/20 border border-green-500/30 text-green-200" 
                    : "bg-red-500/20 border border-red-500/30 text-red-200"
                }`}>
                  {submitMessage}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-8 bg-slate-800 border border-slate-700 text-white font-bold py-4 rounded-xl hover:bg-slate-700 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Why Join Us Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-slate-950 to-purple-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12 text-center">
            Why Join Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Competitive Pay", desc: "Fair compensation with growth opportunities", icon: "💰" },
              { title: "Flexible Hours", desc: "Work-life balance and remote options", icon: "⏰" },
              { title: "Learning & Growth", desc: "Access to courses and tech resources", icon: "📚" },
              { title: "Real Projects", desc: "Work on diverse, impactful client work", icon: "🚀" },
              { title: "Great Team", desc: "Collaborate with talented professionals", icon: "🤝" },
              { title: "Local Impact", desc: "Build the future of East African tech", icon: "🌍" }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="backdrop-blur-2xl bg-slate-900/50 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
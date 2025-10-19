import { useState } from 'react';
import { Code, Megaphone, Users, Zap, ChevronDown, Briefcase, Clock, MapPin } from 'lucide-react';

const POSITIONS = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Tech",
    type: "Part-time / Freelance",
    location: "Remote / Nairobi",
    icon: Code,
    isOpen: false,
    description: "Craft responsive, high-performance websites using React, Tailwind CSS, and modern AI-driven web technologies.",
    requirements: [
      "2+ years experience with React and modern JavaScript",
      "Experience with AI-powered UI frameworks or tools (e.g., Vercel AI SDK, LangChain)",
      "Strong understanding of responsive design and CSS",
      "Experience with Tailwind CSS or similar frameworks",
      "Portfolio showcasing web projects with AI integration"
    ],
    responsibilities: [
      "Develop client websites with AI-enhanced features",
      "Optimize performance and ensure cross-browser compatibility",
      "Collaborate with designers and backend developers on AI-driven projects",
      "Maintain code quality and documentation"
    ]
  },
  {
    id: 2,
    title: "Back-End Developer",
    department: "Tech",
    type: "Part-time",
    location: "Nairobi",
    icon: Code,
    isOpen: false,
    description: "Design and build full-stack web applications with AI-powered functionality and seamless integrations.",
    requirements: [
      "3+ years full-stack development experience",
      "Proficiency in React, Node.js, and databases",
      "Experience with AI APIs (e.g., OpenAI, Hugging Face) or AI model integration",
      "Experience with API design and integration",
      "Understanding of cloud services (AWS, Digital Ocean, etc.)"
    ],
    responsibilities: [
      "Architect and develop AI-enhanced full-stack applications",
      "Design and implement RESTful APIs with AI capabilities",
      "Manage databases and server infrastructure",
      "Lead technical implementation of complex AI-driven projects"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Tech",
    type: "Part-time / Freelance",
    location: "Remote / Nairobi",
    icon: Zap,
    isOpen: false,
    description: "Create intuitive, AI-enhanced user interfaces that drive engagement and improve user experience.",
    requirements: [
      "2+ years UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Experience designing for AI-driven interfaces (e.g., chatbots, dynamic UIs)",
      "Strong portfolio of web design projects with AI elements",
      "Understanding of design systems and accessibility"
    ],
    responsibilities: [
      "Design AI-powered user interfaces for web applications",
      "Create wireframes, prototypes, and mockups for dynamic UIs",
      "Conduct user research and usability testing for AI features",
      "Collaborate with developers on AI-driven design implementation"
    ]
  },
  {
    id: 4,
    title: "WordPress Developer",
    department: "Tech",
    type: "Part-time / Freelance",
    location: "Remote",
    icon: Code,
    isOpen: false,
    description: "Develop custom WordPress themes and plugins with AI-enhanced functionality for client projects.",
    requirements: [
      "2+ years WordPress development experience",
      "Strong PHP and JavaScript skills",
      "Experience with AI plugins or integrations (e.g., AI content generators)",
      "Experience with page builders and ACF",
      "Knowledge of WordPress best practices and security"
    ],
    responsibilities: [
      "Build custom WordPress themes with AI features",
      "Develop plugins with AI-driven functionality",
      "Optimize WordPress sites for performance",
      "Maintain and update existing WordPress projects"
    ]
  },
  {
    id: 5,
    title: "Sales Executive",
    department: "Sales",
    type: "Commission-based",
    location: "Remote",
    icon: Megaphone,
    isOpen: true,
    description: "Drive business growth by connecting with clients and closing deals for AI-powered web solutions.",
    requirements: [
      "2+ years B2B sales experience (tech/digital preferred)",
      "Knowledge of Web/App development services",
      "Excellent communication and negotiation skills",
      "Self-motivated with proven track record"
    ],
    responsibilities: [
      "Generate leads and build client relationships",
      "Conduct sales presentations for AI-powered solutions",
      "Negotiate contracts and close deals",
      "Meet and exceed monthly sales targets"
    ]
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Sales",
    type: "Part-time",
    location: "Nairobi",
    icon: Users,
    isOpen: false,
    description: "Expand our client base for AI-driven web solutions in the East African market.",
    requirements: [
      "3+ years business development experience",
      "Familiarity with AI-powered digital solutions",
      "Strong network in Kenyan business community",
      "Strategic thinking and market analysis skills",
      "Track record of meeting revenue goals"
    ],
    responsibilities: [
      "Identify and pursue new business opportunities for AI solutions",
      "Build partnerships with agencies and corporates",
      "Develop pricing strategies for AI-driven services",
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
      const scriptURL = "https://script.google.com/macros/s/AKfycbzY_xY6Boqi0BtizW9slRv48Sg3-JxIJNuiaOIa6iVXxZJrcRpYKRj3mpQIe1soIueC/exec";
      const form = new FormData();

      // Match Google Sheet headers exactly
      form.append("Name", formData.fullName);
      form.append("Email", formData.email);
      form.append("Number", formData.phone);
      form.append("Position", formData.position);
      form.append("Experience", formData.experience);
      form.append("Portfolio", formData.portfolio);
      form.append("LinkedIn", formData.linkedin);
      form.append("Cover Letter", formData.coverLetter);
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
    
  
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Pixel & Code</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Shape the future of AI-driven web development in East Africa. We're seeking passionate developers, designers, and sales professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Nairobi & Remote</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-purple-400" />
              <span>Full-time & Part-time</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Flexible Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
            Open Positions
          </h2>
          <div className="grid gap-8">
            {POSITIONS.filter(position => position.isOpen).map((position) => {
              const Icon = position.icon;
              return (
                <div
                  key={position.id}
                  className="backdrop-blur-xl bg-gray-800/50 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                          <span className="px-4 py-1.5 bg-purple-500/20 rounded-full">{position.department}</span>
                          <span className="px-4 py-1.5 bg-gray-700/50 rounded-full">{position.type}</span>
                          <span className="px-4 py-1.5 bg-gray-700/50 rounded-full">{position.location}</span>
                        </div>
                      </div>
                    </div>

                     <button
            className="ml-4 bg-gray-900 border-2 border-purple-500 text-purple-400 font-mono font-semibold px-5 py-2.5 rounded-lg hover:bg-purple-500 hover:text-gray-900 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-102 transition-all duration-200"
            onClick={() => handleApply(position)}
          >
            Apply Now
          </button>
                    
                  </div>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Requirements</h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Responsibilities</h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-pink-400 mt-1.5 flex-shrink-0"></div>
                            <span>{resp}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative bg-gray-800 border border-purple-500/30 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-800 border-b border-purple-500/20 p-8 flex items-center justify-between z-10">
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                  Apply for {selectedPosition?.title}
                </h3>
                <p className="text-sm text-gray-400">{selectedPosition?.department} • {selectedPosition?.location}</p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 font-bold block mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                   
                    className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 font-bold block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    
                    className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 font-bold block mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    
                    className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 font-bold block mb-2">Years of Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    
                    className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 font-bold block mb-2">
                  Portfolio / Website {selectedPosition?.department === "Tech" && "*"}
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  required={selectedPosition?.department === "Tech"}
                 
                  className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 font-bold block mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  
                  className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 font-bold block mb-2">Availability *</label>
                <div className="relative">
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select availability...</option>
                    <option value="Immediate">Immediate</option>
                    <option value="2 weeks">2 weeks notice</option>
                    <option value="1 month">1 month notice</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 font-bold block mb-2">Cover Letter / Why You? *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us why you're a great fit for this role..."
                  className="w-full rounded-xl border border-purple-500/20 bg-gray-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
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
                  className="px-8 bg-gray-800 border border-gray-700 text-white font-bold py-4 rounded-xl hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Why Join Us Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
            Why Join Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Competitive Pay", desc: "Attractive compensation with performance-based incentives", icon: "" },
              { title: "Flexible Work", desc: "Remote and part-time options for work-life balance", icon: "" },
              { title: "AI Innovation", desc: "Work with cutting-edge AI tools and technologies", icon: "" },
              { title: "Impactful Projects", desc: "Build AI-driven solutions for real-world clients", icon: "" },
              { title: "Collaborative Team", desc: "Join a dynamic team of creative professionals", icon: "" },
              { title: "Regional Impact", desc: "Drive the growth of AI-powered tech in East Africa", icon: "" }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-gray-800/50 border border-purple-500/20 rounded-3xl p-6 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
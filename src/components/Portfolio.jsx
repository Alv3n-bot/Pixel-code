import { Link } from "react-router-dom";

const PORTFOLIO = [
  {
    id: 1,
    name: "Safari Tours",
    title: "Safari Tours Kenya",
    description: "Booking platform with real-time availability",
    image: "https://images01.nicepagecdn.com/page/56/32/website-template-preview-5632119.jpg",
    route: "/safari-tours"
  },
  {
    id: 2,
    name: "Fashion Boutique",
    title: "Nairobi Fashion Co",
    description: "E-commerce store with M-Pesa integration",
    image: "https://downloadpsd.cc/wp-content/uploads/image-1.jpg",
    route: "/fashion-boutique"
  },
  {
    id: 3,
    name: "Tech Startup",
    title: "StartupHub KE",
    description: "SaaS landing page with conversion focus",
    image: "https://s3.envato.com/files/547878111/00_preview.__large_preview.png",
    route: "/tech-startup"
  },
  {
    id: 4,
    name: "Restaurant",
    title: "Kilimanjaro Grill",
    description: "Menu showcase with online ordering",
    image: "https://mactavis.com/images/kili-web2.webp",
    route: "/restaurant"
  },
  {
    id: 5,
    name: "Law Firm",
    title: "Legal Associates",
    description: "Professional service site with booking",
    image: "https://webdesign.ke/wp-content/uploads/2025/04/booking-and-listing-website-design-kenya-1119x800.webp",
    route: "/law-firm"
  },
  {
    id: 6,
    name: "Fitness",
    title: "FitLife Gym",
    description: "Membership portal with class schedules",
    image: "https://cdn.cssauthor.com/wp-content/uploads/2022/03/Fitlife.jpg?strip=all&lossy=1&ssl=1",
    route: "/fitness-app"
  }
];

function Portfolio({ scrollToSection }) {
  return (
    <section id="portfolio" className="relative py-24 px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-purple-950/30 rounded-3xl"></div>
      <div className="relative z-10">
        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 text-center">
          Portfolio
        </h2>
        <p className="text-lg text-slate-300 mb-16 text-center max-w-2xl mx-auto">
          A selection of concept projects showing clean, responsive, high-performing websites.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PORTFOLIO.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className="group relative backdrop-blur-2xl bg-slate-900/40 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <img
                src={project.image}
                alt={`${project.title} project mockup`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay with buttons side by side */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation(); // Prevent link navigation when clicking this button
                      scrollToSection("#contact");
                    }}
                    className="bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold px-6 py-2 rounded-full hover:bg-white/30 transition-all text-center"
                  >
                    Request Similar
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
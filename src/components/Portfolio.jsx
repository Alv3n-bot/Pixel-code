import { memo } from "react";
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
    <section id="portfolio" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-purple-950/30 rounded-2xl sm:rounded-3xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-5 md:mb-6 text-center">
          Portfolio
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-center max-w-2xl mx-auto px-2">
          A selection of concept projects showing clean, responsive, high-performing websites.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {PORTFOLIO.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className="group relative backdrop-blur-md bg-slate-900/40 border border-purple-500/20 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transform-gpu will-change-transform"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project mockup`}
                  className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Hover overlay with buttons */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2 sm:p-3 md:p-4 lg:p-6 pointer-events-none">
                <div className="flex gap-2 sm:gap-3 md:gap-4 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("#contact");
                    }}
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white/30 transition-all text-center text-[10px] sm:text-xs md:text-sm"
                  >
                    Request Similar
                  </button>
                </div>
              </div>
              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <h3 className="font-black text-xs sm:text-sm md:text-base lg:text-xl text-white mb-1 sm:mb-1.5 md:mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-slate-400 leading-tight">
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

export default memo(Portfolio);
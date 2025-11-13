import { memo } from "react";
import { Zap, Sparkles, Rocket } from "lucide-react";

function Hero({ scrollToSection }) {
  return (
    <section
      className="relative min-h-[78vh] sm:min-h-[82vh] flex items-center overflow-hidden rounded-3xl
                 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 py-8 sm:px-8 sm:py-16"
    >
      {/* Decorative blobs: hidden on smallest screens for performance */}
      <div className="hidden sm:block absolute -top-12 -left-12 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl will-change-transform pointer-events-none" />
      <div className="hidden md:block absolute -bottom-16 -right-24 w-[420px] h-[420px] bg-pink-600/20 rounded-full blur-[90px] will-change-transform pointer-events-none" />
      <div className="hidden lg:block absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl will-change-transform pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <div
          className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md border border-purple-500/30
                     px-3 py-1.5 rounded-full mb-6 sm:mb-8 group transition"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="font-semibold text-xs sm:text-sm text-purple-200">
            Local • Reliable • Professional
          </span>
        </div>

        {/* Heading: left aligned, constrained width, smoother scaling */}
        <h1
          className="text-[clamp(1.6rem,6vw,2.8rem)] sm:text-[clamp(2.0rem,5.2vw,3.6rem)] md:text-[clamp(2.4rem,4.6vw,4.25rem)]
                     font-extrabold leading-tight text-white mb-6 max-w-[60ch] tracking-tight"
        >
          We help businesses{" "}
          <span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400
                       whitespace-nowrap"
          >
            go digital with smart, reliable
          </span>{" "}
          software solutions.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl font-medium">
          We craft{" "}
          <span className="text-white font-bold">modern, lightning-fast</span>{" "}
          websites, e-commerce stores, and digital tools that help you reach more customers and grow with confidence.
        </p>

        {/* Actions: stack on small screens, inline on larger */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            aria-label="Request a quote"
            className="relative overflow-hidden group inline-flex items-center gap-2 justify-center
                       bg-gray-900 border-2 border-purple-500 text-purple-400 font-mono font-semibold
                       px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md shadow-purple-500/20
                       hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-200"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500
                             opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />
            <Rocket
              size={16}
              className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="relative z-10 text-sm sm:text-base">Request a Quote</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#portfolio");
            }}
            aria-label="View portfolio"
            className="inline-flex items-center justify-center backdrop-blur-md bg-white/7 border-2 border-white/10
                       text-white font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-xl hover:bg-white/15 hover:border-white/20
                       transition-all duration-200 text-sm sm:text-base"
          >
            View Portfolio
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Serving Nairobi & remote clients across East Africa — KSh-friendly pricing, support in English & Swahili
        </p>
      </div>

      {/* Floating card: show on large screens (lg) to avoid crowding smaller layouts */}
      <div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 backdrop-blur-md bg-slate-900/50
                   border border-purple-500/25 rounded-3xl p-6 lg:p-8 shadow-xl shadow-purple-500/20 max-w-xs
                   hover:scale-[1.03] transition-transform duration-400"
        aria-hidden="true"
      >
        <Zap size={24} className="text-purple-400 mb-3" />
        <h3 className="font-black text-lg lg:text-xl text-white mb-2">Why Choose Us</h3>
        <p className="text-slate-300 text-xs mb-4">
          Fast delivery • Local pricing • Aftercare & training
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="font-black text-white text-sm lg:text-base">1–6 weeks</div>
            <div className="text-xs text-slate-400">Typical delivery</div>
          </div>
          <div>
            <div className="font-black text-white text-sm lg:text-base">24/7</div>
            <div className="text-xs text-slate-400">Support available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);

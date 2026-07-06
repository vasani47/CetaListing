import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SAMPLE_REVIEWS } from "../data";

export default function Trust() {
  const [activeIdx, setActiveIdx] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const companies = [
    { name: "Apex Fashion Hub", sub: "Saree Wholesaler" },
    { name: "Textile Commerce Co.", sub: "Ethnic Designer" },
    { name: "Urban Garments Seller", sub: "Western Apparel" },
    { name: "Diamond City Apparel", sub: "Kids Wear House" },
    { name: "Silk Route Retail", sub: "Dupatta Handloom" }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SAMPLE_REVIEWS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SAMPLE_REVIEWS.length) % SAMPLE_REVIEWS.length);
  };

  // Set up auto-play slider
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-brand-bg border-y border-border-subtle" id="trust-section">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 gradient-blur-indigo opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-16 border-b border-border-subtle" id="trust-metrics">
          {/* Left Column: Big Trust Number */}
          <div className="md:col-span-5 flex flex-col justify-center" id="trust-left-column">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
              ))}
              <span className="text-sm font-bold font-numbers ml-2 text-txt-p">4.5 / 5 Rating</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-txt-p tracking-tight">
              Trusted by <span className="bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent font-numbers">19+</span> eCommerce Sellers
            </h2>
            <p className="text-sm text-txt-s mt-2 font-sans font-light">
              Accelerating listing catalog speed for premier apparel manufacturers, weavers, and fabric hubs.
            </p>
          </div>

          {/* Right Column: Company Badges */}
          <div className="md:col-span-7" id="trust-right-column">
            <span className="text-[10px] text-txt-m uppercase tracking-widest font-mono block mb-4">
              Representative Business Verticals
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {companies.map((company) => (
                <div 
                  key={company.name}
                  className="px-4 py-3.5 rounded-xl neumorphic-flat border border-border-subtle/20 flex flex-col justify-center hover:scale-[0.98] transition-all duration-300"
                >
                  <span className="text-xs font-bold text-txt-p truncate">{company.name}</span>
                  <span className="text-[10px] text-txt-m font-mono mt-0.5">{company.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Moving Testimonials Slider */}
        <div className="pt-16 max-w-4xl mx-auto text-center" id="testimonial-slider-container">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-[10px] uppercase font-mono tracking-widest mb-6">
            <Quote size={11} className="fill-brand-indigo/20" />
            Sample Seller Testimonials
          </div>

          {/* Interactive Slider viewport */}
          <div className="relative min-h-[220px] flex items-center justify-center px-4" id="testimonial-slider-viewport">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-txt-p italic leading-relaxed max-w-3xl">
                  "{SAMPLE_REVIEWS[activeIdx].text}"
                </p>

                <div className="mt-8 flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    {[...Array(SAMPLE_REVIEWS[activeIdx].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-cyan text-brand-cyan" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-txt-p">
                    {SAMPLE_REVIEWS[activeIdx].author}
                  </span>
                  <span className="text-xs text-txt-m font-mono mt-0.5">
                    {SAMPLE_REVIEWS[activeIdx].business}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-6 mt-8" id="testimonial-controls">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full neumorphic-flat border border-border-subtle/20 text-txt-s hover:text-brand-violet hover:scale-95 transition-all cursor-pointer flex items-center justify-center"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {SAMPLE_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIdx === i ? "bg-brand-cyan w-6" : "bg-border-subtle"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-3 rounded-full neumorphic-flat border border-border-subtle/20 text-txt-s hover:text-brand-violet hover:scale-95 transition-all cursor-pointer flex items-center justify-center"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Testimonial disclosure statement to avoid fictional fact representation */}
          <div className="mt-8 text-[9px] text-txt-m font-mono text-center opacity-80">
            * TESTIMONIAL DISCLOSURE: These are illustrative sample testimonials based on typical workflow optimizations experienced by eCommerce apparel sellers.
          </div>
        </div>
      </div>
    </section>
  );
}

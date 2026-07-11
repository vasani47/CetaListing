import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles, MessageSquare, AlertCircle, ArrowRight } from "lucide-react";

export default function Pricing() {
  const yearlyMessage = encodeURIComponent("I want to purchase the Yearly Plan (RS199/year).");
  const lifetimeMessage = encodeURIComponent("I want to purchase the Lifetime Plan (RS299).");

  const WHATSAPP_YEARLY = `https://wa.me/918866814914?text=${yearlyMessage}`;
  const WHATSAPP_LIFETIME = `https://wa.me/918866814914?text=${lifetimeMessage}`;

  const standardFeatures = [
    "1-Click Auto Fill on Meesho Portal",
    "Smart Field Capture (Remembers Mappings)",
    "Secure Chrome Local Storage Database",
    "Unlimited Product Profiles",
    "Element Self-Healing Selector Engine",
    "Skip Existing Fields Safety Guard",
    "JSON Import/Export Team Sharing",
    "Free Minor Updates & Bug Hotfixes",
  ];

  const comingSoonFeatures = [
    "AI Image Background Remover (1-Click)",
    "AI SEO Description & Tag Generator",
    "Bulk Catalog Upload via Excel Queue",
    "Amazon Cross-Marketplace Sync",
    "Low Shipping AI Optimization",
    "AI Image Generation & Model Mockups",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  // Scroll to a specific card smoothly
  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".pricing-card-slide");
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollPosition = card.offsetLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setActiveCardIndex(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Centering the Lifetime card on initial mobile load
    const handleScrollToMiddle = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const cards = container.querySelectorAll(".pricing-card-slide");
        if (cards.length > 1) {
          const middleCard = cards[1] as HTMLElement;
          const containerWidth = container.offsetWidth;
          const cardWidth = middleCard.offsetWidth;
          const scrollPosition = middleCard.offsetLeft - (containerWidth - cardWidth) / 2;
          container.scrollTo({ left: scrollPosition, behavior: "instant" });
          setActiveCardIndex(1);
        }
      }
    };

    // Delayed trigger to guarantee browser layout calculation is finished
    const timer = setTimeout(handleScrollToMiddle, 150);

    // Track scroll to update active dot state
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const cards = container.querySelectorAll(".pricing-card-slide");
      
      let bestIndex = 1;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardElem = card as HTMLElement;
        const cardCenter = cardElem.offsetLeft + cardElem.offsetWidth / 2;
        const containerCenter = scrollLeft + containerWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < minDistance) {
          minDistance = dist;
          bestIndex = idx;
        }
      });
      setActiveCardIndex(bestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScrollToMiddle);

    return () => {
      clearTimeout(timer);
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScrollToMiddle);
    };
  }, []);

  return (
    <section className="relative py-28 cosmic-grid border-t border-border-subtle bg-brand-bg" id="pricing">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full gradient-blur-indigo opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full gradient-blur-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="pricing-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-xs font-semibold text-brand-violet uppercase tracking-widest font-mono mb-4">
            <Sparkles size={11} className="text-brand-violet fill-brand-violet/20 animate-pulse" />
            Flexible Pricing Options
          </div>
          <h2 className="text-4xl font-heading font-extrabold text-txt-p tracking-tight sm:text-5xl">
            Choose the Perfect Plan for your <span className="bg-gradient-to-r from-brand-violet via-brand-indigo to-brand-cyan bg-clip-text text-transparent">Meesho Store</span>
          </h2>
          <p className="text-base text-txt-s mt-4 font-sans font-light max-w-xl mx-auto">
            Supercharge your eCommerce listing productivity. Pick an affordable subscription to automate catalog creation instantly, or preview future enterprise features.
          </p>
        </div>

        {/* Swipe instruction helper on mobile */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-6 text-xs text-brand-violet/80 font-semibold font-mono animate-pulse">
          <span>⟵ Swipe left or right to explore plans ⟶</span>
        </div>

        {/* Pricing Layout Container: Horizontal Scroll on Mobile, Flex Wrap on Tablet for centering, 3 Columns on Desktop */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-8 pb-8 px-8 md:px-0 -mx-4 md:mx-auto md:overflow-visible md:flex md:flex-row md:flex-wrap md:justify-center lg:grid lg:grid-cols-3 md:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto scroll-smooth scrollbar-none justify-center justify-items-center"
          id="pricing-grid"
        >
          
          {/* Plan 1: Yearly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-[80vw] max-w-[340px] sm:max-w-[360px] md:w-[340px] lg:w-full shrink-0 snap-center md:snap-align-none pricing-card-slide neumorphic-flat rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-border-subtle/10 hover:scale-[1.01] transition-all duration-300"
            id="plan-yearly"
          >
            <div>
              <span className="text-xs font-semibold text-txt-m uppercase tracking-widest font-mono block mb-2">YEARLY PLAN</span>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-txt-p font-numbers">₹199</span>
                <span className="text-txt-s text-sm font-sans">/ year</span>
              </div>
              <p className="text-xs text-txt-s font-sans mb-8 leading-relaxed">
                Ideal for scaling sellers who want reliable, high-speed single-click Meesho automation at a highly affordable annual subscription.
              </p>
              
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-bold text-txt-m font-mono tracking-widest uppercase block mb-2">WHAT'S INCLUDED</span>
                {standardFeatures.map((feat) => (
                   <div key={feat} className="flex items-start gap-2.5 text-xs text-txt-s">
                     <Check size={14} className="text-brand-cyan shrink-0 mt-0.5" />
                     <span>{feat}</span>
                   </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-border-subtle/20">
              <a
                href={WHATSAPP_YEARLY}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full py-4 px-6 rounded-2xl text-xs font-bold text-txt-p bg-brand-bg hover:scale-98 border border-border-subtle/10 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[inset_2px_2px_5px_rgba(165,180,203,0.4),_inset_-2px_-2px_5px_rgba(255,255,255,1)] dark:hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),_inset_-2px_-2px_5px_rgba(28,30,54,0.25)]"
              >
                <MessageSquare size={14} className="fill-brand-cyan/10" />
                Buy Now
              </a>
            </div>
          </motion.div>

          {/* Plan 2: Lifetime (Recommended) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-[80vw] max-w-[340px] sm:max-w-[360px] md:w-[340px] lg:w-full shrink-0 snap-center md:snap-align-none pricing-card-slide rounded-3xl p-[2.5px] bg-gradient-to-r from-brand-violet via-brand-indigo to-brand-cyan animate-border-gradient flex flex-col relative hover:scale-[1.02] md:scale-[1.03] md:z-10 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] dark:shadow-[0_0_40px_-5px_rgba(139,92,246,0.2)]"
            id="plan-lifetime"
          >
            {/* Elegant Purple Floating Badge at top-center of the card */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 dark:bg-purple-600 text-white text-[10px] sm:text-xs font-black tracking-widest uppercase py-1.5 px-5 rounded-full shadow-lg flex items-center justify-center gap-1.5 whitespace-nowrap border-2 border-white dark:border-[#0C0D19] z-20">
              <Sparkles size={11} className="fill-white animate-pulse" />
              <span>Recommended Plan</span>
            </div>

            {/* Inner Content Wrapper to house card details and offset the border */}
            <div className="w-full h-full bg-brand-card dark:bg-[#0C0D19] rounded-[22px] py-11 px-6 sm:px-8 flex flex-col justify-between">
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono block">LIFETIME ACCESS</span>
                  <span className="text-[9px] bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 font-bold px-2 py-0.5 rounded-full font-mono uppercase">BEST VALUE</span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl sm:text-5xl font-heading font-extrabold text-txt-p font-numbers">₹299</span>
                  <span className="text-txt-s text-sm font-sans">once</span>
                </div>
                <p className="text-xs text-txt-s font-sans mb-8 leading-relaxed">
                  Our most popular option. Gain lifetime access to CetaListing with no recurring renewal fees. Perfect for long-term Indian textile wholesalers.
                </p>

                <div className="space-y-4 mb-8">
                  <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 font-mono tracking-widest uppercase block mb-2">WHAT'S INCLUDED</span>
                  {standardFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-txt-p">
                      <Check size={14} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <strong>{feat}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-border-subtle/20">
                <a
                  href={WHATSAPP_LIFETIME}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full py-4 px-6 rounded-2xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01]"
                >
                  <MessageSquare size={14} className="fill-white/10" />
                  Buy Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Plan 3: Ultimate Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[80vw] max-w-[340px] sm:max-w-[360px] md:w-[340px] lg:w-full shrink-0 snap-center md:snap-align-none pricing-card-slide rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-[#0F172A] dark:bg-[#070914] text-white border border-slate-800 shadow-[0_10px_30px_rgba(139,92,246,0.15)] hover:scale-[1.01] transition-all duration-300"
            id="plan-ultimate"
          >
            {/* Elegant glassmorphic badge */}
            <div className="absolute top-4 right-4 bg-purple-500/15 text-purple-300 text-[9px] font-black tracking-widest uppercase py-1 px-2.5 rounded-full border border-purple-500/20 shadow-sm">
              DEV PREVIEW
            </div>

            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono block mb-2">ULTIMATE BUNDLE</span>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white font-numbers">₹1499*</span>
                <span className="text-slate-400 text-sm font-sans">/ lifetime</span>
              </div>
              <p className="text-xs text-slate-300 font-sans mb-8 leading-relaxed">
                The ultimate automation suite. Currently under developer preview and NOT for individual purchase. Preview upcoming features below.
              </p>

              {/* Standard features block in Ultimate */}
              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase block mb-1">INCLUDES ALL PLANS</span>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 italic">
                  <Check size={13} className="text-purple-400 shrink-0" />
                  <span>All Yearly & Lifetime features included</span>
                </div>
              </div>

              {/* Coming Soon Features block in Ultimate */}
              <div className="space-y-4 mb-6">
                <span className="text-[10px] font-bold text-brand-cyan font-mono tracking-widest uppercase block mb-2">COMING SOON FEATURES</span>
                {comingSoonFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Sparkles size={13} className="text-brand-cyan shrink-0 mt-0.5 animate-pulse" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* View More / Roadmap Button */}
              <div className="mb-8">
                <a
                  href="#roadmap"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#38bdf8] hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>View More on Roadmap</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800">
              <div className="w-full py-4 px-6 rounded-2xl text-xs font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center gap-2 select-none">
                <AlertCircle size={14} className="animate-pulse" />
                All Features Included – Coming Soon
              </div>
            </div>
          </motion.div>

        </div>

        {/* Elegant Pagination dots below the mobile slider */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-4" id="pricing-dots">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeCardIndex === idx 
                  ? "w-8 bg-purple-600 dark:bg-purple-500" 
                  : "w-2.5 bg-border-subtle/40 hover:bg-border-subtle"
              }`}
              aria-label={`Go to plan ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

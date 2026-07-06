import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Zap, 
  RefreshCw, 
  Database, 
  ArrowUpDown, 
  SquareDot, 
  Gauge, 
  Sidebar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
  FileJson,
  ShieldCheck,
  Cpu,
  Clock
} from "lucide-react";

interface FeatureLocalItem {
  id: string;
  title: string;
  desc: string;
  detail: string;
  badge?: string;
  isComingSoon?: boolean;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  simulatedVisual: React.ReactNode;
}

export default function Features() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabListRef = useRef<HTMLDivElement>(null);

  const features: FeatureLocalItem[] = [
    {
      id: "f1",
      title: "Manual Capture",
      desc: "Instant custom attribute mapping",
      detail: "Manually map and save every input field, dropdown selection, and checkbox once. CetaListing remembers your layout so you never type the same thing twice.",
      badge: "Currently Active",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      icon: <MousePointerClick className="text-pink-500" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-pink-500/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-zinc-500">
              <span>Status:</span> 
              <span className="text-pink-400 font-bold animate-pulse">● CAPTURING</span>
            </div>
            <div className="text-zinc-300 mt-2">&gt; Clicked Saree Material dropdown</div>
            <div className="text-pink-400 font-semibold">&gt; Saved Choice: pure_silk_saree ✓</div>
          </div>
          <div className="text-zinc-600 text-[9px]">Saved to Local Mappings DB</div>
        </div>
      )
    },
    {
      id: "f2",
      title: "One-Click Autofill",
      desc: "Complete catalogs in 2 seconds",
      detail: "Instantly populate complex multi-variant listing forms. Sizes, measurements, fabric weight, and descriptions filled concurrently.",
      badge: "Super Fast",
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
      borderColor: "border-sky-400/20",
      icon: <Zap className="text-sky-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-sky-400/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-zinc-500">
              <span>Execution:</span> 
              <span className="text-sky-400 font-bold">1.4s (instant)</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-2">
              <motion.div 
                animate={{ width: ["0%", "100%"] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-sky-400 to-indigo-500" 
              />
            </div>
          </div>
          <div className="text-sky-400 text-center font-bold text-[11px]">&gt; 34 attributes filled!</div>
        </div>
      )
    },
    {
      id: "f3",
      title: "Smart Selector Engine",
      desc: "Self-healing element locator",
      detail: "Meesho updates their dashboard frequently. Our advanced selector engine maps elements dynamically so your tool never breaks.",
      badge: "Premium",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
      borderColor: "border-indigo-400/20",
      icon: <RefreshCw className="text-indigo-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-indigo-400/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div>
            <div className="text-amber-400 font-bold flex items-center gap-1">
              <span>⚠️ Meesho DOM altered</span>
            </div>
            <div className="text-zinc-400 mt-1">&gt; Re-targeting fabric field...</div>
            <div className="text-emerald-400 font-bold">&gt; Fixed & filled! (Self-Healed)</div>
          </div>
          <div className="text-zinc-600 text-[9px]">Selector Engine Auto-Updated</div>
        </div>
      )
    },
    {
      id: "f4",
      title: "Product Database",
      desc: "Unlimited local templates",
      detail: "Save custom templates, sizes, and pricing tiers directly inside your secure Chrome local storage database.",
      badge: "Secure",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20",
      icon: <Database className="text-emerald-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-emerald-400/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div>
            <span className="text-zinc-500 font-bold">Local Profiles (3)</span>
            <div className="space-y-1 mt-1.5">
              <div className="flex justify-between bg-zinc-900 p-1 rounded text-[8px]">
                <span className="text-emerald-300 font-bold">✓ Silk_Saree_Pro</span>
                <span className="text-zinc-500">22 Fields</span>
              </div>
              <div className="flex justify-between bg-zinc-900 p-1 rounded text-[8px]">
                <span className="text-zinc-300">✓ Cotton_Kurti_SML</span>
                <span className="text-zinc-500">18 Fields</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "f5",
      title: "Import / Export JSON",
      desc: "Secure backups in seconds",
      detail: "Back up your listing database, migrate profiles, or share custom templates with your listing team in a single click.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      icon: <FileJson className="text-purple-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-purple-400/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div className="text-center pt-1">
            <span className="text-[9px] text-zinc-500 block">EXPORT COMPLETED</span>
            <span className="text-xs text-purple-300 font-bold block mt-1">cetalisting_db.json</span>
          </div>
          <div className="px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-[9px] text-purple-300 text-center font-bold">
            Share config with team
          </div>
        </div>
      )
    },
    {
      id: "f6",
      title: "Skip Existing Fields",
      desc: "Safe form filling guards",
      detail: "Never overwrite manually filled fields. CetaListing intelligently detects fields you've already tweaked and bypasses them.",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
      icon: <ShieldCheck className="text-amber-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-amber-400/10 space-y-1 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[9px] text-zinc-500">
              <span>Shield Protection:</span>
              <span className="text-emerald-400 font-bold">ACTIVE</span>
            </div>
            <div className="text-zinc-400 mt-2">&gt; Form contains custom price</div>
            <div className="text-amber-400 font-semibold">&gt; Skipped Price Field ✓</div>
          </div>
          <div className="text-zinc-600 text-[8px]">Protects manually edited inputs</div>
        </div>
      )
    },
    {
      id: "f7",
      title: "Lightning Fast Speed",
      desc: "Zero network lag",
      detail: "Built on high-performance native Chrome background scripts, processing multi-product sheets instantly without page freezes.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
      icon: <Gauge className="text-cyan-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-cyan-400/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-center items-center">
          <div className="text-2xl font-bold font-numbers text-cyan-400 animate-pulse">0 ms</div>
          <div className="text-[9px] text-zinc-500 text-center uppercase tracking-wider">
            No external server calls
          </div>
        </div>
      )
    },
    {
      id: "f8",
      title: "AI Auto-Capture",
      desc: "Smart image scanning",
      detail: "Using deep learning models to automatically scan your listing photos and draft tags to map dropdown details. Coming soon in future platform updates.",
      badge: "Coming Soon",
      isComingSoon: true,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      icon: <Cpu className="text-purple-400" size={22} />,
      simulatedVisual: (
        <div className="bg-zinc-950/80 p-4 rounded-xl border border-purple-500/10 space-y-2 font-mono text-[10px] h-32 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-zinc-500">
              <span>Status:</span> 
              <span className="text-purple-400 font-bold">DEVELOPMENT</span>
            </div>
            <div className="text-zinc-400 mt-1.5">&gt; Image Vision Engine v2.1</div>
            <div className="text-zinc-500 italic text-[9px]">&gt; Model training in progress...</div>
          </div>
          <div className="text-purple-400 text-[8px] font-bold uppercase tracking-widest">Future Core Update</div>
        </div>
      )
    }
  ];

  // Auto-scroll horizontal tabs on mobile when activeTab changes
  useEffect(() => {
    const tabList = tabListRef.current;
    if (tabList) {
      const activeTabElement = tabList.children[activeTab] as HTMLElement;
      if (activeTabElement) {
        const offsetLeft = activeTabElement.offsetLeft;
        const width = activeTabElement.offsetWidth;
        const containerWidth = tabList.offsetWidth;
        tabList.scrollTo({
          left: offsetLeft - (containerWidth / 2) + (width / 2),
          behavior: "smooth"
        });
      }
    }
  }, [activeTab]);

  return (
    <section className="relative py-28 bg-brand-bg border-t border-border-subtle" id="features">
      {/* Dynamic Background Grid and Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full gradient-blur-indigo opacity-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full gradient-blur-violet opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="features-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card border border-border-subtle text-xs font-semibold text-txt-s uppercase tracking-widest font-mono mb-4">
            <Zap size={11} className="text-brand-violet fill-brand-violet/20 animate-pulse" />
            Core Platform Abilities
          </div>
          <h2 className="text-4xl font-heading font-extrabold text-txt-p tracking-tight sm:text-5xl">
            Smarter Fields, <span className="bg-gradient-to-r from-brand-violet via-brand-indigo to-brand-cyan bg-clip-text text-transparent">Faster Listing</span>
          </h2>
          <p className="text-base text-txt-s mt-4 font-sans font-light max-w-xl mx-auto">
            A specialized utility toolkit developed exclusively to automate the wholesale listing workload. Explore manual capture speeds today and preview our AI roadmap.
          </p>
        </div>

        {/* 1. MOBILE-ONLY NO-SCROLL HUB (Active tab details slider, zero vertical bloat) */}
        <div className="md:hidden block" id="features-mobile-hub">
          {/* Horizontal scrollable navigation tabs bar */}
          <div className="relative mb-6">
            <div 
              ref={tabListRef}
              className="flex gap-2 overflow-x-auto px-4 py-2 -mx-4 scrollbar-none snap-x snap-mandatory"
            >
              {features.map((feat, idx) => (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all snap-center cursor-pointer ${
                    activeTab === idx 
                      ? "bg-brand-card border-brand-violet text-txt-p shadow-[0_4px_20px_-5px_rgba(139,92,246,0.2)]" 
                      : "bg-brand-card/50 border-border-subtle/50 text-txt-s hover:border-border-subtle"
                  }`}
                >
                  <span className="scale-90">{feat.icon}</span>
                  <span>{feat.title}</span>
                </button>
              ))}
            </div>
            {/* Subtle fading indicators on sides of scrollable bar */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
          </div>

          {/* Active Detail Container Box */}
          <div className="bg-brand-card/70 border border-border-subtle rounded-3xl p-6 relative overflow-hidden">
            {/* Background color spray corresponding to feature */}
            <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-10 transition-colors duration-500 ${features[activeTab].bgColor}`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Feature Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all ${features[activeTab].bgColor} ${features[activeTab].borderColor}`}>
                      {features[activeTab].icon}
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-bold text-txt-p">
                        {features[activeTab].title}
                      </h3>
                      <span className="text-[10px] text-brand-indigo font-mono uppercase tracking-wider block">
                        {features[activeTab].desc}
                      </span>
                    </div>
                  </div>

                  {features[activeTab].badge && (
                    <span className={`text-[9px] font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded-full ${
                      features[activeTab].isComingSoon 
                        ? "bg-purple-500/10 border border-purple-500/20 text-purple-400" 
                        : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                    }`}>
                      {features[activeTab].badge}
                    </span>
                  )}
                </div>

                {/* Technical visual mockup */}
                <div className="w-full">
                  {features[activeTab].simulatedVisual}
                </div>

                {/* Narrative Detail */}
                <p className="text-xs text-txt-s leading-relaxed font-sans font-light">
                  {features[activeTab].detail}
                </p>

                {/* Swipe guide dots */}
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle/40 text-[10px] font-mono text-txt-m">
                  <span>MODULE {features[activeTab].id.toUpperCase()}</span>
                  <div className="flex gap-1.5">
                    {features.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          activeTab === idx ? "w-4 bg-brand-violet" : "w-1.5 bg-border-subtle"
                        }`}
                        aria-label={`Go to feature ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 2. DESKTOP / TABLET GRID (Kept clean, high density, gorgeous neumorphic/glassmorphic grid) */}
        <div 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="features-grid-container"
        >
          {features.map((feat, index) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-brand-card/40 border border-border-subtle hover:border-brand-indigo/30 p-6 rounded-2xl flex flex-col justify-between relative group overflow-hidden hover:scale-[1.01] transition-all duration-300"
            >
              {/* Card glowing visual hover background */}
              <div className={`absolute -top-1/2 -right-1/2 w-48 h-48 bg-gradient-to-tr from-brand-violet/5 via-brand-cyan/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div>
                {/* Icon Wrapper & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all ${feat.bgColor} ${feat.borderColor}`}>
                    {feat.icon}
                  </div>
                  {feat.badge && (
                    <span className={`text-[9px] font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded-full ${
                      feat.isComingSoon 
                        ? "bg-purple-500/10 border border-purple-500/20 text-purple-400 animate-pulse" 
                        : "bg-pink-500/10 border border-pink-500/20 text-pink-500"
                    }`}>
                      {feat.badge}
                    </span>
                  )}
                </div>

                {/* Typography Header pairing */}
                <h3 className="text-base font-heading font-extrabold text-txt-p mb-1 flex items-center gap-2 group-hover:text-brand-indigo transition-colors duration-200">
                  {feat.title}
                </h3>
                <span className="text-[10px] text-brand-indigo dark:text-brand-indigo/80 font-mono block mb-3 font-bold uppercase tracking-wider">
                  {feat.desc}
                </span>

                {/* Narrative text */}
                <p className="text-xs text-txt-s leading-relaxed font-sans font-light mb-4">
                  {feat.detail}
                </p>
              </div>

              {/* Simulated visual block rendered within desktop cards too for rich UX */}
              <div className="mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {feat.simulatedVisual}
              </div>

              {/* Footer status bar */}
              <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] text-txt-m font-mono">
                <span>MODULE {feat.id.toUpperCase()}</span>
                {feat.isComingSoon ? (
                  <span className="text-purple-400 font-bold">COMING SOON</span>
                ) : (
                  <span className="text-emerald-400 font-bold">READY</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

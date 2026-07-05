import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Lock, 
  Sparkles, 
  Image, 
  FileText, 
  BarChart3, 
  Tag, 
  Layers, 
  ShoppingBag, 
  Globe, 
  Video, 
  Download, 
  CheckSquare, 
  Settings2, 
  Rocket, 
  CheckCircle2, 
  MousePointerClick, 
  ChevronRight, 
  Zap, 
  Cpu, 
  PlusCircle,
  Clock,
  ArrowRight,
  Palette,
  RefreshCw
} from "lucide-react";
import { ROADMAP_ITEMS } from "../data";

export default function Roadmap() {
  const activeUsers = 19;
  const targetUsers = 1000;
  const percent = (activeUsers / targetUsers) * 100;

  // Track the active category tab
  const [activeCategory, setActiveCategory] = useState<string>("ai-content");

  // Define categories and map items
  const categories = [
    { id: "ai-content", label: "AI Content", icon: <Cpu size={14} />, color: "from-pink-500 to-brand-violet" },
    { id: "ai-media", label: "AI Media", icon: <Palette size={14} />, color: "from-brand-violet to-brand-indigo" },
    { id: "sync-utils", label: "Channel Sync", icon: <RefreshCw size={14} />, color: "from-brand-indigo to-brand-cyan" }
  ];

  // Helper to map items to categories
  const getCategoryItems = (catId: string) => {
    switch (catId) {
      case "ai-content":
        return ROADMAP_ITEMS.filter(item => 
          ["rm2", "rm3", "rm12", "rm15"].includes(item.id)
        );
      case "ai-media":
        return ROADMAP_ITEMS.filter(item => 
          ["rm1", "rm11", "rm13", "rm14"].includes(item.id)
        );
      case "sync-utils":
        return ROADMAP_ITEMS.filter(item => 
          ["rm4", "rm5", "rm6", "rm7", "rm8", "rm9", "rm10"].includes(item.id)
        );
      default:
        return ROADMAP_ITEMS;
    }
  };

  const getRoadmapIcon = (id: string) => {
    switch (id) {
      case "rm1": return <Image size={18} className="text-brand-violet" />;
      case "rm2": return <FileText size={18} className="text-brand-indigo" />;
      case "rm3": return <Tag size={18} className="text-brand-violet" />;
      case "rm4": return <BarChart3 size={18} className="text-brand-cyan" />;
      case "rm5": return <Layers size={18} className="text-brand-violet" />;
      case "rm6": return <Settings2 size={18} className="text-brand-indigo" />;
      case "rm7": return <Layers size={18} className="text-brand-cyan" />;
      case "rm8": return <ShoppingBag size={18} className="text-brand-violet" />;
      case "rm9": return <ShoppingBag size={18} className="text-brand-indigo" />;
      case "rm10": return <CheckSquare size={18} className="text-brand-cyan" />;
      case "rm11": return <Image size={18} className="text-brand-violet" />;
      case "rm12": return <Globe size={18} className="text-brand-indigo" />;
      case "rm13": return <Video size={18} className="text-brand-cyan" />;
      case "rm14": return <Download size={18} className="text-brand-violet" />;
      case "rm15": return <Settings2 size={18} className="text-brand-indigo" />;
      default: return <Lock size={18} className="text-zinc-500" />;
    }
  };

  return (
    <section className="relative py-28 bg-brand-bg border-t border-border-subtle" id="roadmap">
      {/* Decorative gradient blur background */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 gradient-blur-violet opacity-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 gradient-blur-indigo opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="roadmap-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card border border-border-subtle text-xs font-semibold text-txt-s uppercase tracking-widest font-mono mb-4">
            <Sparkles size={11} className="text-brand-violet fill-brand-violet/20 animate-pulse" />
            Core Vision & Growth
          </div>
          <h2 className="text-4xl font-heading font-extrabold text-txt-p tracking-tight sm:text-5xl">
            Our Vision: <span className="bg-gradient-to-r from-brand-violet via-brand-indigo to-brand-cyan bg-clip-text text-transparent">Road to 1000 Users</span>
          </h2>
          <p className="text-base text-txt-s mt-4 font-sans font-light max-w-xl mx-auto">
            We are building India's smartest wholesale eCommerce listing solution. Check out what is fully live today, and explore our future AI roadmap.
          </p>
        </div>

        {/* Dynamic Dual Grid: Left Column is Current Live Setup + Growth progress, Right is the Interactive Roadmap Card Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: The Current Reality (Manual Capture is Live!) & Growth meter */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Today Status Card */}
            <div className="bg-brand-card border border-border-subtle p-6 rounded-3xl relative overflow-hidden shadow-sm">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-bold text-emerald-500 font-mono tracking-widest uppercase">FULLY OPERATIONAL NOW</span>
              </div>
              <h3 className="text-lg font-heading font-extrabold text-txt-p mb-2 flex items-center gap-2">
                <MousePointerClick className="text-brand-violet" size={18} />
                Manual Capture is Live
              </h3>
              <p className="text-xs text-txt-s leading-relaxed mb-4">
                You do not need to wait for the future. Our powerful <strong>Manual Capture mapping</strong> and <strong>One-Click Autofill engine</strong> are fully built, optimized, and ready to list your catalogs in seconds today.
              </p>
              
              {/* Feature Highlights of V1 */}
              <div className="space-y-2 bg-brand-bg/55 p-3 rounded-xl border border-border-subtle/40">
                <div className="flex items-center gap-2 text-xs text-txt-p">
                  <CheckCircle2 size={13} className="text-brand-violet shrink-0" />
                  <span>1-Click Form Filling (Meesho & Flipkart ready)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-txt-p">
                  <CheckCircle2 size={13} className="text-brand-violet shrink-0" />
                  <span>Custom Attribute Selection mapping</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-txt-p">
                  <CheckCircle2 size={13} className="text-brand-violet shrink-0" />
                  <span>Secure Chrome Local Storage Database</span>
                </div>
              </div>
            </div>

            {/* Growth Progress Tracker Card */}
            <div className="bg-brand-card border border-border-subtle p-6 rounded-3xl relative overflow-hidden shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-txt-m font-mono uppercase tracking-wider block">ACTIVE SELLERS TARGET</span>
                  <span className="text-xl font-heading font-extrabold text-txt-p mt-0.5">Community Expansion</span>
                </div>
                <div className="px-3 py-1 bg-brand-violet/10 border border-brand-violet/20 rounded-full text-brand-violet text-xs font-bold font-mono">
                  Target: 1,000 Users
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-txt-s font-semibold">Active Wholesalers:</span>
                  <span className="text-txt-p font-bold font-numbers">{activeUsers} / 1,000</span>
                </div>
                
                {/* Visual Progress Bar */}
                <div className="w-full h-3 bg-brand-bg rounded-full border border-border-subtle/20 overflow-hidden p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-brand-violet rounded-full relative min-w-[5%]"
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:15px_15px] animate-[pulse_2s_linear_infinite]" />
                  </motion.div>
                </div>
                
                <div className="flex items-center justify-between text-[10px] text-txt-m font-mono pt-1">
                  <span>{percent.toFixed(1)}% Completed</span>
                  <span className="text-brand-violet font-bold">{targetUsers - activeUsers} more to unlock V2</span>
                </div>
              </div>

              <p className="text-[11px] text-txt-m mt-4 leading-relaxed font-sans font-light">
                Every Surat textile wholesaler who sets up our lightweight local extension joins this active list. As the community hits 1000 users, we will unlock our central AI Vision suite automatically!
              </p>
            </div>

          </div>

          {/* Right Panel: The Interactive Single Card Hub (Solves both mobile scrolling & highlights vision!) */}
          <div className="lg:col-span-7">
            
            {/* The Unified Card Container */}
            <div className="bg-brand-card border border-border-subtle rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm" id="roadmap-interactive-hub">
              
              {/* Corner Accent badge representing locked v2 */}
              <div className="absolute right-0 top-0 bg-brand-violet text-white text-[9px] font-bold font-mono py-1 px-4 rounded-bl-xl uppercase tracking-wider">
                v2.0 Vision Roadmap
              </div>

              <div className="mb-6 max-w-md">
                <span className="text-xs text-brand-violet font-bold font-mono tracking-widest uppercase block mb-1">Interactive Catalog</span>
                <h3 className="text-xl font-heading font-extrabold text-txt-p">Future Cloud AI Features</h3>
                <p className="text-xs text-txt-s mt-1 font-sans">
                  Tap the tabs below to explore what is currently in development or planned for the v2 platform rollout.
                </p>
              </div>

              {/* Navigation Segment Pills (Beautifully responsive, horizontal scroll on very small widths, grid-based on tablet/desktop) */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-brand-bg border border-border-subtle/60 rounded-2xl mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`py-3 px-1 sm:px-4 rounded-xl text-center text-[10px] sm:text-xs font-bold transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                      activeCategory === cat.id
                        ? "bg-brand-card text-brand-violet shadow-sm border border-brand-violet/20"
                        : "text-txt-m hover:text-txt-p hover:bg-brand-card/30"
                    }`}
                  >
                    <span className={`transition-transform duration-300 ${activeCategory === cat.id ? "scale-110 text-brand-violet" : "text-txt-m opacity-75"}`}>
                      {cat.icon}
                    </span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* The Single Card Feature list with beautiful micro-animations */}
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {getCategoryItems(activeCategory).map((item) => (
                      <div 
                        key={item.id}
                        className="p-4 rounded-2xl bg-brand-bg/50 border border-border-subtle/40 hover:border-brand-violet/10 transition-all duration-200 group flex items-start gap-3 justify-between"
                      >
                        <div className="flex items-start gap-3">
                          {/* Left side icon wrapper */}
                          <div className="w-10 h-10 rounded-xl bg-brand-card border border-border-subtle/60 flex items-center justify-center shrink-0">
                            {getRoadmapIcon(item.id)}
                          </div>
                          
                          <div>
                            {/* Feature title */}
                            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-txt-p flex items-center gap-1.5">
                              {item.title}
                            </h4>
                            {/* Feature description */}
                            <p className="text-[11px] text-txt-s mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Status Lock/Development indicator */}
                        <div className="shrink-0 pt-0.5">
                          {item.status === "in-development" ? (
                            <span className="text-[9px] font-bold font-mono uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full animate-pulse whitespace-nowrap">
                              In Dev
                            </span>
                          ) : (
                            <span className="text-[9px] font-bold font-mono uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900/50 text-txt-m border border-border-subtle/40 px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                              <Lock size={8} /> Locked
                            </span>
                          )}
                        </div>

                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action bottom info */}
              <div className="mt-6 pt-5 border-t border-border-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Cpu className="text-brand-violet animate-pulse shrink-0" size={14} />
                  <span className="text-[10px] text-txt-m font-mono uppercase">Version 2.0 Cloud Architecture Blueprint</span>
                </div>
                <div className="text-[10px] text-brand-violet font-bold font-mono flex items-center gap-1">
                  <span>Scroll to Pricing to Join Circle</span>
                  <ArrowRight size={10} />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

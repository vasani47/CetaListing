import { useState, MouseEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, Play, Sparkles, CheckCircle2, ArrowRight, Zap, 
  ShieldCheck, Rocket, Plus, Edit2, Trash2, Eye, Upload, Download, 
  ChevronDown, Check 
} from "lucide-react";
import { WHATSAPP_LINK } from "./Navbar";

const PRODUCTS = [
  { 
    id: "p1", 
    name: "Product1", 
    fields: 8, 
    title: "Printed Cotton Saree", 
    fabric: "Pure Cotton", 
    occasion: "Casual Wear", 
    sizes: ["M", "L", "XL"],
    gst: "5%",
    hsn: "520811",
    weight: "320",
    styleCode: "CETA-SRE-COT",
    price: 299,
    color: "Indigo Blue",
    genericName: "Sarees"
  },
  { 
    id: "p2", 
    name: "Product2", 
    fields: 10, 
    title: "Designer Georgette Saree", 
    fabric: "Pure Georgette", 
    occasion: "Festival", 
    sizes: ["Free Size"],
    gst: "5%",
    hsn: "540752",
    weight: "280",
    styleCode: "CETA-SRE-GEO",
    price: 499,
    color: "Peach Pink",
    genericName: "Sarees"
  },
  { 
    id: "p3", 
    name: "Product3", 
    fields: 12, 
    title: "Embroidered Silk Kurta Set", 
    fabric: "Chanderi Silk", 
    occasion: "Party / Wedding", 
    sizes: ["S", "M", "L", "XL"],
    gst: "12%",
    hsn: "621139",
    weight: "450",
    styleCode: "CETA-KRT-SLK",
    price: 799,
    color: "Royal Violet",
    genericName: "Kurta Sets"
  },
  { 
    id: "p4", 
    name: "Product4", 
    fields: 15, 
    title: "Premium Banarasi Silk Saree", 
    fabric: "Banarasi Silk", 
    occasion: "Traditional", 
    sizes: ["Free Size"],
    gst: "5%",
    hsn: "500720",
    weight: "580",
    styleCode: "CETA-SRE-BAN",
    price: 1299,
    color: "Maroon Gold",
    genericName: "Sarees"
  }
];

export default function Hero() {
  const animatedTexts = ["Repeating", "Typing", "Copying", "Wasting Time"];
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx((prev) => (prev + 1) % animatedTexts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const [selectedProdIdx, setSelectedProdIdx] = useState(1); // Defaults to Product2 like in screenshot
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAutofilling, setIsAutofilling] = useState(false);
  const [autofillProgress, setAutofillProgress] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);

  const activeProduct = PRODUCTS[selectedProdIdx];

  const handleScrollToVideos = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("videos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerAutofill = () => {
    if (isAutofilling) return;
    setIsAutofilling(true);
    setAutofillProgress(0);
    setNotification("Initiating Autofill Sequence...");

    const interval = setInterval(() => {
      setAutofillProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAutofilling(false);
          setNotification(`Successfully filled ${activeProduct.fields} fields into Meesho Form!`);
          setTimeout(() => setNotification(null), 4000);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const triggerPreview = () => {
    setNotification("Loading product specifications...");
    setTimeout(() => {
      setNotification(`Loaded ${activeProduct.fields} specifications cleanly!`);
      setTimeout(() => setNotification(null), 3000);
    }, 1000);
  };

  const triggerImport = () => {
    setNotification("Importing catalog configurations...");
    setTimeout(() => {
      setNotification("Catalog mapping import complete!");
      setTimeout(() => setNotification(null), 3000);
    }, 1000);
  };

  const triggerExport = () => {
    setNotification("Exporting current mappings to local system...");
    setTimeout(() => {
      setNotification("Catalog JSON specifications downloaded!");
      setTimeout(() => setNotification(null), 3000);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden cosmic-grid" id="hero-section">
      {/* Immersive Rotating Glow Gradients */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full gradient-blur-indigo opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full gradient-blur-cyan opacity-20 pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full gradient-blur-violet opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left animate-fade-in" id="hero-text-container">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-[#ff477e] animate-bounce" />
            <span className="text-xs font-semibold bg-gradient-to-r from-[#ff477e] to-[#0ea5e9] bg-clip-text text-transparent uppercase tracking-wider font-numbers">
              India's Smartest Meesho Listing Assistant
            </span>
          </motion.div>

          {/* Core Structured Headline */}
          <div className="space-y-6" id="hero-headline-wrapper">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold text-txt-p tracking-tight leading-[1.2]"
              id="hero-main-title"
            >
              <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 font-light">
                <span>Stop</span>
                <span className="relative inline-block overflow-hidden h-[1.25em] text-[#ff477e]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIdx}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 140, damping: 16 }}
                      className="inline-block select-none whitespace-nowrap"
                    >
                      {animatedTexts[textIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
              <span className="block mt-1 text-brand-indigo dark:text-brand-indigo font-bold">With CetaListing Auto-Listing Tool.</span>
            </motion.h1>

            {/* Redesigned clean bullet points - OUTSIDE the h1 element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-lg mt-6" 
              id="hero-features-list"
            >
              <div className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={14} className="text-brand-indigo group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-txt-p group-hover:text-brand-indigo transition-colors duration-300">1-Click Auto-Listing Copier</h3>
                  <p className="text-xs text-txt-m mt-0.5 leading-relaxed">Instantly copy catalog specifications and auto-fill Meesho forms</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-[#ff477e]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={14} className="text-[#ff477e] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-txt-p group-hover:text-[#ff477e] transition-colors duration-300">Smart Field Auto-Mapping</h3>
                  <p className="text-xs text-txt-m mt-0.5 leading-relaxed">Automatically maps your custom catalog attributes to Meesho's input fields & dropdowns</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Rocket size={14} className="text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-txt-p group-hover:text-emerald-500 transition-colors duration-300">Complete Form Automation</h3>
                  <p className="text-xs text-txt-m mt-0.5 leading-relaxed">Eliminate manual typing errors and list products in under 5 seconds</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-txt-s max-w-xl font-sans font-light mt-2 mb-8 leading-relaxed"
            id="hero-subtitle"
          >
            CetaListing is an advanced chrome browser auto-listing tool built for Meesho sellers. Effortlessly copy catalog parameters and inject complete product listings with a single click.
          </motion.p>

          {/* CTA Button Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            id="hero-buttons-container"
          >
            <div className="walking-border-wrapper w-full sm:w-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full px-8 py-4 rounded-[12px] text-sm font-bold bg-gradient-to-r from-[#2E3192] to-[#ff477e] hover:from-[#1F216B] hover:to-[#e03165] transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 text-white group"
                id="hero-cta-whatsapp"
              >
                <MessageSquare size={16} className="fill-white/10" />
                <span>Download Extension</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <a 
              href="#videos"
              onClick={handleScrollToVideos}
              className="px-8 py-4 rounded-xl text-sm font-semibold border border-border-subtle hover:border-[#ff477e]/30 bg-brand-card hover:bg-brand-card-hover transition-all duration-300 flex items-center justify-center gap-2.5 text-txt-s hover:text-txt-p"
              id="hero-cta-demo"
            >
              <Play size={15} className="fill-current" />
              Watch Demo
            </a>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 text-xs text-txt-m font-mono"
            id="hero-trust-bullets"
          >
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> Safe Local Storage</span>
            <span className="hidden sm:inline h-4 w-px bg-border-subtle" />
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-[#ff477e]" /> Instant Auto-Fill</span>
            <span className="hidden sm:inline h-4 w-px bg-border-subtle" />
            <span className="flex items-center gap-1.5">No Passwords Required</span>
          </motion.div>
        </div>

        {/* Right: Immersive Interactive Mock Extension Panel - Exact Replica of User's Design! */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center" id="hero-extension-mockup-wrapper">
          {/* Glass floating backdrop decoration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff477e]/10 to-[#0ea5e9]/10 rounded-[32px] blur-3xl -z-10 animate-pulse-slow" />

          {/* Real-time Toast Notification inside Simulator */}
          <AnimatePresence>
            {notification && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-4 z-50 px-4 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-2xl flex items-center gap-2 border border-slate-700/50"
              >
                <div className="w-2 h-2 rounded-full bg-[#ff477e] animate-ping" />
                <span>{notification}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Simulated Dual View: Meesho Seller Dashboard + Overlay CetaListing Extension */}
          <div className="w-full max-w-[500px] neumorphic-flat p-2 sm:p-4 rounded-[32px] border border-border-strong/40 bg-slate-100 dark:bg-slate-900/60 transition-all duration-300">
            
            {/* Header: Browser Bar simulation */}
            <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-200/60 dark:border-slate-800/60 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono select-none">Meesho Seller Panel + CetaListing API</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Meesho Form - Representing what gets filled - High Fidelity matching user image! */}
              <div className="md:col-span-5 bg-white dark:bg-slate-950 p-3 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between min-h-[380px] max-h-[460px] overflow-y-auto scrollbar-thin">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Add Product Details</span>
                    <span className="text-[8px] bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-slate-500 font-mono font-bold">MEESHO PORTAL</span>
                  </div>


                  {/* Section Title 1 */}
                  <div>
                    <h4 className="text-[9.5px] font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-0.5 mb-2">Product, Size and Inventory</h4>
                    
                    <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                      {/* GST Field */}
                      <div>
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>GST</span>
                          <span className="text-red-500 font-bold">*</span>
                          <span className="text-[8px] text-slate-400 cursor-help">(i)</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 flex items-center justify-between text-slate-800 dark:text-slate-200">
                          <span className={autofillProgress >= 30 ? "text-slate-800 dark:text-slate-200 font-medium font-numbers" : "text-slate-300 dark:text-slate-700"}>
                            {autofillProgress >= 30 ? activeProduct.gst : "Select GST"}
                          </span>
                          <ChevronDown size={10} className="text-slate-400" />
                        </div>
                      </div>

                      {/* HSN Code Field */}
                      <div>
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>HSN Code</span>
                          <span className="text-red-500 font-bold">*</span>
                          <span className="text-[8px] text-slate-400 cursor-help">(i)</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 flex items-center justify-between text-slate-800 dark:text-slate-200">
                          <span className={autofillProgress >= 30 ? "text-slate-800 dark:text-slate-200 font-medium font-numbers" : "text-slate-300 dark:text-slate-700"}>
                            {autofillProgress >= 30 ? activeProduct.hsn : "Enter HSN"}
                          </span>
                          <ChevronDown size={10} className="text-slate-400" />
                        </div>
                        <span className="text-[7.5px] text-blue-600 dark:text-blue-400 hover:underline cursor-pointer block mt-0.5">Find Relevant HSN Code &gt;</span>
                      </div>

                      {/* Net Weight Field */}
                      <div>
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>Net Weight <span className="text-[8px] text-slate-400 font-normal">(gms)</span></span>
                          <span className="text-red-500 font-bold">*</span>
                          <span className="text-[8px] text-slate-400 cursor-help">(i)</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-800 dark:text-slate-200 font-numbers">
                          {autofillProgress >= 40 ? (
                            <span className="text-slate-800 dark:text-slate-200 font-medium">{activeProduct.weight}</span>
                          ) : (
                            <span className="text-slate-300 dark:text-slate-700 font-light">e.g. 100</span>
                          )}
                        </div>
                      </div>

                      {/* Style Code Field */}
                      <div>
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>Style code/Product ID</span>
                          <span className="text-slate-400 text-[7px] font-light">(opt)</span>
                          <span className="text-[8px] text-slate-400 cursor-help">(i)</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-800 dark:text-slate-200 truncate">
                          {autofillProgress >= 40 ? (
                            <span className="text-slate-800 dark:text-slate-200 font-mono text-[8px] font-medium truncate">{activeProduct.styleCode}</span>
                          ) : (
                            <span className="text-slate-300 dark:text-slate-700 font-light text-[8px] truncate">e.g. CETA-100</span>
                          )}
                        </div>
                      </div>

                      {/* Product Name Field */}
                      <div className="col-span-2">
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>Product Name</span>
                          <span className="text-red-500 font-bold">*</span>
                          <span className="text-[8px] text-slate-400 cursor-help">(i)</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-800 dark:text-slate-200 truncate relative">
                          {isAutofilling && autofillProgress < 20 ? (
                            <span className="text-slate-300 dark:text-slate-700 animate-pulse">Typing product name...</span>
                          ) : autofillProgress >= 20 ? (
                            <motion.span 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-slate-800 dark:text-slate-200 font-medium truncate"
                            >
                              {activeProduct.title}
                            </motion.span>
                          ) : (
                            <span className="text-slate-300 dark:text-slate-700 font-light">Enter product name</span>
                          )}
                        </div>
                      </div>

                      {/* Size Selector Field */}
                      <div className="col-span-2">
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>Size</span>
                          <span className="text-red-500 font-bold">*</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 flex items-center justify-between text-slate-800 dark:text-slate-200">
                          <span className={autofillProgress >= 60 ? "text-slate-800 dark:text-slate-200 font-medium" : "text-slate-300 dark:text-slate-700"}>
                            {autofillProgress >= 60 ? activeProduct.sizes.join(", ") : "Select Size"}
                          </span>
                          <ChevronDown size={10} className="text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy price details checkbox */}
                  <div className="flex items-center gap-1.5 text-[9.5px] py-1">
                    <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${autofillProgress >= 70 ? 'bg-[#3b3db6] border-[#3b3db6] text-white' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950'}`}>
                      {(autofillProgress >= 70) && <Check size={10} strokeWidth={4} />}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Copy price details to all sizes</span>
                  </div>

                  {/* Pricing Table */}
                  <div className="overflow-x-auto border border-slate-100 dark:border-slate-800/80 rounded bg-white dark:bg-slate-950 max-w-full">
                    <table className="min-w-[380px] text-[8.5px] text-left">
                      <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500">
                        <tr>
                          <th className="p-1 border-r border-b border-slate-100 dark:border-slate-800 font-bold">Size</th>
                          <th className="p-1 border-r border-b border-slate-100 dark:border-slate-800 font-bold">Meesho Price*</th>
                          <th className="p-1 border-r border-b border-slate-100 dark:border-slate-800 font-bold">Wrong/Def Returns</th>
                          <th className="p-1 border-r border-b border-slate-100 dark:border-slate-800 font-bold">MRP*</th>
                          <th className="p-1 border-b border-slate-100 dark:border-slate-800 font-bold">Inventory*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-slate-800 dark:text-slate-200">
                          <td className="p-1 border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 font-semibold">{activeProduct.sizes[0] || "Free Size"}</td>
                          <td className="p-0.5 border-r border-slate-100 dark:border-slate-800">
                            <div className="h-5 px-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-850 dark:text-slate-100 font-bold font-numbers min-w-[50px]">
                              {autofillProgress >= 80 ? `₹${activeProduct.price}` : ""}
                            </div>
                          </td>
                          <td className="p-0.5 border-r border-slate-100 dark:border-slate-800">
                            <div className="h-5 px-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-400 dark:text-slate-500 font-numbers min-w-[50px]">
                              {autofillProgress >= 80 ? `₹${activeProduct.price - 25}` : ""}
                            </div>
                          </td>
                          <td className="p-0.5 border-r border-slate-100 dark:border-slate-800">
                            <div className="h-5 px-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-850 dark:text-slate-100 font-numbers min-w-[50px]">
                              {autofillProgress >= 80 ? `₹${activeProduct.price * 2}` : ""}
                            </div>
                          </td>
                          <td className="p-0.5">
                            <div className="h-5 px-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center text-slate-850 dark:text-slate-100 font-numbers min-w-[40px]">
                              {autofillProgress >= 80 ? "150" : ""}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Section Title 2: Product Details */}
                  <div>
                    <h4 className="text-[9.5px] font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-0.5 mb-2">Product Details</h4>
                    
                    <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                      {/* Color Field */}
                      <div>
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>Color</span>
                          <span className="text-red-500 font-bold">*</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 flex items-center justify-between text-slate-800 dark:text-slate-200">
                          <span className={autofillProgress >= 90 ? "text-slate-800 dark:text-slate-200 font-medium" : "text-slate-300 dark:text-slate-700"}>
                            {autofillProgress >= 90 ? activeProduct.color : "Select Color"}
                          </span>
                          <ChevronDown size={10} className="text-slate-400" />
                        </div>
                      </div>

                      {/* Generic Name Field */}
                      <div>
                        <div className="flex items-center gap-0.5 text-slate-600 dark:text-slate-400 mb-0.5">
                          <span>Generic Name</span>
                          <span className="text-red-500 font-bold">*</span>
                          <span className="text-[8px] text-slate-400 cursor-help">(i)</span>
                        </div>
                        <div className="h-7 px-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 flex items-center justify-between text-slate-800 dark:text-slate-200">
                          <span className={autofillProgress >= 90 ? "text-slate-800 dark:text-slate-200 font-medium truncate" : "text-slate-300 dark:text-slate-700 truncate"}>
                            {autofillProgress >= 90 ? activeProduct.genericName : "Select Name"}
                          </span>
                          <ChevronDown size={10} className="text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer buttons of form */}
                <div className="pt-2 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[9px]">
                  <button className="px-2.5 py-1 font-semibold border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-700 dark:hover:text-slate-350 shadow-sm transition-colors">
                    Discard Catalog
                  </button>
                  <div className="font-mono text-slate-400 font-semibold">
                    {autofillProgress === 100 ? (
                      <span className="text-emerald-500 font-bold">100% Filled</span>
                    ) : isAutofilling ? (
                      <span className="text-[#ff477e] animate-pulse">Autofilling {autofillProgress}%...</span>
                    ) : (
                      <span>Waiting for fill</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Exact CetaListing Chrome Extension Design Overlay! */}
              <div className="md:col-span-7 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between overflow-hidden relative min-h-[380px]">
                
                {/* Content wrapper */}
                <div className="p-3 space-y-3">
                  
                  {/* Extension Top Header Card - exact match of profile banner block */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Avatar Profile */}
                      <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm relative">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
                          alt="Gopal Vasani" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-slate-800 dark:text-slate-100 leading-tight flex items-center gap-1">
                          Testing <span className="text-[9px] font-normal text-slate-400">|</span>
                        </span>
                        <span className="text-[9px] text-slate-400 truncate max-w-[80px]">@glaasery.co.in</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-0.5">
                      {/* Pink Pro Seller Badge */}
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md bg-[#fff0f3] dark:bg-[#fff0f3]/10 text-[#ff477e] border border-[#ffccd5] tracking-wide uppercase select-none">
                        Pro Seller
                      </span>
                      {/* Bold Category blue tag */}
                      <span className="text-[9px] font-black text-[#0ea5e9] tracking-wider uppercase">
                        CLOTHING
                      </span>
                    </div>
                  </div>

                  {/* SELECT PRODUCT block */}
                  <div>
                    <label className="text-[8px] font-extrabold text-slate-400 tracking-wider block mb-1">
                      SELECT PRODUCT
                    </label>
                    <div className="relative">
                      <button 
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff477e]" />
                          {activeProduct.name}
                        </span>
                        <ChevronDown size={12} className={`text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Dropdown Menu Portal */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="absolute z-50 left-0 right-0 mt-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden py-1"
                          >
                            {PRODUCTS.map((prod, idx) => (
                              <button
                                key={prod.id}
                                onClick={() => {
                                  setSelectedProdIdx(idx);
                                  setDropdownOpen(false);
                                  setAutofillProgress(0);
                                  setNotification(`Selected ${prod.name}: ${prod.title}`);
                                  setTimeout(() => setNotification(null), 3000);
                                }}
                                className="w-full px-3 py-1.5 text-left text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
                              >
                                <span>{prod.name} ({prod.fields} fields)</span>
                                {selectedProdIdx === idx && <Check size={11} className="text-[#ff477e]" />}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Horizontal action buttons: New, Edit, Delete */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {/* + New Solid Pink Button */}
                    <button 
                      onClick={triggerAutofill}
                      className="h-8 rounded-lg bg-[#ff477e] hover:bg-[#e03165] text-white text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-95"
                    >
                      <Plus size={11} strokeWidth={3} />
                      New
                    </button>

                    {/* Edit white border button */}
                    <button 
                      onClick={triggerPreview}
                      className="h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-[10px] font-semibold flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-95"
                    >
                      <Edit2 size={10} />
                      Edit
                    </button>

                    {/* Delete red button */}
                    <button 
                      onClick={() => {
                        setDropdownOpen(false);
                        setAutofillProgress(0);
                        setNotification("Active catalog mapping buffer cleared!");
                        setTimeout(() => setNotification(null), 3000);
                      }}
                      className="h-8 rounded-lg bg-[#fff5f5] dark:bg-red-950/20 border border-[#ffc9c9] dark:border-red-900/30 text-[#e03131] hover:bg-[#ffe3e3] dark:hover:bg-red-950/40 text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-95"
                    >
                      <Trash2 size={10} />
                      Delete
                    </button>
                  </div>

                  {/* 2x2 Grid of Main Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Autofill: pink lightning icon */}
                    <button 
                      onClick={triggerAutofill}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 ${
                        isAutofilling 
                          ? "bg-[#fff0f3] dark:bg-pink-950/20 border-[#ff477e] scale-98" 
                          : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 hover:border-[#ff477e]/40"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#fff0f3] dark:bg-pink-950/40 flex items-center justify-center text-[#ff477e]">
                        <Zap size={14} className={isAutofilling ? "animate-pulse fill-[#ff477e]" : "fill-[#ff477e]"} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">
                        {isAutofilling ? `Autofilling ${autofillProgress}%` : "Autofill"}
                      </span>
                    </button>

                    {/* Capture: blue eye icon */}
                    <button 
                      onClick={triggerPreview}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-[#0ea5e9]/40 flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#e0f2fe] dark:bg-sky-950/40 flex items-center justify-center text-[#0ea5e9]">
                        <Eye size={14} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Capture</span>
                    </button>

                    {/* Import: purple upload icon */}
                    <button 
                      onClick={triggerImport}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-400/40 flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-[#4f46e5]">
                        <Upload size={14} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Import</span>
                    </button>

                    {/* Export: teal download icon */}
                    <button 
                      onClick={triggerExport}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-emerald-400/40 flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600">
                        <Download size={14} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Export</span>
                    </button>
                  </div>

                  {/* Last Listing Task - dashed container */}
                  <div className="p-2.5 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500">
                      <span>Last Listing Task</span>
                      <button 
                        onClick={triggerPreview}
                        className="text-[#ff477e] hover:underline font-bold"
                      >
                        View All
                      </button>
                    </div>
                    <div className="text-[10px] font-extrabold text-[#ff477e] mt-1 select-none flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-[#ff477e]" />
                      {activeProduct.fields} fields loaded successfully
                    </div>
                  </div>

                </div>

                {/* Footer status bar & credits */}
                <div>
                  {/* Status Banner */}
                  <div className="bg-[#e6fbf4] dark:bg-emerald-950/20 border-t border-emerald-100 dark:border-emerald-900/30 px-3 py-1.5 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                      {isAutofilling ? "Workspace Autofitting Active" : "Workspace Synced & Idle"}
                    </span>
                  </div>

                  {/* Tiny credits footer matching Gopal Vasani design */}
                  <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/60 py-2 text-center text-[9px] text-slate-400">
                    <div className="flex justify-center gap-2 font-medium mb-0.5">
                      <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">Emotional Notes</span>
                      <span>•</span>
                      <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">Follow Developer</span>
                    </div>
                    <p className="font-bold">
                      Created by <span className="text-[#ff477e]">Gopal Vasani</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* floating badges decor */}
          <motion.div 
            initial={{ x: 20, y: 10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -top-6 -right-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white border border-[#ff477e]/30 text-[11px] font-mono shadow-xl flex items-center gap-1.5 animate-float"
            id="hero-badge-speed"
          >
            <Zap size={12} className="fill-[#ff477e] text-[#ff477e]" />
            <span>1-Click Auto Fill</span>
          </motion.div>

          <motion.div 
            initial={{ x: -20, y: -10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 -left-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white border border-[#0ea5e9]/30 text-[11px] font-mono shadow-xl flex items-center gap-1.5 animate-float-delayed"
            id="hero-badge-save"
          >
            <CheckCircle2 size={12} className="text-[#0ea5e9]" />
            <span>Saves 4+ Hrs/Day</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

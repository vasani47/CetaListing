import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  CreditCard, 
  Zap, 
  Database, 
  Settings,
  MessageCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FAQS } from "../data";

const CATEGORIES = [
  { name: "All", icon: HelpCircle },
  { name: "Pricing & Plans", icon: CreditCard },
  { name: "Automation & Safety", icon: Zap },
  { name: "Features & Backup", icon: Database },
  { name: "Setup & Support", icon: Settings }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Map FAQ items to categories
  const getFaqCategory = (id: string): string => {
    if (["q1", "q4"].includes(id)) return "Pricing & Plans";
    if (["q2", "q3", "q6", "q9", "q10"].includes(id)) return "Automation & Safety";
    if (["q5", "q8", "q11"].includes(id)) return "Features & Backup";
    return "Setup & Support";
  };

  // Filter FAQs based on search input and active category
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const categoryMatches = activeCategory === "All" || getFaqCategory(faq.id) === activeCategory;
      const searchMatches = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatches && searchMatches;
    });
  }, [searchQuery, activeCategory]);

  // Distribute filtered FAQs into left and right columns for balanced rendering on desktop
  const leftColumnFaqs = useMemo(() => {
    return filteredFaqs.filter((_, index) => index % 2 === 0);
  }, [filteredFaqs]);

  const rightColumnFaqs = useMemo(() => {
    return filteredFaqs.filter((_, index) => index % 2 !== 0);
  }, [filteredFaqs]);

  return (
    <section className="relative py-28 bg-brand-bg border-t border-border-subtle overflow-hidden" id="faq">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-[25%] left-[-15%] w-[450px] h-[450px] gradient-blur-cyan opacity-15 pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-15%] w-[550px] h-[550px] gradient-blur-indigo opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="faq-header">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-card dark:bg-slate-900 border border-border-subtle text-[11px] font-extrabold text-brand-indigo uppercase tracking-wider font-sans mb-4 shadow-sm">
            <HelpCircle size={12} className="text-brand-indigo animate-pulse" />
            Support Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-txt-p tracking-tight leading-tight">
            Got Questions? We have <span className="text-[#ff477e]">Answers</span>
          </h2>
          <p className="text-base text-txt-s mt-4 font-sans font-light leading-relaxed">
            Everything you need to know about setting up and automating listings on CetaListing. Find instant answers or chat with us.
          </p>

          {/* Interactive Search Bar & Filters */}
          <div className="mt-10 max-w-xl mx-auto relative" id="faq-search-wrapper">
            <span className="absolute inset-y-0 left-4 flex items-center text-zinc-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search features, safety, installation guidelines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-brand-card dark:bg-slate-900 border border-border-subtle rounded-2xl text-xs sm:text-sm text-txt-p placeholder-txt-m focus:outline-none focus:border-[#ff477e]/50 focus:ring-4 focus:ring-[#ff477e]/10 transition-all font-sans shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-[#ff477e] hover:text-[#ff477e]/80 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="faq-categories">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setOpenId(null); // Reset open states when category shifts
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive 
                    ? "bg-[#ff477e] text-white shadow-lg shadow-[#ff477e]/20 scale-105 border-transparent" 
                    : "bg-brand-card dark:bg-slate-900 border border-border-subtle text-txt-s hover:text-txt-p hover:border-brand-indigo/30"
                }`}
              >
                <Icon size={14} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion Grid */}
        <div id="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnFaqs.map((faq) => {
                  const isOpen = openId === faq.id;
                  const categoryName = getFaqCategory(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? "bg-brand-card dark:bg-slate-900/60 border-brand-indigo/30 shadow-xl" 
                          : "bg-brand-card dark:bg-slate-900 border-border-subtle hover:border-brand-indigo/20 hover:shadow-md hover:translate-y-[-1px]"
                      }`}
                      id={`faq-item-${faq.id}`}
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase tracking-wider font-sans font-extrabold text-brand-indigo dark:text-brand-cyan">
                            {categoryName}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-txt-p leading-snug transition-colors group-hover:text-brand-indigo">
                            {faq.question}
                          </h4>
                        </div>
                        <span className={`mt-4 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-txt-m transition-all duration-300 ${isOpen ? "rotate-180 bg-brand-indigo/10 text-brand-indigo" : ""}`}>
                          <ChevronDown size={14} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-border-subtle/40 text-xs sm:text-sm text-txt-s font-sans font-light leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnFaqs.map((faq) => {
                  const isOpen = openId === faq.id;
                  const categoryName = getFaqCategory(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? "bg-brand-card dark:bg-slate-900/60 border-brand-indigo/30 shadow-xl" 
                          : "bg-brand-card dark:bg-slate-900 border-border-subtle hover:border-brand-indigo/20 hover:shadow-md hover:translate-y-[-1px]"
                      }`}
                      id={`faq-item-${faq.id}`}
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase tracking-wider font-sans font-extrabold text-brand-indigo dark:text-brand-cyan">
                            {categoryName}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-txt-p leading-snug transition-colors group-hover:text-brand-indigo">
                            {faq.question}
                          </h4>
                        </div>
                        <span className={`mt-4 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-txt-m transition-all duration-300 ${isOpen ? "rotate-180 bg-brand-indigo/10 text-brand-indigo" : ""}`}>
                          <ChevronDown size={14} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-border-subtle/40 text-xs sm:text-sm text-txt-s font-sans font-light leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-border-subtle rounded-3xl bg-brand-card dark:bg-slate-900 max-w-lg mx-auto" id="faq-no-results">
              <Sparkles size={24} className="text-[#ff477e] mx-auto mb-3 animate-pulse" />
              <h4 className="text-base font-bold text-txt-p mb-1">No FAQs matching search criteria</h4>
              <span className="text-xs sm:text-sm text-txt-m font-sans">
                Try searching broad keywords like "safe", "installation", "meesho", or click another category filter.
              </span>
            </div>
          )}
        </div>

        {/* Support contact info footer helper */}
        <div className="mt-16 text-center max-w-2xl mx-auto" id="faq-support-box">
          <div className="relative p-8 rounded-3xl bg-brand-card dark:bg-slate-900 border border-border-subtle shadow-lg overflow-hidden group">
            {/* Ambient accent inside the box */}
            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-brand-indigo/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <span className="text-[10px] font-extrabold text-[#ff477e] uppercase tracking-wider font-sans">
                  Need Quick Assistance?
                </span>
                <h4 className="text-base sm:text-lg font-bold text-txt-p">
                  Have questions about CetaListing?
                </h4>
                <p className="text-xs sm:text-sm text-txt-s font-sans font-light">
                  Our friendly support team is ready to assist you with installation, setup, or any usage questions.
                </p>
              </div>

              <a 
                href="https://wa.me/918866814914?text=Hi,%20I%20have%20a%20question%20about%20CetaListing."
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


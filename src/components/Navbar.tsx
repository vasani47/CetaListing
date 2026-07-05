import { motion, AnimatePresence } from "motion/react";
import { Zap, MessageSquare, Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi,%0AI%20want%20CetaListing%20Extension.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const primaryItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  const moreItems = [
    { label: "Demo Videos", href: "#videos" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Manifesto", href: "#manifesto" }
  ];

  const allItems = [
    { label: "Features", href: "#features" },
    { label: "Demo Videos", href: "#videos" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center"
      id="navbar-container"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 group" id="navbar-logo-link">
          <div className="relative h-10 flex items-center justify-center select-none rounded-lg group-hover:scale-105 transition-transform duration-300">
            <img src="assets/logo-word-l.png" className="h-10 object-contain" alt="Ceta Listing Logo" referrerPolicy="no-referrer" />
          </div>
        </a>

        {/* Tablet Nav Items */}
        <div className="hidden md:flex lg:hidden items-center gap-4" id="navbar-tablet-links">
          {primaryItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-txt-s hover:text-brand-violet transition-colors duration-200 relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-indigo to-brand-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* More Dropdown for Tablet & Responsive Screen Sizes */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="text-sm font-medium text-txt-s hover:text-brand-violet transition-colors duration-200 py-2 flex items-center gap-1 focus:outline-none"
            >
              <span>More</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? "rotate-180 text-brand-violet" : "text-txt-m"}`} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-48 rounded-xl border border-border-subtle bg-brand-card shadow-xl p-1.5 z-50 flex flex-col"
                >
                  {moreItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      className="text-xs font-semibold px-4 py-2.5 rounded-lg text-txt-s hover:text-brand-violet hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8" id="navbar-desktop-links">
          {allItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-txt-s hover:text-brand-violet transition-colors duration-200 relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-indigo to-brand-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4" id="navbar-desktop-cta">
          <ThemeToggle />
          
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            referrerPolicy="no-referrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#2E3192] to-[#ff477e] hover:from-[#1F216B] hover:to-[#e03165] text-white shadow-lg shadow-[#ff477e]/15 hover:shadow-[#ff477e]/25 transition-all duration-300 flex items-center gap-2 group"
            id="navbar-whatsapp-button"
          >
            <MessageSquare size={13} className="fill-white/20" />
            <span>Download Extension</span>
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu action bar */}
        <div className="md:hidden flex items-center gap-2" id="navbar-mobile-toggle">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-txt-s hover:text-txt-p p-2 focus:outline-none cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-16 left-0 right-0 bg-brand-bg border-t border-border-subtle md:hidden shadow-2xl overflow-y-auto z-50"
          id="navbar-mobile-menu"
        >
          <div className="px-6 py-8 space-y-8 flex flex-col items-stretch" id="navbar-mobile-menu-inner">
            {/* Simple list-based normal navigation links */}
            <div className="flex flex-col space-y-2">
              {allItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-4 px-4 rounded-xl hover:bg-brand-card/50 text-base font-semibold text-txt-p border-b border-border-subtle/50 hover:text-brand-violet transition-all duration-200 active:scale-98"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-txt-m opacity-50">→</span>
                </a>
              ))}
            </div>

            {/* Premium WhatsApp action CTA */}
            <div className="pt-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                referrerPolicy="no-referrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-[#2E3192] to-[#ff477e] hover:from-[#1F216B] hover:to-[#e03165] active:scale-98 rounded-xl text-sm font-bold text-white shadow-xl shadow-[#ff477e]/20 transition-all"
              >
                <MessageSquare size={16} className="fill-white/10" />
                <span>Download Extension</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="text-[10px] text-center text-txt-m font-mono mt-4 uppercase tracking-wider">
                ⚡ FREE DEMO • ZERO CODE REQUIRED
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

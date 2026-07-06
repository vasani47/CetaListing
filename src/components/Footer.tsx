import { MouseEvent } from "react";
import { MessageSquare, Instagram, Mail, ShieldAlert, Heart, Zap } from "lucide-react";
import { WHATSAPP_LINK } from "./Navbar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary/[0.05] via-brand-bg to-secondary/[0.05] border-t border-border-subtle pt-16 pb-12 font-sans" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col justify-between" id="footer-brand-column">
          <div>
            <a href="#" className="flex items-center gap-3.5 group" id="footer-logo">
              <div className="relative h-10 flex items-center justify-center select-none rounded-lg group-hover:scale-105 transition-transform duration-300">
                <img src="assets/logo-word-l.png" className=" h-10 object-contain" alt="Ceta Listing Logo" referrerPolicy="no-referrer" />
              </div>
            </a>
            <p className="text-xs text-txt-s max-w-sm mt-4 font-light leading-relaxed">
              India's Smartest Meesho Listing Assistant. Save hours of repetitive form filling and catalog design daily. Built with local storage security policies.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 text-txt-m" id="footer-social-links">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-lg bg-brand-card border border-border-subtle text-txt-s hover:text-brand-cyan hover:border-brand-cyan/20 transition-all cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageSquare size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-lg bg-brand-card border border-border-subtle text-txt-s hover:text-brand-violet hover:border-brand-violet/20 transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="mailto:support@cetalisting.com" 
              className="p-2.5 rounded-lg bg-brand-card border border-border-subtle text-txt-s hover:text-brand-indigo hover:border-brand-indigo/20 transition-all cursor-pointer"
              aria-label="Email Support"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3 flex flex-col" id="footer-links-column">
          <span className="text-[10px] font-bold text-txt-m font-mono tracking-widest uppercase mb-4">Quick Navigation</span>
          <div className="flex flex-col gap-2.5 text-xs font-light text-txt-s">
            <a href="#features" onClick={(e) => handleSmoothScroll(e, "#features")} className="hover:text-txt-p transition-colors">Platform Features</a>
            <a href="#videos" onClick={(e) => handleSmoothScroll(e, "#videos")} className="hover:text-txt-p transition-colors">Interactive Demos</a>
            <a href="#roadmap" onClick={(e) => handleSmoothScroll(e, "#roadmap")} className="hover:text-txt-p transition-colors">Milestones & Roadmap</a>
            <a href="#manifesto" onClick={(e) => handleSmoothScroll(e, "#manifesto")} className="hover:text-txt-p transition-colors">Our Seller Manifesto</a>
            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, "#pricing")} className="hover:text-txt-p transition-colors">Affordable Pricing Plans</a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, "#faq")} className="hover:text-txt-p transition-colors">Frequently Asked Questions</a>
          </div>
        </div>

        {/* Legal disclosures */}
        <div className="md:col-span-4 flex flex-col" id="footer-legal-column">
          <span className="text-[10px] font-bold text-txt-m font-mono tracking-widest uppercase mb-4">Marketplace Disclaimer</span>
          <p className="text-[10px] text-txt-m font-light leading-normal">
            CetaListing is an independent software extension and utility. We are <strong>not</strong> affiliated with, endorsed by, sponsored by, or partner of Meesho Inc., Flipkart Commerce, or Amazon India. All registered trademarks, portal titles, and company names listed on this website belong strictly to their respective owners.
          </p>
          <div className="flex items-center gap-4 mt-4 text-[10px] text-txt-m">
            <a href="#/privacy" className="hover:text-txt-p transition-colors cursor-pointer">Privacy Policy</a>
            <span className="h-3 w-px bg-border-subtle" />
            <a href="#/terms" className="hover:text-txt-p transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Made in India Bottom bar with Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-txt-m font-mono" id="footer-bottom-bar">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span>&copy; {currentYear} CetaListing. All rights reserved.</span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] text-brand-cyan font-semibold uppercase tracking-wider font-mono">
            <Zap size={10} className="fill-brand-cyan/20 animate-pulse" />
            Built for Meesho & Marketplace
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Engineered with</span>
          <Heart size={11} className="fill-brand-violet text-brand-violet animate-pulse" />
          <span>in India</span>
          <svg className="w-3.5 h-2.5 rounded-sm inline shrink-0" viewBox="0 0 3 2">
            <rect width="3" height="2" fill="#2F3E46" />
            <rect width="3" height="0.67" fill="#FF9933" />
            <rect y="0.67" width="3" height="0.67" fill="#FFFFFF" />
            <rect y="1.34" width="3" height="0.67" fill="#138808" />
            <circle cx="1.5" cy="1" r="0.12" fill="#000080" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

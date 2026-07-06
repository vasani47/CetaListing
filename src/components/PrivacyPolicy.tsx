import { motion } from "motion/react";
import { Shield, Eye, Lock, Database, RefreshCw, Key, HelpCircle, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "July 2026";

  const sections = [
    {
      icon: <Database size={18} className="text-brand-violet" />,
      title: "1. Local-First Architecture & Data Ownership",
      content: "CetaListing is engineered on a strict local-first architecture. All catalog mappings, product listings, selected categories, and field presets are saved locally on your computer inside your browser's secure sandboxed storage (LocalStorage/IndexedDB). Absolutely none of this data is uploaded, transmitted, or synchronized with any central CetaListing servers."
    },
    {
      icon: <Key size={18} className="text-brand-indigo" />,
      title: "2. Zero Password Storage Policy",
      content: "We never request, store, view, or transmit your seller portal passwords, authentication cookies, or login credentials. When using CetaListing to auto-fill forms on Meesho or other supported platforms, the extension acts strictly as a visual keyboard simulator on your active browser tab. Your account security remains entirely under your direct control."
    },
    {
      icon: <Shield size={18} className="text-brand-cyan" />,
      title: "3. Extension Permissions & Usage",
      content: "To function as an automated listing assistant, CetaListing requests standard browser extension permissions. The 'storage' permission is used to save your drafts and templates on your local device. Host permission for supported marketplace domains is used solely to detect the catalog form inputs on your active browser tab, enabling 1-click local form entry. We do not inspect or modify any other tabs, websites, or browsing histories."
    },
    {
      icon: <Eye size={18} className="text-emerald-500" />,
      title: "4. No Personal Data Harvesting",
      content: "We do not run tracking pixels, user profiling systems, or analytics trackers on your products. Your catalog structures, wholesale prices, inventory volumes, and product configurations are your own proprietary business intelligence. Because we have no database servers to hold this information, your business strategies remain 100% confidential and secure."
    },
    {
      icon: <Lock size={18} className="text-pink-500" />,
      title: "5. Local Browser Security",
      content: "Because your CetaListing data is stored inside your local Chrome browser profile, its security depends on the security of your physical computer. We recommend keeping your operating system updated, using strong computer login passwords, and not sharing your local browser profile with untrusted users."
    },
    {
      icon: <RefreshCw size={18} className="text-amber-500" />,
      title: "6. Updates and Policy Revisions",
      content: "We may update this Privacy Policy from time to time as we roll out new technical capabilities. Since we do not collect your email address or maintain a mailing list, we recommend checking this page periodically to review any updates. Any policy changes will apply immediately upon being published here."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-brand-bg relative min-h-screen" id="privacy-policy-view">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-txt-m mb-6">
          <a href="#" className="hover:text-brand-cyan transition-colors">Home</a>
          <span>/</span>
          <span className="text-txt-p">Privacy Policy</span>
        </div>

        {/* Hero Title */}
        <div className="border-b border-border-subtle/50 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-[10px] font-mono text-brand-violet font-semibold uppercase tracking-wider mb-4">
            <FileText size={10} />
            <span>Digital Utility Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-txt-p tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-txt-s mt-2 font-sans font-light">
            Last Updated: <span className="font-mono text-txt-p font-medium">{lastUpdated}</span> • Designed for absolute local data privacy.
          </p>
        </div>

        {/* Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-brand-violet/5 border border-brand-violet/10 mb-10"
          id="privacy-summary-card"
        >
          <div className="flex gap-4 items-start">
            <Shield className="text-brand-violet shrink-0 mt-1" size={24} />
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-txt-p">Our Core Commitment</h3>
              <p className="text-xs sm:text-sm text-txt-s leading-relaxed">
                We believe that your business data belongs strictly to you. CetaListing has been intentionally engineered with a <strong>zero-server, local-first</strong> architecture. This means we do not host, store, or transmit your inventory profiles, catalogs, or credentials. Everything stays completely inside your own local browser environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comprehensive Grid of Sections */}
        <div className="space-y-8" id="privacy-sections-container">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-950/40 border border-border-subtle/30 hover:border-border-subtle/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-brand-bg border border-border-subtle/40 shadow-sm shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-txt-p">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-txt-s leading-relaxed pl-1 sm:pl-11">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* General Marketplace Disclaimer FAQ note */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-100/70 dark:bg-zinc-950/20 border border-border-subtle/40 text-xs text-txt-s leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-txt-p font-semibold">
            <HelpCircle size={14} className="text-brand-cyan" />
            <span>Still have questions about your local privacy?</span>
          </div>
          <p>
            If you have security-related questions, technical inquiries about extension permissions, or want to understand how local keystroke automation is safely managed in CetaListing, please reach out directly to our product support desk. We operate transparently and are always happy to clarify our sandboxed architecture.
          </p>
          <div className="pt-2 border-t border-border-subtle/40 flex justify-between items-center text-[10px] font-mono">
            <span>CetaListing Support Desk</span>
            <a href="mailto:support@cetalisting.com" className="text-brand-cyan hover:underline">support@cetalisting.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

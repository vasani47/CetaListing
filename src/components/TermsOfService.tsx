import { motion } from "motion/react";
import { FileText, ShieldAlert, BadgeInfo, Scale, Ban, CheckSquare, HelpCircle } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "July 2026";

  const terms = [
    {
      icon: <BadgeInfo size={18} className="text-brand-cyan" />,
      title: "1. Acceptance & Scope of License",
      content: "By downloading, installing, or accessing the CetaListing local browser helper extension, you agree to be bound by these Terms of Service. We grant you a limited, personal, non-exclusive, revocable, non-transferable license to utilize the extension strictly for local workflow optimization, form completion, and catalog entry."
    },
    {
      icon: <ShieldAlert size={18} className="text-brand-violet" />,
      title: "2. Independent Utility & Affiliation Disclaimer",
      content: "CetaListing is an independent, locally operated software utility designed to assist with catalog typing automation. We are not affiliated with, authorized by, sponsored by, endorsed by, or in any way officially associated with Meesho Inc., Flipkart, Amazon, or any of their parent corporations. All marketplace names, registration trademarks, and logos displayed belong strictly to their respective owners."
    },
    {
      icon: <CheckSquare size={18} className="text-emerald-500" />,
      title: "3. Compliance & Fair Marketplace Usage",
      content: "You agree to use CetaListing strictly in compliance with all applicable local laws, industry standards, and the third-party terms of service of the online portals you participate in (including Meesho Seller Portal guidelines). CetaListing operates solely as a human keystroke simulation tool within your active web browser. You maintain sole and absolute responsibility for all catalogs, prices, and descriptions submitted."
    },
    {
      icon: <Ban size={18} className="text-pink-500" />,
      title: "4. Permitted Actions & Restrictions",
      content: "You are permitted to use CetaListing to automate your manual copy-paste workflows and catalog entry queues. You may not reverse-engineer, decompile, resell, rent, sublicense, modify, or redistribute the proprietary local script engine pack. CetaListing must be downloaded only through our verified official distribution links."
    },
    {
      icon: <Scale size={18} className="text-amber-500" />,
      title: "5. Disclaimer of Warranties & Limitation of Liability",
      content: "CetaListing is provided on an \"AS IS\" and \"AS AVAILABLE\" basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. To the maximum extent permitted by applicable law, CetaListing, its developers, and engineering team shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, listing errors, seller account suspensions, inventory discrepancies, or business interruption arising from or relating to the use or inability to use the browser extension, even if advised of the possibility of such damages."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-brand-bg relative min-h-screen" id="terms-of-service-view">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-txt-m mb-6">
          <a href="#" className="hover:text-brand-cyan transition-colors">Home</a>
          <span>/</span>
          <span className="text-txt-p">Terms of Service</span>
        </div>

        {/* Hero Title */}
        <div className="border-b border-border-subtle/50 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan font-semibold uppercase tracking-wider mb-4">
            <FileText size={10} />
            <span>Product Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-txt-p tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-txt-s mt-2 font-sans font-light">
            Last Updated: <span className="font-mono text-txt-p font-medium">{lastUpdated}</span> • Please review carefully before installing the extension helper.
          </p>
        </div>

        {/* Notice Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/10 mb-10"
          id="terms-notice-card"
        >
          <div className="flex gap-4 items-start">
            <Scale className="text-brand-cyan shrink-0 mt-1" size={24} />
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-txt-p">Usage Notice & Safety</h3>
              <p className="text-xs sm:text-sm text-txt-s leading-relaxed">
                By utilizing CetaListing, you acknowledge that you are using a localized productivity utility designed to simulate direct user interaction. CetaListing does not integrate with marketplace APIs, database servers, or third-party web portals. Your manual browser-level inputs are simply expedited to save you listing typing time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Term List */}
        <div className="space-y-8" id="terms-sections-container">
          {terms.map((term, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-950/40 border border-border-subtle/30 hover:border-border-subtle/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-brand-bg border border-border-subtle/40 shadow-sm shrink-0">
                  {term.icon}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-txt-p">
                  {term.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-txt-s leading-relaxed pl-1 sm:pl-11">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Contact Note */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-100/70 dark:bg-zinc-950/20 border border-border-subtle/40 text-xs text-txt-s leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-txt-p font-semibold">
            <HelpCircle size={14} className="text-brand-violet" />
            <span>Have questions or require clarification?</span>
          </div>
          <p>
            For license inquiries, enterprise support, or clarification on terms related to localized scripting and automation, please consult our developer team directly.
          </p>
          <div className="pt-2 border-t border-border-subtle/40 flex justify-between items-center text-[10px] font-mono">
            <span>CetaListing Legal Team</span>
            <a href="mailto:legal@cetalisting.in" className="text-brand-violet hover:underline">legal@cetalisting.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

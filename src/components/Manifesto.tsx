import { motion } from "motion/react";
import React from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Cpu, 
  Zap, 
  MousePointerClick, 
  CheckCircle,
  Clock,
  Flame,
  UserCheck
} from "lucide-react";

export default function Manifesto() {
  const pillars = [
    {
      id: "p1",
      title: "Sellers Should Sell",
      subtitle: "RECLAIM YOUR TIME",
      icon: <Flame className="text-pink-500" size={20} />,
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      textHighlight: "text-pink-500",
      desc: "Sellers are creators, negotiators, and builders. Spending 4+ hours daily manually typing repetitive fabric weights and size charts in Meesho is a waste of human potential. We restore that lost time.",
      fact: "Saves ~4.5 hours daily per listing operator"
    },
    {
      id: "p2",
      title: "Equal Footing",
      subtitle: "DEMOCRATIZING TECH",
      icon: <Zap className="text-brand-indigo" size={20} />,
      bgColor: "bg-brand-indigo/10",
      borderColor: "border-brand-indigo/20",
      textHighlight: "text-brand-indigo",
      desc: "Why should multi-national corporations have all the custom developer tooling? CetaListing provides the exact same automated cataloging horsepower to local wholesalers and manufacturers, free of entry barriers.",
      fact: "Same enterprise listing speed, 100% free"
    },
    {
      id: "p3",
      title: "Invisible Software",
      subtitle: "ZERO FRICTION ENGINE",
      icon: <Cpu className="text-brand-cyan" size={20} />,
      bgColor: "bg-brand-cyan/10",
      borderColor: "border-brand-cyan/20",
      textHighlight: "text-brand-cyan",
      desc: "The best software is the one you don't have to learn. CetaListing lives quietly inside your favorite Chrome browser, running at 0ms latency with absolute, local privacy and zero learning curve.",
      fact: "0ms external latency. 100% offline-first safe"
    }
  ];

  return (
    <section className="relative py-28 bg-brand-bg overflow-hidden border-t border-border-subtle" id="manifesto">
      {/* Immersive background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full gradient-blur-indigo opacity-[0.08] pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full gradient-blur-violet opacity-[0.05] pointer-events-none" />

      {/* Decorative tech grid lines in background */}
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="manifesto-header">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card border border-border-subtle text-xs font-semibold text-txt-s uppercase tracking-widest font-mono mb-4"
          >
            <Sparkles size={11} className="text-brand-violet fill-brand-violet/20" />
            Our Core Manifesto
          </motion.div>
          <h2 className="text-4xl font-heading font-extrabold text-txt-p tracking-tight sm:text-5xl">
            Technology with <span className="bg-gradient-to-r from-brand-violet via-brand-indigo to-brand-cyan bg-clip-text text-transparent">No Compromises</span>
          </h2>
          <p className="text-base text-txt-s mt-4 font-sans font-light max-w-xl mx-auto">
            We believe software should serve the hardworking local seller first. Our principles define every line of code we write.
          </p>
        </div>

        {/* Big Highlight Editorial Banner (Creates an attractive hook for readers to stay) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-card/60 border border-border-subtle/80 rounded-3xl p-8 sm:p-10 mb-12 relative overflow-hidden shadow-sm"
          id="manifesto-hero-banner"
        >
          {/* Subtle colored blur background */}
          <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] text-brand-violet font-bold font-mono tracking-widest uppercase block mb-3">OUR CORE BELIEF</span>
            <h3 className="text-2xl sm:text-3.5xl font-heading font-extrabold text-txt-p leading-tight tracking-tight">
              We believe <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-brand-violet font-black">sellers should sell</span> — not waste their precious daily hours filling repetitive multi-variant web forms.
            </h3>
            <p className="text-sm text-txt-s mt-4 leading-relaxed font-sans font-light max-w-2xl">
              Every day, thousands of Indian catalog operators sit in front of dashboards manually selecting materials, inputting size charts, and copy-pasting listing data. We built CetaListing to make this mechanical task disappear forever.
            </p>
          </div>
        </motion.div>

        {/* Three Belief Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="manifesto-pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-card/40 border border-border-subtle hover:border-brand-violet/20 p-6 sm:p-8 rounded-2.5xl flex flex-col justify-between relative group hover:scale-[1.01] transition-all duration-300"
            >
              {/* Card glowing accent on hover */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${pillar.bgColor}`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.bgColor} ${pillar.borderColor}`}>
                    {pillar.icon}
                  </div>
                  <span className="text-[9px] font-mono text-txt-m uppercase tracking-wider font-bold">
                    PILLAR {pillar.id.toUpperCase()}
                  </span>
                </div>

                <span className="text-[9px] font-mono font-bold text-txt-s tracking-wider block mb-1">
                  {pillar.subtitle}
                </span>
                <h4 className="text-lg font-heading font-extrabold text-txt-p mb-3 group-hover:text-brand-violet transition-colors duration-200">
                  {pillar.title}
                </h4>
                <p className="text-xs text-txt-s leading-relaxed font-sans font-light">
                  {pillar.desc}
                </p>
              </div>

              {/* Unique bottom metrics highlight badge */}
              <div className="mt-6 pt-4 border-t border-border-subtle/30 flex items-center justify-between">
                <span className="text-[10px] text-txt-m font-mono uppercase">Key Impact</span>
                <span className={`text-[10px] font-mono font-bold ${pillar.textHighlight}`}>
                  {pillar.fact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Centered Animated Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-brand-violet via-brand-indigo to-brand-cyan animate-border-gradient">
            <div className="bg-brand-card dark:bg-[#0C0D19] px-8 py-5 rounded-[14px]">
              <p className="text-base sm:text-lg font-heading font-bold text-txt-p">
                "Every single click saved... is another opportunity earned."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Manifesto Footer / Security badges */}
        <div className="mt-16 pt-8 border-t border-border-subtle max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-txt-m">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-brand-cyan shrink-0" />
            <span>100% Local Sandbox Protection. Zero cloud data leaks.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={10} className="fill-brand-violet text-brand-violet animate-pulse" />
            <span>for Indian Textile Sellers</span>
          </div>
        </div>

      </div>
    </section>
  );
}

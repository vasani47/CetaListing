import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowRight, Zap, CheckCircle, Clock, Hourglass, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "./Navbar";

export default function CTA() {
  // Saved time counter loop animation state
  const [savedHours, setSavedHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavedHours((prev) => (prev >= 4.5 ? 0 : Number((prev + 0.5).toFixed(1))));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-brand-bg border-t border-border-subtle overflow-hidden" id="cta-section">
      {/* Heavy glowing radial orbs centered around the interactive elements */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full gradient-blur-indigo opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full gradient-blur-cyan opacity-15 pointer-events-none" />

      {/* Grid line pattern */}
      <div className="absolute inset-0 cosmic-grid opacity-25" />

      {/* Gorgeous 3D Saved-Time Floating Particles in targeted background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" id="cta-3d-background-particles">
        {/* Particle 1 */}
        <motion.div 
          animate={{ 
            y: [-20, -180], 
            x: [100, 140, 90],
            rotateY: [0, 360],
            opacity: [0, 1, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[15%] px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet font-mono text-[10px] font-bold shadow-[0_0_15px_rgba(139,92,246,0.1)] flex items-center gap-1.5"
        >
          <Clock size={10} className="animate-spin-slow" />
          <span>+30 Mins Saved</span>
        </motion.div>

        {/* Particle 2 */}
        <motion.div 
          animate={{ 
            y: [20, -220], 
            x: [-80, -40, -90],
            rotateX: [0, 360],
            opacity: [0, 1, 0] 
          }}
          transition={{ duration: 11, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[15%] px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-[10px] font-bold shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center gap-1.5"
        >
          <Hourglass size={10} className="animate-pulse" />
          <span>+2.5 Hours Saved</span>
        </motion.div>

        {/* Particle 3 */}
        <motion.div 
          animate={{ 
            y: [50, -150], 
            x: [20, -20, 10],
            rotateZ: [0, -360],
            opacity: [0, 0.8, 0] 
          }}
          transition={{ duration: 7, delay: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-5 left-[45%] px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 font-mono text-[9px] font-bold flex items-center gap-1"
        >
          <Sparkles size={8} />
          <span>+4 Hours Saved</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Beautiful responsive grid containing text content on the left, and a giant interactive 3D time-dial canvas on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-xs font-semibold uppercase tracking-wider w-fit"
            >
              <Zap size={12} className="fill-brand-cyan" />
              <span>JOIN THE SURAT ECOMMERCE REVOLUTION</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-txt-p tracking-tight leading-none"
              id="cta-title"
            >
              Ready to Save <br />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet bg-clip-text text-transparent">Hours Every Day?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-txt-s font-sans font-light leading-relaxed max-w-xl"
              id="cta-subtitle"
            >
              Do not waste another evening typing categories, sizing tables, and product weights manually. Let CetaListing handle the catalog, while you focus on scaling up your dispatch team.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="cta-button-container"
              className="pt-2"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-sm font-bold text-white bg-[#ff477e] hover:bg-[#e03165] shadow-2xl shadow-[#ff477e]/30 transition-all duration-300 hover:scale-[1.02] group"
                id="cta-get-btn"
              >
                <MessageSquare size={18} className="fill-white/10" />
                <span>Get CetaListing Extension</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>

            {/* Quick assurance items below button */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-txt-m font-mono pt-4" id="cta-bullets">
              <span className="flex items-center gap-1.5"><CheckCircle size={12} className="text-brand-cyan" /> Secure Chrome Local DB</span>
              <span className="hidden sm:block h-3.5 w-px bg-border-subtle" />
              <span className="flex items-center gap-1.5"><CheckCircle size={12} className="text-brand-violet" /> Works On Edge & Brave</span>
              <span className="hidden sm:block h-3.5 w-px bg-border-subtle" />
              <span className="flex items-center gap-1.5"><CheckCircle size={12} className="text-brand-indigo" /> 2-Minute Guided Setup</span>
            </div>
          </div>

          {/* Right Column: Giant Interactive 3D Saved Time Clock Dial */}
          <div className="lg:col-span-5 flex justify-center items-center">
            
            {/* 3D Perspective Wrapper */}
            <motion.div 
              style={{ perspective: 1200 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center cursor-grab active:cursor-grabbing"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Outer ticking rotating ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-violet/20"
              />

              {/* Second glowing orbital ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-brand-cyan/20 shadow-[0_0_30px_rgba(6,182,212,0.05)]"
              />

              {/* Giant 3D Glassmorphic Clock Dial Face */}
              <div 
                className="absolute inset-8 rounded-full bg-brand-card/75 border border-border-subtle backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 text-center transform-gpu hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-shadow duration-500"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
              >
                
                {/* Embedded Inner Clock Ring */}
                <div className="absolute inset-3 rounded-full border border-border-subtle/40 pointer-events-none" />

                {/* Simulated ticking mechanical hand */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-t from-brand-violet to-brand-cyan origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
                />

                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-pink-500 origin-bottom -translate-x-1/2 -translate-y-full opacity-60"
                />

                {/* Clock Center Pin */}
                <div className="w-3 h-3 rounded-full bg-brand-cyan border-2 border-brand-bg relative z-10 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

                {/* Saved hours counter text */}
                <div className="mt-8 relative z-20" style={{ transform: "translateZ(50px)" }}>
                  <motion.span 
                    key={savedHours}
                    initial={{ opacity: 0, scale: 0.8, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-heading font-black bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet bg-clip-text text-transparent block font-numbers"
                  >
                    +{savedHours}h
                  </motion.span>
                  <span className="text-[10px] font-bold text-txt-m font-mono uppercase tracking-widest block mt-1">
                    Saved Daily
                  </span>
                </div>

                {/* Embedded Mini Stat Dial */}
                <div className="mt-2 text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                  <span>RECLAIMED</span>
                </div>

              </div>

              {/* Float-by 3D Mini Indicators orbiting around the main sphere */}
              <div 
                className="absolute -top-4 right-2 p-2.5 bg-brand-card/90 border border-border-subtle rounded-2xl shadow-xl flex items-center gap-2"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <Hourglass size={14} className="text-pink-500 animate-bounce" />
                </div>
                <div>
                  <span className="text-[8px] text-txt-m font-mono block">EFFICIENCY</span>
                  <span className="text-xs font-bold text-txt-p font-numbers">10x Faster</span>
                </div>
              </div>

              <div 
                className="absolute -bottom-2 left-0 p-2.5 bg-brand-card/90 border border-border-subtle rounded-2xl shadow-xl flex items-center gap-2"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                  <Zap size={14} className="text-brand-cyan" />
                </div>
                <div>
                  <span className="text-[8px] text-txt-m font-mono block">SHEET SYNC</span>
                  <span className="text-xs font-bold text-txt-p font-numbers">0ms Local</span>
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

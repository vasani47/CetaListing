import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Chrome, Download, CheckCircle, ArrowRight, Settings, Sliders, Database, Eye, Info, Clock, Sparkles, Volume2, RotateCcw, List, Check, Video, Pause, MessageSquare } from "lucide-react";
import { VIDEOS } from "../data";
import { VideoItem } from "../types";

// Detailed rich text and data for each demo video
const VIDEO_DETAILS: Record<string, {
  overview: string;
  target: string;
  chapters: { time: string; title: string; desc: string }[];
  takeaways: string[];
}> = {
  v1: {
    overview: "This video guides you through extracting and uploading the CetaListing secure extension pack directly into your Google Chrome browser's developer mode interface.",
    target: "Surat wholesalers, brand admins, and single-operator store managers.",
    chapters: [
      { time: "0:00 - 0:25", title: "Unpacking & Extraction", desc: "Downloading the local files pack onto your computer and extracting files safely." },
      { time: "0:25 - 0:50", title: "Opening Extension Dashboard", desc: "Accessing chrome://extensions directly in the URL bar." },
      { time: "0:50 - 1:15", title: "Enabling Developer Mode", desc: "Toggling developer mode active state in the top right header." },
      { time: "1:15 - 1:45", title: "Click Load Unpacked & Pin", desc: "Clicking load unpacked to select files, and pinning CetaListing to side panel for quick launches." }
    ],
    takeaways: [
      "Zero installation files block - secure and trusted framework",
      "No complex developer code or tools required",
      "Auto-updates can be loaded automatically whenever new features launch",
      "Complete offline security database runs perfectly on your device"
    ]
  },
  v2: {
    overview: "This tutorial provides a complete live speedrun demonstrating how to list high-variant Kurti and Saree collections in under 2 seconds on your Meesho seller portal.",
    target: "High-volume listing managers, data entry interns, and dropshipping operators.",
    chapters: [
      { time: "0:00 - 0:45", title: "Meesho Form Walkthrough", desc: "Looking at the traditional tedious listing forms on the Meesho portal." },
      { time: "0:45 - 1:30", title: "Setting up Custom Mappings", desc: "Defining Saree material types, pattern selections, and border parameters." },
      { time: "1:30 - 2:30", title: "Triggering 1-Click Injection", desc: "Watching CetaListing fill up to 30 custom attributes concurrently." },
      { time: "2:30 - 3:20", title: "Bulk Duplication and Saves", desc: "Reviewing saved models and moving onto the next listing item immediately." }
    ],
    takeaways: [
      "Reduces manual listing exhaustion and keystroke repetition",
      "Self-healing attributes selector targets appropriate text fields accurately",
      "Integrated preset calculations optimized for Indian ethnic wear measurements",
      "Reduces validation typo mistakes which cause listing rejections"
    ]
  },
  v3: {
    overview: "Go beyond simple entries. Learn how to backup your custom listing configurations, share JSON profiles across multiple staff computers, and implement skip rules.",
    target: "Multi-staff catalog agencies, wholesale team leads, and premium members.",
    chapters: [
      { time: "0:00 - 1:15", title: "Custom Preset Management", desc: "Saving and modifying unlimited ethnic and western sizing configurations." },
      { time: "1:15 - 2:45", title: "Keystroke Delay Control", desc: "Adjusting speed controls to mimic natural human typing behavior safely." },
      { time: "2:45 - 4:00", title: "Exporting and Sharing JSON", desc: "Backing up your mapped listing configurations for team members." },
      { time: "4:00 - 5:10", title: "Safety Skips and Field Shields", desc: "Protecting custom hand-written fields from automated overrides." }
    ],
    takeaways: [
      "Enables consistent team-wide mapping sync through shared JSON files",
      "Protects precious seller profiles against inadvertent data deletion",
      "Smart keystroke delays protect your seller accounts from firewall rate limits",
      "Advanced customization interface built directly inside your browser side panel"
    ]
  }
};

export default function Videos() {
  const [selectedWalkthrough, setSelectedWalkthrough] = useState<VideoItem | null>(null);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState<VideoItem | null>(null);

  const [activeStep, setActiveStep] = useState(1);
  const [fillState, setFillState] = useState<"idle" | "running" | "success">("idle");
  const [simulatedValues, setSimulatedValues] = useState({
    speed: 0.8,
    skipExisting: true,
    profiles: 4
  });

  // Simulated Mock Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(15);
  const [activePlaybackTime, setActivePlaybackTime] = useState("0:12");
  const [videoSpeed, setVideoSpeed] = useState<"1.0x" | "1.5x" | "2.0x">("1.0x");

  // Reset/run progress bar when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + (videoSpeed === "1.0x" ? 1 : videoSpeed === "1.5x" ? 1.5 : 2);
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, videoSpeed]);

  // Update mock duration stamp based on progress %
  useEffect(() => {
    if (!selectedVideoDetails) return;
    const isYearly = selectedVideoDetails.id === "v1";
    const totalSecs = isYearly ? 105 : selectedVideoDetails.id === "v2" ? 200 : 310;
    const currentSecs = Math.floor((playbackProgress / 100) * totalSecs);
    const m = Math.floor(currentSecs / 60);
    const s = Math.floor(currentSecs % 60);
    setActivePlaybackTime(`${m}:${s < 10 ? "0" : ""}${s}`);
  }, [playbackProgress, selectedVideoDetails]);

  const handleOpenWalkthrough = (video: VideoItem) => {
    setSelectedWalkthrough(video);
    setActiveStep(1);
    setFillState("idle");
  };

  const handleOpenVideoDetails = (video: VideoItem) => {
    setSelectedVideoDetails(video);
    setIsPlaying(true);
    setPlaybackProgress(10);
  };

  // Lock body scroll when a modal is open
  useEffect(() => {
    if (selectedWalkthrough || selectedVideoDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedWalkthrough, selectedVideoDetails]);

  // Helper to trigger simulated fill animation
  const startAutofillSimulation = () => {
    setFillState("running");
    setTimeout(() => {
      setFillState("success");
    }, 3000);
  };

  return (
    <section className="relative py-24 bg-brand-bg border-t border-border-subtle" id="videos">
      {/* Glow overlays */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 gradient-blur-indigo opacity-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 gradient-blur-cyan opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="videos-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card border border-border-subtle text-xs font-semibold text-txt-s uppercase tracking-widest font-mono mb-4">
            <Play size={11} className="text-brand-indigo fill-brand-indigo/20 animate-pulse" />
            Watch the Workings
          </div>
          <h2 className="text-4xl font-heading font-extrabold text-txt-p tracking-tight sm:text-5xl">
            See the Magic <span className="bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-base text-txt-s mt-4 font-sans font-light max-w-xl mx-auto">
            Click the play button to watch our detailed guide, or launch the interactive live simulator at the bottom of each card.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="videos-cards-grid">
          {VIDEOS.map((video) => (
            <div 
              key={video.id}
              className="glass-card group rounded-2xl overflow-hidden hover:border-brand-indigo/30 transition-all duration-300 flex flex-col h-full"
              id={`video-card-${video.id}`}
            >
              {/* Card Thumbnail Area with Play overlay */}
              <div className="relative aspect-video bg-brand-card border-b border-border-subtle overflow-hidden flex items-center justify-center">
                {/* Tech Background pattern inside thumbnail */}
                <div className="absolute inset-0 cosmic-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />

                {/* Simulated Waveform or Neon Orb */}
                <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-brand-indigo/20 to-brand-cyan/20 blur-xl group-hover:scale-125 transition-transform duration-500" />

                {/* Animated Star/Icon helper */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-brand-card border border-border-subtle text-[9px] text-txt-m font-mono tracking-wider uppercase">
                  {video.badge}
                </div>

                <div className="absolute top-3 right-3 text-[10px] text-brand-cyan font-mono font-bold flex items-center gap-1 bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-full">
                  <span>{video.duration}</span>
                </div>

                {/* Play Button - Now opens the Video Details Popmodal */}
                <button 
                  onClick={() => handleOpenVideoDetails(video)}
                  className="relative w-14 h-14 rounded-full flex items-center justify-center bg-brand-card/50 border border-border-subtle hover:border-brand-cyan/50 hover:bg-brand-cyan/10 text-txt-p hover:text-brand-cyan shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 cursor-pointer"
                  aria-label={`Play details for ${video.title}`}
                >
                  <Play size={20} className="fill-current ml-1" />
                </button>
              </div>

              {/* Card Text details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-txt-p group-hover:text-brand-cyan transition-colors duration-200">
                    {video.title}
                  </h3>
                  <p className="text-xs text-txt-s mt-2 font-sans font-light leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom link - opens the Interactive Walkthrough Simulation strictly */}
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <button 
                    onClick={() => handleOpenWalkthrough(video)}
                    className="text-xs font-semibold text-brand-indigo hover:text-brand-cyan flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Launch Interactive Walkthrough
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL 1: Playback Video Player & Full Details Panel */}
      <AnimatePresence>
        {selectedVideoDetails && (() => {
          const det = VIDEO_DETAILS[selectedVideoDetails.id] || VIDEO_DETAILS.v1;
          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto py-8" id="video-details-backdrop">
              {/* Dark background blur overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVideoDetails(null)}
                className="fixed inset-0 bg-zinc-950/40 dark:bg-zinc-950/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative w-full max-w-4xl rounded-2xl border border-border-subtle bg-brand-bg shadow-2xl overflow-hidden z-10 my-auto"
                id="video-details-container"
              >
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-border-subtle bg-brand-card/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Video size={16} className="text-brand-cyan" />
                    <h3 className="text-base font-heading font-bold text-txt-p leading-none">
                      {selectedVideoDetails.title} Details
                    </h3>
                    <span className="text-[10px] text-txt-m font-mono font-bold bg-brand-card border border-border-subtle px-2 py-0.5 rounded">
                      VIDEO DEMO & INDEX
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedVideoDetails(null)}
                    className="text-txt-m hover:text-txt-p p-1 hover:bg-brand-card rounded transition-colors cursor-pointer"
                    aria-label="Close Modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body - 2 Columns (Interactive Mock Player & Structured Information) */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-brand-card max-h-[75vh] overflow-y-auto scrollbar-thin">
                  
                  {/* Left Column (Mock Video Player) */}
                  <div className="md:col-span-6 space-y-4" id="details-video-player">
                    <div className="relative aspect-video rounded-xl bg-black border border-border-subtle overflow-hidden flex flex-col justify-between p-4 shadow-2xl group/player">
                      {/* Grid background inside player */}
                      <div className="absolute inset-0 cosmic-grid opacity-25" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />

                      {/* Video status indicator */}
                      <div className="relative flex justify-between items-center z-10">
                        <span className="flex items-center gap-1.5 text-[9px] font-mono bg-black/60 backdrop-blur border border-white/10 px-2 py-0.5 rounded text-zinc-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-ping" : "bg-zinc-500"} block`} />
                          {isPlaying ? "PLAYING DEMO" : "PAUSED"}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {selectedVideoDetails.duration}
                        </span>
                      </div>

                      {/* Middle Big Button overlay */}
                      <div className="relative flex justify-center items-center z-10 my-auto">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-16 h-16 rounded-full flex items-center justify-center bg-brand-cyan/20 border-2 border-brand-cyan text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        >
                          {isPlaying ? <Pause size={24} className="fill-white" /> : <Play size={24} className="fill-white ml-1" />}
                        </button>
                      </div>

                      {/* Bottom Controls Area */}
                      <div className="relative space-y-2 z-10">
                        {/* Progress Bar */}
                        <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
                          <div 
                            style={{ width: `${playbackProgress}%` }}
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-indigo to-brand-cyan transition-all duration-300"
                          />
                        </div>

                        {/* Player details */}
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                          <div className="flex items-center gap-3">
                            <span>{activePlaybackTime} / {selectedVideoDetails.duration}</span>
                            <div className="flex items-center gap-1">
                              <Volume2 size={12} />
                              <span className="text-[10px] text-zinc-500">100%</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Speed selector */}
                            {(["1.0x", "1.5x", "2.0x"] as const).map((spd) => (
                              <button 
                                key={spd}
                                onClick={() => setVideoSpeed(spd)}
                                className={`px-1 rounded text-[10px] ${videoSpeed === spd ? "bg-brand-cyan text-black font-bold" : "text-zinc-500 hover:text-zinc-300"}`}
                              >
                                {spd}
                              </button>
                            ))}
                            <button 
                              onClick={() => setPlaybackProgress(0)}
                              className="p-0.5 hover:text-white transition-colors"
                              title="Restart video"
                            >
                              <RotateCcw size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Overview description */}
                    <div className="p-4 rounded-xl border border-border-subtle bg-brand-bg/60 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-brand-indigo font-semibold">
                        <Info size={14} />
                        <span>Core Objective</span>
                      </div>
                      <p className="text-xs text-txt-s leading-relaxed font-sans font-light">
                        {det.overview}
                      </p>
                      <div className="pt-2 text-[11px] text-txt-m font-sans border-t border-border-subtle">
                        <span className="font-semibold text-txt-p">Target Audience:</span> {det.target}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Write any details, Chapters, Takeaways) */}
                  <div className="md:col-span-6 space-y-6" id="details-text-panel">
                    {/* Chapters Index list */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-border-subtle text-xs font-semibold text-txt-p uppercase font-mono">
                        <List size={14} className="text-brand-indigo" />
                        <span>Chapters & Timestamps</span>
                      </div>
                      <div className="space-y-2.5">
                        {det.chapters.map((chap, idx) => (
                          <div 
                            key={idx}
                            className="p-3 rounded-lg bg-brand-bg hover:bg-brand-card-hover border border-border-subtle flex gap-3 transition-colors group cursor-pointer"
                            onClick={() => {
                              const progresses = [10, 40, 70, 90];
                              setPlaybackProgress(progresses[idx]);
                              setIsPlaying(true);
                            }}
                          >
                            <span className="text-[11px] font-bold text-brand-cyan font-mono bg-brand-cyan/5 border border-brand-cyan/20 px-1.5 py-0.5 rounded self-start shrink-0">
                              {chap.time}
                            </span>
                            <div className="space-y-1">
                              <h5 className="text-xs font-semibold text-txt-p group-hover:text-brand-indigo transition-colors">
                                {chap.title}
                              </h5>
                              <p className="text-[11px] text-txt-s leading-normal font-sans font-light">
                                {chap.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Technical Takeaways */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-border-subtle text-xs font-semibold text-txt-p uppercase font-mono">
                        <Sparkles size={14} className="text-brand-cyan" />
                        <span>Key Benefits Explained</span>
                      </div>
                      <div className="space-y-2">
                        {det.takeaways.map((take, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-txt-s">
                            <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-sans font-light leading-relaxed">{take}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact or Order CTA block */}
                    <div className="pt-4 border-t border-border-subtle">
                      <a 
                        href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I just watched the demo video "${selectedVideoDetails.title}" and would like to learn more about the CetaListing Extension!`)}`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="w-full flex items-center justify-center gap-2.5 py-3 bg-[#ff477e] hover:bg-[#e03165] rounded-xl text-xs font-bold text-white transition-colors"
                      >
                        <MessageSquare size={14} className="fill-white/10" />
                        Ask Questions on WhatsApp
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </AnimatePresence>

      {/* POPUP MODAL 2: High-Fidelity Custom Walkthrough Playback Modal */}
      <AnimatePresence>
        {selectedWalkthrough && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto py-8" id="video-modal-backdrop">
            {/* Dark background blur overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWalkthrough(null)}
              className="fixed inset-0 bg-zinc-950/40 dark:bg-zinc-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl rounded-2xl border border-border-subtle bg-brand-bg shadow-2xl overflow-hidden z-10 my-auto"
              id="video-modal-container"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-border-subtle bg-brand-card/50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan block animate-ping" />
                  <h3 className="text-base font-heading font-bold text-txt-p leading-none">
                    {selectedWalkthrough.title}
                  </h3>
                  <span className="text-[10px] text-txt-m font-mono font-bold bg-brand-card border border-border-subtle px-2 py-0.5 rounded">
                    INTERACTIVE DEMO
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedWalkthrough(null)}
                  className="text-txt-m hover:text-txt-p p-1 hover:bg-brand-card rounded transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body - Dynamic Interactive Content depending on clicked video */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-brand-card max-h-[75vh] overflow-y-auto scrollbar-thin">
                {/* Visual Simulation Screen (Left on Desktop) */}
                <div className="lg:col-span-7" id="modal-interactive-visual">
                  {/* VIDEO 1: HOW TO INSTALL INTERACTIVE WALKTHROUGH */}
                  {selectedWalkthrough.id === "v1" && (
                    <div className="p-6 rounded-xl border border-border-subtle bg-brand-bg/50 min-h-[300px] flex flex-col justify-between font-sans">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 pb-3 border-b border-border-subtle">
                          <Chrome className="text-brand-cyan" size={18} />
                          <span className="text-xs font-bold text-txt-p font-mono">Chrome Developer Unpack Setup</span>
                        </div>

                        {/* Interactive install sequence tabs */}
                        <div className="grid grid-cols-4 gap-2">
                          {[1, 2, 3, 4].map((step) => (
                            <button
                              key={step}
                              onClick={() => setActiveStep(step)}
                              className={`py-1.5 rounded text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                                activeStep === step 
                                ? "bg-brand-indigo/10 border-brand-indigo text-brand-indigo" 
                                : "bg-brand-card border-border-subtle text-txt-m hover:text-txt-p hover:bg-brand-card-hover"
                              }`}
                            >
                              Step {step}
                            </button>
                          ))}
                        </div>

                        {/* Step Description */}
                        <div className="p-4 rounded-lg bg-brand-card border border-border-subtle min-h-[140px] flex flex-col justify-between">
                          {activeStep === 1 && (
                            <div>
                              <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm mb-1.5">
                                <Download size={14} />
                                1. Get Extension Files
                              </div>
                              <p className="text-xs text-txt-s leading-relaxed font-light">
                                Download the latest production-ready build folder. Click our "Download Extension" button to request the secure extension pack over WhatsApp.
                              </p>
                              <div className="mt-4 flex items-center gap-2 text-[10px] text-txt-m font-mono">
                                <span>Status: ZIP file downloaded successfully</span>
                              </div>
                            </div>
                          )}
                          {activeStep === 2 && (
                            <div>
                              <div className="flex items-center gap-2 text-brand-violet font-bold text-sm mb-1.5">
                                <Chrome size={14} />
                                2. Open Chrome Extensions
                              </div>
                              <p className="text-xs text-txt-s leading-relaxed font-light">
                                In your Google Chrome browser address bar, type <span className="font-mono text-txt-p bg-brand-bg px-1 rounded border border-border-subtle">chrome://extensions</span> and press enter to view your loaded plugins.
                              </p>
                            </div>
                          )}
                          {activeStep === 3 && (
                            <div>
                              <div className="flex items-center gap-2 text-brand-indigo font-bold text-sm mb-1.5">
                                <Settings size={14} />
                                3. Toggle Developer Mode
                              </div>
                              <p className="text-xs text-txt-s leading-relaxed font-light">
                                Look at the top-right corner of the Extensions dashboard and switch on the <span className="font-mono text-txt-p font-semibold">"Developer Mode"</span> toggle switch. This unlocks external local folders loading.
                              </p>
                            </div>
                          )}
                          {activeStep === 4 && (
                            <div>
                              <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm mb-1.5">
                                <CheckCircle size={14} className="fill-emerald-500/10 text-emerald-500" />
                                4. Load Unpacked Folder
                              </div>
                              <p className="text-xs text-txt-s leading-relaxed font-light">
                                Click the <span className="font-mono text-txt-p font-semibold">"Load Unpacked"</span> button on the top-left, and select the extracted CetaListing folder. CetaListing SidePanel is now ready to assist you on Meesho!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Install Interactive controls */}
                      <div className="flex items-center justify-between text-xs font-mono text-txt-m pt-2 border-t border-border-subtle">
                        <span>CetaListing v1.2 Pack</span>
                        <div className="flex gap-2">
                          <button 
                            disabled={activeStep === 1}
                            onClick={() => setActiveStep(prev => prev - 1)}
                            className="text-[10px] text-txt-s hover:text-txt-p disabled:opacity-30 cursor-pointer font-bold"
                          >
                            Back
                          </button>
                          <button 
                            disabled={activeStep === 4}
                            onClick={() => setActiveStep(prev => prev + 1)}
                            className="text-[10px] text-brand-cyan font-bold disabled:opacity-30 cursor-pointer"
                          >
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIDEO 2: HOW AUTOFILL WORKS INTERACTIVE WALKTHROUGH */}
                  {selectedWalkthrough.id === "v2" && (
                    <div className="p-6 rounded-xl border border-border-subtle bg-brand-bg/50 min-h-[300px] flex flex-col justify-between font-sans">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                          <span className="text-xs font-bold text-txt-p font-mono">Meesho Live Form Injection Simulation</span>
                          <span className="text-[9px] text-txt-m font-mono">MEESHO V1 ENGINE</span>
                        </div>

                        {/* Interactive Click-To-Autofill Area */}
                        <div className="p-4 rounded-lg bg-brand-card border border-border-subtle space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-txt-m font-mono">Virtual Product: Red Cotton Saree</span>
                            {fillState === "success" && (
                              <span className="text-emerald-500 font-bold font-mono flex items-center gap-1">
                                <CheckCircle size={12} /> SUCCESS
                              </span>
                            )}
                          </div>

                          <div className="space-y-2 text-[11px] font-mono">
                            <div className="flex justify-between items-center bg-brand-bg p-2 rounded border border-border-subtle">
                              <span className="text-txt-m">Fabric Material:</span>
                              <span className={fillState !== "idle" ? "text-brand-indigo font-semibold" : "text-txt-m"}>
                                {fillState === "idle" ? "Empty" : "100% Pure Surat Cotton"}
                              </span>
                            </div>
                            <div className="flex justify-between items-center bg-brand-bg p-2 rounded border border-border-subtle">
                              <span className="text-txt-m">Pattern Border:</span>
                              <span className={fillState !== "idle" ? "text-brand-indigo font-semibold" : "text-txt-m"}>
                                {fillState === "idle" ? "Empty" : "Embellished Silk Border"}
                              </span>
                            </div>
                            <div className="flex justify-between items-center bg-brand-bg p-2 rounded border border-border-subtle">
                              <span className="text-txt-m">Length & Sizing:</span>
                              <span className={fillState !== "idle" ? "text-brand-indigo font-semibold" : "text-txt-m"}>
                                {fillState === "idle" ? "Empty" : "5.5 Meters + 0.8m Blouse"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Trigger button */}
                        <div className="text-center pt-2">
                          {fillState === "idle" && (
                            <button 
                              onClick={startAutofillSimulation}
                              className="px-6 py-2.5 rounded-lg bg-[#ff477e] hover:bg-[#e03165] text-white text-xs font-bold shadow-lg shadow-brand-violet/20 transition-all animate-bounce cursor-pointer"
                            >
                              Trigger Simulated AI Autofill
                            </button>
                          )}
                          {fillState === "running" && (
                            <div className="flex items-center justify-center gap-2.5 text-xs text-brand-indigo font-mono py-2">
                              <span className="w-3.5 h-3.5 rounded-full border-2 border-brand-indigo border-t-transparent animate-spin block" />
                              <span>Mapping selectors & injecting values...</span>
                            </div>
                          )}
                          {fillState === "success" && (
                            <div className="space-y-2">
                              <p className="text-xs text-txt-s">
                                🚀 Completed in <span className="text-brand-cyan font-bold font-numbers">1.4 Seconds</span>. 0 errors detected.
                              </p>
                              <button 
                                onClick={() => setFillState("idle")}
                                className="text-[10px] text-brand-indigo hover:underline cursor-pointer font-bold"
                              >
                                Reset Simulation
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIDEO 3: COMPLETE WALKTHROUGH INTERACTIVE WALKTHROUGH */}
                  {selectedWalkthrough.id === "v3" && (
                    <div className="p-6 rounded-xl border border-border-subtle bg-brand-bg/50 min-h-[300px] flex flex-col justify-between font-sans">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                          <span className="text-xs font-bold text-txt-p font-mono">SidePanel Configuration Panel</span>
                          <span className="text-[9px] text-brand-indigo font-mono">PREMIUM CONTROLS</span>
                        </div>

                        {/* Config Adjusters Mockup */}
                        <div className="space-y-3 p-4 rounded-lg bg-brand-card border border-border-subtle">
                          {/* Speed slider */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[11px] font-mono text-txt-s">
                              <span>Auto Keystroke Speed Delay:</span>
                              <span className="text-txt-p font-bold">{simulatedValues.speed} Seconds</span>
                            </div>
                            <input 
                              type="range" 
                              min="0.1" 
                              max="2.0" 
                              step="0.1"
                              value={simulatedValues.speed}
                              onChange={(e) => setSimulatedValues({...simulatedValues, speed: parseFloat(e.target.value)})}
                              className="w-full h-1 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-cyan border border-border-subtle"
                            />
                          </div>

                          {/* Skip existing check */}
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] font-mono text-txt-s">Skip Existing Fields (Safety Override):</span>
                            <button 
                              onClick={() => setSimulatedValues({...simulatedValues, skipExisting: !simulatedValues.skipExisting})}
                              className={`w-9 h-5 rounded-full transition-colors relative ${simulatedValues.skipExisting ? "bg-brand-indigo" : "bg-border-strong"}`}
                            >
                              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${simulatedValues.skipExisting ? "right-0.5" : "left-0.5"}`} />
                            </button>
                          </div>

                          {/* Profiles loaded list */}
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] font-mono text-txt-s">Loaded Saved Profiles:</span>
                            <span className="text-[11px] font-mono font-bold text-brand-indigo">{simulatedValues.profiles} Profiles</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-brand-indigo/5 border border-brand-indigo/15 text-[11px] text-txt-s font-mono flex items-center gap-2">
                          <Sliders size={14} className="text-brand-indigo" />
                          <span>Interactive Walkthrough Slider: Fine-tune speed & rules offline!</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Walkthrough Instructions/Explanations (Right on Desktop) */}
                <div className="lg:col-span-5" id="modal-interactive-sidebar">
                  <span className="text-[10px] text-txt-m uppercase tracking-widest font-mono block mb-2">
                    How it optimizes
                  </span>
                  <h4 className="text-lg font-heading font-extrabold text-txt-p leading-tight">
                    {selectedWalkthrough.title} Overview
                  </h4>
                  <p className="text-xs text-txt-s mt-3 font-sans font-light leading-relaxed">
                    Unlike standard browser plugins, CetaListing was built for the specific complexities of Indian eCommerce portals. 
                  </p>

                  <div className="space-y-3 mt-6">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-[10px] text-brand-cyan font-bold font-mono mt-0.5 shrink-0">1</div>
                      <p className="text-xs text-txt-s font-sans font-light">
                        <strong className="text-txt-p font-semibold">100% Local Storage Database:</strong> All templates remain securely on your hard drive. No cloud leak risks.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-[10px] text-brand-indigo font-bold font-mono mt-0.5 shrink-0">2</div>
                      <p className="text-xs text-txt-s font-sans font-light">
                        <strong className="text-txt-p font-semibold">Bypass Form Refreshes:</strong> CetaListing intercepts page resets to keep your custom mappings stable and cached.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center text-[10px] text-brand-violet font-bold font-mono mt-0.5 shrink-0">3</div>
                      <p className="text-xs text-txt-s font-sans font-light">
                        <strong className="text-txt-p font-semibold">Size Field Mapping:</strong> Automatically fill corresponding catalog sizes directly into the listing form's size fields.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://wa.me/919999999999?text=Hi,%0AI%20want%20CetaListing%20Extension."
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl text-xs font-bold text-white transition-colors"
                    >
                      <Download size={14} />
                      Download Extension Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

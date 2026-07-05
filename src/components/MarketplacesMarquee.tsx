import { useState, ReactNode } from "react";
import { motion } from "motion/react";

interface Marketplace {
  name: string;
  colorClass: string;
  logo: ReactNode;
}

export default function MarketplacesMarquee() {
  const marketplaces: Marketplace[] = [
    {
      name: "Amazon India",
      colorClass: "hover:text-[#FF9900] hover:drop-shadow-[0_0_12px_rgba(255,153,0,0.35)]",
      logo: (
        <div className="flex items-center gap-1.5 font-sans font-extrabold text-[15px] tracking-tight text-current select-none">
          <span className="opacity-90">amazon</span>
          <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">IN</span>
        </div>
      )
    },
    {
      name: "Flipkart",
      colorClass: "hover:text-[#2874F0] hover:drop-shadow-[0_0_12px_rgba(40,116,240,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-heading font-extrabold text-[16px] tracking-tight italic select-none">
          <span>Flipkart</span>
        </div>
      )
    },
    {
      name: "Meesho",
      colorClass: "hover:text-[#ff477e] hover:drop-shadow-[0_0_12px_rgba(255,71,126,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-sans font-extrabold text-[17px] tracking-tight select-none">
          <span className="text-[#ff477e]">m</span><span>eesho</span>
        </div>
      )
    },
    {
      name: "JioMart",
      colorClass: "hover:text-[#008248] dark:hover:text-[#00E676] hover:drop-shadow-[0_0_12px_rgba(0,230,118,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-sans font-black text-[16px] tracking-tight select-none">
          <span className="text-[#008248] dark:text-[#00E676]">Jio</span><span>Mart</span>
        </div>
      )
    },
    {
      name: "Snapdeal",
      colorClass: "hover:text-[#E40046] hover:drop-shadow-[0_0_12px_rgba(228,0,70,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-heading font-black text-[15px] tracking-tight select-none text-current">
          <span>snapdeal</span>
        </div>
      )
    },
    {
      name: "Tata CLiQ",
      colorClass: "hover:text-[#DA251D] hover:drop-shadow-[0_0_12px_rgba(218,37,29,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-sans font-black text-[15px] tracking-tight select-none uppercase">
          <span>TATA</span><span className="text-red-500">CLiQ</span>
        </div>
      )
    },
    {
      name: "Myntra",
      colorClass: "hover:text-[#F13C73] hover:drop-shadow-[0_0_12px_rgba(241,60,115,0.35)]",
      logo: (
        <div className="flex items-center gap-1.5 font-heading font-black text-[17px] tracking-wider select-none uppercase">
          <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">M</span>
          <span className="text-[13px] font-bold tracking-tight">Myntra</span>
        </div>
      )
    },
    {
      name: "AJIO",
      colorClass: "hover:text-[#3182CE] hover:drop-shadow-[0_0_12px_rgba(49,130,206,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-sans font-extrabold text-[18px] tracking-widest select-none uppercase">
          <span>AJIO</span>
        </div>
      )
    },
    {
      name: "Nykaa",
      colorClass: "hover:text-[#FC2779] hover:drop-shadow-[0_0_12px_rgba(252,39,121,0.35)]",
      logo: (
        <div className="flex items-center gap-1 font-sans font-black text-[16px] tracking-tight italic select-none">
          <span className="text-[#FC2779]">NYKAA</span>
        </div>
      )
    },
    {
      name: "Udaan",
      colorClass: "hover:text-[#0052CC] hover:drop-shadow-[0_0_12px_rgba(0,82,204,0.35)]",
      logo: (
        <div className="flex items-center gap-1.5 font-sans font-black text-[15px] tracking-wide select-none uppercase">
          <span>udaan</span>
        </div>
      )
    }
  ];

  // Repeat items for continuous loop
  const marqueeItems = [...marketplaces, ...marketplaces, ...marketplaces, ...marketplaces];

  return (
    <section 
      className="relative py-12 bg-brand-bg overflow-hidden border-b border-border-subtle/40"
      id="marketplaces-marquee-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Marketplace Slider */}
        <div 
          className="bg-brand-card/30 border border-border-subtle/50 rounded-2xl py-6 px-4 relative overflow-hidden flex items-center justify-center"
          id="marquee-container"
        >
          {/* Edge Shadows for smooth fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />

          {/* Scrolling elements container */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-loop gap-16 items-center">
              {marqueeItems.map((item, idx) => (
                <div 
                  key={`${item.name}-${idx}`} 
                  className={`flex items-center justify-center text-txt-m ${item.colorClass} transition-all duration-300 transform hover:scale-105 shrink-0 select-none cursor-pointer`}
                  title={item.name}
                >
                  {item.logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Beautiful Badge inspired by the provided screenshot: Built for Meesho Sellers */}
        <div 
          className="max-w-4xl mx-auto rounded-2xl border border-pink-100 dark:border-pink-900/30 bg-pink-50/50 dark:bg-pink-950/10 p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-[0_4px_20px_-4px_rgba(244,63,94,0.05)] text-center sm:text-left"
          id="meesho-sellers-badge-banner"
        >
          {/* Official Meesho logo SVG from provided URL */}
          <div className="flex items-center justify-center shrink-0">
            <div className="w-16 h-12 flex items-center justify-center bg-white dark:bg-white p-2 rounded-xl border border-pink-200 shadow-sm select-none">
              <img 
                src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" 
                alt="Meesho Logo" 
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Vertical line divider */}
          <div className="hidden sm:block h-10 w-px bg-pink-200 dark:bg-pink-900/40" />

          {/* Copy texts */}
          <div className="flex-1">
            <h4 className="text-sm font-heading font-extrabold text-txt-p">
              Built for Meesho Sellers
            </h4>
            <p className="text-xs text-txt-s mt-0.5 font-sans font-light">
              Automate. Save Time. Grow More. Optimized natively to handle Surat textile listing requirements instantly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

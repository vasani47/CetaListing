import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-brand-card hover:bg-brand-card-hover border border-border-subtle text-txt-p transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-violet/50 shadow-md group"
      aria-label="Toggle Theme"
      id="theme-toggle-btn"
    >
      <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
        {/* Animated Sun */}
        <motion.div
          animate={{
            y: theme === "light" ? 0 : 30,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 45,
          }}
          transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="absolute text-amber-500"
        >
          <Sun size={18} className="fill-amber-400/20" />
        </motion.div>

        {/* Animated Moon */}
        <motion.div
          animate={{
            y: theme === "dark" ? 0 : -30,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -45,
          }}
          transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="absolute text-brand-cyan"
        >
          <Moon size={18} className="fill-brand-cyan/20" />
        </motion.div>
      </div>
      
      {/* Tooltip hint */}
      <span className="absolute top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-bg border border-border-subtle rounded-lg text-[9px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}

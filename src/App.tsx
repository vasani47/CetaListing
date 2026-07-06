import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketplacesMarquee from "./components/MarketplacesMarquee";
import Trust from "./components/Trust";
import Features from "./components/Features";
import Videos from "./components/Videos";
import Roadmap from "./components/Roadmap";
import Manifesto from "./components/Manifesto";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "privacy" | "terms">("home");

  // Track hash changes for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/privacy" || hash === "#privacy" || hash === "#privacy-policy") {
        setCurrentView("privacy");
        window.scrollTo({ top: 0, behavior: "auto" });
      } else if (hash === "#/terms" || hash === "#terms" || hash === "#terms-of-service") {
        setCurrentView("terms");
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        setCurrentView("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Track mouse coordinates globally to render high-performance Cursor Glow with zero React re-renders
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-brand-bg text-txt-p font-sans overflow-x-hidden selection:bg-brand-indigo/30 transition-colors duration-300" id="app-root-container">
        {/* 
          High-Performance Cursor Glow Aura 
          No React re-renders triggered, runs natively on hardware-accelerated composite layer
        */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 opacity-0 md:opacity-100 transition-opacity duration-300"
          style={{
            background: "radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(237, 11, 112, 0.05) 0%, rgba(56, 189, 248, 0.01) 50%, transparent 100%)"
          }}
          id="cursor-glow-halo"
        />

        {/* Decorative Star Particles Background */}
        <div className="absolute inset-0 cosmic-grid opacity-15 pointer-events-none z-0" />

        {/* Header Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative" id="main-content-wrapper">
          {currentView === "home" ? (
            <>
              <Hero />
              <MarketplacesMarquee />
              <Trust />
              <Features />
              <Videos />
              <Pricing />
              <FAQ />
              <Roadmap />
              <Manifesto />
              <CTA />
            </>
          ) : currentView === "privacy" ? (
            <PrivacyPolicy />
          ) : (
            <TermsOfService />
          )}
        </main>

        {/* Footer Branding & Disclaimer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

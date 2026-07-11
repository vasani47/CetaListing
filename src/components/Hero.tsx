import React, { useState, MouseEvent, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, Play, Sparkles, CheckCircle2, ArrowRight, Zap, 
  ShieldCheck, Rocket, Plus, Edit2, Trash2, Eye, Upload, Download, 
  ChevronDown, Check, Settings, Pencil, FileText, Maximize2, Minimize2,
  Home, Box, ShoppingCart, RotateCcw, CreditCard, ChevronLeft, ChevronRight,
  PlayCircle, Headset, X, Copy, Mail, Phone, Sliders
} from "lucide-react";
import { WHATSAPP_LINK } from "./Navbar";

const PRODUCTS = [
  { 
    id: "p1", 
    name: "Corset 005", 
    fields: 35, 
    title: "Premium Satin Overbust Corset", 
    fabric: "Satin & Lace", 
    occasion: "Party / Nightwear", 
    sizes: ["S", "M", "L", "XL"],
    gst: "12%",
    hsn: "621210",
    weight: "220",
    styleCode: "CETA-COR-005",
    price: 899,
    color: "Jet Black",
    genericName: "Corsets",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=80"
    ]
  },
  { 
    id: "p2", 
    name: "Saree 012", 
    fields: 30, 
    title: "Designer Georgette Saree", 
    fabric: "Pure Georgette", 
    occasion: "Festival", 
    sizes: ["Free Size"],
    gst: "5%",
    hsn: "540752",
    weight: "280",
    styleCode: "CETA-SRE-GEO",
    price: 499,
    color: "Peach Pink",
    genericName: "Sarees",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=80"
    ]
  },
  { 
    id: "p3", 
    name: "Kurta 045", 
    fields: 28, 
    title: "Embroidered Silk Kurta Set", 
    fabric: "Chanderi Silk", 
    occasion: "Party / Wedding", 
    sizes: ["S", "M", "L", "XL"],
    gst: "12%",
    hsn: "621139",
    weight: "450",
    styleCode: "CETA-KRT-SLK",
    price: 799,
    color: "Royal Violet",
    genericName: "Kurta Sets",
    images: [
      "https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&auto=format&fit=crop&q=80"
    ]
  },
  { 
    id: "p4", 
    name: "Banarasi 07", 
    fields: 32, 
    title: "Premium Banarasi Silk Saree", 
    fabric: "Banarasi Silk", 
    occasion: "Traditional", 
    sizes: ["Free Size"],
    gst: "5%",
    hsn: "500720",
    weight: "580",
    styleCode: "CETA-SRE-BAN",
    price: 1299,
    color: "Maroon Gold",
    genericName: "Sarees",
    images: [
      "https://images.unsplash.com/photo-1610030470298-4058fbb61904?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391265517-35bbadd01209?w=400&auto=format&fit=crop&q=80"
    ]
  }
];


interface ExtensionSidebarProps {
  isFullScreen?: boolean;
  activeProduct: typeof PRODUCTS[0];
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  selectedProdIdx: number;
  setSelectedProdIdx: (idx: number) => void;
  isAutofilling: boolean;
  triggerAutofill: () => void;
  triggerPreview: () => void;
  triggerImport: () => void;
  triggerExport: () => void;
  filledCount: number;
  skippedCount: number;
  failedCount: number;
  showSummary: boolean;
  setShowSummary: (show: boolean) => void;
  setNotification: (msg: string | null) => void;
  setIsFullScreenSim?: (fullscreen: boolean) => void;
  
  // Settings view states
  extensionView: "normal" | "profiles" | "general" | "activity";
  setExtensionView: (view: "normal" | "profiles" | "general" | "activity") => void;
  profilesList: string[];
  setProfilesList: React.Dispatch<React.SetStateAction<string[]>>;
  generalEmail: string;
  setGeneralEmail: (email: string) => void;
  generalBusiness: string;
  setGeneralBusiness: (desc: string) => void;
  skipExisting: boolean;
  setSkipExisting: (skip: boolean) => void;
  activityLogs: Array<{ time: string; filled: number; skipped: number; failed: number }>;
  setActivityLogs: React.Dispatch<React.SetStateAction<Array<{ time: string; filled: number; skipped: number; failed: number }>>>;
}

function ExtensionSidebar({
  isFullScreen = false,
  activeProduct,
  dropdownOpen,
  setDropdownOpen,
  selectedProdIdx,
  setSelectedProdIdx,
  isAutofilling,
  triggerAutofill,
  triggerPreview,
  triggerImport,
  triggerExport,
  filledCount,
  skippedCount,
  failedCount,
  showSummary,
  setShowSummary,
  setNotification,
  setIsFullScreenSim,
  extensionView,
  setExtensionView,
  profilesList,
  setProfilesList,
  generalEmail,
  setGeneralEmail,
  generalBusiness,
  setGeneralBusiness,
  skipExisting,
  setSkipExisting,
  activityLogs,
  setActivityLogs,
}: ExtensionSidebarProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-between overflow-hidden relative text-left bg-white text-slate-800 ${isFullScreen ? 'min-h-full' : 'min-h-[500px]'}`}>
      {/* Header section */}
      <div className="p-3.5 border-b border-slate-100 bg-white shrink-0">
        {extensionView === "normal" ? (
          /* Normal Header (Image 2) */
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 select-none">
              <img 
                src="assets/logo-word-l.png" 
                className="h-6 object-contain" 
                alt="CetaListing" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => setExtensionView("profiles")}
                title="Settings"
                className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
              {isFullScreen && setIsFullScreenSim && (
                <button 
                  onClick={() => setIsFullScreenSim(false)}
                  title="Exit Full Screen"
                  className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Settings Header (Images 3, 4, 5) */
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-2.5">
              <button 
                onClick={() => setExtensionView("normal")}
                className="p-1 rounded-md hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors shrink-0 mt-0.5"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              <div className="flex-1">
                <h2 className="text-sm font-black text-slate-800 font-sans tracking-tight">Settings</h2>
                <p className="text-[10px] font-semibold text-slate-400 leading-normal">
                  Manage your profiles and business information.
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0 mt-0.5">
                {isFullScreen && setIsFullScreenSim && (
                  <button 
                    onClick={() => setIsFullScreenSim(false)}
                    title="Exit Full Screen"
                    className="ml-auto p-1 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors shrink-0 mt-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Navigation Tabs (Images 3, 4, 5) */}
            <div className="flex p-0.5 bg-slate-50 rounded-lg border border-slate-100/50">
              <button
                onClick={() => setExtensionView("profiles")}
                className={`flex-1 py-1 rounded-md text-[10px] font-bold flex items-center justify-center gap-1 transition-all ${
                  extensionView === "profiles" 
                    ? "bg-white text-indigo-950 shadow-sm font-extrabold" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <Box size={11} />
                <span>Product Profiles</span>
              </button>
              
              <button
                onClick={() => setExtensionView("general")}
                className={`flex-1 py-1 rounded-md text-[10px] font-bold flex items-center justify-center gap-1 transition-all ${
                  extensionView === "general" 
                    ? "bg-white text-indigo-950 shadow-sm font-extrabold" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <Sliders size={11} />
                <span>General</span>
              </button>
              
              <button
                onClick={() => setExtensionView("activity")}
                className={`flex-1 py-1 rounded-md text-[10px] font-bold flex items-center justify-center gap-1 transition-all ${
                  extensionView === "activity" 
                    ? "bg-white text-indigo-950 shadow-sm font-extrabold" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <RotateCcw size={11} />
                <span>Activity</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Operational Contents (Customizable Viewports) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white select-none flex flex-col">
        {extensionView === "normal" && (
          /* Image 2 content */
          <>
            {/* SELECT PRODUCT PROFILE Selector block */}
            <div className="space-y-1 text-left">
              <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-wider font-sans">
                SELECT PRODUCT PROFILE
              </label>
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-[#f8f9fa] hover:bg-slate-100 flex items-center justify-between text-xs text-slate-800 font-semibold transition-colors cursor-pointer shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff477e]" />
                    <span>{activeProduct.name}</span>
                  </div>
                  <ChevronDown size={14} className="text-slate-400" />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-10 left-0 right-0 z-50 rounded-lg border border-slate-200 bg-white p-1 shadow-xl space-y-0.5">
                    {PRODUCTS.map((prod, idx) => (
                      <button
                        key={prod.id}
                        onClick={() => {
                          setSelectedProdIdx(idx);
                          setDropdownOpen(false);
                          setNotification(`Switched profile to: "${prod.name}"`);
                          setTimeout(() => setNotification(null), 3000);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center justify-between ${idx === selectedProdIdx ? 'bg-indigo-50 text-[#b5268c]' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        <span>{prod.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{prod.fields} fields</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row buttons: + New, Rename, Trash */}
            <div className="grid grid-cols-12 gap-2">
              <button 
                onClick={() => {
                  const newName = prompt("Enter Name for the New Product Profile:", "Saree Premium 003");
                  if (newName) {
                    setProfilesList(prev => [...prev, newName]);
                    setNotification(`Created profile: "${newName}" successfully!`);
                    setTimeout(() => setNotification(null), 3000);
                  }
                }}
                className="col-span-5 h-9 rounded-lg bg-[#b5268c] hover:bg-[#9d1b76] text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-98"
              >
                + New
              </button>

              <button 
                onClick={() => {
                  const newName = prompt("Rename Active Profile:", activeProduct.name);
                  if (newName) {
                    setNotification(`Renamed profile to "${newName}"`);
                    setTimeout(() => setNotification(null), 3000);
                  }
                }}
                className="col-span-5 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-98"
              >
                <Pencil size={11} />
                Rename
              </button>

              <button 
                onClick={() => {
                  if (confirm("Are you sure you want to delete the active profile?")) {
                    setNotification("Active profile mappings cleared.");
                    setTimeout(() => setNotification(null), 3000);
                  }
                }}
                className="col-span-2 h-9 rounded-lg bg-[#fff5f5] border border-red-100 text-red-500 hover:bg-red-100/50 flex items-center justify-center shadow-sm transition-transform active:scale-98"
              >
                <Trash2 size={12} />
              </button>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Autofill Button */}
              <button 
                onClick={triggerAutofill}
                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all duration-300 shadow-sm ${
                  isAutofilling 
                    ? "bg-pink-50 border-pink-200 scale-[0.99]" 
                    : "bg-white border-slate-150 hover:border-pink-200 hover:bg-slate-50/40"
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-[#fff0f3] flex items-center justify-center text-[#ff477e] shrink-0">
                  <Zap size={12} className={isAutofilling ? "animate-pulse fill-[#ff477e]" : "fill-[#ff477e]"} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10.5px] font-extrabold text-slate-800 font-sans">Autofill</span>
                </div>
              </button>

              {/* Capture Button */}
              <button 
                onClick={triggerPreview}
                className="p-2.5 rounded-xl border border-slate-150 bg-white hover:border-blue-200 hover:bg-slate-50/40 flex items-center gap-2 transition-all duration-300 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#2563eb] shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10.5px] font-extrabold text-slate-800 font-sans">Capture</span>
                </div>
              </button>

              {/* Import Button */}
              <button 
                onClick={triggerImport}
                className="p-2.5 rounded-xl border border-slate-150 bg-white hover:border-purple-200 hover:bg-slate-50/40 flex items-center gap-2 transition-all duration-300 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-[#7c3aed] shrink-0">
                  <Upload size={12} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10.5px] font-extrabold text-slate-800 font-sans">Import</span>
                </div>
              </button>

              {/* Export Button */}
              <button 
                onClick={triggerExport}
                className="p-2.5 rounded-xl border border-slate-150 bg-white hover:border-orange-200 hover:bg-slate-50/40 flex items-center gap-2 transition-all duration-300 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-[#f97316] shrink-0">
                  <Download size={12} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10.5px] font-extrabold text-slate-800 font-sans">Export</span>
                </div>
              </button>
            </div>

            {/* LAST AUTOFILL ACTIVITY SUMMARY */}
            {showSummary && (
              <div className="p-3 bg-[#f8f9fa] border border-slate-200 rounded-xl shadow-sm relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-black tracking-wider text-slate-400 uppercase font-sans">
                    LAST AUTOFILL ACTIVITY SUMMARY
                  </span>
                  <button 
                    onClick={() => setShowSummary(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X size={12} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-2">
                  <div className="bg-[#eefcf3] p-1.5 rounded-lg border border-emerald-100">
                    <div className="text-xs font-black text-emerald-600 font-mono">
                      {filledCount > 0 ? filledCount : 0}
                    </div>
                    <div className="text-[8px] font-bold text-emerald-600 uppercase tracking-wide">Filled</div>
                  </div>
                  <div className="bg-[#fffbeb] p-1.5 rounded-lg border border-amber-100">
                    <div className="text-xs font-black text-amber-600 font-mono">
                      {filledCount > 0 ? skippedCount : 26}
                    </div>
                    <div className="text-[8px] font-bold text-amber-600 uppercase tracking-wide">Skipped</div>
                  </div>
                  <div className="bg-[#fff5f5] p-1.5 rounded-lg border border-rose-100">
                    <div className="text-xs font-black text-rose-500 font-mono">
                      {filledCount > 0 ? failedCount : 9}
                    </div>
                    <div className="text-[8px] font-bold text-rose-500 uppercase tracking-wide">Failed</div>
                  </div>
                </div>

                <div className="text-right">
                  <button 
                    onClick={() => setExtensionView("activity")}
                    className="text-[#ff477e] hover:underline text-[9.5px] font-extrabold font-sans"
                  >
                    View Detailed Logs
                  </button>
                </div>
              </div>
            )}

            {/* Database Products Selection */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-800 text-xs font-sans uppercase tracking-wider">
                    Database Products
                  </span>
                  <span className="bg-blue-50 text-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-extrabold shrink-0 font-sans">
                    1
                  </span>
                </div>
                <button 
                  onClick={() => setExtensionView("profiles")}
                  className="text-[#ff477e] hover:underline text-[9.5px] font-extrabold font-sans"
                >
                  View All
                </button>
              </div>

              {/* Active product item card */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-black text-slate-800 text-[11px] font-sans">
                    {activeProduct.name}
                  </span>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="bg-[#eefcf3] text-emerald-700 text-[7px] font-extrabold px-1 py-0.5 rounded uppercase tracking-wider font-sans">
                      ACTIVE PROFILE
                    </span>
                  </div>
                </div>
                <span className="text-[8.5px] text-slate-400 font-semibold font-mono mb-2 block">
                  ID: 1783059732415
                </span>

                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={triggerPreview}
                    className="flex-1 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-md text-[9px] font-bold flex items-center justify-center gap-0.5 border border-slate-200 shadow-sm transition-colors font-sans"
                  >
                    <FileText size={10} />
                    Edit Inline
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm("Clear local cache for this product profile?")) {
                        setNotification("Product local cached fields cleared.");
                        setTimeout(() => setNotification(null), 3000);
                      }
                    }}
                    className="flex-1 py-1 bg-[#fff5f5] hover:bg-[#ffe3e3] text-[#e03131] rounded-md text-[9px] font-bold flex items-center justify-center gap-0.5 border border-red-150 shadow-sm transition-colors font-sans"
                  >
                    <Trash2 size={10} />
                    Delete
                  </button>
                </div>
              </div>

              <div className="text-center p-3 rounded-lg border border-dashed border-slate-200 bg-[#f8f9fa] mt-1">
                <p className="text-[9.5px] italic text-slate-400 leading-relaxed font-sans font-medium">
                  Select a profile or capture fields to display products here.
                </p>
              </div>
            </div>
          </>
        )}

        {extensionView === "profiles" && (
          /* Image 3: Settings -> Product Profiles */
          <div className="space-y-4 animate-fade-in text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider font-sans">
                Product Profiles
              </h3>
              <button
                onClick={() => {
                  const newName = prompt("Enter Name for the New Product Profile:", "Saree Premium 003");
                  if (newName) {
                    setProfilesList(prev => [...prev, newName]);
                    setNotification(`Created profile: "${newName}" successfully!`);
                    setTimeout(() => setNotification(null), 3000);
                  }
                }}
                className="px-2.5 py-1 bg-[#b5268c] text-white hover:bg-[#9d1b76] rounded-md text-[10px] font-bold flex items-center gap-1 shadow-sm transition-colors"
              >
                <Plus size={10} strokeWidth={3} />
                New Profile
              </button>
            </div>

            <div className="space-y-2">
              {profilesList.map((name) => (
                <div 
                  key={name}
                  className={`p-3 rounded-xl border flex items-center justify-between shadow-sm transition-all ${
                    name === activeProduct.name 
                      ? "bg-indigo-50/50 border-indigo-150" 
                      : "bg-white border-slate-150"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {name === activeProduct.name && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    )}
                    <span className="text-xs font-extrabold text-slate-800 font-sans">
                      {name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => {
                        const newName = prompt("Rename profile:", name);
                        if (newName) {
                          setProfilesList(prev => prev.map(p => p === name ? newName : p));
                        }
                      }}
                      className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded"
                    >
                      <Pencil size={11} />
                    </button>
                    <button 
                      onClick={() => {
                        setProfilesList(prev => [...prev, `${name} (Copy)`]);
                        setNotification("Duplicated profile successfully!");
                        setTimeout(() => setNotification(null), 3000);
                      }}
                      className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded"
                    >
                      <Copy size={11} />
                    </button>
                    <button 
                      onClick={() => {
                        if (confirm(`Delete profile "${name}"?`)) {
                          setProfilesList(prev => prev.filter(p => p !== name));
                        }
                      }}
                      className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {extensionView === "general" && (
          /* Image 4: Settings -> General Options */
          <div className="space-y-4 animate-fade-in text-left">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider font-sans">
              General Options
            </h3>

            <div className="space-y-3.5">
              <div className="space-y-1">
                <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-wider font-sans">
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email"
                  value={generalEmail}
                  onChange={(e) => setGeneralEmail(e.target.value)}
                  className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-[#f8f9fa] focus:bg-white text-xs text-slate-800 font-semibold focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[9.5px] font-black text-slate-400 uppercase tracking-wider font-sans">
                  BUSINESS DETAILS
                </label>
                <textarea 
                  rows={3}
                  value={generalBusiness}
                  onChange={(e) => setGeneralBusiness(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-200 bg-[#f8f9fa] focus:bg-white text-xs text-slate-800 font-semibold focus:outline-none focus:border-indigo-500 transition-all resize-none shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2.5 p-1">
                <input 
                  id="skip-existing-checkbox"
                  type="checkbox"
                  checked={skipExisting}
                  onChange={(e) => setSkipExisting(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 cursor-pointer"
                />
                <label 
                  htmlFor="skip-existing-checkbox"
                  className="text-xs font-bold text-slate-600 select-none cursor-pointer"
                >
                  Skip existing fields during Auto-fill
                </label>
              </div>

              <div className="pt-2 flex gap-2">
                <button 
                  onClick={() => {
                    setNotification("Changes saved successfully!");
                    setTimeout(() => setNotification(null), 3000);
                  }}
                  className="flex-1 h-9 rounded-lg bg-[#b5268c] hover:bg-[#9d1b76] text-white text-xs font-extrabold shadow-md transition-all active:scale-98"
                >
                  Save Changes
                </button>
                <button 
                  onClick={() => {
                    if (confirm("Are you sure you want to sign out?")) {
                      setNotification("Signing out...");
                      setTimeout(() => {
                        setNotification(null);
                        setExtensionView("normal");
                      }, 2000);
                    }
                  }}
                  className="h-9 px-4 rounded-lg bg-white border border-red-200 text-red-500 hover:bg-red-50 text-xs font-extrabold shadow-sm transition-all active:scale-98"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}

        {extensionView === "activity" && (
          /* Image 5: Settings -> Activity Log */
          <div className="space-y-4 animate-fade-in text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider font-sans">
                Activity Logs
              </h3>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to clear all logs?")) {
                    setActivityLogs([]);
                    setNotification("Activity logs cleared.");
                    setTimeout(() => setNotification(null), 3000);
                  }
                }}
                className="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-md text-[9px] font-bold flex items-center gap-1 border border-red-100 shadow-sm transition-colors"
              >
                Clear Logs
              </button>
            </div>

            <div className="space-y-2">
              {activityLogs.length === 0 ? (
                <div className="text-center p-6 rounded-lg border border-dashed border-slate-200 text-slate-400 italic text-xs font-sans">
                  No activity logs recorded yet.
                </div>
              ) : (
                activityLogs.map((log, idx) => (
                  <div key={idx} className="p-3 bg-[#f8f9fa] border border-slate-200 rounded-xl shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black font-mono text-slate-500">
                        {log.time}
                      </span>
                      <ChevronDown size={12} className="text-slate-400" />
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                      <div className="bg-[#eefcf3] px-1 py-1 rounded border border-emerald-100/50">
                        <div className="text-[10.5px] font-black text-emerald-600">{log.filled}</div>
                        <div className="text-[7.5px] font-bold text-emerald-500 uppercase tracking-tight">Filled</div>
                      </div>
                      <div className="bg-[#fffbeb] px-1 py-1 rounded border border-amber-100/50">
                        <div className="text-[10.5px] font-black text-amber-600">{log.skipped}</div>
                        <div className="text-[7.5px] font-bold text-amber-500 uppercase tracking-tight">Skipped</div>
                      </div>
                      <div className="bg-[#fff5f5] px-1 py-1 rounded border border-rose-100/50">
                        <div className="text-[10.5px] font-black text-rose-500">{log.failed}</div>
                        <div className="text-[7.5px] font-bold text-rose-500 uppercase tracking-tight">Failed</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="bg-white border-t border-slate-200 p-3.5 text-center text-[10px] text-slate-400 font-sans shrink-0">
        <p className="font-bold text-slate-500 mb-1 leading-none">
          ©2026 <span className="text-[#ff477e]">CetaLyst.in</span> All right reserved
        </p>
        
        <div className="space-y-1.5 mt-2 flex flex-col items-center">
          <a 
            href="mailto:hello.cetalyst@gmail.com" 
            className="flex items-center gap-1 hover:text-slate-600 transition-colors text-[9px] font-semibold text-slate-500"
          >
            <Mail size={11} className="text-slate-400" />
            <span>hello.cetalyst@gmail.com</span>
          </a>

          <a 
            href="https://wa.me/918866814914" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-slate-600 transition-colors text-[9px] font-semibold text-slate-500 font-mono"
          >
            <Phone size={11} className="text-slate-400" />
            <span>8866814914</span>
          </a>

          <div className="flex items-center gap-2 mt-1 text-[8.5px] font-bold text-slate-400">
            <a href="https://instagram.com/cetalyst.in" target="_blank" className="hover:text-indigo-600 transition-colors">
              @cetalyst.in
            </a>
            <span>•</span>
            <a href="https://instagram.com/er.elit_47" target="_blank" className="hover:text-indigo-600 transition-colors" rel="noreferrer">
              @er.elit_47
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const animatedTexts = ["Repeating", "Typing", "Copying", "Wasting Time"];
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx((prev) => (prev + 1) % animatedTexts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const [selectedProdIdx, setSelectedProdIdx] = useState(0); // Defaults to Corset 005 like in screenshot
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAutofilling, setIsAutofilling] = useState(false);
  const [autofillProgress, setAutofillProgress] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);
  const [isFullScreenSim, setIsFullScreenSim] = useState(false);

  useEffect(() => {
    if (isFullScreenSim) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullScreenSim]);

  // Stats Counters matching the Last Autofill Activity Summary of the screenshot
  const [filledCount, setFilledCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [showSummary, setShowSummary] = useState(true);

  // New States for Settings and Activity Logs
  const [extensionView, setExtensionView] = useState<"normal" | "profiles" | "general" | "activity">("normal");
  const [profilesList, setProfilesList] = useState<string[]>([
    "Corset Top 005 - Satin/Mesh",
    "Saree Silk Premium 012",
    "Cotton Kurti Casual"
  ]);
  const [generalEmail, setGeneralEmail] = useState("hello.cetalyst@gmail.com");
  const [generalBusiness, setGeneralBusiness] = useState("We build software with location APIs and automation.");
  const [skipExisting, setSkipExisting] = useState(true);
  const [activityLogs, setActivityLogs] = useState<Array<{ time: string; filled: number; skipped: number; failed: number }>>([
    { time: "Today, 11:42 AM", filled: 35, skipped: 1, failed: 0 },
    { time: "Yesterday, 04:15 PM", filled: 28, skipped: 3, failed: 1 },
    { time: "09 Jul, 02:30 PM", filled: 42, skipped: 0, failed: 2 }
  ]);

  const activeProduct = PRODUCTS[selectedProdIdx];

  const handleScrollToVideos = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("videos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerAutofill = () => {
    if (isAutofilling) return;
    setIsAutofilling(true);
    setAutofillProgress(0);
    setFilledCount(0);
    setSkippedCount(0);
    setFailedCount(0);
    setShowSummary(true);
    setNotification("Initiating Autofill Sequence...");

    const totalFields = activeProduct.fields;
    const interval = setInterval(() => {
      setAutofillProgress((prev) => {
        const nextProgress = prev + 10;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setIsAutofilling(false);
          setFilledCount(totalFields);
          setSkippedCount(1); // Small realistic stats
          setFailedCount(0);
          setNotification(`Successfully filled ${totalFields} fields into Meesho Form!`);
          setTimeout(() => setNotification(null), 4000);

          // Add to activity logs
          const now = new Date();
          const timeStr = `Today, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
          setActivityLogs((prevLogs) => [
            { time: timeStr, filled: totalFields, skipped: 1, failed: 0 },
            ...prevLogs
          ]);

          return 100;
        }
        setFilledCount(Math.floor((nextProgress / 100) * totalFields));
        if (nextProgress > 50) {
          setSkippedCount(1);
        }
        return nextProgress;
      });
    }, 150);
  };

  const triggerPreview = () => {
    setNotification("Loading product specifications...");
    setTimeout(() => {
      setNotification(`Loaded ${activeProduct.fields} specifications cleanly!`);
      setTimeout(() => setNotification(null), 3000);
    }, 1000);
  };

  const triggerImport = () => {
    setNotification("Importing catalog configurations...");
    setTimeout(() => {
      setNotification("Catalog mapping import complete!");
      setTimeout(() => setNotification(null), 3000);
    }, 1000);
  };

  const triggerExport = () => {
    setNotification("Exporting current mappings to local system...");
    setTimeout(() => {
      setNotification("Catalog JSON specifications downloaded!");
      setTimeout(() => setNotification(null), 3000);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden cosmic-grid" id="hero-section">
      {/* Immersive Rotating Glow Gradients */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full gradient-blur-indigo opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full gradient-blur-cyan opacity-20 pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full gradient-blur-violet opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left animate-fade-in" id="hero-text-container">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-[#ff477e] animate-bounce" />
            <span className="text-xs font-semibold bg-gradient-to-r from-[#ff477e] to-[#0ea5e9] bg-clip-text text-transparent uppercase tracking-wider font-numbers">
              India's Smartest Meesho Listing Assistant
            </span>
          </motion.div>

          {/* Core Structured Headline */}
          <div className="space-y-6" id="hero-headline-wrapper">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold text-txt-p tracking-tight leading-[1.2]"
              id="hero-main-title"
            >
              <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 font-light">
                <span>Stop</span>
                <span className="relative inline-block overflow-hidden h-[1.25em] text-[#ff477e]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIdx}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 140, damping: 16 }}
                      className="inline-block select-none whitespace-nowrap"
                    >
                      {animatedTexts[textIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
              <span className="block mt-1 text-brand-indigo dark:text-brand-indigo font-bold">With CetaListing Auto-Listing Tool.</span>
            </motion.h1>

            {/* Redesigned clean bullet points - OUTSIDE the h1 element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-lg mt-6" 
              id="hero-features-list"
            >
              <div className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={14} className="text-brand-indigo group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-txt-p group-hover:text-brand-indigo transition-colors duration-300">1-Click Auto-Listing Copier</h3>
                  <p className="text-xs text-txt-m mt-0.5 leading-relaxed">Instantly copy catalog specifications and auto-fill Meesho forms</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-[#ff477e]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={14} className="text-[#ff477e] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-txt-p group-hover:text-[#ff477e] transition-colors duration-300">Smart Field Auto-Mapping</h3>
                  <p className="text-xs text-txt-m mt-0.5 leading-relaxed">Automatically maps your custom catalog attributes to Meesho's input fields & dropdowns</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Rocket size={14} className="text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-txt-p group-hover:text-emerald-500 transition-colors duration-300">Complete Form Automation</h3>
                  <p className="text-xs text-txt-m mt-0.5 leading-relaxed">Eliminate manual typing errors and list products in under 5 seconds</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-txt-s max-w-xl font-sans font-light mt-2 mb-8 leading-relaxed"
            id="hero-subtitle"
          >
            CetaListing - Meesho Automation is an advanced chrome browser auto-listing tool built for Meesho sellers. Effortlessly copy catalog parameters and inject complete product listings with a single click.
          </motion.p>

          {/* CTA Button Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            id="hero-buttons-container"
          >
            <div className="walking-border-wrapper w-full sm:w-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full px-8 py-4 rounded-[12px] text-sm font-bold bg-gradient-to-r from-[#2E3192] to-[#ff477e] hover:from-[#1F216B] hover:to-[#e03165] transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 text-white group"
                id="hero-cta-whatsapp"
              >
                <MessageSquare size={16} className="fill-white/10" />
                <span>Download Extension</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <a 
              href="#videos"
              onClick={handleScrollToVideos}
              className="px-8 py-4 rounded-xl text-sm font-semibold border border-border-subtle hover:border-[#ff477e]/30 bg-brand-card hover:bg-brand-card-hover transition-all duration-300 flex items-center justify-center gap-2.5 text-txt-s hover:text-txt-p"
              id="hero-cta-demo"
            >
              <Play size={15} className="fill-current" />
              Watch Demo
            </a>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 text-xs text-txt-m font-mono"
            id="hero-trust-bullets"
          >
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> Safe Local Storage</span>
            <span className="hidden sm:inline h-4 w-px bg-border-subtle" />
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-[#ff477e]" /> Instant Auto-Fill</span>
            <span className="hidden sm:inline h-4 w-px bg-border-subtle" />
            <span className="flex items-center gap-1.5">No Passwords Required</span>
          </motion.div>
        </div>

        {/* Right: Immersive Interactive Mock Extension Panel - Exact Replica of User's Design! */}
        <div className="lg:col-span-7 relative flex flex-col items-center justify-center" id="hero-extension-mockup-wrapper">
          {/* Glass floating backdrop decoration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff477e]/10 to-[#0ea5e9]/10 rounded-[32px] blur-3xl -z-10 animate-pulse-slow" />

          {/* Real-time Toast Notification inside Simulator */}
          <AnimatePresence>
            {notification && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-4 z-50 px-4 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-2xl flex items-center gap-2 border border-slate-700/50"
              >
                <div className="w-2 h-2 rounded-full bg-[#ff477e] animate-ping" />
                <span>{notification}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Simulated CetaListing Extension Mockup */}
          <div className="w-full max-w-[420px] neumorphic-flat p-2 sm:p-3.5 rounded-[24px] border border-border-strong/40 bg-slate-100 dark:bg-slate-900/60 transition-all duration-300 relative">
            
            {/* Header: Browser Bar simulation */}
            <div className="flex items-center justify-between px-2.5 pb-2.5 border-b border-slate-200/60 dark:border-slate-800/60 mb-2.5">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400 block" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 block" />
                <span className="w-2 h-2 rounded-full bg-green-400 block" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9.5px] text-slate-400 font-mono select-none">CetaListing Extension</span>
                <button
                  onClick={() => setIsFullScreenSim(true)}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#ff477e]/15 text-[#ff477e] hover:bg-[#ff477e]/25 text-[8.5px] font-bold transition-all border border-[#ff477e]/30 cursor-pointer animate-pulse"
                >
                  <Maximize2 size={9} />
                  <span>Go Full Screen</span>
                </button>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[7.5px] text-slate-400 font-mono">LIVE</span>
                <div className="w-1.2 h-1.2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>

            <div className="w-full flex flex-col" id="hero-single-column-view">
              {/* EXACT CETALISTING CHROME EXTENSION DESIGN OVERLAY */}
              <div className="w-full bg-white rounded-[18px] border border-slate-100 shadow-xl flex flex-col justify-between overflow-hidden relative min-h-[500px]" id="hero-extension-panel-inner">
                <ExtensionSidebar
                  activeProduct={activeProduct}
                  dropdownOpen={dropdownOpen}
                  setDropdownOpen={setDropdownOpen}
                  selectedProdIdx={selectedProdIdx}
                  setSelectedProdIdx={setSelectedProdIdx}
                  isAutofilling={isAutofilling}
                  triggerAutofill={triggerAutofill}
                  triggerPreview={triggerPreview}
                  triggerImport={triggerImport}
                  triggerExport={triggerExport}
                  filledCount={filledCount}
                  skippedCount={skippedCount}
                  failedCount={failedCount}
                  showSummary={showSummary}
                  setShowSummary={setShowSummary}
                  setNotification={setNotification}
                  setIsFullScreenSim={setIsFullScreenSim}
                  extensionView={extensionView}
                  setExtensionView={setExtensionView}
                  profilesList={profilesList}
                  setProfilesList={setProfilesList}
                  generalEmail={generalEmail}
                  setGeneralEmail={setGeneralEmail}
                  generalBusiness={generalBusiness}
                  setGeneralBusiness={setGeneralBusiness}
                  skipExisting={skipExisting}
                  setSkipExisting={setSkipExisting}
                  activityLogs={activityLogs}
                  setActivityLogs={setActivityLogs}
                />
              </div>
            </div>
          </div>

          {/* floating badges decor */}
          <motion.div 
            initial={{ x: 20, y: 10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -top-6 -right-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white border border-[#ff477e]/30 text-[11px] font-mono shadow-xl flex items-center gap-1.5 animate-float"
            id="hero-badge-speed"
          >
            <Zap size={12} className="fill-[#ff477e] text-[#ff477e]" />
            <span>1-Click Auto Fill</span>
          </motion.div>

          <motion.div 
            initial={{ x: -20, y: -10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 -left-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white border border-[#0ea5e9]/30 text-[11px] font-mono shadow-xl flex items-center gap-1.5 animate-float-delayed"
            id="hero-badge-save"
          >
            <CheckCircle2 size={12} className="text-[#0ea5e9]" />
            <span>Saves 4+ Hrs/Day</span>
          </motion.div>
        </div>
      </div>

      {/* Immersive Full Screen Interactive Simulator Modal */}
      <AnimatePresence>
        {isFullScreenSim && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#f3f4f6] text-slate-800 flex flex-col font-sans overflow-hidden select-none"
          >
            {/* Simulation Header Bar */}
            <div className="bg-[#151521] border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500 block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 block" />
                </div>
                <div className="h-5 w-px bg-slate-800" />
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                    https://supplier.meesho.com/panel/catalogs/single-upload
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 bg-slate-900/60 px-3 py-1 rounded border border-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  CetaListing Extension Connected (v1.0.4)
                </span>
                
                <button
                  onClick={() => setIsFullScreenSim(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/35 text-red-400 text-xs font-bold transition-all border border-red-500/30 cursor-pointer"
                >
                  <Minimize2 size={13} />
                  <span>Exit Full Screen</span>
                </button>
              </div>
            </div>

            {/* Immersive Sandbox Dashboard Workspace */}
            <div className="flex-1 flex overflow-hidden relative bg-[#f8f9fa]">
              
              {/* Left Side: Authentic Meesho Catalog Upload Form Workspace in Light Mode */}
              <div className="flex-1 bg-[#f8f9fa] p-5 overflow-y-auto flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 flex flex-col min-h-full justify-between text-left">
                  
                  {/* Top Header bar with Back option and Need help */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-2 text-slate-850 font-black text-base font-sans cursor-pointer">
                      <ChevronLeft size={18} className="stroke-[3]" />
                      <span>Add Single Catalog</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#ff477e] transition-colors cursor-pointer font-sans font-semibold">
                        <PlayCircle size={15} className="text-[#e11d48] fill-[#e11d48]/10" />
                        <span>Learn to upload single catalog?</span>
                      </div>
                      <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-extrabold text-slate-700 hover:bg-slate-50 transition-colors font-sans bg-white shadow-sm">
                        <Headset size={14} className="text-slate-500" />
                        <span>Need Help?</span>
                      </button>
                    </div>
                  </div>

                  {/* Step Indicators Progress line */}
                  <div className="flex items-center gap-6 bg-slate-50/50 px-4 py-2.5 rounded-xl border border-slate-150 mb-4 text-xs font-sans">
                    <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <CheckCircle2 size={15} className="text-emerald-500 fill-emerald-500/10 stroke-[2.5]" />
                      <span>Select Category</span>
                    </div>
                    <div className="h-4 w-px bg-slate-200" />
                    <div className="flex items-center gap-1.5 text-indigo-600 font-black relative pb-1">
                      <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] font-bold">2</span>
                      <span>Add Product Details</span>
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded" />
                    </div>
                  </div>

                  {/* Product tab row */}
                  <div className="flex items-center justify-between border-b border-slate-150 pb-1.5 mb-5">
                    <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
                      {/* Selected Active Product Tab */}
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-50 border-t-2 border-b-2 border-indigo-600 text-xs font-black text-indigo-700 shrink-0 shadow-sm">
                        <img 
                          src={activeProduct.images?.[0] || "https://images.unsplash.com/photo-1618220179428-22790b461013?w=80"} 
                          className="w-5 h-5 rounded object-cover border border-indigo-200" 
                          alt="Product 1"
                          referrerPolicy="no-referrer"
                        />
                        <span>Product 1</span>
                      </div>

                      {/* Add Product dotted tab */}
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-dashed border-slate-300 text-xs text-slate-500 font-bold cursor-pointer shrink-0 hover:bg-slate-50 transition-colors">
                        <Plus size={12} className="stroke-[2.5]" />
                        <span>Add Product</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-400">
                      <ChevronLeft size={18} className="cursor-pointer hover:text-slate-650" />
                      <ChevronRight size={18} className="cursor-pointer hover:text-slate-650" />
                    </div>
                  </div>

                  {/* Details forms side-by-side splitting area */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                    {/* Left main form inputs column */}
                    <div className="md:col-span-7 space-y-4">
                      <h3 className="text-sm font-black text-slate-900 font-sans">Add Product Details</h3>

                      {/* Copy specifications checked banner */}
                      <div className="p-3.5 rounded-xl bg-indigo-50/40 border border-indigo-100 text-left flex items-start gap-2.5">
                        <input 
                          type="checkbox" 
                          checked 
                          readOnly
                          className="mt-0.5 w-3.5 h-3.5 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500 accent-indigo-600 cursor-default shrink-0" 
                        />
                        <div>
                          <p className="text-xs font-black text-indigo-950 leading-tight">
                            Copy input details to all product
                          </p>
                          <p className="text-[10px] text-slate-500 leading-snug mt-1 font-semibold">
                            If you want to change specific fields for particular product like Color, Fabric etc, you can change it by selecting that product.
                          </p>
                        </div>
                      </div>

                      {/* Fields details category */}
                      <div className="border-t border-slate-100 pt-3.5 space-y-3.5">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider font-sans">
                          Product, Size and Inventory
                        </p>
                        
                        {/* GST Field */}
                        <div>
                          <label className="text-xs font-extrabold text-slate-600 flex items-center gap-1 mb-1.5">
                            <span>GST *</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[8.5px] font-black font-mono">i</span>
                          </label>
                          <div className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white flex items-center justify-between text-xs text-slate-800 shadow-sm">
                            <span className={autofillProgress >= 30 ? "font-black text-indigo-600 font-numbers" : "text-slate-400 font-medium"}>
                              {autofillProgress >= 30 ? activeProduct.gst : "0"}
                            </span>
                            <ChevronDown size={14} className="text-slate-400" />
                          </div>
                        </div>

                        {/* HSN Code Field */}
                        <div>
                          <label className="text-xs font-extrabold text-slate-600 flex items-center gap-1 mb-1.5">
                            <span>HSN Code *</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[8.5px] font-black font-mono">i</span>
                          </label>
                          <div className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white flex items-center justify-between text-xs text-slate-800 shadow-sm font-numbers">
                            <span className={autofillProgress >= 30 ? "font-black text-indigo-600" : "text-slate-400 font-medium"}>
                              {autofillProgress >= 30 ? activeProduct.hsn : "741999"}
                            </span>
                            <ChevronDown size={14} className="text-slate-400" />
                          </div>
                          <span className="text-[10px] text-indigo-600 font-black mt-1.5 block hover:underline cursor-pointer">
                            Find Relevant HSN Code &gt;
                          </span>
                        </div>

                        {/* Net Weight Field */}
                        <div>
                          <label className="text-xs font-extrabold text-slate-600 flex items-center gap-1 mb-1.5">
                            <span>Net Weight *</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[8.5px] font-black font-mono">i</span>
                          </label>
                          <div className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-white flex items-center justify-between text-xs text-slate-800 shadow-sm font-numbers">
                            <span className={autofillProgress >= 40 ? "font-black text-indigo-600" : "text-slate-400 font-medium"}>
                              {autofillProgress >= 40 ? `${activeProduct.weight} gms` : "Enter Net Weight"}
                            </span>
                            <ChevronDown size={14} className="text-slate-400" />
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Right side guidelines and image columns */}
                    <div className="md:col-span-5 space-y-4 border-l border-slate-100 pl-5">
                      
                      {/* Warnings alert header */}
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-2">
                        <span className="text-amber-500 text-xs mt-0.5 font-bold">ℹ</span>
                        <p className="text-[10px] font-bold text-amber-800 leading-snug">
                          Follow guidelines to reduce quality check failure
                        </p>
                      </div>

                      {/* Image guidelines rules */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-slate-800 font-sans">Image Guidelines</span>
                          <span className="text-[10px] text-blue-600 font-bold hover:underline cursor-pointer font-sans">View Full Image Guidelines</span>
                        </div>
                        
                        <div className="space-y-2 text-[10.5px] text-slate-500 leading-snug">
                          <div className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-[9px] text-indigo-600 font-black shrink-0 font-sans">1</span>
                            <span className="font-semibold text-slate-600">Images with text/Watermark are not acceptable in primary images.</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-[9px] text-indigo-600 font-black shrink-0 font-sans">2</span>
                            <span className="font-semibold text-slate-600">Product image should not have any text</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-[9px] text-indigo-600 font-black shrink-0 font-sans">3</span>
                            <span className="font-semibold text-slate-600">Please add solo product image without any props.</span>
                          </div>
                        </div>
                      </div>

                      {/* Uploaded images thumb grid */}
                      <div className="border-t border-slate-100 pt-3.5 space-y-2.5">
                        <span className="text-xs font-extrabold text-slate-800 block font-sans">Uploaded Images</span>
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-18 bg-slate-50 rounded-lg border border-slate-200 relative overflow-hidden text-center shadow-sm">
                            <img 
                              src={activeProduct.images?.[0] || "https://images.unsplash.com/photo-1618220179428-22790b461013?w=120"} 
                              className="w-full h-full object-cover" 
                              alt="Front Image"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[7.5px] text-white py-0.5 leading-none font-sans font-semibold">
                              Front Image *
                            </div>
                          </div>

                          <div className="w-16 h-18 rounded-lg border border-dashed border-indigo-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50/50 transition-colors bg-white shadow-sm">
                            <span className="text-indigo-600 text-lg font-bold leading-none">+</span>
                            <span className="text-[7.5px] text-indigo-600 font-black leading-none mt-1 uppercase tracking-wider">Add Images</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Form Submission controls in footer */}
                  <div className="border-t border-slate-150 pt-3.5 flex items-center justify-between text-xs font-bold mt-auto font-sans">
                    <button className="px-4 py-2 rounded-lg border border-slate-250 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm bg-white font-bold">
                      Discard Catalog
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors bg-white font-bold">
                        Save and Go Back
                      </button>
                      <button 
                        onClick={() => {
                          setNotification("Catalog Submitted to Meesho Quality Check!");
                          setTimeout(() => setNotification(null), 3000);
                        }}
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-md shadow-indigo-600/10 font-bold"
                      >
                        Submit Catalog
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Side: Complete Chrome Extension Sidebar matching attached screenshot in Light Mode */}
              <div className="w-80 md:w-90 bg-white border-l border-slate-200 flex flex-col justify-between shrink-0 text-left overflow-hidden text-slate-800">
                <ExtensionSidebar
                  isFullScreen={true}
                  activeProduct={activeProduct}
                  dropdownOpen={dropdownOpen}
                  setDropdownOpen={setDropdownOpen}
                  selectedProdIdx={selectedProdIdx}
                  setSelectedProdIdx={setSelectedProdIdx}
                  isAutofilling={isAutofilling}
                  triggerAutofill={triggerAutofill}
                  triggerPreview={triggerPreview}
                  triggerImport={triggerImport}
                  triggerExport={triggerExport}
                  filledCount={filledCount}
                  skippedCount={skippedCount}
                  failedCount={failedCount}
                  showSummary={showSummary}
                  setShowSummary={setShowSummary}
                  setNotification={setNotification}
                  setIsFullScreenSim={setIsFullScreenSim}
                  extensionView={extensionView}
                  setExtensionView={setExtensionView}
                  profilesList={profilesList}
                  setProfilesList={setProfilesList}
                  generalEmail={generalEmail}
                  setGeneralEmail={setGeneralEmail}
                  generalBusiness={generalBusiness}
                  setGeneralBusiness={setGeneralBusiness}
                  skipExisting={skipExisting}
                  setSkipExisting={setSkipExisting}
                  activityLogs={activityLogs}
                  setActivityLogs={setActivityLogs}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

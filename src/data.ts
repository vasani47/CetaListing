import { Review, FeatureItem, VideoItem, RoadmapItem, FAQItem } from "./types";

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Apex Fashion Hub",
    business: "Saree & Kurtis Wholesaler",
    rating: 5,
    text: "Pehle ek catalog banane me 15-20 minute lagte the. Ab sirf 2 minute me ho jata hai. Time bahut save hota hai."
  },
  {
    id: "r2",
    author: "Textile Commerce Co.",
    business: "Ethnic Wear Brand",
    rating: 5,
    text: "Capture feature mast hai. Ek baar mapping karo aur baad me bas ek click me pura form autofill ho jata hai."
  },
  {
    id: "r3",
    author: "Urban Garments Seller",
    business: "Western Wear Manufacturer",
    rating: 4,
    text: "Daily 70+ products list karte hain. CetaListing side panel workflow kaafi smooth ho gaya. Incredibly fast."
  },
  {
    id: "r4",
    author: "Diamond City Apparel",
    business: "Kids Wear Retailer",
    rating: 5,
    text: "Manual filling almost khatam ho gayi. Typo errors bypass ho jate hain. Productivity clearly improve hui hai."
  },
  {
    id: "r5",
    author: "Silk Route Retail",
    business: "Premium Dupattas Seller",
    rating: 5,
    text: "Mera staff pehle listing ke kaam se pareshan rehta tha, ab CetaListing se sab automatic ho gaya hai!"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "f1",
    title: "AI Capture",
    desc: "Intelligent attribute detection",
    detail: "Automatically remembers every input field, dropdown choice, and checkbox mapping during your listing flow so you never type the same thing twice.",
    badge: "Most Loved"
  },
  {
    id: "f2",
    title: "One-Click Autofill",
    desc: "Complete catalogs in 2 seconds",
    detail: "Instantly populate complex multi-variant listing forms. Sizes, measurements, fabric weight, and descriptions filled concurrently."
  },
  {
    id: "f3",
    title: "Smart Selector Engine",
    desc: "Self-healing element locator",
    detail: "Meesho updates their dashboard frequently. Our advanced selector engine maps elements dynamically so your tool never breaks.",
    badge: "Premium"
  },
  {
    id: "f4",
    title: "Product Database",
    desc: "Unlimited local templates",
    detail: "Save custom templates, sizes, and pricing tiers directly inside your secure Chrome local storage database."
  },
  {
    id: "f5",
    title: "Import / Export JSON",
    desc: "Secure backups in seconds",
    detail: "Back up your listing database, migrate profiles, or share custom templates with your listing team in a single click."
  },
  {
    id: "f6",
    title: "Skip Existing Fields",
    desc: "Safe form filling safety guards",
    detail: "Never overwrite manually filled fields. CetaListing intelligently detects fields you've already tweaked and bypasses them."
  },
  {
    id: "f7",
    title: "Lightning Fast Speed",
    desc: "Zero network lag",
    detail: "Built on high-performance native Chrome background scripts, processing multi-product sheets instantly without page freezes."
  },
  {
    id: "f8",
    title: "Modern Side Panel",
    desc: "Everything inside Chrome",
    detail: "A gorgeously designed Chrome SidePanel UI that slides out naturally next to your Meesho seller tab for uninterrupted focus."
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "How To Install CetaListing",
    duration: "1:45 Min",
    description: "Learn how to load CetaListing in Chrome Developer Mode and set up your side panel in less than 2 minutes.",
    badge: "Step 1"
  },
  {
    id: "v2",
    title: "How Autofill Works on Meesho",
    duration: "3:20 Min",
    description: "Watch a live demonstration of a seller listing a designer kurti catalog using AI Capture and 1-Click Autofill.",
    badge: "Step 2"
  },
  {
    id: "v3",
    title: "Complete Feature Walkthrough",
    duration: "5:10 Min",
    description: "Go deep into template management, CSV/JSON backups, skip-field policies, and custom selectors customization.",
    badge: "Pro Tips"
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: "rm1",
    title: "AI Image Generator",
    desc: "Generate professional eCommerce listing images using text prompts directly in the side panel.",
    status: "in-development"
  },
  {
    id: "rm2",
    title: "AI SEO Description Writer",
    desc: "Generate high-ranking, keyword-dense descriptions matching Meesho search trends.",
    status: "in-development"
  },
  {
    id: "rm3",
    title: "AI Title Generator",
    desc: "Optimize listing titles for search impressions and CTR metrics.",
    status: "in-development"
  },
  {
    id: "rm4",
    title: "AI Keyword Research",
    desc: "Instantly analyze competitor tags and suggest trending backend listing tags.",
    status: "locked"
  },
  {
    id: "rm5",
    title: "AI Category Detection",
    desc: "Auto-detect appropriate Meesho categories and tax rates from product images.",
    status: "locked"
  },
  {
    id: "rm6",
    title: "AI Price Suggestion Engine",
    desc: "Dynamic recommendations to suggest optimal selling price to maximize conversion rates.",
    status: "locked"
  },
  {
    id: "rm7",
    title: "AI Inventory & Order Sync",
    desc: "Sync stock counts automatically between multiple online sales dashboards.",
    status: "locked"
  },
  {
    id: "rm8",
    title: "Amazon & Multi-Channel Integrations",
    desc: "Complete cross-marketplace catalog copy paste and multi-form automated mapping.",
    status: "locked"
  },
  {
    id: "rm9",
    title: "Shopify Product Importer",
    desc: "Export listings from Shopify stores and import them directly as Meesho draft catalogs.",
    status: "locked"
  },
  {
    id: "rm10",
    title: "Bulk AI Listing Engine",
    desc: "Autofill and publish hundreds of products simultaneously via CSV queues.",
    status: "locked"
  },
  {
    id: "rm11",
    title: "AI Background Removal",
    desc: "One-click background clean-up to turn raw mobile photos into catalog-ready white backgrounds.",
    status: "locked"
  },
  {
    id: "rm12",
    title: "Multi-Language translation",
    desc: "Instantly translate listing details to regional Indian languages for local SEO benefits.",
    status: "locked"
  },
  {
    id: "rm13",
    title: "AI Product Video Generator",
    desc: "Turn static catalog images into stunning, engaging reels/videos with transition music.",
    status: "locked"
  },
  {
    id: "rm14",
    title: "Automatic Image Downloader",
    desc: "Extract, rename, and download original high-res catalog images in compressed zip files.",
    status: "locked"
  },
  {
    id: "rm15",
    title: "AI Listing Quality Score",
    desc: "Analyze listing health metrics, image clarity, and description depth before hitting publish.",
    status: "locked"
  },
  {
    id: "rm16",
    title: "Low Shipping AI Optimization",
    desc: "Analyze and optimize packaging sizes and weights to trigger the lowest possible shipping slab rates on Meesho.",
    status: "in-development"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "q1",
    question: "What is included in the CetaListing Lifetime plan?",
    answer: "The CetaListing Lifetime plan includes complete, permanent access to our premium features for only a single one-time payment of RS299. It includes 1-click automatic form-filling on the Meesho seller panel, smart field capture (which remembers all your category and product mappings), secure local database template management, multiple profile creation, self-healing selector engines, skip-existing-fields protection, and immediate access to free minor updates and selector hotfixes without any recurring yearly subscriptions."
  },
  {
    id: "q2",
    question: "How does CetaListing automate Meesho listings?",
    answer: "CetaListing is the best Meesho listing tool, functioning as a high-performance Chrome extension that slides out next to your supplier dashboard. It reads your product template data from local storage and automatically injects it into complex Meesho catalog forms. With 1-click auto fill, it populates sizes, measurements, fabrics, descriptions, and weights concurrently in just 2 seconds—making manual data entry completely invisible and allowing you to automate Meesho catalog uploads instantly."
  },
  {
    id: "q3",
    question: "Is CetaListing safe to use on Meesho?",
    answer: "Yes, CetaListing is fully secure and respects standard web security guidelines. Unlike web automation bots that make unauthorized background server calls, CetaListing functions solely as a local user interface assistant. It assists by automating data entry locally within your active browser tab, never requests or stores your seller account passwords, and saves all your data strictly on your own device's secure local database."
  },
  {
    id: "q4",
    question: "How does the affordable yearly subscription compare to the lifetime access?",
    answer: "Our yearly subscription is a budget-friendly option priced at RS199/year, giving you access to all premium features with annual renewals. The Lifetime plan, priced at a one-time payment of RS299, provides permanent, uninterrupted access with no recurring bills. Both plans include full Meesho listing automation, smart mapping, and free element self-healing selector patches."
  },
  {
    id: "q5",
    question: "Can I import and export product templates to other devices?",
    answer: "Yes, CetaListing features a powerful Import/Export JSON toolkit designed for listing teams and wholesalers. You can save custom product specifications locally, export them as a lightweight file, and import them on your assistant's laptop. This ensures absolute consistency across your catalog management team."
  },
  {
    id: "q6",
    question: "What is the Auto Selector Engine and how does it heal?",
    answer: "Whenever eCommerce sites change their design, old web tools tend to break. Our proprietary self-healing Auto Selector Engine uses relative structural anchors and semantic indicators rather than hardcoded CSS selectors. This allows the extension to bypass typical front-end code adjustments without failing."
  },
  {
    id: "q7",
    question: "How do I install the extension?",
    answer: "Since CetaListing is in high demand, we distribute the secure, light package directly via WhatsApp. You simply download it, extract the zip, go to chrome://extensions in your browser, turn on 'Developer Mode' (top right), click 'Load Unpacked', and choose our folder. It's fully ready in less than 2 minutes!"
  },
  {
    id: "q8",
    question: "Can I save multiple product templates?",
    answer: "Yes! You can create and save unlimited product templates and variation profiles (e.g., Saree basic specifications, Kurti material rules, Kids clothing size maps). Switch between them in the side panel instantly to load custom values."
  },
  {
    id: "q9",
    question: "What is the 'Skip Existing Fields' safety feature?",
    answer: "This is a premium safety lock. If you have already typed a unique product SKU, description, or custom price on the page, checking 'Skip Existing' ensures the autofill engine only populates empty inputs, never overwriting your custom hand-written edits."
  },
  {
    id: "q10",
    question: "Can I stop an active autofill process mid-way?",
    answer: "Absolutely! There is an emergency 'Stop Autofill' kill-switch accessible at all times at the top of the side panel UI. Clicking it halts form injection instantly."
  },
  {
    id: "q11",
    question: "Is my listing data stored on your cloud servers?",
    answer: "No. In accordance with strict data privacy guidelines, CetaListing stores all your product profiles and catalog mappings locally in your browser's secure Local Storage. Your business intelligence and product details stay entirely in your hands."
  },
  {
    id: "q12",
    question: "How do I get premium support?",
    answer: "All CetaListing users receive dedicated, personal premium support directly over WhatsApp. If you encounter a complex clothing category or custom sizes table, simply drop us a message, and our listing experts will assist you live!"
  }
];

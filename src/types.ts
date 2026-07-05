export interface Review {
  id: string;
  author: string;
  business: string;
  rating: number;
  text: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  detail: string;
  badge?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  badge: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  desc: string;
  status: "unlocked" | "locked" | "in-development";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

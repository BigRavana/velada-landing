export interface Fighter {
  id: string;
  name: string;
  nickname: string;
  country: string;
  countryCode: string;
  weight: string;
  record: {
    wins: number;
    losses: number;
    draws: number;
  };
  image: string;
  blurDataUrl: string;
  social: {
    instagram?: string;
    twitter?: string;
  };
  isMainEvent: boolean;
  color: string;
}

export interface Event {
  id: string;
  title: string;
  fighters: [string, string];
  type: "main-event" | "co-main-event" | "undercard" | "special";
  scheduledTime: string;
  status: "upcoming" | "live" | "finished";
  result?: {
    winner: string;
    method: "ko" | "decision" | "submission";
    round?: number;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
  blurDataUrl: string;
  sizes: string[];
  category: "clothing" | "accessories";
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export interface Author {
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  job_title: string | null;
  organization: string | null;
  country: string | null;
}

// Items

export interface NavigationItem {
  label: string;
  href: string;
  items?: NavigationItem[];
}

export interface ArrayItem {
  label?: string;
  description?: string;
  href?: string;
}

export interface TrustedByItem {
  logo?: string;
  label?: string;
}

export type PricingValue =
  | {
      kind: "boolean";
      value: boolean;
    }
  | {
      kind: "number";
      value: number;
    }
  | {
      kind: "string";
      value: string;
    };

export type PricingPriceValue =
  | {
      kind: "number";
      value: number;
    }
  | {
      kind: "string";
      value: string;
    };

// Single Types

export interface Home {
  id: string;
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  title?: string;
  description?: string;
  features?: ArrayItem[];
  special_modes?: ArrayItem[];
  addons?: ArrayItem[];
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface WhyPlank {
  id: string;
  title?: string;
  description?: string;
  use_cases?: ArrayItem[];
  target?: ArrayItem[];
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface TrustedBy {
  id: string;
  clients?: TrustedByItem[];
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface LegalPage {
  id: string;
  content: string;
  date?: string;
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface PricingTier {
  label: string;
  description: string;
  price: PricingPriceValue;
  sufix?: string;
}

export interface PricingRow {
  label: string;
  free: PricingValue;
  growth: PricingValue;
}

export interface Pricing {
  id: string;
  tiers: PricingTier[];
  features: PricingRow[];
  special_modes: PricingRow[];
  addons: PricingRow[];
  users: PricingRow[];
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Navigation {
  id: string;
  main_nav?: NavigationItem[];
  footer_nav?: NavigationItem[];
  status: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface GetStarted {
  id: string;
  title?: string;
  description?: string;
  command?: string;
  cta?: ArrayItem[];
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

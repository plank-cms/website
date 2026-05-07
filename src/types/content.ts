import type { PlankMedia } from "@plank-cms/client";

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

export interface ClientsItem {
  logo?: PlankMedia;
  title?: string;
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
  feat_clients: ClientsItem[];
}

export interface Product {
  id: string;
  title?: string;
  description?: string;
  features?: ArrayItem[];
  special_modes?: ArrayItem[];
  addons?: ArrayItem[];
}

export interface WhyPlank {
  id: string;
  title?: string;
  description?: string;
  use_cases?: ArrayItem[];
  target?: ArrayItem[];
}

export interface LegalPage {
  id: string;
  content: string;
  date?: string;
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
  plank_forge: PricingRow[];
  special_modes: PricingRow[];
  addons: PricingRow[];
  users: PricingRow[];
}

export interface Navigation {
  id: string;
  main_nav?: NavigationItem[];
  footer_nav?: NavigationItem[];
}

export interface GetStarted {
  id: string;
  title?: string;
  description?: string;
  command?: string;
  cta?: ArrayItem[];
}

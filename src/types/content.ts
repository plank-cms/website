export interface Author {
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  job_title: string | null;
  organization: string | null;
  country: string | null;
}

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
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface WhyPlank {
  id: string;
  status: string;
  author: Author;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface TrustedBy {
  id: string;
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

export interface NavigationItem {
  label: string;
  href: string;
  items?: NavigationItem[];
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

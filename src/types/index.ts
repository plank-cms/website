import type { SimpleIcon } from "simple-icons";
import type { CustomIcon } from "@/icons/custom";

export type BrandIconData = SimpleIcon | CustomIcon;

export type { PlankListResponse, PlankParams } from "@plank-cms/client";
export type {
  Author,
  Home,
  Product,
  WhyPlank,
  TrustedBy,
  LegalPage,
  Pricing,
  PricingRow,
  PricingValue,
  Navigation,
  NavigationItem,
} from "./content";

export interface FeatureCardProp {
  number: string;
  label: string;
  description: string;
}

export interface PricingCardProp {
  label: string;
  description: string;
  price: string | number;
  sufix?: string;
}

export interface AccordionWrapItem {
  label: string;
  content: string;
}

export interface PageDescriptionProps {
  description: string;
  variant?: "default" | "display";
}

export interface GridProps {
  class?: string;
  gap?: string;
}

export interface BrandIconProps {
  icon: BrandIconData;
  size?: number;
  "aria-label"?: string;
}

export interface LogoTileProps {
  logo: string;
  title: string;
  href?: string;
}

export type NavProps = import("./content").NavigationItem;

export interface RootLayoutProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

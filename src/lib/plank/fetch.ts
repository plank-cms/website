import type { Home, LegalPage, Navigation } from "@/types/index";
import plank from "./client";

// TTL cache

const cache = new Map<string, { data: unknown; expiresAt: number }>();

function withCache<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>,
): Promise<T> {
  const cached = cache.get(key);
  if (cached && Date.now() < cached.expiresAt)
    return Promise.resolve(cached.data as T);
  return fetcher().then((data) => {
    cache.set(key, { data, expiresAt: Date.now() + ttlMs });
    return data;
  });
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const TTL_MISC = 6 * HOUR;

type LocaleOptions = {
  locale?: string;
};

// Collections

// Single Types

async function getNavigation() {
  return withCache("single:navigation", TTL_MISC, () =>
    plank.single<Navigation>("navigation").find(),
  );
}

export async function getMainNav() {
  const navigation = await getNavigation();
  return navigation.main_nav ?? [];
}

export async function getFooterNav() {
  const navigation = await getNavigation();
  return navigation.footer_nav ?? [];
}

export async function getHome() {
  return await plank.single<Home>("home").find();
}

export async function getPrivacy() {
  return await plank.single<LegalPage>("privacy").find();
}

export async function getTerms() {
  return await plank.single<LegalPage>("terms").find();
}

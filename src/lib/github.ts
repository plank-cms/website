const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const TTL_GITHUB = 4 * HOUR;

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

type GitHubRepoResponse = {
  stargazers_count: number;
};

export async function getGithubStars() {
  const repo = import.meta.env.PUBLIC_GITHUB_REPO as string | undefined;

  if (!repo) return null;

  return withCache("github:stars", TTL_GITHUB, async () => {
    try {
      const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
      };
      const token = import.meta.env.GITHUB_TOKEN as string | undefined;
      if (token) headers.Authorization = `Bearer ${token}`;

      const response = await fetch(`https://api.github.com/repos/${repo}`, {
        headers,
      });

      if (!response.ok) return null;

      const data = (await response.json()) as GitHubRepoResponse;
      return data.stargazers_count ?? null;
    } catch {
      return null;
    }
  });
}

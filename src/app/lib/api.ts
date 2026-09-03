// Talks to the Help Center microservice (Studio5ive.Backend.TallyApp,
// services/help_center). Set VITE_API_BASE_URL / VITE_API_PREFIX in .env to
// point at a different backend (defaults to the local dev server on :1500).

import type { Article, Category } from "./types";
import { API_BASE_URL, API_PREFIX } from "./env";

class ApiError extends Error {}

async function apiFetch<T>(path: string): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${API_PREFIX}${path}`);
  } catch {
    throw new ApiError(
      `Could not reach the Help Center API at ${API_BASE_URL}. Is the backend running?`
    );
  }

  const json = await res.json().catch(() => null);

  if (!res.ok || !json || json.success === false) {
    throw new ApiError(json?.message || `Request to ${path} failed (${res.status})`);
  }

  return json.data as T;
}

function mapArticle(raw: any): Article {
  return {
    id: raw.id,
    categoryId: raw.category_id,
    slug: raw.slug,
    title: raw.title,
    description: raw.description || "",
    readTime: raw.read_time || "",
    platforms: raw.platforms ?? null,
    updatedLabel: raw.updated_label || "",
    video: raw.video ?? null,
    content: Array.isArray(raw.content) ? raw.content : [],
    relatedArticles: Array.isArray(raw.related_articles) ? raw.related_articles : [],
    isFeatured: !!raw.is_featured,
    sortOrder: raw.sort_order ?? 0,
    isActive: raw.is_active !== false,
  };
}

function mapCategory(raw: any): Category {
  return {
    id: raw.id,
    label: raw.label,
    icon: raw.icon,
    description: raw.description || "",
    color: raw.color || "#22D3EE",
    path: raw.path,
    intro: raw.intro || "",
    updatedLabel: raw.updated_label || "",
    readLabel: raw.read_label || "",
    video: raw.video ?? null,
    content: Array.isArray(raw.content) ? raw.content : [],
    sortOrder: raw.sort_order ?? 0,
    isActive: raw.is_active !== false,
    articles: Array.isArray(raw.articles) ? raw.articles.map(mapArticle) : [],
  };
}

/** Every active category with its active articles nested — one round trip,
 * used to hydrate the whole support site (nav, home, search, article pages). */
export async function fetchHelpCenterTree(): Promise<Category[]> {
  const raw = await apiFetch<any[]>("/categories/active/full");
  return raw.map(mapCategory).sort((a, b) => a.sortOrder - b.sortOrder);
}

export { ApiError };

// Write-side client for the Help Center admin UI (`/admin/...`). Sits next to
// api.ts (which is read-only and only ever fetches *active* content for the
// public site) — this file additionally fetches *inactive/draft* rows and
// performs the create/update/delete calls against the same backend service
// (Studio5ive.Backend.TallyApp, services/help_center).

import type { Article, Category } from "./types";
import { API_BASE_URL, API_PREFIX, UPLOADS_BASE_URL } from "./env";

export class ApiError extends Error {}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${API_PREFIX}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    throw new ApiError(`Could not reach the Help Center API at ${API_BASE_URL}. Is the backend running?`);
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
    icon: raw.icon || "Rocket",
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

function categoryToBody(c: Category) {
  return {
    id: c.id,
    label: c.label,
    icon: c.icon,
    description: c.description,
    color: c.color,
    path: c.path,
    intro: c.intro,
    updated_label: c.updatedLabel,
    read_label: c.readLabel,
    video: c.video,
    content: c.content,
    sort_order: c.sortOrder,
    is_active: c.isActive,
  };
}

function articleToBody(a: Article) {
  return {
    id: a.id,
    category_id: a.categoryId,
    slug: a.slug,
    title: a.title,
    description: a.description,
    read_time: a.readTime,
    platforms: a.platforms,
    updated_label: a.updatedLabel,
    video: a.video,
    content: a.content,
    related_articles: a.relatedArticles,
    is_featured: a.isFeatured,
    sort_order: a.sortOrder,
    is_active: a.isActive,
  };
}

// ─── Categories ──────────────────────────────────────────────────────────

/** All categories (active + inactive), for the admin list. */
export async function adminFetchCategories(): Promise<Category[]> {
  const raw = await request<any[]>("/categories");
  return raw.map(mapCategory);
}

export async function adminFetchCategory(id: string): Promise<Category> {
  const raw = await request<any>(`/categories/${encodeURIComponent(id)}`);
  return mapCategory(raw);
}

export async function adminCreateCategory(category: Category): Promise<Category> {
  const raw = await request<any>("/categories", {
    method: "POST",
    body: JSON.stringify(categoryToBody(category)),
  });
  return mapCategory(raw);
}

export async function adminUpdateCategory(id: string, category: Category): Promise<Category> {
  const raw = await request<any>(`/categories/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(categoryToBody(category)),
  });
  return mapCategory(raw);
}

export async function adminDeleteCategory(id: string): Promise<void> {
  await request<void>(`/categories/${encodeURIComponent(id)}`, { method: "DELETE" });
}

// ─── Articles ────────────────────────────────────────────────────────────

/** All articles (active + inactive), optionally scoped to one category. */
export async function adminFetchArticles(categoryId?: string): Promise<Article[]> {
  const qs = categoryId ? `?categoryId=${encodeURIComponent(categoryId)}` : "";
  const raw = await request<any[]>(`/articles${qs}`);
  return raw.map(mapArticle);
}

export async function adminFetchArticle(id: string): Promise<Article> {
  const raw = await request<any>(`/articles/id/${encodeURIComponent(id)}`);
  return mapArticle(raw);
}

export async function adminCreateArticle(article: Article): Promise<Article> {
  const raw = await request<any>("/articles", {
    method: "POST",
    body: JSON.stringify(articleToBody(article)),
  });
  return mapArticle(raw);
}

export async function adminUpdateArticle(id: string, article: Article): Promise<Article> {
  const raw = await request<any>(`/articles/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(articleToBody(article)),
  });
  return mapArticle(raw);
}

export async function adminDeleteArticle(id: string): Promise<void> {
  await request<void>(`/articles/${encodeURIComponent(id)}`, { method: "DELETE" });
}

// ─── Uploads ─────────────────────────────────────────────────────────────

export interface UploadedImage {
  key: string;
  url: string;
  filename: string;
}

export async function adminUploadImage(file: File): Promise<UploadedImage> {
  const formData = new FormData();
  formData.append("image", file);

  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${API_PREFIX}/uploads`, { method: "POST", body: formData });
  } catch {
    throw new ApiError(`Could not reach the Help Center API at ${API_BASE_URL}. Is the backend running?`);
  }

  const json = await res.json().catch(() => null);

  if (!res.ok || !json || json.success === false) {
    throw new ApiError(json?.message || `Upload failed (${res.status})`);
  }

  const { key, filename } = json.data as UploadedImage;
  return { key, filename, url: `${UPLOADS_BASE_URL}/${key}` };
}

// Single source of truth for this app's runtime config. Both api.ts
// (read-only, public site) and adminApi.ts (admin CRUD) import from here
// instead of each redeclaring their own copies. Backed by .env — see
// .env.example for what each variable does and its default.

export const API_BASE_URL = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) || "http://localhost:1500"
).replace(/\/$/, "");

export const API_PREFIX = (import.meta.env.VITE_API_PREFIX as string | undefined) || "/v1/help-center";

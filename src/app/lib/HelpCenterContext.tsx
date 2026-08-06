import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { fetchHelpCenterTree } from "./api";
import type { Article, Category } from "./types";

export interface FlatArticle extends Article {
  categoryLabel: string;
  categoryColor: string;
  categoryPath: string;
}

interface HelpCenterContextValue {
  categories: Category[];
  flatArticles: FlatArticle[];
  featuredArticles: FlatArticle[];
  loading: boolean;
  error: string | null;
  getCategoryById: (id: string) => Category | undefined;
  getArticle: (categoryId: string, slug: string) => Article | undefined;
  reload: () => void;
}

const HelpCenterContext = createContext<HelpCenterContextValue | null>(null);

export function HelpCenterProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetchHelpCenterTree()
      .then((data) => {
        if (!cancelled) setCategories(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load the Help Center.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  const flatArticles = useMemo<FlatArticle[]>(
    () =>
      categories.flatMap((c) =>
        c.articles.map((a) => ({
          ...a,
          categoryLabel: c.label,
          categoryColor: c.color,
          categoryPath: c.path,
        }))
      ),
    [categories]
  );

  const featuredArticles = useMemo(
    () => flatArticles.filter((a) => a.isFeatured),
    [flatArticles]
  );

  const getCategoryById = useCallback((id: string) => categories.find((c) => c.id === id), [categories]);

  const getArticle = useCallback(
    (categoryId: string, slug: string) => getCategoryById(categoryId)?.articles.find((a) => a.slug === slug),
    [getCategoryById]
  );

  const reload = useCallback(() => setReloadToken((t) => t + 1), []);

  const value: HelpCenterContextValue = {
    categories,
    flatArticles,
    featuredArticles,
    loading,
    error,
    getCategoryById,
    getArticle,
    reload,
  };

  return <HelpCenterContext.Provider value={value}>{children}</HelpCenterContext.Provider>;
}

export function useHelpCenter() {
  const ctx = useContext(HelpCenterContext);
  if (!ctx) throw new Error("useHelpCenter must be used within a HelpCenterProvider");
  return ctx;
}

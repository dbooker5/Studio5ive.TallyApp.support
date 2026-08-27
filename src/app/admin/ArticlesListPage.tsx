import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Pencil, Plus, Star } from "lucide-react";
import type { Article, Category } from "../lib/types";
import { adminDeleteArticle, adminFetchArticles, adminFetchCategories, ApiError } from "../lib/adminApi";
import { Button, IconButton, RemoveButton, Select } from "./components/form";

export default function ArticlesListPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("");

  function load() {
    setLoading(true);
    setError(null);
    Promise.all([adminFetchCategories(), adminFetchArticles()])
      .then(([cats, arts]) => {
        setCategories(cats);
        setArticles(arts);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load articles."))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  const categoryById = useMemo(() => new Map(categories.map((c) => [c.id, c])), [categories]);

  const visibleArticles = useMemo(
    () => (categoryFilter ? articles.filter((a) => a.categoryId === categoryFilter) : articles),
    [articles, categoryFilter]
  );

  async function handleDelete(article: Article) {
    if (!window.confirm(`Delete article "${article.title}"?`)) return;

    setDeletingId(article.id);
    try {
      await adminDeleteArticle(article.id);
      setArticles((prev) => prev.filter((a) => a.id !== article.id));
    } catch (err) {
      window.alert(err instanceof ApiError ? err.message : "Failed to delete article.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-3">
        <div>
          <h1 className="text-xl font-semibold text-white">Articles</h1>
          <p className="text-sm text-[#A1A1AA] mt-0.5">
            {visibleArticles.length} article{visibleArticles.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="!w-auto"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </Select>
          <Link to="/admin/articles/new">
            <Button variant="primary" icon={Plus}>
              New article
            </Button>
          </Link>
        </div>
      </div>

      {loading && <p className="text-sm text-[#A1A1AA]">Loading…</p>}
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 text-red-300 text-sm px-4 py-3">
          {error}
        </div>
      )}

      {!loading && !error && visibleArticles.length === 0 && (
        <div className="rounded-xl border border-dashed border-[#27272A] px-6 py-12 text-center">
          <p className="text-[#A1A1AA] text-sm">No articles yet.</p>
        </div>
      )}

      {!loading && visibleArticles.length > 0 && (
        <div className="rounded-xl border border-[#27272A] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#111111] text-left text-[#71717A] text-xs uppercase tracking-wide">
                <th className="px-4 py-2.5 font-medium">Article</th>
                <th className="px-4 py-2.5 font-medium">Category</th>
                <th className="px-4 py-2.5 font-medium">Order</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium w-20" />
              </tr>
            </thead>
            <tbody>
              {visibleArticles.map((article) => {
                const cat = categoryById.get(article.categoryId);
                return (
                  <tr key={article.id} className="border-t border-[#27272A] hover:bg-[#111111]/60 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {article.isFeatured && (
                          <Star size={13} className="text-[#22D3EE] flex-shrink-0" fill="currentColor" />
                        )}
                        <div>
                          <div className="text-white font-medium">{article.title}</div>
                          <div className="text-[#71717A] text-xs">{article.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {cat ? (
                        <span className="inline-flex items-center gap-1.5 text-[#A1A1AA]">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[#71717A]">{article.categoryId}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[#A1A1AA]">{article.sortOrder}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs ${
                          article.isActive ? "bg-emerald-500/10 text-emerald-300" : "bg-[#27272A] text-[#71717A]"
                        }`}
                      >
                        {article.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link to={`/admin/articles/${article.id}/edit`}>
                          <IconButton icon={Pencil} aria-label="Edit" />
                        </Link>
                        <RemoveButton onClick={() => handleDelete(article)} disabled={deletingId === article.id} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

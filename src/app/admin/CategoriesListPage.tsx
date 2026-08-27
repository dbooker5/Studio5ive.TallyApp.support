import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Pencil, Plus } from "lucide-react";
import type { Article, Category } from "../lib/types";
import { adminDeleteCategory, adminFetchArticles, adminFetchCategories, ApiError } from "../lib/adminApi";
import { Button, IconButton, RemoveButton } from "./components/form";

export default function CategoriesListPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function load() {
    setLoading(true);
    setError(null);
    Promise.all([adminFetchCategories(), adminFetchArticles()])
      .then(([cats, arts]) => {
        setCategories(cats);
        setArticles(arts);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load categories."))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  const articleCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const a of articles) counts.set(a.categoryId, (counts.get(a.categoryId) || 0) + 1);
    return counts;
  }, [articles]);

  async function handleDelete(cat: Category) {
    const count = articleCounts.get(cat.id) || 0;
    const warning = count > 0 ? ` This will also delete its ${count} article${count === 1 ? "" : "s"}.` : "";
    if (!window.confirm(`Delete category "${cat.label}"?${warning}`)) return;

    setDeletingId(cat.id);
    try {
      await adminDeleteCategory(cat.id);
      setCategories((prev) => prev.filter((c) => c.id !== cat.id));
    } catch (err) {
      window.alert(err instanceof ApiError ? err.message : "Failed to delete category.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-white">Categories</h1>
          <p className="text-sm text-[#A1A1AA] mt-0.5">
            {categories.length} categor{categories.length === 1 ? "y" : "ies"}
          </p>
        </div>
        <Link to="/admin/categories/new">
          <Button variant="primary" icon={Plus}>
            New category
          </Button>
        </Link>
      </div>

      {loading && <p className="text-sm text-[#A1A1AA]">Loading…</p>}
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 text-red-300 text-sm px-4 py-3">
          {error}
        </div>
      )}

      {!loading && !error && categories.length === 0 && (
        <div className="rounded-xl border border-dashed border-[#27272A] px-6 py-12 text-center">
          <p className="text-[#A1A1AA] text-sm">No categories yet.</p>
        </div>
      )}

      {!loading && categories.length > 0 && (
        <div className="rounded-xl border border-[#27272A] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#111111] text-left text-[#71717A] text-xs uppercase tracking-wide">
                <th className="px-4 py-2.5 font-medium">Category</th>
                <th className="px-4 py-2.5 font-medium">Path</th>
                <th className="px-4 py-2.5 font-medium">Articles</th>
                <th className="px-4 py-2.5 font-medium">Order</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium w-20" />
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id} className="border-t border-[#27272A] hover:bg-[#111111]/60 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                      <div>
                        <div className="text-white font-medium">{cat.label}</div>
                        <div className="text-[#71717A] text-xs">{cat.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#A1A1AA] font-mono text-xs">{cat.path}</td>
                  <td className="px-4 py-3 text-[#A1A1AA]">{articleCounts.get(cat.id) || 0}</td>
                  <td className="px-4 py-3 text-[#A1A1AA]">{cat.sortOrder}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs ${
                        cat.isActive ? "bg-emerald-500/10 text-emerald-300" : "bg-[#27272A] text-[#71717A]"
                      }`}
                    >
                      {cat.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link to={`/admin/categories/${cat.id}/edit`}>
                        <IconButton icon={Pencil} aria-label="Edit" />
                      </Link>
                      <RemoveButton onClick={() => handleDelete(cat)} disabled={deletingId === cat.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { ArrowLeft, Plus } from "lucide-react";
import type { Article, Category, RelatedArticleRef } from "../lib/types";
import {
  adminCreateArticle,
  adminFetchArticle,
  adminFetchCategories,
  adminUpdateArticle,
  ApiError,
} from "../lib/adminApi";
import { Button, Card, Field, RemoveButton, SectionTitle, Select, TextArea, TextInput, Toggle } from "./components/form";
import { BlockEditor } from "./components/BlockEditor";

const PLATFORM_OPTIONS = ["mobile", "desktop", "android", "ios", "windows", "mac"];

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function emptyArticle(categoryId: string): Article {
  return {
    id: "",
    categoryId,
    slug: "",
    title: "",
    description: "",
    readTime: "",
    platforms: null,
    updatedLabel: "",
    video: null,
    content: [],
    relatedArticles: [],
    isFeatured: false,
    sortOrder: 0,
    isActive: true,
  };
}

export default function ArticleFormPage() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [article, setArticle] = useState<Article>(emptyArticle(""));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [idTouched, setIdTouched] = useState(isEdit);
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [hasVideo, setHasVideo] = useState(false);
  const [restrictPlatforms, setRestrictPlatforms] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([adminFetchCategories(), id ? adminFetchArticle(id) : Promise.resolve(null)])
      .then(([cats, existing]) => {
        setCategories(cats);
        if (existing) {
          setArticle(existing);
          setHasVideo(!!existing.video);
          setRestrictPlatforms(existing.platforms !== null);
        } else if (cats.length > 0) {
          setArticle(emptyArticle(cats[0].id));
        }
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load article."))
      .finally(() => setLoading(false));
  }, [id]);

  function handleTitleChange(title: string) {
    setArticle((prev) => ({
      ...prev,
      title,
      id: idTouched ? prev.id : slugify(title),
      slug: slugTouched ? prev.slug : slugify(title),
    }));
  }

  function updateRelated(index: number, patch: Partial<RelatedArticleRef>) {
    setArticle((prev) => ({
      ...prev,
      relatedArticles: prev.relatedArticles.map((r, i) => (i === index ? { ...r, ...patch } : r)),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      if (isEdit) {
        await adminUpdateArticle(id!, article);
      } else {
        await adminCreateArticle(article);
      }
      navigate("/admin/articles");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to save article.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-sm text-[#A1A1AA]">Loading…</p>;

  if (!isEdit && categories.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#27272A] px-6 py-12 text-center">
        <p className="text-[#A1A1AA] text-sm mb-3">You need at least one category before creating an article.</p>
        <Link to="/admin/categories/new">
          <Button variant="primary" icon={Plus}>
            New category
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/admin/articles" className="inline-flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-white transition-colors mb-4">
        <ArrowLeft size={14} />
        Back to articles
      </Link>

      <h1 className="text-xl font-semibold text-white mb-6">{isEdit ? "Edit article" : "New article"}</h1>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 text-red-300 text-sm px-4 py-3 mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 pb-24">
        <Card className="p-4 space-y-4">
          <SectionTitle>Basics</SectionTitle>

          <Field label="Title" required>
            <TextInput required value={article.title} onChange={(e) => handleTitleChange(e.target.value)} />
          </Field>

          <Field label="Category" required>
            <Select
              required
              disabled={isEdit}
              value={article.categoryId}
              onChange={(e) => setArticle((prev) => ({ ...prev, categoryId: e.target.value }))}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </Select>
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="ID" required hint={isEdit ? "Can't be changed after creation" : "Auto-filled from title, editable"}>
              <TextInput
                required
                disabled={isEdit}
                value={article.id}
                onChange={(e) => {
                  setIdTouched(true);
                  setArticle((prev) => ({ ...prev, id: e.target.value }));
                }}
              />
            </Field>
            <Field label="Slug" required hint="Unique within its category">
              <TextInput
                required
                value={article.slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setArticle((prev) => ({ ...prev, slug: e.target.value }));
                }}
              />
            </Field>
          </div>

          <Field label="Description" hint="Short summary shown in lists and search results">
            <TextArea rows={2} value={article.description} onChange={(e) => setArticle((prev) => ({ ...prev, description: e.target.value }))} />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Read time" hint='e.g. "4 min"'>
              <TextInput value={article.readTime} onChange={(e) => setArticle((prev) => ({ ...prev, readTime: e.target.value }))} />
            </Field>
            <Field label="Updated label" hint='e.g. "Updated Jan 2026"'>
              <TextInput value={article.updatedLabel} onChange={(e) => setArticle((prev) => ({ ...prev, updatedLabel: e.target.value }))} />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Sort order">
              <TextInput
                type="number"
                value={article.sortOrder}
                onChange={(e) => setArticle((prev) => ({ ...prev, sortOrder: Number(e.target.value) }))}
              />
            </Field>
            <div className="flex items-end gap-5 pb-2">
              <Toggle checked={article.isActive} onChange={(v) => setArticle((prev) => ({ ...prev, isActive: v }))} label="Active" />
              <Toggle checked={article.isFeatured} onChange={(v) => setArticle((prev) => ({ ...prev, isFeatured: v }))} label="Featured" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#A1A1AA]">Platforms</span>
              <Toggle
                checked={restrictPlatforms}
                onChange={(v) => {
                  setRestrictPlatforms(v);
                  setArticle((prev) => ({ ...prev, platforms: v ? [] : null }));
                }}
                label={restrictPlatforms ? "Restricted" : "All platforms"}
              />
            </div>
            {restrictPlatforms && (
              <div className="flex flex-wrap gap-3">
                {PLATFORM_OPTIONS.map((p) => {
                  const checked = article.platforms?.includes(p) ?? false;
                  return (
                    <label key={p} className="flex items-center gap-1.5 text-sm text-[#A1A1AA]">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) =>
                          setArticle((prev) => ({
                            ...prev,
                            platforms: e.target.checked
                              ? [...(prev.platforms || []), p]
                              : (prev.platforms || []).filter((x) => x !== p),
                          }))
                        }
                        className="rounded border-[#27272A] bg-[#111111] text-[#22D3EE] focus:ring-[#22D3EE]"
                      />
                      {p}
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle hint="Optional video shown at the top of the article">Video</SectionTitle>
            <Toggle
              checked={hasVideo}
              onChange={(v) => {
                setHasVideo(v);
                setArticle((prev) => ({ ...prev, video: v ? prev.video || { title: "" } : null }));
              }}
            />
          </div>
          {hasVideo && article.video && (
            <div className="grid sm:grid-cols-3 gap-4">
              <Field label="Title" required>
                <TextInput
                  required
                  value={article.video.title}
                  onChange={(e) => setArticle((prev) => ({ ...prev, video: { ...prev.video!, title: e.target.value } }))}
                />
              </Field>
              <Field label="Subtitle">
                <TextInput
                  value={article.video.subtitle || ""}
                  onChange={(e) => setArticle((prev) => ({ ...prev, video: { ...prev.video!, subtitle: e.target.value } }))}
                />
              </Field>
              <Field label="Duration" hint='e.g. "3:24"'>
                <TextInput
                  value={article.video.duration || ""}
                  onChange={(e) => setArticle((prev) => ({ ...prev, video: { ...prev.video!, duration: e.target.value } }))}
                />
              </Field>
            </div>
          )}
        </Card>

        <Card className="p-4">
          <SectionTitle hint="Rendered on the article page, in order">Content</SectionTitle>
          <BlockEditor blocks={article.content} onChange={(content) => setArticle((prev) => ({ ...prev, content }))} />
        </Card>

        <Card className="p-4 space-y-3">
          <SectionTitle hint="Free-form links shown in the 'Related articles' section — not validated against real articles">
            Related articles
          </SectionTitle>
          {article.relatedArticles.map((rel, i) => (
            <div key={i} className="rounded-lg border border-[#27272A] bg-[#0a0a0a] p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#71717A]">Link {i + 1}</span>
                <RemoveButton
                  onClick={() =>
                    setArticle((prev) => ({
                      ...prev,
                      relatedArticles: prev.relatedArticles.filter((_, idx) => idx !== i),
                    }))
                  }
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                <TextInput placeholder="Title" value={rel.title} onChange={(e) => updateRelated(i, { title: e.target.value })} />
                <TextInput placeholder="Path, e.g. /sales/refunds" value={rel.path} onChange={(e) => updateRelated(i, { path: e.target.value })} />
                <TextInput placeholder="Description" value={rel.description} onChange={(e) => updateRelated(i, { description: e.target.value })} />
                <TextInput placeholder="Read time, e.g. 3 min" value={rel.readTime} onChange={(e) => updateRelated(i, { readTime: e.target.value })} />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setArticle((prev) => ({
                ...prev,
                relatedArticles: [...prev.relatedArticles, { title: "", description: "", path: "", readTime: "" }],
              }))
            }
            className="inline-flex items-center gap-1.5 text-xs text-[#22D3EE] hover:text-[#67e3f4] transition-colors"
          >
            <Plus size={13} />
            Add related article
          </button>
        </Card>

        <div className="fixed bottom-0 left-0 right-0 lg:left-56 border-t border-[#27272A] bg-black/90 backdrop-blur px-4 sm:px-6 py-3 flex items-center justify-end gap-2">
          <Link to="/admin/articles">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? "Saving…" : isEdit ? "Save changes" : "Create article"}
          </Button>
        </div>
      </form>
    </div>
  );
}

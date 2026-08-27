import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import type { Category } from "../lib/types";
import { adminCreateCategory, adminFetchCategory, adminUpdateCategory, ApiError } from "../lib/adminApi";
import { Button, Card, Field, SectionTitle, Select, TextArea, TextInput, Toggle } from "./components/form";
import { BlockEditor } from "./components/BlockEditor";

const ICON_OPTIONS = [
  "Rocket",
  "User",
  "ShoppingCart",
  "Package",
  "Boxes",
  "Users",
  "Truck",
  "BarChart2",
  "CreditCard",
  "Settings",
  "Wrench",
];

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function emptyCategory(): Category {
  return {
    id: "",
    label: "",
    icon: "Rocket",
    description: "",
    color: "#22D3EE",
    path: "",
    intro: "",
    updatedLabel: "",
    readLabel: "",
    video: null,
    content: [],
    sortOrder: 0,
    isActive: true,
    articles: [],
  };
}

export default function CategoryFormPage() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [category, setCategory] = useState<Category>(emptyCategory());
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [idTouched, setIdTouched] = useState(isEdit);
  const [pathTouched, setPathTouched] = useState(isEdit);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    adminFetchCategory(id)
      .then((c) => {
        setCategory(c);
        setHasVideo(!!c.video);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load category."))
      .finally(() => setLoading(false));
  }, [id]);

  function handleLabelChange(label: string) {
    setCategory((prev) => ({
      ...prev,
      label,
      id: idTouched ? prev.id : slugify(label),
      path: pathTouched ? prev.path : `/${slugify(label)}`,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      if (isEdit) {
        await adminUpdateCategory(id!, category);
      } else {
        await adminCreateCategory(category);
      }
      navigate("/admin/categories");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to save category.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-sm text-[#A1A1AA]">Loading…</p>;

  return (
    <div>
      <Link to="/admin/categories" className="inline-flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-white transition-colors mb-4">
        <ArrowLeft size={14} />
        Back to categories
      </Link>

      <h1 className="text-xl font-semibold text-white mb-6">{isEdit ? "Edit category" : "New category"}</h1>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 text-red-300 text-sm px-4 py-3 mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 pb-24">
        <Card className="p-4 space-y-4">
          <SectionTitle>Basics</SectionTitle>

          <Field label="Label" required hint="Shown as the category name across the site">
            <TextInput
              required
              value={category.label}
              onChange={(e) => handleLabelChange(e.target.value)}
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="ID" required hint={isEdit ? "Can't be changed after creation" : "Auto-filled from label, editable"}>
              <TextInput
                required
                disabled={isEdit}
                value={category.id}
                onChange={(e) => {
                  setIdTouched(true);
                  setCategory((prev) => ({ ...prev, id: e.target.value }));
                }}
              />
            </Field>
            <Field label="Path" required hint="URL path on the support site, e.g. /sales">
              <TextInput
                required
                value={category.path}
                onChange={(e) => {
                  setPathTouched(true);
                  setCategory((prev) => ({ ...prev, path: e.target.value }));
                }}
              />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Icon">
              <Select value={category.icon} onChange={(e) => setCategory((prev) => ({ ...prev, icon: e.target.value }))}>
                {ICON_OPTIONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Color">
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={category.color}
                  onChange={(e) => setCategory((prev) => ({ ...prev, color: e.target.value }))}
                  className="h-9 w-10 flex-shrink-0 rounded-lg border border-[#27272A] bg-[#111111] cursor-pointer"
                />
                <TextInput
                  value={category.color}
                  onChange={(e) => setCategory((prev) => ({ ...prev, color: e.target.value }))}
                />
              </div>
            </Field>
          </div>

          <Field label="Description" hint="Short line shown on category cards">
            <TextArea rows={2} value={category.description} onChange={(e) => setCategory((prev) => ({ ...prev, description: e.target.value }))} />
          </Field>

          <Field label="Intro" hint="Longer intro shown at the top of the category page">
            <TextArea rows={3} value={category.intro} onChange={(e) => setCategory((prev) => ({ ...prev, intro: e.target.value }))} />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Updated label" hint='e.g. "Updated Jan 2026"'>
              <TextInput value={category.updatedLabel} onChange={(e) => setCategory((prev) => ({ ...prev, updatedLabel: e.target.value }))} />
            </Field>
            <Field label="Read label" hint='e.g. "5 min read"'>
              <TextInput value={category.readLabel} onChange={(e) => setCategory((prev) => ({ ...prev, readLabel: e.target.value }))} />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Sort order">
              <TextInput
                type="number"
                value={category.sortOrder}
                onChange={(e) => setCategory((prev) => ({ ...prev, sortOrder: Number(e.target.value) }))}
              />
            </Field>
            <div className="flex items-end pb-2">
              <Toggle checked={category.isActive} onChange={(v) => setCategory((prev) => ({ ...prev, isActive: v }))} label="Active (visible on the public site)" />
            </div>
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle hint="Optional video shown on the category page">Video</SectionTitle>
            <Toggle
              checked={hasVideo}
              onChange={(v) => {
                setHasVideo(v);
                setCategory((prev) => ({ ...prev, video: v ? prev.video || { title: "" } : null }));
              }}
            />
          </div>
          {hasVideo && category.video && (
            <div className="grid sm:grid-cols-3 gap-4">
              <Field label="Title" required>
                <TextInput
                  required
                  value={category.video.title}
                  onChange={(e) => setCategory((prev) => ({ ...prev, video: { ...prev.video!, title: e.target.value } }))}
                />
              </Field>
              <Field label="Subtitle">
                <TextInput
                  value={category.video.subtitle || ""}
                  onChange={(e) => setCategory((prev) => ({ ...prev, video: { ...prev.video!, subtitle: e.target.value } }))}
                />
              </Field>
              <Field label="Duration" hint='e.g. "3:24"'>
                <TextInput
                  value={category.video.duration || ""}
                  onChange={(e) => setCategory((prev) => ({ ...prev, video: { ...prev.video!, duration: e.target.value } }))}
                />
              </Field>
            </div>
          )}
        </Card>

        <Card className="p-4">
          <SectionTitle hint="Rendered on the category landing page, in order">Content</SectionTitle>
          <BlockEditor blocks={category.content} onChange={(content) => setCategory((prev) => ({ ...prev, content }))} />
        </Card>

        <div className="fixed bottom-0 left-0 right-0 lg:left-56 border-t border-[#27272A] bg-black/90 backdrop-blur px-4 sm:px-6 py-3 flex items-center justify-end gap-2">
          <Link to="/admin/categories">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? "Saving…" : isEdit ? "Save changes" : "Create category"}
          </Button>
        </div>
      </form>
    </div>
  );
}

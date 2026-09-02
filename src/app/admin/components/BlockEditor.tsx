import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Plus, Upload } from "lucide-react";
import type { Block, FeatureItem, PlatformTab, ScreenshotItem, StepItem } from "../../lib/types";
import { assetMap, resolveAsset } from "../../lib/assetMap";
import { adminUploadImage, ApiError } from "../../lib/adminApi";
import { Button, Field, IconButton, RemoveButton, Select, TextArea, TextInput } from "./form";

const BLOCK_LABELS: Record<Block["type"], string> = {
  paragraph: "Paragraph",
  heading: "Heading",
  steps: "Steps",
  bulletList: "Bullet list",
  note: "Note",
  screenshot: "Screenshot",
  screenshotGrid: "Screenshot grid",
  featureGrid: "Feature grid",
  cta: "Call to action",
  panel: "Panel",
  platformTabs: "Platform tabs",
};

function defaultBlock(type: Block["type"]): Block {
  switch (type) {
    case "paragraph":
      return { type, text: "" };
    case "heading":
      return { type, level: 2, text: "" };
    case "steps":
      return { type, items: [{ title: "", body: "" }] };
    case "bulletList":
      return { type, items: [""] };
    case "note":
      return { type, variant: "info", text: "" };
    case "screenshot":
      return { type, src: "", alt: "", caption: "" };
    case "screenshotGrid":
      return { type, items: [{ src: "", alt: "", caption: "" }] };
    case "featureGrid":
      return { type, items: [{ title: "", description: "" }] };
    case "cta":
      return { type, title: "", description: "" };
    case "panel":
      return { type, title: "", blocks: [] };
    case "platformTabs":
      return { type, tabs: [{ platform: "mobile", blocks: [] }] };
  }
}

export function BlockEditor({
  blocks,
  onChange,
  depth = 0,
}: {
  blocks: Block[];
  onChange: (blocks: Block[]) => void;
  depth?: number;
}) {
  function update(i: number, block: Block) {
    const next = [...blocks];
    next[i] = block;
    onChange(next);
  }
  function remove(i: number) {
    onChange(blocks.filter((_, idx) => idx !== i));
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= blocks.length) return;
    const next = [...blocks];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  return (
    <div className="space-y-2.5">
      {blocks.map((block, i) => (
        <BlockCard
          key={i}
          block={block}
          depth={depth}
          onChange={(b) => update(i, b)}
          onRemove={() => remove(i)}
          onMoveUp={i > 0 ? () => move(i, -1) : undefined}
          onMoveDown={i < blocks.length - 1 ? () => move(i, 1) : undefined}
        />
      ))}

      {blocks.length === 0 && (
        <p className="text-xs text-[#71717A] italic py-1">No blocks yet — add one below.</p>
      )}

      <Select
        value=""
        onChange={(e) => {
          const type = e.target.value as Block["type"];
          if (type) onChange([...blocks, defaultBlock(type)]);
        }}
        className="!w-auto text-xs py-1.5"
      >
        <option value="">+ Add block…</option>
        {(Object.keys(BLOCK_LABELS) as Block["type"][]).map((type) => (
          <option key={type} value={type}>
            {BLOCK_LABELS[type]}
          </option>
        ))}
      </Select>
    </div>
  );
}

function BlockCard({
  block,
  depth,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  block: Block;
  depth: number;
  onChange: (block: Block) => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}) {
  return (
    <div
      className={`rounded-lg border border-[#27272A] ${depth > 0 ? "bg-[#0a0a0a]" : "bg-[#161616]"}`}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#27272A]">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#22D3EE]">
          {BLOCK_LABELS[block.type]}
        </span>
        <div className="flex items-center gap-0.5">
          <IconButton icon={ChevronUp} onClick={onMoveUp} disabled={!onMoveUp} aria-label="Move up" />
          <IconButton icon={ChevronDown} onClick={onMoveDown} disabled={!onMoveDown} aria-label="Move down" />
          <RemoveButton onClick={onRemove} />
        </div>
      </div>
      <div className="p-3">
        <BlockBody block={block} onChange={onChange} depth={depth} />
      </div>
    </div>
  );
}

function BlockBody({
  block,
  onChange,
  depth,
}: {
  block: Block;
  onChange: (block: Block) => void;
  depth: number;
}) {
  switch (block.type) {
    case "paragraph":
      return (
        <Field label="Text" hint="Supports **bold** and [label](url)">
          <TextArea rows={3} value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
        </Field>
      );

    case "heading":
      return (
        <div className="grid grid-cols-[80px_1fr] gap-3">
          <Field label="Level">
            <Select
              value={block.level}
              onChange={(e) => onChange({ ...block, level: Number(e.target.value) as 2 | 3 })}
            >
              <option value={2}>H2</option>
              <option value={3}>H3</option>
            </Select>
          </Field>
          <Field label="Text">
            <TextInput value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
          </Field>
        </div>
      );

    case "steps":
      return (
        <StepsList
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
        />
      );

    case "bulletList":
      return (
        <StringList
          items={block.items}
          placeholder="List item"
          onChange={(items) => onChange({ ...block, items })}
        />
      );

    case "note":
      return (
        <div className="space-y-3">
          <Field label="Variant">
            <Select
              value={block.variant}
              onChange={(e) => onChange({ ...block, variant: e.target.value as typeof block.variant })}
            >
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="success">Success</option>
            </Select>
          </Field>
          <Field label="Text" hint="Supports **bold** and [label](url)">
            <TextArea rows={2} value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
          </Field>
        </div>
      );

    case "screenshot":
      return (
        <ScreenshotFields
          value={block}
          onChange={(v) => onChange({ ...block, ...v })}
        />
      );

    case "screenshotGrid":
      return (
        <ScreenshotGridList
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
        />
      );

    case "featureGrid":
      return (
        <FeatureGridList
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
        />
      );

    case "cta":
      return (
        <div className="space-y-3">
          <Field label="Title">
            <TextInput value={block.title} onChange={(e) => onChange({ ...block, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={2} value={block.description} onChange={(e) => onChange({ ...block, description: e.target.value })} />
          </Field>
        </div>
      );

    case "panel":
      return (
        <div className="space-y-3">
          <Field label="Title" hint="Optional">
            <TextInput
              value={block.title || ""}
              onChange={(e) => onChange({ ...block, title: e.target.value })}
            />
          </Field>
          <Field label="Contents">
            <BlockEditor blocks={block.blocks} onChange={(blocks) => onChange({ ...block, blocks })} depth={depth + 1} />
          </Field>
        </div>
      );

    case "platformTabs":
      return <PlatformTabsList tabs={block.tabs} depth={depth} onChange={(tabs) => onChange({ ...block, tabs })} />;

    default:
      return null;
  }
}

// ─── Repeatable sub-editors ────────────────────────────────────────────────

function StepsList({ items, onChange }: { items: StepItem[]; onChange: (items: StepItem[]) => void }) {
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-[#27272A] bg-[#0a0a0a] p-2.5 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] text-[#71717A]">Step {i + 1}</span>
            <RemoveButton onClick={() => onChange(items.filter((_, idx) => idx !== i))} />
          </div>
          <TextInput
            placeholder="Step title"
            value={item.title}
            onChange={(e) => onChange(items.map((it, idx) => (idx === i ? { ...it, title: e.target.value } : it)))}
          />
          <TextArea
            rows={2}
            placeholder="Step body"
            value={item.body}
            onChange={(e) => onChange(items.map((it, idx) => (idx === i ? { ...it, body: e.target.value } : it)))}
          />
          <ScreenshotFields
            value={item.screenshot ?? { src: "", alt: "", caption: "" }}
            onChange={(screenshot) =>
              onChange(items.map((it, idx) => (idx === i ? { ...it, screenshot } : it)))
            }
          />
        </div>
      ))}
      <AddRowButton onClick={() => onChange([...items, { title: "", body: "" }])}>Add step</AddRowButton>
    </div>
  );
}

function StringList({
  items,
  placeholder,
  onChange,
}: {
  items: string[];
  placeholder?: string;
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <TextInput
            placeholder={placeholder}
            value={item}
            onChange={(e) => onChange(items.map((it, idx) => (idx === i ? e.target.value : it)))}
          />
          <RemoveButton onClick={() => onChange(items.filter((_, idx) => idx !== i))} />
        </div>
      ))}
      <AddRowButton onClick={() => onChange([...items, ""])}>Add item</AddRowButton>
    </div>
  );
}

function ScreenshotFields({
  value,
  onChange,
}: {
  value: { src: string; alt: string; caption: string };
  onChange: (v: { src: string; alt: string; caption: string }) => void;
}) {
  const knownKeys = Object.keys(assetMap);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    try {
      const uploaded = await adminUploadImage(file);
      onChange({ ...value, src: uploaded.url });
    } catch (err) {
      setUploadError(err instanceof ApiError ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-3">
      <Field label="Image" hint="Uploads to the backend's uploads/help-center folder">
        <div className="flex items-start gap-3">
          {value.src && (
            <img
              src={resolveAsset(value.src)}
              alt=""
              className="w-14 h-14 rounded-lg object-cover border border-[#27272A] flex-shrink-0 bg-[#0a0a0a]"
            />
          )}
          <div className="flex-1 space-y-2 min-w-0">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="secondary"
                icon={Upload}
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? "Uploading…" : "Upload image"}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelected}
                className="hidden"
              />
            </div>
            <TextInput
              placeholder="Or paste a URL / asset key"
              value={value.src}
              onChange={(e) => onChange({ ...value, src: e.target.value })}
            />
            {knownKeys.length > 0 && (
              <Select
                value={knownKeys.includes(value.src) ? value.src : ""}
                onChange={(e) => {
                  if (e.target.value) onChange({ ...value, src: e.target.value });
                }}
                className="text-xs py-1.5"
              >
                <option value="">…or pick an existing bundled asset</option>
                {knownKeys.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </Select>
            )}
            {uploadError && <p className="text-xs text-red-400">{uploadError}</p>}
          </div>
        </div>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Alt text">
          <TextInput value={value.alt} onChange={(e) => onChange({ ...value, alt: e.target.value })} />
        </Field>
        <Field label="Caption">
          <TextInput value={value.caption} onChange={(e) => onChange({ ...value, caption: e.target.value })} />
        </Field>
      </div>
    </div>
  );
}

function ScreenshotGridList({
  items,
  onChange,
}: {
  items: ScreenshotItem[];
  onChange: (items: ScreenshotItem[]) => void;
}) {
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-[#27272A] bg-[#0a0a0a] p-2.5 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] text-[#71717A]">Image {i + 1}</span>
            <RemoveButton onClick={() => onChange(items.filter((_, idx) => idx !== i))} />
          </div>
          <ScreenshotFields
            value={item}
            onChange={(v) => onChange(items.map((it, idx) => (idx === i ? v : it)))}
          />
        </div>
      ))}
      <AddRowButton onClick={() => onChange([...items, { src: "", alt: "", caption: "" }])}>
        Add image
      </AddRowButton>
    </div>
  );
}

function FeatureGridList({
  items,
  onChange,
}: {
  items: FeatureItem[];
  onChange: (items: FeatureItem[]) => void;
}) {
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-[#27272A] bg-[#0a0a0a] p-2.5 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] text-[#71717A]">Feature {i + 1}</span>
            <RemoveButton onClick={() => onChange(items.filter((_, idx) => idx !== i))} />
          </div>
          <TextInput
            placeholder="Title"
            value={item.title}
            onChange={(e) => onChange(items.map((it, idx) => (idx === i ? { ...it, title: e.target.value } : it)))}
          />
          <TextArea
            rows={2}
            placeholder="Description"
            value={item.description}
            onChange={(e) =>
              onChange(items.map((it, idx) => (idx === i ? { ...it, description: e.target.value } : it)))
            }
          />
        </div>
      ))}
      <AddRowButton onClick={() => onChange([...items, { title: "", description: "" }])}>
        Add feature
      </AddRowButton>
    </div>
  );
}

const PLATFORM_SUGGESTIONS = ["mobile", "desktop", "android", "ios", "windows", "mac"];

function PlatformTabsList({
  tabs,
  depth,
  onChange,
}: {
  tabs: PlatformTab[];
  depth: number;
  onChange: (tabs: PlatformTab[]) => void;
}) {
  return (
    <div className="space-y-2.5">
      <datalist id="platform-suggestions">
        {PLATFORM_SUGGESTIONS.map((p) => (
          <option key={p} value={p} />
        ))}
      </datalist>
      {tabs.map((tab, i) => (
        <div key={i} className="rounded-lg border border-[#27272A] bg-[#0a0a0a] p-2.5 space-y-2.5">
          <div className="flex items-center gap-2">
            <TextInput
              list="platform-suggestions"
              placeholder="Platform (e.g. android)"
              value={tab.platform}
              onChange={(e) =>
                onChange(tabs.map((t, idx) => (idx === i ? { ...t, platform: e.target.value } : t)))
              }
              className="!w-auto flex-1"
            />
            <RemoveButton onClick={() => onChange(tabs.filter((_, idx) => idx !== i))} />
          </div>
          <BlockEditor
            blocks={tab.blocks}
            depth={depth + 1}
            onChange={(blocks) => onChange(tabs.map((t, idx) => (idx === i ? { ...t, blocks } : t)))}
          />
        </div>
      ))}
      <AddRowButton onClick={() => onChange([...tabs, { platform: "mobile", blocks: [] }])}>
        Add tab
      </AddRowButton>
    </div>
  );
}

function AddRowButton({ onClick, children }: { onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-xs text-[#22D3EE] hover:text-[#67e3f4] transition-colors"
    >
      <Plus size={13} />
      {children}
    </button>
  );
}
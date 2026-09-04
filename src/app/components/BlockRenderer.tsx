import { AlertCircle, CheckCircle2, CircleCheckBig, Monitor, Smartphone, ZoomIn } from "lucide-react";
import { FaAndroid, FaApple, FaWindows, FaLaptop } from "react-icons/fa";
import type { ReactNode } from "react";
import type { Block, NoteVariant, ScreenshotItem } from "../lib/types";
import { renderInline } from "../lib/inlineMarkdown";
import { resolveAsset } from "../lib/assetMap";
import { useGallery } from "../lib/GalleryContext";
import ArticleTabs from "./ArticleTabs";

/** One screenshot as a full <figure> — frame, image, caption — that opens
 * the shared lightbox (at this image's position in the article/category's
 * full image sequence) on click. Falls back to non-clickable if rendered
 * outside a GalleryProvider, or if this image isn't in its list. Used by
 * `Step`'s inline screenshot, standalone `screenshot` blocks, and every item
 * of a `screenshotGrid` — the three places a screenshot can appear. */
function ScreenshotFigure({
  src,
  alt,
  caption,
  maxWidthClass,
  centered = true,
}: {
  src: string;
  alt: string;
  caption: string;
  maxWidthClass: string;
  /** Step's inline screenshot sits left-aligned under its step text, like
   * the original markup did; standalone/grid screenshots stay centered. */
  centered?: boolean;
}) {
  const gallery = useGallery();
  const index = gallery ? gallery.indexOf({ src, alt, caption }) : -1;
  const clickable = index !== -1;
  const alignClass = centered ? "mx-auto" : "";

  return (
    <figure>
      <div
        className={`group relative ${alignClass} ${maxWidthClass} rounded-2xl border border-[#27272A] bg-[#111111] p-2 shadow-2xl shadow-black/30 ${clickable ? "cursor-zoom-in transition-colors hover:border-[#22D3EE]/50" : ""}`}
        onClick={clickable ? () => gallery!.openAt(index) : undefined}
        role={clickable ? "button" : undefined}
        aria-label={clickable ? `View "${alt}" full size` : undefined}
      >
        <img src={resolveAsset(src)} alt={alt} loading="lazy" className="h-auto w-full rounded-xl" />
        {clickable && (
          <span className="pointer-events-none absolute inset-2 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
            <ZoomIn size={22} className="text-white drop-shadow" />
          </span>
        )}
      </div>
      {caption && (
        <figcaption
          className={`${alignClass} mt-3 ${centered ? "max-w-xl text-center" : maxWidthClass} text-xs leading-relaxed text-[#71717A]`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const NOTE_STYLES: Record<NoteVariant, string> = {
  info: "border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#cef9ff]",
  warning: "border-amber-500/30 bg-amber-500/5 text-amber-200",
  success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-200",
};

function NoteIcon({ variant }: { variant: NoteVariant }) {
  if (variant === "success") {
    return <CircleCheckBig size={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />;
  }
  return (
    <AlertCircle
      size={16}
      className={`mt-0.5 flex-shrink-0 ${variant === "warning" ? "text-amber-400" : "text-[#22D3EE]"}`}
    />
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  const size = 14;
  switch (platform.toLowerCase()) {
    case "android":
      return <FaAndroid size={size} />;
    case "ios":
      return <FaApple size={size} />;
    case "windows":
      return <FaWindows size={size} />;
    case "mac":
    case "macos":
      return <FaLaptop size={size} />;
    case "desktop":
      return <Monitor size={size} />;
    case "mobile":
    default:
      return <Smartphone size={size} />;
  }
}

function Step({
  n,
  title,
  screenshot,
  children,
}: {
  n: number;
  title: string;
  screenshot?: ScreenshotItem;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex gap-4">
      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/15 text-xs font-bold text-[#22D3EE]">
        {n}
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-[15px] font-semibold text-white">{title}</p>
        <div className="text-sm leading-relaxed text-[#A1A1AA]">{children}</div>
        {screenshot && screenshot.src && (
          <div className="mt-3">
            <ScreenshotFigure
              src={screenshot.src}
              alt={screenshot.alt}
              caption={screenshot.caption}
              maxWidthClass="max-w-[340px]"
              centered={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/** Renders an ordered list of content Blocks. Used for the top-level article
 * body as well as recursively inside `panel` and `platformTabs` blocks. */
export default function BlockRenderer({ blocks }: { blocks: Block[] | undefined | null }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => (
        <BlockItem key={index} block={block} />
      ))}
    </>
  );
}

function BlockItem({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-4">{renderInline(block.text)}</p>;

    case "heading":
      return block.level === 3 ? (
        <h3 className="text-white text-lg font-semibold mb-3 mt-6">{block.text}</h3>
      ) : (
        <h2 className="text-white text-xl font-semibold mb-4 mt-8">{block.text}</h2>
      );

    case "steps":
      return (
        <div className="mb-2">
          {block.items.map((item, i) => (
            <Step key={i} n={i + 1} title={item.title} screenshot={item.screenshot}>
              {renderInline(item.body)}
            </Step>
          ))}
        </div>
      );

    case "bulletList":
      return (
        <ul className="my-3 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#A1A1AA]">
              <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-[#22D3EE]" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div className={`my-4 flex gap-3 rounded-xl border p-4 ${NOTE_STYLES[block.variant]}`}>
          <NoteIcon variant={block.variant} />
          <div className="text-sm leading-relaxed">{renderInline(block.text)}</div>
        </div>
      );

    case "screenshot":
      return (
        <div className="my-6">
          <ScreenshotFigure src={block.src} alt={block.alt} caption={block.caption} maxWidthClass="max-w-[400px]" />
        </div>
      );

    case "screenshotGrid":
      return (
        <div className="grid items-start gap-5 sm:grid-cols-2 my-6">
          {block.items.map((item, i) => (
            <ScreenshotFigure key={i} src={item.src} alt={item.alt} caption={item.caption} maxWidthClass="max-w-[380px]" />
          ))}
        </div>
      );

    case "featureGrid":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {block.items.map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-[#27272A] bg-[#111111]/50">
              <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
              <p className="text-[#A1A1AA] text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      );

    case "cta":
      return (
        <div className="my-6 p-5 rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/5 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold mb-1">{block.title}</h3>
            <p className="text-[#A1A1AA] text-sm">{block.description}</p>
          </div>
        </div>
      );

    case "panel":
      return (
        <div className="my-6 p-4 rounded-xl bg-[#111111] border border-[#27272A]">
          {block.title && <p className="text-white text-sm font-semibold mb-3">{block.title}</p>}
          <BlockRenderer blocks={block.blocks} />
        </div>
      );

    case "platformTabs":
      return (
        <ArticleTabs
          tabs={block.tabs.map((tab) => ({
            platform: tab.platform,
            icon: <PlatformIcon platform={tab.platform} />,
            content: <BlockRenderer blocks={tab.blocks} />,
          }))}
        />
      );

    default:
      return null;
  }
}
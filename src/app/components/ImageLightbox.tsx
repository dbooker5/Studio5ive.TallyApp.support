import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../lib/gallery";
import { resolveAsset } from "../lib/assetMap";

interface ImageLightboxProps {
  images: GalleryImage[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Full-screen viewer for an article/category's screenshots. Opened at
 * whichever image was clicked; prev/next page through every screenshot in
 * the content, in document order (see collectGalleryImages), so a run of
 * per-step screenshots reads as one sequence rather than isolated pop-ups. */
export default function ImageLightbox({ images, openIndex, onClose, onNavigate }: ImageLightboxProps) {
  const isOpen = openIndex !== null;
  const hasPrev = isOpen && openIndex! > 0;
  const hasNext = isOpen && openIndex! < images.length - 1;

  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(openIndex! - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(openIndex! + 1);
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, openIndex, hasPrev, hasNext, onClose, onNavigate]);

  if (!isOpen) return null;

  const image = images[openIndex!];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-white/50 tabular-nums">
          {openIndex! + 1} / {images.length}
        </span>
      )}

      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(openIndex! - 1);
          }}
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/15 transition-colors"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(openIndex! + 1);
          }}
          aria-label="Next image"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/15 transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      )}

      <img
        src={resolveAsset(image.src)}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl shadow-black/50"
      />

      {image.caption && (
        <p className="mt-4 max-w-xl text-center text-sm text-white/70 px-4" onClick={(e) => e.stopPropagation()}>
          {image.caption}
        </p>
      )}
    </div>
  );
}

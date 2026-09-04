import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Block } from "./types";
import { collectGalleryImages, type GalleryImage } from "./gallery";
import ImageLightbox from "../components/ImageLightbox";

interface GalleryContextValue {
  /** Index of `image` (matched by src+caption) within this content's
   * flattened image list, or -1 if it isn't part of it. */
  indexOf: (image: GalleryImage) => number;
  openAt: (index: number) => void;
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

/** Wrap a `<BlockRenderer blocks={...} />` tree with this (same `blocks`
 * prop) to make every screenshot in it clickable, opening a lightbox that
 * pages through all of them in document order. Renders the lightbox itself,
 * so it only needs mounting once per page. */
export function GalleryProvider({ blocks, children }: { blocks: Block[] | undefined | null; children: ReactNode }) {
  const images = useMemo(() => collectGalleryImages(blocks), [blocks]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const indexOf = (image: GalleryImage) =>
    images.findIndex((img) => img.src === image.src && img.caption === image.caption);

  return (
    <GalleryContext.Provider value={{ indexOf, openAt: setOpenIndex }}>
      {children}
      <ImageLightbox images={images} openIndex={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </GalleryContext.Provider>
  );
}

/** Nullable on purpose — BlockRenderer is also used in places (if any) that
 * aren't wrapped in a GalleryProvider; screenshots there just render as
 * plain, non-clickable images instead of throwing. */
export function useGallery() {
  return useContext(GalleryContext);
}

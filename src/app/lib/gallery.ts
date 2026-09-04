// Flattens every image referenced anywhere in a Block tree — standalone
// `screenshot` blocks, each item of a `screenshotGrid`, and each step's
// optional inline screenshot — into one ordered list, walked in the same
// order BlockRenderer renders them (including recursion into `panel` and
// `platformTabs`). Powers the click-to-enlarge lightbox: clicking any image
// opens this list at that image's index, so "next/prev" pages through every
// screenshot in the article in reading order, not just the ones in the same
// block.

import type { Block } from "./types";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export function collectGalleryImages(blocks: Block[] | undefined | null): GalleryImage[] {
  if (!blocks) return [];

  const images: GalleryImage[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case "steps":
        for (const item of block.items) {
          if (item.screenshot?.src) images.push({ ...item.screenshot });
        }
        break;

      case "screenshot":
        images.push({ src: block.src, alt: block.alt, caption: block.caption });
        break;

      case "screenshotGrid":
        for (const item of block.items) images.push({ ...item });
        break;

      case "panel":
        images.push(...collectGalleryImages(block.blocks));
        break;

      case "platformTabs":
        for (const tab of block.tabs) images.push(...collectGalleryImages(tab.blocks));
        break;
    }
  }

  return images;
}

// Shared types for the dynamic Help Center data model. Mirrors the block
// schema documented in the backend at
// Studio5ive.Backend.TallyApp/services/help_center/README.md.

export type NoteVariant = "info" | "warning" | "success";

export interface StepItem {
  title: string;
  body: string;
}

export interface ScreenshotItem {
  src: string;
  alt: string;
  caption: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface PlatformTab {
  platform: string;
  blocks: Block[];
}

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "steps"; items: StepItem[] }
  | { type: "bulletList"; items: string[] }
  | { type: "note"; variant: NoteVariant; text: string }
  | { type: "screenshot"; src: string; alt: string; caption: string }
  | { type: "screenshotGrid"; items: ScreenshotItem[] }
  | { type: "featureGrid"; items: FeatureItem[] }
  | { type: "cta"; title: string; description: string }
  | { type: "panel"; title?: string; blocks: Block[] }
  | { type: "platformTabs"; tabs: PlatformTab[] };

export interface VideoInfo {
  title: string;
  subtitle?: string;
  duration?: string;
}

export interface RelatedArticleRef {
  title: string;
  description: string;
  path: string;
  readTime: string;
}

export interface Article {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
  description: string;
  readTime: string;
  platforms: string[] | null;
  updatedLabel: string;
  video: VideoInfo | null;
  content: Block[];
  relatedArticles: RelatedArticleRef[];
  isFeatured: boolean;
  sortOrder: number;
  isActive: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  path: string;
  intro: string;
  updatedLabel: string;
  readLabel: string;
  video: VideoInfo | null;
  content: Block[];
  sortOrder: number;
  isActive: boolean;
  articles: Article[];
}

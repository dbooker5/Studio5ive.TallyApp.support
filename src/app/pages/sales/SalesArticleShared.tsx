import type { ReactNode } from "react";
import {
  AlertCircle,
  CheckCircle2,
  CircleCheckBig,
  Monitor,
  Smartphone,
} from "lucide-react";

import Breadcrumb from "../../components/Breadcrumb";
import ArticleTabs from "../../components/ArticleTabs";
import VideoGuide from "../../components/VideoGuide";
import RelatedArticles from "../../components/RelatedArticles";
import HelpFooter from "../../components/HelpFooter";

export type RelatedArticle = {
  title: string;
  description: string;
  path: string;
  readTime: string;
};

type NoteType = "info" | "warning" | "success";

export function Note({
  type = "info",
  children,
}: {
  type?: NoteType;
  children: ReactNode;
}) {
  const styles: Record<NoteType, string> = {
    info: "border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#cef9ff]",
    warning: "border-amber-500/30 bg-amber-500/5 text-amber-200",
    success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-200",
  };

  const icon =
    type === "success" ? (
      <CircleCheckBig
        size={16}
        className="mt-0.5 flex-shrink-0 text-emerald-400"
      />
    ) : (
      <AlertCircle
        size={16}
        className={`mt-0.5 flex-shrink-0 ${
          type === "warning" ? "text-amber-400" : "text-[#22D3EE]"
        }`}
      />
    );

  return (
    <div className={`my-4 flex gap-3 rounded-xl border p-4 ${styles[type]}`}>
      {icon}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex gap-4">
      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/15 text-xs font-bold text-[#22D3EE]">
        {n}
      </div>

      <div className="min-w-0">
        <p className="mb-1 text-[15px] font-semibold text-white">{title}</p>
        <div className="text-sm leading-relaxed text-[#A1A1AA]">
          {children}
        </div>
      </div>
    </div>
  );
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-3 space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#A1A1AA]"
        >
          <CheckCircle2
            size={14}
            className="mt-0.5 flex-shrink-0 text-[#22D3EE]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-6">
      <div className="mx-auto max-w-[340px] rounded-2xl border border-[#27272A] bg-[#111111] p-2 shadow-2xl shadow-black/30">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-auto w-full rounded-xl"
        />
      </div>

      <figcaption className="mx-auto mt-3 max-w-xl text-center text-xs leading-relaxed text-[#71717A]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function ScreenshotGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid items-start gap-5 sm:grid-cols-2">{children}</div>
  );
}

export function DesktopNotice({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div>
      <Note>
        The desktop version follows the same sales flow and uses the same
        fields. Button placement may be wider because of the larger screen.
        Desktop screenshots can be added here later without changing the
        instructions.
      </Note>
      {children}
    </div>
  );
}

type SalesArticleShellProps = {
  title: string;
  description: string;
  readTime: string;
  videoTitle: string;
  videoSubtitle: string;
  videoDuration?: string;
  mobileContent: ReactNode;
  desktopContent: ReactNode;
  relatedArticles: RelatedArticle[];
};

export function SalesArticleShell({
  title,
  description,
  readTime,
  videoTitle,
  videoSubtitle,
  videoDuration = "2:30",
  mobileContent,
  desktopContent,
  relatedArticles,
}: SalesArticleShellProps) {
  const tabs = [
    {
      platform: "Mobile",
      icon: <Smartphone size={14} />,
      content: mobileContent,
    },
    {
      platform: "Desktop",
      icon: <Monitor size={14} />,
      content: desktopContent,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
      <Breadcrumb items={[{ label: "Sales" }, { label: title }]} />

      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs text-[#A1A1AA]">Updated July 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">{readTime} read</span>
      </div>

      <h1 className="mb-2 text-3xl font-bold leading-tight text-white">
        {title}
      </h1>

      <p className="mb-6 text-[15px] leading-relaxed text-[#A1A1AA]">
        {description}
      </p>

      <VideoGuide
        title={videoTitle}
        subtitle={videoSubtitle}
        duration={videoDuration}
      />

      <ArticleTabs tabs={tabs} />

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

export const salesRelatedArticles: RelatedArticle[] = [
  {
    title: "Sales Overview",
    description:
      "Understand today's sales totals, balances, profit and items sold.",
    path: "/sales/overview",
    readTime: "4 min",
  },
  {
    title: "Selecting Products",
    description:
      "Add multiple products, edit quantities and review the total amount.",
    path: "/sales/select-products",
    readTime: "6 min",
  },
  {
    title: "Choosing Payment Methods",
    description:
      "Accept one payment method or split payment across several methods.",
    path: "/sales/payment-methods",
    readTime: "5 min",
  },
  {
    title: "Completing a Sale",
    description:
      "Understand completed and incomplete payment confirmation screens.",
    path: "/sales/payment-status",
    readTime: "5 min",
  },
];

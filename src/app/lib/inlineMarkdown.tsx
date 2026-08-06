import type { ReactNode } from "react";

// Very small markdown-lite parser for block `text`/`body` fields:
//   **bold**        -> <strong>
//   [label](url)     -> <a>
// Kept intentionally minimal (no dangerouslySetInnerHTML anywhere) since
// this content will eventually be editable through the Help Center CRUD API.
const INLINE_PATTERN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

export function renderInline(text: string | undefined | null, keyPrefix = "i"): ReactNode {
  if (!text) return null;

  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let count = 0;
  let match: RegExpExecArray | null;

  INLINE_PATTERN.lastIndex = 0;
  while ((match = INLINE_PATTERN.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-${count++}`} className="text-white font-semibold">
          {match[1]}
        </strong>
      );
    } else {
      const label = match[2];
      const href = match[3];
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={`${keyPrefix}-${count++}`}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#22D3EE] hover:underline"
        >
          {label}
        </a>
      );
    }

    lastIndex = INLINE_PATTERN.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return nodes;
}

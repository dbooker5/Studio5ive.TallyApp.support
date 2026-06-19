import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

interface RelatedArticle {
  title: string;
  description: string;
  path: string;
  readTime: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  const navigate = useNavigate();

  if (!articles.length) return null;

  return (
    <div className="mt-10 border-t border-[#27272A] pt-8">
      <h3 className="text-white text-base font-semibold mb-4">Related Articles</h3>
      <div className="flex flex-col gap-2">
        {articles.map((a, i) => (
          <button
            key={i}
            className="group flex items-start gap-3 p-4 rounded-xl border border-[#27272A] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-left"
            onClick={() => navigate(a.path)}
          >
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium group-hover:text-[#22D3EE] transition-colors truncate">{a.title}</p>
              <p className="text-[#A1A1AA] text-xs mt-0.5 line-clamp-1">{a.description}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
              <span className="text-[#A1A1AA] text-xs">{a.readTime}</span>
              <ArrowRight size={14} className="text-[#A1A1AA] group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

import { useLocation, useNavigate } from "react-router";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import BlockRenderer from "../components/BlockRenderer";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";
import { useHelpCenter } from "../lib/HelpCenterContext";
import { GalleryProvider } from "../lib/GalleryContext";

/** Dynamic category landing page — driven entirely by data fetched from the
 * Help Center API. Replaces the old hardcoded ArticlePage.tsx / GetStarted.tsx
 * / Sales.tsx trio, which each hand-wrote the same layout for one category. */
export default function CategoryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { categories, getCategoryById, loading, error } = useHelpCenter();
  const categoryId = location.pathname.replace(/^\//, "").split("/")[0];
  const cat = getCategoryById(categoryId);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-[#A1A1AA] text-sm">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-[#A1A1AA] text-sm">{error}</p>
      </div>
    );
  }

  if (!cat) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-[#A1A1AA]">Category not found.</p>
      </div>
    );
  }

  const related = categories
    .filter((c) => c.id !== categoryId && c.articles.length > 0)
    .slice(0, 3)
    .map((c) => ({
      title: c.articles[0].title,
      description: c.articles[0].description,
      path: `${c.path}/${c.articles[0].slug}`,
      readTime: c.articles[0].readTime,
    }));

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: cat.label }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">{cat.updatedLabel}</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">{cat.readLabel}</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-3 leading-tight">{cat.label}</h1>

      {cat.intro && <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-8">{cat.intro}</p>}

      {cat.video && (
        <VideoGuide title={cat.video.title} subtitle={cat.video.subtitle} duration={cat.video.duration} />
      )}

      <GalleryProvider blocks={cat.content}>
        <BlockRenderer blocks={cat.content} />
      </GalleryProvider>

      {cat.articles.length > 0 && (
        <div className="mt-10 border-t border-[#27272A] pt-8">
          <h3 className="text-white text-base font-semibold mb-4">Articles in this section</h3>
          <div className="space-y-2">
            {cat.articles.map((article) => (
              <button
                key={article.id}
                className="group w-full flex items-center gap-3 p-3.5 rounded-xl border border-[#27272A] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-left"
                onClick={() => navigate(`${cat.path}/${article.slug}`)}
              >
                <CheckCircle2 size={14} className="text-[#22D3EE] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium group-hover:text-[#22D3EE] transition-colors">{article.title}</p>
                  <p className="text-[#A1A1AA] text-xs mt-0.5 truncate">{article.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[#A1A1AA] text-xs">{article.readTime}</span>
                  <ArrowRight size={13} className="text-[#A1A1AA] group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <RelatedArticles articles={related} />
      <HelpFooter />
    </div>
  );
}

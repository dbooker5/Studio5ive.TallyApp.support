import { useLocation } from "react-router";
import { Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import BlockRenderer from "../components/BlockRenderer";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";
import { useHelpCenter } from "../lib/HelpCenterContext";

/** Dynamic article page — driven entirely by data fetched from the Help
 * Center API. Replaces the ~50 hand-written *Article.tsx pages that used to
 * exist, one per article, each duplicating the same layout. */
export default function ArticleDetailPage() {
  const location = useLocation();
  const { getCategoryById, getArticle, loading, error } = useHelpCenter();

  const segments = location.pathname.replace(/^\//, "").split("/");
  const categoryId = segments[0];
  const slug = segments[1];

  const cat = getCategoryById(categoryId);
  const article = getArticle(categoryId, slug);

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

  if (!cat || !article) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-[#A1A1AA]">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: cat.label, path: cat.path }, { label: article.title }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">{article.updatedLabel}</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">{article.readTime} read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">{article.title}</h1>

      {article.video && (
        <VideoGuide title={article.video.title} subtitle={article.video.subtitle} duration={article.video.duration} />
      )}

      <div className="mt-2">
        <BlockRenderer blocks={article.content} />
      </div>

      <RelatedArticles articles={article.relatedArticles} />
      <HelpFooter />
    </div>
  );
}

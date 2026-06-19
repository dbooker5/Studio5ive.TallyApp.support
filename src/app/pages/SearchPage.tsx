import { useLocation, useNavigate } from "react-router";
import { Search, ArrowRight, Frown } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { categories } from "../lib/categories";

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  const results = query.trim().length > 0
    ? categories.flatMap((c) =>
        c.articles
          .filter(
            (a) =>
              a.title.toLowerCase().includes(query.toLowerCase()) ||
              a.description.toLowerCase().includes(query.toLowerCase())
          )
          .map((a) => ({ ...a, categoryLabel: c.label, categoryColor: c.color, categoryPath: c.path }))
      )
    : [];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Search Results" }]} />

      <div className="flex items-center gap-3 mb-2">
        <Search size={20} className="text-[#22D3EE]" />
        <h1 className="text-white text-2xl font-bold">Search Results</h1>
      </div>

      {query && (
        <p className="text-[#A1A1AA] text-sm mb-8">
          {results.length > 0
            ? `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
            : `No results found for "${query}"`}
        </p>
      )}

      {results.length > 0 ? (
        <div className="space-y-3">
          {results.map((a) => (
            <button
              key={a.id}
              className="group w-full text-left flex items-start gap-4 p-4 rounded-xl border border-[#27272A] bg-[#111111] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all"
              onClick={() => navigate((a as any).categoryPath)}
            >
              <div
                className="w-1.5 flex-shrink-0 self-stretch rounded-full mt-1"
                style={{ minHeight: 32, backgroundColor: (a as any).categoryColor }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-[15px] group-hover:text-[#22D3EE] transition-colors mb-1">{a.title}</p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{a.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${(a as any).categoryColor}20`, color: (a as any).categoryColor }}
                  >
                    {(a as any).categoryLabel}
                  </span>
                  <span className="text-[#A1A1AA] text-xs">{a.readTime} read</span>
                </div>
              </div>
              <ArrowRight size={15} className="text-[#A1A1AA] group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#27272A] flex items-center justify-center mb-5">
            <Frown size={28} className="text-[#A1A1AA]" />
          </div>
          <p className="text-white font-semibold text-lg mb-2">No results found</p>
          <p className="text-[#A1A1AA] text-sm max-w-sm mb-6">
            We couldn't find any articles matching "{query}". Try different keywords or browse categories below.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.slice(0, 5).map((c) => (
              <button
                key={c.id}
                className="px-3 py-1.5 rounded-full border border-[#27272A] text-[#A1A1AA] text-sm hover:text-white hover:border-[#22D3EE]/40 transition-colors"
                onClick={() => navigate(c.path)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Search, TrendingUp, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import CategoryGrid from "../components/CategoryGrid";
import { popularArticles, categories } from "../lib/categories";

function SpotlightHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: 340 }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute rounded-full transition-all duration-100"
        style={{
          width: 600,
          height: 600,
          top: pos.y - 300,
          left: pos.x - 300,
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full bg-[#22D3EE]/5 blur-[80px]" />
      <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-[#0EA5E9]/5 blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-14 pb-12 px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-medium mb-5">
          <Zap size={11} />
          TallyApp Help Center
        </div>

        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 max-w-xl">
          How can we{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #22D3EE, #0EA5E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            help you?
          </span>
        </h1>
        <p className="text-[#A1A1AA] text-base mb-8 max-w-md">
          Search our knowledge base or browse categories to find answers fast.
        </p>

        {/* Hero search */}
        <form onSubmit={handleSearch} className="w-full max-w-lg">
          <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#111111] border border-[#27272A] hover:border-[#22D3EE]/40 focus-within:border-[#22D3EE] focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] transition-all duration-200">
            <Search size={18} className="text-[#A1A1AA] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white text-[15px] placeholder-[#A1A1AA] outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 px-4 py-1.5 rounded-xl bg-[#22D3EE] text-black text-sm font-semibold hover:bg-[#0EA5E9] transition-colors disabled:opacity-40"
              disabled={!query.trim()}
            >
              Search
            </button>
          </div>
        </form>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <span className="text-[#A1A1AA] text-xs">Popular:</span>
          {popularArticles.slice(0, 4).map((a) => (
            <button
              key={a.title}
              className="text-xs px-2.5 py-1 rounded-full border border-[#27272A] text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-colors"
              onClick={() => navigate(a.path)}
            >
              {a.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsRow() {
  const stats = [
    { icon: <TrendingUp size={16} className="text-[#22D3EE]" />, label: "Articles", value: `${categories.reduce((s, c) => s + c.articles.length, 0)}+` },
    { icon: <Globe size={16} className="text-[#22D3EE]" />, label: "Languages", value: "7" },
    { icon: <Shield size={16} className="text-[#22D3EE]" />, label: "Support", value: "24/7" },
    { icon: <Zap size={16} className="text-[#22D3EE]" />, label: "Avg response", value: "< 2h" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-3 rounded-xl border border-[#27272A] bg-[#111111] px-4 py-3">
          {s.icon}
          <div>
            <p className="text-white font-bold text-lg leading-none">{s.value}</p>
            <p className="text-[#A1A1AA] text-xs mt-0.5">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PopularArticlesSection() {
  const navigate = useNavigate();

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">Popular Articles</h2>
        <button
          className="flex items-center gap-1 text-[#22D3EE] text-sm hover:underline"
          onClick={() => navigate("/get-started")}
        >
          View all <ArrowRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {popularArticles.map((a) => (
          <button
            key={a.title}
            className="group flex items-start gap-3 p-4 rounded-xl border border-[#27272A] bg-[#111111] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-left"
            onClick={() => navigate(a.path)}
          >
            <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#22D3EE] flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-medium group-hover:text-[#22D3EE] transition-colors">{a.title}</p>
              <p className="text-[#A1A1AA] text-xs mt-0.5">{a.category}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <SpotlightHero />
      <div className="py-8">
        <StatsRow />
        <PopularArticlesSection />

        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Browse All Topics</h2>
          <CategoryGrid />
        </div>
      </div>
    </div>
  );
}

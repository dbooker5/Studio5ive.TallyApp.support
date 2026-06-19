import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";
import { categories } from "../lib/categories";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const languages = ["English", "Hindi", "Spanish", "French", "Arabic", "Swahili", "Portuguese"];

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("English");
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim().length > 1
    ? categories.flatMap((c) =>
        c.articles
          .filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
          .map((a) => ({ ...a, categoryLabel: c.label, categoryPath: c.path }))
      ).slice(0, 6)
    : [];

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setFocused(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setFocused(false);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-black border-b border-[#27272A] flex items-center px-4 gap-4">
      {/* Mobile menu toggle */}
      <button
        className="lg:hidden flex-shrink-0 p-1.5 rounded-md text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a] transition-colors"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Logo */}
      <a href="https://tally.studio5ive.org/logo/ic_launcher.png" className="flex items-center gap-2.5 flex-shrink-0" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
        <div className="w-7 h-7 rounded-lg bg-[#22D3EE] flex items-center justify-center flex-shrink-0">
          <img src="https://tally.studio5ive.org/logo/ic_launcher.png" alt="TallyApp Logo" className="w-full h-full object-contain rounded-lg" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-white font-semibold text-[15px] tracking-tight hidden sm:block">TallyApp</span>
          <span className="text-[#A1A1AA] text-[13px] hidden sm:block">Help Center</span>
        </div>
      </a>

      {/* Search */}
      <div ref={searchRef} className="flex-1 max-w-xl mx-auto relative">
        <form onSubmit={handleSubmit}>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111111] border transition-all duration-200 ${focused ? "border-[#22D3EE] shadow-[0_0_0_3px_rgba(34,211,238,0.1)]" : "border-[#27272A]"}`}>
            <Search size={15} className="text-[#A1A1AA] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              className="flex-1 bg-transparent text-white text-sm placeholder-[#A1A1AA] outline-none"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} className="text-[#A1A1AA] hover:text-white transition-colors">
                <X size={14} />
              </button>
            )}
          </div>
        </form>

        {/* Dropdown results */}
        {focused && filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#111111] border border-[#27272A] rounded-xl overflow-hidden shadow-2xl shadow-black/60 z-50">
            {filtered.map((a) => (
              <button
                key={a.id}
                className="w-full text-left px-4 py-3 hover:bg-[#1a1a1a] transition-colors border-b border-[#27272A] last:border-0 group"
                onClick={() => {
                  navigate((a as any).categoryPath);
                  setFocused(false);
                  setQuery("");
                }}
              >
                <div className="text-white text-sm font-medium group-hover:text-[#22D3EE] transition-colors">{a.title}</div>
                <div className="text-[#A1A1AA] text-xs mt-0.5">{(a as any).categoryLabel} · {a.readTime} read</div>
              </button>
            ))}
            <button
              className="w-full text-left px-4 py-2.5 text-[#22D3EE] text-sm hover:bg-[#1a1a1a] transition-colors flex items-center gap-2"
              onClick={() => { navigate(`/search?q=${encodeURIComponent(query)}`); setFocused(false); }}
            >
              <Search size={13} />
              Search for "{query}"
            </button>
          </div>
        )}

        {focused && query.trim().length > 1 && filtered.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#111111] border border-[#27272A] rounded-xl px-4 py-6 text-center shadow-2xl shadow-black/60 z-50">
            <p className="text-[#A1A1AA] text-sm">No results found for "{query}"</p>
            <p className="text-[#A1A1AA] text-xs mt-1">Try different keywords or browse categories below.</p>
          </div>
        )}
      </div>

      {/* Language selector */}
      <div className="relative flex-shrink-0">
        <button
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a] border border-[#27272A] text-sm transition-colors"
          onClick={() => setLangOpen(!langOpen)}
        >
          <Globe size={14} />
          <span className="hidden lg:block">{lang}</span>
          <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
        </button>
        {langOpen && (
          <div className="absolute top-full right-0 mt-1.5 w-40 bg-[#111111] border border-[#27272A] rounded-xl overflow-hidden shadow-2xl shadow-black/60 z-50">
            {languages.map((l) => (
              <button
                key={l}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#1a1a1a] ${l === lang ? "text-[#22D3EE]" : "text-[#A1A1AA] hover:text-white"}`}
                onClick={() => { setLang(l); setLangOpen(false); }}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

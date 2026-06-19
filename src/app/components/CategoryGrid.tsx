import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import { Rocket, User, ShoppingCart, Package, Boxes, Users, Truck, BarChart2, CreditCard, Settings, Wrench } from "lucide-react";
import { categories, Category } from "../lib/categories";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Rocket, User, ShoppingCart, Package, Boxes, Users, Truck, BarChart2, CreditCard, Settings, Wrench,
};

function GlowCard({ cat }: { cat: Category }) {
  const navigate = useNavigate();
  const ref = useRef<HTMLButtonElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  }

  const Icon = iconMap[cat.icon] || Rocket;

  return (
    <button
      ref={ref}
      className="group relative text-left rounded-2xl border border-[#27272A] bg-[#111111] p-5 overflow-hidden transition-all duration-300 hover:border-[#27272A] hover:shadow-lg hover:-translate-y-0.5"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, visible: false }))}
      onClick={() => navigate(cat.path)}
      style={{ minHeight: 160 }}
    >
      {/* Mouse-follow glow */}
      {glow.visible && (
        <div
          className="pointer-events-none absolute rounded-full transition-opacity duration-300"
          style={{
            width: 200,
            height: 200,
            top: glow.y - 100,
            left: glow.x - 100,
            background: `radial-gradient(circle, ${cat.color}22 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${cat.color}18`, color: cat.color }}
      >
        <Icon size={18} />
      </div>

      <h3 className="text-white font-semibold text-[15px] mb-1.5 group-hover:text-[#22D3EE] transition-colors">
        {cat.label}
      </h3>
      <p className="text-[#A1A1AA] text-xs leading-relaxed line-clamp-2">{cat.description}</p>

      <div className="mt-4 flex items-center gap-1 text-xs" style={{ color: cat.color }}>
        <span>{cat.articles.length} articles</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <GlowCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

import { ChevronRight, Home } from "lucide-react";
import { useNavigate } from "react-router";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-1.5 text-xs text-[#A1A1AA] mb-6 flex-wrap">
      <button
        className="flex items-center gap-1 hover:text-[#22D3EE] transition-colors"
        onClick={() => navigate("/")}
      >
        <Home size={12} />
        <span>Home</span>
      </button>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} className="text-[#3f3f46]" />
          {item.path ? (
            <button
              className="hover:text-[#22D3EE] transition-colors"
              onClick={() => navigate(item.path!)}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

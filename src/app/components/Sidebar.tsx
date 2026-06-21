import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  ChevronDown,
  Rocket,
  User,
  ShoppingCart,
  Package,
  Boxes,
  Users,
  Truck,
  BarChart2,
  CreditCard,
  Settings,
  Wrench,
  Home,
} from "lucide-react";
import { categories } from "../lib/categories";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={16} />,
  User: <User size={16} />,
  ShoppingCart: <ShoppingCart size={16} />,
  Package: <Package size={16} />,
  Boxes: <Boxes size={16} />,
  Users: <Users size={16} />,
  Truck: <Truck size={16} />,
  BarChart2: <BarChart2 size={16} />,
  CreditCard: <CreditCard size={16} />,
  Settings: <Settings size={16} />,
  Wrench: <Wrench size={16} />,
};

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function createSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = "/" + location.pathname.split("/")[1];

  const [expanded, setExpanded] = useState<string>(
    currentPath.replace("/", "") || "get-started"
  );

  function toggle(id: string) {
    setExpanded((prev) => (prev === id ? "" : id));
  }

  function go(path: string) {
    navigate(path);
    onClose();
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-14 left-0 bottom-0 z-40 w-72 bg-[#111111] border-r border-[#27272A]
          flex flex-col overflow-hidden
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <nav className="flex-1 overflow-y-auto py-3 scrollbar-thin">
          <button
            className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors rounded-none ${
              location.pathname === "/"
                ? "text-[#22D3EE] bg-[#22D3EE]/10"
                : "text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a]"
            }`}
            onClick={() => go("/")}
          >
            <Home size={15} />
            <span className="font-medium">Home</span>
          </button>

          <div className="h-px bg-[#27272A] my-2 mx-4" />

          {categories.map((cat) => {
            const isActive = currentPath === cat.path;
            const isExpanded = expanded === cat.id;

            return (
              <div key={cat.id}>
                <button
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "text-[#22D3EE] bg-[#22D3EE]/10"
                      : "text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a]"
                  }`}
                  onClick={() => {
                    toggle(cat.id);
                    if (!isExpanded) go(cat.path);
                  }}
                >
                  <span
                    className={isActive ? "text-[#22D3EE]" : "text-[#A1A1AA]"}
                  >
                    {iconMap[cat.icon]}
                  </span>

                  <span className="flex-1 text-left font-medium">
                    {cat.label}
                  </span>

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pb-1">
                    {cat.articles.map((article) => {
                      const articlePath = `${cat.path}/${createSlug(
                        article.title
                      )}`;

                      const isArticleActive =
                        location.pathname === articlePath;

                      return (
                        <button
                          key={article.id}
                          className={`w-full text-left pl-11 pr-4 py-2 text-xs transition-colors leading-snug ${
                            isArticleActive
                              ? "text-[#22D3EE] bg-[#22D3EE]/10"
                              : "text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a]"
                          }`}
                          onClick={() => go(articlePath)}
                        >
                          {article.title}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex-shrink-0 border-t border-[#27272A] px-4 py-3">
          <p className="text-[10px] text-[#A1A1AA] leading-relaxed">
            © 2024 TallyApp Inc. ·{" "}
            <a href="#" className="hover:text-[#22D3EE] transition-colors">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-[#22D3EE] transition-colors">
              Terms
            </a>
          </p>
        </div>
      </aside>
    </>
  );
}
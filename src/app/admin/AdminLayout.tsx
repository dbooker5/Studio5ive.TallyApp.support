import { NavLink, Outlet } from "react-router";
import { BookOpen, ExternalLink, FolderTree } from "lucide-react";

const navItems = [
  { to: "/admin/categories", label: "Categories", icon: FolderTree },
  { to: "/admin/articles", label: "Articles", icon: BookOpen },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-black border-b border-[#27272A] flex items-center px-4 gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#22D3EE] flex items-center justify-center flex-shrink-0">
          <img
            src="https://tally.studio5ive.org/logo/ic_launcher.png"
            alt="TallyApp Logo"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-white font-semibold text-[15px] tracking-tight">TallyApp</span>
          <span className="text-[#A1A1AA] text-[13px]">Support Admin</span>
        </div>
        <a
          href="/"
          className="ml-auto flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors"
        >
          View site
          <ExternalLink size={12} />
        </a>
      </header>

      <aside className="fixed top-14 left-0 bottom-0 z-40 w-56 bg-[#111111] border-r border-[#27272A] hidden lg:flex flex-col py-3">
        <nav className="flex-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                  isActive ? "text-[#22D3EE] bg-[#22D3EE]/10" : "text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a]"
                }`
              }
            >
              <Icon size={16} />
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-56 pt-14 min-h-screen">
        <div className="lg:hidden flex items-center gap-1 border-b border-[#27272A] px-2 overflow-x-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  isActive ? "text-[#22D3EE] border-[#22D3EE]" : "text-[#A1A1AA] border-transparent"
                }`
              }
            >
              <Icon size={14} />
              {label}
            </NavLink>
          ))}
        </div>
        <main className="p-4 sm:p-6 max-w-5xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

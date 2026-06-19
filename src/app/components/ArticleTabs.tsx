import { useState } from "react";
import { Monitor, Apple, Smartphone, Laptop } from "lucide-react";

interface TabContent {
  platform: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface ArticleTabsProps {
  tabs: TabContent[];
}

export default function ArticleTabs({ tabs }: ArticleTabsProps) {
  const [active, setActive] = useState(tabs[0]?.platform || "");

  const current = tabs.find((t) => t.platform === active);

  return (
    <div className="mt-6">
      {/* Tab bar */}
      <div className="flex gap-0 border-b border-[#27272A]">
        {tabs.map((tab) => (
          <button
            key={tab.platform}
            onClick={() => setActive(tab.platform)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors relative ${
              active === tab.platform
                ? "text-[#22D3EE]"
                : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            <span className="opacity-70">{tab.icon}</span>
            {tab.platform}
            {active === tab.platform && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#22D3EE] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 prose-custom">
        {current?.content}
      </div>
    </div>
  );
}

export const platformIcons: Record<string, React.ReactNode> = {
  Android: <Smartphone size={14} />,
  iOS: <Apple size={14} />,
  Windows: <Monitor size={14} />,
  Mac: <Laptop size={14} />,
};

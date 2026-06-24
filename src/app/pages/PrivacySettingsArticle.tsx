import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function PrivacySettingsArticle() {
  const relatedArticles = [
    { title: "Profile & Business Info", description: "Update your business name, logo, and contact details.", path: "/account/profile", readTime: "3 min" },
    { title: "Two-Step Verification", description: "Add an extra layer of security to your account.", path: "/account/two-step-verification", readTime: "4 min" },
    { title: "Notifications", description: "Configure alerts for sales, low stock, and more.", path: "/account/notifications", readTime: "3 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Account", path: "/account" }, { label: "Privacy Settings" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">3 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Privacy Settings</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        TallyApp gives you full control over your data. Review your privacy settings to understand what 
        information is stored, who it is shared with, and how to manage your data retention preferences.
      </p>

      <VideoGuide
        title="Understanding Privacy Settings"
        subtitle="Learn how to manage and protect your data"
        duration="1:40"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">How to Configure Privacy Settings</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Navigate to Privacy</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Open your <strong>Account Settings</strong> and select <strong>Privacy</strong> from the menu.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Manage Data Collection</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Toggle preferences for usage analytics and crash reporting. Opting in helps us improve the app faster.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Data Deletion Requests</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                If you ever decide to leave, you can request a full wipe of your account and business data from this page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

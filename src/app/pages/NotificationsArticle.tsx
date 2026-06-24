import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function NotificationsArticle() {
  const relatedArticles = [
    { title: "Profile & Business Info", description: "Update your business name, logo, and contact details.", path: "/account/profile", readTime: "3 min" },
    { title: "Two-Step Verification", description: "Add an extra layer of security to your account.", path: "/account/two-step-verification", readTime: "4 min" },
    { title: "Managing Team Members", description: "Invite and manage roles for your team.", path: "/account/team-members", readTime: "6 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Account", path: "/account" }, { label: "Notifications" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">3 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Notifications</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Stay updated on your business performance without constantly checking the app. TallyApp allows you to configure 
        push notifications and email alerts for specific triggers, like low stock warnings, daily sales summaries, and new orders.
      </p>

      <VideoGuide
        title="Configuring Notifications"
        subtitle="Learn how to manage what alerts you receive"
        duration="1:50"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">How to Setup Alerts</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Open Notification Settings</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Go to <strong>Account Settings</strong> and tap on <strong>Notifications</strong>.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Toggle Notification Types</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                You'll see a list of available alerts (e.g., Low Stock, High Value Sales, System Updates). Toggle the ones you wish to receive.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Choose Delivery Method</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                For some alerts, you can choose whether to receive a <strong>Push Notification</strong> on your phone or an <strong>Email</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Not receiving push notifications?</h3>
             <p className="text-[#A1A1AA] text-sm">Ensure that you have granted TallyApp permission to send notifications in your device's global OS settings.</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

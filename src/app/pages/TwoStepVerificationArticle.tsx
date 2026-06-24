import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function TwoStepVerificationArticle() {
  const relatedArticles = [
    { title: "Profile & Business Info", description: "Update your business name, logo, and contact details.", path: "/account/profile", readTime: "3 min" },
    { title: "Managing Team Members", description: "Invite and manage roles for your team.", path: "/account/team-members", readTime: "6 min" },
    { title: "Privacy Settings", description: "Control what data TallyApp stores and shares.", path: "/account/privacy", readTime: "3 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Account", path: "/account" }, { label: "Two-Step Verification" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">4 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Two-Step Verification</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Adding an extra layer of security ensures that your business data remains safe even if someone else discovers your password. 
        Two-step verification requires a custom 6-digit PIN anytime your account is logged into from a new device.
      </p>

      <VideoGuide
        title="Securing Your Account"
        subtitle="Learn how to enable two-step verification for maximum security"
        duration="2:10"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">How to Enable Two-Step Verification</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Go to Security Settings</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                From the dashboard, tap the <strong>Profile Icon</strong> to open the Account menu, then select <strong>Security</strong>.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Enable Verification</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Tap on <strong>Two-Step Verification</strong> and toggle it to <strong>ON</strong>.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Set Your PIN</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Enter a memorable 6-digit PIN. You will be asked to confirm this PIN a second time.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Add Recovery Email</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                (Optional but highly recommended) Enter a recovery email address so you can reset your PIN if you forget it.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Forgot your PIN?</h3>
             <p className="text-[#A1A1AA] text-sm">If you forget your PIN, tap "Forgot PIN" on the login screen to receive a reset link to your recovery email.</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

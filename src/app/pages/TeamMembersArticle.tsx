import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function TeamMembersArticle() {
  const relatedArticles = [
    { title: "Profile & Business Info", description: "Update your business name, logo, and contact details.", path: "/account/profile", readTime: "3 min" },
    { title: "Two-Step Verification", description: "Add an extra layer of security to your account.", path: "/account/two-step-verification", readTime: "4 min" },
    { title: "Notifications", description: "Configure alerts for sales, low stock, and more.", path: "/account/notifications", readTime: "3 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Account", path: "/account" }, { label: "Managing Team Members" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">6 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Managing Team Members</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        As your business grows, you'll need to grant access to your staff. TallyApp allows you to invite multiple 
        team members and assign them specific roles (like Manager or Cashier) so they only have access to the 
        tools they need to do their jobs.
      </p>

      <VideoGuide
        title="Inviting and Managing Your Team"
        subtitle="Learn how to add staff and assign access roles"
        duration="3:45"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Steps to Add a Team Member</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Access Team Settings</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Go to <strong>Account Settings</strong> and tap on <strong>Team Members</strong> to view your current roster.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Invite New Member</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Tap the <strong>Invite Member</strong> button. Enter the email address of the person you want to invite.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Assign a Role</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Select a role for the new member (e.g., <strong>Owner</strong>, <strong>Manager</strong>, or <strong>Cashier</strong>). Each role has customized permissions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Send Invitation</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Tap <strong>Send Invite</strong>. The user will receive an email with a link to join your business entity.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Need to revoke access?</h3>
             <p className="text-[#A1A1AA] text-sm">You can remove a team member at any time by tapping their name in the Team list and selecting "Remove Member".</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

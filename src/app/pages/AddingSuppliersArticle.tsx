import { Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import HelpFooter from "../components/HelpFooter";

export default function AddingSuppliersArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Suppliers", path: "/suppliers" }, { label: "Adding Suppliers" }]} />
      <div className="mb-2 flex items-center gap-2"><Clock size={12} className="text-[#A1A1AA]" /><span className="text-xs text-[#A1A1AA]">Updated June 2026</span><span className="text-[#27272A]">·</span><span className="text-xs text-[#A1A1AA]">4 min read</span></div>
      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Adding Suppliers</h1>
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">Register supplier profiles and payment terms.</p>
      <VideoGuide title="How to Add a Supplier" subtitle="A quick walk-through tutorial" duration="2:00" />
      <div className="mt-10 mb-8"><h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316]/15 border border-[#f97316]/30 flex items-center justify-center text-[#f97316] text-xs font-bold mt-0.5">1</div><div><p className="text-white font-semibold text-[15px] mb-1">Open Suppliers</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Navigate to the Suppliers section.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316]/15 border border-[#f97316]/30 flex items-center justify-center text-[#f97316] text-xs font-bold mt-0.5">2</div><div><p className="text-white font-semibold text-[15px] mb-1">Add New</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Tap the + Add Supplier button.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316]/15 border border-[#f97316]/30 flex items-center justify-center text-[#f97316] text-xs font-bold mt-0.5">3</div><div><p className="text-white font-semibold text-[15px] mb-1">Enter Details</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Provide their name, contact info, and payment terms.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f97316]/15 border border-[#f97316]/30 flex items-center justify-center text-[#f97316] text-xs font-bold mt-0.5">4</div><div><p className="text-white font-semibold text-[15px] mb-1">Save Profile</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Tap Save to create the supplier record.</p></div></div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}

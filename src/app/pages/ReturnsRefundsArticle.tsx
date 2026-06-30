import { Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import HelpFooter from "../components/HelpFooter";

export default function ReturnsRefundsArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Purchases", path: "/purchases" }, { label: "Returns & Refunds" }]} />
      <div className="mb-2 flex items-center gap-2"><Clock size={12} className="text-[#A1A1AA]" /><span className="text-xs text-[#A1A1AA]">Updated June 2026</span><span className="text-[#27272A]">·</span><span className="text-xs text-[#A1A1AA]">4 min read</span></div>
      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Returns & Refunds</h1>
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">Handle returned goods and debit notes.</p>
      <VideoGuide title="Processing Purchase Returns" subtitle="A quick walk-through tutorial" duration="2:00" />
      <div className="mt-10 mb-8"><h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] text-xs font-bold mt-0.5">1</div><div><p className="text-white font-semibold text-[15px] mb-1">Open Original Purchase</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Find the purchase invoice in your history.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] text-xs font-bold mt-0.5">2</div><div><p className="text-white font-semibold text-[15px] mb-1">Initiate Return</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Select 'Return Items' from the menu.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] text-xs font-bold mt-0.5">3</div><div><p className="text-white font-semibold text-[15px] mb-1">Select Items</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Specify the quantities being returned.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] text-xs font-bold mt-0.5">4</div><div><p className="text-white font-semibold text-[15px] mb-1">Confirm</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Confirm the return to adjust your inventory and supplier balance.</p></div></div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}

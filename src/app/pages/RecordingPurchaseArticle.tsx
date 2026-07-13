import { Clock, Pen, Plus } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import HelpFooter from "../components/HelpFooter";

export default function RecordingPurchaseArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Purchases", path: "/purchases" }, { label: "Recording a Purchase" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">4 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Recording a Purchase</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Record goods purchased from suppliers.
      </p>

      <VideoGuide title="How to Record a Purchase" subtitle="A quick walk-through tutorial" duration="2:00" />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div>
            <div><p className="text-white font-semibold text-[15px] mb-1">Open your Entity</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Navigate to the Purchase section from the dashboard. Tap the <span className="inline-flex items-center justify-center gap-1 bg-white text-[#111111] px-2 py-0.5 rounded-sm text-xs font-semibold mx-1 shadow-sm"><Plus size={12} strokeWidth={3} /> Add</span> button on the right side of the Purchase screen.</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div>
            <div><p className="text-white font-semibold text-[15px] mb-1">Select Products for Purchase</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Select the products you want to purchase that are low in stock by checking the checkbox on the left side of the product name, edit the quantity and the Buying Price you want by tapping on the Action 
              <span className="inline-flex items-center gap-1 mx-1 align-middle">
                    <Pen size={18} className="text-white" /> 
                </span> button present in each product row.</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div>
            <div><p
            className="text-white font-semibold text-[15px] mb-1">Add Purchase</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Tap the <span className="inline-flex items-center justify-center gap-1 bg-[#22D3EE] text-[#111111] px-2 py-2 rounded-sm text-xs font-semibold mx-1 shadow-sm"><Plus size={12} strokeWidth={3} /> </span> button on the bottom right side of the Purchase screen. Then confirm the purchase by filling the <strong className="text-white">Supplier's Name</strong>(optional), <strong className="text-white">Payment Medium</strong>, <strong className="text-white">Expected Delivery Date</strong>(optional) and <strong className="text-white">Additional Notes</strong>(optional)</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">4</div>
            <div><p className="text-white font-semibold text-[15px] mb-1">Submit Purchase</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Submit the purchase by tapping the <strong className="text-blue-500">Submit</strong> button on the bottom right side of the screen.</p></div>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Completion of Purchase!</h3>
             <p className="text-[#A1A1AA] text-sm">Once the purchase is submitted, the status will be reading <strong className="text-[#f59e0b]">pending</strong> till the Admin confirms it as <strong className="text-green-500">complete</strong> and the stock will be updated accordingly.</p>
           </div>
        </div>

      <HelpFooter />
    </div>
  );
}

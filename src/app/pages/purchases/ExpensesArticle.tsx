import { Clock, Plus } from "lucide-react";
import{MdOutlineMenu} from "react-icons/md";
import Breadcrumb from "../../components/Breadcrumb";
import VideoGuide from "../../components/VideoGuide";
import HelpFooter from "../../components/HelpFooter";

export default function ExpensesArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Purchases", path: "/purchases" }, { label: "Expenses" }]} />
      <div className="mb-2 flex items-center gap-2"><Clock size={12} className="text-[#A1A1AA]" /><span className="text-xs text-[#A1A1AA]">Updated June 2026</span><span className="text-[#27272A]">·</span><span className="text-xs text-[#A1A1AA]">4 min read</span></div>
      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Expenses</h1>
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">Record business expenses for accurate accounting.</p>
      <VideoGuide title="Logging Business Expenses" subtitle="A quick walk-through tutorial" duration="2:00" />
      <div className="mt-10 mb-8"><h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div><div>
            <p className="text-white font-semibold text-[15px] mb-1">Open your Entity</p>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">Tap on your Entity, on the top right corner, tap the 
              <span className="inline-flex items-center gap-1 mx-1 align-middle">
                <MdOutlineMenu size={18} className="text-white" /> 
              </span>  to open your right slide options menu. Navigate to the <strong className="text-white">Expenses</strong> section.
              </p>
              </div>
              </div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div><div>
            <p className="text-white font-semibold text-[15px] mb-1">Add Expense</p>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">Tap the <span className="inline-flex items-center justify-center gap-1 bg-white text-[#111111] px-2 py-0.5 rounded-sm text-xs font-semibold mx-1 shadow-sm"><Plus size={12} strokeWidth={3} /> Add</span> button on the right side of the Expenses screen.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div><div>
            <p className="text-white font-semibold text-[15px] mb-1">Enter Details</p>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">Enter the description, amount, category and payment mode.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">4</div><div>
            <p className="text-white font-semibold text-[15px] mb-1">Submit the Expense</p>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">Submit the expense by tapping the <strong className="text-blue-500">Submit</strong> button at the bottom right.</p>
              </div>
          </div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}

import { Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import HelpFooter from "../components/HelpFooter";

export default function ExportingReportsArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Reports", path: "/reports" }, { label: "Exporting Reports" }]} />
      <div className="mb-2 flex items-center gap-2"><Clock size={12} className="text-[#A1A1AA]" /><span className="text-xs text-[#A1A1AA]">Updated June 2026</span><span className="text-[#27272A]">·</span><span className="text-xs text-[#A1A1AA]">4 min read</span></div>
      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Exporting Reports</h1>
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">Download reports as PDF or Excel spreadsheets.</p>
      <VideoGuide title="Exporting Data" subtitle="A quick walk-through tutorial" duration="2:00" />
      <div className="mt-10 mb-8"><h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#6366f1] text-xs font-bold mt-0.5">1</div><div><p className="text-white font-semibold text-[15px] mb-1">Generate Report</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Generate any report you need.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#6366f1] text-xs font-bold mt-0.5">2</div><div><p className="text-white font-semibold text-[15px] mb-1">Tap Export</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Tap the Export icon in the top right corner.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#6366f1] text-xs font-bold mt-0.5">3</div><div><p className="text-white font-semibold text-[15px] mb-1">Choose Format</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Select either PDF or Excel (CSV).</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#6366f1] text-xs font-bold mt-0.5">4</div><div><p className="text-white font-semibold text-[15px] mb-1">Download</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Save the file to your device or share it directly.</p></div></div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}

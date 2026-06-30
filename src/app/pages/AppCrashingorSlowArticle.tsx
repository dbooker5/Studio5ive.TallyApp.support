import { Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import HelpFooter from "../components/HelpFooter";

export default function AppCrashingorSlowArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Troubleshooting", path: "/troubleshooting" }, { label: "App Crashing or Slow" }]} />
      <div className="mb-2 flex items-center gap-2"><Clock size={12} className="text-[#A1A1AA]" /><span className="text-xs text-[#A1A1AA]">Updated June 2026</span><span className="text-[#27272A]">·</span><span className="text-xs text-[#A1A1AA]">4 min read</span></div>
      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">App Crashing or Slow</h1>
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">Steps to improve performance and fix crashes.</p>
      <VideoGuide title="Optimizing Performance" subtitle="A quick walk-through tutorial" duration="2:00" />
      <div className="mt-10 mb-8"><h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 flex items-center justify-center text-[#ef4444] text-xs font-bold mt-0.5">1</div><div><p className="text-white font-semibold text-[15px] mb-1">Update App</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Check the App Store/Play Store for updates.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 flex items-center justify-center text-[#ef4444] text-xs font-bold mt-0.5">2</div><div><p className="text-white font-semibold text-[15px] mb-1">Clear Data</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Go to Settings &gt; Storage and clear the app cache.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 flex items-center justify-center text-[#ef4444] text-xs font-bold mt-0.5">3</div><div><p className="text-white font-semibold text-[15px] mb-1">Free Up Space</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Ensure your device has enough free storage space.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 flex items-center justify-center text-[#ef4444] text-xs font-bold mt-0.5">4</div><div><p className="text-white font-semibold text-[15px] mb-1">Reinstall</p><p className="text-[#A1A1AA] text-sm leading-relaxed">As a last resort, uninstall and reinstall the app (ensure data is backed up).</p></div></div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}

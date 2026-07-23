import { Clock } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import VideoGuide from "../../components/VideoGuide";
import HelpFooter from "../../components/HelpFooter";

export default function IntegrationsArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Payments", path: "/payments" }, { label: "Integrations" }]} />
      <div className="mb-2 flex items-center gap-2"><Clock size={12} className="text-[#A1A1AA]" /><span className="text-xs text-[#A1A1AA]">Updated June 2026</span><span className="text-[#27272A]">·</span><span className="text-xs text-[#A1A1AA]">4 min read</span></div>
      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Integrations</h1>
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">Integrate your business with other platforms.</p>
      <VideoGuide title="Setting up Payment Integrations" subtitle="A quick walk-through tutorial" duration="2:00" />
      <div className="mt-10 mb-8"><h2 className="text-white text-xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div><div><p className="text-white font-semibold text-[15px] mb-1">Open Integrations</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Go to Settings &gt; Integrations.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div><div><p className="text-white font-semibold text-[15px] mb-1">Select Provider</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Choose the payment gateway you want to connect (e.g., Stripe, PayPal).</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div><div><p className="text-white font-semibold text-[15px] mb-1">Authenticate</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Follow the prompts to log in and authorize the connection.</p></div></div>
          <div className="flex gap-4"><div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">4</div><div><p className="text-white font-semibold text-[15px] mb-1">Test</p><p className="text-[#A1A1AA] text-sm leading-relaxed">Perform a test transaction to ensure it works.</p></div></div>
        </div>

        <div className="p-5 rounded-xl border border-[#10b981]/30 bg-[#10b981]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Availability of Payment Integrations</h3>
             <p className="text-[#A1A1AA] text-sm">This option is made available after an agreement between TallyApp and the Owner of the entity</p>
           </div>
        </div>
      </div>
      <HelpFooter />
    </div>
  );
}

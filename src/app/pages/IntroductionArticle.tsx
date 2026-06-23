import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function IntroductionArticle() {
  const relatedArticles = [
    { title: "Setting Up Your Account", description: "Create and configure your TallyApp account.", path: "/get-started", readTime: "5 min" },
    { title: "Creating an Entity", description: "Create your first business entity in TallyApp.", path: "/get-started", readTime: "4 min" },
    { title: "Navigating the Dashboard", description: "Understand TallyApp's main interface and key features.", path: "/get-started", readTime: "4 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Get Started", path: "/get-started" }, { label: "Introduction to TallyApp" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">3 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Introduction to TallyApp</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Welcome to TallyApp, the all-in-one business management solution designed for modern entrepreneurs. 
        Whether you run a small retail store, a service-based business, or a wholesale operation, 
        TallyApp provides the tools you need to streamline your daily operations, track your finances, 
        and grow your business with confidence.
      </p>

      <VideoGuide
        title="What is TallyApp?"
        subtitle="A quick overview of how TallyApp can transform your business"
        duration="1:45"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-4">Why choose TallyApp?</h2>
        <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
          Managing a business involves keeping track of countless moving parts—sales, inventory, customers, and suppliers. 
          TallyApp simplifies this complexity by bringing everything into a single, easy-to-use platform available across 
          all your devices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Cross-Platform Sync", desc: "Access your business data seamlessly on Android, iOS, Windows, and Mac." },
            { title: "Real-Time Inventory", desc: "Monitor stock levels automatically as sales are made and purchases are recorded." },
            { title: "Insightful Reports", desc: "Generate Profit & Loss, Cash Flow, and Sales Analytics with just a few taps." },
            { title: "Customer Management", desc: "Keep track of customer balances, credit limits, and send payment reminders." }
          ].map((feature, i) => (
             <div key={i} className="p-4 rounded-xl border border-[#27272A] bg-[#111111]/50">
               <h3 className="text-white font-medium text-sm mb-1">{feature.title}</h3>
               <p className="text-[#A1A1AA] text-xs leading-relaxed">{feature.desc}</p>
             </div>
          ))}
        </div>

        <h2 className="text-white text-xl font-semibold mb-4">Who is TallyApp for?</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Retail stores and supermarkets",
            "Wholesale distributors",
            "Service providers and freelancers",
            "Restaurants and cafes"
          ].map((audience, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-[#A1A1AA]">
              <CheckCircle2 size={18} className="text-[#22D3EE] flex-shrink-0 mt-0.5" />
              <span>{audience}</span>
            </li>
          ))}
        </ul>

        <div className="p-5 rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Ready to get started?</h3>
             <p className="text-[#A1A1AA] text-sm">Download TallyApp and create your business entity today.</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

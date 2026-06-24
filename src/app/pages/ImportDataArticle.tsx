import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";              
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function ImportDataArticle() {
  const relatedArticles = [
    { title: "Introduction to TallyApp", description: "Learn what TallyApp is and how it can help your business.", path: "/get-started/introduction", readTime: "3 min" },
    { title: "Setting Up Your Account", description: "Create and configure your TallyApp account.", path: "/get-started/setup-account", readTime: "5 min" },
    { title: "Creating an Entity", description: "Create your first business entity in TallyApp.", path: "/get-started", readTime: "7 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Get Started", path: "/get-started" }, { label: "Importing Existing Data" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">4 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Importing Data</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        An "Entity" in TallyApp represents your business or store. It holds all your 
        products, sales, customers, and financial records. Setting up your entity correctly 
        ensures that your reports, invoices, and settings are perfectly tailored to your business operations.
      </p>

      <VideoGuide
        title="How to Create Your Business Entity"
        subtitle="A quick walk-through of the entity setup process"
        duration="3:05"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Import Your Data</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Navigate to Import Section</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Navigate to the <strong>Import</strong> section from your dashboard.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Select Data Type</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Select the type of data you want to import (e.g., <strong>Products</strong>, <strong>Customers</strong>, <strong>Sales</strong>). Download the corresponding template.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Fill In Template</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Fill in the template with your data. Ensure you follow the correct format and include all required information.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Complete Setup</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Save your entity details. You can always update or modify these details later by navigating to <strong>Settings &gt; Business Profile</strong> from your dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Can I manage multiple businesses?</h3>
             <p className="text-[#A1A1AA] text-sm">Yes! You can create multiple entities under a single account and switch between them seamlessly.</p>
           </div>
        </div>
      </div>
      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />    
    </div>
  );
}
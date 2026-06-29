import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function StockAdjustmentsArticle() {
  const relatedArticles = [
    { title: "Adding Products", description: "Add products and services to your TallyApp catalog.", path: "/inventory/add-products", readTime: "4 min" },
    { title: "Stock Alerts", description: "Set and receive alerts when stock falls below threshold.", path: "/inventory/stock-alerts", readTime: "3 min" },
    { title: "Barcode Scanning", description: "Use your phone camera to scan product barcodes.", path: "/inventory/barcode", readTime: "4 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Inventory", path: "/inventory" }, { label: "Stock Adjustments" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">3 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Stock Adjustments</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Sometimes physical inventory doesn't match the system due to theft, damage, or promotional giveaways. 
        A Stock Adjustment allows you to manually correct the inventory count of a product without making a fake sale or purchase.
      </p>

      <VideoGuide
        title="Making a Stock Adjustment"
        subtitle="Learn how to correct physical stock discrepancies"
        duration="1:50"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Steps to Adjust Stock</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Select the Product</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                In your <strong>Inventory</strong> list, tap on the product you need to adjust to view its details.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Open Adjustments</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Tap the <strong>Adjust Stock</strong> button. You will see the current system quantity.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Modify Quantity</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Choose <strong>Add</strong> or <strong>Reduce</strong>, then enter the quantity difference. For example, if the system says 10 but you only have 8, reduce by 2.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Enter a Reason</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Provide a reason (e.g., "Damaged goods", "Found missing box") for the ledger audit, and tap <strong>Confirm</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

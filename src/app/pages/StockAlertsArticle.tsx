import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function StockAlertsArticle() {
  const relatedArticles = [
    { title: "Adding Products", description: "Add products and services to your TallyApp catalog.", path: "/inventory/add-products", readTime: "4 min" },
    { title: "Stock Adjustments", description: "Manually update stock levels for your products.", path: "/inventory/stock-adjustments", readTime: "3 min" },
    { title: "Bulk Upload Products", description: "Add multiple products at once using CSV or Excel.", path: "/inventory/bulk-products", readTime: "5 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Inventory", path: "/inventory" }, { label: "Stock Alerts" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">3 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Stock Alerts</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Running out of stock means lost sales. TallyApp helps you stay ahead by sending automatic notifications 
        when specific products fall below a predefined threshold.
      </p>

      <VideoGuide
        title="Configuring Low Stock Alerts"
        subtitle="Make sure you never run out of best-selling items"
        duration="1:25"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">How to Set Low Stock Alerts</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Open Product Settings</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Go to your <strong>Inventory</strong>, select the product, and tap the <strong>Edit (Pencil)</strong> icon.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Enable Tracking</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Ensure that <strong>Track Inventory</strong> is toggled ON for this item.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Set the Alert Threshold</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                In the <strong>Low Stock Warning</strong> field, enter the quantity at which you want to be notified (e.g., alert me when stock reaches 5).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Save Preferences</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Tap <strong>Save</strong>. You will now receive a push notification whenever this item's stock hits the threshold.
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

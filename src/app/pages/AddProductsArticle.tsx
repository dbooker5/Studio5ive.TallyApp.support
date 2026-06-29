import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function AddProductsArticle() {
  const relatedArticles = [
    { title: "Bulk Upload Products", description: "Add multiple products at once using CSV or Excel.", path: "/inventory/bulk-products", readTime: "5 min" },
    { title: "Stock Adjustments", description: "Manually update stock levels for your products.", path: "/inventory/stock-adjustments", readTime: "3 min" },
    { title: "Barcode Scanning", description: "Use your phone camera to scan product barcodes.", path: "/inventory/barcode", readTime: "4 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Inventory", path: "/inventory" }, { label: "Adding Products" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">4 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Adding Products</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Building your product catalog is the first step toward tracking inventory and making sales. 
        You can add individual products, services, or un-tracked items one by one with extensive details 
        like pricing, tax categories, and images.
      </p>

      <VideoGuide
        title="Adding a Single Product"
        subtitle="Watch how to create a new product entry in under a minute"
        duration="2:15"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Steps to Add a Product</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Open Inventory</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                From your dashboard, tap the <strong>Inventory</strong> icon to view your current catalog.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Tap Add Product</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Tap the <strong>+ Add Product</strong> button located at the top right of the screen.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Enter Details</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Fill in the basic info: <strong>Item Name</strong>, <strong>Selling Price</strong>, and <strong>Cost Price</strong>. You can also specify the unit type (e.g., kg, pieces, hours).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Save Item</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Add an optional product image by tapping the placeholder, then tap <strong>Save</strong> to add it to your catalog.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#10b981]/30 bg-[#10b981]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Have hundreds of items?</h3>
             <p className="text-[#A1A1AA] text-sm">Use our Bulk Upload feature to import an Excel sheet instead of adding them one-by-one.</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

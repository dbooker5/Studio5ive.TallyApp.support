import { CheckCircle2, Clock, Smartphone } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function BarcodeScanningArticle() {
  const relatedArticles = [
    { title: "Adding Products", description: "Add products and services to your TallyApp catalog.", path: "/inventory/add-products", readTime: "4 min" },
    { title: "Bulk Upload Products", description: "Add multiple products at once using CSV or Excel.", path: "/inventory/bulk-products", readTime: "5 min" },
    { title: "Stock Adjustments", description: "Manually update stock levels for your products.", path: "/inventory/stock-adjustments", readTime: "3 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Inventory", path: "/inventory" }, { label: "Barcode Scanning" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">4 min read</span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-white text-3xl font-bold leading-tight">Barcode Scanning</h1>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-medium">
          <Smartphone size={12} />
          Mobile Only
        </div>
      </div>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Speed up your checkout process and inventory management by using your phone's camera as a barcode scanner. 
        You don't need any external hardware; simply point your camera at the product's barcode or QR code.
      </p>

      <VideoGuide
        title="Using the Barcode Scanner"
        subtitle="Learn how to quickly add items to a sale using your camera"
        duration="1:15"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">How to Scan Barcodes</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Open the Scanner</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                When adding a product to your inventory or creating a new sale, tap the <strong>Barcode Icon</strong> located next to the search bar.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Grant Permissions</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                If prompted, allow TallyApp to access your device's camera. This is required to read the barcodes.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Scan the Item</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Point your camera at the barcode. Keep it steady and within the illuminated box. The app will automatically read the code.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Automatic Action</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                If the item exists in your inventory, it will immediately be added to the cart. If it's a new item, it will pre-fill the barcode field in the product creation screen.
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

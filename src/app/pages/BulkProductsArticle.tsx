import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function BulkProductsArticle() {
  const relatedArticles = [
    { title: "Adding Products", description: "Add products and services to your TallyApp catalog.", path: "/inventory/add-products", readTime: "4 min" },
    { title: "Stock Adjustments", description: "Manually update stock levels for your products.", path: "/inventory/stock-adjustments", readTime: "3 min" },
    { title: "Barcode Scanning", description: "Use your phone camera to scan product barcodes.", path: "/inventory/barcode", readTime: "4 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Inventory", path: "/inventory" }, { label: "Bulk Upload Products" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">5 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Bulk Upload Products</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        If you are moving from another system or have a large inventory list, adding items one by one can be tedious. 
        TallyApp allows you to upload hundreds of products instantly using a standard CSV or Excel file.
      </p>

      <VideoGuide
        title="Importing Spreadsheets"
        subtitle="Learn how to format your data and perform a bulk upload"
        duration="3:10"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Steps to Bulk Upload</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Download Template</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                In the Inventory view, tap the <strong>More (⋮)</strong> menu and select <strong>Bulk Upload</strong>. Tap <strong>Download Template</strong> to get the correctly formatted Excel file.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Fill Your Data</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Open the downloaded file in Excel or Google Sheets. Copy and paste your product names, prices, SKU, and opening stock into the matching columns.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Upload the File</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Save the file as a CSV or Excel format. Return to TallyApp and tap <strong>Upload File</strong>, then select your saved document.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold mt-0.5">4</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Review and Save</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                TallyApp will validate your data. If everything looks good, tap <strong>Import Products</strong> to finalize the addition to your catalog.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#10b981]/30 bg-[#10b981]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Seeing validation errors?</h3>
             <p className="text-[#A1A1AA] text-sm">Ensure you do not leave mandatory fields (like Name or Price) blank, and that numbers are formatted correctly.</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

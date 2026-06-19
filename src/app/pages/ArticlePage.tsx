import { useLocation, useNavigate } from "react-router";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";
import { categories, getCategoryById } from "../lib/categories";

const categoryContent: Record<string, { intro: string; steps: { title: string; body: string }[] }> = {
  account: {
    intro: "Manage your TallyApp profile, security settings, and team members from the Account section. Keep your business information up to date to ensure smooth operations.",
    steps: [
      { title: "Open Settings", body: "From the main dashboard, tap the profile icon in the top-right corner to access Account Settings." },
      { title: "Edit Business Profile", body: "Update your Business Name, logo, address, and contact details. These appear on all invoices and reports." },
      { title: "Enable Two-Step Verification", body: "Go to Account → Security → Two-Step Verification. Enter a 6-digit PIN that will be required when registering TallyApp on a new device." },
      { title: "Manage Team Members", body: "Navigate to Account → Team Members → Invite. Enter an email address and assign a role (Owner, Manager, or Cashier) to control access." },
      { title: "Configure Notifications", body: "In Account → Notifications, toggle alerts for new sales, low stock, payment reminders, and daily summaries." },
    ],
  },
  sales: {
    intro: "TallyApp makes recording sales fast and accurate. Whether you're at the counter or in the field, you can log transactions, generate invoices, and track revenue in real time.",
    steps: [
      { title: "Tap 'New Sale' from the dashboard", body: "The quick-action button on the home screen launches the sale entry form instantly." },
      { title: "Add products or services", body: "Search for products by name or scan their barcode. Tap to add quantities. Prices are pulled automatically from your catalog." },
      { title: "Apply discounts and taxes", body: "Use the discount field to offer a percentage or flat discount. Tax rates configured in Settings are applied automatically." },
      { title: "Choose payment method", body: "Select Cash, Card, Bank Transfer, or Credit (for known customers). You can split payments across multiple methods." },
      { title: "Complete and share the invoice", body: "Tap 'Complete Sale' to record the transaction. Share the receipt via WhatsApp, SMS, or email with one tap." },
    ],
  },
  purchases: {
    intro: "Track everything you buy for your business — from supplier orders to daily expenses. TallyApp keeps your purchase history organized and your payables clear.",
    steps: [
      { title: "Navigate to Purchases", body: "From the dashboard menu, tap Purchases to see your purchase history and create new orders." },
      { title: "Create a Purchase Order", body: "Tap 'New Purchase', select a supplier, and add products with quantities and purchase prices." },
      { title: "Record payment to supplier", body: "After goods are received, mark the purchase as paid or record a partial payment. TallyApp tracks outstanding amounts automatically." },
      { title: "Handle purchase returns", body: "If you return goods, tap 'Purchase Return' on the relevant purchase. This creates a debit note and adjusts your stock." },
      { title: "Track expenses", body: "For non-inventory expenses (rent, utilities, etc.), use 'Add Expense' with a category, amount, and date." },
    ],
  },
  inventory: {
    intro: "Maintain accurate stock levels, receive low-stock alerts, and organize your product catalog with TallyApp's inventory management tools.",
    steps: [
      { title: "Add products to your catalog", body: "Go to Inventory → Products → Add Product. Enter name, SKU, category, selling price, purchase price, and opening stock." },
      { title: "Set reorder levels", body: "For each product, set a 'Minimum Stock' level. TallyApp sends an alert when stock falls below this number." },
      { title: "Adjust stock manually", body: "Tap a product and select 'Stock Adjustment' to correct quantities after a physical count. Add a reason for audit purposes." },
      { title: "Use barcode scanning", body: "On Android and iOS, tap the barcode icon in any sale or purchase form to scan product barcodes using your phone camera." },
      { title: "Organize with categories", body: "Create product categories (e.g., Electronics, Clothing, Food) to filter and search your catalog more efficiently." },
    ],
  },
  customers: {
    intro: "Build lasting customer relationships by tracking contact details, balances, and purchase history. Send personalized payment reminders directly from TallyApp.",
    steps: [
      { title: "Add a customer", body: "Go to Customers → Add Customer. Enter name, phone number, email, and optional credit limit." },
      { title: "View customer ledger", body: "Tap any customer to see their full transaction history — every sale, payment, and outstanding balance." },
      { title: "Send payment reminders", body: "For customers with outstanding balances, tap 'Send Reminder' to dispatch a WhatsApp or SMS message with their balance details." },
      { title: "Set credit limits", body: "In the customer profile, set a maximum credit limit. TallyApp warns you when a sale would exceed this limit." },
      { title: "Export customer statements", body: "Tap 'Export' to generate a PDF or Excel statement for a customer covering any date range." },
    ],
  },
  suppliers: {
    intro: "Keep your supplier relationships organized. Track contact details, purchase history, outstanding payables, and easily communicate with vendors.",
    steps: [
      { title: "Add a supplier", body: "Go to Suppliers → Add Supplier. Enter the company name, contact person, phone, email, and payment terms." },
      { title: "View supplier ledger", body: "Tap any supplier to see all purchases, payments made, and the current outstanding balance." },
      { title: "Record a payment to a supplier", body: "In the supplier profile, tap 'Record Payment'. Enter the amount, payment method, and date." },
      { title: "Manage outstanding payables", body: "The Suppliers dashboard shows a summary of all amounts owed. Sort by due date or amount to prioritize payments." },
    ],
  },
  reports: {
    intro: "TallyApp generates comprehensive business reports to help you understand performance, track profitability, and make informed decisions.",
    steps: [
      { title: "Navigate to Reports", body: "Tap 'Reports' from the main menu to access all available report types." },
      { title: "View Profit & Loss", body: "The P&L report shows your total revenue, cost of goods sold, gross profit, and net profit for any selected period." },
      { title: "Check Cash Flow", body: "The Cash Flow statement shows money received and paid out, giving you a clear picture of liquidity." },
      { title: "Analyze sales trends", body: "The Sales Analytics report shows top-selling products, busiest hours, and revenue trends over time." },
      { title: "Export or share reports", body: "Tap 'Export' on any report to download as PDF or Excel. Share directly via email or messaging apps." },
    ],
  },
  billing: {
    intro: "Manage your TallyApp subscription, upgrade your plan, and access your billing history. All plans come with a 14-day free trial.",
    steps: [
      { title: "View current plan", body: "Go to Account → Billing to see your active plan, renewal date, and included features." },
      { title: "Upgrade your plan", body: "Tap 'Upgrade' to compare plans side by side. Select the plan that fits your business size and tap 'Subscribe'." },
      { title: "Add a payment method", body: "Tap 'Payment Methods' → 'Add Card'. Enter your card details securely. We accept Visa, Mastercard, and bank transfers." },
      { title: "Download invoices", body: "In Billing → History, tap any invoice to download the PDF receipt for your records." },
      { title: "Cancel or pause subscription", body: "Tap 'Manage Subscription' to pause (available on Business plan) or cancel. Data is retained for 90 days after cancellation." },
    ],
  },
  settings: {
    intro: "Customize TallyApp to match your business needs — from currency and taxes to fiscal year settings and data backups.",
    steps: [
      { title: "Set your currency", body: "Go to Settings → Currency. Select your primary currency. Enable multi-currency if you transact in multiple currencies." },
      { title: "Configure tax rates", body: "Go to Settings → Tax. Add GST, VAT, or custom tax rates with names and percentages. Assign them to products or apply at checkout." },
      { title: "Set your fiscal year", body: "Go to Settings → Fiscal Year. Define your financial year start and end dates. This affects all P&L and balance sheet reports." },
      { title: "Backup your data", body: "TallyApp automatically backs up data to the cloud. For manual backup, go to Settings → Backup → Back Up Now." },
      { title: "Restore from backup", body: "If you switch devices, go to Settings → Backup → Restore. Select a backup date to restore your data." },
    ],
  },
  troubleshooting: {
    intro: "Experiencing an issue with TallyApp? Follow these steps to quickly diagnose and resolve the most common problems.",
    steps: [
      { title: "App not syncing between devices", body: "Ensure both devices are connected to the internet. Open TallyApp on your phone and go to Settings → Linked Devices to confirm the connection is active. Restart the app if needed." },
      { title: "Login problems", body: "If you can't log in, tap 'Forgot PIN' on the login screen. You'll receive a verification code via SMS to reset your PIN." },
      { title: "Missing transactions", body: "Check the date filter on the sales or purchase list — it may be set to a specific period. Tap 'All Time' to see all records." },
      { title: "App crashing or running slowly", body: "Clear the app cache in your phone's App Settings. Ensure your device has at least 500 MB free storage. Update TallyApp to the latest version." },
      { title: "Contact support", body: "If the issue persists, tap Help → Contact Support within the app. Our team is available 24/7 via WhatsApp, email, and phone." },
    ],
  },
};

export default function ArticlePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const categoryId = location.pathname.replace("/", "");
  const cat = getCategoryById(categoryId);
  const content = categoryContent[categoryId];

  if (!cat) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-[#A1A1AA]">Category not found.</p>
      </div>
    );
  }

  const related = categories
    .filter((c) => c.id !== categoryId)
    .slice(0, 3)
    .map((c) => ({
      title: c.articles[0].title,
      description: c.articles[0].description,
      path: c.path,
      readTime: c.articles[0].readTime,
    }));

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: cat.label }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2024</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">5 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-3 leading-tight">{cat.label}</h1>

      {content && (
        <>
          <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-8">{content.intro}</p>

          <VideoGuide
            title={`${cat.label} on TallyApp`}
            subtitle={`Learn how to use TallyApp's ${cat.label.toLowerCase()} features`}
            duration="3:15"
          />

          <div className="mt-8 mb-2">
            <h2 className="text-white text-xl font-semibold mb-6">Step-by-step guide</h2>
            <div className="space-y-6">
              {content.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[15px] mb-1">{step.title}</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Article list */}
          <div className="mt-10 border-t border-[#27272A] pt-8">
            <h3 className="text-white text-base font-semibold mb-4">Articles in this section</h3>
            <div className="space-y-2">
              {cat.articles.map((article) => (
                <button
                  key={article.id}
                  className="group w-full flex items-center gap-3 p-3.5 rounded-xl border border-[#27272A] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-left"
                  onClick={() => navigate(cat.path)}
                >
                  <CheckCircle2 size={14} className="text-[#22D3EE] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium group-hover:text-[#22D3EE] transition-colors">{article.title}</p>
                    <p className="text-[#A1A1AA] text-xs mt-0.5 truncate">{article.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[#A1A1AA] text-xs">{article.readTime}</span>
                    <ArrowRight size={13} className="text-[#A1A1AA] group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <RelatedArticles articles={related} />
      <HelpFooter />
    </div>
  );
}

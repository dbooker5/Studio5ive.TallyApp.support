export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  readTime: string;
  platforms?: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  path: string;
  articles: Article[];
}

export const categories: Category[] = [
  {
    id: "get-started",
    label: "Get Started",
    icon: "Rocket",
    description: "Set up TallyApp and start managing your business in minutes",
    color: "#22D3EE",
    path: "/get-started",
    articles: [
      { id: "gs-1", title: "Introduction to TallyApp", slug: "introduction", description: "Learn what TallyApp is and how it can help your business.", readTime: "3 min", platforms: ["Android", "iOS", "Windows", "Mac"] },
      { id: "gs-2", title: "Setting Up Your Account", slug: "setup-account", description: "Create and configure your TallyApp account.", readTime: "5 min", platforms: ["Android", "iOS", "Windows", "Mac"] },
      { id: "gs-3", title: "Linking Devices", slug: "linking-devices", description: "Connect TallyApp across your phone, tablet, and desktop.", readTime: "4 min", platforms: ["Windows", "Mac"] },
      { id: "gs-4", title: "Importing Existing Data", slug: "importing-data", description: "Migrate your existing business data into TallyApp.", readTime: "7 min" },
      { id: "gs-5", title: "Navigating the Dashboard", slug: "dashboard-overview", description: "Understand TallyApp's main interface and key features.", readTime: "4 min", platforms: ["Android", "iOS", "Windows", "Mac"] },
    ],
  },
  {
    id: "account",
    label: "Account",
    icon: "User",
    description: "Manage your profile, security, and subscription settings",
    color: "#a855f7",
    path: "/account",
    articles: [
      { id: "ac-1", title: "Profile & Business Info", slug: "profile", description: "Update your business name, logo, and contact details.", readTime: "3 min" },
      { id: "ac-2", title: "Two-Step Verification", slug: "two-step-verification", description: "Add an extra layer of security to your account.", readTime: "4 min" },
      { id: "ac-3", title: "Managing Team Members", slug: "team-members", description: "Invite and manage roles for your team.", readTime: "6 min" },
      { id: "ac-4", title: "Privacy Settings", slug: "privacy", description: "Control what data TallyApp stores and shares.", readTime: "3 min" },
      { id: "ac-5", title: "Notifications", slug: "notifications", description: "Configure alerts for sales, low stock, and more.", readTime: "3 min" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    icon: "ShoppingCart",
    description: "Record transactions, invoices, and track revenue in real time",
    color: "#22D3EE",
    path: "/sales",
    articles: [
      { id: "sl-1", title: "Recording a Sale", slug: "record-sale", description: "Learn how to quickly log a sale transaction.", readTime: "4 min" },
      { id: "sl-2", title: "Creating Invoices", slug: "invoices", description: "Generate professional invoices for your customers.", readTime: "5 min" },
      { id: "sl-3", title: "Sales Returns & Refunds", slug: "returns", description: "Process refunds and manage returned goods.", readTime: "4 min" },
      { id: "sl-4", title: "Discount & Tax Management", slug: "discounts-taxes", description: "Apply discounts and configure tax rates for sales.", readTime: "5 min" },
      { id: "sl-5", title: "Daily Sales Summary", slug: "daily-summary", description: "View and share your daily sales performance.", readTime: "3 min" },
    ],
  },
  {
    id: "purchases",
    label: "Purchases",
    icon: "Package",
    description: "Track supplier orders, payments, and purchase history",
    color: "#f59e0b",
    path: "/purchases",
    articles: [
      { id: "pu-1", title: "Creating a Purchase Order", slug: "purchase-order", description: "Record goods purchased from suppliers.", readTime: "4 min" },
      { id: "pu-2", title: "Managing Supplier Payments", slug: "supplier-payments", description: "Track and settle outstanding payments to suppliers.", readTime: "5 min" },
      { id: "pu-3", title: "Purchase Returns", slug: "purchase-returns", description: "Handle returned goods and debit notes.", readTime: "4 min" },
      { id: "pu-4", title: "Expense Tracking", slug: "expenses", description: "Record business expenses for accurate accounting.", readTime: "4 min" },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: "Boxes",
    description: "Monitor stock levels, set reorder alerts, and manage products",
    color: "#10b981",
    path: "/inventory",
    articles: [
      { id: "inv-1", title: "Adding Products", slug: "add-products", description: "Add products and services to your TallyApp catalog.", readTime: "4 min" },
      { id: "inv-2", title: "Stock Adjustments", slug: "stock-adjustments", description: "Manually update stock levels for your products.", readTime: "3 min" },
      { id: "inv-3", title: "Low Stock Alerts", slug: "low-stock-alerts", description: "Set and receive alerts when stock falls below threshold.", readTime: "3 min" },
      { id: "inv-4", title: "Barcode Scanning", slug: "barcode", description: "Use your phone camera to scan product barcodes.", readTime: "4 min", platforms: ["Android", "iOS"] },
      { id: "inv-5", title: "Product Categories", slug: "product-categories", description: "Organize products into categories for faster lookup.", readTime: "3 min" },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: "Users",
    description: "Build your customer book, track balances, and send statements",
    color: "#0EA5E9",
    path: "/customers",
    articles: [
      { id: "cu-1", title: "Adding Customers", slug: "add-customers", description: "Create customer profiles with contact and credit info.", readTime: "3 min" },
      { id: "cu-2", title: "Customer Ledger", slug: "customer-ledger", description: "View the full transaction history for any customer.", readTime: "4 min" },
      { id: "cu-3", title: "Sending Payment Reminders", slug: "payment-reminders", description: "Send outstanding balance reminders via WhatsApp or SMS.", readTime: "3 min" },
      { id: "cu-4", title: "Credit Limit Settings", slug: "credit-limits", description: "Set maximum credit limits per customer.", readTime: "3 min" },
    ],
  },
  {
    id: "suppliers",
    label: "Suppliers",
    icon: "Truck",
    description: "Manage your supplier network, debts, and purchase history",
    color: "#f97316",
    path: "/suppliers",
    articles: [
      { id: "su-1", title: "Adding Suppliers", slug: "add-suppliers", description: "Register supplier profiles and payment terms.", readTime: "3 min" },
      { id: "su-2", title: "Supplier Ledger", slug: "supplier-ledger", description: "Track all transactions with a specific supplier.", readTime: "4 min" },
      { id: "su-3", title: "Outstanding Payables", slug: "payables", description: "View and manage amounts owed to suppliers.", readTime: "4 min" },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: "BarChart2",
    description: "Profit & Loss, balance sheets, and business analytics",
    color: "#6366f1",
    path: "/reports",
    articles: [
      { id: "rp-1", title: "Profit & Loss Report", slug: "profit-loss", description: "Understand your business profitability over any period.", readTime: "5 min" },
      { id: "rp-2", title: "Cash Flow Statement", slug: "cash-flow", description: "Track money moving in and out of your business.", readTime: "5 min" },
      { id: "rp-3", title: "Exporting Reports", slug: "export-reports", description: "Download reports as PDF or Excel spreadsheets.", readTime: "3 min" },
      { id: "rp-4", title: "Sales Analytics", slug: "sales-analytics", description: "Visualize sales trends and top-performing products.", readTime: "4 min" },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    icon: "CreditCard",
    description: "Subscription plans, payment methods, and invoices from TallyApp",
    color: "#ec4899",
    path: "/billing",
    articles: [
      { id: "bl-1", title: "TallyApp Plans & Pricing", slug: "plans", description: "Compare Free, Pro, and Business subscription tiers.", readTime: "4 min" },
      { id: "bl-2", title: "Upgrading Your Plan", slug: "upgrade", description: "Switch to a higher plan to unlock advanced features.", readTime: "3 min" },
      { id: "bl-3", title: "Payment Methods", slug: "payment-methods", description: "Manage cards and bank accounts for your subscription.", readTime: "3 min" },
      { id: "bl-4", title: "Billing History", slug: "billing-history", description: "Download past invoices and receipts from TallyApp.", readTime: "2 min" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "Settings",
    description: "Customize currency, taxes, fiscal year, and app preferences",
    color: "#A1A1AA",
    path: "/settings",
    articles: [
      { id: "st-1", title: "Currency Settings", slug: "currency", description: "Set your default currency and enable multi-currency.", readTime: "3 min" },
      { id: "st-2", title: "Tax Configuration", slug: "tax-config", description: "Set up GST, VAT, or custom tax rates for your region.", readTime: "5 min" },
      { id: "st-3", title: "Fiscal Year Settings", slug: "fiscal-year", description: "Define your business accounting period start and end.", readTime: "3 min" },
      { id: "st-4", title: "Data Backup & Restore", slug: "backup", description: "Keep your data safe with automatic cloud backups.", readTime: "4 min" },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    icon: "Wrench",
    description: "Fix common issues, errors, and sync problems",
    color: "#ef4444",
    path: "/troubleshooting",
    articles: [
      { id: "tr-1", title: "App Not Syncing", slug: "sync-issues", description: "Resolve sync issues across devices.", readTime: "5 min" },
      { id: "tr-2", title: "Login Problems", slug: "login-issues", description: "Fix issues with signing in to your account.", readTime: "4 min" },
      { id: "tr-3", title: "Missing Transactions", slug: "missing-data", description: "Recover or locate transactions that seem to be missing.", readTime: "5 min" },
      { id: "tr-4", title: "App Crashing or Slow", slug: "performance", description: "Steps to improve performance and fix crashes.", readTime: "4 min", platforms: ["Android", "iOS"] },
      { id: "tr-5", title: "Contacting Support", slug: "contact-support", description: "Reach TallyApp support via chat, email, or phone.", readTime: "2 min" },
    ],
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getArticleBySlug(categoryId: string, slug: string): Article | undefined {
  const cat = getCategoryById(categoryId);
  return cat?.articles.find((a) => a.slug === slug);
}

export const popularArticles = [
  { title: "How to Record a Sale", path: "/sales", category: "Sales" },
  { title: "Setting Up Your Account", path: "/get-started", category: "Get Started" },
  { title: "Creating Invoices", path: "/sales", category: "Sales" },
  { title: "Profit & Loss Report", path: "/reports", category: "Reports" },
  { title: "Low Stock Alerts", path: "/inventory", category: "Inventory" },
  { title: "Two-Step Verification", path: "/account", category: "Account" },
];

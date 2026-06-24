import { useLocation } from "react-router";

const pageNames: Record<string, string> = {
  //Get Started
  "/get-started": "Get Started",
  "/get-started/introduction": "Introduction",
  "/get-started/setup-account": "Setup Account",
  "/get-started/creating-entity": "Creating Entity",
  "/get-started/importing-data": "Importing Data",
  "/get-started/dashboard-overview": "Dashboard Overview",

  //Account
  "/account": "Account",
  "/account/profile": "Profile",
  "/account/two-step-verification": "Two Step Verification",
  "/account/team-members": "Team Members",
  "/account/privacy": "Privacy",
  "/account/notifications": "Notifications",

  //Sales
  "/sales": "Sales",
  "/sales/record-sale": "Record Sale",
  "/sales/invoices": "Invoices",
  "/sales/returns": "Returns",
  "/sales/discounts-taxes": "Discounts Taxes",
  "/sales/daily-summary": "Daily Summary",

  //Purchases
  "/purchases": "Purchases",
  "/purchases/recording-purchase": "Recording Purchase",
  "/purchases/supplier-payments": "Supplier Payments",
  "/purchases/returns-refunds": "Returns Refunds",
  "/purchases/expenses": "Expenses",

  //Inventory
  "/inventory": "Inventory",
  "/inventory/add-products": "Add Products",
  "/inventory/bulk-products": "Bulk Products",
  "/inventory/stock-adjustments": "Stock Adjustments",
  "/inventory/stock-alerts": "Stock Alerts",
  "/inventory/barcode": "Barcode",

  //Customers
  "/customers": "Customers",
  "/customers/add-customer": "Add Customer",
  "/customers/customer-payments": "Customer Payments",

  //Suppliers
  "/suppliers": "Suppliers",
  "/suppliers/add-supplier": "Add Supplier",
  "/suppliers/receivables": "Receivables",
  "/suppliers/payables": "Payables",

  //Reports
  "/reports": "Reports",
  "/reports/profit-loss": "Profit Loss",
  "/reports/cash-flow": "Cash Flow",
  "/reports/export-reports": "Export Reports",
  "/reports/sales-analytics": "Sales Analytics",

  //Payments
  "/payments": "Payments",
  "/payments/mode-of-payments": "Mode of Payments",
  "/payments/payments-received": "Payments Received",
  "/payments/payments-made": "Payments Made",
  "/payments/integrations": "Integrations",

  //Settings
  "/settings": "Settings",
  
  //Troubleshooting
  "/troubleshooting": "Troubleshooting",
  "/troubleshooting/sync-issues": "Sync Issues",
  "/troubleshooting/login-issues": "Login Issues",
  "/troubleshooting/missing-data": "Missing Data",
  "/troubleshooting/performance": "Performance",
  "/troubleshooting/contact-support": "Contact Support",
};

export default function EmptyPage() {
  const location = useLocation();

  const pageName = pageNames[location.pathname] || "Page";

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-8">
        <h1 className="text-white text-2xl font-bold">{pageName}</h1>

        <p className="text-[#A1A1AA] text-sm mt-2">
          This page is empty for now.
        </p>
      </div>
    </div>
  );
}
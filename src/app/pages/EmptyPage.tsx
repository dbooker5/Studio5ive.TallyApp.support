import { useLocation } from "react-router";

const pageNames: Record<string, string> = {
   "/get-started": "Get Started",
  "/account": "Account",
  "/sales": "Sales",
  "/purchases": "Purchases",
  "/inventory": "Inventory",
  "/customers": "Customers",
  "/suppliers": "Suppliers",
  "/reports": "Reports",
  "/billing": "Billing",
  "/settings": "Settings",
  "/troubleshooting": "Troubleshooting",
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
import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/Home";
import EmptyPage from "../pages/EmptyPage";
import SearchPage from "../pages/SearchPage";
import GetStarted from "../pages/GetStarted";
import ArticlePage from "../pages/ArticlePage";
import ErrorPage from "../pages/ErrorPage";
import IntroductionArticle from "../pages/IntroductionArticle";
import SetupAccountArticle from "../pages/SetupAccountArticle";
import CreateEntityArticle from "../pages/CreateEntityArticle";
import ImportDataArticle from "../pages/ImportDataArticle";
import DashboardOverviewArticle from "../pages/DashboardOverviewArticle";
import ProfileArticle from "../pages/ProfileArticle";
import TwoStepVerificationArticle from "../pages/TwoStepVerificationArticle";
import TeamMembersArticle from "../pages/TeamMembersArticle";
import PrivacySettingsArticle from "../pages/PrivacySettingsArticle";
import NotificationsArticle from "../pages/NotificationsArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      // Get Started Articles
      {
        path: "get-started",
        Component: GetStarted,
      },
      {
        path: "get-started/introduction",
        Component: IntroductionArticle,
      },
      {
        path: "get-started/setup-account",
        Component: SetupAccountArticle,
      },
      {
        path: "get-started/creating-entity",
        Component: CreateEntityArticle,
      },
      {
        path: "get-started/importing-data",
        Component: ImportDataArticle,
      },
       {
        path: "get-started/dashboard-overview",
        Component: DashboardOverviewArticle,
      },
      // Accounts Articles
      {
        path: "account",
        Component: ArticlePage,
      },
      {
        path: "account/profile",
        Component: ProfileArticle,
      },
      {
        path: "account/two-step-verification",
        Component: TwoStepVerificationArticle,
      },
      {
        path: "account/team-members",
        Component: TeamMembersArticle,
      },
      {
        path: "account/privacy",
        Component: PrivacySettingsArticle,
      },
      {
        path: "account/notifications",
        Component: NotificationsArticle,
      },
       // Inventory Articles
      {
        path: "inventory",
        Component: ArticlePage,
      },  
      {
        path: "inventory/add-products",
        Component: ArticlePage,
      },  
      {
        path: "inventory/bulk-products",
        Component: ArticlePage,
      },  
      {
        path: "inventory/stock-adjustments",
        Component: ArticlePage,
      },  
      {
        path: "inventory/stock-alerts",
        Component: ArticlePage,
      },  
      {
        path: "inventory/barcode",
        Component: ArticlePage,
      }, 
      // Sales Articles
      {
        path: "sales",
        Component: ArticlePage,
      },
      {
        path: "sales/record-sale",
        Component: ArticlePage,
      },
      {
        path: "sales/invoices",
        Component: ArticlePage,
      },
      {
        path: "sales/returns",
        Component: ArticlePage,
      },
      {
        path: "sales/discounts-taxes",
        Component: ArticlePage,
      },
      {
        path: "sales/daily-summary",
        Component: ArticlePage,
      },   
      // Purchases Articles
      {
        path: "purchases",
        Component: ArticlePage,
      },
      {
        path: "purchases/recording-purchase",
        Component: ArticlePage,
      },
      {
        path: "purchases/supplier-payments",
        Component: ArticlePage,
      },
      {
        path: "purchases/returns-refunds",
        Component: ArticlePage,
      },
      {
        path: "purchases/expenses",
        Component: ArticlePage,
      },
      // Payments Articles
      {
        path: "payments",
        Component: ArticlePage,
      },
      {
        path: "payments/mode-of-payments",
        Component: ArticlePage,
      },
      {
        path: "payments/payments-received",
        Component: ArticlePage,
      },
      {
        path: "payments/payments-made",
        Component: ArticlePage,
      },
      {
        path: "payments/integrations",
        Component: ArticlePage,
      },
      // Customers Articles
      {
        path: "customers",
        Component: ArticlePage,
      },

      {
        path: "customers/add-customer",
        Component: ArticlePage,
      },
      {
        path: "customers/customer-payments",
        Component: ArticlePage,
      },
      // Suppliers Articles
      {
        path: "suppliers",
        Component: ArticlePage,
      },
      {
        path: "suppliers/add-supplier",
        Component: ArticlePage,
      },
      {
        path: "suppliers/receivables",
        Component: ArticlePage,
      },
      {
        path: "suppliers/payables",
        Component: ArticlePage,
      },  
      // Reports Articles
      {
        path: "reports",
        Component: ArticlePage,
      },
      {
        path: "reports/profit-loss",
        Component: ArticlePage,
      },
      {
        path: "reports/cash-flow",
        Component: ArticlePage,
      },
      {
        path: "reports/export-reports",
        Component: ArticlePage,
      },
      {
        path: "reports/sales-analytics",
        Component: ArticlePage,
      },
      // Settings Articles
      {
        path: "settings",
        Component: ArticlePage,
      },
      // Troubleshooting Articles
      {
        path: "troubleshooting",
        Component: ArticlePage,
      },
      {
        path: "troubleshooting/sync-issues",
        Component: ArticlePage,
      },
       {
        path: "troubleshooting/login-issues",
        Component: ArticlePage,
      },
       {
        path: "troubleshooting/missing-data",
        Component: ArticlePage,
      },
      {
        path: "troubleshooting/performance",
        Component: ArticlePage,
      },
      {
        path: "troubleshooting/contact-support",
        Component: ArticlePage,
      },
      // Fallback Routes
      {
        path: ":categoryId/:articleSlug",
        Component: EmptyPage,
      },
      // Search Route
      {
        path: "search",
        Component: SearchPage,
      },
    ],
  },
]);
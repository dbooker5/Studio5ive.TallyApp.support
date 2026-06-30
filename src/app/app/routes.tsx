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
import AddProductsArticle from "../pages/AddProductsArticle";
import BulkProductsArticle from "../pages/BulkProductsArticle";
import StockAdjustmentsArticle from "../pages/StockAdjustmentsArticle";
import StockAlertsArticle from "../pages/StockAlertsArticle";
import BarcodeScanningArticle from "../pages/BarcodeScanningArticle";

import RecordingPurchaseArticle from "../pages/RecordingPurchaseArticle";
import SupplierPaymentsArticle from "../pages/SupplierPaymentsArticle";
import ReturnsRefundsArticle from "../pages/ReturnsRefundsArticle";
import ExpensesArticle from "../pages/ExpensesArticle";
import RecordingSaleArticle from "../pages/RecordingSaleArticle";
import CreatingInvoicesArticle from "../pages/CreatingInvoicesArticle";
import SalesReturnsRefundsArticle from "../pages/SalesReturnsRefundsArticle";
import DiscountTaxManagementArticle from "../pages/DiscountTaxManagementArticle";
import DailySalesSummaryArticle from "../pages/DailySalesSummaryArticle";
import ModeOfPaymentsArticle from "../pages/ModeOfPaymentsArticle";
import PaymentsReceivedArticle from "../pages/PaymentsReceivedArticle";
import PaymentsMadeArticle from "../pages/PaymentsMadeArticle";
import IntegrationsArticle from "../pages/IntegrationsArticle";
import AddingCustomersArticle from "../pages/AddingCustomersArticle";
import CustomerLedgerArticle from "../pages/CustomerLedgerArticle";
import SendingPaymentRemindersArticle from "../pages/SendingPaymentRemindersArticle";
import CreditLimitSettingsArticle from "../pages/CreditLimitSettingsArticle";
import AddingSuppliersArticle from "../pages/AddingSuppliersArticle";
import ReceivablesArticle from "../pages/ReceivablesArticle";
import PayablesArticle from "../pages/PayablesArticle";
import ProfitLossReportArticle from "../pages/ProfitLossReportArticle";
import CashFlowStatementArticle from "../pages/CashFlowStatementArticle";
import ExportingReportsArticle from "../pages/ExportingReportsArticle";
import SalesAnalyticsArticle from "../pages/SalesAnalyticsArticle";
import CurrencySettingsArticle from "../pages/CurrencySettingsArticle";
import TaxConfigurationArticle from "../pages/TaxConfigurationArticle";
import FiscalYearSettingsArticle from "../pages/FiscalYearSettingsArticle";
import DataBackupRestoreArticle from "../pages/DataBackupRestoreArticle";
import AppNotSyncingArticle from "../pages/AppNotSyncingArticle";
import LoginProblemsArticle from "../pages/LoginProblemsArticle";
import MissingTransactionsArticle from "../pages/MissingTransactionsArticle";
import AppCrashingorSlowArticle from "../pages/AppCrashingorSlowArticle";
import ContactingSupportArticle from "../pages/ContactingSupportArticle";

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
        Component: AddProductsArticle,
      },  
      {
        path: "inventory/bulk-products",
        Component: BulkProductsArticle,
      },  
      {
        path: "inventory/stock-adjustments",
        Component: StockAdjustmentsArticle,
      },  
      {
        path: "inventory/stock-alerts",
        Component: StockAlertsArticle,
      },  
      {
        path: "inventory/barcode",
        Component: BarcodeScanningArticle,
      }, 
      // Sales Articles
      { path: "sales", Component: ArticlePage },
      { path: "sales/record-sale", Component: RecordingSaleArticle },
      { path: "sales/invoices", Component: CreatingInvoicesArticle },
      { path: "sales/returns", Component: SalesReturnsRefundsArticle },
      { path: "sales/discounts-taxes", Component: DiscountTaxManagementArticle },
      { path: "sales/daily-summary", Component: DailySalesSummaryArticle },
      // Purchases Articles
      { path: "purchases", Component: ArticlePage },
      { path: "purchases/recording-purchase", Component: RecordingPurchaseArticle },
      { path: "purchases/supplier-payments", Component: SupplierPaymentsArticle },
      { path: "purchases/returns-refunds", Component: ReturnsRefundsArticle },
      { path: "purchases/expenses", Component: ExpensesArticle },
      // Payments Articles
      { path: "payments", Component: ArticlePage },
      { path: "payments/mode-of-payments", Component: ModeOfPaymentsArticle },
      { path: "payments/payments-received", Component: PaymentsReceivedArticle },
      { path: "payments/payments-made", Component: PaymentsMadeArticle },
      { path: "payments/integrations", Component: IntegrationsArticle },
      // Customers Articles
      { path: "customers", Component: ArticlePage },
      { path: "customers/add-customers", Component: AddingCustomersArticle },
      { path: "customers/customer-ledger", Component: CustomerLedgerArticle },
      { path: "customers/payment-reminders", Component: SendingPaymentRemindersArticle },
      { path: "customers/credit-limits", Component: CreditLimitSettingsArticle },
      // Suppliers Articles
      { path: "suppliers", Component: ArticlePage },
      { path: "suppliers/add-suppliers", Component: AddingSuppliersArticle },
      { path: "suppliers/receivables", Component: ReceivablesArticle },
      { path: "suppliers/payables", Component: PayablesArticle },
      // Reports Articles
      { path: "reports", Component: ArticlePage },
      { path: "reports/profit-loss", Component: ProfitLossReportArticle },
      { path: "reports/cash-flow", Component: CashFlowStatementArticle },
      { path: "reports/export-reports", Component: ExportingReportsArticle },
      { path: "reports/sales-analytics", Component: SalesAnalyticsArticle },
      // Settings Articles
      { path: "settings", Component: ArticlePage },
      { path: "settings/currency", Component: CurrencySettingsArticle },
      { path: "settings/tax-config", Component: TaxConfigurationArticle },
      { path: "settings/fiscal-year", Component: FiscalYearSettingsArticle },
      { path: "settings/backup", Component: DataBackupRestoreArticle },
      // Troubleshooting Articles
      { path: "troubleshooting", Component: ArticlePage },
      { path: "troubleshooting/sync-issues", Component: AppNotSyncingArticle },
      { path: "troubleshooting/login-issues", Component: LoginProblemsArticle },
      { path: "troubleshooting/missing-data", Component: MissingTransactionsArticle },
      { path: "troubleshooting/performance", Component: AppCrashingorSlowArticle },
      { path: "troubleshooting/contact-support", Component: ContactingSupportArticle },
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
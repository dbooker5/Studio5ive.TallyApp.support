import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Home from "../pages/Home";
import EmptyPage from "../pages/EmptyPage";
import SearchPage from "../pages/SearchPage";
import GetStarted from "../pages/getStarted/GetStarted";
import ArticlePage from "../pages/ArticlePage";
import ErrorPage from "../pages/ErrorPage";
import IntroductionArticle from "../pages/getStarted/IntroductionArticle";
import SetupAccountArticle from "../pages/getStarted/SetupAccountArticle";
import CreateEntityArticle from "../pages/getStarted/CreateEntityArticle";
import ImportDataArticle from "../pages/getStarted/ImportDataArticle";
import DashboardOverviewArticle from "../pages/getStarted/DashboardOverviewArticle";
import ProfileArticle from "../pages/account/ProfileArticle";
import TwoStepVerificationArticle from "../pages/account/TwoStepVerificationArticle";
import TeamMembersArticle from "../pages/account/TeamMembersArticle";
import PrivacySettingsArticle from "../pages/account/PrivacySettingsArticle";
import NotificationsArticle from "../pages/account/NotificationsArticle";
import AddProductsArticle from "../pages/inventory/AddProductsArticle";
import BulkProductsArticle from "../pages/inventory/BulkProductsArticle";
import StockAdjustmentsArticle from "../pages/inventory/StockAdjustmentsArticle";
import StockAlertsArticle from "../pages/inventory/StockAlertsArticle";
import BarcodeScanningArticle from "../pages/inventory/BarcodeScanningArticle";

import RecordingPurchaseArticle from "../pages/purchases/RecordingPurchaseArticle";
import SupplierPaymentsArticle from "../pages/suppliers/SupplierPaymentsArticle";
import ReturnsRefundsArticle from "../pages/purchases/ReturnsRefundsArticle";
import ExpensesArticle from "../pages/purchases/ExpensesArticle";
import RecordingSaleArticle from "../pages/sales/RecordingSaleArticle";
import CreatingInvoicesArticle from "../pages/sales/CreatingInvoicesArticle";
import SalesReturnsRefundsArticle from "../pages/sales/SalesReturnsRefundsArticle";
import DiscountTaxManagementArticle from "../pages/sales/DiscountTaxManagementArticle";
import DailySalesSummaryArticle from "../pages/sales/DailySalesSummaryArticle";
import ModeOfPaymentsArticle from "../pages/payments/ModeOfPaymentsArticle";
import PaymentsReceivedArticle from "../pages/payments/PaymentsReceivedArticle";
import PaymentsMadeArticle from "../pages/payments/PaymentsMadeArticle";
import IntegrationsArticle from "../pages/payments/IntegrationsArticle";
import AddingCustomersArticle from "../pages/customers/AddingCustomersArticle";
import CustomerLedgerArticle from "../pages/customers/CustomerLedgerArticle";
import SendingPaymentRemindersArticle from "../pages/customers/SendingPaymentRemindersArticle";
import CreditLimitSettingsArticle from "../pages/customers/CreditLimitSettingsArticle";
import AddingSuppliersArticle from "../pages/suppliers/AddingSuppliersArticle";
import ReceivablesArticle from "../pages/suppliers/ReceivablesArticle";
import PayablesArticle from "../pages/purchases/PayablesArticle";
import ReportsAndAnalyticsArticle from "../pages/reports/Reports&AnalyticsArticle";
import FilteringReportsArticle from "../pages/reports/FilteringReportsArticle";
import CurrencySettingsArticle from "../pages/settings/CurrencySettingsArticle";
import TaxConfigurationArticle from "../pages/settings/TaxConfigurationArticle";
import FiscalYearSettingsArticle from "../pages/settings/FiscalYearSettingsArticle";
import DataBackupRestoreArticle from "../pages/settings/DataBackupRestoreArticle";
import AppNotSyncingArticle from "../pages/troubleshooting/AppNotSyncingArticle";
import LoginProblemsArticle from "../pages/troubleshooting/LoginProblemsArticle";
import MissingTransactionsArticle from "../pages/troubleshooting/MissingTransactionsArticle";
import AppCrashingorSlowArticle from "../pages/troubleshooting/AppCrashingorSlowArticle";
import ContactingSupportArticle from "../pages/troubleshooting/ContactingSupportArticle";

// Sales pages
import Sales from "../pages/sales/Sales";
import SalesOverviewArticle from "../pages/sales/SalesOverviewArticle";
import CreateSaleArticle from "../pages/sales/CreateSaleArticle";
import SelectProductsArticle from "../pages/sales/SelectProductsArticle";
import PaymentMethodsArticle from "../pages/sales/PaymentMethodsArticle";
import ConfirmPaymentArticle from "../pages/sales/ConfirmPaymentArticle";
import SelectCustomerArticle from "../pages/sales/SelectCustomerArticle";
import PaymentStatusArticle from "../pages/sales/PaymentStatusArticle";

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
      // Sales
      {
        path: "sales",
        Component: Sales,
      },
      {
        path: "sales/overview",
        Component: SalesOverviewArticle,
      },
      {
        path: "sales/create-sale",
        Component: CreateSaleArticle,
      },
      {
        path: "sales/select-products",
        Component: SelectProductsArticle,
      },
      {
        path: "sales/payment-methods",
        Component: PaymentMethodsArticle,
      },
      {
        path: "sales/confirm-payment",
        Component: ConfirmPaymentArticle,
      },
      {
        path: "sales/select-customer",
        Component: SelectCustomerArticle,
      },
      {
        path: "sales/payment-status",
        Component: PaymentStatusArticle,
      },
      // Purchases Articles
      { path: "purchases", Component: ArticlePage },
      { path: "purchases/recording-purchase", Component: RecordingPurchaseArticle },
      { path: "purchases/payables", Component: PayablesArticle },
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
      { path: "suppliers/supplier-payments", Component: SupplierPaymentsArticle },
      // Reports Articles
      { path: "reports", Component: ArticlePage },
      { path: "reports/reports-analytics", Component: ReportsAndAnalyticsArticle },
      { path: "reports/filtering-sorting", Component: FilteringReportsArticle },
      //{ path: "reports/export-reports", Component: ExportingReportsArticle },
      //{ path: "reports/sales-analytics", Component: SalesAnalyticsArticle },
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
// Resolves the asset *keys* stored in `screenshot` / `screenshotGrid` blocks
// (e.g. "sales/sales-empty-mobile") to the actual bundled image imported by
// Vite. Images stay as frontend build assets rather than DB/blob storage —
// the database only ever stores the key string.
//
// Add a new `import` + map entry here whenever a new screenshot is uploaded
// to src/app/assets and referenced from an article's content blocks.

import salesEmptyMobile from "../assets/sales/sales-empty-mobile.jpeg";
import salesUpdatedMobile from "../assets/sales/sales-updated-mobile.jpeg";
import salesProductListMobile from "../assets/sales/sales-product-list-mobile.jpeg";
import salesSelectedProductsMobile from "../assets/sales/sales-selected-products-mobile.jpeg";
import salesPaymentMethodMobile from "../assets/sales/sales-payment-method-mobile.jpeg";
import salesFullPaymentMobile from "../assets/sales/sales-full-payment-mobile.jpeg";
import salesSplitPaymentMobile from "../assets/sales/sales-split-payment-mobile.jpeg";
import salesPartialPaymentMobile from "../assets/sales/sales-partial-payment-mobile.jpeg";
import salesPaymentCompletedMobile from "../assets/sales/sales-payment-completed-mobile.jpeg";
import salesPaymentIncompleteMobile from "../assets/sales/sales-payment-incomplete-mobile.jpeg";
import salesCustomerMobile from "../assets/sales/sales-customer-mobile.jpeg";

export const assetMap: Record<string, string> = {
  "sales/sales-empty-mobile": salesEmptyMobile,
  "sales/sales-updated-mobile": salesUpdatedMobile,
  "sales/sales-product-list-mobile": salesProductListMobile,
  "sales/sales-selected-products-mobile": salesSelectedProductsMobile,
  "sales/sales-payment-method-mobile": salesPaymentMethodMobile,
  "sales/sales-full-payment-mobile": salesFullPaymentMobile,
  "sales/sales-split-payment-mobile": salesSplitPaymentMobile,
  "sales/sales-partial-payment-mobile": salesPartialPaymentMobile,
  "sales/sales-payment-completed-mobile": salesPaymentCompletedMobile,
  "sales/sales-payment-incomplete-mobile": salesPaymentIncompleteMobile,
  "sales/sales-customer-mobile": salesCustomerMobile,
};

/** Resolves an asset key to its bundled URL. Falls back to the raw key
 * (e.g. an already-absolute URL) if there's no local match. */
export function resolveAsset(key: string): string {
  return assetMap[key] ?? key;
}

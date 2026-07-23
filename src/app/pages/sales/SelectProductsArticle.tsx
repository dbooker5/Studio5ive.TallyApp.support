import salesProductListMobile from "../../assets/sales/sales-product-list-mobile.jpeg";
import salesSelectedProductsMobile from "../../assets/sales/sales-selected-products-mobile.jpeg";

import {
  BulletList,
  DesktopNotice,
  Note,
  SalesArticleShell,
  Screenshot,
  ScreenshotGrid,
  Step,
  salesRelatedArticles,
} from "./SalesArticleShared";

const mobileContent = (
  <div>
    <p className="mb-4 text-sm leading-relaxed text-[#A1A1AA]">
      You can add several products to one sale. As products are selected,
      TallyApp updates the totals shown at the top of the Sell screen.
    </p>

    <Step n={1} title="Find the first product">
      Search, browse or scan the product. Tap the{" "}
      <strong className="text-white">plus (+)</strong> action to add it to the
      current sale.
    </Step>

    <Step n={2} title="Continue adding products">
      Repeat the process for every product the customer is buying. You do not
      need to complete each item as a separate transaction.
    </Step>

    <ScreenshotGrid>
      <Screenshot
        src={salesProductListMobile}
        alt="Product list used when creating a TallyApp sale"
        caption="Search or browse products, then use the plus action to add them."
      />
      <Screenshot
        src={salesSelectedProductsMobile}
        alt="Selected products panel in TallyApp"
        caption="The Products panel shows everything currently included in the sale."
      />
    </ScreenshotGrid>

    <Step n={3} title="Watch the totals update">
      The cards at the top update as you add products:
      <BulletList
        items={[
          <><strong className="text-white">Total Items</strong> counts the different product lines.</>,
          <><strong className="text-white">Total Units</strong> adds all product quantities.</>,
          <><strong className="text-white">Total Amount</strong> is the expected value of the sale.</>,
        ]}
      />
    </Step>

    <Step n={4} title="Review quantities and selling prices">
      Tap a selected item to edit its{" "}
      <strong className="text-white">quantity</strong> or{" "}
      <strong className="text-white">selling price</strong>. Use the red delete
      icon to remove an item from the transaction.
    </Step>

    <Step n={5} title="Continue to payment">
      Once all products are correct, tap the cyan{" "}
      <strong className="text-white">Sell</strong> button at the bottom of the
      Products panel.
    </Step>

    <Note type="warning">
      Always review the quantity, price and total before tapping Sell. These
      values determine the expected payment and the stock that will be deducted.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Search or scan products">
      Use the product search, filters or scanner to find each item.
    </Step>
    <Step n={2} title="Add several products">
      Add all products to the same basket. The total items, units and amount
      update automatically.
    </Step>
    <Step n={3} title="Edit and review">
      Adjust quantities or selling prices, remove unwanted products, then click
      Sell to continue.
    </Step>
  </DesktopNotice>
);

export default function SelectProductsArticle() {
  return (
    <SalesArticleShell
      title="Selecting Products & Scanning Barcodes"
      description="Add multiple products to one transaction, review quantities and prices, and continue when the sale total is correct."
      readTime="6 min"
      videoTitle="Adding products to a sale"
      videoSubtitle="Select, edit and review products before payment"
      videoDuration="3:05"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

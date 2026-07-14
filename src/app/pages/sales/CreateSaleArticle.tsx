import salesEmptyMobile from "../../assets/sales/sales-empty-mobile.jpeg";
import salesProductListMobile from "../../assets/sales/sales-product-list-mobile.jpeg";

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
      A new sale can be started directly from the Sales tab. TallyApp then opens
      the Sell screen where you can choose the products for the transaction.
    </p>

    <Step n={1} title="Open the Sales tab">
      From the selected business entity, tap{" "}
      <strong className="text-white">Sales</strong>. The first view displays
      today's figures and transactions.
    </Step>

    <Step n={2} title="Start the sale">
      When no sales exist, tap the blue{" "}
      <strong className="text-white">Create</strong> button. You can also use the{" "}
      <strong className="text-white">plus (+)</strong> quick action above the
      sales list.
    </Step>

    <ScreenshotGrid>
      <Screenshot
        src={salesEmptyMobile}
        alt="TallyApp Sales tab showing the Create button"
        caption="Use Create in the empty-state card or the plus quick action to begin."
      />
      <Screenshot
        src={salesProductListMobile}
        alt="TallyApp Sell page showing products"
        caption="The Sell page opens with a searchable product list and sale totals at the top."
      />
    </ScreenshotGrid>

    <Step n={3} title="Check that you are in the correct business">
      Before selecting products, confirm that you opened Sales from the correct
      entity. Stock, prices and the final transaction will be recorded against
      that business.
    </Step>

    <Step n={4} title="Choose how to find products">
      You can:
      <BulletList
        items={[
          "Search for a product by name.",
          "Use filters to narrow the product list.",
          "Browse through the available pages.",
          "Use the scanner icon when recording a product by barcode.",
        ]}
      />
    </Step>

    <Note>
      Products with insufficient or zero stock may appear differently. Confirm
      stock availability before attempting to complete the sale.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Open Sales">
      Select the correct business entity and open the Sales section.
    </Step>
    <Step n={2} title="Click Create Sale or the plus action">
      The desktop Sell screen opens with the same product search, filters and
      transaction totals.
    </Step>
    <Step n={3} title="Confirm the business and stock">
      Product prices and quantities are taken from the selected entity, just as
      they are on mobile.
    </Step>
  </DesktopNotice>
);

export default function CreateSaleArticle() {
  return (
    <SalesArticleShell
      title="Starting a New Sale"
      description="Open the Sales tab and begin a transaction using the Create button or the plus quick action."
      readTime="4 min"
      videoTitle="Starting a new sale"
      videoSubtitle="Open the Sell screen and prepare to add products"
      videoDuration="1:50"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

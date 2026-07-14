import salesEmptyMobile from "../../assets/sales/sales-empty-mobile.jpeg";
import salesUpdatedMobile from "../../assets/sales/sales-updated-mobile.jpeg";

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
      The Sales tab opens with figures for the current day. It lets you quickly
      see what was expected, what has been paid and what customers still owe.
    </p>

    <Step n={1} title="Open the business entity">
      Select the business you want to work in, then tap the{" "}
      <strong className="text-white">Sales</strong> tab.
    </Step>

    <Step n={2} title="Review today's summary cards">
      The top section displays:
      <BulletList
        items={[
          <><strong className="text-white">Expected Sales:</strong> the full value of sales recorded today.</>,
          <><strong className="text-white">Total Revenue:</strong> the amount already paid.</>,
          <><strong className="text-white">Total Balance:</strong> unpaid amounts still outstanding.</>,
          <><strong className="text-white">Profit/Losses:</strong> today's calculated profit or loss.</>,
          <><strong className="text-white">Items Sold:</strong> the number of different products sold.</>,
          <><strong className="text-white">Units Sold:</strong> the total quantity sold.</>,
        ]}
      />
    </Step>

    <ScreenshotGrid>
      <Screenshot
        src={salesEmptyMobile}
        alt="Sales tab with no sales recorded for the current day"
        caption="Before the first sale, all totals are zero and TallyApp shows an Empty Record message."
      />
      <Screenshot
        src={salesUpdatedMobile}
        alt="Sales tab showing updated totals and sales records"
        caption="After sales are recorded, the summary cards and transaction list update."
      />
    </ScreenshotGrid>

    <Step n={3} title="Use the quick action buttons">
      Use the download button to export, the{" "}
      <strong className="text-white">plus</strong> button to create a sale, the
      filter button to narrow the records and the refresh button to reload the
      latest values.
    </Step>

    <Step n={4} title="Review individual sales">
      Each sale shows its reference number, customer, units, total paid and
      expected amount. A sale with a lower paid amount will contribute to the
      outstanding balance.
    </Step>

    <Note>
      The main Sales view focuses on the current day. Use{" "}
      <strong className="text-white">See all Sales</strong>, search or filters
      when you need older transactions.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Open Sales from the business workspace">
      Select the business entity, then open the Sales section from the main
      navigation.
    </Step>
    <Step n={2} title="Read the same daily summary">
      Expected sales, revenue, balance, profit or loss, items sold and units
      sold use the same calculations as mobile.
    </Step>
    <Step n={3} title="Use search, filters and the transaction table">
      The larger screen gives more room for the sales list, but the records and
      statuses remain the same.
    </Step>
  </DesktopNotice>
);

export default function SalesOverviewArticle() {
  return (
    <SalesArticleShell
      title="Sales Overview"
      description="Understand the current-day sales cards, quick actions and transaction list before creating a new sale."
      readTime="4 min"
      videoTitle="Understanding the Sales tab"
      videoSubtitle="Learn what each sales card and action means"
      videoDuration="2:10"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

import salesPaymentCompletedMobile from "../../assets/sales/sales-payment-completed-mobile.jpeg";
import salesPaymentIncompleteMobile from "../../assets/sales/sales-payment-incomplete-mobile.jpeg";
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
      After the final confirmation, TallyApp displays a status based on the
      amount paid. The sale is then added to the Sales tab and stock is
      deducted.
    </p>

    <Step n={1} title="Completed payment">
      When the amount paid matches the expected amount, TallyApp displays{" "}
      <strong className="text-white">Payment Completed</strong>. You can print
      the receipt before tapping Done.
    </Step>

    <Step n={2} title="Incomplete payment">
      When the amount paid is lower than the expected amount, TallyApp displays{" "}
      <strong className="text-white">Payment Incomplete</strong>. The unpaid
      difference remains as the sale balance.
    </Step>

    <ScreenshotGrid>
      <Screenshot
        src={salesPaymentCompletedMobile}
        alt="TallyApp Payment Completed confirmation"
        caption="Completed payment: the sale has no remaining balance."
      />
      <Screenshot
        src={salesPaymentIncompleteMobile}
        alt="TallyApp Payment Incomplete confirmation"
        caption="Incomplete payment: the sale is saved with an outstanding amount."
      />
    </ScreenshotGrid>

    <Step n={3} title="Print the receipt when required">
      On a completed payment, tap{" "}
      <strong className="text-white">Print Receipt</strong> to produce the
      customer's receipt using the available printing or sharing option.
    </Step>

    <Step n={4} title="Return to Sales">
      Tap <strong className="text-white">Done</strong>. TallyApp returns to the
      Sales tab and refreshes the daily cards and list.
    </Step>

    <Screenshot
      src={salesUpdatedMobile}
      alt="Updated Sales tab after completed and incomplete payments"
      caption="The transaction list shows total paid and expected amount, while the summary cards show revenue and balance."
    />

    <Step n={5} title="Read the updated record">
      The saved transaction includes:
      <BulletList
        items={[
          "Sale reference number",
          "Customer name when selected",
          "Units sold",
          "Total paid",
          "Expected sale amount",
        ]}
      />
    </Step>

    <Note type="success">
      Both completed and incomplete transactions deduct the sold stock. The
      difference is that an incomplete transaction also keeps an outstanding
      customer balance.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Review the final status">
      A fully paid sale receives a completed status. A sale with a remaining
      balance receives an incomplete status.
    </Step>
    <Step n={2} title="Print or share the receipt">
      Use the receipt action when the customer requires proof of payment.
    </Step>
    <Step n={3} title="Return to the sales list">
      The daily totals and transaction list update with revenue, outstanding
      balance, quantities and profit or loss.
    </Step>
  </DesktopNotice>
);

export default function PaymentStatusArticle() {
  return (
    <SalesArticleShell
      title="Completing a Sale & Payment Status"
      description="Understand completed and incomplete payment confirmations, receipts, stock deduction and the updated Sales tab."
      readTime="5 min"
      videoTitle="Completing a sale"
      videoSubtitle="Read the payment status and review the updated transaction"
      videoDuration="2:30"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

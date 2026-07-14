import salesFullPaymentMobile from "../../assets/sales/sales-full-payment-mobile.jpeg";
import salesPartialPaymentMobile from "../../assets/sales/sales-partial-payment-mobile.jpeg";
import salesSplitPaymentMobile from "../../assets/sales/sales-split-payment-mobile.jpeg";

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
      The Enter Amount page compares what the sale is worth with what the
      customer is paying. It also allows authorised users to correct the sale
      date and add a due date for an outstanding balance.
    </p>

    <Step n={1} title="Check the expected amount">
      Confirm that <strong className="text-white">Expected Amount</strong>{" "}
      matches the products and quantities selected earlier.
    </Step>

    <Step n={2} title="Enter the amount for each payment method">
      Enter the actual amount received under each selected method. TallyApp
      continuously updates <strong className="text-white">Total entered</strong>.
    </Step>

    <ScreenshotGrid>
      <Screenshot
        src={salesFullPaymentMobile}
        alt="Full payment entered using M-Pesa"
        caption="Full payment: total entered matches the expected amount."
      />
      <Screenshot
        src={salesSplitPaymentMobile}
        alt="Split payment entered using M-Pesa and cash"
        caption="Split payment: the M-Pesa and cash amounts combine to the full total."
      />
    </ScreenshotGrid>

    <Step n={3} title="Record a partial or zero payment when necessary">
      When the total entered is lower than the expected amount, the difference
      becomes the customer's outstanding balance.
    </Step>

    <Screenshot
      src={salesPartialPaymentMobile}
      alt="Partial payment page showing an unpaid balance and due date"
      caption="A zero or partial payment requires careful review because the remaining amount stays outstanding."
    />

    <Step n={4} title="Set the sale date and time">
      Users with the required permission may tap the Sale Date & Time field and
      record the correct transaction date. Users without that permission should
      leave the assigned date unchanged.
    </Step>

    <Step n={5} title="Add an expected due date">
      When payment is incomplete, add the date by which the remaining balance is
      expected. This helps the business follow up on credit sales.
    </Step>

    <Step n={6} title="Review and continue">
      Before continuing, check:
      <BulletList
        items={[
          "Expected amount",
          "Amounts entered for each method",
          "Total entered",
          "Sale date and time",
          "Due date for any remaining balance",
        ]}
      />
    </Step>

    <Note type="warning">
      Entering zero records the sale without storing a payment against the
      selected method. Only do this when the entire amount should remain
      outstanding.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Compare expected and entered totals">
      Confirm the expected amount, then enter the money received under each
      selected payment method.
    </Step>
    <Step n={2} title="Handle split or partial payment">
      Multiple method fields must add up to the amount received. A difference
      from the expected amount becomes the outstanding balance.
    </Step>
    <Step n={3} title="Review dates">
      Edit the sale date only when your role permits it and add a due date for
      partial or zero-payment sales.
    </Step>
  </DesktopNotice>
);

export default function ConfirmPaymentArticle() {
  return (
    <SalesArticleShell
      title="Confirming Full or Partial Payments"
      description="Verify the expected amount, enter single or split payments, and record balances and due dates correctly."
      readTime="6 min"
      videoTitle="Confirming the payment amount"
      videoSubtitle="Handle full, split, partial and zero-payment sales"
      videoDuration="3:40"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

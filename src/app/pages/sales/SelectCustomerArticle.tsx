import salesCustomerMobile from "../../assets/sales/sales-customer-mobile.jpeg";

import {
  BulletList,
  DesktopNotice,
  Note,
  SalesArticleShell,
  Screenshot,
  Step,
  salesRelatedArticles,
} from "./SalesArticleShared";

const mobileContent = (
  <div>
    <p className="mb-4 text-sm leading-relaxed text-[#A1A1AA]">
      A sale can be linked to a saved customer. This is especially useful for
      credit sales, statements, balances and future payment follow-up.
    </p>

    <Step n={1} title="Search for the customer">
      Use the search field to find a customer by name or phone number, then tap
      the correct record.
    </Step>

    <Screenshot
      src={salesCustomerMobile}
      alt="TallyApp Select Customer screen"
      caption="Choose a saved customer, add a new one or skip for a walk-in sale."
    />

    <Step n={2} title="Add a new customer when needed">
      Tap the <strong className="text-white">plus (+)</strong> button when the
      customer is not yet saved. Complete the customer details, then return to
      the sale.
    </Step>

    <Step n={3} title="Skip for an anonymous or walk-in customer">
      Tap <strong className="text-white">Skip</strong> when the business does not
      need to attach the transaction to a customer.
    </Step>

    <Step n={4} title="Choose carefully for credit sales">
      Before completing an unpaid or partially paid sale, confirm the correct
      customer because the balance will be associated with that account.
    </Step>

    <BulletList
      items={[
        "Linking a customer improves ledger and statement accuracy.",
        "Phone numbers make it easier to distinguish customers with similar names.",
        "Use Skip only when customer-level tracking is not required.",
      ]}
    />

    <Note type="warning">
      Avoid assigning a credit balance to the wrong customer. Review the name
      and phone number before proceeding.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Search the customer list">
      Find the customer by name or phone number and select the correct record.
    </Step>
    <Step n={2} title="Create or skip">
      Add a new customer when needed, or skip when recording a walk-in sale.
    </Step>
    <Step n={3} title="Confirm credit-sale ownership">
      Partial and unpaid balances should always be linked to the correct customer
      when customer tracking is required.
    </Step>
  </DesktopNotice>
);

export default function SelectCustomerArticle() {
  return (
    <SalesArticleShell
      title="Selecting a Customer"
      description="Attach the transaction to a saved customer, add a new customer or continue as a walk-in sale."
      readTime="4 min"
      videoTitle="Selecting a customer"
      videoSubtitle="Link sales and outstanding balances to the correct customer"
      videoDuration="1:45"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

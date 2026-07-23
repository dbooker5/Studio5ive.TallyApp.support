import salesPaymentMethodMobile from "../../assets/sales/sales-payment-method-mobile.jpeg";

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
      After reviewing the products, choose how the customer is paying. TallyApp
      supports one payment method or a combination of several methods.
    </p>

    <Step n={1} title="Choose a single payment method">
      Tap one option when the customer is paying the full amount using one
      method, such as:
      <BulletList
        items={[
          "Cash",
          "M-Pesa",
          "Debit or credit card",
          "Any other payment mode configured for the business",
        ]}
      />
    </Step>

    <Step n={2} title="Choose multiple payment methods">
      Select more than one option when the customer splits the payment—for
      example, part M-Pesa and part cash.
    </Step>

    <Screenshot
      src={salesPaymentMethodMobile}
      alt="TallyApp Payment Method screen"
      caption="Select one or more payment methods. Selected methods use the cyan highlight."
    />

    <Step n={3} title="Decide whether to include tax">
      Enable <strong className="text-white">Include Tax</strong> when the sale
      should use the tax rate configured for the entity. The screen shows the
      active percentage.
    </Step>

    <Step n={4} title="Continue to amount confirmation">
      Tap the cyan <strong className="text-white">Continue</strong> button. The
      next page creates an amount field for every selected payment method.
    </Step>

    <Note>
      The payment method selection does not by itself confirm how much was
      received. You enter and verify the actual amounts on the next page.
    </Note>
  </div>
);

const desktopContent = (
  <DesktopNotice>
    <Step n={1} title="Select the payment method cards">
      Choose one card for a single-method payment or several cards for a split
      payment.
    </Step>
    <Step n={2} title="Confirm the tax option">
      Enable tax only when it applies to the transaction.
    </Step>
    <Step n={3} title="Continue">
      The desktop amount confirmation page will show one input for each method
      selected.
    </Step>
  </DesktopNotice>
);

export default function PaymentMethodsArticle() {
  return (
    <SalesArticleShell
      title="Choosing Payment Methods"
      description="Accept cash, M-Pesa, card or a combination of payment methods for the same sale."
      readTime="5 min"
      videoTitle="Choosing payment methods"
      videoSubtitle="Record single and split-method customer payments"
      videoDuration="2:15"
      mobileContent={mobileContent}
      desktopContent={desktopContent}
      relatedArticles={salesRelatedArticles}
    />
  );
}

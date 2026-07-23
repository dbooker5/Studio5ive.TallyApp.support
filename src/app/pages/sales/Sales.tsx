import { Link } from "react-router";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  ChartNoAxesCombined,
  Clock3,
  PackageSearch,
  ReceiptText,
  ShoppingCart,
  UserRoundCheck,
} from "lucide-react";

import Breadcrumb from "../../components/Breadcrumb";
import VideoGuide from "../../components/VideoGuide";
import HelpFooter from "../../components/HelpFooter";
import { getCategoryById } from "../../lib/categories";

import salesEmptyMobile from "../../assets/sales/sales-empty-mobile.jpeg";
import salesUpdatedMobile from "../../assets/sales/sales-updated-mobile.jpeg";

const workflowIcons = [
  ChartNoAxesCombined,
  ShoppingCart,
  PackageSearch,
  Banknote,
  ReceiptText,
  UserRoundCheck,
  BadgeCheck,
];

export default function Sales() {
  const category = getCategoryById("sales");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
      <Breadcrumb items={[{ label: "Sales" }]} />

      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs text-[#A1A1AA]">Updated July 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">Sales guide</span>
      </div>

      <h1 className="mb-2 text-3xl font-bold leading-tight text-white">
        Sales in TallyApp
      </h1>

      <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-[#A1A1AA]">
        Learn the complete sales flow—from opening today's Sales tab and
        selecting products to collecting full or partial payments and reviewing
        the updated transaction.
      </p>

      <VideoGuide
        title="How to record a sale in TallyApp"
        subtitle="Follow the full sales process from product selection to payment"
        duration="4:20"
      />

      <section className="my-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#22D3EE]">
              Sales workflow
            </p>
            <h2 className="text-xl font-bold text-white">
              Follow the guides in order
            </h2>
          </div>

          <span className="hidden text-xs text-[#71717A] sm:inline">
            Mobile and desktop
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {category?.articles.map((article, index) => {
            const Icon = workflowIcons[index] ?? ShoppingCart;

            return (
              <Link
                key={article.id}
                to={`/sales/${article.slug}`}
                className="group rounded-2xl border border-[#27272A] bg-[#111111] p-5 transition hover:-translate-y-0.5 hover:border-[#22D3EE]/40 hover:bg-[#151515]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#22D3EE]/25 bg-[#22D3EE]/10 text-[#22D3EE]">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-white">
                        {index + 1}. {article.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="mt-1 flex-shrink-0 text-[#52525B] transition group-hover:translate-x-1 group-hover:text-[#22D3EE]"
                      />
                    </div>

                    <p className="text-sm leading-relaxed text-[#A1A1AA]">
                      {article.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#71717A]">
                      <Clock3 size={12} />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="my-10 rounded-2xl border border-[#27272A] bg-[#111111] p-5">
        <h2 className="mb-2 text-lg font-semibold text-white">
          What the Sales tab shows
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-[#A1A1AA]">
          When you first open Sales, TallyApp shows the current day's totals.
          After completing transactions, the cards and sales list update
          automatically.
        </p>

        <div className="grid items-start gap-6 sm:grid-cols-2">
          <figure>
            <img
              src={salesEmptyMobile}
              alt="Empty TallyApp Sales tab before recording a sale"
              className="mx-auto w-full max-w-[300px] rounded-xl border border-[#27272A]"
            />
            <figcaption className="mt-2 text-center text-xs text-[#71717A]">
              Sales tab before today's first transaction
            </figcaption>
          </figure>

          <figure>
            <img
              src={salesUpdatedMobile}
              alt="Updated TallyApp Sales tab after recording sales"
              className="mx-auto w-full max-w-[300px] rounded-xl border border-[#27272A]"
            />
            <figcaption className="mt-2 text-center text-xs text-[#71717A]">
              Updated totals and transaction list
            </figcaption>
          </figure>
        </div>
      </section>

      <HelpFooter />
    </div>
  );
}

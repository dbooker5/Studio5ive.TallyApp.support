import { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle, Mail, Phone } from "lucide-react";

export default function HelpFooter() {
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);

  return (
    <div className="mt-10 space-y-6 pb-16">
      {/* Feedback */}
      <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-6 text-center">
        <p className="text-white font-semibold text-base mb-1">Was this article helpful?</p>
        <p className="text-[#A1A1AA] text-sm mb-5">Let us know so we can keep improving.</p>

        {!voted ? (
          <div className="flex items-center justify-center gap-3">
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#27272A] text-[#A1A1AA] hover:border-[#22D3EE] hover:text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all text-sm font-medium"
              onClick={() => setVoted("yes")}
            >
              <ThumbsUp size={15} /> Yes, it helped
            </button>
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#27272A] text-[#A1A1AA] hover:border-[#ef4444]/50 hover:text-[#ef4444] hover:bg-[#ef4444]/10 transition-all text-sm font-medium"
              onClick={() => setVoted("no")}
            >
              <ThumbsDown size={15} /> Not really
            </button>
          </div>
        ) : (
          <div className="text-[#22D3EE] text-sm font-medium flex items-center justify-center gap-2">
            {voted === "yes" ? (
              <>
                <ThumbsUp size={15} /> Thanks for the feedback!
              </>
            ) : (
              <>
                <MessageCircle size={15} /> We'll work on improving this article.
              </>
            )}
          </div>
        )}
      </div>

      {/* Contact support */}
      <div className="rounded-2xl border border-[#27272A] bg-[#111111] p-6">
        <p className="text-white font-semibold text-base mb-1">Still need help?</p>
        <p className="text-[#A1A1AA] text-sm mb-5">Our support team is available 24/7.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="info@studio5ive.org"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#27272A] bg-[#1a1a1a] text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-sm font-medium"
          >
            <Mail size={15} className="text-[#22D3EE]" />
            Email Support
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#27272A] bg-[#1a1a1a] text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-sm font-medium"
          >
            <MessageCircle size={15} className="text-[#22D3EE]" />
            WhatsApp Chat
          </a>
          <a
            href="tel:+254706751275"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#27272A] bg-[#1a1a1a] text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/5 transition-all text-sm font-medium"
          >
            <Phone size={15} className="text-[#22D3EE]" />
            Call Support
          </a>
        </div>
      </div>
    </div>
  );
}

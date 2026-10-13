import { useEffect, useRef, useState } from "react";
import { Headset, X, Mail, MessageCircle, Paperclip, Send, CheckCircle2 } from "lucide-react";

const WHATSAPP = [
  { label: "0706 751 272", wa: "254706751272" },
  { label: "0745 735 774", wa: "254745735774" },
];
const EMAILS = ["simoninziria@studio5ive.org", "info@studio5ive.org"];
const ENDPOINT =
  (import.meta as any).env?.VITE_CONTACT_ENDPOINT || "https://formsubmit.co/info@studio5ive.org";
const MAX_FILE_MB = 5; // FormSubmit attachment limit

const fieldCls =
  "w-full bg-transparent border-0 border-b-2 border-black/50 focus:border-black outline-none py-2 text-black placeholder:text-black/55 text-sm";

export default function ContactUs() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next = [...files];
    for (const f of Array.from(list)) {
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        setError(`${f.name} is larger than ${MAX_FILE_MB}MB.`);
        continue;
      }
      next.push(f);
    }
    setFiles(next);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("_subject", `TallyApp Help Center: message from ${form.name}`);
      fd.append("_template", "table");
      fd.append("_captcha", "false");
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      files.forEach((f) => fd.append("attachment", f, f.name));
      // File uploads only work on the non-AJAX endpoint, whose response is opaque cross-origin.
      await fetch(ENDPOINT, { method: "POST", body: fd, mode: "no-cors" });
      setStatus("sent");
      setForm({ name: "", company: "", phone: "", email: "", message: "" });
      setFiles([]);
    } catch {
      setStatus("error");
      setError("We couldn't send your message. Please use WhatsApp or email below.");
    }
  };

  const waText = encodeURIComponent(
    `Hello TallyApp support, I need help.${form.message ? `\n\n${form.message}` : ""}`
  );

  return (
    <>
      <style>{`
        @keyframes tally-wave { 0% { transform: scale(1); opacity: .55 } 100% { transform: scale(2.3); opacity: 0 } }
        .tally-wave { position:absolute; inset:0; border-radius:9999px; background:#22D3EE; animation: tally-wave 2.4s ease-out infinite; pointer-events:none }
        @media (prefers-reduced-motion: reduce) { .tally-wave { animation:none; opacity:0 } }
      `}</style>

      {/* Floating button */}
      <div className="fixed z-40 right-4 bottom-4 sm:right-6 sm:bottom-6">
        <span className="tally-wave" />
        <span className="tally-wave" style={{ animationDelay: ".8s" }} />
        <span className="tally-wave" style={{ animationDelay: "1.6s" }} />
        <button
          onClick={() => {
            setStatus("idle");
            setOpen(true);
          }}
          className="relative flex items-center gap-2 rounded-full bg-[#22D3EE] text-black font-semibold px-4 py-3 sm:px-5 shadow-lg shadow-cyan-500/30 hover:bg-[#67e8f9] transition-colors"
          aria-label="Contact us"
        >
          <Headset size={20} />
          <span className="text-sm">Contact us</span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 sm:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Contact us"
        >
          <div
            className="relative w-full sm:max-w-3xl max-h-[95vh] overflow-y-auto sm:rounded-lg rounded-t-2xl text-black"
            style={{ background: "linear-gradient(135deg,#5ffbff 0%,#4fe3e6 55%,#3bb7ba 100%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 text-black hover:scale-110 transition-transform"
              aria-label="Close"
            >
              <X size={28} strokeWidth={3} />
            </button>

            <div className="p-5 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-bold pr-10 leading-snug">
                Haven't Found What You Were Looking For? Please briefly describe your question, and we'll get back
                with an answer shortly.
              </h2>

              {status === "sent" ? (
                <div className="py-14 text-center">
                  <CheckCircle2 size={48} className="mx-auto mb-3" />
                  <p className="text-xl font-bold">Thank you! Your message has been sent.</p>
                  <p className="mt-1 text-sm">We'll get back to you shortly.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  <input required className={fieldCls} placeholder="Full Name" value={form.name} onChange={set("name")} />
                  <input className={fieldCls} placeholder="Company" value={form.company} onChange={set("company")} />
                  <input required type="tel" className={fieldCls} placeholder="Phone" value={form.phone} onChange={set("phone")} />
                  <input required type="email" className={fieldCls} placeholder="Email Address" value={form.email} onChange={set("email")} />
                  <textarea
                    required
                    rows={4}
                    className={`${fieldCls} sm:col-span-2 resize-none`}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={set("message")}
                  />

                  <div className="sm:col-span-2">
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      hidden
                      onChange={(e) => {
                        addFiles(e.target.files);
                        e.target.value = "";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="inline-flex items-center gap-2 text-sm font-medium border border-dashed border-black/60 px-4 py-2 hover:bg-black/10"
                    >
                      <Paperclip size={16} /> Attach screenshots or short video (max 5MB each)
                    </button>
                    {files.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center gap-1 bg-black/10 rounded px-2 py-1 text-xs max-w-full">
                            <span className="truncate max-w-[180px]">{f.name}</span>
                            <button
                              type="button"
                              onClick={() => setFiles(files.filter((_, j) => j !== i))}
                              aria-label={`Remove ${f.name}`}
                            >
                              <X size={14} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {error && <p className="sm:col-span-2 text-sm font-semibold text-red-900">{error}</p>}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 border border-black px-10 py-2 hover:bg-black hover:text-[#5ffbff] transition-colors disabled:opacity-60"
                    >
                      <Send size={15} /> {status === "sending" ? "Sending…" : "Send"}
                    </button>
                  </div>
                </form>
              )}

              {/* Direct channels */}
              <div className="mt-6 pt-5 border-t border-black/30 grid gap-4 sm:grid-cols-2 text-sm">
                <div>
                  <p className="font-bold mb-2 flex items-center gap-2">
                    <MessageCircle size={16} /> WhatsApp us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {WHATSAPP.map((n) => (
                      <a
                        key={n.wa}
                        href={`https://wa.me/${n.wa}?text=${waText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-black px-3 py-1.5 hover:bg-black hover:text-[#5ffbff] transition-colors"
                      >
                        {n.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-2 flex items-center gap-2">
                    <Mail size={16} /> Email us
                  </p>
                  <div className="flex flex-col gap-1">
                    {EMAILS.map((m) => (
                      <a key={m} href={`mailto:${m}`} className="underline break-all">
                        {m}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs">
                By proceeding, you agree to the Studio5ive{" "}
                <a className="text-blue-800 underline" href="#">
                  Payment Policy
                </a>{" "}
                and to occasionally receive emails from us. Please read our{" "}
                <a className="text-blue-800 underline" href="#">
                  Privacy Policy
                </a>{" "}
                to learn how we use your personal data.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

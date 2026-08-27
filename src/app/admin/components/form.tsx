// Shared form primitives for the admin UI, styled to match the site's
// existing dark theme (see Header.tsx / Sidebar.tsx: black/#111111 surfaces,
// #27272A borders, #A1A1AA muted text, #22D3EE cyan accent). Kept local to
// admin/ rather than components/ui/ since the public site doesn't use these.

import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Trash2, type LucideIcon } from "lucide-react";

export function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline gap-1.5 text-xs font-medium text-[#A1A1AA] mb-1.5">
        {label}
        {required && <span className="text-[#22D3EE]">*</span>}
      </span>
      {children}
      {hint && <span className="block mt-1 text-[11px] text-[#71717A]">{hint}</span>}
    </label>
  );
}

const fieldClasses =
  "w-full rounded-lg bg-[#111111] border border-[#27272A] px-3 py-2 text-sm text-white placeholder-[#71717A] outline-none transition-colors focus:border-[#22D3EE] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldClasses} ${props.className || ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldClasses} resize-y ${props.className || ""}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${fieldClasses} ${props.className || ""}`}>
      {props.children}
    </select>
  );
}

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5 group"
    >
      <span
        className={`relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-[#22D3EE]" : "bg-[#27272A]"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-[18px]" : "translate-x-1"
          }`}
        />
      </span>
      {label && (
        <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors">{label}</span>
      )}
    </button>
  );
}

const variantClasses = {
  primary: "bg-[#22D3EE] text-black hover:bg-[#67e3f4]",
  secondary: "bg-[#1a1a1a] text-white border border-[#27272A] hover:bg-[#242424]",
  danger: "bg-transparent text-red-400 border border-red-500/30 hover:bg-red-500/10",
  ghost: "bg-transparent text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a]",
};

export function Button({
  variant = "secondary",
  icon: Icon,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantClasses;
  icon?: LucideIcon;
}) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className || ""}`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
}

export function IconButton({
  icon: Icon,
  variant = "ghost",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { icon: LucideIcon; variant?: "ghost" | "danger" }) {
  const cls =
    variant === "danger"
      ? "text-[#A1A1AA] hover:text-red-400 hover:bg-red-500/10"
      : "text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a]";
  return (
    <button
      {...props}
      type="button"
      className={`inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md transition-colors ${cls} ${props.className || ""}`}
    >
      <Icon size={14} />
    </button>
  );
}

export function RemoveButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <IconButton {...props} icon={Trash2} variant="danger" aria-label="Remove" />;
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-[#27272A] bg-[#111111] ${className || ""}`}>{children}</div>
  );
}

export function SectionTitle({ children, hint }: { children: ReactNode; hint?: string }) {
  return (
    <div className="mb-3">
      <h2 className="text-white text-sm font-semibold">{children}</h2>
      {hint && <p className="text-[#71717A] text-xs mt-0.5">{hint}</p>}
    </div>
  );
}

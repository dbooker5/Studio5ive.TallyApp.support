import { Smartphone, Apple, Monitor, Laptop, CheckCircle2, AlertCircle } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ArticleTabs from "../components/ArticleTabs";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";
import { getCategoryById } from "../lib/categories";

function Note({ type = "info", children }: { type?: "info" | "warning"; children: React.ReactNode }) {
  return (
    <div className={`flex gap-3 p-4 rounded-xl border my-4 ${type === "warning" ? "border-amber-500/30 bg-amber-500/5" : "border-[#22D3EE]/30 bg-[#22D3EE]/5"}`}>
      {type === "warning"
        ? <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
        : <AlertCircle size={16} className="text-[#22D3EE] flex-shrink-0 mt-0.5" />}
      <p className={`text-sm leading-relaxed ${type === "warning" ? "text-amber-200" : "text-[#cef9ff]"}`}>{children}</p>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">
        {n}
      </div>
      <div>
        <p className="text-white font-semibold text-[15px] mb-1">{title}</p>
        <div className="text-[#A1A1AA] text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-[#A1A1AA] leading-relaxed">
          <CheckCircle2 size={14} className="text-[#22D3EE] flex-shrink-0 mt-0.5" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

const androidContent = (
  <div>
    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
      With TallyApp, you can effortlessly track your sales, manage inventory, monitor expenses, and analyze your business performance all in one intuitive app all over the world. Follow this step-by-step guide to set up TallyApp on your Android phone.
    </p>

    <Note>
      You must install TallyApp on a device with a supported operating system (Android 8.0 or higher). To use TallyApp Desktop and Web, install TallyApp on your phone first and then <a href="#" className="text-[#22D3EE] hover:underline">link your devices</a>.
    </Note>

    <Step n={1} title="Download TallyApp from Google Play">
      Open the <strong className="text-white">Google Play Store</strong> on your Android device and search for <strong className="text-white">TallyApp</strong>. Tap <strong className="text-white">Install</strong> to download.
    </Step>

    <Step n={2} title="Open TallyApp and tap Get Started">
      Once installed, open the app. Tap <strong className="text-white">Get Started</strong> on the welcome screen to begin setting up your business profile.
    </Step>

    <Step n={3} title="Enter your phone number">
      Enter your phone number including country code. TallyApp will send a one-time verification code via SMS. Enter the code when prompted.
    </Step>

    <Step n={4} title="Set up your business profile">
      Enter your <strong className="text-white">Business Name</strong>, <strong className="text-white">Industry</strong>, and <strong className="text-white">Currency</strong>. You can edit these later in Settings.
    </Step>

    <Step n={5} title="Start using TallyApp">
      You're all set! Explore the dashboard to record your first sale, add products to inventory, or invite team members.
    </Step>

    <div className="mt-6 p-4 rounded-xl bg-[#111111] border border-[#27272A]">
      <p className="text-white text-sm font-semibold mb-2">System Requirements</p>
      <BulletList items={[
        "Android 8.0 (Oreo) or higher",
        "At least 100 MB free storage",
        "Active internet connection for sync",
        "Phone number for verification",
      ]} />
    </div>
  </div>
);

const iosContent = (
  <div>
    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
      Install TallyApp on your iPhone or iPad and start managing your business on the go. The iOS app provides a seamless experience optimized for Apple devices.
    </p>

    <Note>
      TallyApp requires iOS 14.0 or later. Ensure your device is updated before installing. <a href="#" className="text-[#22D3EE] hover:underline">Check supported iOS versions.</a>
    </Note>

    <Step n={1} title="Download from the App Store">
      Open the <strong className="text-white">App Store</strong> and search for <strong className="text-white">TallyApp – Business Manager</strong>. Tap <strong className="text-white">Get</strong> to install.
    </Step>

    <Step n={2} title="Launch TallyApp">
      Open TallyApp after installation. On the welcome screen, tap <strong className="text-white">Get Started</strong>.
    </Step>

    <Step n={3} title="Verify your phone number">
      Enter your phone number. You'll receive a 6-digit code via SMS. Enter the code to verify your identity.
    </Step>

    <Step n={4} title="Configure your business">
      Set your <strong className="text-white">Business Name</strong>, type, and preferred <strong className="text-white">Currency</strong>. Enable Face ID or Touch ID for quick access.
    </Step>

    <Step n={5} title="Sync with iCloud (optional)">
      Enable iCloud Backup in your device settings to keep your TallyApp data backed up automatically.
    </Step>

    <div className="mt-6 p-4 rounded-xl bg-[#111111] border border-[#27272A]">
      <p className="text-white text-sm font-semibold mb-2">System Requirements</p>
      <BulletList items={[
        "iOS 14.0 or iPadOS 14.0 or higher",
        "iPhone 7 or later / iPad (5th gen) or later",
        "At least 120 MB free storage",
        "Active phone number for verification",
      ]} />
    </div>
  </div>
);

const windowsContent = (
  <div>
    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
      TallyApp for Windows lets you manage your business from a larger screen. You must have TallyApp installed on your phone first, then link your Windows PC.
    </p>

    <Note type="warning">
      TallyApp Desktop requires your phone to be set up first. Your phone and PC must be on the same Wi-Fi network for initial linking.
    </Note>

    <Step n={1} title="Download TallyApp Desktop">
      Visit <a href="#" className="text-[#22D3EE] hover:underline">tallyapp.com/download</a> and click <strong className="text-white">Download for Windows</strong>. Run the installer and follow the prompts.
    </Step>

    <Step n={2} title="Open TallyApp Desktop">
      Launch TallyApp from the Start menu or Desktop shortcut. Click <strong className="text-white">Link with Phone</strong> on the welcome screen.
    </Step>

    <Step n={3} title="Scan the QR code">
      Open TallyApp on your phone, go to <strong className="text-white">Settings → Linked Devices → Link a Device</strong>. Point your phone camera at the QR code on your PC screen.
    </Step>

    <Step n={4} title="Confirm the link">
      Tap <strong className="text-white">Link Device</strong> on your phone. Your desktop app will sync automatically within seconds.
    </Step>

    <div className="mt-6 p-4 rounded-xl bg-[#111111] border border-[#27272A]">
      <p className="text-white text-sm font-semibold mb-2">System Requirements</p>
      <BulletList items={[
        "Windows 10 (64-bit) version 1903 or later",
        "Windows 11 supported",
        "4 GB RAM minimum, 8 GB recommended",
        "TallyApp installed on your phone (Android or iOS)",
      ]} />
    </div>
  </div>
);

const macContent = (
  <div>
    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
      TallyApp for Mac brings the full power of TallyApp to your MacBook or iMac. Link it with your phone to access all your business data from a larger screen.
    </p>

    <Note>
      Apple Silicon (M1/M2/M3) and Intel Macs are both supported. Your phone must have TallyApp installed before linking.
    </Note>

    <Step n={1} title="Download from the Mac App Store or website">
      Visit <a href="#" className="text-[#22D3EE] hover:underline">tallyapp.com/download</a> or open the <strong className="text-white">Mac App Store</strong> and search for TallyApp. Click <strong className="text-white">Get</strong>.
    </Step>

    <Step n={2} title="Launch and link your phone">
      Open TallyApp on your Mac. Click <strong className="text-white">Link with Phone</strong>, then on your iPhone/Android go to <strong className="text-white">Settings → Linked Devices → Link a Device</strong>.
    </Step>

    <Step n={3} title="Scan the QR code">
      Point your phone camera at the QR code displayed on your Mac. Confirm the device link when prompted.
    </Step>

    <Step n={4} title="Start working">
      Your Mac app is now synced. Use keyboard shortcuts, multi-window view, and full-screen mode for maximum productivity.
    </Step>

    <div className="mt-6 p-4 rounded-xl bg-[#111111] border border-[#27272A]">
      <p className="text-white text-sm font-semibold mb-2">System Requirements</p>
      <BulletList items={[
        "macOS 11 (Big Sur) or later",
        "Apple Silicon or Intel Core i5/i7",
        "4 GB RAM minimum",
        "TallyApp installed on your Android or iPhone",
      ]} />
    </div>
  </div>
);

const tabs = [
  { platform: "Android", icon: <Smartphone size={14} />, content: androidContent },
  { platform: "iOS", icon: <Apple size={14} />, content: iosContent },
  { platform: "Windows", icon: <Monitor size={14} />, content: windowsContent },
  { platform: "Mac", icon: <Laptop size={14} />, content: macContent },
];

const cat = getCategoryById("get-started");

const relatedArticles = [
  { title: "Linking Devices", description: "Connect TallyApp across your phone, tablet, and desktop.", path: "/get-started", readTime: "4 min" },
  { title: "Navigating the Dashboard", description: "Understand TallyApp's main interface and key features.", path: "/get-started", readTime: "4 min" },
  { title: "Importing Existing Data", description: "Migrate your existing business data into TallyApp.", path: "/get-started", readTime: "7 min" },
  { title: "Managing Team Members", description: "Invite and manage roles for your team.", path: "/account", readTime: "6 min" },
];

export default function GetStarted() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Get Started" }]} />

      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs text-[#A1A1AA]">Updated June 2024</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">5 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-2 leading-tight">Get Started with TallyApp</h1>
      <p className="text-[#A1A1AA] text-[15px] mb-6 leading-relaxed">
        Set up TallyApp on your device and start managing your business in minutes. Choose your platform below.
      </p>

      <VideoGuide
        title="Getting started with TallyApp"
        subtitle="Watch this 2-minute guide to set up your account"
        duration="2:31"
      />

      <ArticleTabs tabs={tabs} />

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

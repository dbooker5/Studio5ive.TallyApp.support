import { CheckCircle2, Clock } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import VideoGuide from "../components/VideoGuide";
import RelatedArticles from "../components/RelatedArticles";
import HelpFooter from "../components/HelpFooter";

export default function SetupAccountArticle() {
  const relatedArticles = [
    { title: "Introduction to TallyApp", description: "Learn what TallyApp is and how it can help your business.", path: "/get-started", readTime: "3 min" },
    { title: "Creating an Entity", description: "Create your first business entity in TallyApp.", path: "/get-started", readTime: "4 min" },
    { title: "Navigating the Dashboard", description: "Understand TallyApp's main interface and key features.", path: "/get-started", readTime: "4 min" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Breadcrumb items={[{ label: "Get Started", path: "/get-started" }, { label: "Setting Up Your Account" }]} />

      <div className="mb-2 flex items-center gap-2">
        <Clock size={12} className="text-[#A1A1AA]" />
        <span className="text-xs text-[#A1A1AA]">Updated June 2026</span>
        <span className="text-[#27272A]">·</span>
        <span className="text-xs text-[#A1A1AA]">5 min read</span>
      </div>

      <h1 className="text-white text-3xl font-bold mb-6 leading-tight">Setting Up Your Account</h1>
      
      <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
        Getting started with TallyApp is quick and easy. Whether you prefer to sign up with your email 
        or use your Google account for faster access, this guide will walk you through the process of 
        creating and accessing your new business account.
      </p>

      <VideoGuide
        title="Signing Up and Signing In"
        subtitle="Watch how to quickly set up and access your TallyApp account"
        duration="2:15"
      />

      <div className="mt-10 mb-8">
        <h2 className="text-white text-xl font-semibold mb-6">Signing Up for TallyApp</h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Launch the App</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Open TallyApp on your device and tap the <strong>Get Started</strong> button on the welcome screen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Choose Sign Up Method</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                You can select <strong>Continue with Google</strong> to instantly link your Google account, or enter your <strong>Email address</strong> to create an account manually.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Verify Your Account</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                If you signed up with an email, a one-time verification code will be sent to your inbox. Enter this code into the app to verify your identity.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-white text-xl font-semibold mb-6">Signing In to TallyApp</h2>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">1</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Select Sign In</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">If you already have an account, tap the <strong>Sign In</strong> option on the start screen.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">2</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Enter Your Credentials</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Provide your registered email address or tap <strong>Continue with Google</strong> if you linked your Google account during signup.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs font-bold mt-0.5">3</div>
            <div>
              <p className="text-white font-semibold text-[15px] mb-1">Authentication</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                For email logins, you may be asked to enter a one-time verification code sent to your email to ensure maximum security of your business data.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/5 flex items-center justify-between">
           <div>
             <h3 className="text-white font-semibold mb-1">Trouble logging in?</h3>
             <p className="text-[#A1A1AA] text-sm">Check your spam folder for the verification code or contact support.</p>
           </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
      <HelpFooter />
    </div>
  );
}

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoGuideProps {
  title: string;
  subtitle?: string;
  duration?: string;
  thumbnail?: string;
}

export default function VideoGuide({ title, subtitle, duration = "2:45" }: VideoGuideProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-8 mb-6">
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: "linear-gradient(135deg, #0891b2 0%, #0e7490 40%, #164e63 100%)",
          minHeight: 220,
        }}
        onClick={() => setPlaying(true)}
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow blob */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#22D3EE]/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#0EA5E9]/20 blur-3xl" />

        <div className="relative z-10 flex items-center justify-between h-full p-8 md:p-10">
          {/* Text */}
          <div className="max-w-sm">
            <p className="text-[#22D3EE] text-xs font-semibold uppercase tracking-widest mb-2">Video Guide</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">{title}</h3>
            {subtitle && <p className="text-white/70 text-sm">{subtitle}</p>}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-6 h-6 rounded-lg bg-[#22D3EE] flex items-center justify-center">
                <img src="https://tally.studio5ive.org/logo/ic_launcher.png" alt="TallyApp" className="w-6 h-6 rounded-lg" />
              </div>
              <span className="text-white/80 text-sm font-medium">TallyApp</span>
              {duration && <span className="text-white/50 text-xs ml-2">· {duration}</span>}
            </div>
          </div>

          {/* Play button */}
          <div className="flex-shrink-0 ml-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-sm">
              <Play size={24} className="text-white ml-1 group-hover:text-[#22D3EE] transition-colors" />
            </div>
          </div>
        </div>

        {/* Playing state overlay */}
        {playing && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20" onClick={(e) => { e.stopPropagation(); setPlaying(false); }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-3 animate-pulse">
                <Play size={28} className="text-[#22D3EE] ml-1" />
              </div>
              <p className="text-white/80 text-sm">Video player coming soon</p>
              <p className="text-[#A1A1AA] text-xs mt-1">Click to dismiss</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

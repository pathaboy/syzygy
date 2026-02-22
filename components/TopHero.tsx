"use client";
import { useRef, useState } from "react";
import { TypingAnimation } from "./ui/typing-animation";
import { ShineBorder } from "./ui/shine-border";
import { heroVideo } from "@/lib/data";

const TopHero = () => {
  return (
    <section className="relative rounded-lg pt-28 sm:px-10 max-sm:px-4 overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <ShineBorder
        borderWidth={8}
        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      />
      <div className="max-w-[1440px] mx-auto">
        {/* Ambient blurred color background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-200 rounded-full blur-[140px] opacity-40" />
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[140px] opacity-40" />
          <div className="absolute bottom-40 left-40 w-[400px] h-[400px] bg-green-200 rounded-full blur-[140px] opacity-40" />
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl text-center text-black font-bold tracking-tighter md:text-5xl lg:text-7xl leading-none">
            Are you a <br className="sm:hidden" />
            <TypingAnimation
              words={["Gastroenterologist?", "Dermatologist?", "Psychiatrist?"]}
              cursorStyle="block"
              className="leading-tight italic"
              loop
            />
          </h1>

          <p className="text-center text-black text-2xl max-sm:text-xl text-balance font-medium mt-4 max-w-2xl mx-auto">
            Built for Medical Professionals Who Educate
          </p>

          <div className="sm:p-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:place-items-center">
            {/* 🎬 Glassmorphism Video Player */}
            <GlassVideoPlayer src={heroVideo.videoUrl} />

            {/* 🔥 Layered Glass Panel */}
            <div className="relative max-sm:-mt-24">
              {/* Back ice layer (shadow depth layer) */}
              <div
                className="absolute inset-0 translate-y-6 scale-[0.97] 
              rounded-[32px] 
              bg-white/10 
              backdrop-blur-[100px] 
              shadow-[0_40px_80px_rgba(0,0,0,0.25),0_0_60px_rgba(255,255,255,0.5)_inset]"
              />

              {/* Main Ice Panel */}
              <div
                className="relative p-10 rounded-[32px]
              bg-white/15
              backdrop-blur-[120px]
              backdrop-saturate-[180%]
              border-2 border-white/80
              shadow-[0_20px_60px_rgba(0,0,0,0.2),0_0_80px_rgba(255,255,255,0.6)_inset,0_0_2px_rgba(255,255,255,1)]
              before:absolute before:inset-0
              before:rounded-[32px]
              before:bg-gradient-to-br
              before:from-white/90
              before:via-white/30
              before:to-white/5
              before:pointer-events-none
              after:absolute after:inset-0
              after:rounded-[32px]
              after:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(200,220,255,0.3),transparent_50%)]
              after:pointer-events-none
              after:mix-blend-overlay"
              >
                {/* Ice crystal texture overlay */}
                <div
                  className="absolute inset-0 rounded-[32px] opacity-40 pointer-events-none
                bg-[linear-gradient(125deg,transparent_0%,rgba(255,255,255,0.4)_40%,transparent_40.5%,transparent_60%,rgba(255,255,255,0.3)_60.5%,transparent_100%)]
                bg-[length:8px_8px]"
                ></div>

                <div
                  className="relative flex flex-col space-y-4 text-gray-900 leading-relaxed font-medium
                [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] backdrop-blur-[120px] z-10"
                >
                  <p className="text-start max-sm:text-sm">
                    Syzygy supports doctors who are already creating educational
                    content by handling the structure behind it.
                  </p>
                  <p className="max-sm:text-sm">
                    From ideation guidance and format suggestions to editing,
                    thumbnails, captions, and consistent delivery, we ensure
                    your knowledge is presented clearly and professionally.
                  </p>
                  <p className="max-sm:text-sm">
                    You stay in control of medical accuracy, messaging, and
                    final approval. We align every piece of content with your
                    specialization, maintaining professional integrity and
                    platform compliance.
                  </p>

                  <p className="max-sm:text-sm">
                    You focus on treating patients in real life.
                  </p>
                  <p className="max-sm:text-sm">
                    We help you communicate consistently on screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Glass Video Player ───────────────────────────────────────────────────────
function GlassVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    // Outer glass shell
    <div
      className="
        relative rounded-[28px] p-[3px]
        bg-gradient-to-br from-white/70 via-white/30 to-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.6)_inset]
        backdrop-blur-[2px]
        w-full max-w-[28rem] self-start
      "
    >
      {/* Inner frosted container */}
      <div
        className="
          relative overflow-hidden rounded-[26px]
          bg-white/20
          backdrop-blur-[24px]
          backdrop-saturate-[180%]
          border border-white/60
          shadow-[0_0_60px_rgba(255,255,255,0.5)_inset]
          p-3
        "
      >
        {/* Gloss highlight sweep */}
        <div
          className="
            pointer-events-none absolute inset-0 z-10 rounded-[26px]
            bg-gradient-to-br from-white/50 via-transparent to-transparent
          "
        />

        {/* Video + overlaid controls */}
        <div className="group relative rounded-[20px] overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-[20px] object-cover block shadow-sm"
          />

          {/* Centered play/pause — fades in on hover, inspired by Portfolio cards */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="bg-white/80 hover:bg-white rounded-full p-4 shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-90 text-gray-900"
            >
              {isPlaying ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="5" y="4" width="4" height="16" rx="1.5" />
                  <rect x="15" y="4" width="4" height="16" rx="1.5" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mute pill — pinned bottom-right, always subtly visible */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white text-[11px] font-medium border border-white/20 transition-all duration-200 active:scale-95"
          >
            {isMuted ? (
              <>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3z" />
                  <line
                    x1="23"
                    y1="9"
                    x2="17"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17"
                    y1="9"
                    x2="23"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Muted</span>
              </>
            ) : (
              <>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <span>Live</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopHero;

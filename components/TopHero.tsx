"use client";
import { TypingAnimation } from "./ui/typing-animation";
import DraggableCards from "./HeroCards";
import { ShineBorder } from "./ui/shine-border";

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
            <DraggableCards />

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
                    final approval. We align every piece of content with your specialization,
                    maintaining professional integrity and platform compliance.
                  </p>
                 
                  <p className="max-sm:text-sm">You focus on treating patients in real life.</p>
                  <p className="max-sm:text-sm">We help you communicate consistently on screen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHero;

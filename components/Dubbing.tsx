"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExpandableVideoCard } from "./VideoCard";

const portfolioItems = [
  {
    id: 1,
    title: "Data Protection Sample",
    description:
      "Professional video editing showcasing data protection concepts",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/data-protection-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/data-protection-sample.mp4",
  },
  {
    id: 2,
    title: "Honey Bee Learning Sample",
    description: "Educational content production for e-learning platforms",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/honey-bee-learning-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/honey-bee-learning-sample.mp4",
  },
  {
    id: 3,
    title: "Michael Jackson Sample",
    description: "High-quality video post-production and editing",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/michael-jackson-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/michael-jackson-sample.mp4",
  },
  {
    id: 4,
    title: "Money Reel Sample",
    description: "Creative reel production and visual storytelling",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/money-reel-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/money-reel-sample.mp4",
  },
  {
    id: 5,
    title: "Silent nation",
    description: "Silent nation",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/silent-nation-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/silent-nation-sample.mp4",
  },
  {
    id: 6,
    title: "tere hawaale",
    description: "tere hawaale",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/tere-hawale.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/tere-hawale.mp4",
  },
  {
    id: 7,
    title: "When party is over",
    description: "When party is over",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/when-party-over-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/when-party-over-sample.mp4",
  },
  {
    id: 8,
    title: "Lukka chuppi",
    description: "Lukka chuppi",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/lukka-chuppi-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/lukka-chuppi-sample.mp4",
  },
  {
    id: 9,
    title: "Abhi tujh me kabhi",
    description: "Abhi tujh me kabhi",
    videoUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/abhi-mujhe-me-kabhi-sample.mp4",
    thumbnail:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/abhi-mujhe-me-kabhi-sample.mp4",
  },
];

export default function Dubbing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="scrollTargetId"
      ref={ref}
      className="relative overflow-hidden py-20"
    >
      {/* Absolutely positioned emoji image on the left - with higher z-index */}
      <div className="absolute left-0 top-0 max-sm:bottom-0 z-20 pointer-events-none hidden md:block">
        <img
          src="/assets/priyanshu-emoji.webp"
          alt="Priyanshu"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center px-2 text-3xl font-semibold md:text-4xl"
        >
          We also offer VO and Dubbing services
        </motion.h2>

        {/* Auto-scrolling marquee with horizontal scroll option - behind emoji */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-[#C9CCD6]/30 scrollbar-track-transparent hover:scrollbar-thumb-[#C9CCD6]/50 z-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(201, 204, 214, 0.3) transparent",
          }}
        >
          <motion.div
            className="flex gap-6 pb-2"
            animate={{ x: isPaused ? undefined : [0, -1600] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...portfolioItems, ...portfolioItems].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-96"
              >
                <ExpandableVideoCard
                  videoUrl={item.videoUrl}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

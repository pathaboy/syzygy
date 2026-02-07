"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CometCard } from "./ui/comet-card";
import { ShineBorder } from "./ui/shine-border";

const portfolioItems = [
  { id: 1, title: "Project Alpha", category: "Brand Video", image: "/assets/priyanshu-color.jpg" },
  { id: 2, title: "Project Beta", category: "Corporate Training", image: "/assets/naveen-color.jpg" },
  { id: 3, title: "Project Gamma", category: "Product Demo", image: "/assets/priyanshu-color.jpg" },
  { id: 4, title: "Project Delta", category: "Explainer Video", image: "/assets/naveen-color.jpg" },
  { id: 5, title: "Project Epsilon", category: "Social Media", image: "/assets/priyanshu-color.jpg" },
  { id: 6, title: "Project Zeta", category: "Documentary", image: "/assets/naveen-color.jpg" },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="scrollTargetId"
      ref={ref}
      className="overflow-hidden py-20 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center text-3xl font-semibold md:text-4xl"
        >
          Our Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center text-sm opacity-70 md:text-base"
        >
          A selection of our recent projects showcasing our dedication to
          quality and storytelling.
        </motion.p>

        {/* Auto-scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: isPaused ? undefined : [0, -2100] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...portfolioItems, ...portfolioItems].map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-shrink-0">
                <CometCard>
                  <button
                    type="button"
                    className="
                      relative
                      group w-80 rounded-[16px] bg-[#1F2121]
                      p-2 md:m-4
                      border border-[#C9CCD6]/30
                    "
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* 4:3 card */}
                     <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="
                          absolute inset-0 h-full w-full object-cover
                          grayscale contrast-75
                          transition-all duration-500 ease-out
                          group-hover:grayscale-0
                          group-hover:contrast-100
                          group-hover:scale-[1.03]
                        "
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        }}
                      />
                    </div>
                  </button>
                </CometCard>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
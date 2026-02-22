"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExpandableVideoCard } from "./VideoCard";
import { portfolioItems } from "@/lib/data";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="scrollTargetId" ref={ref} className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center text-3xl font-semibold md:text-4xl"
        >
          View Broader Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 px-4 max-w-2xl text-center text-sm opacity-70 md:text-base"
        >
          From instructional content to high-retention short-form, we adapts
          across niches.
        </motion.p>

        {/* Horizontally scrollable row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="overflow-x-auto overflow-y-hidden pb-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(201, 204, 214, 0.3) transparent",
          }}
        >
          <div className="flex gap-6 w-max px-4">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="flex-shrink-0 w-72 md:w-96">
                <ExpandableVideoCard
                  videoUrl={item.videoUrl}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  description={item.description}
                  featured={index < 2}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

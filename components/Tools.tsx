"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Adobe Premiere Pro", category: "Editing" },
  { name: "After Effects", category: "Motion Graphics" },
  { name: "DaVinci Resolve", category: "Color Grading" },
  { name: "Final Cut Pro", category: "Editing" },
];

// Simple icon placeholder component
function ToolIcon({ name }: { name: string }) {
  const initial = name.charAt(0);

  return (
    <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
      <span className="text-sm font-semibold opacity-60">{initial}</span>
    </div>
  );
}

// Marquee row component
function MarqueeRow({ items }: { items: typeof tools }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-6 pr-6"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((tool, index) => (
          <motion.div
            key={`${tool.name}-${index}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm min-w-fit group hover:border-foreground/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Tool Icon */}
            <ToolIcon name={tool.name} />

            {/* Tool Info */}
            <div className="flex flex-col">
              <span className="text-sm font-semibold whitespace-nowrap">
                {tool.name}
              </span>
              <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {tool.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Tools() {
  return (
    <section className="py-16 px-6 md:px-12 overflow-hidden border-y border-foreground/10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">Tools We Use</h3>
        </motion.div>

        {/* Single Row for All Screen Sizes */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <MarqueeRow items={tools} />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-8 text-sm opacity-60"
        >
          Professional tools for professional results
        </motion.p>
      </div>
    </section>
  );
}

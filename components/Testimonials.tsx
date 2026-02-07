"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Content Director",
    company: "Digital Ventures",
    content:
      "Syzygy transformed our post-production workflow. Their attention to detail and commitment to deadlines is unmatched.",
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Creative Lead",
    company: "Pixel Studios",
    content:
      "Professional, efficient, and incredibly responsive. The quality of work speaks for itself.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    company: "Brand Catalyst",
    content:
      "Working with Syzygy feels like having an in-house editing team. They understand our vision perfectly.",
  },
  {
    id: 4,
    name: "James Park",
    role: "Producer",
    company: "Visionary Films",
    content:
      "The turnaround time is impressive without compromising quality. Highly recommended for any video project.",
  },
  {
    id: 5,
    name: "Olivia Turner",
    role: "Brand Director",
    company: "Elevate Media",
    content:
      "Exceptional color grading and seamless editing. They elevated our content to a professional level.",
  },
  {
    id: 6,
    name: "David Kim",
    role: "CEO",
    company: "StartupFlow",
    content:
      "Process-driven and reliable. Exactly what we needed for scaling our video content.",
  },
  {
    id: 7,
    name: "Rachel Foster",
    role: "Creative Director",
    company: "Design House",
    content:
      "Incredible workflow and communication. They made the entire process seamless and stress-free.",
  },
  {
    id: 8,
    name: "Tom Anderson",
    role: "VP Marketing",
    company: "Tech Innovations",
    content:
      "The best post-production team we've worked with. Quality is always top-notch.",
  },
];

// Letter staggering for heading
function StaggeredText({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ display: letter === " " ? "inline" : "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

// Vertical scrolling column component
function TestimonialColumn({
  items,
  isPaused,
  onHoverChange,
}: {
  items: typeof testimonials;
  isPaused: boolean;
  onHoverChange: (isHovered: boolean) => void;
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="flex flex-col overflow-hidden h-[250px]">
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y: isPaused ? undefined : ["-50%", "0%"],
        }}
        transition={{
          y: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.01] p-6 flex flex-col justify-between hover:border-foreground/20 transition-all duration-500 min-h-[200px]"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          >
            {/* Background glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            {/* Content */}
            <div className="relative z-10 space-y-4">
              {/* Quote */}
              <div className="flex items-start gap-2">
                <span className="text-3xl opacity-20 leading-none">"</span>
                <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {testimonial.content}
                </p>
              </div>
            </div>

            {/* Author */}
            <div className="relative z-10 mt-auto pt-4 border-t border-foreground/10">
              <p className="font-semibold text-sm mb-1">{testimonial.name}</p>
              <p className="text-xs opacity-60">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Split testimonials into 2 equal columns
  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4, 8);

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <StaggeredText text="What Clients Say" />
          </h2>
        </motion.div>

        {/* Vertical Scrolling Columns - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          <TestimonialColumn
            items={column1}
            isPaused={isPaused}
            onHoverChange={setIsPaused}
          />
          <TestimonialColumn
            items={column2}
            isPaused={isPaused}
            onHoverChange={setIsPaused}
          />
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12 text-sm opacity-60"
        >
          Trusted by creative professionals worldwide
        </motion.p>
      </div>
    </section>
  );
}

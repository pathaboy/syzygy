"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  DocumentIcon,
  FolderListIcon,
  PencilIcon,
  EyeIcon,
  BoxIcon,
} from "./icons/WorkflowIcons";

const workflowSteps = [
  {
    id: 1,
    title: "INPUT & CONTEXT",
    description:
      "We receive raw footage, references, and clear instructions. Scope and expectations are confirmed before work begins.",
    icon: DocumentIcon,
  },
  {
    id: 2,
    title: "STRUCTURE & PREP",
    description:
      "We organize footage, timelines, and assets to ensure a clean, efficient editing workflow.",
    icon: FolderListIcon,
  },
  {
    id: 3,
    title: "EDITING & ASSEMBLY",
    description:
      "The video is edited according to the agreed structure, references, and requirements. No creative deviation without approval.",
    icon: PencilIcon,
  },
  {
    id: 4,
    title: "REVIEW & ITERATION",
    description:
      "Feedback is incorporated methodically. Revisions are handled cleanly without disruption to the workflow.",
    icon: EyeIcon,
  },
  {
    id: 5,
    title: "DELIVERY",
    description:
      "Final files are delivered in the required formats, ready for use.",
    icon: BoxIcon,
  },
];

// Letter staggering component
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

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading with letter staggering */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          <StaggeredText text="A Simple Workflow" />
        </h2>
        <p className="text-center text-lg max-sm:text-sm font-semibold mb-16 max-w-xl mx-auto">From a few videos to large ongoing batches, our workflow is designed to stay calm, consistent, and reliable as volume grows.</p>

        {/* Workflow Steps - Icons Row with flex wrap and labels on mobile */}
        <div className="relative py-4 mb-16">
          <div className="flex flex-wrap justify-center items-start gap-6 md:gap-4">
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="flex items-center">
                  {/* Circle with Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                    className="relative group/icon"
                    whileHover="hover"
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-foreground opacity-0 blur-xl group-hover/icon:opacity-10 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Dotted Circle Border */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-current flex items-center justify-center cursor-pointer">
                      <motion.div
                        variants={{
                          hover: {
                            scale: 1.08,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 15,
                            },
                          },
                        }}
                      >
                        <step.icon className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover/icon:drop-shadow-lg" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Arrow - show on all screen sizes */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isInView ? { opacity: 0.4, scaleX: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mx-3 origin-left"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Step label - visible on mobile and tablet, hidden on desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 lg:hidden text-center max-w-[120px]"
                >
                  <p className="text-xs font-semibold tracking-wide opacity-80 whitespace-nowrap">
                    {step.title}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Steps - Details Grid with card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-4 justify-items-center lg:max-w-4xl lg:mx-auto">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.01] p-6 md:p-8 flex flex-col w-full hover:border-foreground/20 transition-all duration-500 ${
                index === workflowSteps.length - 1 &&
                workflowSteps.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-md"
                  : ""
              }`}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-sm font-semibold tracking-wide">
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {step.id}.
                  </span>{" "}
                  <span className="group-hover:text-foreground/90 transition-colors duration-300">
                    {step.title}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {step.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { CometCard } from "@/components/ui/comet-card";

type Props = {
  videoUrl: string;
  thumbnail: string;
  title: string;
  description: string;
};

export const ExpandableVideoCard: React.FC<Props> = ({
  videoUrl,
  thumbnail,
  title,
  description,
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      {/* Preview Card - Thumbnail Only in 4:3 */}
      <CometCard>
        <button
          type="button"
          onClick={() => setActive(true)}
          className="
            relative group my-4
            w-full
            rounded-[16px]
            bg-[#1F2121]
            border border-[#C9CCD6]/30
            p-1.5 md:p-2
            transition-all duration-300
            hover:border-[#C9CCD6]/60
            active:scale-95
          "
          style={{ transformStyle: "preserve-3d" }}
        >
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

          {/* 4:3 Thumbnail - First frame of video */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] md:rounded-[14px]">
            <video
              src={videoUrl}
              className="
                absolute inset-0 h-full w-full object-cover
                sm:grayscale sm:contrast-75
                transition-all duration-500
                group-hover:grayscale-0
                group-hover:contrast-100
                group-hover:scale-[1.03]
                group-active:scale-100
              "
              preload="metadata"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 rounded-full p-3 md:p-4">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </CometCard>

      {/* Modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {active && (
              <>
                <motion.div
                  className="fixed inset-0 z-[100] bg-black/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActive(false)}
                />

                <div className="fixed inset-0 z-[101] flex items-center justify-center p-2 md:p-4">
                  <motion.div
                    ref={ref}
                    className="relative w-full max-w-4xl overflow-hidden rounded-lg md:rounded-xl bg-black"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <button
                      className="
                        absolute right-2 top-2 md:right-3 md:top-3 z-10
                        rounded-full bg-white p-1.5 md:p-1 text-black
                        transition hover:bg-red-500 hover:text-white
                      "
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(false);
                      }}
                    >
                      <X className="h-4 w-4 md:h-5 md:w-5" />
                    </button>

                    <video
                      src={videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="aspect-video w-full max-h-[85vh] object-contain"
                    />
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassVideoPlayer } from "./TopHero";

interface StackedVideoPlayerProps {
  videoUrls: { videoUrl: string; alt: string }[];
}

const StackedVideoPlayer: React.FC<StackedVideoPlayerProps> = ({
  videoUrls,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videoUrls.length);
  };

  if (!isClient || videoUrls.length === 0) return null;

  // We'll show the current video and up to 2 videos behind it
  const visibleVideos = [];
  const maxVisible = 3;
  for (let i = 0; i < Math.min(videoUrls.length, maxVisible); i++) {
    visibleVideos.push((currentIndex + i) % videoUrls.length);
  }

  return (
    <div className="relative w-full max-w-[22rem] aspect-square perspective-1000">
      <AnimatePresence mode="popLayout" initial={false}>
        {visibleVideos.reverse().map((idx, stackIndex) => {
          const isFront = idx === currentIndex;
          const position = visibleVideos.length - 1 - stackIndex; // 0 for front, 1 middle, 2 back

          return (
            <motion.div
              key={videoUrls[idx].videoUrl}
              initial={{
                opacity: 0,
                x: (position + 1) * 16,
                y: (position + 1) * 16,
                scale: 1 - (position + 1) * 0.05,
                zIndex: 10 - (position + 1),
              }}
              animate={{
                opacity: 1 - position * 0.2,
                x: position * 16,
                y: position * 16,
                scale: 1 - position * 0.05,
                zIndex: 10 - position,
                filter: position > 0 ? "blur(1px)" : "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: -100,
                y: 0,
                scale: 0.9,
                rotate: -10,
                transition: { duration: 0.4 },
              }}
              transition={{
                duration: 0.5,
                ease: "circOut",
              }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="relative w-full h-full">
                <GlassVideoPlayer
                  src={videoUrls[idx].videoUrl}
                  onEnded={isFront ? handleVideoEnd : undefined}
                  loop={false}
                />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default StackedVideoPlayer;

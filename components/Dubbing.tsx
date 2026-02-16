"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { X } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

// YouTube-style Video Card Component
function YouTubeVideoCard({
  videoUrl,
  thumbnail,
  title,
}: {
  videoUrl: string;
  thumbnail: string;
  title: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="flex flex-col gap-3 cursor-pointer group"
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video rounded-lg overflow-hidden border border-foreground/10 bg-foreground/[0.02]">
          <video
            src={videoUrl}
            poster={thumbnail}
            className="w-full h-full object-cover"
            muted
            playsInline
          />
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>

        {/* Video Title */}
        <div className="px-1">
          <h4 className="text-sm font-semibold line-clamp-2 group-hover:opacity-80 transition-opacity">
            {title}
          </h4>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={32} />
          </button>
          <div
            className="relative max-w-5xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

const featuredVideos = [
  {
    id: 1,
    title: "All Male Characters (Fevicol Ad)",
    videoUrl:
      "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250409220713.mp4",
    thumbnail:
      "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235048.png",
  },
  {
    id: 2,
    title: "Paresh Rawal (Hungama) Hindi",
    videoUrl:
      "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250409231608.mp4",
    thumbnail:
      "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235248.png",
  },
  {
    id: 3,
    title: "Mickey Mouse English",
    videoUrl:
      "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Dubbing/lv_0_20250411085123.mp4",
    thumbnail:
      "https://pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev/Thumbnail%20Images/Screenshot%202025-04-16%20235336.png",
  },
];

export default function Dubbing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <WavyBackground
      containerClassName="relative overflow-hidden py-16"
      className="w-full"
      waveWidth={10}
      backgroundFill="transparent"
      blur={10}
      speed="fast"
      waveOpacity={0.3}
    >
      <section
        id="scrollTargetId"
        ref={ref}
        className="relative w-full bg-white/10 py-6 rounded-sm backdrop-blur-sm"
      >
        <ShineBorder
          borderWidth={4}
          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center text-2xl md:text-3xl font-semibold"
          >
            We also offer VO and Dubbing services
          </motion.h2>

          {/* 4-Column Grid Layout for Desktop, Horizontal Scroll for Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-x-auto lg:overflow-x-visible scrollbar-thin scrollbar-thumb-foreground/20 scrollbar-track-transparent pb-4"
          >
            <div className="flex lg:grid lg:grid-cols-4 gap-6 items-center min-w-max lg:min-w-0">
              {/* Column 1: Priyanshu Emoji */}
              

              <a
                href={"https://swarlok.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Swarlok website"
              >
                <div className="relative mb-6 h-40 w-40 cursor-pointer transition-transform duration-300 hover:scale-105">
                  {/* 4px Shining Silver Border */}
                  <div
                    className="
                                    absolute inset-0 rounded-full
                                    border-[6px]
                                    border-[#fff]
                                    transition-all duration-500
                                    group-hover/founder:shadow-[0_0_25px_rgba(192,192,192,0.8),0_0_45px_rgba(192,192,192,0.5)]
                                  "
                  />

                  {/* Image */}
                  <div className="relative h-full w-full rounded-full p-[2px]">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <img
                        src="/assets/priyanshu-emoji.webp"
                        alt={"Priyanshu"}
                        
                        className="object-cover transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </a>

              {/* Columns 2-4: Video Cards */}
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex-shrink-0 w-64 lg:w-auto"
                >
                  <YouTubeVideoCard
                    videoUrl={video.videoUrl}
                    thumbnail={video.thumbnail}
                    title={video.title}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="https://swarlok.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 bg-black dark:bg-black border-2 text-white dark:text-white"
              style={{ borderColor: "#ac46ff" }}
            >
              <span className="relative z-10"></span>
              {/* Hover overlay - fills with purple */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#ac46ff" }}
              />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Explore Our Dubbing Services
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </WavyBackground>
  );
}

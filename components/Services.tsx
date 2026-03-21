"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { services } from "@/lib/data";

const ServiceCard = ({ title, description, category }: { title: string; description: string; category: string }) => {
  return (
    <div className="relative group max-w-[300px] flex-shrink-0 h-[160px] p-5 rounded-2xl overflow-hidden transition-all duration-300">
      {/* Glass Background - Active style on mobile by default */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 sm:group-hover:bg-white/10 transition-all duration-300 rounded-2xl 
      max-sm:bg-white/10 max-sm:border-white/20" />
      
      {/* Decorative Gradient Inner Border */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center text-left">
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1.5 block max-sm:text-blue-400/60">
            {category}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-tight group-hover:text-blue-400 sm:group-hover:translate-x-1 transition-all max-sm:text-blue-400">
            {title}
          </h3>
          <p className="text-xs text-white/60 leading-relaxed line-clamp-2 max-sm:text-white/80">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimationControls();

  // Combine all services into a single flat array
  const allServices = services.flatMap(category => 
    category.items.map(item => ({ ...item, category: category.category }))
  );

  // Triple the items for a seamless loop
  const loopItems = [...allServices, ...allServices, ...allServices];

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 3);
    }
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      controls.start({
        x: [0, -width],
        transition: {
          duration: 120, // Adjust speed: Slower for "Small and Clean"
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    if (width > 0) {
      startAnimation();
    }
  }, [width, controls]);

  return (
    <section className="py-10 sm:py-12 relative overflow-hidden bg-black">
      <div className="px-6 mb-12 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center md:text-6xl font-bold tracking-tighter text-white">
          Services we offer
        </h2>
        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded-full" />
      </div>

      <div 
        className="overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(201, 204, 214, 0.3) transparent",
        }}
      >
        <motion.div
          ref={marqueeRef}
          style={{ x }}
          animate={controls}
          onHoverEnd={() => {
            const currentX = x.get();
            const remainingWidth = Math.abs(currentX - (-width));
            const remainingDuration = 160 * (remainingWidth / width);

            controls.start({
              x: -width,
              transition: {
                duration: remainingDuration,
                ease: "linear",
              },
            }).then(() => {
              x.set(0);
              controls.start({
                x: [0, -width],
                transition: {
                  duration: 160,
                  ease: "linear",
                  repeat: Infinity,
                },
              });
            });
          }}
          className="flex gap-4 md:gap-8 px-6 w-max"
        >
          {loopItems.map((service, index) => (
            <ServiceCard 
              key={`${service.title}-${index}`}
              title={service.title}
              description={service.description}
              category={service.category}
            />
          ))}
        </motion.div>
      </div>

      {/* Fade Gradients for a softer edge */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Services;

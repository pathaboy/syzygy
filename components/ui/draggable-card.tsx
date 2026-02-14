"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [20, -20]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-20, 20]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.85, 1, 0.85]),
    springConfig,
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.25, 0.05, 0.25]),
    springConfig,
  );

  return (
    <motion.div
      ref={cardRef}
  
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.03 }}
      
      className={cn(
        // 👇 GLASSMORPHISM CORE
        "relative min-h-96 w-80 overflow-hidden rounded-xl p-4",
        "bg-white/20",
        "backdrop-blur-xl backdrop-saturate-150",
        "border border-white/30",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "transform-3d",
        className,
      )}
    >
      {/* Inner glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-transparent to-transparent" />

      {children}

      {/* Glass glare */}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white/40"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>
      {children}
    </div>
  );
};
"use client";

import React, { useEffect, useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import clsx from "clsx";
import { heroImages } from "@/lib/data";
import Image from "next/image";

const AUTO_ROTATE_INTERVAL = 3000;

const DraggableCards = () => {
  const items = heroImages.slice(0, 4).map((item, index) => ({
    id: item.id,
    image: item.image,
    alt: item.alt,
    className: [
      "absolute top-16 left-1/2 -translate-x-[60%] rotate-[-4deg] md:left-[38%]",
      "absolute top-28 left-1/2 -translate-x-[50%] rotate-[-6deg] md:left-[42%]",
      "absolute top-12 left-1/2 -translate-x-[40%] rotate-[6deg] md:left-[46%]",
      "absolute top-24 left-1/2 -translate-x-[30%] rotate-[8deg] md:left-[50%]",
    ][index],
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(id);
  }, [isInteracting, items.length]);

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <DraggableCardBody
            key={item.id}
            className={clsx(
              item.className,
              "transition-all duration-500 ease-out",
              isActive
                ? "z-30 opacity-100 blur-0 scale-100"
                : "z-10 opacity-45 blur-sm scale-95",
            )}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={320}
              height={320}
              className="pointer-events-none h-72 w-72 rounded-xl object-cover shadow-2xl md:h-80 md:w-80"
            />
          </DraggableCardBody>
        );
      })}
    </DraggableCardContainer>
  );
};

export default DraggableCards;

"use client";

import React, { useEffect, useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import clsx from "clsx";

const AUTO_ROTATE_INTERVAL = 3000;

const DraggableCards = () => {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop",
      className:
        "absolute top-16 left-1/2 -translate-x-[60%] rotate-[-4deg] md:left-[38%]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop",
      className:
        "absolute top-28 left-1/2 -translate-x-[50%] rotate-[-6deg] md:left-[42%]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop",
      className:
        "absolute top-12 left-1/2 -translate-x-[40%] rotate-[6deg] md:left-[46%]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop",
      className:
        "absolute top-24 left-1/2 -translate-x-[30%] rotate-[8deg] md:left-[50%]",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

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
            key={item.title}
            className={clsx(
              item.className,
              "transition-all duration-500 ease-out",
              isActive
                ? "z-30 opacity-100 blur-0 scale-100"
                : "z-10 opacity-45 blur-sm scale-95"
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none h-72 w-72 rounded-xl object-cover shadow-2xl md:h-80 md:w-80"
            />
          </DraggableCardBody>
        );
      })}
    </DraggableCardContainer>
  );
};

export default DraggableCards;
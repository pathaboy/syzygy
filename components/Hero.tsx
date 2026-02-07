"use client";
import { MorphingText } from "@/components/ui/morphing-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { useEffect, useState } from "react";
import DraggableCards from "./HeroCards";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const texts = ["Clarity", "over", "chaos"];

const Hero = () => {
  const [hideMorphText, setHideMorphText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideMorphText(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    const el = document.getElementById("scrollTargetId");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32">
      {!hideMorphText && <MorphingText texts={texts} />}
      {hideMorphText && (
        <h1 className="text-6xl text-center font-bold tracking-tighter md:text-5xl lg:text-8xl">
          Clarity over <AuroraText>chaos &nbsp;</AuroraText>
        </h1>
      )}
      <p className="text-center text-lg font-medium mt-4 max-w-2xl mx-auto">
        Syzygy provides video post production for training, instructional, and
        process-driven content where clarity matters more than attention.
      </p>
      <DraggableCards />
      <motion.button
        onClick={scrollToPortfolio}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="group mx-auto flex flex-col items-center gap-2 text-xs uppercase tracking-widest opacity-70 hover:opacity-100 transition"
        aria-label="Scroll to portfolio"
      >
        <span>View Work</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/20 group-hover:border-white/40"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;

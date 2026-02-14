"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {

  const scrollToPortfolio = () => {
    const el = document.getElementById("scrollTargetId");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl text-center font-bold tracking-tighter md:text-5xl lg:text-8xl"
        >
          <AuroraText>Clarity</AuroraText> over{" "}
          <span className="italic uppercase">chaos </span>
        </motion.h1>
      
      <p className="text-center text-lg font-medium px-2 text-balance mt-4 max-w-2xl mx-auto">
        SYZYGY. Where raw footage meets the finish line. Reliable, fast, and
        thoughtful video post-production for teams that ship content regularly.
      </p>
      <motion.button
        onClick={scrollToPortfolio}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="group mt-10 mx-auto flex flex-col items-center gap-2 text-xs uppercase tracking-widest opacity-70 hover:opacity-100 transition"
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

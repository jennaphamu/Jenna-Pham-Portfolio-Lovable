import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import callaLily from "@/assets/calla-lily.jpg";

const rotatingWords = ["Wealth.", "Power.", "Access.", "Justice.", "Data.", "Design.", "Purpose."];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowWord(true), 2000);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero-gradient noise-overlay relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Central calla lily image — soft, dreamy focal point */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-[1]"
      >
        <img
          src={callaLily}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-foreground/50 text-lg md:text-xl mb-4 tracking-[2px] uppercase font-sans"
        >
          Jenna Pham
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="text-primary/70 text-sm md:text-base mb-8 tracking-[5px] uppercase font-sans"
        >
          TECH · SYSTEMS · EQUITY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-foreground/70 mb-3 font-display"
        >
          Health is
        </motion.h1>

        <div className="h-[1.1em] relative overflow-hidden text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] mb-10 font-display italic">
          <AnimatePresence mode="wait">
            {showWord && (
              <motion.h1
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-primary absolute inset-0 text-center"
              >
                {rotatingWords[wordIndex]}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="text-foreground/45 text-base md:text-lg max-w-md mx-auto leading-relaxed font-sans"
        >
          building bridges between technology
          <br />
          and health for equitable care
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-14"
        >
          <motion.a
            href="#work"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center"
          >
            <span className="glass-card inline-flex items-center gap-3 text-primary/80 text-sm rounded-full px-7 py-3 hover:bg-primary/10 transition-all duration-500 font-sans shadow-sm">
              explore my work
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={false}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating calla lily petal shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] left-[8%] w-36 h-52 bg-primary/[0.06] blur-3xl calla-petal"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[25%] right-[10%] w-44 h-60 bg-[hsl(280_40%_70%/0.06)] blur-3xl calla-petal"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[20%] w-28 h-40 bg-[hsl(40_50%_85%/0.08)] blur-3xl calla-petal"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[35%] right-[25%] w-32 h-48 bg-[hsl(180_30%_70%/0.06)] blur-3xl calla-petal"
      />

      {/* Vertical stem lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent origin-top z-[2]"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
        className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent origin-top z-[2]"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;

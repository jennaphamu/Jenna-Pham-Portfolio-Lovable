import { motion } from "framer-motion";
import callaLily from "@/assets/calla-lily.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient noise-overlay relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Central calla lily image — moody focal point */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-[1]"
      >
        <img
          src={callaLily}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-primary/60 text-sm md:text-base mb-6 tracking-[5px] uppercase font-sans"
        >
          portfolio of Jenna
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-foreground/80 mb-3 font-display"
        >
          Through the
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-primary mb-10 font-display italic"
        >
          lilies.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="text-foreground/30 text-base md:text-lg max-w-sm mx-auto leading-relaxed font-sans"
        >
          I design experiences that unfurl —
          <br />
          elegant, organic, alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-14"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-primary/60 text-sm border border-primary/20 rounded-full px-7 py-3 hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 font-sans"
          >
            explore my work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Floating calla lily petal shapes — pink/cream organic blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] left-[8%] w-36 h-52 bg-primary/[0.04] blur-3xl calla-petal"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[25%] right-[10%] w-44 h-60 bg-primary/[0.05] blur-3xl calla-petal"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[20%] w-28 h-40 bg-[hsl(40_40%_85%/0.04)] blur-3xl calla-petal"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[35%] right-[25%] w-32 h-48 bg-[hsl(350_35%_78%/0.04)] blur-3xl calla-petal"
      />

      {/* Vertical stem lines — organic green */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent origin-top z-[2]"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
        className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent origin-top z-[2]"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.5, delay: 1.2, ease: "easeOut" }}
        className="absolute left-[35%] top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/6 to-transparent origin-top z-[2]"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;

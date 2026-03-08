import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-gradient noise-overlay relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/50 text-sm md:text-base mb-6 tracking-[4px] uppercase font-sans"
        >
          portfolio of Jenna
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-white/90 mb-3 font-display"
        >
          Through the
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-white mb-10 font-display italic"
        >
          garden.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-white/40 text-base md:text-lg max-w-sm mx-auto leading-relaxed font-sans"
        >
          I design experiences that bloom —
          <br />
          quiet, intentional, alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-white/60 text-sm border border-white/15 rounded-full px-7 py-3 hover:bg-white/5 hover:border-white/30 transition-all duration-500 font-sans"
          >
            explore my work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Floating petal shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[15%] w-32 h-48 rounded-full bg-white/[0.03] blur-2xl petal"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[12%] w-40 h-56 rounded-full bg-white/[0.04] blur-2xl petal"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[25%] w-24 h-36 rounded-full bg-white/[0.03] blur-2xl petal"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[30%] right-[30%] w-28 h-44 rounded-full bg-white/[0.025] blur-3xl petal"
      />

      {/* Vertical stem lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
        className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        className="absolute left-[40%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent origin-top"
      />

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;

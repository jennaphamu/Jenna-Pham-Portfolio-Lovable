import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-gradient noise-overlay relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl mb-4 font-light"
        >
          I'm Jenna
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white mb-2"
        >
          Designing for a
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white mb-8 font-display italic"
        >
          better future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/60 text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          Storytelling is my superpower.
          <br />
          I design to innovate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-white/80 text-sm border border-white/20 rounded-full px-6 py-2.5 hover:bg-white/10 transition-all duration-300"
          >
            view my work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"
      />
    </section>
  );
};

export default HeroSection;

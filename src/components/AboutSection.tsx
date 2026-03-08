import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-header">the gardener</p>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight">
            About
          </h2>
        </motion.div>

        {/* Stem line decorative element */}
        <div className="stem-line h-16 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-header">currently</p>
          </motion.div>
          <div className="space-y-6">
            {[
              "designing websites, landing pages, and digital brand experiences for startups and creative agencies.",
              "crafting design systems and component libraries that scale — bridging design and engineering.",
              "exploring motion design and micro-interactions that make products feel alive.",
              "sharing process through case studies. always learning, always iterating.",
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex gap-4"
              >
                <span className="font-mono text-sm text-primary/40 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground/60">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="stem-line h-12 mb-12" />
        <div className="divider mb-20" />
        <div className="stem-line h-12 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-header">roots</p>
          </motion.div>
          <div className="space-y-6">
            {[
              "studied visual communication and interaction design — fell in love with where aesthetics meets usability.",
              "shipped web experiences for brands in fintech, e-commerce, and media.",
              "freelanced for 2+ years, delivering everything from landing pages to full design systems.",
              "tools of choice: Figma, Framer, After Effects, and a healthy obsession with typography.",
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex gap-4"
              >
                <span className="font-mono text-sm text-primary/40 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground/60">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

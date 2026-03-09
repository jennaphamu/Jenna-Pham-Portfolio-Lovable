import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const }
  })
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
          className="mb-20">
          
          <p className="section-header">
</p>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground/90">
            About
          </h2>
        </motion.div>

        <div className="stem-line h-16 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}>
            
            <p className="section-header">currently</p>
          </motion.div>
          <div className="space-y-6">
            {[
            "coordinating residency programs at UCSF School of Dentistry — managing 40+ residents, $2M+ budgets, and compliance across multiple affiliates.",
            "bridging technology and public health — using data analytics, Python, and digital tools to improve healthcare access and equity.",
            "supporting cancer care nonprofits as a digital health operations analyst, digitizing systems and expanding outreach.",
            "advocating for underserved communities through patient navigation and Vietnamese-language health interpretation."].
            map((text, i) =>
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-4">
              
                <span className="font-mono text-sm text-primary/40 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground/50">
                  {text}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="stem-line h-12 mb-12" />
        <div className="divider mb-20" />
        <div className="stem-line h-12 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}>
            
            <p className="section-header">roots</p>
          </motion.div>
          <div className="space-y-6">
            {[
            "UC Irvine – Paul Merage School of Business, B.A. in Business Administration with emphasis in Information Systems & Organization Management.",
            "built data visualizations merging global health and pollution datasets — awarded Best Visualization at the Data@UCI Atlantis Datathon.",
            "served communities across the Bay Area through patient navigation, youth mentorship, and nonprofit health operations.",
            "taught English in Vietnam and Cambodia, designing culturally immersive lessons for rural students."].
            map((text, i) =>
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-4">
              
                <span className="font-mono text-sm text-primary/40 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground/50">
                  {text}
                </p>
              </motion.div>
            )}
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
            transition={{ duration: 0.6 }}>
            
            <p className="section-header">toolkit</p>
          </motion.div>
          <div className="space-y-6">
            {[
            "Python · SQL · Tableau · Google Analytics — turning health data into actionable insights.",
            "Figma · Canva · HTML · CSS — designing experiences and materials that connect with communities.",
            "First Aid & CPR · ACEs Aware · Covered California Certified Counselor — certified to serve.",
            "Vietnamese (fluent) — providing language access in clinical and community settings."].
            map((text, i) =>
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-4">
              
                <span className="font-mono text-sm text-primary/40 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground/50">
                  {text}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;
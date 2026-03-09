import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-header">selected</p>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground/80">
            Work
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="project-card card-hover group block"
            >
              <div className="aspect-[16/8] md:aspect-[16/7] overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.04] opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div className="glass-card p-6 md:p-8 rounded-b-2xl shadow-md">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight font-medium text-foreground/80">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-primary/40 group-hover:text-primary transition-colors duration-300 mt-1" />
                </div>
                <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

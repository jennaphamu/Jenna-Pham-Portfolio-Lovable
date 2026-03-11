import { motion } from "framer-motion";
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
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.01, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="project-card card-hover group block"
            >
              <div className="glass-card p-6 md:p-8 rounded-2xl shadow-md">
                <h3 className="font-display text-xl md:text-2xl tracking-tight font-medium text-foreground/80 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-primary/5 text-foreground/60 border border-primary/10 group-hover:bg-primary/10 group-hover:text-primary/80 group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

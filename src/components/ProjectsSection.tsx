import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-header">selected work</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                className="project-card card-hover group block"
              >
                <div className={`${project.colorClass} aspect-[16/10] overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-base tracking-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/30 group-hover:text-foreground transition-colors mt-0.5" />
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-foreground/40 bg-foreground/5 rounded-full px-2.5 py-0.5"
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
      </div>
    </section>
  );
};

export default ProjectsSection;

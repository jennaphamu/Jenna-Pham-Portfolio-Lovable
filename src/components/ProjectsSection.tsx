import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16"
        >
          Work
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="project-card card-hover group block"
            >
              <div className={`${project.colorClass} aspect-[16/8] md:aspect-[16/7] overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 bg-card">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-lg md:text-xl tracking-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-foreground/30 group-hover:text-foreground transition-colors mt-0.5" />
                </div>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-2xl">
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

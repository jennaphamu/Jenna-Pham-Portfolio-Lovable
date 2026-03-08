import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ProjectCard = ({ title, description, tags, image, link, colorClass }: Project) => {
  return (
    <div className="card-hover group">
      <div className={`${colorClass} rounded-[var(--radius)] border-2 border-foreground overflow-hidden`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="heading-md">{title}</h3>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 mt-1 p-1 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label={`View ${title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="font-serif text-foreground/80 leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase font-bold tracking-wider border-2 border-foreground rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

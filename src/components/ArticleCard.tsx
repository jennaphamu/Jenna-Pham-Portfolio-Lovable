import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  colorClass?: string;
}

const ArticleCard = ({ title, excerpt, date, image, slug, colorClass = "bg-vibrant-purple" }: ArticleCardProps) => {
  return (
    <Link to={`/article/${slug}`} className="block">
      <article className={cn("card-hover rounded-3xl overflow-hidden flex flex-col h-full", colorClass)}>
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <time className="text-xs md:text-sm font-medium text-foreground/70 mb-3 block font-sans">
            {date}
          </time>
          <h3 className="font-bold text-base md:text-lg uppercase tracking-tight leading-tight mb-3 font-sans">
            {title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4 flex-1 line-clamp-3">
            {excerpt}
          </p>
          <button className="bg-primary hover:bg-primary-hover border-2 border-foreground text-foreground uppercase font-bold text-xs py-2 px-5 rounded-full inline-flex items-center gap-1.5 transition-all duration-200 self-start font-sans">
            READ MORE
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;

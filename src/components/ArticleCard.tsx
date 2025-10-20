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
        <div className="aspect-square overflow-hidden p-4 md:p-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <time className="text-sm font-medium text-foreground/70 mb-3 block font-sans">
            {date}
          </time>
          <h2 className="heading-md leading-tight mb-3 font-sans">
            {title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-4 flex-1 line-clamp-3 font-serif">
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

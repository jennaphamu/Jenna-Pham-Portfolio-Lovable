import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  colorClass?: string;
}

const FeaturedCard = ({ title, excerpt, date, image, slug, colorClass = "bg-vibrant-purple" }: FeaturedCardProps) => {
  return (
    <Link to={`/article/${slug}`} className="block">
      <article className={cn("card-hover rounded-3xl overflow-hidden", colorClass)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Text Content - Left */}
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <time className="text-sm md:text-base font-medium text-foreground/70 mb-4 block font-sans">
              {date}
            </time>
            <h2 className="heading-lg mb-4 font-sans">
              {title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 font-serif">
              {excerpt}
            </p>
            <button className="bg-primary hover:bg-primary-hover border-2 border-foreground text-foreground uppercase font-bold text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all duration-200 self-start font-sans">
              READ MORE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image - Right */}
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden p-4 md:p-6 order-1 md:order-2">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 rounded-2xl"
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedCard;

import { useParams, Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Button from "@/components/Button";
import { articles } from "@/data/articles";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="px-5 md:px-[90px] py-20 text-center">
          <h1 className="heading-lg mb-6 font-sans">ARTICLE NOT FOUND</h1>
          <Link to="/">
            <Button variant="transparent" showArrow={false}>
              Return to Homepage
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get 3 related articles (excluding current)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Back Button */}
        <div className="px-5 md:px-[90px] pt-8">
          <Link to="/">
            <Button variant="transparent" showArrow={false}>
              ← BACK TO ARTICLES
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="px-5 md:px-[90px] pt-8 md:pt-12 pb-12">
          <div className="max-w-[700px] mx-auto">
            <h1 className="heading-lg mb-6 font-sans">
              {article.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-foreground/10">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <p className="font-bold font-sans">{article.author.name}</p>
                <div className="flex items-center gap-4 text-sm text-foreground/60 font-sans">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-3xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            {/* Article Content */}
            {article.content ? (
              <div 
                className="prose prose-lg max-w-none font-serif
                           prose-headings:font-sans prose-headings:uppercase prose-headings:font-bold prose-headings:tracking-tight 
                           prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                           prose-p:text-lg md:prose-p:text-xl prose-p:leading-relaxed prose-p:mb-6
                           prose-img:rounded-2xl prose-img:my-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : (
              <div className="space-y-6 font-serif">
                <p className="text-lg md:text-xl leading-relaxed">
                  {article.excerpt}
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  This article explores the themes of mindful living, personal growth, and intentional practices that enrich our daily experiences.
                </p>
              </div>
            )}
          </div>
        </article>

        {/* Related Articles */}
        <section className="border-t border-foreground/10">
          <div className="px-5 md:px-[90px] pt-12 md:pt-16 pb-8 md:pb-12">
            <h2 className="heading-md mb-8 text-center font-sans">
              YOU MIGHT ALSO LIKE
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 p-5 gap-x-5 gap-y-[30px] md:pt-0 md:px-[90px] md:pb-[30px] md:gap-x-[60px] md:gap-y-[30px]">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} {...relatedArticle} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter variant="minimal" />
      </main>

      <Footer />
    </div>
  );
};

export default Article;

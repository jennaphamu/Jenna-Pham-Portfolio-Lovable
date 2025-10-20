import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Button from "@/components/Button";
import { articles } from "@/data/articles";

const Index = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const loadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 3, articles.length));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="px-5 md:px-[90px] pt-12 md:pt-20 pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 font-sans">
              PERSPECTIVE IS A SPACE FOR EXPLORING IDEAS, FINDING INSPIRATION, AND DISCOVERING NEW WAYS OF SEEING THE WORLD.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl mx-auto mb-8">
              From mindful living and personal growth to travel experiences and creative pursuits, 
              we share perspectives that enrich daily life. Join us as we explore topics that inspire 
              curiosity and meaningful conversation.
            </p>
            
            {/* Newsletter CTA */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-5 py-3 border-2 border-foreground/20 rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary bg-white transition-all font-serif"
              />
              <Button variant="primary">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </section>

        {/* Featured Card */}
        <section className="px-5 md:px-[90px] pb-8 md:pb-12">
          <ArticleCard {...articles[0]} />
        </section>

        {/* Articles Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 p-5 gap-x-5 gap-y-[30px] md:pt-[70px] md:px-[90px] md:pb-[30px] md:gap-x-[60px] md:gap-y-[30px]">
          {articles.slice(1, visibleArticles).map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </section>

        {/* Load More */}
        {visibleArticles < articles.length && (
          <div className="text-center py-12">
            <Button onClick={loadMore} variant="secondary">
              LOAD MORE
            </Button>
          </div>
        )}

        {/* Newsletter */}
        <Newsletter variant="colorful" />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    image: "/images/office-cleaning.jpg",
    category: "Cleaning Services",
    title: "Top Benefits of Hiring a Professional Cleaning Service",
    excerpt: "Discover why professional cleaning is worth the investment for your home or office.",
  },
  {
    image: "/images/industrial-cleaning.jpg",
    category: "Tips & Tricks",
    title: "Top Tips for Selecting The Best Cleaning Service",
    excerpt: "Learn what to look for when choosing a cleaning company for your needs.",
  },
  {
    image: "/images/move-cleaning.jpg",
    category: "Guides",
    title: "The Ultimate Guide to Move-in Cleaning Your Home in One Day",
    excerpt: "Get your new place spotless and ready to move in with these expert tips.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cleaning Guides & Tips
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert advice and helpful guides to keep your space clean and organized
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-primary font-medium text-sm">
                {article.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import { useState } from "react";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categoryLabels } from "@/lib/blog-data";

const categories = ["all", "yatirim", "bolge", "rehber", "hukuk", "piyasa"] as const;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 1);
  const regularPosts = filtered.filter((p) => !featuredPosts.find((f) => f.id === p.id));

  return (
    <main>
      <PageHero
        title="Blog & İçerikler"
        subtitle="Gayrimenkul yatırımı, bölge rehberleri, piyasa analizleri ve uzman görüşleri."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Featured */}
          {activeCategory === "all" && featuredPosts.length > 0 && (
            <div className="mb-12">
              <BlogCard post={featuredPosts[0]} featured />
            </div>
          )}

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-gold text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat === "all" ? "Tümü" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {regularPosts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Bu kategoride henüz içerik bulunmuyor.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;

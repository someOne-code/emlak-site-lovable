import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { blogPosts, categoryLabels } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-28 section-padding text-center">
        <p className="text-muted-foreground">Yazı bulunamadı.</p>
        <Link to="/blog" className="text-gold mt-4 inline-block">
          Blog'a dön
        </Link>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("### "))
        return (
          <h3 key={i} className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">
            {trimmed.slice(4)}
          </h3>
        );
      if (trimmed.startsWith("## "))
        return (
          <h2 key={i} className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">
            {trimmed.slice(3)}
          </h2>
        );
      if (trimmed.startsWith("**") && trimmed.endsWith("**"))
        return (
          <p key={i} className="font-semibold text-foreground mt-3 mb-1">
            {trimmed.slice(2, -2)}
          </p>
        );
      if (trimmed.startsWith("- "))
        return (
          <li key={i} className="text-foreground/80 ml-4 list-disc">
            {trimmed.slice(2)}
          </li>
        );
      if (/^\d+\./.test(trimmed))
        return (
          <li key={i} className="text-foreground/80 ml-4 list-decimal">
            {trimmed.replace(/^\d+\.\s*/, "")}
          </li>
        );
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-2">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-narrow px-6 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Blog'a Dön
        </Link>

        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block bg-gradient-gold text-accent-foreground px-3 py-1 rounded text-xs font-semibold mb-4">
              {categoryLabels[post.category]}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorPhoto}
                  alt={post.author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{post.author}</span>
              </div>
              <span>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </div>

          {/* Hero image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-lg mb-8"
          />

          {/* Content */}
          <div className="prose-custom space-y-1">{renderContent(post.content)}</div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-navy rounded-lg p-8 mt-10 text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
              Uzman Görüşü Alın
            </h3>
            <p className="text-primary-foreground/60 text-sm mb-5 max-w-md mx-auto">
              Bu konu hakkında detaylı bilgi almak ve kişiye özel danışmanlık için ekibimizle
              iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/iletisim"
                className="bg-gradient-gold text-accent-foreground px-6 py-2.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Danışman ile Görüşün <ArrowRight size={14} />
              </Link>
              <Link
                to="/portfoy"
                className="border border-primary-foreground/30 text-primary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Portföyü İncele
              </Link>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relatedPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogDetail;

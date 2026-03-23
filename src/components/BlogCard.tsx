import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { categoryLabels } from "@/lib/blog-data";

const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => (
  <Link
    to={`/blog/${post.slug}`}
    className={`group block bg-card rounded-lg overflow-hidden card-hover ${
      featured ? "md:grid md:grid-cols-2" : ""
    }`}
  >
    <div className="relative overflow-hidden aspect-[16/10]">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-3 left-3 bg-gradient-gold text-accent-foreground px-3 py-1 rounded text-xs font-semibold">
        {categoryLabels[post.category]}
      </span>
    </div>
    <div className={`p-5 ${featured ? "flex flex-col justify-center md:p-8" : ""}`}>
      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
        <span>{new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {post.readTime}
        </span>
      </div>
      <h3
        className={`font-heading font-semibold text-foreground mb-2 group-hover:text-gold transition-colors ${
          featured ? "text-xl md:text-2xl" : "text-lg"
        }`}
      >
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={post.authorPhoto}
            alt={post.author}
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="text-xs text-muted-foreground">{post.author}</span>
        </div>
        <span className="text-gold text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Devamını Oku <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </Link>
);

export default BlogCard;

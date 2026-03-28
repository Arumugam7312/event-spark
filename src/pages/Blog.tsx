import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { getImage } from "@/lib/images";
import { blogPosts } from "@/data/services";

export default function Blog() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Ideas & Inspiration"
            subtitle="Tips, trends, and behind-the-scenes stories from the world of event design"
            gold
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border border-border group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={getImage(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

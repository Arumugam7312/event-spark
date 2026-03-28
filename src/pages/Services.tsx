import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getImage } from "@/lib/images";
import { services, categoryLabels } from "@/data/services";

const categories = ["all", "wedding", "birthday", "catering", "custom"] as const;

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) => {
    const matchCat = activeCategory === "all" || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Browse our comprehensive range of event services designed to make every celebration extraordinary"
            gold
          />

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSearchParams(cat === "all" ? {} : { category: cat })}
                  className={activeCategory === cat ? "bg-gradient-gold text-primary-foreground" : ""}
                >
                  {cat === "all" ? "All" : categoryLabels[cat]}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link to={`/services/${service.id}`} className="group block">
                  <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getImage(service.image)}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {categoryLabels[service.category]}
                      </span>
                      <h3 className="font-display text-xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                          View Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No services found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

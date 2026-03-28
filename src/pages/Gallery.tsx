import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { getImage } from "@/lib/images";
import { X } from "lucide-react";

const galleryItems = [
  { id: "gallery-1", title: "Garden Ceremony", category: "Wedding" },
  { id: "gallery-2", title: "Dessert Display", category: "Catering" },
  { id: "gallery-3", title: "Kids Birthday Party", category: "Birthday" },
  { id: "gallery-4", title: "Floral Centerpiece", category: "Wedding" },
  { id: "gallery-5", title: "Evening Reception", category: "Wedding" },
  { id: "gallery-6", title: "Engagement Party", category: "Celebration" },
  { id: "service-wedding", title: "Wedding Arch", category: "Wedding" },
  { id: "service-catering", title: "Gourmet Station", category: "Catering" },
  { id: "service-birthday", title: "Birthday Setup", category: "Birthday" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Our Gallery"
            subtitle="A glimpse into the magic we create for every celebration"
            gold
          />

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelected(item.id)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={getImage(item.id)}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-background font-display font-bold">{item.title}</p>
                      <p className="text-background/70 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-background" aria-label="Close">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={getImage(selected)}
              alt=""
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

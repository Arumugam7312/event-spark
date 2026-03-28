import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getImage } from "@/lib/images";
import { services, categoryLabels } from "@/data/services";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <Layout>
        <div className="section-padding container text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const related = services.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 2);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container max-w-5xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={getImage(service.image)}
                alt={service.name}
                className="w-full h-full object-cover rounded-xl"
                width={800}
                height={600}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {categoryLabels[service.category]}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">{service.name}</h1>
              <p className="text-2xl font-display font-bold text-primary mb-2">{service.price}</p>
              {service.priceNote && (
                <p className="text-sm text-muted-foreground mb-6">{service.priceNote}</p>
              )}
              <p className="text-foreground/80 leading-relaxed mb-8">{service.description}</p>

              <h3 className="font-display font-semibold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                  Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl font-bold mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((s) => (
                  <Link key={s.id} to={`/services/${s.id}`} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors flex">
                    <div className="w-40 flex-shrink-0">
                      <img src={getImage(s.image)} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-bold group-hover:text-primary transition-colors">{s.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{s.shortDescription}</p>
                      <p className="text-sm font-bold text-primary mt-2">{s.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

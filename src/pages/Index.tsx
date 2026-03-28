import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { getImage } from "@/lib/images";
import { services, packages, testimonials, faqs, categoryLabels } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const categories = ["wedding", "birthday", "catering", "custom"] as const;

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImage("hero-wedding")}
            alt="Elegant wedding reception"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" /> Premium Event Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-background leading-tight mb-6">
              Creating <span className="text-primary italic">Unforgettable</span> Celebrations
            </h1>
            <p className="text-background/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              From dream weddings to magical birthdays — we bring your vision to life with elegance, creativity, and impeccable attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-base px-8">
                  Book Your Event <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 text-base px-8">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive event services tailored to make every occasion extraordinary"
            gold
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const catServices = services.filter((s) => s.category === cat);
              return (
                <motion.div
                  key={cat}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link to={`/services?category=${cat}`} className="group block">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                      <img
                        src={getImage(catServices[0]?.image || "hero-wedding")}
                        alt={categoryLabels[cat]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-xl font-bold text-background mb-1">
                          {categoryLabels[cat]}
                        </h3>
                        <p className="text-background/70 text-sm">
                          {catServices.length} services available
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Package */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <SectionHeading
            title="Most Popular Package"
            subtitle="Everything you need for a truly spectacular celebration"
          />
          {(() => {
            const pkg = packages.find((p) => p.popular);
            if (!pkg) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-primary/20 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-display font-bold text-primary mb-4">{pkg.price}</p>
                <p className="text-muted-foreground mb-8">{pkg.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {pkg.includedServices.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <Link to="/packages">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                    View All Packages <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real stories from couples and families who trusted us with their special moments"
            gold
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic leading-relaxed">"{t.message}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about working with us" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-display font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={getImage("gallery-5")} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-background mb-4">
              Ready to Create Something <span className="text-primary italic">Magical</span>?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Let's start planning your perfect event. Get in touch for a free consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-base px-8">
                Request a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

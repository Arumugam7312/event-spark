import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Crown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/services";

export default function Packages() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Event Packages"
            subtitle="Choose the perfect package for your celebration, or let us create something custom just for you"
            gold
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative bg-card rounded-2xl p-8 border ${
                  pkg.popular ? "border-primary shadow-xl scale-105" : "border-border"
                } flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" /> MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-display font-bold text-primary mb-4">{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{pkg.description}</p>
                <div className="space-y-3 mb-8">
                  {pkg.includedServices.map((s) => (
                    <div key={s} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-auto">
                  <Button
                    className={`w-full ${
                      pkg.popular ? "bg-gradient-gold text-primary-foreground hover:opacity-90" : ""
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

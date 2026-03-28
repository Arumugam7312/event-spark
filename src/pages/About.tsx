import { motion } from "framer-motion";
import { Heart, Users, Award, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { getImage } from "@/lib/images";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Completed" },
  { icon: Users, value: "10,000+", label: "Happy Guests" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Heart, value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={getImage("gallery-1")} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-background mb-4">About Us</h1>
            <p className="text-background/70 text-lg max-w-xl mx-auto">
              Passionate event creators dedicated to turning your dreams into reality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={getImage("gallery-4")} alt="Our story" className="rounded-xl" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold mb-4 text-gradient-gold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2015, Élégance Events was born from a simple belief: every celebration deserves to be extraordinary. What started as a small wedding decoration studio has grown into a full-service event company.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of passionate designers, planners, and artisans work together to create immersive experiences that delight the senses and create lasting memories. We pour our hearts into every detail, from the first consultation to the final farewell.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <SectionHeading title="What Drives Us" gold />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Elegance", desc: "We believe in timeless beauty. Every element is curated with sophistication and refined taste." },
              { title: "Creativity", desc: "No two events are the same. We bring fresh, innovative ideas that make your celebration unique." },
              { title: "Passion", desc: "We genuinely love what we do. That passion shows in every flower placed, every light hung, every smile created." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-xl font-bold mb-3 text-primary">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
  gold?: boolean;
}

export default function SectionHeading({ title, subtitle, center = true, gold = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${gold ? "text-gradient-gold" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

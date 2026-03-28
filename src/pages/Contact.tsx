import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container max-w-5xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Ready to start planning? Fill out the form below and we'll reach out within 24 hours for a free consultation."
            gold
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                    <Input required placeholder="Your full name" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                    <Input required type="tel" placeholder="+1 (555) 000-0000" maxLength={20} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <Input required type="email" placeholder="you@example.com" maxLength={255} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Event Type *</label>
                    <Select required>
                      <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="catering">Catering Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Event Date</label>
                    <Input type="date" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Guest Count</label>
                    <Input type="number" placeholder="Estimated number" min={1} max={10000} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Budget Range</label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2k">Under $2,000</SelectItem>
                        <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Event Location</label>
                  <Input placeholder="Venue or city" maxLength={200} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tell Us About Your Vision *</label>
                  <Textarea required placeholder="Describe your event, themes, ideas..." rows={5} maxLength={2000} />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                >
                  {loading ? "Sending..." : (
                    <>Send Request <Send className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">hello@elegance-events.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Office</p>
                      <p className="text-muted-foreground text-sm">123 Celebration Ave, Suite 200<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold mb-2">Office Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-display text-lg font-bold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Every project starts with a complimentary consultation. No commitment required — let's just chat about your vision!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

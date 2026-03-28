import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold text-background mb-4">
              Élégance <span className="text-primary">Events</span>
            </h3>
            <p className="text-sm leading-relaxed text-background/60">
              Creating unforgettable celebrations with elegance, creativity, and passion since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/services", label: "Services" },
                { to: "/packages", label: "Packages" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-background/60 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Wedding Decorations", "Birthday Setups", "Catering Services", "Corporate Events", "Custom Events"].map((s) => (
                <li key={s} className="text-background/60">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/60">
                <Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-background/60">
                <Mail className="w-4 h-4 text-primary" /> hello@elegance-events.com
              </li>
              <li className="flex items-start gap-2 text-background/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5" /> 123 Celebration Ave, Suite 200
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Élégance Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export interface Service {
  id: string;
  name: string;
  category: "wedding" | "birthday" | "catering" | "custom";
  description: string;
  shortDescription: string;
  price: string;
  priceNote?: string;
  image: string;
  features: string[];
}

export interface Package {
  id: string;
  name: string;
  tier: "basic" | "premium" | "custom";
  price: string;
  description: string;
  includedServices: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  event: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "wedding-decor",
    name: "Wedding Decorations",
    category: "wedding",
    description: "Transform your wedding venue into a breathtaking wonderland. Our expert decorators create stunning floral arrangements, elegant drapery, fairy light installations, and custom centerpieces that reflect your unique love story. From intimate garden ceremonies to grand ballroom receptions, we handle every detail with precision and artistry.",
    shortDescription: "Stunning floral arrangements, drapery, and custom centerpieces for your dream wedding.",
    price: "From ₹5,000",
    priceNote: "Varies by venue size and design complexity",
    image: "service-wedding",
    features: ["Custom floral arrangements", "Venue draping & fabric design", "Fairy light installations", "Table centerpieces", "Entrance & aisle decor", "Photo backdrop setup"],
  },
  {
    id: "wedding-planning",
    name: "Full Wedding Planning",
    category: "wedding",
    description: "Let us handle every aspect of your wedding planning from start to finish. Our experienced planners coordinate vendors, manage timelines, handle logistics, and ensure your special day runs flawlessly. We work closely with you to bring your vision to life while managing every behind-the-scenes detail.",
    shortDescription: "End-to-end wedding planning and coordination for a stress-free celebration.",
    price: "From ₹50,000",
    image: "wedding1",
    features: ["Vendor coordination", "Timeline management", "Budget planning", "Day-of coordination", "Rehearsal management", "Guest management"],
  },
  {
    id: "birthday-setup",
    name: "Birthday Event Setup",
    category: "birthday",
    description: "Create unforgettable birthday celebrations with our themed event setups. From whimsical children's parties to elegant milestone celebrations, we design and execute complete party environments including balloon installations, themed decorations, dessert tables, and entertainment coordination.",
    shortDescription: "Themed birthday decorations, balloon installations, and complete party setups.",
    price: "From ₹18,000",
    image: "service-birthday0",
    features: ["Themed decorations", "Balloon installations", "Dessert table styling", "Photo booth setup", "Party favor stations", "Entertainment coordination"],
  },
  {
    id: "birthday-milestone",
    name: "Milestone Birthday Celebrations",
    category: "birthday",
    description: "Make those landmark birthdays truly special — 1st, 16th, 21st, 30th, 50th and beyond. We create sophisticated celebrations with custom themes, premium decorations, and memorable experiences that honor the guest of honor perfectly.",
    shortDescription: "Premium celebrations for landmark birthdays with custom themes and decor.",
    price: "From ₹15,000",
    image: "service-birthday1",
    features: ["Custom theme design", "Premium decor elements", "Memory wall setup", "Custom signage", "VIP lounge areas", "Event photography coordination"],
  },
  {
    id: "catering-fruit",
    name: "Fruit Carving & Displays",
    category: "catering",
    description: "Elevate your event with stunning edible art. Our skilled artisans create intricate fruit carvings, cascading fruit towers, and beautiful fresh fruit displays that serve as both decoration and delicious refreshments for your guests.",
    shortDescription: "Stunning edible art with intricate fruit carvings and cascading displays.",
    price: "From ₹5,000",
    image: "service-catering",
    features: ["Custom fruit sculptures", "Cascading fruit towers", "Themed fruit displays", "Chocolate dipping stations", "Fresh juice stations", "Edible flower accents"],
  },
  {
    id: "catering-icecream",
    name: "Ice Cream & Dessert Stations",
    category: "catering",
    description: "Delight your guests with interactive dessert experiences. Our ice cream stations feature premium flavors, custom toppings bars, and beautifully designed serving setups that become a highlight of any celebration.",
    shortDescription: "Interactive ice cream stations with premium flavors and custom toppings.",
    price: "From ₹6,000",
    image: "service-catering1",
    features: ["Premium ice cream selection", "Custom toppings bar", "Waffle & cone station", "Milkshake bar", "Branded serving ware", "Attendant service"],
  },
  {
    id: "custom-corporate",
    name: "Corporate Event Services",
    category: "custom",
    description: "Professional event services for corporate gatherings, product launches, galas, and team celebrations. We bring the same level of elegance and attention to detail to your business events, creating memorable experiences that reflect your brand.",
    shortDescription: "Professional event styling for corporate gatherings and brand events.",
    price: "From ₹30,000",
    image: "service-custom",
    features: ["Brand-aligned decor", "Stage & podium design", "Networking lounge setup", "Award ceremony staging", "Corporate gifting", "AV coordination"],
  },
  {
    id: "custom-cultural",
    name: "Cultural & Religious Events",
    category: "custom",
    description: "Respectful and beautiful event services for cultural celebrations, religious ceremonies, and traditional gatherings. We work with you to honor traditions while creating stunning visual environments.",
    shortDescription: "Beautiful setups for cultural celebrations and traditional ceremonies.",
    price: "From ₹18,000",
    image: "service-custom1",
    features: ["Traditional decor elements", "Cultural theme integration", "Ceremony stage design", "Guest seating arrangements", "Traditional lighting", "Custom ritual setups"],
  },
];

export const packages: Package[] = [
  {
    id: "basic",
    name: "Essentials",
    tier: "basic",
    price: "₹19,999",
    description: "Perfect for intimate events with elegant touches. Includes essential decorations and setup for up to 50 guests.",
    includedServices: [
      "Basic venue decoration",
      "Table centerpieces (up to 8 tables)",
      "Entrance decor",
      "Basic lighting setup",
      "Setup & teardown",
      "1 hour consultation",
    ],
  },
  {
    id: "premium",
    name: "Grand Celebration",
    tier: "premium",
    price: "₹54,999",
    description: "Our most popular package for those who want a truly memorable event. Full-service decoration and coordination for up to 150 guests.",
    includedServices: [
      "Full venue transformation",
      "Premium floral arrangements",
      "Custom centerpieces (up to 20 tables)",
      "Fairy light & drapery installation",
      "Dessert table styling",
      "Photo booth backdrop",
      "Day-of coordination",
      "Setup & teardown",
      "3 consultations included",
    ],
    popular: true,
  },
  {
    id: "custom",
    name: "Bespoke Experience",
    tier: "custom",
    price: "Custom",
    description: "For those who envision something truly extraordinary. Fully customized event design with unlimited possibilities.",
    includedServices: [
      "Unlimited design consultations",
      "Custom theme creation",
      "Full venue design & transformation",
      "Premium floral & decor elements",
      "Complete event coordination",
      "Vendor management",
      "Entertainment coordination",
      "Custom catering coordination",
      "Photography & videography coordination",
      "Post-event teardown & cleanup",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & James Mitchell",
    message: "They transformed our wedding venue into an absolute fairytale. Every detail was perfect, from the floral arch to the candlelit reception. Our guests are still talking about it months later!",
    rating: 5,
    event: "Wedding Reception",
  },
  {
    id: "2",
    name: "Priya Sharma",
    message: "The team created the most magical birthday party for my daughter's 5th birthday. The unicorn theme was executed flawlessly — it was beyond what we imagined!",
    rating: 5,
    event: "Children's Birthday",
  },
  {
    id: "3",
    name: "Michael & David Chen",
    message: "Professional, creative, and incredibly attentive. They handled our corporate gala with such elegance. The stage design and lighting were spectacular.",
    rating: 5,
    event: "Corporate Gala",
  },
  {
    id: "4",
    name: "Anita Rodriguez",
    message: "The fruit carving display was the star of our anniversary party! Guests couldn't stop taking photos. Beautiful and delicious — a true work of art.",
    rating: 5,
    event: "Anniversary Celebration",
  },
  {
    id: "5",
    name: "Tom & Emily Brooks",
    message: "From our first consultation to the last dance, everything was handled perfectly. The Grand Celebration package exceeded all expectations. Worth every penny!",
    rating: 5,
    event: "Wedding",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Wedding Decoration Trends for 2026",
    excerpt: "Discover the latest trends in wedding decor, from sustainable florals to immersive lighting experiences that will make your celebration unforgettable.",
    category: "Wedding",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "service-wedding",
  },
  {
    id: "2",
    title: "How to Plan the Perfect Kids' Birthday Party",
    excerpt: "Expert tips on creating a fun, stress-free birthday celebration that both kids and parents will love, including theme ideas and budget tips.",
    category: "Birthday",
    date: "March 8, 2026",
    readTime: "4 min read",
    image: "service-birthday",
  },
  {
    id: "3",
    title: "The Art of Fruit Carving: Behind the Scenes",
    excerpt: "Take a peek into how our artisans create stunning edible masterpieces that wow guests at every event.",
    category: "Catering",
    date: "February 28, 2026",
    readTime: "3 min read",
    image: "service-catering",
  },
  {
    id: "4",
    title: "Corporate Events That Leave a Lasting Impression",
    excerpt: "Learn how to elevate your company events from ordinary to extraordinary with strategic design and thoughtful details.",
    category: "Corporate",
    date: "February 20, 2026",
    readTime: "6 min read",
    image: "service-custom",
  },
];

export const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 3-6 months in advance for weddings and large events, and 4-6 weeks for smaller celebrations. However, we do accommodate shorter timelines when possible — reach out and we'll do our best!",
  },
  {
    question: "Do you provide services for destination events?",
    answer: "Yes! We love destination events. We serve the local metro area and can travel for destination weddings and special events. Travel fees may apply depending on the location.",
  },
  {
    question: "Can I customize a package?",
    answer: "Absolutely! Our Bespoke Experience package is fully customizable, and we can also adjust our Essentials and Grand Celebration packages to better fit your needs and budget.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand plans can change. Cancellations made 60+ days before the event receive a full refund minus the deposit. Cancellations within 30-60 days receive a 50% refund. Within 30 days, the deposit is non-refundable but can be applied to a future event.",
  },
  {
    question: "Do you handle venue selection?",
    answer: "While we don't own venues, our planning packages include venue sourcing and recommendations based on your vision, guest count, and budget. We have great relationships with many local venues.",
  },
  {
    question: "What's included in the consultation?",
    answer: "Our initial consultation is complimentary! We discuss your vision, budget, timeline, and preferences. You'll receive a detailed proposal within 48 hours of our meeting.",
  },
];

export const categoryLabels: Record<string, string> = {
  wedding: "Wedding",
  birthday: "Birthday",
  catering: "Catering",
  custom: "Custom Events",
};

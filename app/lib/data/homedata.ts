// ==========================================
// DATA LAYER: HOME PAGE
// ==========================================

export const images = {
  hero: "/Homepage/Images/hero.png",
  services: "/Homepage/Images/services.png", // Section 2 (Services)
  about: "/Homepage/Images/Section 3.png", // Section 3 (About Gallery23)
  why: "/Homepage/Images/Section 4.png", // Section 4 (Why Choose Us Background)
  print: "/Homepage/Images/Section 5.png", // Section 5 (Custom Printing)
  frameOne: "/Homepage/Images/Section6-01.png", // Section 6 (Showcase Slide 1)
  frameTwo: "/Homepage/Images/Section6-02.png", // Section 6 (Showcase Slide 2)
  frameThree: "/Homepage/Images/Section6-03.png", // Section 6 (Showcase Slide 3)
  instagramOne: "/Homepage/Images/Section8-01.png", // Section 8 (What We've Been Framing)
  instagramTwo: "/Homepage/Images/Section8-02.png",
  instagramThree: "/Homepage/Images/Section8-03.png",
  instagramFour: "/Homepage/Images/Section8-04.png",
  consultation: "/Homepage/Images/Section-9.png", // Section 9 (CTA Background)
};

// Trusted Brands Logos (Section 7 Ticker)
export const trustedBrands = [
  "/Homepage/Images/section 7 01.png",
  "/Homepage/Images/section 7 02.png",
  "/Homepage/Images/section 7 03.png",
  "/Homepage/Images/section 7 04.png",
  "/Homepage/Images/section 7 05.png",
];

// Navigation Links
export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Services" },
  { name: "Print Shop", href: "/printshop" },
  { name: "Commercial", href: "/commercial" },
];

export const rightNav = [
  { name: "About Us", href: "/about" },
  { name: "Stores", href: "/contact" },
  { name: "Support", href: "/contact" },
];

// Services Section
export const services = [
  {
    title: "Custom Framing",
    body: "Our professional framers thoughtfully handcraft each frame using premium, conservation-minded materials.",
    cta: "Get Custom Framing",
  },
  {
    title: "Custom Printing",
    body: "Upload your high-res files and print them with museum-quality archival standards.",
    cta: "Start Print Order",
  },
  {
    title: "Licensed Artwork",
    body: "Access and browse directly from our extensive database of licensed prints and fine art collections.",
    cta: "Browse Artwork",
  },
];

// Benefits Section (Icons are mapped via string identifiers to keep UI out of the data layer)
export const benefitsData = [
  {
    title: "Independently Owned",
    body: "Each store is independently owned and operated by a member of your community.",
    iconType: "globe",
  },
  {
    title: "Free Design Consultation",
    body: "Personalized design services make creating the perfect frame easy and enjoyable.",
    iconType: "lightbulb",
  },
  {
    title: "Expert Craftsmanship",
    body: "Our artisans thoughtfully handcraft each frame using high-quality materials.",
    iconType: "frame",
  },
  {
    title: "True Love Guarantee",
    body: "Enjoy peace of mind knowing your frame is covered by our True Love Guarantee.",
    iconType: "badge",
  },
];

// Testimonials Section
export const testimonials = [
  {
    name: "Ayla Renford",
    date: "6 Days Ago",
    quote: "Had a wonderful experience here. I had two limited edition prints framed and FastFrame did an amazing job. The quality of the framing is some of the best I've experienced and I will definitely use FastFrame again.",
    avatar: "/Homepage/Images/section 7 01.png",
  },
  {
    name: "Marcus Byrne",
    date: "2 Weeks Ago",
    quote: "My go-to place for framing. The staff is personable and thoughtful in their creative guidance. I know my pieces are in good hands, and I'm always thrilled with the results. Highly recommend, you won't be disappointed!",
    avatar: "/Homepage/Images/section 7 02.png",
  },
  {
    name: "Niamh O'Connell",
    date: "1 Month Ago",
    quote: "This is my go to shop for framing. The staff is extremely friendly and knowledgeable. They have a great sense of what works and what doesn't. They always find creative ways to work with our budget.",
    avatar: "/Homepage/Images/section 7 03.png",
  },
  {
    name: "Sarah Jenkins",
    date: "2 Months Ago",
    quote: "I've had two pieces framed here and each time I was so impressed with their acumen for choosing the right frame and border to properly accent the piece. They turned each from a print into a work of art.",
    avatar: "/Homepage/Images/section 7 04.png",
  },
];

// FAQs Section
export const faqs = [
  "What can you custom frame?",
  "What are my framing options?",
  "How do design consultations work?",
];
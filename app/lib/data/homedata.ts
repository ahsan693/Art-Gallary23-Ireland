// ==========================================
// DATA LAYER: HOME PAGE
// ==========================================

export const images = {
  hero: "/Homepage/Images/hero.png",
  services: "/Homepage/Images/services.png", // Section 2 (Services)
  about: "/Homepage/Images/image-card.png", // Section 3 (About Gallery23)
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
  { name: "Stores", href: "/support" },
  { name: "Support", href: "/support" },
];
// Services Section
export const services = [
  {
    title: "Custom Framing",
    body: "Our professional framers thoughtfully handcraft each frame using premium, conservation-minded materials.",
    cta: "Get Custom Framing",
    href: "/Services", // <-- Added link
  },
  {
    title: "Custom Printing",
    body: "Upload your high-res files and print them with museum-quality archival standards.",
    cta: "Start Print Order",
    href: "/printshop", // <-- Added link
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
  },
  {
    name: "Marcus Byrne",
    date: "2 Weeks Ago",
    quote: "My go-to place for framing. The staff is personable and thoughtful in their creative guidance. I know my pieces are in good hands, and I'm always thrilled with the results. Highly recommend, you won't be disappointed!",
  },
  {
    name: "Niamh O'Connell",
    date: "1 Month Ago",
    quote: "This is my go to shop for framing. The staff is extremely friendly and knowledgeable. They have a great sense of what works and what doesn't. They always find creative ways to work with our budget.",
  },
  {
    name: "Sarah Jenkins",
    date: "2 Months Ago",
    quote: "I've had two pieces framed here and each time I was so impressed with their acumen for choosing the right frame and border to properly accent the piece. They turned each from a print into a work of art.",
  },
];

// Consultation Section
export const consultationData = {
  title: "Book A Free Consultation Service.",
  subtitle: "Get in touch with our friendly and knowledgeable team",
  phone: "(085) 631-4964",
  emailText: "Send Message",
  emailLink: "mailto:hello@gallery23.com",
};

// FAQs Section
export const faqs = [
  "What can you custom frame?",
  "What are my framing options?",
  "How do design consultations work?",
];

export const homePageData = {
  hero: {
    title: ["Dublin's Premier", "Custom Framing &", "Archival Printing"],
    description: "Experience the art of preservation with our expert framing and museum-quality archival printing services, crafted with care in the heart of Dublin.",
    cta: "Book A Free Consultation",
    href: "/support",
    imageAlt: "Gallery interior with framed artwork on display",
  },
  ticker: ["Get Free Consultation", "Explore Our Fine Art Collection", "Explore Services", "Shop Prints Now"],
  services: {
    title: "Our Services",
    description: "Expert solutions tailored to showcase and preserve your most valued pieces.",
    imageAlt: "Custom framing tools and artwork in a studio",
  },
  about: {
    title: "About Gallery23",
    eyebrow: "A space for art, framing, and conversation.",
    description: "Our professional framers love what they do and will happily advise you on your next custom framing project. With a wealth of knowledge and experience, our designers tailor each complimentary design session to your needs so they can create the ideal custom frame for you.",
    cta: "LEARN MORE",
    href: "/about",
    imageAlt: "Gallery interior with framed artwork",
  },
  benefits: {
    title: "Why Choose Our Frames",
    description: "From independent craftsmanship to personalized design services, we bring passion and expertise to every frame we create.",
    imageAlt: "Gallery styling interior",
  },
  printing: {
    title: "Custom Printing Made for You",
    description: "Print your own photos, artwork, or designs on premium fine art papers. Choose your paper, upload your file, and we'll handle the rest.",
    badge: "Custom Print",
    cardTitle: "Your Own Photo or Artwork",
    cardDescription: "Upload your personal photos, artwork, or digital files and we'll print them to museum quality on your choice of paper or canvas.",
    features: ["Available in multiple sizes from 4x6 to 40x60", "Perfect for photographs and digital art", "Same-day options available in store"],
    cta: "START YOUR CUSTOM PRINT",
    href: "/printshop",
    imageAlt: "Professional fine art printing studio",
  },
  showcase: {
    title: "Featured Framing Projects",
    imageAlt: "Featured framing project",
    thumbnailAlt: "Framing project thumbnail",
  },
  testimonials: {
    title: "What Our Costumer Say",
    platform: [
      { letter: "G", color: "text-[#4285F4]" },
      { letter: "o", color: "text-[#EA4335]" },
      { letter: "o", color: "text-[#FBBC05]" },
      { letter: "g", color: "text-[#4285F4]" },
      { letter: "l", color: "text-[#34A853]" },
      { letter: "e", color: "text-[#EA4335]" },
    ],
    rating: "4.9",
    reviewCount: "(500)",
    cta: "Review us on Google",
    href: "https://maps.app.goo.gl/DMqeFv5YV6EPtvDT7?g_st=ic",
  },
  trusted: {
    title: "Trusted By",
    imageAlt: "Trusted brand",
  },
  instagram: {
    title: "What We've Been Framing",
    href: "https://instagram.com",
    ctaPrefix: "Follow us",
    handle: "@gallery23framing",
    items: [
      { title: "19th Century Portrait in Ornate Gold", handle: "@vintagelover_ny", img: images.instagramOne },
      { title: "Botanical Series in Natural Oak", handle: "@botanical_living", img: images.instagramTwo },
      { title: "Abstract Minimalism in Matte Black", handle: "@modern_nest", img: images.instagramThree },
      { title: "Championship Jersey Shadow Box", handle: "@sportscollector_88", img: images.instagramFour },
    ],
  },
  faq: {
    title: "FAQs",
    answer: "Bring the piece, dimensions, or a photo of the room. Our team will walk you through materials, finish, glass, and timeline.",
    cta: "VIEW ALL FAQS",
    href: "/support",
  },
  consultation: {
    imageAlt: "Gallery interior for consultation",
  },
};
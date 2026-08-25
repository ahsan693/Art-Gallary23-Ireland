// ==========================================
// DATA LAYER: SERVICES PAGE
// ==========================================

export const servicesImages = {
  hero: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=1920&q=85",
  framing: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=85",
  printing: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=85",
  commercial: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=85",
  cta: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=85",
};

// Simulated Async Database Call.
export const getServicesData = async () => {
  return {
    hero: {
      badge: "What We Do",
      title: "Expert Framing & Printing Services",
      subtitle: "From curatorial advice to museum-grade preservation, our studio is ready to assist with your next project. Explore our core services below.",
    },
    offerings: [
      {
        id: "custom-framing",
        title: "Custom Picture Framing",
        description: "Our professional framers thoughtfully handcraft each frame using premium, conservation-minded materials. Whether it is a cherished family photograph, a valuable original painting, or sports memorabilia, we ensure it is protected and beautifully displayed.",
        features: [
          "Museum-quality acid-free materials",
          "UV-filtering and anti-reflective glass",
          "Hundreds of premium frame moldings",
          "Reversible mounting techniques"
        ],
        image: servicesImages.framing,
        ctaText: "Book Framing Consultation",
        ctaLink: "/contact",
      },
      {
        id: "fine-art-printing",
        title: "Fine Art & Photo Printing",
        description: "Upload your high-res files and print them to museum-quality archival standards. We use the latest wide-format pigment printers to ensure accurate color reproduction and stunning clarity for photographers and artists.",
        features: [
          "Premium Hahnemühle & archival papers",
          "Custom canvas printing & stretching",
          "Sizes ranging from 4x6 to 40x60",
          "Same-day printing options available"
        ],
        image: servicesImages.printing,
        ctaText: "Start Print Order",
        ctaLink: "/printshop",
      },
      {
        id: "commercial-projects",
        title: "Commercial & Gallery Installs",
        description: "We partner with interior designers, corporate offices, and local galleries to provide large-scale framing and printing solutions. From sourcing licensed artwork to white-glove delivery and installation.",
        features: [
          "Volume framing discounts",
          "Licensed artwork sourcing",
          "White-glove delivery & installation",
          "Dedicated project management"
        ],
        image: servicesImages.commercial,
        ctaText: "View Commercial Work",
        ctaLink: "/commercial",
      }
    ],
    cta: {
      title: "Ready to start your project?",
      subtitle: "Visit our Kimmage or Coalmine locations, or book a free online design consultation today.",
      buttonText: "Contact Us",
      buttonLink: "/contact"
    }
  };
};
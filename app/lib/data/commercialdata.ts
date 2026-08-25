// ==========================================
// DATA LAYER: COMMERCIAL PAGE
// ==========================================

export const commercialImages = {
  hero: "/Commercial/Images/Section1.png",
  bulkFraming: "/Commercial/Images/Section3- 01.png",
  printing: "/Commercial/Images/Section3- 02.png",
  installation: "/Commercial/Images/Section3- 03.png",
  consultation: "/Commercial/Images/Section3- 04.png",
};

// Simulated Async Database Call
export const getCommercialData = async () => {
  return {
    hero: {
      title: "Commercial Framing & Printing for Professionals",
      subtitle: "A dedicated portal for architects, interior designers, and corporate clients. Gallery 23 partners with Dublin's leading businesses and institutions for large-scale framing, printing, and installation projects.",
      ctaText: "Request a Commercial Quote →",
      image: commercialImages.hero,
    },
    whoWeServe: {
      title: "Who We Serve",
      cards: [
        {
          id: "designers-architects",
          title: "Interior Designers & Architects",
          description: "Large-scale framing projects for hotels, restaurants, offices, and residential developments. Custom specifications, bulk ordering, and project consultation.",
          iconType: "blueprint",
        },
        {
          id: "corporate-clients",
          title: "Corporate & Institutional Clients",
          description: "Branded framing solutions, bulk certificate framing, office art installations, and corporate gift programmes.",
          iconType: "building",
        },
        {
          id: "artists-galleries",
          title: "Professional Artists & Galleries",
          description: "Exhibition-grade framing, canvas stretching, and archival printing services for galleries and solo shows.",
          iconType: "easel",
        }
      ]
    },
    features: [
      {
        id: "bulk-framing",
        title: "Bulk Custom Framing",
        description: "Large volume orders with consistent quality across hundreds of frames. Ideal for hotel chains, office fit-outs, and property developments.",
        image: commercialImages.bulkFraming,
        ctaText: "Get a Quote",
        bgType: "white",
        align: "left", // Text left, Image right
      },
      {
        id: "commercial-printing",
        title: "Commercial Fine Art Printing",
        description: "High-volume giclée printing on archival papers and canvas. Perfect for interior design schemes and corporate art programmes.",
        image: commercialImages.printing,
        ctaText: "Get a Quote",
        bgType: "cream",
        align: "right", // Text right, Image left
      },
      {
        id: "installation",
        title: "Installation Services",
        description: "Professional on-site installation for commercial spaces. Our team handles delivery, hanging, and placement with laser precision.",
        image: commercialImages.installation,
        ctaText: "Get a Quote",
        bgType: "white",
        align: "left",
      },
      {
        id: "consultation",
        title: "Project Consultation",
        description: "Free consultations to scope your project requirements, timeline, and budget. We work directly with your design team.",
        image: commercialImages.consultation,
        ctaText: "Get a Quote",
        bgType: "cream",
        align: "right",
      }
    ],
    trustedBy: {
      title: "Trusted by Leading Businesses",
      logos: [
        { id: "forbes", type: "text", name: "Forbes", label: "Forbes", project: "The Shelbourne Hotel Suite Refresh" },
        { id: "elle", type: "elle", name: "ELLE DECOR", label: "HOSPITALITY", project: "The Shelbourne Hotel Suite Refresh" },
        { id: "ad", type: "ad", name: "AD", subname: "ARCHITECTURAL DIGEST", label: "HOSPITALITY", project: "The Shelbourne Hotel Suite Refresh" }
      ]
    },
    form: {
      title: "Request a Commercial Quote",
      projectTypes: [
        "Select...",
        "Bulk Framing",
        "Fine Art Printing",
        "Installation",
        "Other"
      ],
      disclaimer: "All enquiries sent to info@gallery23.ie. Our commercial team responds within 24 hours.",
      submitText: "Submit Commercial Enquiry"
    }
  };
};
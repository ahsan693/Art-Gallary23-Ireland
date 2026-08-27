// ==========================================
// DATA LAYER: SERVICES PAGE
// ==========================================

export const servicesImages = {
  hero: "/Services/Images/Section 1.png",
  pictureFraming: "/Services/Images/Section2- 02.png",
  jerseyFraming: "/Services/Images/Section2- 01.png",
  canvasPrints: "/Services/Images/Section2- 03.png",
  shadowBox: "/Services/Images/Section2- 04.png",
  certificate: "/Services/Images/Section2- 05.png",
  photoRestoration: "/Services/Images/Section2- 06.png",
  cta: "/Services/Images/Section 5.png",
};

// Simulated Async Database Call.
export const getServicesData = async () => {
  return {
    hero: {
      badge: "What We Do",
      title: "Our Expert Framing & Printing Services",
      subtitle:
        "Dublin's most comprehensive range of professional framing services — every piece handcrafted by master framers with nearly 40 years of experience.",
      image: servicesImages.hero,
    },
    offerings: [
      {
        id: "picture-framing",
        title: "Picture Framing",
        description:
          "Preserve and showcase your artwork, photographs, and prints with our custom picture framing. Choose from hundreds of frame styles, mats, and glass options.",
        image: servicesImages.pictureFraming,
        ctaText: "INQUIRE NOW",
        ctaLink: "/contactus",
      },
      {
        id: "jersey-framing",
        title: "Jersey Framing",
        description:
          "Display your proud sports jerseys and memorabilia in custom-built shadow box frames. UV-protective glass keeps colors vibrant for years.",
        image: servicesImages.jerseyFraming,
        ctaText: "INQUIRE NOW",
        ctaLink: "/contactus",
      },
      {
        id: "canvas-prints",
        title: "Canvas Prints",
        description:
          "Transform your favorite photos into stunning canvas prints. We offer gallery-wrapped and framed canvas options in any size. Best offer for new visitors.",
        image: servicesImages.canvasPrints,
        ctaText: "INQUIRE NOW",
        ctaLink: "/contactus",
      },
      {
        id: "shadow-box",
        title: "Shadow Box Framing",
        description:
          "Create dimensional displays for 3D objects, medals, collectibles, and keepsakes in beautifully crafted shadow boxes.",
        image: servicesImages.shadowBox,
        ctaText: "INQUIRE NOW",
        ctaLink: "/contactus",
      },
      {
        id: "certificate-award",
        title: "Certificate & Award Framing",
        description:
          "Present your diplomas, certificates, and awards with the distinction they deserve. Professional framing for any document size.",
        image: servicesImages.certificate,
        ctaText: "INQUIRE NOW",
        ctaLink: "/contactus",
      },
      {
        id: "photo-restoration",
        title: "Photo Restoration",
        description:
          "Bring old or damaged photos back to life with our restoration services, then preserve them in archival-quality custom frames.",
        image: servicesImages.photoRestoration,
        ctaText: "INQUIRE NOW",
        ctaLink: "/contactus",
      },
    ],
    journey: {
      title: "The framing journey",
      steps: [
        {
          num: "1",
          title: "Free Consultation",
          desc: "Visit our studio for expert assessment and material recommendations.",
        },
        {
          num: "2",
          title: "Material Selection",
          desc: "Choose from hundreds of mouldings, mats, and glazing options.",
        },
        {
          num: "3",
          title: "Expert Craftsmanship",
          desc: "Hand-cut, joined, and finished by our master craftsmen.",
        },
        {
          num: "4",
          title: "Collection",
          desc: "Pick up your completed piece or arrange secure local delivery.",
        },
      ],
    },
    form: {
      title: "Inquire Now",
      subtitle:
        "Have questions about our services? Fill out the form below and we'll get back to you shortly.",
      fields: {
        services: [
          "Select a service...",
          "Picture Framing",
          "Jersey Framing",
          "Canvas Prints",
          "Shadow Box Framing",
          "Certificate Framing",
          "Photo Restoration",
        ],
      },
      submitText: "Submit Inquiry",
    },
    cta: {
      title: "Book A Free Consultation Service.",
      subtitle: "Get in touch with our friendly and knowledgeable team.",
      buttonPhone: "(085) 631-4964",
      buttonText: "Send Message",
      buttonLink: "/contactus",
      image: servicesImages.cta,
    },
    features: [
      {
        title: "40 Years Expertise",
        desc: "Dedicated family knowledge passed down through generations.",
      },
      {
        title: "Sustainable Practices",
        desc: "Committed to eco-friendly materials and workshop waste reduction.",
      },
      {
        title: "500+ Mouldings",
        desc: "One of Ireland's largest selections of classic and modern frames.",
      },
      {
        title: "Free Consultations",
        desc: "No appointment needed for expert design advice from our team.",
      },
    ],
  };
};
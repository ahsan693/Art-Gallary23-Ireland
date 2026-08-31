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
      imageAlt: "Gallery23 framing and printing studio",
    },
    offerings: [
      {
        id: "picture-framing",
        title: "Picture Framing",
        description:
          "Preserve and showcase your artwork, photographs, and prints with our custom picture framing. Choose from hundreds of frame styles, mats, and glass options.",
        image: servicesImages.pictureFraming,
        imageAlt: "Custom picture framing service",
        ctaText: "INQUIRE NOW",
        ctaLink: "/support",
      },
      {
        id: "jersey-framing",
        title: "Jersey Framing",
        description:
          "Display your proud sports jerseys and memorabilia in custom-built shadow box frames. UV-protective glass keeps colors vibrant for years.",
        image: servicesImages.jerseyFraming,
        imageAlt: "Custom jersey framing service",
        ctaText: "INQUIRE NOW",
        ctaLink: "/support",
      },
      {
        id: "canvas-prints",
        title: "Canvas Prints",
        description:
          "Transform your favorite photos into stunning canvas prints. We offer gallery-wrapped and framed canvas options in any size. Best offer for new visitors.",
        image: servicesImages.canvasPrints,
        imageAlt: "Canvas printing service",
        ctaText: "INQUIRE NOW",
        ctaLink: "/support",
      },
      {
        id: "shadow-box",
        title: "Shadow Box Framing",
        description:
          "Create dimensional displays for 3D objects, medals, collectibles, and keepsakes in beautifully crafted shadow boxes.",
        image: servicesImages.shadowBox,
        imageAlt: "Shadow box framing service",
        ctaText: "INQUIRE NOW",
        ctaLink: "/support",
      },
      {
        id: "certificate-award",
        title: "Certificate & Award Framing",
        description:
          "Present your diplomas, certificates, and awards with the distinction they deserve. Professional framing for any document size.",
        image: servicesImages.certificate,
        imageAlt: "Certificate and award framing service",
        ctaText: "INQUIRE NOW",
        ctaLink: "/support",
      },
      {
        id: "photo-restoration",
        title: "Photo Restoration",
        description:
          "Bring old or damaged photos back to life with our restoration services, then preserve them in archival-quality custom frames.",
        image: servicesImages.photoRestoration,
        imageAlt: "Photo restoration service",
        ctaText: "INQUIRE NOW",
        ctaLink: "/support",
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
        fullName: {
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email Address",
          placeholder: "Enter your email address",
        },
        phone: {
          label: "Phone Number",
          placeholder: "Enter your phone number",
        },
        service: {
          label: "Service of Interest",
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your project...",
        },
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
      responseNote: "All enquiries sent to info@g23.ie. Our commercial team responds within 24 hours.",
    },
    cta: {
      title: "Book A Free Consultation Service.",
      subtitle: "Get in touch with our friendly and knowledgeable team.",
      buttonPhone: "(085) 631-4964",
      buttonText: "Send Message",
      buttonLink: "/support",
      image: servicesImages.cta,
      imageAlt: "Living room with framed art",
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
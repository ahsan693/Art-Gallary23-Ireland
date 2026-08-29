// ==========================================
// DATA LAYER: ABOUT US PAGE
// ==========================================

export const aboutImages = {
  hero: "/About Us/Images/Section1- img 1.png",
  founderSr: "/About Us/Images/Section2-img01.png",
  founderJr: "/About Us/Images/Section2-img02.png",
  standForBg: "/About Us/Images/Section3.png",
  faqImg: "/About Us/Images/Section6.png",
  // Keeping placeholders for avatars as they were not in the provided folder screenshot
  collectors: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=85",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=85",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=85",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=85"
  ]
};

// Simulated Async Database Call
export const getAboutData = async () => {
  return {
    hero: {
      title: "Our Lineage: Dublin's Framing Legacy Since 1985",
      subtitle: "For nearly four decades, Gallery 23 has been at the heart of Dublin's art and framing community. What began as a small family workshop in Kimmage has grown into one of Ireland's most respected custom framing studios.",
      image: aboutImages.hero,
    },
    meetTheGregs: {
      title: "Meet the Gregs – Father & Son",
      paragraphs: [
        "In 1985, Greg Thompson Sr. opened the doors to Gallery23 with a simple vision – to give every piece of art the frame it deserves. Armed with a passion for woodworking and an eye for design, he built the shop from a modest workshop into a beloved community institution.",
        "Decades later, his son Greg Jr. grew up surrounded by sawdust, frame samples, and the hum of the workshop. After studying fine art and business, Greg Jr. joined the family trade, bringing fresh ideas while honoring his father's time-tested techniques.",
        "Today, Gallery23 is the seamless blend of two generations – Sr. Greg's old-world craftsmanship and Jr. Greg's modern vision. Together, they continue to frame the moments that matter most to their community."
      ],
      quote: "\"My father taught me that a great frame doesn't just hold art – it becomes part of the story. That's what we carry forward every day.\" – Greg Jr.",
      imgSr: aboutImages.founderSr,
      imgJr: aboutImages.founderJr,
    },
    whatWeStandFor: {
      title: "What We Stand For",
      subtitle: "Four principles that guide every frame, every material choice, and every conversation.",
      bgImage: aboutImages.standForBg,
      principles: [
        {
          title: "Master Craftsmanship",
          description: "Every frame is hand-cut, joined, and finished by experienced craftsmen in our Dublin workshop. We never outsource.",
          iconType: "craftsmanship"
        },
        {
          title: "Preservation & Conservation",
          description: "Museum-standard acid-free materials, UV-filtering glass, and reversible mounting to protect your most valuable artworks.",
          iconType: "preservation"
        },
        {
          title: "Sustainability",
          description: "Sustainable timber sourcing, recycled packaging, and eco-friendly workshop practices to minimise our environmental footprint.",
          iconType: "sustainability"
        },
        {
          title: "Client-First Service",
          description: "Free expert consultations at Kimmage and Coalmine. We take time to understand your vision – no pressure, no obligation.",
          iconType: "service"
        }
      ]
    },
    journey: {
      title: "Our Journey",
      milestones: [
        {
          year: "1985",
          desc: "Greg Snr. opens Gallery 23 in Kimmage — establishing a reputation for quality.",
          point: 0.05,
        },
        {
          year: "1995",
          desc: "Expansion into conservation framing and archival services for Dublin galleries.",
          point: 0.28,
        },
        {
          year: "2006",
          desc: "Greg Jnr. joins, introducing digital printing and modern design.",
          point: 0.52,
        },
        {
          year: "2019",
          desc: "Launch of online print shop and quote system, serving all of Ireland.",
          point: 0.76,
        },
        {
          year: "2024",
          desc: "Coalmine location opens. Sustainable framing becomes core commitment.",
          point: 0.95,
        },
      ]
    },
    team: {
      title: "The Gallery23 Team",
      members: [
        {
          name: "Greg Thompson Sr.",
          role: "Founder & Master Craftsman",
          desc: "Started it all in 1985 with passion and precision.",
          img: aboutImages.founderSr,
        },
        {
          name: "Greg Thompson Jr.",
          role: "Co-Owner & Lead Designer",
          desc: "Carrying the family legacy into the modern era.",
          img: aboutImages.founderJr,
        },
        {
          name: "David Chen",
          role: "Restoration Specialist",
          desc: "With us for 15 years, a true artisan.",
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
        },
        {
          name: "Emma Rodriguez",
          role: "Customer Experience",
          desc: "Making every visit feel like family.",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      image: aboutImages.faqImg,
      questions: [
        {
          q: "Do I need an appointment?",
          a: "Walk-ins are always welcome! However, if you'd like dedicated one-on-one time with a designer, we recommend booking a free consultation.",
        },
        {
          q: "How long does custom framing take?",
          a: "Most projects are completed within 2–3 weeks. Rush orders are available for an additional fee.",
        },
        {
          q: "What can you frame?",
          a: "Almost anything — artwork, photos, jerseys, medals, diplomas, memorabilia, shadow boxes, and more. If it's meaningful to you, we can frame it.",
        },
        {
          q: "Do you offer delivery?",
          a: "Yes! We offer local delivery for framed pieces. Ask about our white-glove installation service for larger works.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, cash, and offer payment plans for larger projects.",
        }
      ]
    },
    cta: {
      titlePrefix: "Preserving Memories",
      titleHighlight: "for Art Lovers like you",
      description: "From museum-quality framing to archival canvas prints, our expert team at Gallery 23 helps you protect your most treasured pieces and elevate your home with curated art.",
      buttonText: "Book a Consultation",
      buttonLink: "/support",
      trustText: "Trusted by collectors and artists across Ireland",
      avatars: aboutImages.collectors
    }
  };
};
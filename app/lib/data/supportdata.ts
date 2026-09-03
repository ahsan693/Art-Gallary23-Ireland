// ==========================================
// DATA LAYER: CONTACT US PAGE
// ==========================================

export const contactImages = {
  hero: "/Contact Us/Icons/Section1.png",
  stats: "/Contact Us/Icons/Section4.png",
  faq: "/Contact Us/Icons/Section5.png",
  cta: "/Contact Us/Icons/Section6.png",
};

export const getContactData = async () => {
  return {
    hero: {
      title: "Let's Start a Conversation About Your Art.",
      subtitle: "From curatorial advice to museum-grade preservation, our studio in the heart of Dublin is ready to assist with your next project.",
      image: contactImages.hero,
      imageAlt: "Gallery23 contact studio",
    },
    contactInfo: {
      title: "Visit Our Studio",
      description: "Located in a historic Georgian building overlooking Stephen's Green, Gallery23 is a dedicated space for art, framing, and conversation.",
      details: [
        {
          id: "location",
          iconType: "pin",
          items: [
            { label: "NORTHSIDE", value: "Unit 4 Coolport Porters Road\nCoolmine Blanchardstown D15DX3D" },
            { label: "SOUTHSIDE", value: "23 Sundrive Rd, Kimmage D12KF77" }
          ]
        },
        {
          id: "phone",
          iconType: "phone",
          items: [
            { label: "Phone", value: "(085) 631-4964" }
          ]
        },
        {
          id: "email",
          iconType: "mail",
          items: [
            { label: "Email", value: "hello@gallery23.com" }
          ]
        },
        {
          id: "hours",
          iconType: "clock",
          items: [
            { label: "Opening Hours", value: "Tues - Sat: 10:00 AM - 6:00 PM\nSun: 12:00 PM - 4:00 PM\nMon: Closed" }
          ]
        }
      ],
      socials: [
        { label: "IG", url: "https://www.instagram.com/gallery23framing?igsi=MTY5b3MyaTMwZ3BqYw==" },
        { label: "FB", url: "https://www.facebook.com/Gallerytwentythree" }
      ],
      socialHeading: "Follow Us"
    },
    form: {
      title: "Send a Message",
      description: "Select a topic below for any inquiries or commercial projects. We'll be in touch shortly.",
      fields: {
        name: { label: "Your Name", placeholder: "John Doe" },
        email: { label: "Email Address", placeholder: "john.doe@email.com" },
        subject: { label: "Subject" },
        message: { label: "Message", placeholder: "Tell us more about your project..." },
      },
      subjects: [
        "Inquiry about Custom Framing",
        "Fine Art Printing",
        "Commercial Projects",
        "Other"
      ],
      submitText: "Send Message"
    },
    map: {
      title: "GALLERY 23",
      locations: [
        { name: "Gallery 23", address: "23 Sundrive Rd, Harold's Cross, Dublin 12, D12 KF77, Ireland" },
      ],
      linkText: "Get Directions",
      embedTitle: "Gallery 23, 23 Sundrive Road",
      url: "https://www.google.com/maps/search/?api=1&query=Gallery+23%2C+23+Sundrive+Rd%2C+Harold%27s+Cross%2C+Dublin+12%2C+D12+KF77%2C+Ireland",
      embedUrl: "https://www.google.com/maps?output=embed&q=Gallery+23%2C+23+Sundrive+Rd%2C+Harold%27s+Cross%2C+Dublin+12%2C+D12+KF77%2C+Ireland"
    },
    stats: {
      title: "Why Visit Gallery23",
      subtitle: "Because after visiting us...",
      image: contactImages.stats,
      imageAlt: "Gallery23 studio and framing workshop",
      metrics: [
        { target: 98, suffix: "%", title: "Client Satisfaction", desc: "Rated 4.9 stars with 500+ reviews" },
        { target: 3000, suffix: "+", title: "Projects Annually", desc: "Family photos to corporate installs" },
        { target: 40, suffix: "", title: "Years of Expertise", desc: "Two generations of master framers" },
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      image: contactImages.faq,
      imageAlt: "Gallery23 framing studio view",
      questions: [
        { q: "Do I need an appointment?", a: "Walk-ins are always welcome! However, if you'd like dedicated one-on-one time with a designer, we recommend booking a free consultation." },
        { q: "How long does custom framing take?", a: "Most projects are completed within 2–3 weeks. Rush orders are available for an additional fee." },
        { q: "What can you frame?", a: "Almost anything — artwork, photos, jerseys, medals, diplomas, memorabilia, shadow boxes, and more. If it's meaningful to you, we can frame it." },
        { q: "Do you offer delivery?", a: "Yes! We offer local delivery for framed pieces. Ask about our white-glove installation service for larger works." },
        { q: "What payment methods do you accept?", a: "We accept all major credit cards, cash, and offer payment plans for larger projects." },
      ]
    },
    cta: {
      title: "Ready to Frame Something Beautiful?",
      subtitle: "Book your free consultation today and let our experts help you preserve what matters most.",
      buttonText: "Book Free Consultation",
      buttonLink: "/support",
      image: contactImages.cta,
      imageAlt: "Gallery23 framed artwork",
    }
  };
};
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Image assets used throughout the page
const images = {
  hero: "/gallery23/hero-figma.png",
  services: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=1300&q=85",
  about: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=1300&q=85",
  why: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1300&q=85",
  print: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1300&q=85",
  showcase: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1800&q=85",
  frameOne: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=900&q=85",
  frameTwo: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85",
  frameThree: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=85",
  instagramOne: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=700&q=85",
  instagramTwo: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=85",
  instagramThree: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=85",
  instagramFour: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",
  consultation: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
};

// Navigation Links
const navItems = ["Home", "Services", "Print Shop", "Commercial"];
const rightNav = ["About Us", "Stores", "Support"];

// Services Section Data
const services = [
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

// Testimonials Section Data
const testimonials = [
  {
    name: "Ayla Renford",
    quote: "The consultation was calm, detailed, and genuinely useful. The finished frame changed the whole room.",
  },
  {
    name: "Marcus Byrne",
    quote: "Gallery 23 handled a fragile family portrait beautifully. Every material choice felt considered.",
  },
  {
    name: "Niamh O'Connell",
    quote: "Fast turnaround, crisp print quality, and a team that clearly loves the craft.",
  },
];

// FAQs Section Data
const faqs = [
  "What can you custom frame?",
  "What are my framing options?",
  "How do design consultations work?",
];

// ==========================================
// SVG ICONS & NEW BENEFITS DATA
// ==========================================

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.6 20.4h4.8m-2.4 3v-3m-6-8.4a6 6 0 1 1 12 0c0 2.4-1.8 4.2-3 5.4H9c-1.2-1.2-3-3-3-5.4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v1.2m-3.6.6.6.6m5.4 0-.6.6" />
    </svg>
  );
}

function FrameOutlineIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.2 7.2h9.6v9.6H7.2V7.2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l4.2 4.2M21 3l-4.2 4.2M3 21l4.2-4.2M21 21l-4.2-4.2" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.6 12.6 11.4 14.4 15.6 9.6M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.8c-1.1 0-2.2-.4-3-1.1L7.1 20H4.8c-.7 0-1.2-.5-1.2-1.2v-2.3l-1.7-1.9c-.7-.8-.7-1.9 0-2.7L3.6 10V7.7c0-.7.5-1.2 1.2-1.2H7l1.9-1.7c.8-.7 1.9-.7 2.7 0L13.4 6h2.3c.7 0 1.2.5 1.2 1.2V9.6l1.7 1.9c.7.8.7 1.9 0 2.7l-1.7 1.9v2.3c0 .7-.5 1.2-1.2 1.2h-2.3l-1.9 1.7c-.7.8-1.9.8-2.7.1Z" />
    </svg>
  );
}

const benefitsData = [
  {
    title: "Independently Owned",
    body: "Each store is independently owned and operated by a member of your community.",
    icon: <GlobeIcon />,
  },
  {
    title: "Free Design Consultation",
    body: "Personalized design services make creating the perfect frame easy and enjoyable.",
    icon: <LightbulbIcon />,
  },
  {
    title: "Expert Craftsmanship",
    body: "Our artisans thoughtfully handcraft each frame using high-quality materials.",
    icon: <FrameOutlineIcon />,
  },
  {
    title: "True Love Guarantee",
    body: "Enjoy peace of mind knowing your frame is covered by our True Love Guarantee.",
    icon: <BadgeIcon />,
  },
];


// ==========================================
// REUSABLE UI COMPONENTS
// ==========================================

// Primary Button Component
function Button({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href="#consultation"
      className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
        dark
          ? "bg-[#295b42] text-white hover:bg-[#204834]"
          : "bg-white text-[#161616] hover:bg-[#f3eee6]"
      }`}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

// Next.js Responsive Image Wrapper
function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#161616]">
      {/* --- HEADER & NAVIGATION --- */}
      <header className="mx-auto flex w-full max-w-[1440px] flex-col items-start border-b border-[#d5d5d5] bg-white">
        <div className="flex h-[36px] w-full items-center justify-center bg-[#295b42] px-4 py-2 text-center text-[13px] font-normal tracking-[0.5px] text-white lg:px-[80px]">
          <span className="leading-[1.5]">
            Now Trending!{" "}
            <span className="font-semibold underline decoration-solid underline-offset-2">
              Custom Gallery Walls &rarr;
            </span>
          </span>
        </div>

        <nav className="relative flex h-[72px] w-full items-center bg-white px-4 lg:px-[40px]">
          <div className="flex items-center gap-3 lg:hidden">
            <button aria-label="Open menu" className="grid size-10 place-items-center rounded-full border border-[#d5d5d5] bg-[#f5f0eb]">
              <MenuIcon />
            </button>
            <span className="text-xl font-bold tracking-[1px]">Gallery 23</span>
          </div>

          <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative flex h-[72px] items-center px-4 text-[13px] font-medium leading-[1.5] tracking-[0.78px] ${
                  item === "Home" ? "text-[#295b42]" : "text-[#161616]"
                }`}
              >
                {item}
                {item === "Home" ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#295b42]" /> : null}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="absolute left-1/2 top-0 hidden h-[72px] w-[320px] -translate-x-1/2 items-center justify-center text-center text-[24px] font-bold leading-[1.2] tracking-[1px] text-[#161616] lg:flex"
          >
            Gallery 23
          </a>

          <div className="ml-auto flex min-w-0 items-center justify-end gap-3 lg:flex-1 lg:gap-1">
            <div className="hidden items-center gap-1 lg:flex">
              {rightNav.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-[72px] items-center justify-center px-3 text-[13px] font-medium leading-[1.5] tracking-[0.78px] text-[#161616]"
                >
                  {item}
                </a>
              ))}
            </div>
            <span className="hidden h-6 w-px bg-[#d5d5d5] lg:block" />
            <button aria-label="Search" className="grid size-10 place-items-center rounded-full border border-[#d5d5d5] bg-[#f5f0eb]">
              <Image src="/gallery23/nav-search.svg" alt="" width={20} height={20} className="size-5" />
            </button>
            <button aria-label="Cart" className="grid size-10 place-items-center rounded-full border border-[#d5d5d5] bg-[#f5f0eb]">
              <Image src="/gallery23/nav-shopping-bag.svg" alt="" width={20} height={20} className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- MAIN PAGE CONTENT --- */}
      <main>
        
        {/* --- HERO SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-start">
          <div className="relative h-[620px] w-full overflow-hidden lg:h-[760px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={images.hero}
                alt="Gallery interior with framed artwork on display"
                width={2881}
                height={3840}
                priority
                sizes="100vw"
                className="absolute left-0 top-[-70%] h-[220%] w-full max-w-none object-cover sm:top-[-82%] sm:h-[240%] lg:top-[-89.25%] lg:h-[249.94%]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 from-[18.54%] to-black/40 to-[68.99%]" />
            <div className="relative mx-auto flex h-full max-w-[1280px] items-center px-5 py-20 sm:px-[42px] sm:py-8">
              <div className="flex w-full max-w-[620px] flex-col items-start gap-8 py-12 text-left text-white sm:py-20">
                <h1 className="text-[42px] font-bold leading-[1.1] sm:text-[56px] lg:text-[64px]">
                  Dublin&apos;s Premier
                  <br />
                  Custom Framing &amp;
                  <br />
                  Archival Printing
                </h1>
                <p className="w-full max-w-[520px] text-[16px] leading-[1.5] text-white/80">
                  Experience the art of preservation with our expert framing and museum-quality archival printing services,
                  crafted with care in the heart of Dublin.
                </p>
                <a
                  href="#consultation"
                  className="inline-flex h-[48.5px] max-w-[576px] items-center justify-center gap-3 rounded-full border border-white bg-white px-[25px] py-px text-center text-[13px] font-semibold uppercase tracking-[0.5px] text-[#161616]"
                >
                  <span className="leading-[46px]">Book A Free Consultation</span>
                  <span className="relative block size-4 overflow-hidden">
                    <Image
                      src="/gallery23/hero-arrow-head.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="absolute inset-[18.75%_6.25%_18.75%_62.5%] h-auto w-auto"
                    />
                    <Image
                      src="/gallery23/hero-arrow-line.svg"
                      alt=""
                      width={16}
                      height={1}
                      className="absolute bottom-1/2 left-[6.25%] right-[12.5%] top-1/2 h-auto w-auto"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* --- ANIMATED TICKER (58px Height) --- */}
          <div className="relative flex h-[58px] w-full items-center overflow-hidden bg-[#161616] text-[13px] font-medium text-white">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center gap-[7.8px] pl-[23.41px] pr-[7.81px]">
                  <span className="leading-[58px]">Get Free Consultation</span>
                  <span className="leading-[58px]">&nbsp;&nbsp;&nbsp;Explore Our Fine Art Collection&nbsp;&nbsp;&nbsp;&bull;</span>
                  <span className="leading-[58px]">Explore Services</span>
                  <span className="leading-[58px]">&nbsp;&nbsp;&nbsp;Explore Our Fine Art Collection&nbsp;&nbsp;&nbsp;&bull;</span>
                  <span className="leading-[58px]">Shop Prints Now&nbsp;&nbsp;&nbsp;&nbsp;&bull;</span>
                  <span className="leading-[58px]">&nbsp;&nbsp;&nbsp;Explore Our Fine Art Collection&nbsp;&nbsp;&nbsp;&bull;</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- OUR SERVICES SECTION --- */}
        {/* Outer Container (Services): 1440px Max Width, Warm/Cream bg, 80px Padding */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] py-[80px]">
          
          {/* Inner Container (services-main): 1280px Width, 80px Gap, Padding 40px Y / 64px X */}
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[80px] px-5 py-[40px] lg:flex-row lg:px-[64px]">
            
            {/* Left Image Section (gallery-image): 580px Width x 780px Height, 48px Radius */}
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-[32px] lg:h-[780px] lg:w-[580px] lg:rounded-[48px]">
              <ResponsiveImage src={images.services} alt="Custom framing tools and artwork in a studio" />
            </div>

            {/* Right Text Section (services-content): 492px Width, Vertical Layout, 48px Gap */}
            <div className="flex w-full flex-col gap-[48px] lg:w-[492px]">
              
              <h2 className="text-3xl font-semibold tracking-tight text-[#161616] sm:text-[48px]">
                Our Services
              </h2>
              
              <div className="flex flex-col divide-y divide-[#d5d5d5] border-y border-[#d5d5d5]">
                {services.map((service) => (
                  <article key={service.title} className="flex flex-col items-start justify-center gap-4 py-[32px]">
                    <h3 className="text-xl font-bold text-[#161616]">{service.title}</h3>
                    <p className="text-sm leading-6 text-[#555]">
                      {service.body}
                    </p>
                    <div className="mt-2">
                      <Button dark>{service.cta}</Button>
                    </div>
                  </article>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* --- ABOUT SECTION (About - Gallery23) --- */}
        {/* Outer Container: 1440px Max Width, 704px Fixed Height, Padding: 72px Y / 120px X, Gap: 64px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#161616] px-5 py-14 lg:h-[704px] lg:flex-row lg:gap-[64px] lg:px-[120px] lg:py-[72px]">
          
          {/* Left Text Section (content): 560px Fixed Width, Vertical Layout, 24px Gap */}
          <div className="flex w-full flex-col gap-[24px] lg:w-[560px]">
            <h2 className="text-3xl font-semibold text-white sm:text-[48px] sm:leading-tight">
              About Gallery23
            </h2>
            
            <p className="text-base text-white/75">
              A space for art, framing, and conversation.
            </p>
            
            <p className="text-sm leading-[1.6] text-white/75 sm:text-[16px]">
              Our professional framers love what they do and will happily advise you on your next custom framing project. With a wealth of knowledge and experience, our designers tailor each complimentary design session to your needs so they can create the ideal custom frame for you.
            </p>
            
            <div className="mt-2">
              <Button dark>LEARN MORE</Button>
            </div>
          </div>

          {/* Right Image Section (image-wrapper): 640px Width x 560px Height */}
          <div className="relative h-[320px] w-full shrink-0 overflow-hidden rounded-3xl lg:h-[560px] lg:w-[640px] lg:rounded-[32px]">
            <ResponsiveImage src={images.about} alt="Gallery interior with a motorcycle and framed artwork on the wall" />
          </div>
          
        </section>

        {/* --- WHY CHOOSE OUR FRAMES SECTION --- */}
        {/* Outer Section Container: 1440px Max Width, Vertical Flow, 80px Padding, 56px Gap */}
        <section className="relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px] px-5 py-[80px] lg:px-[80px]">
          
          {/* Background Image & Overlay */}
          <ResponsiveImage src={images.consultation} alt="Gallery styling interior" className="absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-[#161616]/75" /> 

          {/* Header Container: 700px Fixed Width, Vertical Flow, 16px Gap */}
          <div className="flex w-full max-w-[700px] flex-col items-center gap-[16px] text-center text-white">
            <h2 className="text-3xl font-semibold sm:text-[48px] sm:leading-tight">
              Why Choose Our Frames
            </h2>
            <p className="text-sm leading-[1.6] text-white/90 sm:text-[16px]">
              From independent craftsmanship to personalized design services, we bring passion and expertise to every frame we create.
            </p>
          </div>

          {/* Cards Wrapper: 1280px Width, Horizontal Flow, 24px Gap */}
          <div className="flex w-full max-w-[1280px] flex-col gap-[24px] lg:flex-row lg:justify-between">
            {benefitsData.map((item) => (
              <article 
                key={item.title} 
                className="flex flex-1 flex-col rounded-[16px] bg-white px-[32px] py-[36px] shadow-sm lg:max-w-[302px]"
              >
                {/* Individual Card (302px Fill x 296px Hug, 16px Radius, Padding: 36px Y / 32px X) */}
                {/* Top Icon Container: 64px Height Hug, Justify space-between */}
                <div className="flex h-[64px] w-full items-start justify-between">
                  <div className="flex size-[64px] items-center justify-center rounded-full bg-[#f5f0eb]">
                    {item.icon}
                  </div>
                </div>

                {/* Bottom Text Container: 160px Height Hug, Gap 12px, Padding Y 24px */}
                <div className="flex flex-col justify-center gap-[12px] py-[24px]">
                  <h3 className="text-[16px] font-bold text-[#161616]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-[#555]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- CUSTOM PRINTING SECTION --- */}
        <section className="px-5 py-14 sm:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold sm:text-5xl">Custom Printing Made for You</h2>
              <p className="mt-4 text-sm leading-7 text-[#555]">
                Print your own photos, artwork, or designs on premium fine art papers. Choose your paper, upload your file, and we will handle the rest.
              </p>
            </div>
            <div className="mt-10 grid overflow-hidden rounded-[28px] bg-white shadow-sm lg:grid-cols-[43%_57%]">
              <div className="h-[300px] lg:h-[432px]">
                <ResponsiveImage src={images.print} alt="Fine art print and paper samples on a work table" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                <span className="w-max rounded-full border border-[#d5d5d5] px-4 py-2 text-xs font-semibold">Custom Print</span>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">Your Own Photo or Artwork</h3>
                <p className="mt-4 text-sm leading-7 text-[#555]">
                  Upload your personal photos, artwork, or digital files and we will print them to museum quality on your choice of paper or canvas.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#555]">
                  <li>Available in multiple sizes from 4x6 to 40x60</li>
                  <li>Perfect for photographs and digital art</li>
                  <li>Same-day options available in store</li>
                </ul>
                <a href="#" className="mt-8 inline-flex w-max items-center gap-2 text-sm font-bold uppercase tracking-[0.04em]">
                  Start your custom print <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- SHOWCASE / FEATURED PROJECTS SECTION --- */}
        <section className="bg-white px-5 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-semibold sm:text-5xl">Featured Framing Projects</h2>
            <div className="mt-10 h-[280px] overflow-hidden rounded-[28px] sm:h-[558px]">
              <ResponsiveImage src={images.showcase} alt="Large framed artwork in a refined interior" />
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[images.frameOne, images.frameTwo, images.frameThree].map((src, index) => (
                <div key={src} className="h-[180px] overflow-hidden rounded-2xl sm:h-[200px]">
                  <ResponsiveImage src={src} alt={`Framed artwork project ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="px-5 py-14 sm:py-20">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="text-3xl font-semibold sm:text-5xl">Happy clients</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#295b42]">Verified client</p>
                  <p className="mt-8 min-h-28 text-sm leading-7 text-[#555]">&quot;{item.quote}&quot;</p>
                  <h3 className="mt-7 font-bold">{item.name}</h3>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-lg bg-[#161616] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-sm text-white/70">Rated by 264 local customers</p>
              </div>
              <Button>Read Google Reviews</Button>
            </div>
          </div>
        </section>

        {/* --- AS SEEN IN (PRESS) SECTION --- */}
        <section className="bg-white px-5 py-12">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">As seen in</h2>
            <div className="mt-8 grid grid-cols-2 items-center gap-4 text-xl font-bold text-[#777] sm:grid-cols-5">
              {["Forbes", "HuffPost", "ELLE", "AD", "NYT"].map((brand) => (
                <div key={brand} className="rounded-lg border border-[#ece4da] py-6">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INSTAGRAM FEED SECTION --- */}
        <section className="px-5 py-14 sm:py-20">
          <div className="mx-auto max-w-[1440px] text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">Recent Work on Instagram</h2>
            <p className="mt-4 text-sm text-[#555]">@gallery23dublin</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["19th Century Portrait in Ornate Gold", images.instagramOne],
                ["Botanical Series in Natural Oak", images.instagramTwo],
                ["Abstract Minimalism in Matte Black", images.instagramThree],
                ["Championship Jersey Shadow Box", images.instagramFour],
              ].map(([caption, src]) => (
                <figure key={caption} className="text-left">
                  <div className="h-[360px] overflow-hidden rounded-2xl">
                    <ResponsiveImage src={src} alt={caption} />
                  </div>
                  <figcaption className="mt-4 text-sm font-semibold">{caption}</figcaption>
                  <p className="mt-1 text-sm text-[#777]">@gallery23dublin</p>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQS SECTION --- */}
        <section className="px-5 py-14 sm:py-20">
          <div className="mx-auto max-w-[1280px] rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-center text-3xl font-semibold sm:text-5xl">FAQs</h2>
            <div className="mx-auto mt-10 max-w-3xl space-y-3">
              {faqs.map((question) => (
                <details key={question} className="rounded-lg border border-[#d5d5d5] bg-[#f7f3eb] px-5 py-4">
                  <summary className="cursor-pointer text-lg font-bold">{question}</summary>
                  <p className="mt-3 text-sm leading-6 text-[#555]">
                    Bring the piece, dimensions, or a photo of the room. Our team will walk you through materials, finish, glass, and timeline.
                  </p>
                </details>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button dark>View All FAQs</Button>
            </div>
          </div>
        </section>

        {/* --- CONSULTATION / CTA SECTION --- */}
        <section id="consultation" className="relative isolate overflow-hidden px-5 py-16 sm:py-24">
          <ResponsiveImage src={images.consultation} alt="Living room with art and a framed gallery wall" className="absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-[#f7f3eb]/85" />
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">Book A Free Consultation Service.</h2>
            <p className="mt-4 text-sm leading-7">Get in touch with our friendly and knowledgeable team.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href="tel:0856314964" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                (085) 631-4964
              </a>
              <a href="mailto:hello@gallery23.com" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                Send Message
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-8">
          <div className="border-b border-white/15 pb-8 text-2xl font-bold">Gallery 23</div>
          <div className="grid gap-8 border-b border-white/15 py-8 sm:grid-cols-3 lg:grid-cols-5">
            <FooterColumn title="Services" items={["Picture Framing", "Canvas Prints", "Jersey Framing", "Shadow Boxes", "Certificates & Awards", "Photo Frames"]} />
            <FooterColumn title="Company" items={["About Us", "Print Shop", "Commercial"]} />
            <FooterColumn title="Resources" items={["FAQs", "Contact Us"]} />
            <FooterColumn title="North Side" items={["Gallery 23 Downtown", "Unit 4 Coolport Porters Road, Coolmine Blanchardstown D15DX3D", "(555) 123-4567", "hello@gallery23.com"]} />
            <FooterColumn title="South Side" items={["Gallery 23 Uptown", "23 Sundrive Rd, Kimmage D12KF77", "(555) 987-6543", "uptown@gallery23.com"]} />
          </div>
          <div className="flex flex-col gap-5 py-8 text-sm text-[#999] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p>(c) 2024 Gallery 23. All rights reserved.</p>
              <p className="mt-2 max-w-md">Professional custom framing and fine art printing services. Museum-quality preservation for your most valued memories.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[#232323] bg-[#161616] px-4 py-3 text-white">Rated 4.9 from 200+ customers</span>
              <span className="rounded-full border border-[#232323] bg-[#161616] px-4 py-3 text-white">Google Reviews</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// FOOTER HELPER COMPONENT
// ==========================================

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.08em]">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-[#999]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
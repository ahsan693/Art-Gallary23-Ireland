"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

// Navigation Links with exact route mapping
const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Services" },
  { name: "Print Shop", href: "/services" },
  { name: "Commercial", href: "/commercial" },
];

const rightNav = [
  { name: "About Us", href: "/about" },
  { name: "Stores", href: "/contact" },
  { name: "Support", href: "/contact" },
];

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
    date: "6 Days Ago",
    quote: "Had a wonderful experience here. I had two limited edition prints framed and FastFrame did an amazing job. The quality of the framing is some of the best I've experienced and I will definitely use FastFrame again.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Marcus Byrne",
    date: "2 Weeks Ago",
    quote: "My go-to place for framing. The staff is personable and thoughtful in their creative guidance. I know my pieces are in good hands, and I'm always thrilled with the results. Highly recommend, you won't be disappointed!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Niamh O'Connell",
    date: "1 Month Ago",
    quote: "This is my go to shop for framing. The staff is extremely friendly and knowledgeable. They have a great sense of what works and what doesn't. They always find creative ways to work with our budget.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Sarah Jenkins",
    date: "2 Months Ago",
    quote: "I've had two pieces framed here and each time I was so impressed with their acumen for choosing the right frame and border to properly accent the piece. They turned each from a print into a work of art.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  }
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

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
    </svg>
  );
}

export function LightbulbIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.6 20.4h4.8m-2.4 3v-3m-6-8.4a6 6 0 1 1 12 0c0 2.4-1.8 4.2-3 5.4H9c-1.2-1.2-3-3-3-5.4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v1.2m-3.6.6.6.6m5.4 0-.6.6" />
    </svg>
  );
}

export function FrameOutlineIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.2 7.2h9.6v9.6H7.2V7.2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l4.2 4.2M21 3l-4.2 4.2M3 21l4.2-4.2M21 21l-4.2-4.2" />
    </svg>
  );
}

export function BadgeIcon() {
  return (
    <svg className="size-[48px] text-[#295b42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.6 12.6 11.4 14.4 15.6 9.6M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.8c-1.1 0-2.2-.4-3-1.1L7.1 20H4.8c-.7 0-1.2-.5-1.2-1.2v-2.3l-1.7-1.9c-.7-.8-.7-1.9 0-2.7L3.6 10V7.7c0-.7.5-1.2 1.2-1.2H7l1.9-1.7c.8-.7 1.9-.7 2.7 0L13.4 6h2.3c.7 0 1.2.5 1.2 1.2V9.6l1.7 1.9c.7.8.7 1.9 0 2.7l-1.7 1.9v2.3c0 .7-.5 1.2-1.2 1.2h-2.3l-1.9 1.7c-.7.8-1.9.8-2.7.1Z" />
    </svg>
  );
}

export function StarIcon({ fill = "currentColor", className = "size-4" }: { fill?: string; className?: string }) {
  return (
    <svg className={className} fill={fill} viewBox="0 0 24 24" stroke="none">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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
export function Button({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
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
export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

// ==========================================
// HEADER COMPONENT (EXPORTED WITH UPDATED ROUTING)
// ==========================================
export function Header() {
  return (
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
          <Link href="/" className="text-xl font-bold tracking-[1px]">Gallery 23</Link>
        </div>

        <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex h-[72px] items-center px-4 text-[13px] font-medium leading-[1.5] tracking-[0.78px] ${
                item.name === "Home" ? "text-[#295b42]" : "text-[#161616]"
              }`}
            >
              {item.name}
              {item.name === "Home" ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#295b42]" /> : null}
            </Link>
          ))}
        </div>
          
        <Link
          href="/"
          className="absolute left-1/2 top-0 hidden h-[72px] w-[320px] -translate-x-1/2 items-center justify-center text-center text-[24px] font-bold leading-[1.2] tracking-[1px] text-[#161616] lg:flex"
        >
          Gallery 23
        </Link>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-3 lg:flex-1 lg:gap-1">
          <div className="hidden items-center gap-1 lg:flex">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex h-[72px] items-center justify-center px-3 text-[13px] font-medium leading-[1.5] tracking-[0.78px] text-[#161616]"
              >
                {item.name}
              </Link>
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
  );
}

// ==========================================
// FOOTER COMPONENTS (EXPORTED)
// ==========================================
export function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex w-full flex-col items-start lg:w-auto">
      <h3 className="text-[12px] font-bold capitalize text-white">{title}</h3>
      <ul className="mt-[16px] flex flex-col gap-[12px] text-[13px] leading-[1.5] text-[#999999] sm:mt-[24px] sm:gap-[14px]">
        {items.map((item, index) => {
          const isPhone = item.includes("(555)");
          const isEmail = item.includes("@");
          const isHighlight = index === 0 && (title === "North side" || title === "South side");

          return (
            <li key={index} className="flex max-w-[260px] items-start gap-[8px] sm:max-w-[200px]">
              {isPhone && (
                <svg className="mt-[2px] size-[14px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              )}
              {isEmail && (
                <svg className="mt-[2px] size-[14px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              <span className={isHighlight ? "font-bold text-white" : "hover:text-white transition-colors cursor-pointer"}>
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-black text-white">
      {/* Top Section */}
      <div className="flex w-full items-center justify-between border-b border-[#222222] px-5 py-[28px] sm:px-[40px] lg:px-[80px] lg:py-[40px]">
        <Link href="/" className="flex h-[48px] items-center gap-[10px] sm:h-[65px] sm:gap-[12px]">
          <div className="flex size-[40px] items-center justify-center border-2 border-white text-[13px] font-bold sm:size-[48px] sm:text-[16px]">
            G23
          </div>
          <span className="text-[18px] font-semibold tracking-tight text-white sm:text-[22px]">
            Gallery 23
          </span>
        </Link>
      </div>

      {/* Middle Section */}
      <div className="flex w-full flex-col items-start gap-[32px] border-b border-[#222222] px-5 py-[40px] sm:grid sm:grid-cols-2 sm:gap-x-[32px] sm:gap-y-[40px] sm:px-[40px] lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-[24px] lg:px-[80px] lg:py-[56px]">
        <FooterColumn 
          title="Services" 
          items={["Picture Framing", "Canvas Prints", "Jersey Framing", "Shadow Boxes", "Certificates & Awards", "Photo Frames"]} 
        />
        <FooterColumn 
          title="Company" 
          items={["About Us", "Print Shop", "Commercial"]} 
        />
        <FooterColumn 
          title="Resources" 
          items={["FAQs", "Contact Us"]} 
        />
        <FooterColumn 
          title="North side" 
          items={["Gallery 23 Downtown", "Unit 4 Coolport Porters Road, Coolmine Blanchardstown D15DX3D", "(555) 123-4567", "hello@gallery23.com"]} 
        />
        <FooterColumn 
          title="South side" 
          items={["Gallery 23 Uptown", "23 Sundrive Rd, Kimmage D12KF77", "(555) 987-6543", "uptown@gallery23.com"]} 
        />
      </div>

      {/* Bottom Section */}
      <div className="flex w-full flex-col items-start gap-[24px] px-5 pb-[32px] pt-[24px] sm:px-[40px] lg:flex-row lg:items-start lg:justify-between lg:px-[80px] lg:pb-[40px] lg:pt-[32px]">
        <div className="flex w-full flex-col gap-[8px] text-[13px] leading-[1.6] text-[#999999] lg:w-[380px]">
          <p>©2024 Gallery 23. All rights reserved.</p>
          <p>
            Professional custom framing and fine art printing services.
            Museum-quality preservation for your most valued memories.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[12px] sm:w-auto sm:flex-row sm:items-center">
          <div className="flex items-center justify-center gap-[10px] rounded-[100px] border border-[#333333] bg-[#161616] px-[16px] py-[10px] sm:justify-start">
            <div className="flex text-[#FBBF24]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-[14px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="flex flex-col text-[11px] font-medium leading-[1.3]">
              <span className="text-white">Rated 4.9 from</span>
              <span className="text-[#999999]">200+ customers</span>
            </div>
          </div>

          <a href="#" className="flex items-center justify-center gap-[8px] rounded-[100px] border border-[#333333] bg-[#161616] px-[16px] py-[10px] transition hover:bg-[#222222]">
            <svg className="size-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
            </svg>
            <span className="text-[12px] font-medium text-white">Google Reviews</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function Home() {
  const showcaseImages = [images.frameOne, images.frameTwo, images.frameThree];
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % showcaseImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [showcaseImages.length]);

  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#161616]">
      <Header />

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
              <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-8 py-12 text-center text-white sm:py-20 lg:mx-0 lg:items-start lg:text-left">
                <h1 className="text-[38px] font-bold leading-[1.15] sm:text-[56px] lg:text-[64px] lg:leading-[1.1]">
                  Dublin&apos;s Premier
                  <br />
                  Custom Framing &amp;
                  <br />
                  Archival Printing
                </h1>
                <p className="w-full max-w-[480px] text-[15px] leading-[1.5] text-white/80 sm:max-w-[520px] sm:text-[16px]">
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
          
          {/* --- ANIMATED TICKER --- */}
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
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] px-5 py-[40px] lg:flex-row lg:gap-[80px] lg:px-[64px]">
            <div className="flex w-full flex-col items-center gap-[12px] text-center lg:hidden">
              <h2 className="text-3xl font-semibold tracking-tight text-[#161616]">
                Our Services
              </h2>
              <p className="max-w-[320px] text-sm leading-6 text-[#555]">
                Expert solutions tailored to showcase and preserve your most valued pieces.
              </p>
            </div>
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-[32px] lg:h-[780px] lg:w-[580px] lg:rounded-[48px]">
              <ResponsiveImage src={images.services} alt="Custom framing tools and artwork in a studio" />
            </div>
            <div className="flex w-full flex-col gap-[48px] lg:w-[492px]">
              <h2 className="hidden text-3xl font-semibold tracking-tight text-[#161616] sm:text-[48px] lg:block">
                Our Services
              </h2>
              <div className="flex flex-col divide-y divide-[#d5d5d5] border-y border-[#d5d5d5]">
                {services.map((service) => (
                  <article key={service.title} className="flex flex-col items-start justify-center gap-4 py-[32px]">
                    <h3 className="text-xl font-bold text-[#161616]">{service.title}</h3>
                    <p className="text-sm leading-6 text-[#555]">{service.body}</p>
                    <div className="mt-2">
                      <Button dark>{service.cta}</Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#161616] px-5 py-14 lg:h-[704px] lg:flex-row lg:gap-[64px] lg:px-[120px] lg:py-[72px]">
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
              <Link href="/about" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#295b42] px-6 text-sm font-semibold text-white transition hover:bg-[#204834]">
                LEARN MORE <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="relative mt-10 h-[260px] w-full shrink-0 overflow-hidden rounded-3xl lg:mt-0 lg:h-[560px] lg:w-[640px] lg:rounded-[32px]">
            <ResponsiveImage src={images.about} alt="Gallery interior with framed artwork" />
          </div>
        </section>

        {/* --- WHY CHOOSE OUR FRAMES SECTION --- */}
        <section className="relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px] px-5 py-[80px] lg:px-[80px]">
          <ResponsiveImage src={images.consultation} alt="Gallery styling interior" className="absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-[#161616]/75" /> 
          <div className="flex w-full max-w-[700px] flex-col items-center gap-[16px] text-center text-white">
            <h2 className="text-3xl font-semibold sm:text-[48px] sm:leading-tight">
              Why Choose Our Frames
            </h2>
            <p className="text-sm leading-[1.6] text-white/90 sm:text-[16px]">
              From independent craftsmanship to personalized design services, we bring passion and expertise to every frame we create.
            </p>
          </div>
          <div className="flex w-full max-w-[1280px] flex-col gap-[24px] lg:flex-row lg:justify-between">
            {benefitsData.map((item) => (
              <article 
                key={item.title} 
                className="flex flex-1 flex-col rounded-[16px] bg-white px-[32px] py-[36px] shadow-sm lg:max-w-[302px]"
              >
                <div className="flex h-[64px] w-full items-start justify-between">
                  <div className="flex size-[64px] items-center justify-center rounded-full bg-[#f5f0eb]">
                    {item.icon}
                  </div>
                </div>
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
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[48px] bg-[#f5f0eb] px-5 py-[80px] lg:px-[80px]">
          <div className="flex w-full max-w-[802px] flex-col items-center gap-[12px] text-center">
            <h2 className="text-[32px] font-bold text-[#161616] sm:text-[48px] sm:leading-tight">
              Custom Printing Made for You
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#555]">
              Print your own photos, artwork, or designs on premium fine art papers. Choose your paper, upload your file, and we&apos;ll handle the rest.
            </p>
          </div>
          <div className="flex w-full max-w-[1280px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.078)] lg:h-[432px] lg:flex-row">
            <div className="relative h-[300px] w-full shrink-0 lg:h-full lg:w-[554px]">
              <ResponsiveImage src={images.print} alt="Professional fine art printing studio" />
            </div>
            <div className="flex w-full flex-1 flex-col justify-between px-6 py-8 lg:pb-[36px] lg:pl-[90px] lg:pr-[36px] lg:pt-[32px]">
              <div className="flex flex-col items-start gap-[16px]">
                <span className="inline-flex h-[27px] items-center justify-center rounded-[100px] bg-[#295b42] px-[14px] py-[6px] text-[11px] font-bold tracking-[0.04em] text-white">
                  Custom Print
                </span>
                <h3 className="text-[24px] font-bold leading-[1.2] text-[#161616] sm:text-[28px]">
                  Your Own Photo or Artwork
                </h3>
                <p className="text-[15px] leading-7 text-[#555]">
                  Upload your personal photos, artwork, or digital files and we&apos;ll print them to museum quality on your choice of paper or canvas.
                </p>
                <ul className="flex flex-col gap-[8px] text-[15px] text-[#555]">
                  <li className="flex items-center gap-[10px]">
                    <span className="size-1.5 shrink-0 rounded-full bg-[#295b42]" />
                    Available in multiple sizes from 4x6 to 40x60
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <span className="size-1.5 shrink-0 rounded-full bg-[#295b42]" />
                    Perfect for photographs and digital art
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <span className="size-1.5 shrink-0 rounded-full bg-[#295b42]" />
                    Same-day options available in store
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-[36px]">
                <Link href="/services" className="inline-flex h-[49px] items-center justify-center gap-[8px] rounded-[999px] bg-[#161616] px-[28px] py-[14px] text-[12px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-black">
                  START YOUR CUSTOM PRINT <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- SHOWCASE / FEATURED FRAMING PROJECTS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px] bg-[#295b42] px-5 pb-[80px] pt-[64px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          <div className="flex w-full max-w-[1200px] items-center justify-between">
            <h2 className="w-full max-w-none text-[26px] font-semibold tracking-[0.01em] text-white sm:text-[40px] sm:leading-[1.05] lg:whitespace-nowrap lg:text-[56px]">
              Featured Framing Projects
            </h2>
          </div>

          <div className="flex w-full max-w-[1200px] flex-col items-center gap-[24px]">
            <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-[24px] sm:h-[300px] lg:h-[558px] lg:w-[1200px] lg:rounded-[46px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <ResponsiveImage src={showcaseImages[activeProject]} alt={`Featured framing project ${activeProject + 1}`} />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[24px] shadow-[inset_0_4px_8px_rgba(0,0,0,0.40)] lg:rounded-[46px]" />
            </div>

            <div className="flex items-center gap-2">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeProject ? "w-6 bg-white" : "size-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex w-full gap-[16px] overflow-x-auto pb-2 sm:flex-row sm:gap-[32px] lg:overflow-visible">
              {showcaseImages.map((src, index) => {
                const isActive = index === activeProject;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`relative flex h-[140px] w-[220px] shrink-0 cursor-pointer items-center justify-center transition-all duration-300 sm:h-[200px] sm:w-[380px] ${
                      isActive
                        ? "rounded-[20px] border-2 border-white bg-[#336a4c] p-[6px] sm:rounded-[24px] sm:p-[8px]" 
                        : "rounded-[20px] border-2 border-transparent bg-transparent opacity-60 hover:opacity-100 sm:rounded-[24px]" 
                    }`}
                  >
                    <div className={`relative h-full w-full overflow-hidden ${isActive ? "rounded-[14px] sm:rounded-[16px]" : "rounded-[20px] sm:rounded-[24px]"}`}>
                      <ResponsiveImage src={src} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] overflow-hidden bg-[#f5f0eb] px-5 py-[64px] lg:gap-[48px] lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-[24px]">
            <h2 className="w-full max-w-none text-[26px] font-semibold tracking-[0.01em] text-[#161616] sm:text-[40px] sm:leading-[1.05] lg:whitespace-nowrap lg:text-[56px]">
              What Our Costumer Say
            </h2>

            <div className="flex h-auto w-full max-w-[1200px] flex-col items-stretch gap-3 rounded-[20px] bg-white p-[20px] sm:h-[82px] sm:flex-row sm:items-center sm:justify-between sm:rounded-[27px] sm:py-0 sm:pl-[32px] sm:pr-[24px]">
              <div className="flex flex-col items-start justify-center">
                <div className="text-[22px] font-bold tracking-tighter sm:text-[26px]">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <div className="flex items-center gap-[6px] text-[12px] font-bold text-[#161616] sm:text-[14px]">
                  4.9
                  <div className="flex text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="size-[14px]" />
                    ))}
                  </div>
                  <span className="font-normal text-[#777]">(264)</span>
                </div>
              </div>

              <a href="#" className="flex h-[44px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-[#295b42] px-[16px] text-[12px] font-medium text-white transition hover:bg-[#204834] sm:h-[48px] sm:w-auto sm:px-[24px] sm:text-[14px]">
                Review us on Google <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[1440px] overflow-hidden">
            <motion.div
              className="flex w-max gap-[16px] pb-[16px] sm:gap-[24px] lg:gap-[32px]"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }} 
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <article
                  key={index}
                  className="flex h-[400px] w-[260px] shrink-0 flex-col gap-[16px] rounded-[12px] bg-white p-[20px] shadow-sm sm:h-[440px] sm:w-[360px] sm:gap-[20px] sm:p-[32px]"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="relative size-[48px] shrink-0 overflow-hidden rounded-full">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[15px] font-bold text-[#161616]">{item.name}</h3>
                      <p className="text-[12px] text-[#999]">{item.date}</p>
                    </div>
                  </div>
                  <div className="inline-flex w-max items-center gap-1 rounded-[100px] bg-[#295b42] px-[12px] py-[6px] text-white">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="size-[12px]" />
                    ))}
                  </div>
                  <p className="text-[14px] leading-[1.6] text-[#555]">
                    {item.quote}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TRUSTED BY SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center overflow-hidden bg-white px-5 py-[40px] lg:px-[80px] lg:py-[52px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[20px] lg:gap-[26px]">
            <h2 className="w-full text-center text-[26px] font-bold tracking-[0.01em] text-[#161616] sm:text-[32px] lg:text-[56px] lg:leading-[1.05]">
              Trusted By
            </h2>
            <div className="relative flex h-[64px] w-full items-center overflow-hidden sm:h-[106px]">
              <motion.div
                className="flex w-max items-center"
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }} 
              >
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-[40px] pr-[40px] sm:gap-[64px] sm:pr-[64px]">
                    {["Forbes", "HUFFPOST", "ELLE DECOR", "AD", "The New York Times"].map((brand, i) => (
                      <div 
                        key={i} 
                        className="flex h-[64px] items-center justify-center whitespace-nowrap text-[18px] font-black tracking-tighter text-[#333] opacity-80 sm:h-[106px] sm:text-[28px]"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- WHAT WE'VE BEEN FRAMING SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center overflow-hidden bg-[#f5f0eb]">
          <div className="flex w-full flex-col items-center gap-[20px] px-5 py-[40px] sm:gap-[32px] sm:py-[56px]">
            <h2 className="w-full max-w-[697px] text-center text-[26px] font-semibold tracking-[0.01em] text-[#161616] sm:text-[40px] lg:text-[56px] lg:leading-[1.05]">
              What We&apos;ve Been Framing
            </h2>
            <div className="flex items-center gap-[8px] text-[13px] font-medium text-[#161616] sm:text-[14px]">
              <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow us <span className="text-[#295b42]">@gallery23framing</span>
            </div>
          </div>

          <div className="relative flex h-[420px] w-full pl-[20px] sm:h-[581px] lg:pl-[40px]">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }} 
            >
              {[
                { title: "19th Century Portrait in Ornate Gold", handle: "@vintagelover_ny", img: images.instagramOne },
                { title: "Botanical Series in Natural Oak", handle: "@botanical_living", img: images.instagramTwo },
                { title: "Abstract Minimalism in Matte Black", handle: "@modern_nest", img: images.instagramThree },
                { title: "Championship Jersey Shadow Box", handle: "@sportscollector_88", img: images.instagramFour },
                { title: "19th Century Portrait in Ornate Gold", handle: "@vintagelover_ny", img: images.instagramOne },
                { title: "Botanical Series in Natural Oak", handle: "@botanical_living", img: images.instagramTwo },
                { title: "Abstract Minimalism in Matte Black", handle: "@modern_nest", img: images.instagramThree },
                { title: "Championship Jersey Shadow Box", handle: "@sportscollector_88", img: images.instagramFour },
              ].map((item, index) => (
                <article key={index} className="flex w-[250px] shrink-0 flex-col items-start sm:w-[350px]">
                  <div className="relative h-[290px] w-[190px] overflow-hidden rounded-[8px] sm:h-[400px] sm:w-[270px]">
                    <ResponsiveImage src={item.img} alt={item.title} />
                  </div>
                  <div className="mt-[12px] flex w-[190px] flex-col gap-[4px] sm:mt-[16px] sm:w-[270px]">
                    <h3 className="truncate text-[14px] font-semibold leading-[1.4] text-[#161616] sm:text-[15px]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#777] sm:text-[14px]">
                      {item.handle}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- FAQS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[16px] py-[56px] sm:px-[24px] lg:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] rounded-[12px] p-0 sm:gap-[40px] sm:p-[32px]">
            <h2 className="text-center text-[26px] font-semibold tracking-[0.01em] text-[#161616] sm:text-[40px] lg:text-[56px] lg:leading-[1.05]">
              FAQs
            </h2>

            <div className="flex w-full max-w-[752px] flex-col gap-[6px] pb-[6px]">
              {faqs.map((question, index) => (
                <details key={index} className="group w-full rounded-[12px] bg-white p-[20px] shadow-sm sm:p-[30px]">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-[16px] font-normal leading-[1.3] text-[#161616] sm:text-[18px] lg:text-[24px] [&::-webkit-details-marker]:hidden">
                    {question}
                    <svg className="size-[20px] shrink-0 text-[#161616] transition-transform duration-300 group-open:rotate-45 sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[14px] leading-[1.6] text-[#555] sm:text-[16px]">
                    Bring the piece, dimensions, or a photo of the room. Our team will walk you through materials, finish, glass, and timeline.
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-[8px] text-center">
              <Link href="/contactus" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#295b42] px-6 text-sm font-semibold text-white transition hover:bg-[#204834]">
                VIEW ALL FAQS <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* --- CONSULTATION / CTA SECTION --- */}
        <section
          id="consultation"
          className="relative mx-auto flex min-h-[480px] w-full max-w-[1440px] items-center justify-center overflow-hidden px-[16px] py-[48px] sm:min-h-[578px] sm:px-[24px] sm:py-0"
        >
          <div className="absolute inset-0 -z-20">
            <Image
              src={images.consultation}
              alt="Living room with art and a framed gallery wall"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-black/50" />

          <div className="flex w-full max-w-[1050px] flex-col items-center rounded-[12px] bg-white px-[20px] py-[36px] text-center shadow-lg sm:px-[24px] sm:py-[48px]">
            <h2 className="mx-auto w-full max-w-[861px] text-[26px] font-semibold leading-[1.15] tracking-[0px] text-black sm:text-[32px] lg:text-[56px] lg:leading-[1.05]">
              Book A Free Consultation Service.
            </h2>

            <div className="py-[16px] sm:py-[24px]">
              <p className="text-[14px] leading-normal text-[#161616] sm:text-[16px]">
                Get in touch with our friendly and knowledgeable team
              </p>
            </div>

            <div className="pt-[8px] sm:pt-[16px]">
              <div className="flex w-full flex-col items-stretch justify-center gap-[12px] sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="tel:0856314964"
                  className="inline-flex h-[48.5px] items-center justify-center gap-[10px] rounded-[100px] border border-black bg-black px-[24px] text-[14px] font-semibold text-white transition hover:bg-neutral-800"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span>(085) 631-4964</span>
                </a>

                <Link
                  href="/contactus"
                  className="inline-flex h-[48.5px] items-center justify-center gap-[10px] rounded-[100px] border border-black bg-black px-[24px] text-[14px] font-semibold text-white transition hover:bg-neutral-800"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <span>Send Message</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
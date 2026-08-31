"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Import Data Layer
import {
  images,
  navItems,
  rightNav,
  services,
  testimonials,
  faqs,
  benefitsData,
  trustedBrands,
  consultationData
} from "@/app/lib/data/homedata";

// ==========================================
// SVG ICONS & MAPPINGS
// ==========================================

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
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

export function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg className="size-[54px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 2.5c2.5 0 4.5 4.2 4.5 9.5s-2 9.5-4.5 9.5-4.5-4.2-4.5-9.5 2-9.5 4.5-9.5z" />
      <path d="M2.5 12h19" />
      <path d="M4.5 7h15" />
      <path d="M4.5 17h15" />
    </svg>
  );
}

export function LightbulbIcon() {
  return (
    <svg className="size-[54px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path d="M9.5 17.5A6.5 6.5 0 1 1 14.5 17.5" />
      <path d="M9.5 17.5h5" />
      <path d="M10 20h4" />
      <path d="M10 17.5v2.5" />
      <path d="M14 17.5v2.5" />
      <path d="M10.5 20v1.5h3V20" />
      <path d="M12 15v-4l-1.5-1.5m1.5 1.5l1.5-1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2v2m-8 6h2m12 0h2M6.5 4.5l1.5 1.5m8.5-1.5l-1.5 1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FrameOutlineIcon() {
  return (
    <svg className="size-[54px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <rect x="5.5" y="5.5" width="13" height="13" />
      <rect x="7.5" y="7.5" width="9" height="9" />
      <rect x="2.5" y="2.5" width="1.5" height="1.5" fill="currentColor" stroke="none" />
      <rect x="20" y="2.5" width="1.5" height="1.5" fill="currentColor" stroke="none" />
      <rect x="2.5" y="20" width="1.5" height="1.5" fill="currentColor" stroke="none" />
      <rect x="20" y="20" width="1.5" height="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BadgeIcon() {
  return (
    <svg className="size-[42px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <circle cx="12" cy="12" r="5.5" />
      <path d="M8.5 12.5L11 15l4.5-4.5" />
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

export function MobilePhoneIcon() {
  return (
    <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
    </svg>
  );
}

export function EnvelopeIcon() {
  return (
    <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 2.118l-7.5 4.262a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-2.118V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25" />
    </svg>
  );
}

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "globe": return <GlobeIcon />;
    case "lightbulb": return <LightbulbIcon />;
    case "frame": return <FrameOutlineIcon />;
    case "badge": return <BadgeIcon />;
    default: return null;
  }
};

// ==========================================
// REUSABLE UI COMPONENTS
// ==========================================

export function Button({ children, href = "/support", dark = false }: { children: React.ReactNode; href?: string; dark?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`group transition-all duration-300 active:scale-95 ${
        dark 
          ? "btn-primary hover:bg-primary hover:border-primary hover:text-white" 
          : "btn-secondary hover:bg-primary hover:text-white hover:border-primary"
      }`}
    >
      {children}
    </Link>
  );
}

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes="100vw" 
        className={`object-cover ${className}`} 
      />
    </span>
  );
}

/// ==========================================
// HEADER COMPONENT
// ==========================================
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 w-full flex flex-col items-center border-b border-border bg-white">
      <div className="w-full max-w-[1440px] flex flex-col">
        {/* Top Banner */}
        <div className="flex h-auto min-h-[36px] w-full items-center justify-center bg-forest-green px-[20px] py-[8px] text-center text-white sm:px-[40px]">
          <span className="caption text-white cursor-default">
            Now Trending!{" "}
            <span className="font-semibold underline decoration-solid underline-offset-2">
              Custom Gallery Walls &rarr;
            </span>
          </span>
        </div>

        {/* Navbar */}
        <nav className="relative flex h-[72px] w-full items-center justify-between bg-white px-[20px] sm:px-[40px] lg:px-[40px]">
          {/* Left Side: Hamburger Menu (Mobile Only) */}
          <div className="flex items-center lg:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-0"
            >
              {isMobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <svg
                  className="w-[30px] h-[22.5px]"
                  fill="none"
                  viewBox="0 0 30 22.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" d="M0 2h30M0 11.25h30M0 20.5h20" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links (Aligned Left) */}
          <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex h-[72px] items-center px-4 button-small transition-colors duration-300 hover:text-forest-green ${
                    isActive ? "text-forest-green" : "text-primary"
                  }`}
                >
                  {item.name}
                  {isActive ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-forest-green" /> : null}
                </Link>
              );
            })}
          </div>

          {/* Center: Logo (Centered on Desktop & Mobile) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link
              href="/"
              className="flex items-center justify-center w-auto h-auto whitespace-nowrap font-bold uppercase tracking-widest text-[16px] lg:heading-h8 lg:tracking-normal"
            >
              GALLERY 23
            </Link>
          </div>

          {/* Right Side: Icons & Right Desktop Links */}
          <div className="flex items-center justify-end gap-3 lg:flex-1 lg:gap-1">
            <div className="hidden items-center gap-1 lg:flex">
              {rightNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex h-[72px] items-center justify-center px-3 button-small transition-colors duration-300 hover:text-forest-green"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <span className="hidden h-6 w-px bg-border lg:block" />

            <div className="flex items-center gap-[12px] h-[20px] lg:h-auto lg:gap-1">
              <button aria-label="Search" className="flex items-center justify-center p-0 lg:grid lg:size-10 lg:place-items-center lg:rounded-full lg:border lg:border-border lg:bg-warm-cream">
                <Image src="/gallery23/nav-search.svg" alt="" width={20} height={20} className="size-[20px] lg:size-5" />
              </button>
              <button aria-label="Cart" className="flex items-center justify-center p-0 lg:grid lg:size-10 lg:place-items-center lg:rounded-full lg:border lg:border-border lg:bg-warm-cream">
                <Image src="/gallery23/nav-shopping-bag.svg" alt="" width={20} height={20} className="size-[20px] lg:size-5" />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="absolute left-0 top-[72px] z-50 w-full overflow-hidden border-t border-border bg-white shadow-xl lg:hidden"
              >
                <div className="flex flex-col gap-1 px-[20px] py-[32px] sm:px-[40px]">
                  {[...navItems, ...rightNav].map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-[18px] font-bold tracking-tight transition-colors duration-300 ${
                          isActive ? "text-forest-green" : "text-primary hover:text-forest-green"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </nav>
      </div>
    </header>
  );
}

// ==========================================
// FOOTER COMPONENTS
// ==========================================
export function FooterColumn({ title, items, className = "" }: { title: string; items: (string | { label: string, href: string })[], className?: string }) {
  return (
    <div className={`flex w-full flex-col items-start lg:w-auto ${className}`}>
      <h3 className="small font-bold capitalize text-white">{title}</h3>
      <ul className="mt-[16px] flex flex-col gap-[12px] caption text-muted sm:mt-[24px] sm:gap-[14px]">
        {items.map((item, index) => {
          const isObj = typeof item === "object" && item !== null;
          const label = isObj ? item.label : item;
          const href = isObj ? item.href : null;

          const isPhone = label.includes("(555)");
          const isEmail = label.includes("@");
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
              {href ? (
                <Link href={href} className={isHighlight ? "font-bold text-white hover:text-white" : "hover:text-white"}>
                  {label}
                </Link>
              ) : (
                <span className={isHighlight ? "font-bold text-white" : ""}>
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black flex justify-center text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <div className="flex w-full items-center justify-between border-b border-dark-surface px-[20px] py-[24px] sm:px-[40px] sm:py-[28px] lg:px-[80px] lg:py-[40px]">
          <Link href="/" className="flex h-[48px] items-center sm:h-[65px]">
            <Image
              src="/Homepage/Icons/Logo.svg"
              alt="Gallery 23 Logo"
              width={200}
              height={48}
              className="h-[40px] w-auto sm:h-[48px] object-contain"
            />
          </Link>
        </div>

        <div className="flex w-full flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:gap-[24px] lg:border-b lg:border-dark-surface lg:px-[80px] lg:py-[56px]">
          <div className="grid w-full grid-cols-3 gap-[16px] border-b border-dark-surface px-[20px] py-[32px] sm:gap-[32px] sm:px-[40px] lg:contents">
            <FooterColumn
              title="Services"
              items={[
                { label: "Picture Framing", href: "/services" },
                { label: "Canvas Prints", href: "/services" },
                { label: "Jersey Framing", href: "/services" },
                { label: "Shadow Boxes", href: "/services" },
                { label: "Certificates & Awards", href: "/services" },
                { label: "Photo Frames", href: "/services" }
              ]}
            />
            <FooterColumn
              title="Company"
              items={[
                { label: "About Us", href: "/about" },
                { label: "Print Shop", href: "/printshop" },
                { label: "Commercial", href: "/commercial" }
              ]}
            />
            <FooterColumn
              title="Resources"
              items={[
                { label: "FAQs", href: "/support" },
                { label: "Contact Us", href: "/support" }
              ]}
            />
          </div>

          <div className="flex w-full flex-col gap-[28px] border-b border-dark-surface px-[20px] py-[28px] sm:flex-row sm:gap-[40px] sm:px-[40px] lg:contents">
            <FooterColumn
              title="North side"
              items={["Gallery 23 Downtown", "Unit 4 Coolport Porters Road, Coolmine Blanchardstown D15DX3D", "(555) 123-4567", "hello@gallery23.com"]}
            />
            <FooterColumn
              title="South side"
              items={["Gallery 23 Uptown", "23 Sundrive Rd, Kimmage D12KF77", "(555) 987-6543", "uptown@gallery23.com"]}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[16px] px-[20px] py-[24px] sm:gap-[24px] sm:px-[40px] sm:py-[32px] lg:flex-row lg:items-start lg:justify-between lg:px-[80px] lg:pb-[40px] lg:pt-[32px]">
          <div className="flex w-full flex-col gap-[8px] caption text-muted lg:w-[380px]">
            <p>©2024 Gallery 23. All rights reserved.</p>
            <p>
              Professional custom framing and fine art printing services.
              Museum-quality preservation for your most valued memories.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-[12px] sm:w-auto">
            <div className="flex w-max items-center justify-start gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[12px] py-[8px] sm:gap-[10px] sm:px-[16px] sm:py-[10px]">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="size-[14px]" />
                ))}
              </div>
              <div className="flex flex-col small font-medium leading-[1.3]">
                <span className="text-white">Rated 4.9 from</span>
                <span className="text-muted">200+ customers</span>
              </div>
            </div>

            <a href="#" className="flex w-max items-center justify-center gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[12px] py-[8px] transition-all duration-300 hover:bg-primary hover:border-[#84A59D] active:scale-95 sm:gap-[10px] sm:px-[16px] sm:py-[10px]">
              <svg className="size-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
              </svg>
              <span className="small font-medium text-white">Google Reviews</span>
            </a>
          </div>
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

  // Duplicated arrays for ultra-wide seamless marquees
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];
  
  const baseInsta = [
    { title: "19th Century Portrait in Ornate Gold", handle: "@vintagelover_ny", img: images.instagramOne },
    { title: "Botanical Series in Natural Oak", handle: "@botanical_living", img: images.instagramTwo },
    { title: "Abstract Minimalism in Matte Black", handle: "@modern_nest", img: images.instagramThree },
    { title: "Championship Jersey Shadow Box", handle: "@sportscollector_88", img: images.instagramFour },
  ];
  const repeatedInsta = [...baseInsta, ...baseInsta, ...baseInsta, ...baseInsta, ...baseInsta, ...baseInsta, ...baseInsta, ...baseInsta];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % showcaseImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [showcaseImages.length]);

  return (
    <div className="min-h-screen bg-warm-cream text-primary overflow-x-hidden">
      <Header />

      <main className="w-full overflow-hidden">
        {/* --- HERO SECTION --- */}
        <section className="group w-full flex flex-col items-center cursor-default">
          <div className="relative h-[620px] w-full overflow-hidden lg:h-[760px]">
            <div className="absolute inset-0 overflow-hidden w-full h-full">
              <Image
                src={images.hero}
                alt="Gallery interior with framed artwork on display"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 from-[18.54%] to-transparent to-[68.99%]" />
            <div className="relative mx-auto flex h-full w-full max-w-[1280px] items-center px-5 py-20 sm:px-[42px] sm:py-8">
              <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-8 py-12 text-center text-white sm:py-20 lg:mx-0 lg:items-start lg:text-left">
                <h1 className="heading-display text-[30px] leading-[1.2] text-white sm:text-[56px] sm:leading-[1.1] lg:text-[64px]">
                  Dublin&apos;s Premier
                  <br />
                  Custom Framing &amp;
                  <br />
                  Archival Printing
                </h1>
                <p className="w-full max-w-[480px] body-text text-white/80 sm:max-w-[520px]">
                  Experience the art of preservation with our expert framing and museum-quality archival printing services,
                  crafted with care in the heart of Dublin.
                </p>
                <Link
                  href="/support"
                  className="btn-secondary group border-white transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary active:scale-95 text-primary"
                >
                  <span className="leading-[46px]">Book A Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* --- ANIMATED TICKER --- */}
          <div className="relative flex h-[58px] w-full items-center overflow-hidden bg-primary text-[13px] font-medium text-white">
            <motion.div
              className="flex w-max whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...Array(6)].map((_, index) => (
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
        <section className="section-alt w-full flex flex-col items-center py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] px-5 py-[40px] lg:flex-row lg:gap-[80px] lg:px-[64px]">
            <div className="flex w-full flex-col items-center gap-[12px] text-center lg:hidden">
              <h2 className="heading-h2 text-[26px] sm:text-[36px]">
                Our Services
              </h2>
              <p className="max-w-[320px] body-small text-secondary">
                Expert solutions tailored to showcase and preserve your most valued pieces.
              </p>
            </div>
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-[32px] lg:h-[780px] lg:w-[580px] lg:rounded-[48px]">
              <ResponsiveImage src={images.services} alt="Custom framing tools and artwork in a studio" />
            </div>
            <div className="flex w-full flex-col gap-[48px] lg:w-[492px]">
              <h2 className="hidden heading-h2 lg:block">
                Our Services
              </h2>
              <div className="flex flex-col divide-y divide-border border-y border-border">
                {services.map((service) => (
                  <article key={service.title} className="flex flex-col items-start justify-center gap-4 py-[32px]">
                    <h3 className="heading-h8">{service.title}</h3>
                    <p className="body-small text-secondary">{service.body}</p>
                    <div className="mt-2">
                      <Button href={service.href} dark>{service.cta}</Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="w-full bg-primary flex justify-center">
          <div className="flex w-full max-w-[1440px] flex-col items-center px-5 py-14 lg:h-[704px] lg:flex-row lg:gap-[64px] lg:px-[120px] lg:py-[72px]">
            <div className="flex w-full flex-col gap-[24px] lg:w-[560px]">
              <h2 className="heading-h2 text-[26px] text-white sm:text-[36px] lg:text-[56px]">
                About Gallery23
              </h2>
              <p className="body-large text-white/75">
                A space for art, framing, and conversation.
              </p>
              <p className="body-text text-white/75">
                Our professional framers love what they do and will happily advise you on your next custom framing project. With a wealth of knowledge and experience, our designers tailor each complimentary design session to your needs so they can create the ideal custom frame for you.
              </p>
              <div className="mt-2">
                <Link href="/about" className="group flex w-max items-center justify-center gap-[8px] btn-primary bg-forest-green border-forest-green transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white active:scale-95">
                  LEARN MORE <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="relative mt-10 h-[260px] w-full shrink-0 overflow-hidden rounded-3xl lg:mt-0 lg:h-[560px] lg:w-[640px] lg:rounded-[32px]">
              <ResponsiveImage src={images.about} alt="Gallery interior with framed artwork" className="rounded-3xl lg:rounded-[32px]" />
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE OUR FRAMES SECTION --- */}
        <section className="relative isolate w-full flex flex-col items-center gap-[56px] overflow-hidden px-5 py-[80px] lg:px-[80px]">
          <div className="absolute inset-0 z-0">
            <Image 
              src={images.why} 
              alt="Gallery styling interior" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center gap-[16px] text-center text-white">
            <h2 className="heading-h2 text-[26px] text-white sm:text-[36px] lg:text-[56px]">
              Why Choose Our Frames
            </h2>
            <p className="body-text text-white/90">
              From independent craftsmanship to personalized design services, we bring passion and expertise to every frame we create.
            </p>
          </div>
          <div className="relative z-10 flex w-full max-w-[1280px] flex-col gap-[24px] lg:flex-row lg:justify-between">
            {benefitsData.map((item) => (
              <article
                key={item.title}
                className="card flex-1 lg:max-w-[302px] flex flex-col p-[36px]"
              >
                <div className="flex h-[72px] w-full items-start justify-between">
                  <div className="flex size-[72px] items-center justify-center rounded-full bg-forest-green text-[#F4F0EB]">
                    {getIconComponent(item.iconType)}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-[12px] py-[24px]">
                  <h3 className="heading-h9">
                    {item.title}
                  </h3>
                  <p className="body-small text-secondary">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- CUSTOM PRINTING SECTION --- */}
        <section className="section-alt w-full flex flex-col items-center gap-[48px] px-5 py-[80px] lg:px-[80px]">
          <div className="flex w-full max-w-[802px] flex-col items-center gap-[12px] text-center">
            <h2 className="heading-h2 text-[26px] sm:text-[36px] lg:text-[56px]">
              Custom Printing Made for You
            </h2>
            <p className="body-text text-secondary">
              Print your own photos, artwork, or designs on premium fine art papers. Choose your paper, upload your file, and we&apos;ll handle the rest.
            </p>
          </div>
          <div className="flex w-full max-w-[1280px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.078)] lg:h-[432px] lg:flex-row">
            <div className="relative h-[300px] w-full shrink-0 overflow-hidden lg:h-full lg:w-[554px]">
              <Image src={images.print} alt="Professional fine art printing studio" fill className="object-cover" />
            </div>
            <div className="flex w-full flex-1 flex-col justify-between px-6 py-8 lg:pb-[36px] lg:pl-[90px] lg:pr-[36px] lg:pt-[32px]">
              <div className="flex flex-col items-start gap-[16px]">
                <span className="inline-flex h-[27px] items-center justify-center rounded-[100px] bg-forest-green px-[14px] py-[6px] micro font-bold text-white">
                  Custom Print
                </span>
                <h3 className="heading-h7">
                  Your Own Photo or Artwork
                </h3>
                <p className="body-text text-secondary">
                  Upload your personal photos, artwork, or digital files and we&apos;ll print them to museum quality on your choice of paper or canvas.
                </p>
                <ul className="flex flex-col gap-[8px] body-small text-secondary">
                  <li className="flex items-center gap-[10px]">
                    <span className="size-1.5 shrink-0 rounded-full bg-forest-green" />
                    Available in multiple sizes from 4x6 to 40x60
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <span className="size-1.5 shrink-0 rounded-full bg-forest-green" />
                    Perfect for photographs and digital art
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <span className="size-1.5 shrink-0 rounded-full bg-forest-green" />
                    Same-day options available in store
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-[36px]">
                <Link href="/printshop" className="group flex w-max items-center justify-center gap-[8px] btn-primary bg-forest-green border-forest-green transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white active:scale-95">
                  START YOUR CUSTOM PRINT <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

       {/* --- SHOWCASE / FEATURED FRAMING PROJECTS SECTION --- */}
        <section className="w-full flex flex-col items-center gap-[32px] bg-forest-green px-[20px] py-[64px] lg:gap-[56px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          <div className="flex w-full max-w-[1200px] items-start justify-start lg:items-center lg:justify-between">
            <h2 className="w-full max-w-none heading-h2 text-left text-white lg:whitespace-nowrap">
              Featured Framing Projects
            </h2>
          </div>

          <div className="flex w-full max-w-[1200px] flex-col items-center gap-[20px] lg:gap-[24px]">
            <div className="relative h-[284px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[300px] lg:h-[558px] lg:w-[1200px] lg:rounded-[46px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <ResponsiveImage src={showcaseImages[activeProject]} alt={`Featured framing project ${activeProject + 1}`} />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] shadow-[inset_0_4px_8px_rgba(0,0,0,0.40)] lg:rounded-[46px]" />
            </div>

            <div className="flex h-[20px] items-center justify-center gap-[8px]">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-1.5 rounded-full transition-colors duration-300 ${
                    index === activeProject ? "w-6 bg-white" : "size-1.5 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex w-full justify-center gap-[12px] overflow-x-auto pb-2 sm:gap-[32px] lg:overflow-visible">
              {showcaseImages.map((src, index) => {
                const isActive = index === activeProject;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`relative flex h-[70px] w-[100px] shrink-0 cursor-pointer items-center justify-center transition-all duration-300 sm:h-[200px] sm:w-[380px] ${
                      isActive
                        ? "rounded-[8px] border-[1.5px] border-white bg-transparent p-[3px] sm:rounded-[24px] sm:border-2 sm:bg-[#336a4c] sm:p-[8px]"
                        : "rounded-[8px] border-[1.5px] border-transparent bg-transparent opacity-60 sm:rounded-[24px] sm:border-2"
                    }`}
                  >
                    <div className={`relative h-full w-full overflow-hidden ${isActive ? "rounded-[5px] sm:rounded-[16px]" : "rounded-[8px] sm:rounded-[24px]"}`}>
                      <Image src={src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

   {/* --- TESTIMONIALS SECTION --- */}
        <section className="section-alt w-full flex flex-col items-center gap-[40px] overflow-hidden py-[64px] lg:gap-[48px] lg:py-[80px]">
          
          <div className="flex w-full justify-center px-5 lg:px-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col items-start gap-[24px]">
              <h2 className="w-full max-w-none heading-h2 text-[26px] sm:text-[36px] lg:text-[56px] lg:whitespace-nowrap">
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
                  <div className="flex items-center gap-[6px] text-[12px] font-bold text-primary sm:text-[14px]">
                    4.9
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="size-[14px]" />
                      ))}
                    </div>
                    <span className="font-normal text-[#777]">(264)</span>
                  </div>
                </div>

                <a href="#" className="group flex items-center justify-center gap-[8px] btn-primary bg-forest-green border-forest-green transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white active:scale-95">
                  Review us on Google <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden px-5 lg:px-0">
            <motion.div
              className="flex w-max gap-[16px] pb-[16px] sm:gap-[24px] lg:gap-[32px]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {repeatedTestimonials.map((item, index) => (
                <article
                  key={index}
                  className="card flex h-[400px] w-[260px] shrink-0 flex-col gap-[16px] p-[20px] sm:h-[440px] sm:w-[360px] sm:gap-[20px] sm:p-[32px]"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="relative size-[48px] shrink-0 overflow-hidden rounded-full">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="body-text font-bold">{item.name}</h3>
                      <p className="small">{item.date}</p>
                    </div>
                  </div>
                  <div className="inline-flex w-max items-center gap-1 rounded-[100px] bg-forest-green px-[12px] py-[6px] text-white">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="size-[12px]" />
                    ))}
                  </div>
                  <p className="body-small text-secondary">
                    {item.quote}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TRUSTED BY SECTION --- */}
        <section className="w-full flex flex-col items-center bg-white px-[24px] py-[40px] sm:px-[52px] sm:py-[80px]">
          <h2 className="heading-h2 w-full max-w-[1280px] text-[26px] text-center text-primary sm:text-[36px] lg:text-[56px]">
            Trusted By
          </h2>
          <div className="relative flex h-[80px] w-full items-center overflow-hidden sm:h-[100px] mt-[24px] sm:mt-[32px]">
            <motion.div
              className="flex w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-[40px] pr-[40px] sm:gap-[64px] sm:pr-[64px]">
                  {trustedBrands.map((brandImg, i) => (
                    <div
                      key={i}
                      className="flex h-[60px] sm:h-[80px] items-center justify-center shrink-0 opacity-70 grayscale"
                    >
                      <img
                        src={brandImg}
                        alt={`Trusted Brand ${i + 1}`}
                        className="!h-[54px] !max-h-[54px] !w-auto !max-w-none object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- WHAT WE'VE BEEN FRAMING SECTION --- */}
        <section className="section-alt w-full flex flex-col items-center overflow-hidden p-0">
          <div className="flex w-full flex-col items-center gap-[20px] px-5 py-[40px] sm:gap-[32px] sm:py-[56px]">
            <h2 className="w-full max-w-[697px] text-center heading-h2 text-[26px] sm:text-[36px] lg:text-[56px]">
              What We&apos;ve Been Framing
            </h2>
            <Link href="https://instagram.com" target="_blank" className="flex items-center gap-[8px] caption font-medium text-primary">
              <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow us <span className="text-forest-green">@gallery23framing</span>
            </Link>
          </div>

          <div className="relative flex h-[420px] w-full pl-[20px] sm:h-[581px] lg:pl-[40px]">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {repeatedInsta.map((item, index) => (
                <article key={index} className="flex w-[250px] shrink-0 flex-col items-start sm:w-[350px] pr-[12px] sm:pr-[32px]">
                  <div className="relative h-[290px] w-[190px] overflow-hidden rounded-[8px] sm:h-[400px] sm:w-[270px]">
                    <Image src={item.img} alt={item.title} fill sizes="100vw" className="object-cover" />
                  </div>
                  <div className="mt-[12px] flex w-[190px] flex-col gap-[4px] sm:mt-[16px] sm:w-[270px]">
                    <h3 className="truncate body-small font-semibold">
                      {item.title}
                    </h3>
                    <p className="caption">
                      {item.handle}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- FAQS SECTION --- */}
        <section className="section-alt w-full flex flex-col items-center px-[16px] py-[56px] sm:px-[24px] lg:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] rounded-[12px] p-0 sm:gap-[40px] sm:p-[32px]">
            <h2 className="text-center heading-h2 text-[26px] sm:text-[36px] lg:text-[56px]">
              FAQs
            </h2>

            <div className="flex w-full max-w-[752px] flex-col gap-[6px] pb-[6px]">
              {faqs.map((question, index) => (
                <details key={index} className="card w-full p-[20px] shadow-sm sm:p-[30px] cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none heading-h8 font-normal [&::-webkit-details-marker]:hidden">
                    <span>{question}</span>
                    <svg className="size-[20px] shrink-0 text-primary sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-4 body-text text-secondary">
                    Bring the piece, dimensions, or a photo of the room. Our team will walk you through materials, finish, glass, and timeline.
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-[8px] text-center">
              <Link href="/support" className="group flex items-center justify-center gap-[8px] btn-primary bg-forest-green border-forest-green transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white active:scale-95">
                VIEW ALL FAQS <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* --- CONSULTATION SECTION --- */}
        <section className="relative w-full flex items-center justify-center overflow-hidden px-[20px] py-[64px] sm:h-[578px] sm:px-[40px] sm:py-0 lg:px-[80px]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={images.consultation}
              alt="Gallery interior for consultation"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 flex w-full max-w-[1050px] flex-col items-center justify-center gap-[24px] rounded-[24px] bg-white px-[24px] py-[40px] text-center sm:gap-[32px] sm:rounded-[32px] sm:py-[64px] lg:h-[292.5px] lg:px-[80px]">
            <div className="flex flex-col gap-[12px] sm:gap-[16px]">
              <h2 className="heading-h2 text-[26px] text-primary sm:text-[36px] lg:text-[56px]">
                {consultationData.title}
              </h2>
              <p className="body-text text-secondary">
                {consultationData.subtitle}
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-[12px] sm:w-auto sm:flex-row sm:gap-[16px]">
              <a
                href={`tel:${consultationData.phone.replace(/[^0-9]/g, '')}`}
                className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition-all duration-300 hover:bg-primary hover:border-primary active:scale-95 sm:w-auto"
              >
                <MobilePhoneIcon />
                {consultationData.phone}
              </a>
              <a
                href={consultationData.emailLink}
                className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition-all duration-300 hover:bg-primary hover:border-primary active:scale-95 sm:w-auto"
              >
                <EnvelopeIcon />
                {consultationData.emailText}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
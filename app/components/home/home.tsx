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
    <svg className="size-[54px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2.5a2.5 2.5 0 0 1 2.3 1.1 2.5 2.5 0 0 0 2.4.9 2.5 2.5 0 0 1 1.8 2 2.5 2.5 0 0 0 1.6 2 2.5 2.5 0 0 1 .4 2.6 2.5 2.5 0 0 0-.4 2.6 2.5 2.5 0 0 1-1.6 2 2.5 2.5 0 0 0-1.8 2 2.5 2.5 0 0 1-2.4.9 2.5 2.5 0 0 0-2.3 1.1 2.5 2.5 0 0 1-2.6 0 2.5 2.5 0 0 0-2.3-1.1 2.5 2.5 0 0 1-2.4-.9 2.5 2.5 0 0 0-1.8-2 2.5 2.5 0 0 1-1.6-2 2.5 2.5 0 0 0-.4-2.6 2.5 2.5 0 0 1 .4-2.6 2.5 2.5 0 0 0 1.6-2 2.5 2.5 0 0 1 1.8-2 2.5 2.5 0 0 0 2.4-.9 2.5 2.5 0 0 1 2.3-1.1z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="5.5" />
      <path d="M9.5 12.5l1.5 1.5 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
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
      className={`group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
        dark 
          ? "btn-primary hover:bg-[#204834] hover:border-[#204834]" 
          : "btn-secondary hover:bg-warm-cream hover:text-forest-green hover:border-forest-green"
      }`}
    >
      {children}
    </Link>
  );
}

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`group/image relative block h-full w-full overflow-hidden ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes="100vw" 
        className={`object-cover transition-transform duration-700 ease-out group-hover/image:scale-105 ${className}`} 
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
    <header className="relative z-50 mx-auto flex w-full max-w-[1440px] flex-col items-start border-b border-border bg-white">
      {/* Top Banner */}
      <div className="flex h-auto min-h-[36px] w-full items-center justify-center bg-forest-green px-[20px] py-[8px] text-center text-white sm:px-[40px] transition-colors duration-300 hover:bg-[#204834]">
        <span className="caption text-white cursor-default">
          Now Trending!{" "}
          <span className="font-semibold underline decoration-solid underline-offset-2 transition-colors duration-300 hover:text-[#E8B84B] cursor-pointer">
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
            className="flex items-center justify-center p-0 transition-transform duration-300 active:scale-95 hover:text-forest-green"
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
            className="flex items-center justify-center w-auto h-auto whitespace-nowrap font-bold uppercase tracking-widest text-[16px] transition-transform duration-300 hover:scale-105 lg:heading-h8 lg:tracking-normal"
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
            <button aria-label="Search" className="flex items-center justify-center p-0 transition-all duration-300 hover:bg-[#84A59D]/10 hover:border-[#84A59D] active:scale-95 lg:grid lg:size-10 lg:place-items-center lg:rounded-full lg:border lg:border-border lg:bg-warm-cream">
              <Image src="/gallery23/nav-search.svg" alt="" width={20} height={20} className="size-[20px] lg:size-5" />
            </button>
            <button aria-label="Cart" className="flex items-center justify-center p-0 transition-all duration-300 hover:bg-[#84A59D]/10 hover:border-[#84A59D] active:scale-95 lg:grid lg:size-10 lg:place-items-center lg:rounded-full lg:border lg:border-border lg:bg-warm-cream">
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
            <li key={index} className="group flex max-w-[260px] items-start gap-[8px] sm:max-w-[200px]">
              {isPhone && (
                <svg className="mt-[2px] size-[14px] shrink-0 transition-colors duration-300 group-hover:text-[#84A59D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              )}
              {isEmail && (
                <svg className="mt-[2px] size-[14px] shrink-0 transition-colors duration-300 group-hover:text-[#84A59D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {href ? (
                <Link href={href} className={`transition-colors duration-300 cursor-pointer ${isHighlight ? "font-bold text-white hover:text-[#84A59D]" : "hover:text-[#84A59D]"}`}>
                  {label}
                </Link>
              ) : (
                <span className={`transition-colors duration-300 cursor-pointer ${isHighlight ? "font-bold text-white hover:text-[#84A59D]" : "hover:text-[#84A59D]"}`}>
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
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-black text-white">
      <div className="flex w-full items-center justify-between border-b border-dark-surface px-[20px] py-[24px] sm:px-[40px] sm:py-[28px] lg:px-[80px] lg:py-[40px]">
        <Link href="/" className="flex h-[48px] items-center transition-transform duration-300 hover:scale-105 sm:h-[65px]">
          <img
            src="/Homepage/Icons/Logo.svg"
            alt="Gallery 23 Logo"
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
          <div className="group flex w-max items-center justify-start gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[12px] py-[8px] transition-colors duration-300 hover:border-[#E8B84B] sm:gap-[10px] sm:px-[16px] sm:py-[10px] cursor-default">
            <div className="flex text-gold transition-transform duration-300 group-hover:scale-105">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="size-[14px]" />
              ))}
            </div>
            <div className="flex flex-col small font-medium leading-[1.3]">
              <span className="text-white">Rated 4.9 from</span>
              <span className="text-muted transition-colors duration-300 group-hover:text-white/80">200+ customers</span>
            </div>
          </div>

          <a href="#" className="flex w-max items-center justify-center gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[12px] py-[8px] transition-all duration-300 hover:bg-[#232323] hover:-translate-y-1 hover:shadow-lg hover:border-[#84A59D] active:scale-95 sm:gap-[10px] sm:px-[16px] sm:py-[10px]">
            <svg className="size-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
            </svg>
            <span className="small font-medium text-white transition-colors duration-300 hover:text-[#84A59D]">Google Reviews</span>
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
    <div className="min-h-screen bg-warm-cream text-primary">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="group mx-auto flex w-full max-w-[1440px] flex-col items-start">
          <div className="relative h-[620px] w-full overflow-hidden lg:h-[760px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={images.hero}
                alt="Gallery interior with framed artwork on display"
                width={2881}
                height={3840}
                priority
                sizes="100vw"
                className="absolute left-0 top-[-70%] h-[220%] w-full max-w-none object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 sm:top-[-82%] sm:h-[240%] lg:top-[-89.25%] lg:h-[249.94%]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 from-[18.54%] to-transparent to-[68.99%] transition-colors duration-[2s] group-hover:from-black/40" />
            <div className="relative mx-auto flex h-full max-w-[1280px] items-center px-5 py-20 sm:px-[42px] sm:py-8">
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
                  className="btn-secondary group/btn border-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:text-forest-green hover:shadow-lg active:scale-95 text-primary"
                >
                  <span className="leading-[46px]">Book A Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* --- ANIMATED TICKER --- */}
          <div className="relative flex h-[58px] w-full items-center overflow-hidden bg-primary text-[13px] font-medium text-white">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center gap-[7.8px] pl-[23.41px] pr-[7.81px]">
                  <span className="leading-[58px] transition-colors duration-300 hover:text-[#E8B84B] cursor-default">Get Free Consultation</span>
                  <span className="leading-[58px]">&nbsp;&nbsp;&nbsp;Explore Our Fine Art Collection&nbsp;&nbsp;&nbsp;&bull;</span>
                  <span className="leading-[58px] transition-colors duration-300 hover:text-[#E8B84B] cursor-default">Explore Services</span>
                  <span className="leading-[58px]">&nbsp;&nbsp;&nbsp;Explore Our Fine Art Collection&nbsp;&nbsp;&nbsp;&bull;</span>
                  <span className="leading-[58px] transition-colors duration-300 hover:text-[#E8B84B] cursor-default">Shop Prints Now&nbsp;&nbsp;&nbsp;&nbsp;&bull;</span>
                  <span className="leading-[58px]">&nbsp;&nbsp;&nbsp;Explore Our Fine Art Collection&nbsp;&nbsp;&nbsp;&bull;</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- OUR SERVICES SECTION --- */}
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] px-5 py-[40px] lg:flex-row lg:gap-[80px] lg:px-[64px]">
            <div className="flex w-full flex-col items-center gap-[12px] text-center lg:hidden">
              <h2 className="heading-h2 text-[26px] sm:text-[36px]">
                Our Services
              </h2>
              <p className="max-w-[320px] body-small text-secondary">
                Expert solutions tailored to showcase and preserve your most valued pieces.
              </p>
            </div>
            <div className="group/image relative h-[400px] w-full shrink-0 overflow-hidden rounded-[32px] lg:h-[780px] lg:w-[580px] lg:rounded-[48px]">
              <ResponsiveImage src={images.services} alt="Custom framing tools and artwork in a studio" />
            </div>
            <div className="flex w-full flex-col gap-[48px] lg:w-[492px]">
              <h2 className="hidden heading-h2 lg:block">
                Our Services
              </h2>
              <div className="flex flex-col divide-y divide-border border-y border-border">
                {services.map((service) => (
                  <article key={service.title} className="group flex flex-col items-start justify-center gap-4 py-[32px] transition-all duration-300 hover:bg-white hover:shadow-md hover:rounded-[16px] px-4 -mx-4 cursor-default">
                    <h3 className="heading-h8 transition-colors duration-300 group-hover:text-forest-green">{service.title}</h3>
                    <p className="body-small text-secondary">{service.body}</p>
                    <div className="mt-2">
                      {/* @ts-ignore */}
                      <Button href={(service as any).href} dark>{service.cta}</Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-primary px-5 py-14 lg:h-[704px] lg:flex-row lg:gap-[64px] lg:px-[120px] lg:py-[72px]">
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
              <Link href="/about" className="group flex w-max items-center justify-center gap-[8px] btn-primary transition-all duration-300 hover:-translate-y-1 hover:bg-[#204834] hover:shadow-lg active:scale-95">
                LEARN MORE <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="group/image relative mt-10 h-[260px] w-full shrink-0 overflow-hidden rounded-3xl lg:mt-0 lg:h-[560px] lg:w-[640px] lg:rounded-[32px]">
            <ResponsiveImage src={images.about} alt="Gallery interior with framed artwork" className="rounded-3xl lg:rounded-[32px]" />
          </div>
        </section>

        {/* --- WHY CHOOSE OUR FRAMES SECTION --- */}
        <section className="relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px] px-5 py-[80px] lg:px-[80px]">
          <ResponsiveImage src={images.why} alt="Gallery styling interior" className="absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-primary/75" />
          <div className="flex w-full max-w-[700px] flex-col items-center gap-[16px] text-center text-white">
            <h2 className="heading-h2 text-[26px] text-white sm:text-[36px] lg:text-[56px]">
              Why Choose Our Frames
            </h2>
            <p className="body-text text-white/90">
              From independent craftsmanship to personalized design services, we bring passion and expertise to every frame we create.
            </p>
          </div>
          <div className="flex w-full max-w-[1280px] flex-col gap-[24px] lg:flex-row lg:justify-between">
            {benefitsData.map((item) => (
              <article
                key={item.title}
                className="group card flex-1 lg:max-w-[302px] flex flex-col p-[36px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#84A59D]"
              >
                <div className="flex h-[72px] w-full items-start justify-between">
                  <div className="flex size-[72px] items-center justify-center rounded-full bg-forest-green text-[#F4F0EB] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#204834] group-hover:shadow-md">
                    {getIconComponent(item.iconType)}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-[12px] py-[24px]">
                  <h3 className="heading-h9 transition-colors duration-300 group-hover:text-forest-green">
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
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[48px] px-5 py-[80px] lg:px-[80px]">
          <div className="flex w-full max-w-[802px] flex-col items-center gap-[12px] text-center">
            <h2 className="heading-h2 text-[26px] sm:text-[36px] lg:text-[56px]">
              Custom Printing Made for You
            </h2>
            <p className="body-text text-secondary">
              Print your own photos, artwork, or designs on premium fine art papers. Choose your paper, upload your file, and we&apos;ll handle the rest.
            </p>
          </div>
          <div className="group flex w-full max-w-[1280px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.078)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] lg:h-[432px] lg:flex-row">
            <div className="relative h-[300px] w-full shrink-0 overflow-hidden lg:h-full lg:w-[554px]">
              <Image src={images.print} alt="Professional fine art printing studio" fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
            </div>
            <div className="flex w-full flex-1 flex-col justify-between px-6 py-8 lg:pb-[36px] lg:pl-[90px] lg:pr-[36px] lg:pt-[32px]">
              <div className="flex flex-col items-start gap-[16px]">
                <span className="inline-flex h-[27px] items-center justify-center rounded-[100px] bg-forest-green px-[14px] py-[6px] micro font-bold text-white transition-colors duration-300 group-hover:bg-[#204834]">
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
                <Link href="/printshop" className="group/btn flex w-max items-center justify-center gap-[8px] btn-primary bg-primary border-primary transition-all duration-300 hover:-translate-y-1 hover:bg-[#204834] hover:border-[#204834] hover:shadow-lg active:scale-95">
                  START YOUR CUSTOM PRINT <ArrowIcon className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

       {/* --- SHOWCASE / FEATURED FRAMING PROJECTS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[32px] bg-forest-green px-[20px] py-[64px] lg:gap-[56px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeProject ? "w-6 bg-white" : "size-1.5 bg-white/50 hover:bg-white/80 hover:scale-110"
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
                        : "rounded-[8px] border-[1.5px] border-transparent bg-transparent opacity-60 hover:opacity-100 hover:scale-105 hover:shadow-lg sm:rounded-[24px] sm:border-2"
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
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] overflow-hidden py-[64px] lg:gap-[48px] lg:py-[80px]">
          
          <div className="flex w-full justify-center px-5 lg:px-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col items-start gap-[24px]">
              <h2 className="w-full max-w-none heading-h2 text-[26px] sm:text-[36px] lg:text-[56px] lg:whitespace-nowrap">
                What Our Costumer Say
              </h2>

              <div className="group flex h-auto w-full max-w-[1200px] flex-col items-stretch gap-3 rounded-[20px] bg-white p-[20px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-[82px] sm:flex-row sm:items-center sm:justify-between sm:rounded-[27px] sm:py-0 sm:pl-[32px] sm:pr-[24px]">
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

                <a href="#" className="group/btn flex items-center justify-center gap-[8px] btn-primary transition-all duration-300 hover:bg-[#204834] hover:shadow-md active:scale-95">
                  Review us on Google <ArrowIcon className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[1440px] overflow-hidden px-5 lg:px-0">
            <motion.div
              className="flex w-max gap-[16px] pb-[16px] sm:gap-[24px] lg:gap-[32px]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <article
                  key={index}
                  className="card group flex h-[400px] w-[260px] shrink-0 flex-col gap-[16px] p-[20px] transition-all duration-300 hover:-translate-y-2 hover:border-[#84A59D] hover:shadow-xl cursor-pointer sm:h-[440px] sm:w-[360px] sm:gap-[20px] sm:p-[32px]"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="relative size-[48px] shrink-0 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="body-text font-bold transition-colors duration-300 group-hover:text-forest-green">{item.name}</h3>
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
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white px-[24px] py-[40px] sm:px-[52px] sm:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[24px] sm:gap-[32px]">
            <h2 className="heading-h2 text-[26px] text-center text-primary sm:text-[36px] lg:text-[56px]">
              Trusted By
            </h2>

            <div className="relative flex h-[80px] w-full items-center overflow-hidden sm:h-[100px]">
              <motion.div
                className="flex w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              >
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-[40px] pr-[40px] sm:gap-[64px] sm:pr-[64px]">
                    {trustedBrands.map((brandImg, i) => (
                      <div
                        key={i}
                        className="flex h-[60px] sm:h-[80px] items-center justify-center shrink-0 opacity-70 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 cursor-pointer"
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
          </div>
        </section>

        {/* --- WHAT WE'VE BEEN FRAMING SECTION --- */}
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center overflow-hidden p-0">
          <div className="flex w-full flex-col items-center gap-[20px] px-5 py-[40px] sm:gap-[32px] sm:py-[56px]">
            <h2 className="w-full max-w-[697px] text-center heading-h2 text-[26px] sm:text-[36px] lg:text-[56px]">
              What We&apos;ve Been Framing
            </h2>
            <Link href="https://instagram.com" target="_blank" className="group flex items-center gap-[8px] caption font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-forest-green">
              <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow us <span className="text-forest-green transition-colors duration-300 group-hover:text-[#84A59D]">@gallery23framing</span>
            </Link>
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
                <article key={index} className="group flex w-[250px] shrink-0 flex-col items-start cursor-pointer sm:w-[350px]">
                  <div className="relative h-[290px] w-[190px] overflow-hidden rounded-[8px] sm:h-[400px] sm:w-[270px]">
                    <Image src={item.img} alt={item.title} fill sizes="100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="mt-[12px] flex w-[190px] flex-col gap-[4px] sm:mt-[16px] sm:w-[270px]">
                    <h3 className="truncate body-small font-semibold transition-colors duration-300 group-hover:text-forest-green">
                      {item.title}
                    </h3>
                    <p className="caption transition-colors duration-300 group-hover:text-[#84A59D]">
                      {item.handle}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- FAQS SECTION --- */}
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center px-[16px] py-[56px] sm:px-[24px] lg:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] rounded-[12px] p-0 sm:gap-[40px] sm:p-[32px]">
            <h2 className="text-center heading-h2 text-[26px] sm:text-[36px] lg:text-[56px]">
              FAQs
            </h2>

            <div className="flex w-full max-w-[752px] flex-col gap-[6px] pb-[6px]">
              {faqs.map((question, index) => (
                <details key={index} className="card group/faq w-full p-[20px] shadow-sm transition-all duration-300 hover:border-[#84A59D] hover:shadow-md cursor-pointer sm:p-[30px]">
                  <summary className="flex items-center justify-between gap-4 list-none heading-h8 font-normal [&::-webkit-details-marker]:hidden">
                    <span className="transition-colors duration-300 group-hover/faq:text-forest-green">{question}</span>
                    <svg className="size-[20px] shrink-0 text-primary transition-all duration-300 group-open/faq:rotate-45 group-hover/faq:text-forest-green sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-4 body-text text-secondary opacity-0 transition-opacity duration-300 group-open/faq:opacity-100">
                    Bring the piece, dimensions, or a photo of the room. Our team will walk you through materials, finish, glass, and timeline.
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-[8px] text-center">
              <Link href="/support" className="group flex items-center justify-center gap-[8px] btn-primary transition-all duration-300 hover:-translate-y-1 hover:bg-[#204834] hover:shadow-lg active:scale-95">
                VIEW ALL FAQS <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* --- CONSULTATION SECTION --- */}
        <section className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center overflow-hidden px-[20px] py-[64px] sm:h-[578px] sm:px-[40px] sm:py-0 lg:px-[80px]">

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

          <div className="relative z-20 flex w-full max-w-[1050px] flex-col items-center justify-center gap-[24px] rounded-[24px] bg-white px-[24px] py-[40px] text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] sm:gap-[32px] sm:rounded-[32px] sm:py-[64px] lg:h-[292.5px] lg:px-[80px]">
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
                className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#204834] hover:shadow-md active:scale-95 sm:w-auto"
              >
                <MobilePhoneIcon />
                {consultationData.phone}
              </a>
              <a
                href={consultationData.emailLink}
                className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#204834] hover:shadow-md active:scale-95 sm:w-auto"
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
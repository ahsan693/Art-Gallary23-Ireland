"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  consultationData // <-- Added consultationData import here!
} from "@/app/lib/data/homedata";

// ==========================================
// SVG ICONS & MAPPINGS
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

// Added Close Icon for the mobile menu toggle
export function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg className="size-[48px] text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
    </svg>
  );
}

export function LightbulbIcon() {
  return (
    <svg className="size-[48px] text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.6 20.4h4.8m-2.4 3v-3m-6-8.4a6 6 0 1 1 12 0c0 2.4-1.8 4.2-3 5.4H9c-1.2-1.2-3-3-3-5.4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v1.2m-3.6.6.6.6m5.4 0-.6.6" />
    </svg>
  );
}

export function FrameOutlineIcon() {
  return (
    <svg className="size-[48px] text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.2 7.2h9.6v9.6H7.2V7.2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l4.2 4.2M21 3l-4.2 4.2M3 21l4.2-4.2M21 21l-4.2-4.2" />
    </svg>
  );
}

export function BadgeIcon() {
  return (
    <svg className="size-[48px] text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
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

// <-- Added MobilePhoneIcon for the Consultation Section -->
export function MobilePhoneIcon() {
  return (
    <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
    </svg>
  );
}

// <-- Added EnvelopeIcon for the Consultation Section -->
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

export function Button({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <Link href="#consultation" className={dark ? "btn-primary" : "btn-secondary"}>
      {children}
    </Link>
  );
}

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

// ==========================================
// HEADER COMPONENT
// ==========================================
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto flex w-full max-w-[1440px] flex-col items-start border-b border-border bg-white">
      <div className="flex h-[36px] w-full items-center justify-center bg-forest-green px-4 py-2 text-center text-white">
        <span className="caption text-white">
          Now Trending!{" "}
          <span className="font-semibold underline decoration-solid underline-offset-2">
            Custom Gallery Walls &rarr;
          </span>
        </span>
      </div>

      <nav className="relative flex h-[72px] w-full items-center bg-white px-4 lg:px-[40px]">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid size-10 place-items-center rounded-full border border-border bg-warm-cream"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Link href="/" className="heading-h9">Gallery 23</Link>
        </div>

        <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex h-[72px] items-center px-4 button-small ${item.name === "Home" ? "text-forest-green" : "text-primary"
                }`}
            >
              {item.name}
              {item.name === "Home" ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-forest-green" /> : null}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="absolute left-1/2 top-0 hidden h-[72px] w-[320px] -translate-x-1/2 items-center justify-center text-center heading-h8 lg:flex"
        >
          Gallery 23
        </Link>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-3 lg:flex-1 lg:gap-1">
          <div className="hidden items-center gap-1 lg:flex">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex h-[72px] items-center justify-center px-3 button-small"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <span className="hidden h-6 w-px bg-border lg:block" />
          <button aria-label="Search" className="grid size-10 place-items-center rounded-full border border-border bg-warm-cream">
            <Image src="/gallery23/nav-search.svg" alt="" width={20} height={20} className="size-5" />
          </button>
          <button aria-label="Cart" className="grid size-10 place-items-center rounded-full border border-border bg-warm-cream">
            <Image src="/gallery23/nav-shopping-bag.svg" alt="" width={20} height={20} className="size-5" />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute left-0 top-[72px] z-50 w-full overflow-hidden border-t border-border bg-white shadow-lg lg:hidden"
            >
              <div className="flex flex-col gap-6 px-5 py-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[18px] font-bold ${item.name === "Home" ? "text-forest-green" : "text-primary"
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="h-px w-full bg-border" />
                <div className="flex flex-col gap-4">
                  {rightNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[16px] font-medium text-secondary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
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
export function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex w-full flex-col items-start lg:w-auto">
      <h3 className="small font-bold capitalize text-white">{title}</h3>
      <ul className="mt-[16px] flex flex-col gap-[12px] caption text-muted sm:mt-[24px] sm:gap-[14px]">
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
      <div className="flex w-full items-center justify-between border-b border-dark-surface px-5 py-[28px] sm:px-[40px] lg:px-[80px] lg:py-[40px]">
        <Link href="/" className="flex h-[48px] items-center sm:h-[65px]">
          <img
            src="/Homepage/Icons/Logo.svg"
            alt="Gallery 23 Logo"
            className="h-[40px] w-auto sm:h-[48px] object-contain"
          />
        </Link>
      </div>

      <div className="flex w-full flex-col items-start gap-[32px] border-b border-dark-surface px-5 py-[40px] sm:grid sm:grid-cols-2 sm:gap-x-[32px] sm:gap-y-[40px] sm:px-[40px] lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-[24px] lg:px-[80px] lg:py-[56px]">
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

      <div className="flex w-full flex-col items-start gap-[24px] px-5 pb-[32px] pt-[24px] sm:px-[40px] lg:flex-row lg:items-start lg:justify-between lg:px-[80px] lg:pb-[40px] lg:pt-[32px]">
        <div className="flex w-full flex-col gap-[8px] caption text-muted lg:w-[380px]">
          <p>©2024 Gallery 23. All rights reserved.</p>
          <p>
            Professional custom framing and fine art printing services.
            Museum-quality preservation for your most valued memories.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[12px] sm:w-auto sm:flex-row sm:items-center">
          <div className="flex items-center justify-center gap-[10px] rounded-[100px] border border-dark-surface bg-primary px-[16px] py-[10px] sm:justify-start">
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

          <a href="#" className="flex items-center justify-center gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[16px] py-[10px] transition hover:bg-dark-surface">
            <svg className="size-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" />
            </svg>
            <span className="small font-medium text-white">Google Reviews</span>
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
                <h1 className="heading-display text-white sm:text-[56px] lg:text-[64px]">
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
                  href="#consultation"
                  className="btn-secondary text-primary border-white"
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
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] px-5 py-[40px] lg:flex-row lg:gap-[80px] lg:px-[64px]">
            <div className="flex w-full flex-col items-center gap-[12px] text-center lg:hidden">
              <h2 className="heading-h2">
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
                      <Button dark>{service.cta}</Button>
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
            <h2 className="heading-h2 text-white">
              About Gallery23
            </h2>
            <p className="body-large text-white/75">
              A space for art, framing, and conversation.
            </p>
            <p className="body-text text-white/75">
              Our professional framers love what they do and will happily advise you on your next custom framing project. With a wealth of knowledge and experience, our designers tailor each complimentary design session to your needs so they can create the ideal custom frame for you.
            </p>
            <div className="mt-2">
              <Link href="/about" className="btn-primary">
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
          <ResponsiveImage src={images.why} alt="Gallery styling interior" className="absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-primary/75" />
          <div className="flex w-full max-w-[700px] flex-col items-center gap-[16px] text-center text-white">
            <h2 className="heading-h2 text-white">
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
                className="card flex-1 lg:max-w-[302px] flex flex-col p-[36px]"
              >
                <div className="flex h-[64px] w-full items-start justify-between">
                  <div className="flex size-[64px] items-center justify-center rounded-full bg-warm-cream">
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
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[48px] px-5 py-[80px] lg:px-[80px]">
          <div className="flex w-full max-w-[802px] flex-col items-center gap-[12px] text-center">
            <h2 className="heading-h2">
              Custom Printing Made for You
            </h2>
            <p className="body-text text-secondary">
              Print your own photos, artwork, or designs on premium fine art papers. Choose your paper, upload your file, and we&apos;ll handle the rest.
            </p>
          </div>
          <div className="flex w-full max-w-[1280px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.078)] lg:h-[432px] lg:flex-row">
            <div className="relative h-[300px] w-full shrink-0 lg:h-full lg:w-[554px]">
              <ResponsiveImage src={images.print} alt="Professional fine art printing studio" />
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
                <Link href="/services" className="btn-primary bg-primary border-primary">
                  START YOUR CUSTOM PRINT <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- SHOWCASE / FEATURED FRAMING PROJECTS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px] bg-forest-green px-5 pb-[80px] pt-[64px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          <div className="flex w-full max-w-[1200px] items-center justify-between">
            <h2 className="w-full max-w-none heading-h2 text-white lg:whitespace-nowrap">
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeProject ? "w-6 bg-white" : "size-1.5 bg-white/50 hover:bg-white/80"
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
                    className={`relative flex h-[140px] w-[220px] shrink-0 cursor-pointer items-center justify-center transition-all duration-300 sm:h-[200px] sm:w-[380px] ${isActive
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
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] overflow-hidden px-5 py-[64px] lg:gap-[48px] lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-[24px]">
            <h2 className="w-full max-w-none heading-h2 lg:whitespace-nowrap">
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

              <a href="#" className="btn-primary">
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
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white px-[24px] py-[40px] sm:px-[52px] sm:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[24px] sm:gap-[32px]">
            {/* Section Title */}
            <h2 className="heading-h2 text-center text-primary">
              Trusted By
            </h2>

            {/* Continuous Ticker Row */}
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
                        className="flex h-[60px] sm:h-[80px] items-center justify-center shrink-0"
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
            <h2 className="w-full max-w-[697px] text-center heading-h2">
              What We&apos;ve Been Framing
            </h2>
            <div className="flex items-center gap-[8px] caption font-medium text-primary">
              <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow us <span className="text-forest-green">@gallery23framing</span>
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
        <section className="section-alt mx-auto flex w-full max-w-[1440px] flex-col items-center px-[16px] py-[56px] sm:px-[24px] lg:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-[32px] rounded-[12px] p-0 sm:gap-[40px] sm:p-[32px]">
            <h2 className="text-center heading-h2">
              FAQs
            </h2>

            <div className="flex w-full max-w-[752px] flex-col gap-[6px] pb-[6px]">
              {faqs.map((question, index) => (
                <details key={index} className="card group w-full p-[20px] shadow-sm sm:p-[30px] cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none heading-h8 font-normal [&::-webkit-details-marker]:hidden">
                    {question}
                    <svg className="size-[20px] shrink-0 text-primary transition-transform duration-300 group-open:rotate-45 sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <Link href="/contactus" className="btn-primary">
                VIEW ALL FAQS <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* --- CONSULTATION SECTION --- */}
        <section className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center overflow-hidden px-[20px] py-[64px] sm:h-[578px] sm:px-[40px] sm:py-0 lg:px-[80px]">

          {/* 1. Background Image (Changed to z-0) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={images.consultation}
              alt="Gallery interior for consultation"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* 2. Subtle overlay (Changed to z-10) */}
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* 3. Centered White Card (Changed to relative z-20) */}
          <div className="relative z-20 flex w-full max-w-[1050px] flex-col items-center justify-center gap-[24px] rounded-[24px] bg-white px-[24px] py-[40px] text-center sm:gap-[32px] sm:rounded-[32px] sm:py-[64px] lg:h-[292.5px] lg:px-[80px]">
            <div className="flex flex-col gap-[12px] sm:gap-[16px]">
              <h2 className="heading-h2 text-primary">
                {consultationData.title}
              </h2>
              <p className="body-text text-secondary">
                {consultationData.subtitle}
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-[12px] sm:w-auto sm:flex-row sm:gap-[16px]">
              <a
                href={`tel:${consultationData.phone.replace(/[^0-9]/g, '')}`}
                className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition hover:bg-dark-surface sm:w-auto"
              >
                <MobilePhoneIcon />
                {consultationData.phone}
              </a>
              <a
                href={consultationData.emailLink}
                className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition hover:bg-dark-surface sm:w-auto"
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
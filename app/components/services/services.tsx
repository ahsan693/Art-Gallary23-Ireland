"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Import Header, Footer, and Shared Icons
import { Header, Footer, ArrowIcon } from "@/app/components/home/home";

// 2. Import Data Layer
import { getServicesData } from "@/app/lib/data/servicesdata";

// Reusable Next.js Image Component
export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

// ==========================================
// MAIN SERVICES COMPONENT
// ==========================================

export default function ServicesComponent() {
  const [data, setData] = useState<any>(null);

  // Fetch data from the Data Layer when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getServicesData();
      setData(pageData);
    };
    fetchData();
  }, []);

  // Smooth scroll handler for the Inquire Now buttons
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents default URL hash jump
    const formSection = document.getElementById("inquiry-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scrolls to the form
    }
  };

  // Render a loading state while fetching data
  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  return (
    <div className="min-h-screen bg-warm-cream text-primary">
      {/* --- REUSABLE HEADER --- */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* --- MOBILE HEADER FALLBACK (If needed) --- */}
      <div className="md:hidden">
        <Header />
      </div>

      <main className="flex flex-col items-center">

        {/* --- HERO SECTION --- */}
        <section className="relative flex h-[500px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[64px] sm:h-[600px] lg:px-[80px] lg:py-[120px]">

          <div className="absolute inset-0 z-0">
            <Image
              src={data.hero.image}
              alt="Gallery interior"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 z-10 bg-black/40" />

          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[24px] text-center text-white">
            <div className="inline-flex items-center justify-center rounded-full border border-white/40 px-[16px] py-[6px] backdrop-blur-sm">
              <span className="text-[13px] font-semibold tracking-wide text-white uppercase">
                {data.hero.badge}
              </span>
            </div>

            <h1 className="heading-display text-white sm:text-[56px] lg:text-[64px]">
              {data.hero.title}
            </h1>

            <p className="max-w-[700px] body-large text-white/90">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* --- DETAILED SERVICES LIST SECTION --- */}
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">

          {data.offerings.map((service: any, index: number) => {
            // Even numbers (0, 2, 4...) will be Picture Framing, Canvas Prints, etc.
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                // 👇 Alternating Background Colors! 👇
                className={`flex w-full justify-center px-[24px] py-[64px] sm:py-[80px] lg:px-[80px] lg:py-[120px] ${isEven ? "bg-white" : "bg-warm-cream"
                  }`}
              >
                <div
                  className={`flex w-full max-w-[1280px] flex-col items-center justify-between gap-[40px] lg:gap-[80px] ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                >
                  {/* Image Side */}
                  <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-[24px] shadow-sm sm:h-[500px] lg:h-[570px] lg:w-[600px] xl:w-[680px]">
                    <ResponsiveImage src={service.image} alt={service.title} />
                  </div>

                  {/* Text Side (Removed bullets & divider) */}
                  <div className="flex w-full flex-col items-start justify-center gap-[24px] lg:w-[540px]">
                    <h2 className="heading-h3 text-primary">
                      {service.title}
                    </h2>

                    <p className="body-text text-secondary">
                      {service.description}
                    </p>

                    <div className="mt-[8px]">
                      <a
                        href="#inquiry-form"
                        onClick={handleScrollToForm}
                        className="btn-primary"
                      >
                        {service.ctaText} <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* --- THE FRAMING JOURNEY SECTION --- */}
        <section className="w-full bg-[#131313] px-[24px] py-[80px] lg:py-[100px]">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[48px] lg:gap-[64px]">
            <h2 className="text-center text-[32px] font-bold tracking-tight text-white sm:text-[40px]">
              {data.journey.title}
            </h2>

            <div className="grid w-full grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[32px]">
              {data.journey.steps.map((step: any, index: number) => (
                <div key={index} className="flex flex-col items-center text-center gap-[16px]">
                  <div className="flex size-[40px] items-center justify-center rounded-full bg-forest-green text-[16px] font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="text-[18px] font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-[280px] text-[14px] leading-[1.6] text-white/70">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INQUIRE NOW FORM SECTION --- */}
        <section id="inquiry-form" className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[24px] py-[80px] lg:py-[120px]">
          <div className="flex w-full max-w-[900px] flex-col items-center rounded-[32px] bg-white p-[32px] shadow-sm sm:p-[48px] lg:px-[64px] lg:py-[64px]">

            <div className="mb-[40px] flex flex-col items-center text-center gap-[12px]">
              <h2 className="heading-h2 text-primary">{data.form.title}</h2>
              <p className="body-text text-secondary">{data.form.subtitle}</p>
            </div>

            <form className="flex w-full flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2">
                {/* Full Name */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-primary">Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="h-[50px] w-full rounded-[8px] border border-border bg-[#F9F9F9] px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green focus:bg-white" />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-primary">Email Address</label>
                  <input type="email" placeholder="Enter your email address" className="h-[50px] w-full rounded-[8px] border border-border bg-[#F9F9F9] px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green focus:bg-white" />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-primary">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="h-[50px] w-full rounded-[8px] border border-border bg-[#F9F9F9] px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green focus:bg-white" />
                </div>

                {/* Service of Interest (Select) */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-primary">Service of Interest</label>
                  <div className="relative">
                    <select className="h-[50px] w-full appearance-none rounded-[8px] border border-border bg-[#F9F9F9] px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green focus:bg-white">
                      {data.form.fields.services.map((opt: string, i: number) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-[16px] flex items-center text-primary">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-bold text-primary">Message</label>
                <textarea placeholder="Tell us about your project..." className="h-[120px] w-full resize-y rounded-[8px] border border-border bg-[#F9F9F9] p-[16px] text-[15px] outline-none transition-colors focus:border-forest-green focus:bg-white" />
              </div>

              {/* Submit & Footer Text */}
              <div className="mt-[8px] flex flex-col gap-[16px]">
                <button type="submit" className="flex h-[56px] w-full items-center justify-center rounded-[8px] bg-forest-green px-[32px] text-[16px] font-bold text-white transition hover:bg-[#1f4733]">
                  {data.form.submitText}
                </button>
                <p className="text-center text-[12px] text-secondary">
                  All enquiries sent to info@g23.ie. Our commercial team responds within 24 hours.
                </p>
              </div>
            </form>

          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="relative mx-auto flex min-h-[480px] w-full max-w-[1440px] items-center justify-center overflow-hidden px-[24px] py-[80px]">

          <div className="absolute inset-0 z-0">
            <Image
              src={data.cta.image}
              alt="Living room with art"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 z-10 bg-black/40" />

          <div className="relative z-20 flex w-full max-w-[800px] flex-col items-center text-center gap-[24px]">
            <h2 className="heading-h2 text-white">
              {data.cta.title}
            </h2>
            <p className="body-large text-white/90 max-w-[600px]">
              {data.cta.subtitle}
            </p>
            <div className="mt-[16px]">
              <Link href={data.cta.buttonLink} className="btn-secondary">
                {data.cta.buttonText} <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 1. Import Shared Icons
import { ArrowIcon } from "@/app/components/home/home";

// 2. Import Data Layer
import { getServicesData } from "@/app/lib/data/servicesdata";

type ServicesData = Awaited<ReturnType<typeof getServicesData>>;

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
  const [data, setData] = useState<ServicesData | null>(null);

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
    <div className="min-h-screen bg-warm-cream text-primary overflow-x-hidden">
      {/* --- REUSABLE HEADER --- */}
      <main className="flex flex-col items-center w-full">

        {/* --- HERO SECTION --- */}
        <section className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden sm:h-[600px]">
          <div className="absolute inset-0 z-0">
            <Image
              src={data.hero.image}
              alt={data.hero.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Inner Content Wrapper */}
          <div className="relative z-20 flex w-full max-w-[1440px] px-[24px] py-[64px] lg:px-[80px] lg:py-[120px] flex-col items-center gap-[24px] text-center text-white mx-auto">
            <div className="flex w-full max-w-[900px] flex-col items-center gap-[24px]">
              <div className="inline-flex items-center justify-center rounded-full border border-white/40 px-[16px] py-[6px] backdrop-blur-sm">
                <span className="button-small font-semibold tracking-wide text-white uppercase">
                  {data.hero.badge}
                </span>
              </div>

              {/* Mobile: 30px, Tablet: 56px, Desktop: 64px (unchanged) */}
              <h1 className="heading-display text-white">
                {data.hero.title}
              </h1>

              <p className="max-w-[700px] body-large text-white/90">
                {data.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES LIST SECTION --- */}
        <div className="flex w-full flex-col items-center">

          {data.offerings.map((service, index) => {
            // Even numbers (0, 2, 4...) will be Picture Framing, Canvas Prints, etc.
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                // 👇 Background stretches full width 👇
                className={`flex w-full justify-center ${isEven ? "bg-white" : "bg-warm-cream"}`}
              >
                {/* 👇 Content restricted to max-w 👇 */}
                <div
                  className={`flex w-full max-w-[1440px] px-[24px] py-[64px] sm:py-[80px] lg:px-[80px] lg:py-[120px] flex-col items-center justify-between gap-[40px] lg:gap-[80px] ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image Side */}
                  <div className="relative h-[400px] w-full max-w-[680px] shrink-0 overflow-hidden rounded-[24px] shadow-sm sm:h-[500px] lg:h-[570px] lg:w-[600px] xl:w-[680px]">
                    <ResponsiveImage src={service.image} alt={service.imageAlt} />
                  </div>

                  {/* Text Side (Removed bullets & divider) */}
                  <div className="flex w-full flex-col items-start justify-center gap-[24px] lg:w-[540px]">
                    {/* Mobile: 28px, Tablet: 36px, Desktop: 48px (unchanged) */}
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
                        className="group flex w-max items-center justify-center gap-[8px] btn-primary bg-forest-green border-forest-green transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg active:scale-95 active:bg-primary active:border-primary"
                      >
                        {service.ctaText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* --- THE FRAMING JOURNEY SECTION --- */}
        <section className="w-full bg-[#131313] flex justify-center py-[48px] lg:py-[100px]">
          <div className="mx-auto flex w-full max-w-[1440px] px-[24px] flex-col items-center gap-[40px] lg:gap-[64px]">
            <h2 className="heading-h2 text-center text-white">
              {data.journey.title}
            </h2>

            <div className="grid w-full max-w-[1280px] grid-cols-2 gap-x-[20px] gap-y-[40px] lg:grid-cols-4 lg:gap-[32px]">
              {data.journey.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-[12px] lg:gap-[16px]">
                  {/* Updated Mobile Item Gap: 12px applied to parent container above */}
                  <div className="flex size-[40px] items-center justify-center rounded-full bg-forest-green text-[16px] font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="heading-h9 text-white">
                    {step.title}
                  </h3>
                  <p className="body-small max-w-[280px] text-white/70">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INQUIRE NOW FORM SECTION --- */}
        <section id="inquiry-form" className="w-full bg-warm-cream flex justify-center py-[80px] lg:py-[120px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[24px]">
            <div className="flex w-full max-w-[900px] flex-col items-center rounded-[32px] bg-white p-[32px] shadow-sm sm:p-[48px] lg:px-[64px] lg:py-[64px]">

              <div className="mb-[40px] flex flex-col items-center text-center gap-[12px]">
                {/* Mobile: 26px, Tablet: 36px, Desktop: 56px (unchanged) */}
                <h2 className="heading-h2 text-primary">{data.form.title}</h2>
                <p className="body-text text-secondary">{data.form.subtitle}</p>
              </div>

              <form className="flex w-full flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
                <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold text-primary">{data.form.fields.fullName.label}</label>
                    <input type="text" placeholder={data.form.fields.fullName.placeholder} className="input-field" />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold text-primary">{data.form.fields.email.label}</label>
                    <input type="email" placeholder={data.form.fields.email.placeholder} className="input-field" />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold text-primary">{data.form.fields.phone.label}</label>
                    <input type="tel" placeholder={data.form.fields.phone.placeholder} className="input-field" />
                  </div>

                  {/* Service of Interest (Select) */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold text-primary">{data.form.fields.service.label}</label>
                    <div className="relative">
                      <select className="input-field h-[50px] cursor-pointer appearance-none">
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
                  <label className="body-small font-bold text-primary">{data.form.fields.message.label}</label>
                  <textarea placeholder={data.form.fields.message.placeholder} className="textarea-field h-[120px]" />
                </div>

                {/* Submit & Footer Text */}
                <div className="mt-[8px] flex flex-col gap-[16px]">
                  <button type="submit" className="flex h-[56px] w-full items-center justify-center rounded-[8px] bg-forest-green px-[32px] text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg active:scale-[0.98]">
                    {data.form.submitText}
                  </button>
                  <p className="text-center text-[12px] text-secondary">
                    {data.form.responseNote}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="relative w-full flex items-center justify-center overflow-hidden py-[64px] sm:h-[578px] sm:py-0">
          <div className="absolute inset-0 z-0">
            <Image
              src={data.cta.image}
              alt={data.cta.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Very light overlay just to blend the background slightly */}
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Centered White Card */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-[20px] sm:px-[40px] lg:px-[80px]">
            <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center justify-center gap-[24px] rounded-[24px] bg-white px-[24px] py-[40px] text-center sm:gap-[32px] sm:rounded-[32px] sm:py-[64px] lg:h-[292.5px] lg:px-[80px]">
              <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                {/* Mobile: 26px, Tablet: 36px, Desktop: 56px (unchanged) */}
                <h2 className="heading-h2 text-primary">
                  {data.cta.title}
                </h2>
                <p className="body-text text-secondary">
                  {data.cta.subtitle}
                </p>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-[12px] sm:w-auto sm:flex-row sm:gap-[16px]">
                <a
                  href={`tel:${data.cta.buttonPhone.replace(/[^0-9]/g, '')}`}
                  className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 sm:w-auto"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
                  </svg>
                  {data.cta.buttonPhone}
                </a>
                <a
                  href={data.cta.buttonLink}
                  className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[100px] bg-primary px-[32px] text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 sm:w-auto"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 2.118l-7.5 4.262a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-2.118V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25" />
                  </svg>
                  {data.cta.buttonText}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES SECTION (Below CTA as per Figma) --- */}
        <section className="w-full bg-white flex justify-center py-[64px] lg:py-[80px]">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-[24px] lg:px-[80px]">
            <div className="grid w-full max-w-[1280px] grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[40px]">
              {data.features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start gap-[8px]">
                  <h3 className="text-[16px] font-bold text-forest-green">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-secondary">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- REUSABLE FOOTER --- */}
    </div >
  );
}
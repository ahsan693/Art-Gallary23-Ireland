"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Import Shared Components
import { Header, Footer, ArrowIcon } from "@/app/components/home/home";

// 2. Import Data Layer
import { getCommercialData } from "@/app/lib/data/commercialdata";

// Reusable Image Component
export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

// Map the string iconType from data layer to UI SVGs
const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "blueprint":
      return (
        <svg className="size-[24px] sm:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "building":
      return (
        <svg className="size-[24px] sm:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "easel":
      return (
        <svg className="size-[24px] sm:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      );
    default:
      return null;
  }
};

// ==========================================
// COMMERCIAL PAGE COMPONENT
// ==========================================
export default function CommercialComponent() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getCommercialData();
      setData(pageData);
    };
    fetchData();
  }, []);

  // 👇 ADDED SCROLL HANDLER 👇
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents default URL hash jump
    const formSection = document.getElementById("quote-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scrolls to the form
    }
  };

  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
      <div className="hidden md:block">
        <Header />
      </div>

      {/* --- MOBILE HEADER FALLBACK (If needed) --- */}
      <div className="md:hidden">
        <Header />
      </div>

      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[520px] w-full flex-col items-center justify-center overflow-hidden px-[24px] py-[56px] sm:h-[600px] lg:px-[80px] lg:py-[80px]">

          {/* Background Image (Full width) */}
          <div className="absolute inset-0 z-0">
            <Image src={data.hero.image} alt={data.hero.title} fill priority className="object-cover" />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* Text Content (Remains perfectly centered and constrained) */}
          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[16px] text-center text-white sm:gap-[24px]">
            <h1 className="heading-display text-white w-full sm:text-[48px] lg:text-[64px]">
              {data.hero.title}
            </h1>
            <p className="body-large w-full max-w-[750px] text-white/90">
              {data.hero.subtitle}
            </p>
            {/* 👇 UPDATED HERO BUTTON 👇 */}
            <a
              href="#quote-form"
              onClick={handleScrollToForm}
              className="mt-[4px] rounded-full bg-white px-[32px] py-[14px] text-[14px] font-semibold text-primary transition-colors hover:bg-gray-100 sm:mt-[8px] sm:py-[16px]"
            >
              {data.hero.ctaText}
            </a>
          </div>
        </section>

        {/* --- 2. WHO WE SERVE SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[24px] py-[48px] lg:gap-[56px] lg:px-[120px] lg:py-[80px]">
          <h2 className="heading-h2 mb-[32px] text-center lg:mb-0">
            {data.whoWeServe.title}
          </h2>

          <div className="flex w-full max-w-[1200px] flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
            {data.whoWeServe.cards.map((card: any) => (
              <div key={card.id} className="card flex flex-1 flex-col items-start gap-[16px] bg-warm-cream p-[24px] sm:gap-[20px] sm:p-[32px] lg:p-[40px]">
                <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[28px] bg-forest-green text-white sm:size-[64px] sm:rounded-[32px]">
                  {getIconComponent(card.iconType)}
                </div>
                <h3 className="heading-h8">
                  {card.title}
                </h3>
                <p className="body-text text-secondary">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. ALTERNATING FEATURES --- */}
        <div className="flex w-full flex-col items-center">
          {data.features.map((feature: any) => (
            <section
              key={feature.id}
              className={`flex w-full justify-center px-[24px] py-[48px] lg:px-[120px] lg:py-[80px] ${feature.bgType === "white" ? "bg-white" : "bg-warm-cream"
                }`}
            >
              <div
                className={`flex w-full max-w-[1200px] flex-col-reverse items-center justify-between gap-[32px] lg:gap-[80px] ${feature.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >

                {/* Text Container */}
                <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0">
                  <h2 className="heading-h2">
                    {feature.title}
                  </h2>
                  <p className="body-text text-secondary">
                    {feature.description}
                  </p>
                  {/* 👇 UPDATED FEATURES BUTTON 👇 */}
                  <a
                    href="#quote-form"
                    onClick={handleScrollToForm}
                    className="mt-[8px] sm:mt-[12px] inline-flex h-[48.5px] items-center justify-center gap-[10px] rounded-full bg-primary px-[24px] text-[14px] font-semibold text-white transition hover:bg-dark-surface"
                  >
                    {feature.ctaText}
                    <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Image Container */}
                <div className="h-[220px] w-full max-w-[600px] shrink-0 overflow-hidden rounded-[20px] sm:h-[450px] sm:rounded-[24px]">
                  <ResponsiveImage src={feature.image} alt={feature.title} />
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* --- 4. TRUSTED BY LOGOS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-primary px-[24px] py-[48px] lg:gap-[48px] lg:px-[120px] lg:py-[80px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center text-center mb-[24px] lg:mb-0">
            <h2 className="heading-h2 text-white">
              {data.trustedBy.title}
            </h2>
          </div>

          <div className="flex w-full max-w-[1200px] flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
            {data.trustedBy.logos.map((logo: any) => (
              <div key={logo.id} className="flex flex-1 flex-col items-start gap-[16px] sm:gap-[20px] lg:w-[384px]">
                {/* White Card Container */}
                <div className="flex h-[120px] w-full items-center justify-center rounded-[16px] bg-white p-[20px] sm:h-[161px] sm:p-[24px]">

                  {/* Dynamic Image Logo Rendering */}
                  <img
                    src={logo.image}
                    alt={logo.label}
                    className="h-full w-full object-contain"
                  />

                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="micro font-bold uppercase tracking-widest text-white">{logo.label}</p>
                  <h3 className="heading-mini text-white">
                    {logo.project}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. REQUEST A QUOTE FORM --- */}
        <section id="quote-form" className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[16px] py-[56px] sm:px-[24px] lg:px-[120px] lg:py-[80px]">
          <div className="card flex w-full max-w-[900px] flex-col items-center gap-[28px] p-[20px] sm:gap-[40px] sm:rounded-[32px] sm:p-[48px] lg:p-[64px]">

            <h2 className="heading-h2 text-center">
              {data.form.title}
            </h2>

            <form className="flex w-full max-w-[772px] flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>

              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <label className="body-small font-bold">Company Name</label>
                  <input type="text" placeholder="e.g. O'Donnell Architects" className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] body-small outline-none transition-colors focus:border-forest-green" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="body-small font-bold">Contact Name</label>
                  <input type="text" placeholder="Your Name..." className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] body-small outline-none transition-colors focus:border-forest-green" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <label className="body-small font-bold">Email Address</label>
                  <input type="email" placeholder="work@email.com" className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] body-small outline-none transition-colors focus:border-forest-green" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="body-small font-bold">Project Type</label>
                  <select className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] body-small text-secondary outline-none transition-colors focus:border-forest-green">
                    {data.form.projectTypes.map((type: string, i: number) => (
                      <option key={i}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="flex flex-col gap-[10px]">
                <label className="body-small font-bold">Project Description</label>
                <textarea
                  placeholder="Tell us about your volume, materials, and timeline..."
                  className="h-[150px] w-full resize-y rounded-[8px] border border-border bg-[#fcfcfc] p-[16px] body-small outline-none transition-colors focus:border-forest-green focus:bg-white"
                />
              </div>

              {/* File Upload */}
              <div className="flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[8px] border border-dashed border-border bg-white p-[20px] transition-colors hover:bg-gray-50 sm:h-[111px] sm:gap-[10px] sm:p-[24px]">
                <svg className="size-[22px] text-forest-green sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p className="caption text-center sm:text-[14px]">Upload blueprints or project specs</p>
              </div>

              {/* Submit Area */}
              <div className="mt-[4px] flex flex-col gap-[12px] pt-[16px]">
                <button type="submit" className="flex h-[58px] w-full items-center justify-center rounded-[12px] bg-forest-green px-[20px] text-[15px] font-bold text-white transition-colors hover:bg-[#204834] sm:h-[65px] sm:text-[16px]">
                  {data.form.submitText}
                </button>
                <p className="small text-secondary">
                  {data.form.disclaimer}
                </p>
              </div>

            </form>
          </div>
        </section>

      </main>

      <div className="hidden md:block">
        <Footer />
      </div>

      {/* --- MOBILE FOOTER FALLBACK (If needed) --- */}
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}
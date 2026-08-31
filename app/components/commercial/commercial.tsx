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

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById("quote-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary overflow-x-hidden">
      <Header />

      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[500px] sm:h-[600px] w-full flex-col items-center justify-center overflow-hidden">

          {/* Background Image - Absolute to Section */}
          <div className="absolute inset-0 z-0">
            <Image src={data.hero.image} alt={data.hero.title} fill priority className="object-cover" sizes="100vw" />
          </div>

          {/* Dark Overlay - Absolute to Section */}
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Text Content - Contrained Container */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-[20px] py-[64px] sm:px-[24px] sm:py-[56px] lg:px-[80px] lg:py-[80px] flex-col items-center justify-center">
            <div className="flex w-full max-w-[900px] flex-col items-center gap-[16px] text-center text-white sm:gap-[24px]">
              <h1 className="heading-display text-white w-full">
                {data.hero.title}
              </h1>
              <p className="body-large w-full max-w-[750px] text-white/90">
                {data.hero.subtitle}
              </p>
              {/* Working Button with Hover Effect */}
              <a
                href="#quote-form"
                onClick={handleScrollToForm}
                aria-label="Request a Commercial Quote"
                className="btn-secondary group mt-[8px] flex w-max items-center justify-center gap-[8px] border-white bg-white text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 sm:w-auto"
              >
                {data.hero.ctaText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* --- 2. WHO WE SERVE SECTION --- */}
        <section className="w-full bg-warm-cream flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] py-[64px] sm:px-[24px] sm:py-[48px] lg:gap-[56px] lg:px-[120px] lg:py-[80px]">
            <h2 className="heading-h2 mb-[24px] text-center sm:mb-[32px] lg:mb-0">
              {data.whoWeServe.title}
            </h2>

            <div className="flex w-full max-w-[1200px] flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
              {data.whoWeServe.cards.map((card: any) => (
                <div key={card.id} className="card flex flex-1 flex-col items-start gap-[16px] bg-warm-cream p-[24px] sm:gap-[20px] sm:p-[32px] lg:p-[40px]">
                  <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[24px] bg-forest-green text-white sm:size-[64px] sm:rounded-[32px]">
                    {getIconComponent(card.iconType)}
                  </div>
                  <h3 className="heading-h8 font-bold">
                    {card.title}
                  </h3>
                  <p className="body-text text-secondary">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. ALTERNATING FEATURES SECTION --- */}
        <div className="flex w-full flex-col items-center">
          {data.features.map((feature: any) => (
            <section
              key={feature.id}
              // Alternating Background stretches full width
              className={`flex w-full justify-center ${feature.bgType === "white" ? "bg-white" : "bg-warm-cream"
                }`}
            >
              {/* Content constrained to max-w */}
              <div
                className={`flex w-full max-w-[1440px] px-[20px] py-[64px] sm:px-[24px] sm:py-[48px] lg:px-[120px] lg:py-[80px] flex-col gap-[24px] sm:gap-[32px] lg:gap-[80px] ${feature.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >

                {/* Mobile: Image on Top / Desktop: Alternating order */}
                <div className="h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-[450px] sm:rounded-[24px] lg:w-[600px]">
                  <ResponsiveImage src={feature.image} alt={feature.title} />
                </div>

                {/* Text Container */}
                <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0 lg:justify-center">
                  <h2 className="heading-h2">
                    {feature.title}
                  </h2>
                  <p className="body-text text-secondary">
                    {feature.description}
                  </p>
                  {/* Working Button with Hover Effect */}
                  <a
                    href="#quote-form"
                    onClick={handleScrollToForm}
                    aria-label={`Get a quote for ${feature.title}`}
                    className="btn-primary group mt-[8px] flex w-max items-center justify-center gap-[8px] bg-primary border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 sm:w-auto"
                  >
                    {feature.ctaText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* --- 4. TRUSTED BY LOGOS SECTION --- */}
        <section className="w-full bg-primary flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] py-[64px] sm:px-[24px] sm:py-[48px] lg:gap-[48px] lg:px-[120px] lg:py-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col items-start text-left mb-[24px] sm:items-center sm:text-center lg:mb-0">
              <h2 className="heading-h2 text-white">
                {data.trustedBy.title}
              </h2>
            </div>

            <div className="flex w-full max-w-[1200px] flex-col gap-[24px] sm:gap-[24px] lg:flex-row">
              {data.trustedBy.logos.map((logo: any) => (
                <div key={logo.id} className="flex flex-1 flex-col items-start gap-[12px] sm:gap-[20px] lg:w-[384px]">
                  {/* White Logo Card Container */}
                  <div className="flex h-[140px] w-full items-center justify-center rounded-[16px] bg-white p-[20px] sm:h-[161px] sm:p-[24px]">
                    <img
                      src={logo.image}
                      alt={logo.label}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="micro font-bold uppercase tracking-widest text-[#999999]">{logo.label}</p>
                    <h3 className="heading-mini text-white">
                      {logo.project}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. REQUEST A QUOTE FORM SECTION --- */}
        <section id="quote-form" className="w-full bg-warm-cream flex justify-center py-[64px] sm:py-[48px] lg:py-[80px]">
          <div className="mx-auto flex w-full max-w-[1440px] px-[20px] sm:px-[24px] lg:px-[120px] flex-col items-center">
            <div className="card flex w-full max-w-[900px] flex-col items-center gap-[24px] p-[20px] sm:gap-[40px] sm:rounded-[32px] sm:p-[48px] lg:p-[64px]">

              <h2 className="heading-h2 text-center">
                {data.form.title}
              </h2>

              <form className="flex w-full max-w-[772px] flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>

                {/* Company Name */}
                <div className="flex flex-col gap-[8px]">
                  <label className="body-small font-bold">Company Name</label>
                  <input type="text" placeholder="e.g. O'Donnell Architects" className="input-field" />
                </div>

                {/* Contact Name */}
                <div className="flex flex-col gap-[8px]">
                  <label className="body-small font-bold">Contact Name</label>
                  <input type="text" placeholder="Your Name..." className="input-field" />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-[8px]">
                  <label className="body-small font-bold">Email Address</label>
                  <input type="email" placeholder="work@email.com" className="input-field" />
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-[8px]">
                  <label className="body-small font-bold">Project Type</label>
                  <select className="input-field text-secondary appearance-none cursor-pointer">
                    <option value="">Select...</option>
                    {data.form.projectTypes.map((type: string, i: number) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-[8px]">
                  <label className="body-small font-bold">Project Description</label>
                  <textarea
                    placeholder="Tell us about your volume, materials, and timeline..."
                    className="textarea-field h-[120px]"
                  />
                </div>

                {/* File Upload Container with Hover State */}
                <div className="flex h-[110px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[12px] border border-dashed border-[#D5D5D5] bg-white p-[16px] transition-all duration-300 hover:bg-gray-50 hover:border-forest-green sm:h-[111px] sm:gap-[10px] sm:p-[24px]">
                  <svg className="size-[22px] text-forest-green sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                  <p className="caption text-center">Upload blueprints or project specs</p>
                </div>

                {/* Submit Button & Disclaimer with Hover State */}
                <div className="mt-[8px] flex flex-col gap-[12px] text-center">
                  <button type="submit" className="btn-primary group w-full h-[52px] flex items-center justify-center gap-[8px] bg-forest-green text-white border-forest-green transition-all duration-300 hover:-translate-y-1 hover:bg-[#204834] hover:border-[#204834] hover:shadow-lg active:scale-95">
                    {data.form.submitText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="caption text-secondary">
                    {data.form.disclaimer}
                  </p>
                </div>

              </form>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
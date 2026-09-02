"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 1. Import Shared Components
import { ArrowIcon } from "@/app/components/home/home";

// 2. Import Data Layer
import { getCommercialData } from "@/app/lib/data/commercialdata";

type CommercialData = Awaited<ReturnType<typeof getCommercialData>>;

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
  const [data, setData] = useState<CommercialData | null>(null);

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

      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[500px] sm:h-[600px] w-full flex-col items-center justify-center overflow-hidden">

          {/* Background Image - Absolute to Section for full stretching */}
          <div className="absolute inset-0 z-0">
            <Image src={data.hero.image} alt={data.hero.imageAlt} fill priority className="object-cover" sizes="100vw" />
          </div>

          {/* Dark Overlay - Absolute to Section */}
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Text Content - Constrained Container */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-[20px] py-[64px] sm:px-[24px] sm:py-[56px] lg:px-[80px] lg:py-[80px]">
            <div className="flex w-full max-w-[900px] flex-col items-center gap-[16px] text-center text-white sm:gap-[24px]">
              <h1 className="heading-display text-white w-full">
                {data.hero.title}
              </h1>
              <p className="body-large w-full max-w-[750px] text-white/90">
                {data.hero.subtitle}
              </p>
              {/* Working Button with Hover Effect (White -> Black) */}
              <a
                href="#quote-form"
                onClick={handleScrollToForm}
                aria-label={data.hero.ctaAriaLabel}
                className="btn-secondary group mt-[8px] flex w-max items-center justify-center gap-[8px] bg-white text-primary border-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg active:scale-95 sm:w-auto"
              >
                <span className="flex items-center gap-[8px]">
                  {data.hero.ctaText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
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
              {data.whoWeServe.cards.map((card) => (
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
          {data.features.map((feature) => (
            <section
              key={feature.id}
              // Background stretches full width
              className={`flex w-full justify-center ${feature.bgType === "white" ? "bg-white" : "bg-warm-cream"}`}
            >
              {/* Content constrained to max-w */}
              <div
                className={`mx-auto flex w-full max-w-[1440px] items-center px-[20px] py-[64px] sm:px-[24px] sm:py-[48px] lg:px-[120px] lg:py-[80px] flex-col gap-[24px] sm:gap-[32px] lg:gap-[80px] ${feature.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >

                {/* Mobile: Image on Top / Desktop: Alternating order */}
                <div className="h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-[450px] sm:rounded-[24px] lg:w-[600px]">
                  <ResponsiveImage src={feature.image} alt={feature.imageAlt} />
                </div>

                {/* Text Container */}
                <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0 lg:justify-center">
                  <h2 className="heading-h2">
                    {feature.title}
                  </h2>
                  <p className="body-text text-secondary">
                    {feature.description}
                  </p>
                  {/* Working Button with Hover Effect (Green -> Black) */}
                  <a
                    href="#quote-form"
                    onClick={handleScrollToForm}
                    aria-label={feature.ctaAriaLabel}
                    className="btn-primary group mt-[8px] flex w-max items-center justify-center gap-[8px] bg-forest-green border-forest-green text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:border-primary hover:shadow-lg active:scale-95 sm:w-auto"
                  >
                    <span className="flex items-center gap-[8px]">
                      {feature.ctaText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* --- 4. TRUSTED BY LOGOS SECTION --- */}
        <section className="w-full bg-primary flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-[24px] py-[64px] sm:py-[48px] lg:gap-[48px] lg:px-[120px] lg:py-[80px]">
            <div className="mb-0 flex w-full max-w-[1200px] flex-col items-start text-left sm:items-center sm:text-center lg:mb-0">
              <h2 className="heading-h2 text-white max-lg:font-semibold max-lg:leading-[1.1] max-lg:tracking-[-0.64px]">
                {data.trustedBy.title}
              </h2>
            </div>

            <div className="flex w-full max-w-[1200px] flex-col gap-[32px] sm:gap-[24px] lg:flex-row">
              {data.trustedBy.logos.map((logo) => (
                <div key={logo.id} className="flex flex-1 flex-col items-start gap-[16px] sm:gap-[20px] lg:w-[384px]">
                  {/* White Logo Card Container */}
                  <div className="relative flex h-[180px] w-full items-center justify-center rounded-[16px] bg-white p-[20px] sm:h-[161px] sm:p-[24px]">
                    <Image
                      src={logo.image}
                      alt={logo.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 384px"
                      className="object-contain p-[20px] sm:p-[24px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] lg:gap-[4px]">
                    <p className="micro font-bold uppercase tracking-widest text-[#999999] max-lg:text-[12px] max-lg:leading-normal max-lg:tracking-[1px]">{logo.label}</p>
                    <h3 className="heading-mini text-white max-lg:text-[20px] max-lg:font-semibold max-lg:leading-[1.4]">
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
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] sm:px-[24px] lg:px-[120px]">
            <div className="card flex w-full max-w-[900px] flex-col items-center gap-[24px] p-[20px] sm:gap-[40px] sm:rounded-[32px] sm:p-[48px] lg:p-[64px]">

              <h2 className="heading-h2 text-center">
                {data.form.title}
              </h2>

              <form className="flex w-full max-w-[772px] flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>

                {/* Company Name */}
                <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold">{data.form.fields.companyName.label}</label>
                    <input type="text" placeholder={data.form.fields.companyName.placeholder} className="input-field" />
                </div>

                {/* Contact Name */}
                <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold">{data.form.fields.contactName.label}</label>
                    <input type="text" placeholder={data.form.fields.contactName.placeholder} className="input-field" />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold">{data.form.fields.email.label}</label>
                    <input type="email" placeholder={data.form.fields.email.placeholder} className="input-field" />
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-[8px]">
                    <label className="body-small font-bold">{data.form.fields.projectType.label}</label>
                  <div className="relative">
                    <select className="input-field h-[50px] cursor-pointer appearance-none">
                      <option value="">{data.form.fields.projectType.placeholder}</option>
                      {data.form.projectTypes.map((type: string, i: number) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-[16px] flex items-center text-primary">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-[8px]">
                  <label className="body-small font-bold">{data.form.fields.description.label}</label>
                  <textarea
                    placeholder={data.form.fields.description.placeholder}
                    className="textarea-field h-[120px] bg-[#F9F9F9] hover:border-[#84A59D]"
                  />
                </div>

                {/* File Upload Container */}
                <div className="flex h-[110px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[12px] border border-dashed border-[#D5D5D5] bg-white p-[16px] transition-colors hover:bg-gray-50 hover:border-forest-green sm:h-[111px] sm:gap-[10px] sm:p-[24px]">
                  <svg className="size-[22px] text-forest-green sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                  <p className="caption text-center">{data.form.fields.upload}</p>
                </div>

                {/* Submit Button & Disclaimer (Green -> Black) */}
                <div className="mt-[8px] flex flex-col gap-[12px] text-center">
                  <button type="submit" className="btn-primary group w-full h-[52px] flex items-center justify-center gap-[8px] bg-forest-green text-white border-forest-green transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:border-primary hover:shadow-lg active:scale-95">
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

    </div>
  );
}
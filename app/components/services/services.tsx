"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Import Header, Footer, and Shared Icons
import { Header, Footer, ArrowIcon } from "@/app/components/home/home";

// 2. Import Data Layer
import { getServicesData, servicesImages } from "@/app/lib/data/servicesdata";

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

  // Render a loading state while fetching data
  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  return (
    <div className="min-h-screen bg-warm-cream text-primary">
      {/* --- REUSABLE HEADER --- */}
      <Header />

      <main className="flex flex-col items-center">
        
        {/* --- HERO SECTION --- */}
        <section className="relative flex h-[500px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[64px] sm:h-[600px] lg:px-[80px] lg:py-[120px]">
          
          <div className="absolute inset-0 -z-20">
            <Image src={servicesImages.hero} alt="Gallery interior" fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-black/60" />

          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[24px] text-center text-white">
            <div className="inline-flex items-center justify-center rounded-full border border-white/40 px-[16px] py-[6px] backdrop-blur-sm">
              <span className="text-[13px] font-semibold tracking-wide text-white uppercase">
                {data.hero.badge}
              </span>
            </div>
            
            {/* Global Token applied: heading-display */}
            <h1 className="heading-display text-white sm:text-[56px] lg:text-[64px]">
              {data.hero.title}
            </h1>
            
            {/* Global Token applied: body-large */}
            <p className="max-w-[700px] body-large text-white/90">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* --- DETAILED SERVICES LIST SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[80px] bg-white px-[24px] py-[80px] lg:gap-[120px] lg:px-[80px] lg:py-[120px]">
          
          {data.offerings.map((service: any, index: number) => {
            // Alternate layout: Even indexes have image on left, odd have image on right
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                className={`flex w-full max-w-[1280px] flex-col items-center gap-[40px] lg:gap-[80px] ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-[24px] shadow-sm sm:h-[500px] lg:h-[600px] lg:w-[580px]">
                  <ResponsiveImage src={service.image} alt={service.title} />
                </div>

                {/* Text Side */}
                <div className="flex w-full flex-col items-start gap-[24px] lg:w-[540px]">
                  {/* Global Token: heading-h3 */}
                  <h2 className="heading-h3 text-primary">
                    {service.title}
                  </h2>
                  
                  {/* Global Token: body-text */}
                  <p className="body-text text-secondary">
                    {service.description}
                  </p>

                  <div className="my-[8px] h-[1px] w-full bg-border" />

                  {/* Features List */}
                  <ul className="flex flex-col gap-[12px] body-text text-secondary">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-[12px]">
                        <span className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-warm-cream text-forest-green">
                          <svg className="size-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-[16px]">
                    {/* Global Token: btn-primary */}
                    <Link href={service.ctaLink} className="btn-primary">
                      {service.ctaText} <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* --- CTA SECTION --- */}
        <section className="relative mx-auto flex min-h-[480px] w-full max-w-[1440px] items-center justify-center overflow-hidden px-[24px] py-[80px]">
          <div className="absolute inset-0 -z-20">
            <Image src={servicesImages.cta} alt="Living room with art" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 -z-10 bg-forest-green/90" />

          <div className="flex w-full max-w-[800px] flex-col items-center text-center gap-[24px]">
            {/* Global Token: heading-h2 */}
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
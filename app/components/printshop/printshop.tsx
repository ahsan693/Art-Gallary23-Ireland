"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// Importing the Data Layer
import { getPrintShopData } from "@/app/lib/data/printshopdata";

// ==========================================
// PRINT SHOP COMPONENT
// ==========================================

export default function PrintShopPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getPrintShopData();
      setData(pageData);
    };
    fetchData();
  }, []);

  // Show an empty background while data is loading to prevent layout shift
  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary">

      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- PRINT SHOP HERO SECTION --- */}
        <section className="relative flex h-[500px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[64px] sm:h-[600px] lg:px-[80px] lg:py-[120px]">

          {/* Background Image (z-0) */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${data.hero.image}')` }}
          />

          {/* Dark Overlay (z-10) for text readability */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.60]" />

          {/* Content Container (z-20) */}
          <div className="relative z-20 flex w-full flex-col items-center gap-[32px] text-center text-white">

            {/* Top Label (Badge) */}
            <div className="inline-flex items-center justify-center rounded-full border border-white/40 px-[16px] py-[6px] backdrop-blur-sm">
              <span className="text-[13px] font-semibold tracking-wide text-white">
                {data.hero.badge}
              </span>
            </div>

            {/* Heading & Subtitle Group */}
            <div className="flex w-full flex-col items-center gap-[16px]">
              <h1 className="w-full max-w-[900px] text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[64px]">
                {data.hero.title}
              </h1>
              <p className="w-full max-w-[700px] text-[16px] font-medium leading-[1.4] text-white/[0.92] sm:text-[18px] lg:text-[20px]">
                {data.hero.subtitle}
              </p>
            </div>

          </div>
        </section>

        {/* --- CUSTOM PRINT UPLOAD SECTION --- */}
        <section className="flex w-full max-w-[1440px] justify-center px-[24px] py-[64px] lg:py-[80px]">

          {/* Main Card Wrapper */}
          <div className="card flex w-full max-w-[905px] flex-col items-center gap-[24px] p-[24px] text-center sm:p-[32px] lg:items-start lg:text-left">

            {/* Icon & Title Group */}
            <div className="flex flex-col items-center gap-[16px] lg:items-start">
              <svg
                className="size-[32px] text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>

              <h2 className="text-[32px] font-bold leading-[1.2] text-primary">
                {data.customPrint.title}
              </h2>
            </div>

            <p className="body-text max-w-[841px] text-secondary">
              {data.customPrint.description}
            </p>

            <Link
              href={data.customPrint.buttonLink}
              className="mt-[4px] inline-flex h-[46px] w-full items-center justify-center gap-[8px] rounded-full bg-primary px-[24px] text-[13px] font-medium tracking-[0.5px] uppercase text-white transition-colors hover:bg-dark-surface sm:w-auto"
            >
              {data.customPrint.buttonText}
              <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:px-[120px] lg:py-[157px]">

          {/* Background Image (z-0) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={data.howItWorks.image}
              alt="How it works background"
              fill
              className="object-cover"
            />
          </div>

          {/* Dark Overlay (z-10) */}
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Content Container (z-20) */}
          <div className="relative z-20 flex w-full max-w-[1200px] flex-col items-center gap-[40px] text-white lg:gap-[56px]">

            {/* Section Heading */}
            <h2 className="heading-h2 text-center text-white">
              {data.howItWorks.title}
            </h2>

            {/* Steps Container (Mapped Dynamically) */}
            <div className="flex w-full flex-col justify-between gap-[32px] lg:flex-row lg:gap-[24px]">
              {data.howItWorks.steps.map((step: any) => (
                <div key={step.id} className={`flex w-full items-start gap-[16px] lg:flex-col lg:gap-[24px] ${step.maxWidth}`}>
                  <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-bold text-primary">
                    {step.id}
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-[18px] font-bold leading-[1.2] text-white">
                      {step.title}
                    </h3>
                    <p className="body-text text-white/90">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* --- NEED HELP? SECTION --- */}
        <section className="flex w-full max-w-[1440px] flex-col items-center justify-center px-[24px] py-[64px] lg:py-[80px]">
          <div className="flex flex-col items-center gap-[32px] text-center">

            <h2 className="text-[32px] font-bold leading-[1.2] text-primary">
              {data.needHelp.title}
            </h2>

            <p className="text-[18px] leading-[1.4] text-primary">
              {data.needHelp.prefix}
              <Link
                href={data.needHelp.faqLink}
                className="underline decoration-1 underline-offset-4 transition-colors hover:text-forest-green"
              >
                {data.needHelp.faqText}
              </Link>
              {data.needHelp.middle}
              <a
                href={data.needHelp.emailLink}
                className="font-bold transition-colors hover:text-forest-green"
              >
                {data.needHelp.emailText}
              </a>
            </p>

          </div>
        </section>

        {/* --- DISCLAIMER BAR SECTION --- */}
        <section className="hidden w-full flex-col items-center bg-primary lg:flex">
          <div className="flex w-full max-w-[1440px] items-center justify-center px-[24px] py-[32px] lg:px-[180px]">
            <p className="body-text w-full max-w-[1080px] text-center font-medium text-white">
              {data.disclaimer.text}
            </p>
          </div>
        </section>

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />

    </div>
  );
}
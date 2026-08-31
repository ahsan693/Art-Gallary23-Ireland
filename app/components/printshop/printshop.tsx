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
  const [selectedPaper, setSelectedPaper] = useState<string>("Art Paper");

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getPrintShopData();
      setData(pageData);
    };
    fetchData();
  }, []);

  // Show an empty background while data is loading to prevent layout shift
  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  // Sample Paper Options array based on Figma Images 3 & 4
  const paperOptions = [
    {
      id: "Art Paper",
      title: "Art Paper",
      desc: "Premium acid-free art paper. Available in multiple GSM weights for fine art reproduction. Ideal for giclée prints and limited editions.",
      img: "/Printshop/paper-art.jpg",
    },
    {
      id: "Satin Photo Paper",
      title: "Satin Photo Paper",
      desc: "Semi-gloss finish with vibrant colour reproduction. Perfect for photographs and high-contrast images.",
      img: "/Printshop/paper-satin.jpg",
    },
    {
      id: "Matte Photo Paper",
      title: "Matte Photo Paper",
      desc: "Non-reflective finish with rich, deep tones. Ideal for portraits, landscapes, and exhibition prints.",
      img: "/Printshop/paper-matte.jpg",
    },
    {
      id: "Canvas",
      title: "Canvas",
      desc: "Archival-grade canvas for stretched or framed prints. Museum-quality texture and durability.",
      img: "/Printshop/paper-canvas.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary overflow-x-hidden">

      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. PRINT SHOP HERO SECTION --- */}
        <section className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">

          {/* Background Image (z-0) Stretched to full screen */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{ backgroundImage: `url('${data.hero.image}')` }}
          />

          {/* Dark Overlay (z-10) for text readability */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.60]" />

          {/* Content Container (z-20) constrained to max-width */}
          <div className="relative z-20 flex w-full max-w-[1440px] px-[20px] py-[64px] sm:px-[24px] lg:px-[80px] lg:py-[120px] flex-col items-center gap-[24px] text-center text-white sm:gap-[32px] mx-auto">

            {/* Top Label (Badge) */}
            <div className="inline-flex items-center justify-center rounded-[8px] border border-white/40 bg-white/10 px-[16px] py-[8px] backdrop-blur-sm">
              <span className="caption font-semibold tracking-wide text-white">
                {data.hero.badge}
              </span>
            </div>

            {/* Heading & Subtitle Group */}
            <div className="flex w-full flex-col items-center gap-[16px]">
              <h1 className="heading-display text-white w-full max-w-[900px]">
                {data.hero.title}
              </h1>
              <p className="body-large w-full max-w-[700px] text-white/90">
                {data.hero.subtitle}
              </p>
            </div>

          </div>
        </section>

        {/* --- 2. CUSTOM PRINT UPLOAD SECTION --- */}
        <section className="flex w-full flex-col items-center justify-center bg-warm-cream py-[64px] lg:py-[80px]">

          {/* Main Card Wrapper constrained to max-width */}
          <div className="mx-auto flex w-full max-w-[1440px] justify-center px-[20px] sm:px-[24px]">
            <div className="card flex w-full max-w-[905px] flex-col items-center gap-[20px] p-[24px] text-center sm:gap-[24px] sm:p-[32px] lg:items-start lg:text-left">

              {/* Upload Icon & Title Group */}
              <div className="flex flex-col items-center gap-[16px] lg:items-start">
                <svg
                  className="size-[32px] text-forest-green"
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

                <h2 className="heading-h2 text-primary">
                  {data.customPrint.title}
                </h2>
              </div>

              <p className="body-text max-w-[841px] text-secondary">
                {data.customPrint.description}
              </p>

              {/* Interactive Working Button (Black -> Green hover effect) */}
              <Link
                href={data.customPrint.buttonLink}
                className="group btn-primary uppercase tracking-[0.12em] w-full flex justify-center items-center gap-[8px] bg-primary border-primary transition-all duration-300 hover:-translate-y-1 hover:bg-forest-green hover:border-forest-green hover:text-white hover:shadow-lg active:scale-95 sm:w-auto"
              >
                <span className="flex items-center gap-[8px]">
                  {data.customPrint.buttonText}
                  <svg className="size-[16px] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* --- 4. HOW IT WORKS SECTION --- */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden py-[64px] sm:py-[80px] lg:py-[157px]">

          {/* Background Image (z-0) stretched to full screen */}
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image
              src={data.howItWorks.image}
              alt="How it works background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Dark Overlay (z-10) stretched to full screen */}
          <div className="absolute inset-0 z-10 bg-black/60 lg:bg-black/10" />

          {/* Content Container (z-20) constrained to max-width */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-[20px] sm:px-[24px] lg:px-[120px] flex-col items-start gap-[32px] text-white sm:items-center sm:text-center lg:gap-[56px]">

            {/* Section Heading */}
            <h2 className="heading-h2 text-left text-white sm:text-center w-full max-w-[1200px]">
              {data.howItWorks.title}
            </h2>

            {/* Steps Container (Stacked on Mobile) */}
            <div className="flex w-full max-w-[1200px] flex-col justify-between gap-[28px] lg:flex-row lg:gap-[24px]">
              {data.howItWorks.steps.map((step: any) => (
                <div key={step.id} className={`flex w-full items-start gap-[16px] lg:flex-col lg:gap-[24px] ${step.maxWidth}`}>
                  <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-bold text-primary">
                    {step.id}
                  </div>
                  <div className="flex flex-col items-start gap-[8px] text-left">
                    <h3 className="heading-h8 font-bold text-white">
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

        {/* --- 5. NEED HELP? SECTION --- */}
        <section className="flex w-full flex-col items-center justify-center bg-warm-cream py-[64px] lg:py-[80px]">
          <div className="mx-auto flex w-full max-w-[1440px] px-[20px] sm:px-[24px] flex-col items-center gap-[16px] text-center sm:gap-[24px]">

            <h2 className="heading-h2 text-primary">
              {data.needHelp.title}
            </h2>

            <p className="body-text max-w-[600px] text-primary">
              {data.needHelp.prefix}{" "}
              <Link
                href={data.needHelp.faqLink}
                className="font-semibold text-forest-green underline decoration-solid underline-offset-4 transition-colors duration-300 hover:text-primary"
              >
                {data.needHelp.faqText}
              </Link>{" "}
              {data.needHelp.middle}{" "}
              <a
                href={data.needHelp.emailLink}
                className="font-bold text-primary transition-colors duration-300 hover:text-forest-green"
              >
                {data.needHelp.emailText}
              </a>
            </p>

          </div>
        </section>

        {/* --- 6. DISCLAIMER BAR SECTION --- */}
        <section className="hidden w-full flex-col items-center bg-primary lg:flex">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-[24px] py-[32px] lg:px-[180px]">
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
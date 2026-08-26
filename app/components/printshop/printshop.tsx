"use client";

import Image from "next/image";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Placeholder image for the Print Shop Hero section 
// (Replace with your actual gallery/print shop asset)
const printShopHeroImg = "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1920&q=85";
const howItWorksBgImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=85"; // Placeholder for the "How it works" background

// ==========================================
// PRINT SHOP COMPONENT
// ==========================================

export default function PrintShopPage() {
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
            style={{ backgroundImage: `url('${printShopHeroImg}')` }}
          />

          {/* Dark Overlay (z-10) for text readability */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.60]" />

          {/* Content Container (z-20) */}
          <div className="relative z-20 flex w-full flex-col items-center gap-[32px] text-center text-white">

            {/* Top Label (Badge) */}
            <div className="inline-flex items-center justify-center rounded-full border border-white/40 px-[16px] py-[6px] backdrop-blur-sm">
              <span className="text-[13px] font-semibold tracking-wide text-white">
                Online Payment Only — Store Pickup at Kimmage or Coalmine
              </span>
            </div>

            {/* Heading & Subtitle Group */}
            <div className="flex w-full flex-col items-center gap-[16px]">
              <h1 className="w-full max-w-[900px] text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[64px]">
                Gallery 23 Print Shop — Fine Art &amp; Photo Printing
              </h1>
              <p className="w-full max-w-[700px] text-[16px] font-medium leading-[1.4] text-white/[0.92] sm:text-[18px] lg:text-[20px]">
                Order gallery-quality giclée prints online for in-store pickup. Upload your own artwork or select from our licensed collection. Professional results on archival papers and canvas.
              </p>
            </div>

          </div>
        </section>

        {/* --- CUSTOM PRINT UPLOAD SECTION --- */}
        <section className="flex w-full max-w-[1440px] justify-center px-[24px] py-[64px] lg:py-[80px]">

          {/* Main Card Wrapper */}
          <div className="card flex w-full max-w-[905px] flex-col items-start gap-[24px] p-[24px] sm:p-[32px]">

            {/* Icon & Title Group */}
            <div className="flex flex-col items-start gap-[16px]">
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
                Custom Print
              </h2>
            </div>

            <p className="body-text max-w-[841px] text-secondary">
              Upload your own artwork, photograph, or digital file. We accept TIFF, JPEG, and PDF formats up to 100MB.
            </p>

            <Link
              href="#"
              className="mt-[4px] inline-flex h-[46px] items-center justify-center gap-[8px] rounded-full bg-primary px-[24px] text-[13px] font-medium tracking-[0.5px] uppercase text-white transition-colors hover:bg-dark-surface"
            >
              Start Custom Order
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
              src={howItWorksBgImg}
              alt="How it works background"
              fill
              className="object-cover"
            />
          </div>

          {/* Dark Overlay (z-10) */}
          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* Content Container (z-20) */}
          <div className="relative z-20 flex w-full max-w-[1200px] flex-col items-center gap-[56px] text-white">

            {/* Section Heading */}
            <h2 className="heading-h2 text-center text-white">
              How it works
            </h2>

            {/* Steps Container */}
            <div className="flex w-full flex-col justify-between gap-[40px] lg:flex-row lg:gap-[24px]">

              {/* Step 1 */}
              <div className="flex w-full flex-col items-start gap-[24px] lg:max-w-[227px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-bold text-primary">
                  1
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold leading-[1.2] text-white">Select Print Type</h3>
                  <p className="body-text text-white/90">Choose Custom (upload your file) or Licensed (select artwork by artist name).</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex w-full flex-col items-start gap-[24px] lg:max-w-[192px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-bold text-primary">
                  2
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold leading-[1.2] text-white">Choose Paper & Size</h3>
                  <p className="body-text text-white/90">Pick your preferred paper type and print dimensions. What you like.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex w-full flex-col items-start gap-[24px] lg:max-w-[227px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-bold text-primary">
                  3
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold leading-[1.2] text-white">Upload & Pay</h3>
                  <p className="body-text text-white/90">Upload high-res file and complete secure online payment. No cash on delivery.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex w-full flex-col items-start gap-[24px] lg:max-w-[227px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-bold text-primary">
                  4
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold leading-[1.2] text-white">Store Pickup</h3>
                  <p className="body-text text-white/90">Receive email with pickup details. Collect from Kimmage or Coalmine.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />

    </div>
  );
}
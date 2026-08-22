"use client";

import Image from "next/image";

// Added Button to the import list from your home component
import { Header, Footer, Button } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Image asset for the Services Hero section
const servicesHeroImg = "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=1920&q=85";

// ==========================================
// SERVICES COMPONENT
// ==========================================

export default function ServicesComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f3eb] text-[#161616]">
      
      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- SERVICES HERO SECTION --- */}
        {/* Figma: 1440px Width, 600px Fixed Height, 80px Padding */}
        <section className="relative flex h-[600px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:px-[80px]">
          
          {/* 1. Background Image (z-0) */}
          <img
            src={servicesHeroImg}
            alt="Expert framing and printing services workshop"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />

          {/* 2. Dark Overlay (z-10) - Figma spec: #000000 at 55% opacity */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.55]" />

          {/* 3. Inner Content Container (z-20) - 900px Max Width, Vertical Flow, 20px Gap */}
          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[20px] text-center text-white">
            
            {/* Heading 1: Host Grotesk 700 Bold, 64px, 110% Line Height, Center Aligned */}
            <h1 className="w-full text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[64px]">
              Our Expert Framing &amp; Printing Services
            </h1>

            {/* Subtitle: Host Grotesk 500 Medium, 20px, 140% Line Height, 700px Max Width */}
            <p className="w-full max-w-[700px] text-[16px] font-medium leading-[1.4] sm:text-[18px] lg:text-[20px]">
              Dublin&apos;s most comprehensive range of professional framing services — every piece handcrafted by master framers with nearly 40 years of experience.
            </p>

          </div>
        </section>

        {/* --- PICTURE FRAMING SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="flex w-full max-w-[600px] flex-col items-start gap-[24px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height, 400px Max Width */}
            <h2 className="w-full max-w-[400px] text-[32px] font-semibold leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Picture Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 600px Max Width */}
            <p className="w-full max-w-[600px] text-[16px] font-medium leading-[1.6] text-[#555]">
              Preserve and showcase your artwork, photographs, and prints with our custom picture framing. Choose from hundreds of frame styles, mats, and glass options.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

          {/* Right Image Container: 600px Width, 450px Height, Sharp Corners */}
          <div className="relative mt-8 h-[300px] w-full max-w-[600px] shrink-0 sm:h-[450px] lg:mt-0">
            {/* Using a standard <img> tag for immediate rendering. */}
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=85"
              alt="Assortment of wooden picture frame corner samples"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </section>

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
      
    </div>
  );
}
"use client";

import Image from "next/image";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

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
    <div className="min-h-screen bg-[#f7f3eb] text-[#161616]">
      
      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main>
        
        {/* --- SERVICES HERO SECTION --- */}
        {/* 1440px Fill, 600px Fixed Height, 80px Top/Bottom Padding (handled by centering) */}
        <section className="relative mx-auto flex h-[600px] w-full max-w-[1440px] items-center justify-center overflow-hidden px-[24px]">
          
          {/* Background Image */}
          <div className="absolute inset-0 -z-20">
            <Image
              src={servicesHeroImg}
              alt="Expert framing and printing services workshop"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* Dark Overlay (#000000 at 55% opacity per Figma spec) */}
          <div className="absolute inset-0 -z-10 bg-black/[0.55]" />

          {/* Inner Content Container (900px Max Width, Vertical Flow, 20px Gap) */}
          <div className="flex w-full max-w-[900px] flex-col items-center gap-[20px] text-center text-white">
            
            {/* Heading 1 (Host Grotesk 700 Bold, 64px, 110% Line Height) */}
            <h1 className="w-full text-[36px] font-bold leading-[1.1] tracking-[0px] sm:text-[48px] lg:text-[64px]">
              Our Expert Framing & Printing Services
            </h1>

            {/* Subtitle (Host Grotesk 500 Medium, 20px, 140% Line Height, 700px Max Width) */}
            <p className="w-full max-w-[700px] text-[16px] font-medium leading-[1.4] sm:text-[20px]">
              Dublin&apos;s most comprehensive range of professional framing services — every piece handcrafted by master framers with nearly 40 years of experience.
            </p>

          </div>
        </section>

        {/* 
          Future sections (Picture Framing, etc.) 
          will be placed down here in the next steps 
        */}

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
      
    </div>
  );
}
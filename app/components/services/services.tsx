"use client";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Image asset for the Services Hero section
// Using a placeholder that matches the framing workshop vibe from your Figma design
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
          
          {/* 1. Background Image (z-0) 
              Using a standard <img> tag here to bypass Next.js external domain config errors 
              so it shows up immediately.
          */}
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
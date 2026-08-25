"use client";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Placeholder image for the Print Shop Hero section 
// (Replace with your actual gallery/print shop asset)
const printShopHeroImg = "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1920&q=85";

// ==========================================
// PRINT SHOP COMPONENT
// ==========================================

export default function PrintShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f3eb] text-[#161616]">
      
      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- PRINT SHOP HERO SECTION --- */}
        {/* Figma Layout: 1440px Width, 600px Height, Padding: 120px Top/Bottom, 80px Left/Right, 32px Gap */}
        <section className="relative flex h-[500px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[64px] sm:h-[600px] lg:px-[80px] lg:py-[120px]">
          
          {/* Background Image (z-0) */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${printShopHeroImg}')` }}
          />

          {/* Dark Overlay (z-10) for text readability */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.60]" />

          {/* Content Container (z-20): Vertical Flow, 32px Gap */}
          <div className="relative z-20 flex w-full flex-col items-center gap-[32px] text-center text-white">
            
            {/* Top Label (Badge) */}
            <div className="inline-flex items-center justify-center rounded-full border border-white/40 px-[16px] py-[6px] backdrop-blur-sm">
              {/* Text: Host Grotesk 600 SemiBold, 13px */}
              <span className="text-[13px] font-semibold tracking-wide text-white">
                Online Payment Only — Store Pickup at Kimmage or Coalmine
              </span>
            </div>

            {/* Heading & Subtitle Group */}
            <div className="flex w-full flex-col items-center gap-[16px]">
              
              {/* Heading: Host Grotesk 700 Bold, 64px, 110% Line Height, 900px Max Width */}
              <h1 className="w-full max-w-[900px] text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[64px]">
                Gallery 23 Print Shop — Fine Art &amp; Photo Printing
              </h1>

              {/* Subtitle: Host Grotesk 500 Medium, 20px, 140% Line Height, 700px Max Width, 92% Opacity */}
              <p className="w-full max-w-[700px] text-[16px] font-medium leading-[1.4] text-white/[0.92] sm:text-[18px] lg:text-[20px]">
                Order gallery-quality giclée prints online for in-store pickup. Upload your own artwork or select from our licensed collection. Professional results on archival papers and canvas.
              </p>

            </div>

          </div>
        </section>

        {/* 
          Future Print Shop sections (Product Grids, Upload UI, etc.) 
          will be placed down here.
        */}

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
      
    </div>
  );
}
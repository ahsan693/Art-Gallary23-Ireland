"use client";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Image asset for the About Us Hero section (Updated to a verified working link)
const aboutHeroImg = "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=1920&q=85";

// ==========================================
// ABOUT US COMPONENT
// ==========================================

export default function AboutUsComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f3eb] text-[#161616]">
      
      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- ABOUT US HERO SECTION --- */}
        {/* Figma: 1440px Width, 643px Fixed Height, 80px Padding */}
        <section className="relative flex h-[643px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:px-[80px]">
          
          {/* 1. Background Image (z-0) using CSS Background for bulletproof rendering */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${aboutHeroImg}')` }}
          />

          {/* 2. Dark Overlay (z-10) - Figma spec: #000000 at 65% opacity */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.65]" />

          {/* 3. Inner Content Container (z-20) - 1000px Max Width, Vertical Flow, 16px Gap */}
          <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-[16px] text-center text-white">
            
            {/* Heading 1: Host Grotesk 700 Bold, 64px, 110% Line Height, 924px Max Width, Center Aligned */}
            <h1 className="w-full max-w-[924px] text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[64px]">
              Our Lineage: Dublin&apos;s Framing Legacy Since 1985
            </h1>

            {/* Subtitle: Host Grotesk 400 Regular, 18px, 140% Line Height, 700px Max Width, 80% Opacity */}
            <p className="w-full max-w-[700px] text-[16px] font-normal leading-[1.4] text-white/80 sm:text-[18px]">
              For nearly four decades, Gallery 23 has been at the heart of Dublin&apos;s art and framing community. What began as a small family workshop in Kimmage has grown into one of Ireland&apos;s most respected custom framing studios.
            </p>

          </div>
        </section>
        {/* --- MEET THE GREGS SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom/Left/Right, Gap 64px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[60px] lg:flex-row lg:items-center lg:justify-center lg:gap-[64px] lg:px-[80px] lg:py-[80px]">
          
          {/* Left Container (Images): 480px Fixed Width, 567px Hug Height */}
          <div className="relative mb-[40px] h-[400px] w-full max-w-[340px] shrink-0 sm:h-[567px] sm:max-w-[480px] lg:mb-0 lg:w-[480px]">
            
            {/* Big Image (Founder / Sr. Greg) */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
              alt="Greg Thompson Sr. in his workshop"
              className="absolute inset-0 h-full w-full rounded-[12px] object-cover"
            />

            {/* Overlapping Small Image (Jr. Greg) - Width 260px, Height 320px, Radius 12px, Custom Shadow */}
            {/* Positioned absolutely to overlap the bottom-right corner of the main image */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85"
              alt="Greg Jr. portrait"
              className="absolute bottom-[-20px] right-[-20px] h-[220px] w-[180px] rounded-[12px] object-cover shadow-[0_10px_24px_-8px_rgba(0,0,0,0.08)] sm:bottom-[-40px] sm:right-[-40px] sm:h-[320px] sm:w-[260px]"
            />
          </div>

          {/* Right Container (Text Content): 736px Fill Width, Vertical Flow, 32px Gap */}
          <div className="flex w-full max-w-[736px] flex-col gap-[32px]">
            
            {/* Heading: Host Grotesk 500 Medium, 48px, 110% Line Height, -1.5% Tracking */}
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-[#161616] sm:text-[40px] lg:text-[48px]">
              Meet the Gregs &ndash; Father &amp; Son
            </h2>

            {/* Paragraphs Container: Host Grotesk 400 Regular, 18px, 140% Line Height */}
            <div className="flex flex-col gap-[16px] text-[16px] font-normal leading-[1.4] text-[#161616] sm:text-[18px]">
              <p>
                In 1985, Greg Thompson Sr. opened the doors to Gallery23 with a simple vision &ndash; to give every piece of art the frame it deserves. Armed with a passion for woodworking and an eye for design, he built the shop from a modest workshop into a beloved community institution.
              </p>
              <p>
                Decades later, his son Greg Jr. grew up surrounded by sawdust, frame samples, and the hum of the workshop. After studying fine art and business, Greg Jr. joined the family trade, bringing fresh ideas while honoring his father&apos;s time-tested techniques.
              </p>
              <p>
                Today, Gallery23 is the seamless blend of two generations &ndash; Sr. Greg&apos;s old-world craftsmanship and Jr. Greg&apos;s modern vision. Together, they continue to frame the moments that matter most to their community.
              </p>
            </div>

            {/* Quote Block: Host Grotesk 400 Italic, 24px, 120% Line Height */}
            <div className="border-l-[4px] border-[#295b42] pl-[20px] sm:pl-[24px]">
              <p className="text-[20px] italic leading-[1.2] text-[#161616] sm:text-[24px]">
                &quot;My father taught me that a great frame doesn&apos;t just hold art &ndash; it becomes part of the story. That&apos;s what we carry forward every day.&quot; &ndash; Greg Jr.
              </p>
            </div>

          </div>

        </section>

        {/* 
          Future sections (Meet the Gregs, etc.) 
          will be placed down here in the next steps 
        */}

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
      
    </div>
  );
}
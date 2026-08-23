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

        {/* --- WHAT WE STAND FOR SECTION --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Padding: 96px Top, 120px Bottom/Left/Right, Gap 56px */}
        <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] pb-[80px] pt-[64px] lg:gap-[56px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          
          {/* Background Image (z-0) using CSS Background for bulletproof rendering */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1920&q=85')` }}
          />

          {/* Dark Overlay (z-10) - Figma spec: #000000 at 60% opacity */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.60]" />

          {/* Header Container (z-20): 920px Max Width, Vertical Flow, 16px Gap */}
          <div className="relative z-20 flex w-full max-w-[920px] flex-col items-center gap-[16px] text-center mb-[40px] lg:mb-0">
            
            {/* Heading: Host Grotesk 700 Bold, 56px, 105% Line Height, Center Aligned */}
            <h2 className="w-full text-[36px] font-bold leading-[1.05] tracking-[0px] text-white sm:text-[48px] lg:text-[56px]">
              What We Stand For
            </h2>

            {/* Subtitle: Host Grotesk 400 Regular, 16px, 150% Line Height, Color #999999 */}
            <p className="w-full text-[15px] font-normal leading-[1.5] text-[#999999] sm:text-[16px]">
              Four principles that guide every frame, every material choice, and every conversation.
            </p>

          </div>

          {/* Cards Grid Container (z-20): 1200px Max Width, Vertical Flow, 24px Gap */}
          <div className="relative z-20 flex w-full max-w-[1200px] flex-col gap-[24px]">
            
            {/* Row 1: Horizontal Flow, 24px Gap */}
            <div className="flex flex-col gap-[24px] lg:flex-row">
              
              {/* Card 1: Master Craftsmanship (588px Width) */}
              <div className="flex flex-1 flex-col items-start gap-[20px] rounded-[20px] border border-[#d5d5d5] bg-white p-[32px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[20px] font-bold text-[#161616]">Master Craftsmanship</h3>
                  <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                    Every frame is hand-cut, joined, and finished by experienced craftsmen in our Dublin workshop. We never outsource.
                  </p>
                </div>
              </div>

              {/* Card 2: Preservation & Conservation (588px Width) */}
              <div className="flex flex-1 flex-col items-start gap-[20px] rounded-[20px] border border-[#d5d5d5] bg-white p-[32px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[20px] font-bold text-[#161616]">Preservation &amp; Conservation</h3>
                  <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                    Museum-standard acid-free materials, UV-filtering glass, and reversible mounting to protect your most valuable artworks.
                  </p>
                </div>
              </div>

            </div>

            {/* Row 2: Horizontal Flow, 24px Gap */}
            <div className="flex flex-col gap-[24px] lg:flex-row">
              
              {/* Card 3: Sustainability (420px Width) */}
              <div className="flex flex-col items-start gap-[20px] rounded-[20px] border border-[#d5d5d5] bg-white p-[32px] lg:w-[420px] lg:shrink-0">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 014 13c0-3.866 3.134-7 7-7h1a7 7 0 017 7c0 3.866-3.134 7-7 7v0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 20v-5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[20px] font-bold text-[#161616]">Sustainability</h3>
                  <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                    Sustainable timber sourcing, recycled packaging, and eco-friendly workshop practices to minimise our environmental footprint.
                  </p>
                </div>
              </div>

              {/* Card 4: Client-First Service (756px Width) */}
              <div className="flex flex-1 flex-col items-start gap-[20px] rounded-[20px] border border-[#d5d5d5] bg-white p-[32px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[20px] font-bold text-[#161616]">Client-First Service</h3>
                  <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                    Free expert consultations at Kimmage and Coalmine. We take time to understand your vision &ndash; no pressure, no obligation.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* --- OUR JOURNEY SECTION --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom, Gap 56px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[40px] lg:gap-[56px] lg:px-[80px] lg:py-[80px]">
          
          {/* Heading Container: 1280px Max Width */}
          <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
            {/* Heading: Host Grotesk 500 Medium, 56px, 105% Line Height */}
            <h2 className="text-[32px] font-medium leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Our Journey
            </h2>
          </div>

          {/* Timeline Container: Horizontal Flow, 1185px Fixed Width, 24px Gap */}
          <div className="mt-[40px] flex w-full max-w-[1200px] flex-col gap-[32px] sm:flex-row sm:flex-wrap sm:justify-center lg:mt-0 lg:flex-nowrap lg:justify-between lg:gap-[24px]">
            
            {/* Timeline Items */}
            {[
              {
                year: "1985",
                desc: "Greg Snr. opens Gallery 23 in Kimmage — establishing a reputation for quality.",
              },
              {
                year: "1995",
                desc: "Expansion into conservation framing and archival services for Dublin galleries.",
              },
              {
                year: "2006",
                desc: "Greg Jnr. joins, introducing digital printing and modern design.",
              },
              {
                year: "2019",
                desc: "Launch of online print shop and quote system, serving all of Ireland.",
              },
              {
                year: "2024",
                desc: "Coalmine location opens. Sustainable framing becomes core commitment.",
              },
            ].map((item, index) => (
              /* Item Container: 220px Fixed Width, Vertical Flow, 16px Gap */
              <div key={index} className="flex flex-col items-start gap-[16px] sm:w-[220px]">
                
                {/* Year: Host Grotesk 700 Bold, 40px, 115% Line Height, Color #555555 */}
                <h3 className="text-[32px] font-bold leading-[1.15] text-[#555555] sm:text-[40px]">
                  {item.year}
                </h3>
                
                {/* Timeline Graphic Container */}
                <div className="flex w-full items-center gap-[8px]">
                  {/* Dot: 12x12, 6px Radius, #295B42 */}
                  <div className="size-[12px] shrink-0 rounded-full bg-[#295b42]" />
                  {/* Line: 4px Height, 2px Radius, #D5D5D5 */}
                  <div className="h-[4px] w-full rounded-[2px] bg-[#d5d5d5]" />
                </div>

                {/* Description: Host Grotesk 400 Regular, 14px, 150% Line Height, Color #555555 */}
                <p className="text-[14px] font-normal leading-[1.5] text-[#555555]">
                  {item.desc}
                </p>

              </div>
            ))}

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
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================

// Image asset for the About Us Hero section
const aboutHeroImg = "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=1920&q=85";

// ==========================================
// ABOUT US COMPONENT
// ==========================================

export default function AboutUsComponent() {
  // Reference & Scroll Progress hook for the Journey section line animation
  const journeyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scroll animation for a sleek progress fill
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f3eb] text-[#161616]">
      
      {/* --- REUSABLE HEADER --- */}
      <Header />

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- ABOUT US HERO SECTION --- */}
        {/* Figma: 1440px Width, 643px Fixed Height, 80px Padding */}
        <section className="relative flex h-[520px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[56px] sm:h-[643px] lg:px-[80px] lg:py-[80px]">
          
          {/* 1. Background Image (z-0) using CSS Background for bulletproof rendering */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${aboutHeroImg}')` }}
          />

          {/* 2. Dark Overlay (z-10) - Figma spec: #000000 at 65% opacity */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.65]" />

          {/* 3. Inner Content Container (z-20) - 1000px Max Width, Vertical Flow, 16px Gap */}
          <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-[12px] text-center text-white sm:gap-[16px]">
            
            {/* Heading 1: Host Grotesk 700 Bold, 64px, 110% Line Height, 924px Max Width, Center Aligned */}
            <h1 className="w-full max-w-[924px] text-[30px] font-bold leading-[1.15] sm:text-[48px] sm:leading-[1.1] lg:text-[64px]">
              Our Lineage: Dublin&apos;s Framing Legacy Since 1985
            </h1>

            {/* Subtitle: Host Grotesk 400 Regular, 18px, 140% Line Height, 700px Max Width, 80% Opacity */}
            <p className="w-full max-w-[700px] text-[14px] font-normal leading-[1.5] text-white/80 sm:text-[18px] sm:leading-[1.4]">
              For nearly four decades, Gallery 23 has been at the heart of Dublin&apos;s art and framing community. What began as a small family workshop in Kimmage has grown into one of Ireland&apos;s most respected custom framing studios.
            </p>

          </div>
        </section>

        {/* --- MEET THE GREGS SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom/Left/Right, Gap 64px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[48px] lg:flex-row lg:items-center lg:justify-center lg:gap-[64px] lg:px-[80px] lg:py-[80px]">
          
          {/* Left Container (Images): 480px Fixed Width, 567px Hug Height */}
          <div className="relative mb-[40px] h-[400px] w-full max-w-[340px] shrink-0 sm:h-[567px] sm:max-w-[480px] lg:mb-0 lg:w-[480px]">
            
            {/* Big Image (Founder / Sr. Greg) */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
              alt="Greg Thompson Sr. in his workshop"
              className="absolute inset-0 h-full w-full rounded-[12px] object-cover"
            />

            {/* Overlapping Small Image (Jr. Greg) - Width 260px, Height 320px, Radius 12px, Custom Shadow */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85"
              alt="Greg Jr. portrait"
              className="absolute bottom-[-20px] right-[-20px] h-[220px] w-[180px] rounded-[12px] object-cover shadow-[0_10px_24px_-8px_rgba(0,0,0,0.08)] sm:bottom-[-40px] sm:right-[-40px] sm:h-[320px] sm:w-[260px]"
            />
          </div>

          {/* Right Container (Text Content): 736px Fill Width, Vertical Flow, 32px Gap */}
          <div className="flex w-full max-w-[736px] flex-col gap-[24px] sm:gap-[32px]">
            
            {/* Heading: Host Grotesk 500 Medium, 48px, 110% Line Height, -1.5% Tracking */}
            <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-[#161616] sm:text-[40px] sm:leading-[1.1] lg:text-[48px]">
              Meet the Gregs &ndash; Father &amp; Son
            </h2>

            {/* Paragraphs Container: Host Grotesk 400 Regular, 18px, 140% Line Height */}
            <div className="flex flex-col gap-[16px] text-[15px] font-normal leading-[1.5] text-[#161616] sm:text-[18px] sm:leading-[1.4]">
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
            <div className="border-l-[4px] border-[#295b42] pl-[16px] sm:pl-[24px]">
              <p className="text-[17px] italic leading-[1.3] text-[#161616] sm:text-[24px] sm:leading-[1.2]">
                &quot;My father taught me that a great frame doesn&apos;t just hold art &ndash; it becomes part of the story. That&apos;s what we carry forward every day.&quot; &ndash; Greg Jr.
              </p>
            </div>

          </div>

        </section>

        {/* --- WHAT WE STAND FOR SECTION --- */}
        <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] pb-[56px] pt-[48px] lg:gap-[56px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1920&q=85')` }}
          />

          <div className="absolute inset-0 z-10 bg-[#000000]/[0.60]" />

          <div className="relative z-20 flex w-full max-w-[920px] flex-col items-center gap-[12px] text-center mb-[32px] sm:gap-[16px] lg:mb-0">
            <h2 className="w-full text-[28px] font-bold leading-[1.15] tracking-[0px] text-white sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              What We Stand For
            </h2>

            <p className="w-full text-[14px] font-normal leading-[1.5] text-[#999999] sm:text-[16px]">
              Four principles that guide every frame, every material choice, and every conversation.
            </p>
          </div>

          <div className="relative z-20 flex w-full max-w-[1200px] flex-col gap-[20px] sm:gap-[24px]">
            <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
              <div className="flex flex-1 flex-col items-start gap-[16px] rounded-[20px] border border-[#d5d5d5] bg-white p-[24px] sm:gap-[20px] sm:p-[32px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold text-[#161616] sm:text-[20px]">Master Craftsmanship</h3>
                  <p className="text-[14px] font-medium leading-[1.5] text-[#555] sm:text-[15px]">
                    Every frame is hand-cut, joined, and finished by experienced craftsmen in our Dublin workshop. We never outsource.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-start gap-[16px] rounded-[20px] border border-[#d5d5d5] bg-white p-[24px] sm:gap-[20px] sm:p-[32px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold text-[#161616] sm:text-[20px]">Preservation &amp; Conservation</h3>
                  <p className="text-[14px] font-medium leading-[1.5] text-[#555] sm:text-[15px]">
                    Museum-standard acid-free materials, UV-filtering glass, and reversible mounting to protect your most valuable artworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
              <div className="flex flex-col items-start gap-[16px] rounded-[20px] border border-[#d5d5d5] bg-white p-[24px] sm:gap-[20px] sm:p-[32px] lg:w-[420px] lg:shrink-0">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 014 13c0-3.866 3.134-7 7-7h1a7 7 0 017 7c0 3.866-3.134 7-7 7v0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 20v-5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold text-[#161616] sm:text-[20px]">Sustainability</h3>
                  <p className="text-[14px] font-medium leading-[1.5] text-[#555] sm:text-[15px]">
                    Sustainable timber sourcing, recycled packaging, and eco-friendly workshop practices to minimise our environmental footprint.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-start gap-[16px] rounded-[20px] border border-[#d5d5d5] bg-white p-[24px] sm:gap-[20px] sm:p-[32px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#161616] text-white">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] font-bold text-[#161616] sm:text-[20px]">Client-First Service</h3>
                  <p className="text-[14px] font-medium leading-[1.5] text-[#555] sm:text-[15px]">
                    Free expert consultations at Kimmage and Coalmine. We take time to understand your vision &ndash; no pressure, no obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- OUR JOURNEY SECTION (WITH ANIMATED ON-SCROLL PROGRESS LINE) --- */}
{/* --- OUR JOURNEY SECTION (PERFECTLY SYNCHRONIZED HIGHLIGHT) --- */}
        <section ref={journeyRef} className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[48px] lg:gap-[56px] lg:px-[80px] lg:py-[80px]">
          
          {/* Heading Container */}
          <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
            <h2 className="text-[28px] font-medium leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Our Journey
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="mt-[32px] flex w-full max-w-[1200px] flex-col gap-[32px] sm:mt-[40px] sm:flex-row sm:flex-wrap sm:justify-center lg:mt-0 lg:flex-nowrap lg:justify-between lg:gap-[24px]">
            
            {/* Timeline Items */}
            {[
              {
                year: "1985",
                desc: "Greg Snr. opens Gallery 23 in Kimmage — establishing a reputation for quality.",
                point: 0.05,
              },
              {
                year: "1995",
                desc: "Expansion into conservation framing and archival services for Dublin galleries.",
                point: 0.28,
              },
              {
                year: "2006",
                desc: "Greg Jnr. joins, introducing digital printing and modern design.",
                point: 0.52,
              },
              {
                year: "2019",
                desc: "Launch of online print shop and quote system, serving all of Ireland.",
                point: 0.76,
              },
              {
                year: "2024",
                desc: "Coalmine location opens. Sustainable framing becomes core commitment.",
                point: 0.95,
              },
            ].map((item, index) => {
              // Smoothly transition color & opacity dynamically based on line position
              // Points slightly before and after item.point trigger a smooth gradient fade
              const yearColor = useTransform(
                scrollYProgress,
                [item.point - 0.1, item.point],
                ["#a3a3a3", "#161616"]
              );

              const descOpacity = useTransform(
                scrollYProgress,
                [item.point - 0.1, item.point],
                [0.35, 1]
              );

              const descColor = useTransform(
                scrollYProgress,
                [item.point - 0.1, item.point],
                ["#888888", "#555555"]
              );

              return (
                <div key={index} className="flex flex-col items-start gap-[16px] sm:w-[220px]">
                  
                  {/* Year with Synchronized Color Transformation */}
                  <motion.h3 
                    style={{ color: yearColor }}
                    className="text-[28px] font-bold leading-[1.15] sm:text-[40px]"
                  >
                    {item.year}
                  </motion.h3>
                  
                  {/* Timeline Dot & Center Line Container */}
                  <div className="relative flex w-full items-center">
                    
                    {/* Full Track & Progress Line passing through exact center of dots */}
                    {index === 0 && (
                      <div className="absolute top-1/2 left-[6px] right-[-964px] z-0 hidden h-[4px] -translate-y-1/2 rounded-[2px] bg-[#d5d5d5] lg:block">
                        <motion.div 
                          className="h-full origin-left rounded-[2px] bg-[#295b42]" 
                          style={{ scaleX }} 
                        />
                      </div>
                    )}

                    {/* Dot: Positioned with z-10 so the line passes through its center underneath */}
                    <div className="relative z-10 size-[12px] shrink-0 rounded-full bg-[#295b42]" />

                    {/* Mobile Track Line Fallback */}
                    <div className="ml-[8px] h-[4px] w-full rounded-[2px] bg-[#d5d5d5] lg:hidden" />
                  </div>

                  {/* Description with Synchronized Opacity & Color Transformation */}
                  <motion.p 
                    style={{ opacity: descOpacity, color: descColor }}
                    className="text-[14px] font-normal leading-[1.5]"
                  >
                    {item.desc}
                  </motion.p>

                </div>
              );
            })}

          </div>

        </section>

        {/* --- THE TEAM SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#161616] px-[24px] py-[48px] lg:gap-[64px] lg:px-[80px] lg:py-[120px]">
          <div className="flex w-full max-w-[1280px] flex-row items-end justify-between mb-[24px] lg:mb-0">
            <h2 className="text-[26px] font-medium leading-[1.15] text-white sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              The Gallery23 Team
            </h2>

            <div className="hidden pb-[12px] lg:flex lg:gap-[16px]">
              <button className="flex size-[48px] items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:size-[56px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="flex size-[48px] items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white/10 sm:size-[56px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid w-full max-w-[1280px] grid-cols-2 gap-x-[12px] gap-y-[24px] lg:flex lg:gap-[24px] lg:overflow-x-auto lg:pb-[24px]">
            {[
              {
                name: "Greg Thompson Sr.",
                role: "Founder & Master Craftsman",
                desc: "Started it all in 1985 with passion and precision.",
                img: "https://images.unsplash.com/photo-1533227260879-109010c75c81?auto=format&fit=crop&w=800&q=85",
              },
              {
                name: "Greg Thompson Jr.",
                role: "Co-Owner & Lead Designer",
                desc: "Carrying the family legacy into the modern era.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
              },
              {
                name: "David Chen",
                role: "Restoration Specialist",
                desc: "With us for 15 years, a true artisan.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
              },
              {
                name: "Emma Rodriguez",
                role: "Customer Experience",
                desc: "Making every visit feel like family.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
              },
            ].map((member, index) => (
              <article key={index} className="flex w-full flex-col gap-[12px] sm:gap-[20px] lg:w-[302px] lg:shrink-0">
                <div className="relative h-[180px] w-full overflow-hidden rounded-[12px] sm:h-[340px] lg:h-[402px]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <button className="absolute bottom-[10px] left-[10px] text-white hover:text-white/80 sm:bottom-[16px] sm:left-[16px]">
                    <svg className="size-[18px] sm:size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-[10px] sm:gap-[16px]">
                  <div className="flex flex-col gap-[4px] sm:gap-[6px]">
                    <h3 className="text-[16px] font-bold leading-[1.2] text-white sm:text-[20px] lg:text-[24px]">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-medium uppercase leading-[1.4] tracking-[0.05em] text-[#84a59d] sm:text-[12px] sm:leading-[1.5] lg:text-[14px]">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-[12px] font-normal leading-[1.4] text-[#999999] sm:text-[16px] sm:leading-[1.5]">
                    {member.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[24px] flex items-center justify-center gap-[16px] lg:hidden">
            <button className="flex size-[48px] items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="flex size-[48px] items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white/10">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#295b42] px-[24px] py-[48px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-[48px] lg:px-[80px] lg:py-[80px]">
          <div className="relative mb-[32px] h-[320px] w-full max-w-[471px] shrink-0 overflow-hidden rounded-[24px] sm:h-[500px] lg:mb-0 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=85"
              alt="Visitors at an art exhibition"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex w-full max-w-[761px] flex-col gap-[32px] sm:gap-[48px]">
            <h2 className="text-[28px] font-medium leading-[1.15] text-white sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-[16px]">
              {[
                {
                  q: "Do I need an appointment?",
                  a: "Walk-ins are always welcome! However, if you'd like dedicated one-on-one time with a designer, we recommend booking a free consultation.",
                },
                {
                  q: "How long does custom framing take?",
                  a: "Most projects are completed within 2–3 weeks. Rush orders are available for an additional fee.",
                },
                {
                  q: "What can you frame?",
                  a: "Almost anything — artwork, photos, jerseys, medals, diplomas, memorabilia, shadow boxes, and more. If it's meaningful to you, we can frame it.",
                },
                {
                  q: "Do you offer delivery?",
                  a: "Yes! We offer local delivery for framed pieces. Ask about our white-glove installation service for larger works.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, cash, and offer payment plans for larger projects.",
                },
              ].map((faq, index) => (
                <article key={index} className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[20px] sm:gap-[16px] sm:p-[30px]">
                  <div className="flex items-start justify-between gap-[16px]">
                    <h3 className="text-[17px] font-semibold leading-[1.25] text-[#161616] sm:text-[24px] sm:leading-[1.2]">
                      {faq.q}
                    </h3>
                    <button className="mt-[4px] shrink-0 text-[#161616] sm:mt-[6px]">
                      <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-[14px] font-normal leading-[1.5] text-[#555] sm:text-[16px]">
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRESERVING MEMORIES (CTA) SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[56px] lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[854px] flex-col items-center text-center gap-[32px] sm:gap-[48px]">
            <div className="flex flex-col items-center gap-[16px] sm:gap-[24px]">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#161616] sm:text-[48px] sm:leading-[1.1] lg:text-[56px]">
                Preserving Memories <span className="text-[#295b42]">for Art Lovers like you</span>
              </h2>
              
              <p className="max-w-[700px] text-[14px] font-normal leading-[1.5] text-[#555] sm:text-[16px]">
                From museum-quality framing to archival canvas prints, our expert team at Gallery 23 helps you protect your most treasured pieces and elevate your home with curated art.
              </p>
            </div>

            <button className="w-full rounded-full bg-[#161616] px-[40px] py-[16px] text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800 sm:w-auto sm:text-[14px]">
              Book a Consultation
            </button>

            <div className="flex flex-row items-center justify-center gap-[16px]">
              <div className="flex h-[32px] w-[80px] -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=85"
                  alt="Collector 1"
                  className="relative z-10 size-[32px] rounded-full border-[2px] border-[#f5f0eb] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=85"
                  alt="Collector 2"
                  className="relative z-20 size-[32px] rounded-full border-[2px] border-[#f5f0eb] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=85"
                  alt="Collector 3"
                  className="relative z-30 size-[32px] rounded-full border-[2px] border-[#f5f0eb] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=85"
                  alt="Collector 4"
                  className="relative z-40 size-[32px] rounded-full border-[2px] border-[#f5f0eb] object-cover"
                />
              </div>

              <p className="text-[13px] font-medium leading-[1.4] text-[#161616] sm:text-[14px] sm:leading-[1.5]">
                Trusted by collectors and artists across Ireland
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
      
    </div>
  );
}
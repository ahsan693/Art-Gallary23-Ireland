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
        {/* --- JERSEY FRAMING SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #F5F0EB, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Image Container: 600px Width, 450px Height */}
          <div className="relative h-[300px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
            {/* Using a standard <img> tag for immediate rendering. */}
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=85"
              alt="Framed sports jersey in a custom shadow box"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Right Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="mt-8 flex w-full max-w-[600px] flex-col items-start gap-[24px] lg:mt-0">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[32px] font-semibold leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Jersey Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height, 75% Opacity */}
            <p className="w-full max-w-[600px] text-[16px] font-medium leading-[1.4] text-[#161616]/75 sm:text-[18px]">
              Display your prized sports jerseys and memorabilia in custom-built shadow box frames. UV-protective glass keeps colors vibrant for years.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

        </section>
        {/* --- CANVAS PRINTS SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #FFFFFF, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="flex w-full max-w-[600px] flex-col items-start gap-[24px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[32px] font-semibold leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Canvas Prints
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height */}
            <p className="w-full max-w-[600px] text-[16px] font-medium leading-[1.4] text-[#555] sm:text-[18px]">
              Transform your favorite photos into stunning canvas prints. We offer gallery-wrapped and framed canvas options in any size. Best offer for new visitors
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

          {/* Right Image Container: 600px Width, 450px Height */}
          <div className="relative mt-8 h-[300px] w-full max-w-[600px] shrink-0 sm:h-[450px] lg:mt-0">
            {/* Using a standard <img> tag for immediate rendering. */}
            <img
              src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=85"
              alt="Woman hanging framed canvas prints on a wall"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </section>
        {/* --- SHADOW BOX FRAMING SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #F5F0EB, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Image Container: 600px Width, 450px Height */}
          <div className="relative h-[300px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
            {/* Using a standard <img> tag for immediate rendering. */}
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&w=800&q=85"
              alt="Woman hanging an orange shadow box frame on a gallery wall"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Right Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="mt-8 flex w-full max-w-[600px] flex-col items-start gap-[24px] lg:mt-0">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[32px] font-semibold leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Shadow Box Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height, 75% Opacity */}
            <p className="w-full max-w-[600px] text-[16px] font-medium leading-[1.4] text-[#161616]/75 sm:text-[18px]">
              Create dimensional displays for 3D objects, medals, collectibles, and keepsakes in beautifully crafted shadow boxes.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

        </section>
        {/* --- CERTIFICATE & AWARD FRAMING SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #FFFFFF, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="flex w-full max-w-[600px] flex-col items-start gap-[24px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[32px] font-semibold leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Certificate &amp; Award Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height */}
            <p className="w-full max-w-[600px] text-[16px] font-medium leading-[1.4] text-[#555] sm:text-[18px]">
              Present your diplomas, certificates, and awards with the distinction they deserve. Professional framing for any document size.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

          {/* Right Image Container: 600px Width, 450px Height */}
          <div className="relative mt-8 h-[300px] w-full max-w-[600px] shrink-0 sm:h-[450px] lg:mt-0">
            {/* Using a standard <img> tag for immediate rendering. */}
            <img
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=85"
              alt="Hands holding a framed certificate"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </section>
        {/* --- PHOTO RESTORATION SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Background: #F5F0EB, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Image Container: 600px Width, 450px Height */}
          <div className="relative h-[300px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
            {/* Using a standard <img> tag for immediate rendering. */}
            <img
              src="https://images.unsplash.com/photo-1558599307-e818ce3eb685?auto=format&fit=crop&w=800&q=85"
              alt="Vintage black and white portraits"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Right Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="mt-8 flex w-full max-w-[600px] flex-col items-start gap-[24px] lg:mt-0">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[32px] font-semibold leading-[1.05] text-[#161616] sm:text-[48px] lg:text-[56px]">
              Photo Restoration
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height */}
            <p className="w-full max-w-[600px] text-[16px] font-medium leading-[1.4] text-[#555] sm:text-[18px]">
              Bring old or damaged photos back to life with our restoration services, then preserve them in archival-quality custom frames.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

        </section>
        {/* --- THE FRAMING JOURNEY SECTION --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Background: #161616, Padding: 80px Top/Bottom/Left/Right, Gap 56px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#161616] px-[24px] py-[40px] lg:gap-[56px] lg:px-[80px] lg:py-[80px]">
          
          {/* Title Container: 1280px Max Width */}
          <div className="flex w-full max-w-[1280px] flex-col items-center">
            {/* Heading: Host Grotesk SemiBold, 56px (scaled for mobile), White */}
            <h2 className="text-center text-[32px] font-semibold leading-[1.05] text-white sm:text-[48px] lg:text-[56px]">
              The framing journey
            </h2>
          </div>

          {/* Steps Container: Horizontal Flow, 1280px Fill, Gap 32px */}
          <div className="mt-[40px] grid w-full max-w-[1280px] grid-cols-1 gap-[32px] sm:grid-cols-2 lg:mt-0 lg:flex lg:flex-row lg:justify-between">
            
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "Visit our studio for expert assessment and material recommendations.",
              },
              {
                step: "2",
                title: "Material Selection",
                desc: "Choose from hundreds of mouldings, mats, and glazing options.",
              },
              {
                step: "3",
                title: "Expert Craftsmanship",
                desc: "Hand-cut, joined, and finished by our master craftsmen.",
              },
              {
                step: "4",
                title: "Collection",
                desc: "Pick up your completed piece or arrange secure local delivery.",
              },
            ].map((item) => (
              /* Individual Step Container: 296px Width, Vertical Flow, Gap 24px */
              <article key={item.step} className="flex flex-col items-center text-center lg:w-[296px] lg:gap-[24px]">
                
                {/* Step Number Circle: 56x56, #295B42 Background, 28px Radius */}
                <div className="mb-4 flex size-[56px] shrink-0 items-center justify-center rounded-full bg-[#295b42] text-[20px] font-bold text-white lg:mb-0">
                  {item.step}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center gap-[12px]">
                  <h3 className="text-[20px] font-bold text-white">
                    {item.title}
                  </h3>
                  {/* Description: Host Grotesk 500 Medium, 16px, 150% Line Height, Center Aligned */}
                  <p className="text-[16px] font-medium leading-[1.5] text-[#d5d5d5]">
                    {item.desc}
                  </p>
                </div>

              </article>
            ))}

          </div>
        </section>

      </main>

      {/* --- REUSABLE FOOTER --- */}
      <Footer />
      
    </div>
  );
}
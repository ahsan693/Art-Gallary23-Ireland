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
        <section className="relative flex h-[520px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[56px] sm:h-[600px] lg:px-[80px] lg:py-[80px]">
          
          {/* 1. Background Image (z-0) */}
          <img
            src={servicesHeroImg}
            alt="Expert framing and printing services workshop"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />

          {/* 2. Dark Overlay (z-10) - Figma spec: #000000 at 55% opacity */}
          <div className="absolute inset-0 z-10 bg-[#000000]/[0.55]" />

          {/* 3. Inner Content Container (z-20) - 900px Max Width, Vertical Flow, 20px Gap */}
          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[16px] text-center text-white sm:gap-[20px]">
            
            {/* Heading 1: Host Grotesk 700 Bold, 64px, 110% Line Height, Center Aligned */}
            <h1 className="w-full text-[32px] font-bold leading-[1.15] sm:text-[48px] sm:leading-[1.1] lg:text-[64px]">
              Our Expert Framing &amp; Printing Services
            </h1>

            {/* Subtitle: Host Grotesk 500 Medium, 20px, 140% Line Height, 700px Max Width */}
            <p className="w-full max-w-[700px] text-[14px] font-medium leading-[1.5] sm:text-[18px] sm:leading-[1.4] lg:text-[20px]">
              Dublin&apos;s most comprehensive range of professional framing services — every piece handcrafted by master framers with nearly 40 years of experience.
            </p>

          </div>
        </section>

        {/* --- PICTURE FRAMING SECTION --- */}
        {/* Figma Layout: Horizontal Flow, 1440px Fill, Padding: 60px Top/Bottom, 80px Left/Right, Gap 80px */}
        {/* Mobile shows image above text, so the section reverses column order below lg while keeping the original DOM order (text, then image) intact for desktop's row layout. */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center gap-[32px] bg-white px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="flex w-full max-w-[600px] flex-col items-start gap-[24px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height, 400px Max Width */}
            <h2 className="w-full max-w-[400px] text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Picture Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 600px Max Width */}
            <p className="w-full max-w-[600px] text-[15px] font-medium leading-[1.5] text-[#555] sm:text-[16px] sm:leading-[1.6]">
              Preserve and showcase your artwork, photographs, and prints with our custom picture framing. Choose from hundreds of frame styles, mats, and glass options.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

          {/* Right Image Container: 600px Width, 450px Height, Sharp Corners */}
          <div className="relative h-[260px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
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
          <div className="relative h-[260px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
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
            <h2 className="w-full text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Jersey Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height, 75% Opacity */}
            <p className="w-full max-w-[600px] text-[15px] font-medium leading-[1.5] text-[#161616]/75 sm:text-[18px] sm:leading-[1.4]">
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
        <section className="mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center gap-[32px] bg-white px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="flex w-full max-w-[600px] flex-col items-start gap-[24px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Canvas Prints
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height */}
            <p className="w-full max-w-[600px] text-[15px] font-medium leading-[1.5] text-[#555] sm:text-[18px] sm:leading-[1.4]">
              Transform your favorite photos into stunning canvas prints. We offer gallery-wrapped and framed canvas options in any size. Best offer for new visitors
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

          {/* Right Image Container: 600px Width, 450px Height */}
          <div className="relative h-[260px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
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
          <div className="relative h-[260px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
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
            <h2 className="w-full text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Shadow Box Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height, 75% Opacity */}
            <p className="w-full max-w-[600px] text-[15px] font-medium leading-[1.5] text-[#161616]/75 sm:text-[18px] sm:leading-[1.4]">
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
        <section className="mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center gap-[32px] bg-white px-[24px] py-[40px] lg:flex-row lg:justify-center lg:gap-[80px] lg:px-[80px] lg:py-[60px]">
          
          {/* Left Content Container: 600px Max Width, Vertical Flow, 24px Gap */}
          <div className="flex w-full max-w-[600px] flex-col items-start gap-[24px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="w-full text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Certificate &amp; Award Framing
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height */}
            <p className="w-full max-w-[600px] text-[15px] font-medium leading-[1.5] text-[#555] sm:text-[18px] sm:leading-[1.4]">
              Present your diplomas, certificates, and awards with the distinction they deserve. Professional framing for any document size.
            </p>
            
            {/* Button */}
            <div className="pt-2">
              <Button dark>INQUIRE NOW</Button>
            </div>
          </div>

          {/* Right Image Container: 600px Width, 450px Height */}
          <div className="relative h-[260px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
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
          <div className="relative h-[260px] w-full max-w-[600px] shrink-0 sm:h-[450px]">
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
            <h2 className="w-full text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Photo Restoration
            </h2>
            
            {/* Subtitle: Host Grotesk 500 Medium, 18px, 140% Line Height */}
            <p className="w-full max-w-[600px] text-[15px] font-medium leading-[1.5] text-[#555] sm:text-[18px] sm:leading-[1.4]">
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
            <h2 className="text-center text-[28px] font-semibold leading-[1.15] text-white sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              The framing journey
            </h2>
          </div>

          {/* Steps Container: Horizontal Flow, 1280px Fill, Gap 32px */}
          <div className="mt-[32px] grid w-full max-w-[1280px] grid-cols-2 gap-x-[16px] gap-y-[32px] sm:mt-[40px] sm:gap-[32px] lg:mt-0 lg:flex lg:flex-row lg:justify-between">
            
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
              <article key={item.step} className="flex flex-col items-center gap-[12px] text-center lg:w-[296px] lg:gap-[24px]">
                
                {/* Step Number Circle: 56x56, #295B42 Background, 28px Radius */}
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#295b42] text-[16px] font-bold text-white sm:size-[56px] sm:text-[20px]">
                  {item.step}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center gap-[8px] sm:gap-[12px]">
                  <h3 className="text-[16px] font-bold text-white sm:text-[20px]">
                    {item.title}
                  </h3>
                  {/* Description: Host Grotesk 500 Medium, 16px, 150% Line Height, Center Aligned */}
                  <p className="text-[13px] font-medium leading-[1.4] text-[#d5d5d5] sm:text-[16px] sm:leading-[1.5]">
                    {item.desc}
                  </p>
                </div>

              </article>
            ))}

          </div>
        </section>
        {/* --- INQUIRE NOW FORM SECTION --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom, 120px Left/Right */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[16px] py-[40px] sm:px-[24px] lg:px-[120px] lg:py-[80px]">
          
          {/* Form Card: 900px Fixed Width, White BG, 32px Radius, 1px #D5D5D5 Border, 64px Padding, 40px Gap */}
          <div className="flex w-full max-w-[900px] flex-col items-center gap-[32px] rounded-[24px] border border-[#d5d5d5] bg-white p-[20px] sm:gap-[40px] sm:rounded-[32px] sm:p-[48px] lg:p-[64px]">
            
            {/* Form Header Content: 772px Fill, Vertical Flow, 12px Gap */}
            <div className="flex w-full max-w-[772px] flex-col items-center gap-[12px] text-center">
              <h2 className="text-[26px] font-bold tracking-tight text-[#161616] sm:text-[40px] lg:text-[48px]">
                Inquire Now
              </h2>
              <p className="text-[14px] leading-[1.6] text-[#555] sm:text-[16px]">
                Have questions about our services? Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>

            {/* Form Fields Container: 772px Fill, Vertical Flow, 20px Gap */}
            <form className="flex w-full max-w-[772px] flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: Horizontal Flow, 20px Gap */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                {/* Full Name */}
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="fullName" className="text-[13px] font-bold text-[#161616]">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your full name" 
                    className="h-[54px] w-full rounded-[12px] border border-[#d5d5d5] bg-[#fdfdfd] px-[16px] text-[14px] text-[#161616] placeholder-[#999] outline-none transition focus:border-[#295b42] focus:ring-1 focus:ring-[#295b42]" 
                  />
                </div>
                {/* Email Address */}
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="email" className="text-[13px] font-bold text-[#161616]">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    className="h-[54px] w-full rounded-[12px] border border-[#d5d5d5] bg-[#fdfdfd] px-[16px] text-[14px] text-[#161616] placeholder-[#999] outline-none transition focus:border-[#295b42] focus:ring-1 focus:ring-[#295b42]" 
                  />
                </div>
              </div>

              {/* Row 2: Horizontal Flow, 20px Gap */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                {/* Phone Number */}
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="phone" className="text-[13px] font-bold text-[#161616]">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    className="h-[54px] w-full rounded-[12px] border border-[#d5d5d5] bg-[#fdfdfd] px-[16px] text-[14px] text-[#161616] placeholder-[#999] outline-none transition focus:border-[#295b42] focus:ring-1 focus:ring-[#295b42]" 
                  />
                </div>
                {/* Service of Interest */}
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="service" className="text-[13px] font-bold text-[#161616]">Service of Interest</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      defaultValue=""
                      className="h-[54px] w-full appearance-none rounded-[12px] border border-[#d5d5d5] bg-[#fdfdfd] px-[16px] text-[14px] text-[#161616] outline-none transition focus:border-[#295b42] focus:ring-1 focus:ring-[#295b42]"
                    >
                      <option value="" disabled hidden>Select a service</option>
                      <option value="picture-framing">Picture Framing</option>
                      <option value="jersey-framing">Jersey Framing</option>
                      <option value="canvas-prints">Canvas Prints</option>
                      <option value="shadow-box">Shadow Box Framing</option>
                      <option value="certificate">Certificate & Award Framing</option>
                      <option value="photo-restoration">Photo Restoration</option>
                    </select>
                    {/* Custom Dropdown Chevron */}
                    <div className="pointer-events-none absolute inset-y-0 right-[16px] flex items-center">
                      <svg className="size-[16px] text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Field: Vertical Flow, 10px Gap */}
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="message" className="text-[13px] font-bold text-[#161616]">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="min-h-[140px] w-full resize-y rounded-[12px] border border-[#d5d5d5] bg-[#fdfdfd] p-[16px] text-[14px] text-[#161616] placeholder-[#999] outline-none transition focus:border-[#295b42] focus:ring-1 focus:ring-[#295b42]"
                ></textarea>
              </div>

              {/* Submit Row: Vertical Flow, 12px Gap */}
              <div className="mt-[12px] flex flex-col items-center gap-[12px]">
                {/* Submit Button: 772px Fill, 64px Hug, 12px Radius, #295B42 Background */}
                <button 
                  type="submit" 
                  className="h-[56px] w-full rounded-[12px] bg-[#295b42] text-[15px] font-bold text-white transition-colors hover:bg-[#204834] focus:outline-none focus:ring-2 focus:ring-[#295b42] focus:ring-offset-2 sm:h-[64px] sm:text-[16px]"
                >
                  Submit Inquiry
                </button>
                <p className="text-center text-[12px] font-medium text-[#777]">
                  All inquiries sent to info@g23.ie. Our commercial team responds within 24 hours.
                </p>
              </div>

            </form>
          </div>

        </section>
        {/* --- CONSULTATION / CTA SECTION --- */}
        {/* Figma Layout: 1440px Fill, 578px Fixed Height, Background Image with 50% Black Overlay */}
        <section className="relative mx-auto flex min-h-[440px] w-full max-w-[1440px] items-center justify-center overflow-hidden px-[16px] py-[40px] sm:min-h-[578px] sm:px-[24px] sm:py-0">
          
          {/* Background Image (z-0) */}
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85"
            alt="Living room with art and a framed gallery wall"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />

          {/* Dark Overlay (z-10) - #000000 at 50% opacity */}
          <div className="absolute inset-0 z-10 bg-black/50" />

          {/* Inner White Box (z-20) - 1050px Max Width, 12px Radius, 48px Top/Bottom Padding */}
          <div className="relative z-20 flex w-full max-w-[1050px] flex-col items-center rounded-[12px] bg-white px-[20px] py-[32px] text-center shadow-lg sm:px-[24px] sm:py-[48px]">
            
            {/* Heading: 826px Max Width */}
            <h2 className="w-full max-w-[826px] text-[24px] font-semibold leading-[1.2] tracking-[0px] text-black sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Book A Free Consultation Service.
            </h2>

            {/* Subtitle Container: 24px Top & Bottom Padding */}
            <div className="py-[16px] sm:py-[24px]">
              <p className="text-[14px] leading-normal text-[#161616] sm:text-[16px]">
                Get in touch with our friendly and knowledgeable team
              </p>
            </div>

            {/* Actions Container: 16px Top Padding */}
            <div className="pt-[8px] sm:pt-[16px]">
              {/* Horizontal Flow Container: 12px Gap */}
              <div className="flex w-full flex-col items-stretch justify-center gap-[12px] sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                
                {/* Phone Button: 48.5px Height, 100px Radius, 24px Left/Right Padding, 10px Gap */}
                <a
                  href="tel:0856314964"
                  className="inline-flex h-[48.5px] items-center justify-center gap-[10px] rounded-[100px] border border-black bg-black px-[24px] text-[14px] font-semibold text-white transition hover:bg-neutral-800"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span>(085) 631-4964</span>
                </a>

                {/* Email Button: 48.5px Height, 100px Radius, 24px Left/Right Padding, 10px Gap */}
                <a
                  href="mailto:hello@gallery23.com"
                  className="inline-flex h-[48.5px] items-center justify-center gap-[10px] rounded-[100px] border border-black bg-black px-[24px] text-[14px] font-semibold uppercase text-white transition hover:bg-neutral-800"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <span>SEND MESSAGE</span>
                </a>

              </div>
            </div>
          </div>
        </section>
        {/* --- FEATURES SECTION (WHY GALLERY 23) --- */}
        {/* Figma Layout: 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom, 120px Left/Right */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[40px] lg:px-[120px] lg:py-[80px]">
          
          {/* Inner Container: 1200px Max Width, Horizontal Flow, 80px Gap */}
          <div className="grid w-full max-w-[1200px] grid-cols-2 gap-x-[20px] gap-y-[32px] sm:gap-[40px] lg:flex lg:flex-row lg:justify-between lg:gap-[80px]">
            
            {/* Feature 1: 240px Width, Vertical Flow, 12px Gap */}
            <div className="flex flex-col items-start gap-[8px] sm:gap-[12px] lg:w-[240px]">
              <h3 className="text-[16px] font-bold leading-[1.3] text-[#295b42] sm:text-[20px] sm:leading-[1.4]">
                40 Years Expertise
              </h3>
              <p className="text-[13px] font-medium leading-[1.4] text-[#555] sm:text-[14px] sm:leading-[1.5]">
                Unrivalled technical knowledge passed down through generations.
              </p>
            </div>

            {/* Feature 2: 240px Width, Vertical Flow, 12px Gap */}
            <div className="flex flex-col items-start gap-[8px] sm:gap-[12px] lg:w-[240px]">
              <h3 className="text-[16px] font-bold leading-[1.3] text-[#295b42] sm:text-[20px] sm:leading-[1.4]">
                Sustainable Practices
              </h3>
              <p className="text-[13px] font-medium leading-[1.4] text-[#555] sm:text-[14px] sm:leading-[1.5]">
                Committed to eco-friendly materials and workshop waste reduction.
              </p>
            </div>

            {/* Feature 3: 240px Width, Vertical Flow, 12px Gap */}
            <div className="flex flex-col items-start gap-[8px] sm:gap-[12px] lg:w-[240px]">
              <h3 className="text-[16px] font-bold leading-[1.3] text-[#295b42] sm:text-[20px] sm:leading-[1.4]">
                500+ Mouldings
              </h3>
              <p className="text-[13px] font-medium leading-[1.4] text-[#555] sm:text-[14px] sm:leading-[1.5]">
                One of Ireland&apos;s largest selections of classic and modern frames.
              </p>
            </div>

            {/* Feature 4: 240px Width, Vertical Flow, 12px Gap */}
            <div className="flex flex-col items-start gap-[8px] sm:gap-[12px] lg:w-[240px]">
              <h3 className="text-[16px] font-bold leading-[1.3] text-[#295b42] sm:text-[20px] sm:leading-[1.4]">
                Free Consultations
              </h3>
              <p className="text-[13px] font-medium leading-[1.4] text-[#555] sm:text-[14px] sm:leading-[1.5]">
                No appointment needed for expert design advice from our team.
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
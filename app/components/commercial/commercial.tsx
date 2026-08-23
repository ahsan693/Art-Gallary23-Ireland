"use client";

import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================
const heroImg = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85";
const bulkFramingImg = "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=85";
const printingImg = "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=85";
const installationImg = "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=85";
const consultationImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85";

// ==========================================
// COMMERCIAL PAGE COMPONENT
// ==========================================
export default function CommercialPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#161616]">
      {/* --- HEADER --- */}
      <Header />

      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[520px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[56px] sm:h-[600px] lg:px-[80px] lg:py-[80px]">
          {/* Background */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImg}')` }}
          />
          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* Content */}
          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[16px] text-center text-white sm:gap-[24px]">
            <h1 className="w-full text-[30px] font-bold leading-[1.15] sm:text-[48px] sm:leading-[1.1] lg:text-[64px]">
              Commercial Framing &amp; Printing for Professionals
            </h1>
            <p className="w-full max-w-[750px] text-[14px] font-medium leading-[1.5] text-white/90 sm:text-[18px]">
              A dedicated portal for architects, interior designers, and corporate clients. Gallery 23 partners with Dublin&apos;s leading businesses and institutions for large-scale framing, printing, and installation projects.
            </p>
            <button className="mt-[4px] w-full rounded-full bg-white px-[32px] py-[14px] text-[13px] font-semibold text-[#161616] transition-colors hover:bg-gray-100 sm:mt-[8px] sm:w-auto sm:py-[16px] sm:text-[14px]">
              Request a Commercial Quote &rarr;
            </button>
          </div>
        </section>

      {/* --- 2. WHO WE SERVE SECTION --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom, 120px Left/Right, Gap 56px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[24px] py-[48px] lg:gap-[56px] lg:px-[120px] lg:py-[80px]">
          
          {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
          <h2 className="text-center text-[28px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px] mb-[32px] lg:mb-0">
            Who We Serve
          </h2>
          
          {/* Grid Container: Horizontal Flow, 1200px Fill, 24px Gap */}
          <div className="flex w-full max-w-[1200px] flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
            
            {/* Card 1: Interior Designers & Architects */}
            {/* 384px Width, 24px Radius, 1px Border, 40px Padding, 20px Gap */}
            <div className="flex flex-1 flex-col items-start gap-[16px] rounded-[24px] border border-[#d5d5d5] bg-[#f5f0eb] p-[24px] sm:gap-[20px] sm:p-[32px] lg:p-[40px]">
              
              {/* Icon Container: 64x64, 32px Radius, #295B42 Background */}
              <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[28px] bg-[#295b42] text-white sm:size-[64px] sm:rounded-[32px]">
                <svg className="size-[24px] sm:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              
              {/* Title: Host Grotesk 700 Bold, 24px, 120% Line Height */}
              <h3 className="text-[18px] font-bold leading-[1.25] text-[#161616] sm:text-[24px] sm:leading-[1.2]">
                Interior Designers &amp; Architects
              </h3>
              
              {/* Text: Host Grotesk 400 Regular, 16px, 150% Line Height */}
              <p className="text-[14px] font-normal leading-[1.5] text-[#555] sm:text-[16px]">
                Large-scale framing projects for hotels, restaurants, offices, and residential developments. Custom specifications, bulk ordering, and project consultation.
              </p>
            </div>

            {/* Card 2: Corporate & Institutional Clients */}
            <div className="flex flex-1 flex-col items-start gap-[16px] rounded-[24px] border border-[#d5d5d5] bg-[#f5f0eb] p-[24px] sm:gap-[20px] sm:p-[32px] lg:p-[40px]">
              <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[28px] bg-[#295b42] text-white sm:size-[64px] sm:rounded-[32px]">
                <svg className="size-[24px] sm:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.25] text-[#161616] sm:text-[24px] sm:leading-[1.2]">
                Corporate &amp; Institutional Clients
              </h3>
              <p className="text-[14px] font-normal leading-[1.5] text-[#555] sm:text-[16px]">
                Branded framing solutions, bulk certificate framing, office art installations, and corporate gift programmes.
              </p>
            </div>

            {/* Card 3: Professional Artists & Galleries */}
            <div className="flex flex-1 flex-col items-start gap-[16px] rounded-[24px] border border-[#d5d5d5] bg-[#f5f0eb] p-[24px] sm:gap-[20px] sm:p-[32px] lg:p-[40px]">
              <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[28px] bg-[#295b42] text-white sm:size-[64px] sm:rounded-[32px]">
                <svg className="size-[24px] sm:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold leading-[1.25] text-[#161616] sm:text-[24px] sm:leading-[1.2]">
                Professional Artists &amp; Galleries
              </h3>
              <p className="text-[14px] font-normal leading-[1.5] text-[#555] sm:text-[16px]">
                Exhibition-grade framing, canvas stretching, and archival printing services for galleries and solo shows.
              </p>
            </div>

          </div>
        </section>

     {/* --- 3. ALTERNATING FEATURES --- */}
        <div className="flex w-full flex-col items-center">
          
          {/* Feature 1: Bulk Custom Framing (Text Left, Image Right) | Background: White */}
          <section className="flex w-full justify-center bg-white px-[24px] py-[48px] lg:px-[120px] lg:py-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col-reverse items-center justify-between gap-[32px] lg:flex-row lg:gap-[80px]">
              
              {/* Text Container: 412px Width, Vertical Flow, 12px Gap */}
              <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0">
                {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
                <h2 className="text-[26px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
                  Bulk Custom Framing
                </h2>
                {/* Paragraph: Host Grotesk 400 Regular, 16px, 150% Line Height, #555555 */}
                <p className="text-[14px] font-normal leading-[1.5] text-[#555555] sm:text-[16px]">
                  Large volume orders with consistent quality across hundreds of frames. Ideal for hotel chains, office fit-outs, and property developments.
                </p>
                {/* Button: 48.5px Height, 100px Radius, Black */}
                <button className="mt-[8px] inline-flex h-[46px] items-center justify-center gap-[10px] rounded-full bg-black px-[24px] text-[13px] font-semibold text-white transition hover:bg-neutral-800 sm:mt-[12px] sm:h-[48.5px] sm:text-[14px]">
                  Get a Quote
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Image Container: 600px Width, 450px Height, 24px Radius */}
              <div className="h-[220px] w-full max-w-[600px] shrink-0 overflow-hidden rounded-[20px] sm:h-[450px] sm:rounded-[24px]">
                <img src={bulkFramingImg} alt="Bulk Custom Framing" className="h-full w-full object-cover" />
              </div>

            </div>
          </section>

          {/* Feature 2: Commercial Fine Art Printing (Image Left, Text Right) | Background: Cream */}
          <section className="flex w-full justify-center bg-[#f5f0eb] px-[24px] py-[48px] lg:px-[120px] lg:py-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col-reverse items-center justify-between gap-[32px] lg:flex-row-reverse lg:gap-[80px]">
              
              {/* Text Container: 412px Width, Vertical Flow, 12px Gap */}
              <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0">
                <h2 className="text-[26px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
                  Commercial Fine Art Printing
                </h2>
                <p className="text-[14px] font-normal leading-[1.5] text-[#555555] sm:text-[16px]">
                  High-volume giclée printing on archival papers and canvas. Perfect for interior design schemes and corporate art programmes.
                </p>
                <button className="mt-[8px] inline-flex h-[46px] items-center justify-center gap-[10px] rounded-full bg-black px-[24px] text-[13px] font-semibold text-white transition hover:bg-neutral-800 sm:mt-[12px] sm:h-[48.5px] sm:text-[14px]">
                  Get a Quote
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Image Container: 600px Width, 450px Height, 24px Radius */}
              <div className="h-[220px] w-full max-w-[600px] shrink-0 overflow-hidden rounded-[20px] sm:h-[450px] sm:rounded-[24px]">
                <img src={printingImg} alt="Commercial Fine Art Printing" className="h-full w-full object-cover" />
              </div>

            </div>
          </section>

          {/* Feature 3: Installation Services (Text Left, Image Right) | Background: White */}
          <section className="flex w-full justify-center bg-white px-[24px] py-[48px] lg:px-[120px] lg:py-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col-reverse items-center justify-between gap-[32px] lg:flex-row lg:gap-[80px]">
              
              {/* Text Container: 412px Width, Vertical Flow, 12px Gap */}
              <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0">
                <h2 className="text-[26px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
                  Installation Services
                </h2>
                <p className="text-[14px] font-normal leading-[1.5] text-[#555555] sm:text-[16px]">
                  Professional on-site installation for commercial spaces. Our team handles delivery, hanging, and placement with laser precision.
                </p>
                <button className="mt-[8px] inline-flex h-[46px] items-center justify-center gap-[10px] rounded-full bg-black px-[24px] text-[13px] font-semibold text-white transition hover:bg-neutral-800 sm:mt-[12px] sm:h-[48.5px] sm:text-[14px]">
                  Get a Quote
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Image Container: 600px Width, 450px Height, 24px Radius */}
              <div className="h-[220px] w-full max-w-[600px] shrink-0 overflow-hidden rounded-[20px] sm:h-[450px] sm:rounded-[24px]">
                <img src={installationImg} alt="Installation Services" className="h-full w-full object-cover" />
              </div>

            </div>
          </section>

          {/* Feature 4: Project Consultation (Image Left, Text Right) | Background: Cream */}
          <section className="flex w-full justify-center bg-[#f5f0eb] px-[24px] py-[48px] lg:px-[120px] lg:py-[80px]">
            <div className="flex w-full max-w-[1200px] flex-col-reverse items-center justify-between gap-[32px] lg:flex-row-reverse lg:gap-[80px]">
              
              {/* Text Container: 412px Width, Vertical Flow, 12px Gap */}
              <div className="flex w-full flex-col items-start gap-[12px] lg:w-[412px] lg:shrink-0">
                <h2 className="text-[26px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
                  Project Consultation
                </h2>
                <p className="text-[14px] font-normal leading-[1.5] text-[#555555] sm:text-[16px]">
                  Free consultations to scope your project requirements, timeline, and budget. We work directly with your design team.
                </p>
                <button className="mt-[8px] inline-flex h-[46px] items-center justify-center gap-[10px] rounded-full bg-black px-[24px] text-[13px] font-semibold text-white transition hover:bg-neutral-800 sm:mt-[12px] sm:h-[48.5px] sm:text-[14px]">
                  Get a Quote
                  <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Image Container: 600px Width, 450px Height, 24px Radius */}
              <div className="h-[220px] w-full max-w-[600px] shrink-0 overflow-hidden rounded-[20px] sm:h-[450px] sm:rounded-[24px]">
                <img src={consultationImg} alt="Project Consultation" className="h-full w-full object-cover" />
              </div>

            </div>
          </section>

        </div>

      {/* --- 4. TRUSTED BY LOGOS SECTION --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Background: #161616, Padding: 80px Top/Bottom, 120px Left/Right, Gap 48px */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#161616] px-[24px] py-[48px] lg:gap-[48px] lg:px-[120px] lg:py-[80px]">
          
          {/* Header Container: 1200px Max Width */}
          <div className="flex w-full max-w-[1200px] flex-col items-center text-center mb-[24px] lg:mb-0">
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height, White */}
            <h2 className="text-[26px] font-semibold leading-[1.15] text-white sm:text-[40px] sm:leading-[1.1] lg:text-[56px] lg:leading-[1.05]">
              Trusted by Leading Businesses
            </h2>
          </div>
          
          {/* Cards Grid Container: Horizontal Flow, 1200px Max Width, 24px Gap */}
          <div className="flex w-full max-w-[1200px] flex-col gap-[20px] sm:gap-[24px] lg:flex-row">
            
            {/* Card 1: Forbes */}
            {/* 384px Width, Vertical Flow, 20px Gap */}
            <div className="flex flex-1 flex-col items-start gap-[16px] sm:gap-[20px] lg:w-[384px]">
              {/* Logo Container: 161px Height, 16px Radius, White BG */}
              <div className="flex h-[120px] w-full items-center justify-center rounded-[16px] bg-white p-[20px] sm:h-[161px] sm:p-[24px]">
                {/* Fallback styling for Forbes logo */}
                <span className="font-serif text-[42px] font-bold tracking-tighter text-black sm:text-[56px]">Forbes</span>
              </div>
              {/* Text Content */}
              <div className="flex flex-col gap-[4px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white">Forbes</p>
                {/* Title: Host Grotesk 600 SemiBold, 20px, 140% Line Height */}
                <h3 className="text-[16px] font-semibold leading-[1.4] text-white sm:text-[20px]">
                  The Shelbourne Hotel Suite Refresh
                </h3>
              </div>
            </div>

            {/* Card 2: ELLE DECOR */}
            <div className="flex flex-1 flex-col items-start gap-[16px] sm:gap-[20px] lg:w-[384px]">
              <div className="flex h-[120px] w-full items-center justify-center rounded-[16px] bg-white p-[20px] sm:h-[161px] sm:p-[24px]">
                {/* Fallback styling for Elle Decor logo */}
                <span className="font-serif text-[28px] font-light tracking-widest text-[#555] sm:text-[40px]">
                  <span className="font-bold text-black">ELLE</span> DECOR
                </span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white">HOSPITALITY</p>
                <h3 className="text-[16px] font-semibold leading-[1.4] text-white sm:text-[20px]">
                  The Shelbourne Hotel Suite Refresh
                </h3>
              </div>
            </div>

            {/* Card 3: AD (Architectural Digest) */}
            <div className="flex flex-1 flex-col items-start gap-[16px] sm:gap-[20px] lg:w-[384px]">
              <div className="flex h-[120px] w-full items-center justify-center rounded-[16px] bg-white p-[20px] sm:h-[161px] sm:p-[24px]">
                {/* Fallback styling for AD logo */}
                <div className="flex flex-col items-center">
                   <span className="font-serif text-[48px] font-normal leading-none tracking-tighter text-black sm:text-[64px]">AD</span>
                   <span className="mt-[-4px] text-[7px] font-medium tracking-[0.2em] text-[#555] sm:text-[8px]">ARCHITECTURAL DIGEST</span>
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white">HOSPITALITY</p>
                <h3 className="text-[16px] font-semibold leading-[1.4] text-white sm:text-[20px]">
                  The Shelbourne Hotel Suite Refresh
                </h3>
              </div>
            </div>

          </div>
        </section>

      {/* --- 5. REQUEST A QUOTE FORM --- */}
        {/* Figma Layout: Vertical Flow, 1440px Fill, Background: #F5F0EB, Padding: 80px Top/Bottom, 120px Left/Right */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#f5f0eb] px-[16px] py-[56px] sm:px-[24px] lg:px-[120px] lg:py-[80px]">
          
          {/* Form Card Container: 900px Max Width, 32px Radius, 1px Border, 64px Padding, 40px Gap */}
          <div className="flex w-full max-w-[900px] flex-col items-center gap-[28px] rounded-[24px] border border-[#d5d5d5] bg-white p-[20px] sm:gap-[40px] sm:rounded-[32px] sm:p-[48px] lg:p-[64px]">
            
            {/* Heading: Host Grotesk 600 SemiBold, 56px, 105% Line Height */}
            <h2 className="text-center text-[26px] font-semibold leading-[1.15] text-[#161616] sm:text-[48px] sm:leading-[1.05] lg:text-[56px]">
              Request a Commercial Quote
            </h2>

            {/* Form Inner Container: 772px Max Width, Vertical Flow, 20px Gap */}
            <form className="flex w-full max-w-[772px] flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: Company Name & Contact Name (81px Height) */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] font-bold text-[#161616]">Company Name</label>
                  <input type="text" placeholder="e.g. O'Donnell Architects" className="h-[50px] w-full rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#295b42]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] font-bold text-[#161616]">Contact Name</label>
                  <input type="text" placeholder="Your Name..." className="h-[50px] w-full rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#295b42]" />
                </div>
              </div>

              {/* Row 2: Email Address & Project Type (81px Height) */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] font-bold text-[#161616]">Email Address</label>
                  <input type="email" placeholder="work@email.com" className="h-[50px] w-full rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#295b42]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] font-bold text-[#161616]">Project Type</label>
                  <select className="h-[50px] w-full rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] text-[#555] outline-none transition-colors focus:border-[#295b42]">
                    <option>Select...</option>
                    <option>Bulk Framing</option>
                    <option>Fine Art Printing</option>
                    <option>Installation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Project Description (191px Height Total) */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[14px] font-bold text-[#161616]">Project Description</label>
                <textarea 
                  placeholder="Tell us about your volume, materials, and timeline..." 
                  className="h-[150px] w-full resize-y rounded-[8px] border border-[#d5d5d5] bg-[#fcfcfc] p-[16px] text-[14px] outline-none transition-colors focus:border-[#295b42] focus:bg-white" 
                />
              </div>

              {/* File Upload Placeholder: 111px Height, Dashed Border, 24px Padding */}
              <div className="flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[8px] border border-dashed border-[#d5d5d5] bg-white p-[20px] transition-colors hover:bg-gray-50 sm:h-[111px] sm:gap-[10px] sm:p-[24px]">
                <svg className="size-[22px] text-[#295b42] sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p className="text-center text-[13px] text-[#555] sm:text-[14px]">Upload blueprints or project specs</p>
              </div>

              {/* Submit Area: 113px Hug Height, 16px Top Padding, 12px Gap */}
              <div className="mt-[4px] flex flex-col gap-[12px] pt-[16px]">
                {/* Submit Button: 65px Height, 12px Radius, #295B42 */}
                <button type="submit" className="flex h-[58px] w-full items-center justify-center rounded-[12px] bg-[#295b42] px-[20px] text-[15px] font-bold text-white transition-colors hover:bg-[#204834] sm:h-[65px] sm:text-[16px]">
                  Submit Commercial Enquiry
                </button>
                <p className="text-[12px] text-[#555555]">
                  All enquiries sent to info@gallery23.ie. Our commercial team responds within 24 hours.
                </p>
              </div>

            </form>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
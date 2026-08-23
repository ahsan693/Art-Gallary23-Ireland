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
        <section className="relative flex h-[600px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:px-[80px]">
          {/* Background */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImg}')` }}
          />
          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* Content */}
          <div className="relative z-20 flex w-full max-w-[900px] flex-col items-center gap-[24px] text-center text-white">
            <h1 className="w-full text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[64px]">
              Commercial Framing &amp; Printing for Professionals
            </h1>
            <p className="w-full max-w-[750px] text-[16px] font-medium leading-[1.5] text-white/90 sm:text-[18px]">
              A dedicated portal for architects, interior designers, and corporate clients. Gallery 23 partners with Dublin&apos;s leading businesses and institutions for large-scale framing, printing, and installation projects.
            </p>
            <button className="mt-[8px] rounded-full bg-white px-[32px] py-[16px] text-[14px] font-semibold text-[#161616] transition-colors hover:bg-gray-100">
              Request a Commercial Quote &rarr;
            </button>
          </div>
        </section>

        {/* --- 2. WHO WE SERVE SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[24px] py-[80px] lg:px-[120px] lg:py-[100px]">
          <h2 className="mb-[64px] text-center text-[36px] font-bold text-[#161616] sm:text-[48px]">
            Who We Serve
          </h2>
          
          <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[40px] md:grid-cols-3 lg:gap-[64px]">
            {/* Architects */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-[16px] rounded-[16px] bg-white p-[32px] shadow-sm">
              <div className="flex size-[48px] items-center justify-center rounded-full bg-[#eaf2ef] text-[#295b42]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#161616]">Interior Designers &amp; Architects</h3>
              <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                Large-scale framing projects for hotels, restaurants, offices, and residential developments. Custom specifications, bulk ordering, and project consultation.
              </p>
            </div>

            {/* Corporate */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-[16px] rounded-[16px] bg-white p-[32px] shadow-sm">
              <div className="flex size-[48px] items-center justify-center rounded-full bg-[#eaf2ef] text-[#295b42]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#161616]">Corporate &amp; Institutional Clients</h3>
              <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                Branded framing solutions, bulk certificate framing, office art installations, and corporate gift programmes.
              </p>
            </div>

            {/* Artists */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-[16px] rounded-[16px] bg-white p-[32px] shadow-sm">
              <div className="flex size-[48px] items-center justify-center rounded-full bg-[#eaf2ef] text-[#295b42]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#161616]">Professional Artists &amp; Galleries</h3>
              <p className="text-[15px] font-medium leading-[1.5] text-[#555]">
                Exhibition-grade framing, canvas stretching, and archival printing services for galleries and solo shows.
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. ALTERNATING FEATURES --- */}
        <section className="flex w-full max-w-[1440px] flex-col items-center gap-[80px] px-[24px] py-[40px] lg:px-[120px] lg:py-[80px]">
          
          {/* Feature 1: Text Left, Image Right */}
          <div className="flex w-full flex-col-reverse items-center justify-between gap-[48px] lg:flex-row lg:gap-[80px]">
            <div className="flex w-full max-w-[480px] flex-col items-start gap-[24px]">
              <h2 className="text-[32px] font-bold leading-[1.1] text-[#161616] sm:text-[40px]">Bulk Custom Framing</h2>
              <p className="text-[16px] font-medium leading-[1.5] text-[#555]">
                Large volume orders with consistent quality across hundreds of frames. Ideal for hotel chains, office fit-outs, and property developments.
              </p>
              <button className="rounded-full bg-[#161616] px-[28px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-neutral-800">
                Get a Quote &rarr;
              </button>
            </div>
            <div className="h-[360px] w-full max-w-[600px] overflow-hidden rounded-[24px]">
              <img src={bulkFramingImg} alt="Bulk Framing" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="flex w-full flex-col items-center justify-between gap-[48px] lg:flex-row lg:gap-[80px]">
            <div className="h-[360px] w-full max-w-[600px] overflow-hidden rounded-[24px]">
              <img src={printingImg} alt="Fine Art Printing" className="h-full w-full object-cover" />
            </div>
            <div className="flex w-full max-w-[480px] flex-col items-start gap-[24px]">
              <h2 className="text-[32px] font-bold leading-[1.1] text-[#161616] sm:text-[40px]">Commercial Fine Art Printing</h2>
              <p className="text-[16px] font-medium leading-[1.5] text-[#555]">
                High-volume giclée printing on archival papers and canvas. Perfect for interior design schemes and corporate art programmes.
              </p>
              <button className="rounded-full bg-[#161616] px-[28px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-neutral-800">
                Get a Quote &rarr;
              </button>
            </div>
          </div>

          {/* Feature 3: Text Left, Image Right */}
          <div className="flex w-full flex-col-reverse items-center justify-between gap-[48px] lg:flex-row lg:gap-[80px]">
            <div className="flex w-full max-w-[480px] flex-col items-start gap-[24px]">
              <h2 className="text-[32px] font-bold leading-[1.1] text-[#161616] sm:text-[40px]">Installation Services</h2>
              <p className="text-[16px] font-medium leading-[1.5] text-[#555]">
                Professional on-site installation for commercial spaces. Our team handles delivery, hanging, and placement with laser precision.
              </p>
              <button className="rounded-full bg-[#161616] px-[28px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-neutral-800">
                Get a Quote &rarr;
              </button>
            </div>
            <div className="h-[360px] w-full max-w-[600px] overflow-hidden rounded-[24px]">
              <img src={installationImg} alt="Installation Services" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Feature 4: Image Left, Text Right */}
          <div className="flex w-full flex-col items-center justify-between gap-[48px] lg:flex-row lg:gap-[80px]">
            <div className="h-[360px] w-full max-w-[600px] overflow-hidden rounded-[24px]">
              <img src={consultationImg} alt="Project Consultation" className="h-full w-full object-cover" />
            </div>
            <div className="flex w-full max-w-[480px] flex-col items-start gap-[24px]">
              <h2 className="text-[32px] font-bold leading-[1.1] text-[#161616] sm:text-[40px]">Project Consultation</h2>
              <p className="text-[16px] font-medium leading-[1.5] text-[#555]">
                Free consultations to scope your project requirements, timeline, and budget. We work directly with your design team.
              </p>
              <button className="rounded-full bg-[#161616] px-[28px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-neutral-800">
                Get a Quote &rarr;
              </button>
            </div>
          </div>

        </section>

        {/* --- 4. TRUSTED BY LOGOS --- */}
        <section className="flex w-full max-w-[1440px] flex-col items-center bg-[#161616] px-[24px] py-[80px] lg:px-[120px] lg:py-[100px]">
          <h2 className="mb-[48px] text-center text-[32px] font-bold text-white sm:text-[40px]">
            Trusted by Leading Businesses
          </h2>
          
          <div className="grid w-full max-w-[1000px] grid-cols-1 gap-[24px] sm:grid-cols-3">
            {/* Logo 1 */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex h-[120px] w-full items-center justify-center rounded-[12px] bg-white p-[24px]">
                {/* Fallback styling for Forbes logo */}
                <span className="font-serif text-[40px] font-bold tracking-tighter text-black">Forbes</span>
              </div>
              <div className="px-[4px]">
                <p className="text-[10px] uppercase tracking-widest text-[#999]">Media</p>
                <p className="text-[14px] font-medium text-white">Corporate Head Office Art Curation</p>
              </div>
            </div>

            {/* Logo 2 */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex h-[120px] w-full items-center justify-center rounded-[12px] bg-white p-[24px]">
                {/* Fallback styling for Elle Decor logo */}
                <span className="font-serif text-[36px] font-light tracking-widest text-black">ELLE DECOR</span>
              </div>
              <div className="px-[4px]">
                <p className="text-[10px] uppercase tracking-widest text-[#999]">Hospitality</p>
                <p className="text-[14px] font-medium text-white">The Shelbourne Hotel Suite Refresh</p>
              </div>
            </div>

            {/* Logo 3 */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex h-[120px] w-full items-center justify-center rounded-[12px] bg-white p-[24px]">
                {/* Fallback styling for AD logo */}
                <span className="font-serif text-[48px] font-normal tracking-tighter text-black">AD</span>
              </div>
              <div className="px-[4px]">
                <p className="text-[10px] uppercase tracking-widest text-[#999]">Hospitality</p>
                <p className="text-[14px] font-medium text-white">The Shelbourne Hotel Suite Refresh</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. REQUEST A QUOTE FORM --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[24px] py-[80px] lg:px-[120px] lg:py-[100px]">
          <div className="flex w-full max-w-[800px] flex-col items-center gap-[40px] rounded-[32px] bg-white p-[32px] shadow-sm sm:p-[48px] lg:p-[64px]">
            
            <h2 className="text-center text-[32px] font-bold text-[#161616] sm:text-[40px]">
              Request a Commercial Quote
            </h2>

            <form className="flex w-full flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Company Name</label>
                  <input type="text" placeholder="e.g. O'Connor Architects" className="h-[50px] rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none focus:border-[#295b42]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Contact Name</label>
                  <input type="text" placeholder="Your Name" className="h-[50px] rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none focus:border-[#295b42]" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Email Address</label>
                  <input type="email" placeholder="work@company.com" className="h-[50px] rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none focus:border-[#295b42]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Project Type</label>
                  <select className="h-[50px] rounded-[8px] border border-[#d5d5d5] bg-white px-[16px] text-[14px] outline-none focus:border-[#295b42]">
                    <option>Select...</option>
                    <option>Bulk Framing</option>
                    <option>Fine Art Printing</option>
                    <option>Installation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-bold text-[#161616]">Project Description</label>
                <textarea 
                  placeholder="Tell us about your volume, dimensions, and timeline..." 
                  className="min-h-[120px] resize-y rounded-[8px] border border-[#d5d5d5] bg-white p-[16px] text-[14px] outline-none focus:border-[#295b42]" 
                />
              </div>

              {/* File Upload Placeholder */}
              <div className="mt-[8px] flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[8px] border-2 border-dashed border-[#d5d5d5] bg-[#fcfcfc] transition hover:bg-gray-50">
                <svg className="size-[24px] text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p className="text-[13px] text-[#777]">Upload blueprints or project assets</p>
              </div>

              {/* Submit */}
              <div className="mt-[16px] flex flex-col gap-[12px]">
                <button type="submit" className="h-[56px] w-full rounded-[8px] bg-[#295b42] text-[16px] font-bold text-white transition hover:bg-[#204834]">
                  Submit Commercial Enquiry
                </button>
                <p className="text-center text-[12px] text-[#777]">
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
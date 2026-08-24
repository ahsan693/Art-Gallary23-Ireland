"use client";

import { useEffect, useRef, useState } from "react";
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// DATA & CONSTANTS
// ==========================================
const heroImg = "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&w=1920&q=85";
const statsImg = "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1920&q=85";
const faqImg = "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=85";
const ctaImg = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1920&q=85";

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
function AnimatedCounter({ 
  target, 
  suffix = "", 
  duration = 2000 
}: { 
  target: number; 
  suffix?: string; 
  duration?: number; 
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Smooth ease-out quad animation curve
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            
            setCount(Math.floor(easeOutProgress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <h3 ref={elementRef} className="text-[56px] font-bold leading-none sm:text-[64px]">
      {count.toLocaleString()}{suffix}
    </h3>
  );
}

// ==========================================
// MAIN CONTACT COMPONENT
// ==========================================
export default function ContactComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#161616]">
      {/* --- HEADER --- */}
      <Header />

      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[495px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[64px] lg:h-[600px] lg:px-[80px] lg:py-[80px]">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImg}')` }}
          />
          <div className="absolute inset-0 z-10 bg-black/50" />

          <div className="relative z-20 flex w-full max-w-[800px] flex-col items-center gap-[24px] text-center text-white">
            <h1 className="w-full text-[36px] font-semibold leading-[1.1] sm:text-[48px] sm:font-bold lg:text-[64px]">
              Let&apos;s Start a Conversation About Your Art.
            </h1>
            <p className="w-full max-w-[600px] text-[16px] font-normal leading-[1.5] text-white/90 sm:text-[18px] sm:font-medium">
              From curatorial advice to museum-grade preservation, our studio in the heart of Dublin is ready to assist with your next project.
            </p>
          </div>
        </section>

        {/* --- 2. CONTACT INFO & FORM SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[48px] px-[20px] py-[56px] lg:flex-row lg:justify-between lg:gap-[80px] lg:px-[120px] lg:py-[100px]">
          
          {/* Left: Contact Info */}
          <div className="flex w-full flex-col gap-[40px] lg:max-w-[480px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[36px] font-semibold leading-[1.1] text-[#161616] sm:text-[40px] sm:font-bold">
                Visit Our Studio
              </h2>
              <p className="text-[16px] font-normal leading-[1.5] text-[#555]">
                Located in a historic Georgian building overlooking Stephen&apos;s Green, Gallery23 is a dedicated space for art, framing, and conversation.
              </p>
            </div>

            <div className="flex flex-col gap-[32px]">
              {/* Address */}
              <div className="flex items-start gap-[16px]">
                <div className="mt-[4px] shrink-0 text-[#295b42]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <p className="text-[14px] font-bold text-[#161616]">NORTHSIDE</p>
                    <p className="text-[14px] text-[#555]">Unit 4 Coolport Porters Road<br/>Coolmine Blanchardstown D15DX3D</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#161616]">SOUTHSIDE</p>
                    <p className="text-[14px] text-[#555]">23 Sundrive Rd, Kimmage D12KF77</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-[16px]">
                <div className="mt-[4px] shrink-0 text-[#295b42]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#161616]">Phone</p>
                  <p className="text-[14px] text-[#555]">(085) 631-4964</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-[16px]">
                <div className="mt-[4px] shrink-0 text-[#295b42]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#161616]">Email</p>
                  <p className="text-[14px] text-[#555]">hello@gallery23.com</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-[16px]">
                <div className="mt-[4px] shrink-0 text-[#295b42]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#161616]">Opening Hours</p>
                  <p className="text-[14px] text-[#555]">Tues - Sat: 10:00 AM - 6:00 PM<br/>Sun: 12:00 PM - 4:00 PM<br/>Mon: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#161616]">Follow Us</p>
              <div className="flex gap-[16px]">
                <div className="flex size-[40px] cursor-pointer items-center justify-center rounded-full border border-[#d5d5d5] bg-white transition hover:bg-gray-50">
                  <span className="text-[14px] font-bold text-[#295b42]">IG</span>
                </div>
                <div className="flex size-[40px] cursor-pointer items-center justify-center rounded-full border border-[#d5d5d5] bg-white transition hover:bg-gray-50">
                  <span className="text-[14px] font-bold text-[#295b42]">FB</span>
                </div>
                <div className="flex size-[40px] cursor-pointer items-center justify-center rounded-full border border-[#d5d5d5] bg-white transition hover:bg-gray-50">
                  <span className="text-[14px] font-bold text-[#295b42]">IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:max-w-[600px]">
            <div className="flex w-full flex-col gap-[24px] rounded-[24px] bg-white p-[24px] shadow-sm sm:gap-[32px] sm:p-[48px]">
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[24px] font-bold text-[#161616]">Send a Message</h3>
                <p className="text-[14px] text-[#555]">Select a topic below for any inquiries or commercial projects. We&apos;ll be in touch shortly.</p>
              </div>

              <form className="flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Your Name</label>
                  <input type="text" placeholder="John Doe" className="h-[50px] rounded-[8px] border border-[#d5d5d5] px-[16px] text-[14px] outline-none focus:border-[#295b42]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Email Address</label>
                  <input type="email" placeholder="john.doe@email.com" className="h-[50px] rounded-[8px] border border-[#d5d5d5] px-[16px] text-[14px] outline-none focus:border-[#295b42]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Subject</label>
                  <select className="h-[50px] rounded-[8px] border border-[#d5d5d5] px-[16px] text-[14px] text-[#555] outline-none focus:border-[#295b42]">
                    <option>Inquiry about Custom Framing</option>
                    <option>Fine Art Printing</option>
                    <option>Commercial Projects</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-bold text-[#161616]">Message</label>
                  <textarea placeholder="Tell us more about your project..." className="h-[120px] resize-y rounded-[8px] border border-[#d5d5d5] p-[16px] text-[14px] outline-none focus:border-[#295b42]" />
                </div>
                <button type="submit" className="mt-[8px] h-[56px] w-full rounded-[12px] bg-[#295b42] text-[16px] font-bold text-white transition hover:bg-[#204834]">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </section>

        {/* --- 3. MAP SECTION --- */}
        <section className="relative mx-auto flex h-[454px] w-full max-w-[1440px] items-center justify-center overflow-hidden bg-[#eaf2ef] lg:h-[600px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.6930058694!2d-6.386008688537637!3d53.32432014169553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1714589000000!5m2!1sen!2sus" 
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Gallery 23 Map Location"
          />

          <div className="pointer-events-none relative z-10 flex h-full w-full max-w-[1280px] items-start px-[24px] py-[40px] lg:px-[80px] lg:py-[80px]">
            <div className="pointer-events-auto flex flex-col gap-[8px] rounded-[12px] bg-white p-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:gap-[12px] sm:p-[32px]">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#555]">
                GALLERY 23
              </h3>
              <p className="text-[15px] font-medium text-[#161616] sm:text-[16px]">
                23 Stephen&apos;s Green, Dublin 2
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-[4px] text-[13px] font-bold text-[#161616] underline decoration-2 underline-offset-4 transition-colors hover:text-[#295b42]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* --- 4. STATS SECTION (WITH ANIMATED NUMBERS) --- */}
        <section className="relative flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:px-[64px] lg:py-[196px]">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${statsImg}')` }} />
          <div className="absolute inset-0 z-10 bg-black/70" />

          <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-[48px] text-center text-white lg:gap-[64px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[36px] font-semibold leading-[1.1] sm:text-[56px] sm:font-bold lg:text-[64px]">
                Why Visit Gallery23
              </h2>
              <p className="text-[16px] text-[#d5d5d5] sm:text-[20px]">
                Because after visiting us...
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-[48px] sm:grid-cols-3 sm:gap-[24px]">
              {/* Stat 1: 98% */}
              <div className="flex flex-col items-center gap-[8px]">
                <AnimatedCounter target={98} suffix="%" />
                <p className="text-[12px] font-bold uppercase tracking-widest text-white">
                  Client Satisfaction
                </p>
                <p className="text-[14px] text-[#d5d5d5] sm:text-[16px]">
                  Rated 4.9 stars with 500+ reviews
                </p>
              </div>
              
              {/* Stat 2: 3,000+ */}
              <div className="flex flex-col items-center gap-[8px]">
                <AnimatedCounter target={3000} suffix="+" />
                <p className="text-[12px] font-bold uppercase tracking-widest text-white">
                  Projects Annually
                </p>
                <p className="text-[14px] text-[#d5d5d5] sm:text-[16px]">
                  Family photos to corporate installs
                </p>
              </div>
              
              {/* Stat 3: 40 */}
              <div className="flex flex-col items-center gap-[8px]">
                <AnimatedCounter target={40} />
                <p className="text-[12px] font-bold uppercase tracking-widest text-white">
                  Years of Expertise
                </p>
                <p className="text-[14px] text-[#d5d5d5] sm:text-[16px]">
                  Two generations of master framers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. FAQ SECTION --- */}
        <section className="mx-auto flex min-h-[844px] w-full max-w-[1440px] flex-col items-center gap-[32px] bg-[#f5f0eb] px-[24px] py-[56px] lg:min-h-0 lg:flex-row lg:items-stretch lg:justify-center lg:gap-[64px] lg:px-[120px] lg:py-[100px]">
          <div className="relative h-[220px] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[24px] sm:h-[500px] lg:h-auto">
            <img src={faqImg} alt="Gallery view" className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="flex w-full max-w-[680px] flex-col gap-[40px]">
            <h2 className="text-[36px] font-semibold leading-[1.1] text-[#161616] sm:text-[40px] sm:font-bold lg:text-[48px]">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-[16px]">
              {[
                { q: "Do I need an appointment?", a: "Walk-ins are always welcome! However, if you'd like dedicated one-on-one time with a designer, we recommend booking a free consultation." },
                { q: "How long does custom framing take?", a: "Most projects are completed within 2–3 weeks. Rush orders are available for an additional fee." },
                { q: "What can you frame?", a: "Almost anything — artwork, photos, jerseys, medals, diplomas, memorabilia, shadow boxes, and more. If it's meaningful to you, we can frame it." },
                { q: "Do you offer delivery?", a: "Yes! We offer local delivery for framed pieces. Ask about our white-glove installation service for larger works." },
                { q: "What payment methods do you accept?", a: "We accept all major credit cards, cash, and offer payment plans for larger projects." },
              ].map((faq, index) => (
                <article key={index} className="flex flex-col gap-[16px] rounded-[12px] border border-[#d5d5d5] bg-white p-[20px] sm:p-[32px]">
                  <div className="flex items-start justify-between gap-[16px]">
                    <h3 className="text-[17px] font-semibold leading-[1.2] text-[#161616] sm:text-[20px]">{faq.q}</h3>
                    <button className="mt-[2px] shrink-0 text-[#161616]">
                      <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>
                  <p className="text-[16px] font-normal leading-[1.5] text-[#555]">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. CTA SECTION --- */}
        <section className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:h-[565px] lg:min-h-0 lg:px-[80px] lg:py-[150px]">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${ctaImg}')` }} />
          <div className="absolute inset-0 z-10 bg-[#232323]/[0.72]" />

          <div className="relative z-20 flex w-full max-w-[700px] flex-col items-center gap-[28px] text-center text-white lg:gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="text-[36px] font-semibold leading-[1.05] sm:text-[48px] lg:text-[56px]">
                Ready to Frame Something Beautiful?
              </h2>
              <p className="text-[16px] font-normal leading-[1.5] text-white/90 sm:text-[18px] sm:leading-[1.4]">
                Book your free consultation today and let our experts help you preserve what matters most.
              </p>
            </div>

            <button className="flex h-[41px] w-[257px] items-center justify-center gap-[16px] rounded-full bg-[#295b42] text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-[#204834]">
              <span>Book Free Consultation</span>
              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
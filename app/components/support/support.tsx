"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// SVGS & HELPERS
// ==========================================

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "pin": return <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />;
    case "phone": return <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
    case "mail": return <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
    case "clock": return <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
    default: return null;
  }
};

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
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
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutProgress * target));
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(target);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <h3 ref={elementRef} className="heading-display text-white leading-none">
      {count.toLocaleString()}{suffix}
    </h3>
  );
}

// ==========================================
// MAIN CONTACT COMPONENT
// ==========================================
export default function ContactUsComponent({ data }: { data: any }) {
  if (!data) return <div className="min-h-screen bg-warm-cream" />;

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
      <Header />

      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. HERO SECTION (Fixed Z-Index) --- */}
        <section className="relative flex h-[495px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[64px] lg:h-[600px] lg:px-[80px] lg:py-[80px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.hero.image} alt="Studio Hero" fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 flex w-full max-w-[800px] flex-col items-center gap-[24px] text-center text-white">
            <h1 className="heading-display text-white w-full sm:text-[48px] lg:text-[64px]">
              {data.hero.title}
            </h1>
            <p className="body-large w-full max-w-[600px] text-white/90">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* --- 2. CONTACT INFO & FORM SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[48px] px-[20px] py-[56px] lg:flex-row lg:justify-between lg:gap-[80px] lg:px-[120px] lg:py-[100px] bg-warm-cream">

          {/* Left: Contact Info */}
          <div className="flex w-full flex-col gap-[40px] lg:max-w-[480px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="heading-h3 text-primary">
                {data.contactInfo.title}
              </h2>
              <p className="body-text text-secondary">
                {data.contactInfo.description}
              </p>
            </div>

            <div className="flex flex-col gap-[32px]">
              {data.contactInfo.details.map((detail: any, i: number) => (
                <div key={i} className="flex items-start gap-[16px]">
                  <div className="mt-[4px] shrink-0 text-forest-green">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      {getIcon(detail.iconType)}
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    {detail.items.map((item: any, idx: number) => (
                      <div key={idx}>
                        <p className="body-small font-bold text-primary uppercase">{item.label}</p>
                        <p className="body-small text-secondary whitespace-pre-line">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-[12px]">
              <p className="micro font-bold uppercase tracking-widest text-primary">Follow Us</p>
              <div className="flex gap-[16px]">
                {data.contactInfo.socials.map((social: any, i: number) => (
                  <Link key={i} href={social.url} className="flex size-[40px] items-center justify-center rounded-full border border-border bg-white transition hover:bg-warm-cream">
                    <span className="body-small font-bold text-forest-green">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:max-w-[600px]">
            <div className="card flex w-full flex-col gap-[24px] p-[24px] sm:gap-[32px] sm:p-[48px]">
              <div className="flex flex-col gap-[8px]">
                <h3 className="heading-h8 text-primary">{data.form.title}</h3>
                <p className="body-small text-secondary">{data.form.description}</p>
              </div>

              <form className="flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-[8px]">
                  <label className="caption font-bold text-primary">Your Name</label>
                  <input type="text" placeholder="John Doe" className="h-[50px] rounded-[8px] border border-border px-[16px] body-small outline-none focus:border-forest-green bg-white" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="caption font-bold text-primary">Email Address</label>
                  <input type="email" placeholder="john.doe@email.com" className="h-[50px] rounded-[8px] border border-border px-[16px] body-small outline-none focus:border-forest-green bg-white" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="caption font-bold text-primary">Subject</label>
                  <select className="h-[50px] rounded-[8px] border border-border px-[16px] body-small text-secondary outline-none focus:border-forest-green bg-white">
                    {data.form.subjects.map((subject: string, idx: number) => (
                      <option key={idx}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="caption font-bold text-primary">Message</label>
                  <textarea placeholder="Tell us more about your project..." className="h-[120px] resize-y rounded-[8px] border border-border p-[16px] body-small outline-none focus:border-forest-green bg-white" />
                </div>
                <button type="submit" className="mt-[8px] h-[56px] w-full rounded-[12px] bg-forest-green body-text font-bold text-white transition hover:bg-[#204834]">
                  {data.form.submitText}
                </button>
              </form>
            </div>
          </div>

        </section>

        {/* --- 3. MAP SECTION --- */}
        <section className="relative mx-auto flex h-[454px] w-full max-w-[1440px] items-center justify-center overflow-hidden bg-warm-cream lg:h-[600px]">
          <iframe
            src={data.map.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gallery 23 Map Location"
          />

          <div className="pointer-events-none relative z-10 flex h-full w-full max-w-[1280px] items-start px-[24px] py-[40px] lg:px-[80px] lg:py-[80px]">
            <div className="pointer-events-auto flex flex-col gap-[8px] rounded-[12px] bg-white p-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:gap-[12px] sm:p-[32px]">
              <h3 className="micro font-bold uppercase tracking-[0.1em] text-secondary">
                {data.map.title}
              </h3>
              <p className="body-text font-medium text-primary">
                {data.map.address}
              </p>
              <a
                href={data.map.url}
                target="_blank"
                rel="noreferrer"
                className="mt-[4px] caption font-bold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-forest-green"
              >
                {data.map.linkText}
              </a>
            </div>
          </div>
        </section>

        {/* --- 4. STATS SECTION (Fixed Z-Index) --- */}
        <section className="relative flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:px-[64px] lg:py-[196px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.stats.image} alt="Stats background" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-[48px] text-center text-white lg:gap-[64px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="heading-h2 text-white">
                {data.stats.title}
              </h2>
              <p className="body-large text-white/80">
                {data.stats.subtitle}
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-[48px] sm:grid-cols-3 sm:gap-[24px]">
              {data.stats.metrics.map((metric: any, i: number) => (
                <div key={i} className="flex flex-col items-center gap-[8px]">
                  <AnimatedCounter target={metric.target} suffix={metric.suffix} />
                  <p className="micro font-bold uppercase tracking-widest text-white">
                    {metric.title}
                  </p>
                  <p className="body-small text-white/80">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. FAQ SECTION --- */}
        <section className="mx-auto flex min-h-[844px] w-full max-w-[1440px] flex-col items-center gap-[32px] bg-warm-cream px-[24px] py-[56px] lg:min-h-0 lg:flex-row lg:items-stretch lg:justify-center lg:gap-[64px] lg:px-[120px] lg:py-[100px]">
          <div className="relative h-[220px] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[24px] sm:h-[500px] lg:h-auto">
            <ResponsiveImage src={data.faq.image} alt="Gallery view" />
          </div>

          <div className="flex w-full max-w-[680px] flex-col gap-[40px]">
            <h2 className="heading-h3 text-primary">
              {data.faq.title}
            </h2>

            <div className="flex flex-col gap-[16px]">
              {data.faq.questions.map((faq: any, index: number) => (
                <article key={index} className="card flex flex-col gap-[16px] p-[20px] sm:p-[32px]">
                  <div className="flex items-start justify-between gap-[16px]">
                    <h3 className="heading-h9 font-semibold text-primary">{faq.q}</h3>
                    <button className="mt-[2px] shrink-0 text-primary">
                      <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>
                  <p className="body-text text-secondary">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. CTA SECTION (Fixed Z-Index) --- */}
        <section className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[80px] lg:h-[565px] lg:min-h-0 lg:px-[80px] lg:py-[150px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.cta.image} alt="CTA Background" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 flex w-full max-w-[700px] flex-col items-center gap-[28px] text-center text-white lg:gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="heading-h2 text-white">
                {data.cta.title}
              </h2>
              <p className="body-large text-white/90">
                {data.cta.subtitle}
              </p>
            </div>

            <Link href="/support" className="flex h-[41px] w-[257px] items-center justify-center gap-[16px] rounded-full bg-forest-green text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-[#204834]">
              <span>{data.cta.buttonText}</span>
              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
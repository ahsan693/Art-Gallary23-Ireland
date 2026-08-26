"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// 1. Import Shared Components
import { Header, Footer, ArrowIcon } from "@/app/components/home/home";

// Reusable Image Component
export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

// Icon Mapping
const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "craftsmanship":
      return (
        <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "preservation":
      return (
        <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
        </svg>
      );
    case "sustainability":
      return (
        <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 014 13c0-3.866 3.134-7 7-7h1a7 7 0 017 7c0 3.866-3.134 7-7 7v0zM11 20v-5" />
        </svg>
      );
    case "service":
      return (
        <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    default:
      return null;
  }
};

// ==========================================
// ABOUT US COMPONENT
// ==========================================
// Now accepting `data` as a prop from the Server Component!
export default function AboutUsComponent({ data }: { data: any }) {

  // Scroll Progress hook for Journey section line animation
  const journeyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
      <Header />

      <main className="flex w-full flex-1 flex-col items-center">

        {/* --- 1. HERO SECTION (Fixed Z-indexes) --- */}
        <section className="relative flex h-[520px] w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] py-[56px] sm:h-[643px] lg:px-[80px] lg:py-[80px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.hero.image} alt="About Us Hero" fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/65" />

          <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-[12px] text-center text-white sm:gap-[16px]">
            <h1 className="heading-display text-white w-full max-w-[924px] sm:text-[48px] lg:text-[64px]">
              {data.hero.title}
            </h1>
            <p className="body-large w-full max-w-[700px] text-white/80">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* --- 2. MEET THE GREGS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[24px] py-[48px] lg:flex-row lg:items-center lg:justify-center lg:gap-[64px] lg:px-[80px] lg:py-[80px]">
          <div className="relative mb-[40px] h-[400px] w-full max-w-[340px] shrink-0 sm:h-[567px] sm:max-w-[480px] lg:mb-0 lg:w-[480px]">
            <img src={data.meetTheGregs.imgSr} alt="Greg Sr" className="absolute inset-0 h-full w-full rounded-[12px] object-cover" />
            <img src={data.meetTheGregs.imgJr} alt="Greg Jr" className="absolute bottom-[-20px] right-[-20px] h-[220px] w-[180px] rounded-[12px] object-cover shadow-[0_10px_24px_-8px_rgba(0,0,0,0.08)] sm:bottom-[-40px] sm:right-[-40px] sm:h-[320px] sm:w-[260px]" />
          </div>

          <div className="flex w-full max-w-[736px] flex-col gap-[24px] sm:gap-[32px]">
            <h2 className="heading-h3 tracking-[-0.015em]">
              {data.meetTheGregs.title}
            </h2>
            <div className="flex flex-col gap-[16px] body-text text-primary">
              {data.meetTheGregs.paragraphs.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="border-l-[4px] border-forest-green pl-[16px] sm:pl-[24px]">
              <p className="quote">
                {data.meetTheGregs.quote}
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. WHAT WE STAND FOR SECTION (Fixed Z-indexes) --- */}
        <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-[24px] pb-[56px] pt-[48px] lg:gap-[56px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.whatWeStandFor.bgImage} alt="Workshop" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/60" />

          <div className="relative z-20 flex w-full max-w-[920px] flex-col items-center gap-[12px] text-center mb-[32px] sm:gap-[16px] lg:mb-0">
            <h2 className="heading-h2 text-white">
              {data.whatWeStandFor.title}
            </h2>
            <p className="body-text text-[#999999]">
              {data.whatWeStandFor.subtitle}
            </p>
          </div>

          <div className="relative z-20 flex w-full max-w-[1200px] flex-wrap justify-center gap-[20px] sm:gap-[24px]">
            {data.whatWeStandFor.principles.map((principle: any, idx: number) => (
              <div key={idx} className="card flex flex-1 flex-col items-start gap-[16px] min-w-[280px] lg:minw-[400px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  {getIconComponent(principle.iconType)}
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="heading-h9">{principle.title}</h3>
                  <p className="body-small text-secondary">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. OUR JOURNEY SECTION --- */}
        <section ref={journeyRef} className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[24px] py-[48px] lg:gap-[56px] lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
            <h2 className="heading-h2 text-primary">
              {data.journey.title}
            </h2>
          </div>

          <div className="mt-[32px] flex w-full max-w-[1200px] flex-col gap-[32px] sm:mt-[40px] sm:flex-row sm:flex-wrap sm:justify-center lg:mt-0 lg:flex-nowrap lg:justify-between lg:gap-[24px]">
            {data.journey.milestones.map((item: any, index: number) => {
              const yearColor = useTransform(scrollYProgress, [item.point - 0.1, item.point], ["#a3a3a3", "#161616"]);
              const descOpacity = useTransform(scrollYProgress, [item.point - 0.1, item.point], [0.35, 1]);
              const descColor = useTransform(scrollYProgress, [item.point - 0.1, item.point], ["#888888", "#555555"]);

              return (
                <div key={index} className="flex flex-col items-start gap-[16px] sm:w-[220px]">
                  <motion.h3 style={{ color: yearColor }} className="heading-h4">
                    {item.year}
                  </motion.h3>

                  <div className="relative flex w-full items-center">
                    {index === 0 && (
                      <div className="absolute top-1/2 left-[6px] right-[-964px] z-0 hidden h-[4px] -translate-y-1/2 rounded-[2px] bg-border lg:block">
                        <motion.div className="h-full origin-left rounded-[2px] bg-forest-green" style={{ scaleX }} />
                      </div>
                    )}
                    <div className="relative z-10 size-[12px] shrink-0 rounded-full bg-forest-green" />
                    <div className="ml-[8px] h-[4px] w-full rounded-[2px] bg-border lg:hidden" />
                  </div>

                  <motion.p style={{ opacity: descOpacity, color: descColor }} className="body-small">
                    {item.desc}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- 5. THE TEAM SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-primary px-[24px] py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[120px]">
          <div className="flex w-full max-w-[1280px] flex-row items-end justify-between mb-[24px] lg:mb-0">
            <h2 className="heading-h2 text-white">
              {data.team.title}
            </h2>
            <div className="hidden pb-[12px] lg:flex lg:gap-[16px]">
              <button className="flex size-[48px] items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:size-[56px]">
                <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="flex w-full max-w-[1280px] flex-nowrap justify-between gap-[16px] overflow-x-auto pb-[16px] lg:gap-[24px] lg:overflow-visible lg:pb-0">
            {data.team.members.map((member: any, index: number) => (
              <article key={index} className="flex w-[260px] shrink-0 flex-col gap-[16px] sm:w-[280px] lg:w-[calc(25%-18px)] lg:shrink lg:gap-[20px]">
                <div className="relative h-[320px] w-full overflow-hidden rounded-[12px] sm:h-[360px] lg:h-[402px]">
                  <ResponsiveImage src={member.img} alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <button className="absolute bottom-[12px] left-[12px] text-white hover:text-white/80 sm:bottom-[16px] sm:left-[16px]">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                  <div className="flex flex-col gap-[4px] sm:gap-[6px]">
                    <h3 className="heading-h8 text-white">{member.name}</h3>
                    <p className="micro font-bold uppercase tracking-[0.05em] text-sage">{member.role}</p>
                  </div>
                  <p className="body-small text-muted">{member.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- 6. FAQ SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-forest-green px-[24px] py-[48px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-[48px] lg:px-[80px] lg:py-[80px]">
          <div className="relative mb-[32px] h-[320px] w-full max-w-[471px] shrink-0 overflow-hidden rounded-[24px] sm:h-[500px] lg:mb-0 lg:h-auto">
            <ResponsiveImage src={data.faq.image} alt="Visitors at an art exhibition" />
          </div>

          <div className="flex w-full max-w-[761px] flex-col gap-[32px] sm:gap-[48px]">
            <h2 className="heading-h2 text-white">
              {data.faq.title}
            </h2>

            <div className="flex flex-col gap-[16px]">
              {data.faq.questions.map((faq: any, index: number) => (
                <article key={index} className="card flex flex-col gap-[12px] p-[20px] sm:gap-[16px] sm:p-[30px]">
                  <div className="flex items-start justify-between gap-[16px]">
                    <h3 className="heading-h8 font-semibold">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="body-text text-secondary">
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. PRESERVING MEMORIES (CTA) SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[24px] py-[56px] lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[854px] flex-col items-center text-center gap-[32px] sm:gap-[48px]">
            <div className="flex flex-col items-center gap-[16px] sm:gap-[24px]">
              <h2 className="heading-h2 tracking-[-0.02em]">
                {data.cta.titlePrefix} <span className="text-forest-green">{data.cta.titleHighlight}</span>
              </h2>
              <p className="max-w-[700px] body-text text-secondary">
                {data.cta.description}
              </p>
            </div>

            <Link href={data.cta.buttonLink} className="btn-primary bg-primary border-primary hover:bg-dark-surface uppercase tracking-[0.12em]">
              {data.cta.buttonText}
            </Link>

            <div className="flex flex-row items-center justify-center gap-[16px]">
              <div className="flex h-[32px] w-[80px] -space-x-4">
                {data.cta.avatars.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Collector ${idx + 1}`}
                    className="relative size-[32px] rounded-full border-[2px] border-warm-cream object-cover"
                    style={{ zIndex: (idx + 1) * 10 }}
                  />
                ))}
              </div>
              <p className="caption font-medium text-primary">
                {data.cta.trustText}
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
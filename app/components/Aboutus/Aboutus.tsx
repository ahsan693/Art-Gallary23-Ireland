"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Header, Footer, ArrowIcon } from "@/app/components/home/home";

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

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

// --- Extracted "What We Stand For" Sub-components ---
const renderFigmaIcon = (title: string) => {
  if (title.includes("Craftsmanship")) {
    return (
      <svg className="size-[26px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686 1.036-1.874.945-2.95a4.5 4.5 0 014.484-4.884c.83-.07 1.614.464 1.83 1.258l-.612.612a.75.75 0 000 1.06l1.59 1.59a.75.75 0 001.06 0l.612-.612c.794.216 1.328 1 1.258 1.83z" />
      </svg>
    );
  }
  if (title.includes("Preservation")) {
    return (
      <svg className="size-[26px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  }
  if (title.includes("Sustainability")) {
    return (
      <svg className="size-[26px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 19.25c9-1 14.5-6.5 15.5-14.5-9.5 1-15.5 5.5-15.5 14.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5c2.5-2.5 5-5 8-7.5" />
      </svg>
    );
  }
  return (
    <svg className="size-[26px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
};

const PrincipleCard = ({ principle, className = "" }: { principle: any; className?: string }) => (
  <div className={`flex flex-col items-start gap-[16px] rounded-[16px] border border-[#D5D5D5] bg-white p-[24px] shadow-[0_18px_20px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] sm:gap-[20px] sm:rounded-[20px] sm:p-[40px] ${className}`}>
    <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#181818] text-white sm:size-[54px]">
      {renderFigmaIcon(principle.title)}
    </div>
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-[18px] font-bold text-primary sm:text-[22px]">{principle.title}</h3>
      <p className="body-small text-secondary sm:text-[15px]">
        {principle.description}
      </p>
    </div>
  </div>
);

// --- Extracted "Our Journey" Sub-component to fix React Rule of Hooks ---
function MilestoneItem({ item, index, scrollYProgress, scaleX }: { item: any, index: number, scrollYProgress: any, scaleX: any }) {
  const yearColor = useTransform(scrollYProgress, [item.point - 0.1, item.point], ["#a3a3a3", "#161616"]);
  const descOpacity = useTransform(scrollYProgress, [item.point - 0.1, item.point], [0.35, 1]);
  const descColor = useTransform(scrollYProgress, [item.point - 0.1, item.point], ["#888888", "#555555"]);

  return (
    <div className="relative flex w-full flex-col items-start gap-[16px] bg-transparent p-0 sm:w-[220px] sm:gap-[24px]">
      <div className="flex w-full flex-col gap-[12px] sm:gap-[16px]">
        <motion.h3 style={{ color: yearColor }} className="heading-h4">
          {item.year}
        </motion.h3>

        {/* 👇 Mobile: Exact Figma Match (Dot with horizontal line) 👇 */}
        <div className="flex w-full items-center sm:hidden">
          <div className="relative z-10 size-[12px] shrink-0 rounded-full bg-forest-green" />
          <div className="h-[2px] w-full bg-[#D5D5D5]" />
        </div>

        {/* Desktop: Top Line + Dot */}
        <div className="relative hidden w-full items-center sm:flex">
          {index === 0 && (
            <div className="absolute top-1/2 left-[6px] right-[-964px] z-0 hidden h-[4px] -translate-y-1/2 rounded-[2px] bg-border lg:block">
              <motion.div className="h-full origin-left rounded-[2px] bg-forest-green" style={{ scaleX }} />
            </div>
          )}
          <div className="relative z-10 size-[12px] shrink-0 rounded-full bg-forest-green" />
          <div className="ml-[8px] h-[4px] w-full rounded-[2px] bg-border lg:hidden" />
        </div>

        <motion.p style={{ opacity: descOpacity, color: descColor }} className="body-small text-left">
          {item.desc}
        </motion.p>
      </div>
    </div>
  );
}

export default function AboutUsComponent({ data }: { data: any }) {
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
        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex h-[500px] w-full max-w-[1440px] flex-col items-start justify-center overflow-hidden px-[20px] py-[64px] sm:items-center sm:px-[24px] lg:h-[643px] lg:items-center lg:px-[80px] lg:py-[80px]">
          <div className="absolute inset-0 z-0 h-full lg:h-full">
            <Image src={data.hero.image} alt="About Us Hero" fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10 lg:h-full" />

          {/* 👇 Mobile text-left & items-start to match Figma 👇 */}
          <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-start gap-[16px] text-left text-white sm:items-center sm:text-center lg:items-center lg:text-center">
            <h1 className="heading-display text-white w-full max-w-[924px]">
              {data.hero.title}
            </h1>
            <p className="body-large w-full max-w-[700px] text-white/80">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* --- 2. MEET THE GREGS SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[20px] py-[64px] sm:px-[24px] lg:flex-row lg:items-center lg:justify-center lg:gap-[64px] lg:px-[80px] lg:py-[80px]">
          <div className="relative h-[278px] w-full max-w-[340px] shrink-0 lg:mb-0 lg:h-[567px] lg:max-w-[480px] lg:w-[480px]">
            <img src={data.meetTheGregs.imgSr} alt="Greg Sr" className="absolute left-0 top-0 h-[320px] w-[240px] rounded-[12px] object-cover lg:h-full lg:w-full" />
            <img src={data.meetTheGregs.imgJr} alt="Greg Jr" className="absolute bottom-0 right-0 h-[200px] w-[160px] rounded-[12px] object-cover shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] lg:bottom-[-40px] lg:right-[-40px] lg:h-[320px] lg:w-[260px]" />
          </div>

          <div className="flex w-full max-w-[736px] flex-col gap-[24px] lg:gap-[32px] mt-[48px] lg:mt-0">
            <h2 className="heading-h3 tracking-[-0.015em]">
              {data.meetTheGregs.title}
            </h2>
            <div className="flex flex-col gap-[16px] body-text text-primary">
              {data.meetTheGregs.paragraphs.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="border-l-[4px] border-forest-green pl-[16px] sm:pl-[24px]">
              <p className="body-text italic text-secondary">
                {data.meetTheGregs.quote}
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. WHAT WE STAND FOR SECTION --- */}
        <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-[40px] overflow-hidden px-[20px] py-[64px] sm:px-[24px] lg:gap-[56px] lg:px-[120px] lg:pb-[120px] lg:pt-[96px]">
          <div className="absolute inset-0 z-0">
            <Image src={data.whatWeStandFor.bgImage} alt="Workshop" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 flex w-full max-w-[920px] flex-col items-center gap-[12px] text-center lg:mb-0">
            <h2 className="heading-h2 text-white">
              {data.whatWeStandFor.title}
            </h2>
            <p className="body-text text-[#999999]">
              {data.whatWeStandFor.subtitle}
            </p>
          </div>

          <div className="relative z-20 flex w-full max-w-[1200px] flex-col gap-[16px] sm:gap-[24px]">
            <div className="flex flex-col gap-[16px] sm:flex-row sm:gap-[24px]">
              <PrincipleCard principle={data.whatWeStandFor.principles[0]} className="w-full sm:flex-1" />
              <PrincipleCard principle={data.whatWeStandFor.principles[1]} className="w-full sm:flex-1" />
            </div>
            <div className="flex flex-col gap-[16px] sm:flex-row sm:gap-[24px]">
              <PrincipleCard principle={data.whatWeStandFor.principles[2]} className="w-full sm:w-[420px] sm:shrink-0" />
              <PrincipleCard principle={data.whatWeStandFor.principles[3]} className="w-full sm:flex-1" />
            </div>
          </div>
        </section>

        {/* --- 4. OUR JOURNEY SECTION --- */}
        <section ref={journeyRef} className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream px-[20px] py-[64px] sm:px-[24px] lg:gap-[56px] lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
            <h2 className="heading-h2 text-primary">
              {data.journey.title}
            </h2>
          </div>

          <div className="relative mt-[32px] flex w-full max-w-[1200px] flex-col gap-[24px] lg:mt-0 lg:flex-nowrap lg:justify-between lg:gap-[24px]">
            {data.journey.milestones.map((item: any, index: number) => (
              <MilestoneItem
                key={index}
                item={item}
                index={index}
                scrollYProgress={scrollYProgress}
                scaleX={scaleX}
              />
            ))}
          </div>
        </section>

        {/* --- 5. THE TEAM SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-primary gap-[32px] px-[20px] py-[64px] sm:px-[24px] lg:gap-[64px] lg:px-[80px] lg:py-[120px]">
          <div className="flex w-full max-w-[1280px] flex-row items-end justify-between lg:mb-0">
            <h2 className="heading-h2 text-white">
              {data.team.title}
            </h2>
            <div className="hidden pb-[12px] lg:flex lg:gap-[16px]">
              <button className="flex size-[48px] items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:size-[56px]">
                <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="grid w-full max-w-[1280px] grid-cols-2 gap-[16px] lg:flex lg:flex-nowrap lg:justify-between lg:gap-[24px] lg:overflow-visible lg:pb-0">
            {data.team.members.map((member: any, index: number) => (
              <article key={index} className={`flex w-full min-w-0 flex-col gap-[16px] lg:w-[calc(25%-18px)] lg:shrink lg:gap-[20px] ${index > 1 ? "hidden lg:flex" : ""}`}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] lg:h-[402px] lg:aspect-auto">
                  <ResponsiveImage src={member.img} alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <button className="absolute bottom-[12px] left-[12px] text-white hover:text-white/80 sm:bottom-[16px] sm:left-[16px]">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                  <div className="flex flex-col gap-[6px] sm:gap-[6px]">
                    <h3 className="heading-h8 text-white">{member.name}</h3>
                    <p className="micro font-bold uppercase tracking-[0.05em] text-sage">{member.role}</p>
                  </div>
                  <p className="body-small text-muted">{member.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[8px] flex w-full items-center justify-center gap-[12px] lg:hidden">
            <button className="flex size-[40px] items-center justify-center rounded-full border border-white/30 text-white" aria-label="Previous team member">
              <span className="rotate-180"><ArrowIcon /></span>
            </button>
            <button className="flex size-[40px] items-center justify-center rounded-full border border-white/30 text-white" aria-label="Next team member">
              <ArrowIcon />
            </button>
          </div>
        </section>

        {/* --- 6. FAQ SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-forest-green px-[20px] py-[64px] sm:px-[24px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-[48px] lg:px-[80px] lg:py-[80px]">
          {/* 👇 Mobile: Image on top (order-1) matching Figma 👇 */}
          <div className="order-1 relative mb-[32px] h-[320px] w-full max-w-[471px] shrink-0 overflow-hidden rounded-[24px] lg:order-none lg:mb-0 lg:h-auto">
            <ResponsiveImage src={data.faq.image} alt="Visitors at an art exhibition" />
          </div>

          <div className="order-2 flex w-full max-w-[761px] flex-col gap-[32px] lg:order-none lg:gap-[48px]">
            <h2 className="heading-h2 text-white">
              {data.faq.title}
            </h2>

            <div className="flex flex-col gap-[12px] lg:hidden">
              {data.faq.questions.map((faq: any, index: number) => (
                <div key={index} className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[20px]">
                  <div className="flex items-start justify-between gap-[16px]">
                    <p className="heading-h8 font-semibold text-primary">{faq.q}</p>
                    <svg className="size-[16px] shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="body-text text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="hidden flex-col gap-[12px] sm:gap-[16px] lg:flex">
              {data.faq.questions.map((faq: any, index: number) => (
                <details key={index} className="card group flex flex-col gap-[12px] p-[20px] sm:gap-[16px] sm:p-[30px] cursor-pointer">
                  <summary className="flex items-start justify-between gap-[16px] list-none heading-h8 font-semibold [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <svg className="size-[20px] shrink-0 text-primary transition-transform duration-300 group-open:rotate-45 sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-[12px] body-text text-secondary sm:mt-[16px]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. PRESERVING MEMORIES (CTA) SECTION --- */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-warm-cream gap-[32px] px-[20px] py-[64px] sm:px-[24px] lg:gap-0 lg:px-[80px] lg:py-[80px]">
          <div className="flex w-full max-w-[854px] flex-col items-center gap-[32px] text-center lg:gap-[48px]">
            <div className="flex flex-col items-center gap-[16px] text-center lg:gap-[24px]">
              <h2 className="heading-h2 tracking-[-0.02em]">
                {data.cta.titlePrefix} <br className="sm:hidden" /><span className="text-forest-green">{data.cta.titleHighlight}</span>
              </h2>
              <p className="max-w-[700px] body-text text-secondary">
                {data.cta.description}
              </p>
            </div>

            <Link href={data.cta.buttonLink} className="btn-primary bg-primary border-primary hover:bg-dark-surface uppercase tracking-[0.12em] w-full sm:w-auto">
              {data.cta.buttonText}
            </Link>

            <div className="flex flex-col items-center gap-[12px] text-center sm:flex-row sm:items-center sm:justify-center sm:gap-[16px]">
              <div className="flex h-[36px] w-[84px] -space-x-3">
                {data.cta.avatars.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Collector ${idx + 1}`}
                    className="relative size-[36px] rounded-full border-[2px] border-warm-cream object-cover"
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
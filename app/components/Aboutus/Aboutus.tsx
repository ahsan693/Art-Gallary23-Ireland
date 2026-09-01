"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import Header, Footer, and Shared Icons from home
import { ArrowIcon } from "@/app/components/home/home";
import { getAboutData } from "@/app/lib/data/aboutdata";

type AboutData = Awaited<ReturnType<typeof getAboutData>>;
type Principle = AboutData["whatWeStandFor"]["principles"][number];

export function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <span className={`relative block h-full w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </span>
  );
}

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

const PrincipleCard = ({ principle, className = "" }: { principle: Principle; className?: string }) => (
  <div className={`flex flex-col items-start gap-[16px] rounded-[16px] border border-[#D5D5D5] bg-white p-[24px] shadow-[0_18px_20px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05)] sm:gap-[20px] sm:rounded-[20px] sm:p-[40px] ${className}`}>
    <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#181818] text-white sm:size-[54px]">
      {renderFigmaIcon(principle.title)}
    </div>
    <div className="flex flex-col gap-[8px]">
      <h3 className="heading-h9 text-primary">{principle.title}</h3>
      <p className="body-small text-secondary">
        {principle.description}
      </p>
    </div>
  </div>
);

export default function AboutUsComponent({ data }: { data: AboutData }) {

  // 👇 STATE FOR MOBILE TEAM CAROUSEL 👇
  const [teamStartIndex, setTeamStartIndex] = useState(0);

  const handleNextTeam = () => {
    setTeamStartIndex((prev) => (prev + 2) % data.team.members.length);
  };

  const handlePrevTeam = () => {
    setTeamStartIndex((prev) => (prev - 2 + data.team.members.length) % data.team.members.length);
  };

  return (
    <div className="flex min-h-screen flex-col bg-warm-cream text-primary overflow-x-hidden">

      <main className="flex w-full flex-1 flex-col items-center">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[500px] lg:h-[643px]">
          {/* Infinite Background Image */}
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image src={data.hero.image} alt={data.hero.imageAlt} fill priority className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Constrained Text Container */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[16px] px-[20px] text-left text-white sm:items-center sm:text-center sm:px-[24px] lg:px-[80px]">
            <div className="flex w-full max-w-[1000px] flex-col items-start gap-[16px] text-left text-white sm:items-center sm:text-center lg:items-center lg:text-center">
              <h1 className="heading-display text-white w-full max-w-[924px]">
                {data.hero.title}
              </h1>
              <p className="body-large w-full max-w-[700px] text-white/80">
                {data.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. MEET THE GREGS SECTION --- */}
        <section className="w-full bg-warm-cream flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] py-[64px] sm:px-[24px] lg:flex-row lg:items-center lg:justify-center lg:gap-[64px] lg:px-[80px] lg:py-[80px]">
            <div className="relative h-[278px] w-full max-w-[340px] shrink-0 lg:mb-0 lg:h-[567px] lg:max-w-[480px] lg:w-[480px]">
              <img src={data.meetTheGregs.imgSr} alt={data.meetTheGregs.imgSrAlt} className="absolute left-0 top-0 h-[320px] w-[240px] rounded-[12px] object-cover lg:h-full lg:w-full" />
              <img src={data.meetTheGregs.imgJr} alt={data.meetTheGregs.imgJrAlt} className="absolute bottom-0 right-0 h-[200px] w-[160px] rounded-[12px] object-cover shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] lg:bottom-[-40px] lg:right-[-40px] lg:h-[320px] lg:w-[260px]" />
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
          </div>
        </section>

        {/* --- 3. WHAT WE STAND FOR SECTION --- */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden py-[64px] lg:pb-[120px] lg:pt-[96px]">
          {/* Infinite Background Image */}
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image src={data.whatWeStandFor.bgImage} alt={data.whatWeStandFor.bgImageAlt} fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/10" />

          {/* Constrained Container */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-[40px] px-[20px] sm:px-[24px] lg:gap-[56px] lg:px-[120px]">
            <div className="flex w-full max-w-[920px] flex-col items-center gap-[12px] text-center lg:mb-0">
              <h2 className="heading-h2 text-white">
                {data.whatWeStandFor.title}
              </h2>
              <p className="body-text text-[#999999]">
                {data.whatWeStandFor.subtitle}
              </p>
            </div>

            <div className="flex w-full max-w-[1200px] flex-col gap-[16px] sm:gap-[24px]">
              <div className="flex flex-col gap-[16px] sm:flex-row sm:gap-[24px]">
                <PrincipleCard principle={data.whatWeStandFor.principles[0]} className="w-full sm:flex-1" />
                <PrincipleCard principle={data.whatWeStandFor.principles[1]} className="w-full sm:flex-1" />
              </div>
              <div className="flex flex-col gap-[16px] sm:flex-row sm:gap-[24px]">
                <PrincipleCard principle={data.whatWeStandFor.principles[2]} className="w-full sm:w-[420px] sm:shrink-0" />
                <PrincipleCard principle={data.whatWeStandFor.principles[3]} className="w-full sm:flex-1" />
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. OUR JOURNEY SECTION --- */}
        <section className="w-full bg-warm-cream flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] py-[64px] sm:px-[24px] lg:px-[80px] lg:py-[80px]">
            <div className="flex w-full max-w-[1280px] flex-col items-center text-center mb-[40px] lg:mb-[64px]">
              <h2 className="heading-h2 text-primary">
                {data.journey.title}
              </h2>
            </div>

            <div className="flex w-full max-w-[1185px] flex-col gap-[40px] lg:flex-row lg:justify-between lg:gap-[24px]">
              {data.journey.milestones.map((item, index) => (
                <div key={index} className="flex w-full flex-col items-start gap-[12px] lg:flex-1 lg:gap-[16px]">
                  <h3 className="heading-h4 text-forest-green">
                    {item.year}
                  </h3>

                  <div className="flex w-full items-center">
                    <div className="relative z-10 size-[12px] shrink-0 rounded-full bg-forest-green" />
                    <div className="h-[2px] w-full bg-[#D5D5D5]" />
                  </div>

                  <p className="body-small text-secondary text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. THE TEAM SECTION --- */}
        <section className="w-full bg-primary flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[32px] px-[20px] py-[64px] sm:px-[24px] lg:gap-[64px] lg:px-[80px] lg:py-[120px]">
            <div className="flex w-full max-w-[1280px] flex-row items-end justify-between lg:mb-0">
              <h2 className="heading-h2 text-white">
                {data.team.title}
              </h2>
              {/* Working Desktop Buttons */}
              <div className="hidden pb-[12px] lg:flex lg:gap-[16px]">
                <button aria-label={data.cta.previousTeamLabel} className="group flex size-[48px] items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-forest-green hover:border-forest-green hover:shadow-lg active:scale-95 sm:size-[56px]">
                  <span className="rotate-180"><ArrowIcon className="transition-transform duration-300 group-hover:-translate-x-1" /></span>
                </button>
                <button aria-label={data.cta.nextTeamLabel} className="group flex size-[48px] items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-forest-green hover:border-forest-green hover:shadow-lg active:scale-95 sm:size-[56px]">
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="grid w-full max-w-[1280px] grid-cols-2 gap-[16px] lg:flex lg:flex-nowrap lg:justify-between lg:gap-[24px] lg:overflow-visible lg:pb-0">
              {data.team.members.map((member, index) => {
                const isVisibleOnMobile = index === teamStartIndex || index === (teamStartIndex + 1) % data.team.members.length;

                return (
                  <article
                    key={index}
                    className={`w-full min-w-0 flex-col gap-[16px] lg:w-[calc(25%-18px)] lg:shrink lg:gap-[20px] lg:flex ${isVisibleOnMobile ? "flex" : "hidden"}`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] lg:h-[402px] lg:aspect-auto">
                      <ResponsiveImage src={member.img} alt={member.imageAlt} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                      <div className="flex flex-col gap-[6px] sm:gap-[6px]">
                        <h3 className="heading-h8 text-white">{member.name}</h3>
                        <p className="micro font-bold uppercase tracking-[0.05em] text-sage">{member.role}</p>
                      </div>
                      <p className="body-small text-muted">{member.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Working Mobile Buttons */}
            <div className="mt-[8px] flex w-full items-center justify-center gap-[12px] lg:hidden">
              <button
                onClick={handlePrevTeam}
                className="group flex size-[40px] items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-forest-green hover:border-forest-green hover:shadow-lg active:scale-95"
                aria-label={data.cta.previousTeamLabel}
              >
                <span className="rotate-180"><ArrowIcon className="transition-transform duration-300 group-hover:-translate-x-1" /></span>
              </button>
              <button
                onClick={handleNextTeam}
                className="group flex size-[40px] items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-forest-green hover:border-forest-green hover:shadow-lg active:scale-95"
                aria-label={data.cta.nextTeamLabel}
              >
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* --- 6. FAQ SECTION --- */}
        <section className="w-full bg-forest-green flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] py-[64px] sm:px-[24px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-[48px] lg:px-[80px] lg:py-[80px]">
            {/* Image Side */}
            <div className="order-1 relative mb-[32px] h-[320px] w-full max-w-[471px] shrink-0 overflow-hidden rounded-[24px] lg:order-none lg:mb-0 lg:h-auto">
              <ResponsiveImage src={data.faq.image} alt={data.faq.imageAlt} />
            </div>

            {/* Text & Accordions Side */}
            <div className="order-2 flex w-full max-w-[761px] flex-col gap-[32px] lg:order-none lg:gap-[48px]">
              <h2 className="heading-h2 text-white">
                {data.faq.title}
              </h2>

              {/* Mobile FAQs */}
              <div className="flex flex-col gap-[12px] lg:hidden">
                {data.faq.questions.map((faq, index) => (
                  <details key={index} onClick={(event) => { if (!(event.target as HTMLElement).closest("summary")) event.currentTarget.open = !event.currentTarget.open; }} className="group card flex flex-col gap-[12px] rounded-[12px] bg-white p-[20px] shadow-sm transition-all duration-300 hover:border-[#84A59D] hover:shadow-md active:scale-[0.98] active:border-[#84A59D] cursor-pointer">
                    <summary className="flex items-start justify-between gap-[16px] list-none [&::-webkit-details-marker]:hidden">
                      <span className="heading-h8 font-semibold text-primary transition-colors duration-300 group-hover:text-forest-green group-active:text-forest-green">{faq.q}</span>
                      <svg className="size-[20px] shrink-0 text-primary transition-all duration-300 group-open:rotate-45 group-hover:text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <p className="mt-[12px] body-text text-secondary opacity-0 transition-opacity duration-300 group-open:opacity-100">{faq.a}</p>
                  </details>
                ))}
              </div>

              {/* Desktop FAQs */}
              <div className="hidden flex-col gap-[12px] sm:gap-[16px] lg:flex">
                {data.faq.questions.map((faq, index) => (
                  <details key={index} onClick={(event) => { if (!(event.target as HTMLElement).closest("summary")) event.currentTarget.open = !event.currentTarget.open; }} className="group card flex flex-col gap-[12px] p-[20px] shadow-sm transition-all duration-300 hover:border-[#84A59D] hover:shadow-md active:scale-[0.98] active:border-[#84A59D] cursor-pointer sm:gap-[16px] sm:p-[30px]">
                    <summary className="flex items-start justify-between gap-[16px] list-none heading-h8 font-semibold [&::-webkit-details-marker]:hidden">
                      <span className="transition-colors duration-300 group-hover:text-forest-green group-active:text-forest-green">{faq.q}</span>
                      <svg className="size-[20px] shrink-0 text-primary transition-all duration-300 group-open:rotate-45 group-hover:text-forest-green sm:size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <p className="mt-[12px] body-text text-secondary opacity-0 transition-opacity duration-300 group-open:opacity-100 sm:mt-[16px]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. PRESERVING MEMORIES (CTA) SECTION --- */}
        <section className="w-full bg-warm-cream flex justify-center">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[32px] px-[20px] py-[64px] sm:px-[24px] lg:gap-0 lg:px-[80px] lg:py-[80px]">
            <div className="flex w-full max-w-[854px] flex-col items-center gap-[32px] text-center lg:gap-[48px]">
              <div className="flex flex-col items-center gap-[16px] text-center lg:gap-[24px]">
                <h2 className="heading-h2 tracking-[-0.02em]">
                  {data.cta.titlePrefix} <br className="sm:hidden" /><span className="text-forest-green">{data.cta.titleHighlight}</span>
                </h2>
                <p className="max-w-[700px] body-text text-secondary">
                  {data.cta.description}
                </p>
              </div>

              {/* Working Button with Hover Effect (Black -> Green) */}
              <Link href={data.cta.buttonLink} className="group flex w-full sm:w-max items-center justify-center gap-[8px] btn-primary bg-primary border-primary transition-all duration-300 hover:-translate-y-1 hover:bg-forest-green hover:border-forest-green hover:shadow-lg active:scale-95 uppercase tracking-[0.12em]">
                {data.cta.buttonText} <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex flex-col items-center gap-[12px] text-center sm:flex-row sm:items-center sm:justify-center sm:gap-[16px]">
                <div className="flex h-[36px] w-[84px] -space-x-3">
                  {data.cta.avatars.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${data.cta.avatarAlt} ${idx + 1}`}
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
          </div>
        </section>
      </main>

    </div>
  );
}
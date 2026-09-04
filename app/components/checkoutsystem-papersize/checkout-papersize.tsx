"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component

// Importing the Data Layer
import { checkoutDefaults, getCheckoutPaperSizeData } from "@/app/lib/data/checkoutPaperSizeData";
import PaymentHeader from "@/app/components/payment-header/payment-header";

type CheckoutPaperSizeData = Awaited<ReturnType<typeof getCheckoutPaperSizeData>>;

// ==========================================
// CHECKOUT PAPER & SIZE COMPONENT
// ==========================================

export default function CheckoutPaperSizeComponent() {
    // State for data
    const [data, setData] = useState<CheckoutPaperSizeData | null>(null);

    // State for selections 
    const [selectedPaper, setSelectedPaper] = useState(checkoutDefaults.selectedPaper);
    const [selectedSize, setSelectedSize] = useState(checkoutDefaults.selectedSize);

    useEffect(() => {
        const fetchData = async () => {
            const pageData = await getCheckoutPaperSizeData();
            setData(pageData);
        };
        fetchData();
    }, []);

    // Show empty background while loading
    if (!data) return <div className="min-h-screen bg-warm-cream" />;

    // Derived values for the bottom summary bar
    const activePaper = data.paperSection.options.find((paper) => paper.id === selectedPaper);
    const activeSize = data.sizeSection.options.find((size) => size.id === selectedSize);

    return (
        <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
            {/* --- DESKTOP HEADER --- */}
            <div className="hidden md:block">
            </div>

            {/* --- MOBILE HEADER --- */}
            <div className="md:hidden">
                <PaymentHeader backLink={data.topBar.backLink} backLabel={data.topBar.backText} title={data.mobileHeader.title} cartLabel={data.mobileHeader.cartLabel} />
            </div>

            {/* --- MAIN PAGE CONTENT --- */}
            <main className="flex w-full flex-1 flex-col items-center bg-warm-cream py-[40px] sm:py-[64px] max-md:py-0 md:bg-transparent">
                
                {/* Main Wrapper matching the existing desktop layout. Mobile uses the Figma 390px layout. */}
                <div className="flex w-full max-w-[1000px] flex-col items-center px-[24px] max-md:px-0">

                    {/* --- DESKTOP TOP PROGRESS BAR --- */}
                    <div className="hidden w-full max-w-[920px] items-center gap-[16px] pb-[48px] md:flex">
                        <Link href={data.topBar.backLink} className="body-small flex items-center gap-[4px] font-medium text-secondary transition hover:text-primary">
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            {data.topBar.backText}
                        </Link>
                        <div className="flex items-center gap-[8px]">
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                        </div>
                        <span className="body-small font-medium text-secondary">{data.topBar.stepTextDesktop}</span>
                    </div>

                    {/* --- MOBILE TOP PROGRESS BAR --- */}
                    <div className="flex w-full flex-col gap-[8px] px-[20px] pb-[8px] pt-[16px] md:hidden">
                        <div className="flex w-full gap-[6px]">
                            <div className="h-[4px] flex-1 rounded-full bg-[#295B42]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#D5D5D5]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#D5D5D5]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#D5D5D5]" />
                        </div>
                        <p className="font-['Host_Grotesk'] text-[12px] font-medium leading-[1.5] text-[#555]">
                            {data.topBar.stepTextMobile}
                        </p>
                    </div>

                    {/* --- PAGE HEADING --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[8px] pb-[40px] max-md:px-[20px] max-md:pb-[16px] max-md:pt-[8px]">
                        <h1 className="heading-display text-primary max-md:text-[24px] max-md:leading-[1.2]">
                            {data.heading.title}
                        </h1>
                        <p className="body-text text-secondary max-md:pt-[4px] max-md:text-[14px] max-md:leading-[1.5]">
                            {data.heading.subtitle}
                        </p>
                    </div>

                    {/* --- PAPER TYPE SECTION --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[20px] pb-[40px] max-md:h-auto max-md:px-[20px] max-md:pb-[20px] max-md:gap-0">
                            <h2 className="heading-h8 font-semibold text-primary max-md:text-[13px] max-md:leading-[1.5] max-md:uppercase max-md:tracking-[0.5px]">
                            {data.paperSection.title}
                        </h2>

                        {/* Paper Cards Grid */}
                        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 max-md:gap-[12px] max-md:pt-[12px]">
                            {data.paperSection.options.map((paper) => {
                                const isSelected = selectedPaper === paper.id;
                                return (
                                    <button
                                        key={paper.id}
                                        onClick={() => setSelectedPaper(paper.id)}
                                        className={`group relative flex h-[300px] w-full flex-col overflow-hidden rounded-[16px] border-[2px] bg-white text-left transition-all max-md:h-[86px] max-md:flex-row max-md:items-center max-md:gap-[12px] max-md:rounded-[16px] ${isSelected
                                            ? "border-primary shadow-[0_8px_24px_rgba(0,0,0,0.12)] max-md:border-[#232323] max-md:shadow-none"
                                            : "border-transparent shadow-sm hover:border-border max-md:border-[#D5D5D5] max-md:shadow-none"
                                            }`}
                                    >
                                        {/* Top Image Area */}
                                        <div className="relative h-[150px] w-full shrink-0 bg-gray-100 max-md:h-[82px] max-md:w-[80px]">
                                            <Image src={paper.img} alt={paper.imageAlt} fill className="object-cover" />
                                        </div>

                                        {/* Checkmark Indicator */}
                                        <div
                                            className={`absolute right-[12px] top-[12px] flex size-[24px] items-center justify-center rounded-full border-[1.5px] transition-all max-md:top-1/2 max-md:-translate-y-1/2 max-md:size-[20px] max-md:border-2 ${isSelected
                                                ? "border-primary bg-primary"
                                                : "border-border bg-white shadow-sm"
                                                }`}
                                        >
                                            {isSelected && (
                                                <img src={data.icons.mobileCheckIcon} alt="" className="size-[14px] max-md:size-[8px]" />
                                            )}
                                        </div>

                                        {/* Bottom Text Area */}
                                        <div className="flex flex-col gap-[8px] p-[16px] max-md:min-w-0 max-md:flex-1 max-md:gap-[2px] max-md:py-[12px] max-md:pr-[36px] max-md:pl-0">
                                            <h3 className="text-[16px] font-bold leading-[1.2] text-primary max-md:whitespace-nowrap max-md:text-[16px] max-md:leading-[1.5]">
                                                {paper.name}
                                            </h3>
                                            <p className="text-[13px] leading-[1.5] text-secondary max-md:text-[12px] max-md:leading-[1.5]">
                                                {paper.desc}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- PRINT SIZE SECTION --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[20px] pb-[24px] max-md:px-[20px] max-md:pb-0 max-md:gap-0">
                        <h2 className="heading-h8 font-semibold text-primary max-md:text-[13px] max-md:leading-[1.5] max-md:uppercase max-md:tracking-[0.5px]">
                            {data.sizeSection.title}
                        </h2>

                        {/* Sizes Grid */}
                        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-[8px] max-md:pt-[12px]">
                            {data.sizeSection.options.map((size) => {
                                const isSelected = selectedSize === size.id;
                                return (
                                    <button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={`flex flex-col items-start justify-center gap-[12px] rounded-[16px] border-[2px] bg-white p-[20px] text-left transition-all max-md:h-[92px] max-md:gap-[2px] max-md:rounded-[12px] max-md:p-[12px] ${isSelected
                                            ? "border-primary shadow-[0_4px_16px_rgba(0,0,0,0.08)] max-md:shadow-none"
                                            : "border-transparent shadow-sm hover:border-border max-md:border-[#D5D5D5] max-md:shadow-none"
                                            }`}
                                    >
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="text-[18px] font-bold text-primary max-md:text-[16px] max-md:leading-[1.5]">{size.name}</h3>
                                            <p className="text-[14px] text-secondary max-md:text-[11px] max-md:leading-[1.5]">{size.dimensions}</p>
                                        </div>
                                        <span className={`text-[16px] font-bold mt-[4px] max-md:mt-0 max-md:font-normal max-md:text-[12px] max-md:font-['IBM_Plex_Mono'] ${isSelected ? "text-forest-green" : "text-secondary"}`}>
                                            €{size.price}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- DESKTOP BOTTOM SUMMARY BAR --- */}
                    <div className="mt-[24px] flex min-h-[96px] w-full max-w-[920px] items-center justify-between border-t border-border pt-[24px] max-md:hidden">
                        <p className="body-text text-secondary">
                            {activePaper?.name} — {activeSize?.name} — <span className="font-bold text-primary">€{activeSize?.price}</span>
                        </p>

                        <Link href={data.bottomBar.nextButtonLink} className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-primary px-[32px] text-[14px] font-semibold text-white transition hover:bg-dark-surface">
                            {data.bottomBar.nextButtonText}
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* --- MOBILE BOTTOM SUMMARY --- */}
                    <div className="flex w-full flex-col gap-[12px] px-[20px] pb-[32px] pt-[20px] md:hidden">
                        <div className="flex h-[44px] w-full items-center justify-between rounded-[12px] border border-[#D5D5D5] bg-white px-[16px] py-[12px]">
                            <p className="font-['Host_Grotesk'] text-[13px] font-normal leading-[1.5] text-[#555]">
                                {activePaper?.name} · {activeSize?.name}
                            </p>
                            <p className="font-['IBM_Plex_Mono'] text-[16px] font-medium leading-[1.5] text-[#232323]">
                                €{activeSize?.price}
                            </p>
                        </div>
                        <Link href={data.bottomBar.nextButtonLink} className="inline-flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full bg-[#232323] font-['Host_Grotesk'] text-[14px] font-medium uppercase leading-[1.5] tracking-[0.5px] text-white">
                            {data.bottomBar.nextButtonText}
                            <img src={data.icons.mobileArrowIcon} alt="" className="size-[16px] brightness-0 invert" />
                        </Link>
                    </div>

                </div>
            </main>

            {/* --- FOOTER: desktop only; the mobile Figma screen ends at the CTA --- */}
            <div className="hidden md:block">
            </div>
        </div>
    );
}
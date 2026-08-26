"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// Importing the Data Layer
import { getCheckoutPaperSizeData } from "@/app/lib/data/checkoutPaperSizeData";

// ==========================================
// CHECKOUT PAPER & SIZE COMPONENT
// ==========================================

export default function CheckoutPaperSizeComponent() {
    // State for data
    const [data, setData] = useState<any>(null);

    // State for selections 
    const [selectedPaper, setSelectedPaper] = useState("satin-photo");
    const [selectedSize, setSelectedSize] = useState("20x24");

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
    const activePaper = data.paperSection.options.find((p: any) => p.id === selectedPaper);
    const activeSize = data.sizeSection.options.find((s: any) => s.id === selectedSize);

    return (
        <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
            {/* --- HEADER --- */}
            <Header />

            {/* --- MAIN PAGE CONTENT --- */}
            <main className="flex w-full flex-1 flex-col items-center py-[40px] sm:py-[64px]">
                {/* Main Wrapper matching Figma's 1000px width for the content column */}
                <div className="flex w-full max-w-[1000px] flex-col items-center px-[24px]">

                    {/* --- TOP PROGRESS BAR --- */}
                    <div className="flex w-full max-w-[920px] items-center gap-[16px] pb-[48px]">
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
                        <span className="body-small font-medium text-secondary">{data.topBar.stepText}</span>
                    </div>

                    {/* --- PAGE HEADING --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[8px] pb-[40px]">
                        <h1 className="text-[36px] font-bold leading-[1.1] text-primary sm:text-[40px]">
                            {data.heading.title}
                        </h1>
                        <p className="body-text text-secondary">
                            {data.heading.subtitle}
                        </p>
                    </div>

                    {/* --- PAPER TYPE SECTION --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[20px] pb-[40px]">
                        <h2 className="text-[20px] font-bold text-primary">{data.paperSection.title}</h2>

                        {/* Paper Cards Grid */}
                        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
                            {data.paperSection.options.map((paper: any) => {
                                const isSelected = selectedPaper === paper.id;
                                return (
                                    <button
                                        key={paper.id}
                                        onClick={() => setSelectedPaper(paper.id)}
                                        className={`group relative flex h-[300px] w-full flex-col overflow-hidden rounded-[16px] border-[2px] bg-white text-left transition-all ${isSelected
                                            ? "border-primary shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                                            : "border-transparent shadow-sm hover:border-border"
                                            }`}
                                    >
                                        {/* Top Image Area */}
                                        <div className="relative h-[150px] w-full shrink-0 bg-gray-100">
                                            <Image src={paper.img} alt={paper.name} fill className="object-cover" />

                                            {/* Checkmark Indicator */}
                                            <div
                                                className={`absolute right-[12px] top-[12px] flex size-[24px] items-center justify-center rounded-full border-[1.5px] transition-all ${isSelected
                                                    ? "border-primary bg-primary"
                                                    : "border-border bg-white shadow-sm"
                                                    }`}
                                            >
                                                {isSelected && (
                                                    <svg className="size-[14px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bottom Text Area */}
                                        <div className="flex flex-col gap-[8px] p-[16px]">
                                            <h3 className="text-[16px] font-bold leading-[1.2] text-primary">
                                                {paper.name}
                                            </h3>
                                            <p className="text-[13px] leading-[1.5] text-secondary">
                                                {paper.desc}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- PRINT SIZE SECTION --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[20px] pb-[24px]">
                        <h2 className="text-[20px] font-bold text-primary">{data.sizeSection.title}</h2>

                        {/* Sizes Grid */}
                        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
                            {data.sizeSection.options.map((size: any) => {
                                const isSelected = selectedSize === size.id;
                                return (
                                    <button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={`flex flex-col items-start justify-center gap-[12px] rounded-[16px] border-[2px] bg-white p-[20px] text-left transition-all ${isSelected
                                            ? "border-primary shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                                            : "border-transparent shadow-sm hover:border-border"
                                            }`}
                                    >
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="text-[18px] font-bold text-primary">{size.name}</h3>
                                            <p className="text-[14px] text-secondary">{size.dimensions}</p>
                                        </div>
                                        <span className={`text-[16px] font-bold ${isSelected ? "text-forest-green" : "text-secondary"}`}>
                                            €{size.price}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- BOTTOM SUMMARY BAR --- */}
                    <div className="mt-[24px] flex min-h-[96px] w-full max-w-[920px] items-center justify-between border-t border-border pt-[24px]">
                        <p className="body-text text-secondary">
                            {activePaper?.name} — {activeSize?.name} — €{activeSize?.price}
                        </p>

                        <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-primary px-[32px] text-[14px] font-semibold text-white transition hover:bg-dark-surface">
                            {data.bottomBar.nextButtonText}
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                </div>
            </main>

            {/* --- FOOTER --- */}
            <Footer />
        </div>
    );
}
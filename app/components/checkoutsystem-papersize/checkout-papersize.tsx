"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// ==========================================
// MOCK DATA
// ==========================================

const paperOptions = [
    {
        id: "art-paper",
        name: "Art Paper",
        desc: "Premium acid-free art paper. Available in multiple GSM weights for fine art reproduction. Ideal for giclée prints.",
        img: "/Printshop/Images/Section3.png",
    },
    {
        id: "satin-photo",
        name: "Satin Photo Paper",
        desc: "Semi-gloss finish with vibrant colour reproduction. Perfect for photographs and high-contrast images.",
        img: "/Printshop/Images/Section1.png",
    },
    {
        id: "matte-photo",
        name: "Matte Photo Paper",
        desc: "Non-reflective finish with rich, deep tones. Ideal for portraits, landscapes, and exhibition prints.",
        img: "/Printshop/Images/Section3.png",
    },
    {
        id: "canvas",
        name: "Canvas",
        desc: "Archival-grade canvas for stretched or framed prints. Museum-quality texture and durability.",
        img: "/Printshop/Images/Section1.png",
    },
];

const printSizes = [
    { id: "a4", name: "A4", dimensions: "210 × 297 mm", price: 25 },
    { id: "a3", name: "A3", dimensions: "297 × 420 mm", price: 40 },
    { id: "a2", name: "A2", dimensions: "420 × 594 mm", price: 65 },
    { id: "a1", name: "A1", dimensions: "594 × 841 mm", price: 95 },
    { id: "12x16", name: '12" × 16"', dimensions: "305 × 406 mm", price: 50 },
    { id: "20x24", name: '20" × 24"', dimensions: "508 × 610 mm", price: 75 },
];

// ==========================================
// CHECKOUT PAPER & SIZE COMPONENT
// ==========================================

export default function CheckoutPaperSizeComponent() {
    // State for selections 
    const [selectedPaper, setSelectedPaper] = useState("satin-photo");
    const [selectedSize, setSelectedSize] = useState("20x24");

    // Derived values for the bottom summary bar
    const activePaper = paperOptions.find((p) => p.id === selectedPaper);
    const activeSize = printSizes.find((s) => s.id === selectedSize);

    return (
        <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
            {/* --- HEADER --- */}
            <Header />

            {/* --- MAIN PAGE CONTENT --- */}
            <main className="flex w-full flex-1 flex-col items-center py-[40px] sm:py-[64px]">
                {/* Main Wrapper matching Figma's 1000px width */}
                <div className="flex w-full max-w-[1000px] flex-col px-[24px] lg:px-[40px]">

                    {/* --- TOP PROGRESS BAR --- */}
                    <div className="flex w-full max-w-[920px] items-center gap-[16px] pb-[48px]">
                        <Link href="/printshop" className="body-small flex items-center gap-[4px] font-medium text-secondary transition hover:text-primary">
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back
                        </Link>
                        <div className="flex items-center gap-[8px]">
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                        </div>
                        <span className="body-small font-medium text-secondary">Step 2 of 5</span>
                    </div>

                    {/* --- PAGE HEADING --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[8px] pb-[40px]">
                        <h1 className="text-[36px] font-bold leading-[1.1] text-primary sm:text-[40px]">
                            Choose Your Paper & Size
                        </h1>
                        <p className="body-text text-secondary">
                            Select the paper type and print dimensions.
                        </p>
                    </div>

                    {/* --- PAPER TYPE SECTION --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[20px] pb-[56px]">
                        <h2 className="text-[20px] font-bold text-primary">Paper Type</h2>

                        {/* Paper Cards Grid */}
                        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
                            {paperOptions.map((paper) => {
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
                                        <div className="relative h-[140px] w-full shrink-0 bg-gray-100">
                                            <Image src={paper.img} alt={paper.name} fill className="object-cover" />

                                            {/* Checkmark Indicator */}
                                            <div
                                                className={`absolute right-[12px] top-[12px] flex size-[24px] items-center justify-center rounded-full border transition-all ${isSelected
                                                        ? "border-primary bg-primary"
                                                        : "border-white bg-white/80 shadow-sm group-hover:bg-white"
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
                    <div className="flex w-full max-w-[920px] flex-col gap-[20px] pb-[56px]">
                        <h2 className="text-[20px] font-bold text-primary">Print Size</h2>

                        {/* Sizes Grid */}
                        <div className="grid w-full grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
                            {printSizes.map((size) => {
                                const isSelected = selectedSize === size.id;
                                return (
                                    <button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={`flex flex-col items-start justify-center gap-[8px] rounded-[12px] border-[2px] bg-white p-[20px] text-left transition-all ${isSelected
                                                ? "border-primary shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                                                : "border-transparent shadow-sm hover:border-border"
                                            }`}
                                    >
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="text-[18px] font-bold text-primary">{size.name}</h3>
                                            <p className="text-[14px] text-secondary">{size.dimensions}</p>
                                        </div>
                                        <span className={`text-[16px] font-bold mt-[4px] ${isSelected ? "text-forest-green" : "text-secondary"}`}>
                                            €{size.price}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- BOTTOM SUMMARY BAR --- */}
                    <div className="flex w-full max-w-[920px] items-center justify-between border-t border-border pt-[24px] sm:pt-[32px]">
                        <p className="body-text text-secondary">
                            {activePaper?.name} — {activeSize?.name} — <span className="font-bold text-primary">€{activeSize?.price}</span>
                        </p>

                        <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-primary px-[32px] text-[14px] font-semibold text-white transition hover:bg-dark-surface">
                            Next
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
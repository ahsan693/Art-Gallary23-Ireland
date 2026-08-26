"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// Importing the Data Layer
import { getCheckoutReviewData } from "@/app/lib/data/checkoutReviewData";

// ==========================================
// CHECKOUT REVIEW COMPONENT
// ==========================================

export default function CheckoutReviewComponent() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const pageData = await getCheckoutReviewData();
            setData(pageData);
        };
        fetchData();
    }, []);

    if (!data) return <div className="min-h-screen bg-warm-cream" />;

    return (
        <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
            
            {/* --- HEADER --- */}
            <div className="hidden md:block">
                <Header />
            </div>

            {/* --- MAIN PAGE CONTENT --- */}
            <main className="flex w-full flex-1 flex-col items-center py-[40px] sm:py-[64px] max-md:py-[24px]">
                <div className="flex w-full max-w-[1000px] flex-col items-center px-[24px]">

                    {/* --- TOP PROGRESS BAR --- */}
                    <div className="hidden w-full max-w-[920px] items-center gap-[16px] pb-[48px] md:flex">
                        <Link href={data.topBar.backLink} className="body-small flex items-center gap-[4px] font-medium text-secondary transition hover:text-primary">
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            {data.topBar.backText}
                        </Link>
                        <div className="flex items-center gap-[8px]">
                            {/* Step 4 of 5: 4 Green, 1 Gray */}
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                        </div>
                        <span className="body-small font-medium text-secondary">{data.topBar.stepText}</span>
                    </div>

                    {/* --- MOBILE PROGRESS BAR --- */}
                    <div className="flex w-full flex-col gap-[8px] pb-[24px] md:hidden">
                        <div className="flex w-full gap-[6px]">
                            <div className="h-[4px] flex-1 rounded-full bg-forest-green" />
                            <div className="h-[4px] flex-1 rounded-full bg-forest-green" />
                            <div className="h-[4px] flex-1 rounded-full bg-forest-green" />
                            <div className="h-[4px] flex-1 rounded-full bg-border" />
                        </div>
                        <p className="font-['Host_Grotesk'] text-[12px] font-medium leading-[1.5] text-[#555]">
                            {data.topBar.stepText}
                        </p>
                    </div>

                    {/* --- PAGE HEADING --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[8px] pb-[40px] max-md:pb-[24px]">
                        <h1 className="text-[36px] font-bold leading-[1.1] text-primary sm:text-[40px] max-md:text-[28px]">
                            {data.heading.title}
                        </h1>
                        <p className="body-text text-secondary">
                            {data.heading.subtitle}
                        </p>
                    </div>

                    {/* --- TWO COLUMN CONTENT GRID --- */}
                    {/* Changed items-start to items-stretch to force equal height columns */}
                    <div className="grid w-full max-w-[920px] grid-cols-1 items-stretch gap-[32px] pb-[24px] lg:grid-cols-2">
                        
                        {/* LEFT COLUMN: Order Summary */}
                        {/* Added h-full to make it fill the stretched container space */}
                        <div className="flex h-full flex-col rounded-[20px] border border-border bg-white p-[24px] lg:p-[32px]">
                            <h2 className="mb-[24px] text-[20px] font-bold text-primary">{data.orderSummary.title}</h2>
                            
                            {/* Added flex-1 and mb-[24px] to push the Total area to the bottom */}
                            <div className="flex flex-1 flex-col gap-[16px] mb-[24px]">
                                {data.orderSummary.items.map((item: any, index: number) => (
                                    <div key={index} className="flex justify-between items-start gap-[16px]">
                                        <span className="text-[15px] text-secondary">{item.label}</span>
                                        <span className="text-[15px] font-medium text-primary text-right">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-border pt-[24px] flex justify-between items-center">
                                <span className="text-[18px] font-bold text-primary">Total</span>
                                <span className="text-[24px] font-bold text-primary">{data.orderSummary.total}</span>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact & Payment Details */}
                        <div className="flex flex-col gap-[24px]">
                            
                            {/* Contact Details Card */}
                            <div className="flex flex-col rounded-[20px] border border-border bg-white p-[24px] lg:p-[32px]">
                                <h2 className="mb-[24px] text-[20px] font-bold text-primary">{data.contactDetails.title}</h2>
                                <div className="flex flex-col gap-[16px]">
                                    {data.contactDetails.items.map((item: any, index: number) => (
                                        <div key={index} className="flex justify-between items-start gap-[16px]">
                                            <span className="text-[15px] text-secondary">{item.label}</span>
                                            <span className="text-[15px] font-medium text-primary text-right">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cash on Delivery Card (Tinted Background) */}
                            <div className="flex flex-col rounded-[20px] border border-border bg-[#F7F9F7] p-[24px] lg:p-[32px]">
                                <div className="flex items-center gap-[12px] mb-[16px]">
                                    <div className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-forest-green text-white">
                                        <svg className="size-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[20px] font-bold text-primary">{data.cashOnDelivery.title}</h2>
                                </div>
                                
                                <p className="body-text text-secondary mb-[24px]">
                                    {data.cashOnDelivery.description}
                                </p>

                                {/* Inner Payment Method Box */}
                                <div className="flex flex-col gap-[8px] rounded-[12px] border border-border bg-white p-[16px] mb-[24px]">
                                    <span className="text-[12px] font-bold uppercase tracking-[0.5px] text-secondary">
                                        {data.cashOnDelivery.paymentMethodLabel}
                                    </span>
                                    <span className="text-[15px] font-medium text-primary">
                                        {data.cashOnDelivery.paymentMethodValue}
                                    </span>
                                </div>

                                <p className="text-[13px] leading-[1.5] text-secondary">
                                    {data.cashOnDelivery.footerTextPrefix}
                                    <span className="font-bold text-primary">{data.cashOnDelivery.footerEmail}</span>
                                    {data.cashOnDelivery.footerTextSuffix}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* --- DESKTOP BOTTOM SUMMARY BAR --- */}
                    <div className="mt-[24px] flex min-h-[96px] w-full max-w-[920px] items-center justify-between border-t border-border pt-[24px]">
                        <p className="body-text text-secondary max-md:hidden">
                            {data.bottomBar.agreementText}
                        </p>

                        <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-forest-green px-[32px] text-[14px] font-bold text-white transition hover:bg-[#1f4733] max-md:w-full">
                            {data.bottomBar.confirmButtonText}
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </main>

            {/* --- FOOTER --- */}
            <div className="hidden md:block">
                <Footer />
            </div>
        </div>
    );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Importing the page data layer
import { getCheckoutConfirmedData } from "@/app/lib/data/checkoutConfirmedData";

// ==========================================
// CHECKOUT CONFIRMED COMPONENT
// ==========================================

export default function CheckoutConfirmedComponent() {
    type CheckoutConfirmedData = Awaited<ReturnType<typeof getCheckoutConfirmedData>>;
    const [data, setData] = useState<CheckoutConfirmedData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const pageData = await getCheckoutConfirmedData();
            setData(pageData);
        };
        fetchData();
    }, []);

    if (!data) return <div className="min-h-screen bg-warm-cream" />;

    return (
        <div className="flex min-h-screen flex-col bg-warm-cream text-primary">

            {/* The shared Header/Footer are rendered by the root layout. */}
            <div className="md:hidden">
                <div className="flex h-[29px] w-full items-center justify-center bg-[#295B42] px-[16px] py-[8px]">
                    <p className="whitespace-nowrap text-center font-['Host_Grotesk'] text-[11px] font-normal leading-[1.5] tracking-[0.4px] text-white">
                        {data.mobileHeader.bannerText}
                    </p>
                </div>
                <div className="flex h-[56px] w-full items-center justify-between border-b border-[#D5D5D5] bg-white px-[16px]">
                    <Link
                        href={data.mobileHeader.backLink}
                        aria-label={data.mobileHeader.backLabel}
                        className="flex size-[36px] items-center justify-center -ml-[8px]"
                    >
                        <img src={data.icons.mobileBackIcon} alt={data.icons.mobileBackAlt} className="size-[18px]" />
                    </Link>
                    <p className="font-['Host_Grotesk'] text-[18px] font-bold uppercase leading-[1.4] tracking-[1px] text-[#232323]">
                        {data.mobileHeader.title}
                    </p>
                    <button type="button" aria-label={data.mobileHeader.cartLabel} className="flex size-[36px] items-center justify-center">
                        <img src={data.icons.mobileBagIcon} alt={data.icons.mobileBagAlt} className="size-[20px]" />
                    </button>
                </div>
            </div>

            {/* --- MAIN PAGE CONTENT --- */}
            <main className="flex w-full flex-1 flex-col items-center py-[64px] max-md:py-[40px] md:bg-transparent">

                {/* 600px narrow container perfectly centered per Figma */}
                <div className="flex w-full max-w-[600px] flex-col items-center gap-[32px] px-[24px] max-md:gap-[28px] max-md:px-[20px]">

                    {/* Checkmark, Title, & Message */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex size-[80px] items-center justify-center rounded-full bg-forest-green text-white max-md:size-[64px] mb-[24px] max-md:mb-[20px]">
                            <svg className="size-[32px] max-md:size-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-[36px] font-bold leading-[1.1] text-primary sm:text-[40px] max-md:text-[28px] mb-[8px]">
                            {data.orderInfo.title}
                        </h1>
                        <p className="font-['IBM_Plex_Mono'] text-[14px] font-bold uppercase tracking-[1px] text-forest-green mb-[24px] max-md:mb-[20px]">
                            {data.orderInfo.orderId}
                        </p>

                        <p className="body-text text-secondary max-w-[480px] max-md:text-[14px] max-md:leading-[1.5]">
                            {data.orderInfo.thankYouPrefix}
                            <span className="font-medium text-primary">{data.orderInfo.customerName}</span>
                            {data.orderInfo.thankYouMiddle}
                            <span className="font-medium text-primary">{data.orderInfo.customerEmail}</span>
                            {data.orderInfo.thankYouSuffix}
                        </p>
                    </div>

                    {/* "What happens next?" Card */}
                    <div className="flex w-full flex-col rounded-[20px] border border-border bg-white p-[32px] max-md:rounded-[16px] max-md:p-[24px]">
                        <h2 className="mb-[24px] text-[16px] font-bold text-primary max-md:text-[15px]">
                            {data.nextSteps.title}
                        </h2>

                        <div className="flex flex-col gap-[20px] max-md:gap-[16px]">
                            {data.nextSteps.steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-[16px]">
                                    <div className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] text-[13px] font-bold text-primary max-md:size-[24px] max-md:text-[12px]">
                                        {index + 1}
                                    </div>
                                    <p className="pt-[4px] text-[14px] leading-[1.5] text-secondary max-md:pt-[2px] max-md:text-[13px]">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Support Card */}
                    <div className="flex w-full items-center justify-center rounded-[16px] border border-border bg-[#F7F9F7] p-[24px] text-center max-md:p-[20px]">
                        <p className="text-[13px] leading-[1.6] text-secondary max-md:text-[12px]">
                            {data.contactSupport.prefix}
                            <span className="font-bold text-primary">{data.contactSupport.email}</span>
                            {data.contactSupport.middle}
                            <span className="font-bold text-primary">{data.contactSupport.phone}</span>
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Link href={data.bottomBar.buttonLink} className="mt-[8px] inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-forest-green px-[32px] font-['Host_Grotesk'] text-[14px] font-medium uppercase tracking-[0.5px] text-white transition hover:bg-[#1f4733] max-md:w-full max-md:mt-[4px]">
                        {data.bottomBar.buttonText}
                        <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                </div>
            </main>

        </div>
    );
}
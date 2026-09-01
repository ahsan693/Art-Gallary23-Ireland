"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Importing the page data layer
import { getCheckoutReviewData } from "@/app/lib/data/checkoutReviewData";

// ==========================================
// CHECKOUT REVIEW COMPONENT
// ==========================================

export default function CheckoutReviewComponent() {
    type CheckoutReviewData = Awaited<ReturnType<typeof getCheckoutReviewData>>;
    const [data, setData] = useState<CheckoutReviewData | null>(null);

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

            {/* The shared Header/Footer are rendered by the root layout. */}
            <div className="md:hidden">
                <div className="flex h-[29px] w-full items-center justify-center bg-[#295B42] px-[16px] py-[8px]">
                    <p className="whitespace-nowrap text-center font-['Host_Grotesk'] text-[11px] font-normal leading-[1.5] tracking-[0.4px] text-white">
                        {data.mobileHeader.bannerText}
                    </p>
                </div>
                <div className="flex h-[56px] w-full items-center justify-between border-b border-[#D5D5D5] bg-white px-[16px]">
                    <Link
                        href={data.topBar.backLink}
                        aria-label={data.topBar.backText}
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
            <main className="flex w-full flex-1 flex-col items-center py-[40px] sm:py-[64px] max-md:py-0 md:bg-transparent">
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
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                        </div>
                        <span className="body-small font-medium text-secondary">{data.topBar.stepTextDesktop}</span>
                    </div>

                    {/* --- MOBILE PROGRESS BAR --- */}
                    <div className="flex w-full flex-col gap-[8px] px-[20px] pb-[8px] pt-[16px] md:hidden">
                        <div className="flex w-full gap-[8px]">
                            <div className="h-[4px] flex-1 rounded-full bg-[#295B42]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#295B42]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#295B42]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#D5D5D5]" />
                        </div>
                        <p className="font-['Host_Grotesk'] text-[12px] font-medium leading-[1.5] text-[#555]">
                            {data.topBar.stepTextMobile}
                        </p>
                    </div>

                    {/* --- PAGE HEADING --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[8px] pb-[40px] max-md:px-[20px] max-md:pb-[24px] max-md:pt-[8px]">
                        <h1 className="heading-display text-primary">
                            <span className="md:hidden">{data.heading.titleMobile}</span>
                            <span className="hidden md:inline">{data.heading.titleDesktop}</span>
                        </h1>
                        <p className="body-text text-secondary max-md:pt-[4px] max-md:text-[14px] max-md:leading-[1.5]">
                            <span className="max-md:hidden">{data.heading.descriptionDesktop}</span>
                            <span className="hidden max-md:inline">{data.heading.descriptionMobile}</span>
                        </p>
                    </div>

                    {/* --- TWO COLUMN CONTENT GRID --- */}
                    <div className="grid w-full max-w-[920px] grid-cols-1 items-stretch gap-[32px] pb-[24px] lg:grid-cols-2 max-md:gap-[16px] max-md:px-[20px] max-md:pb-[32px]">

                        {/* LEFT COLUMN: Order Summary */}
                        <div className="flex h-full flex-col rounded-[20px] border border-border bg-white p-[24px] lg:p-[32px] max-md:rounded-[16px] max-md:p-[16px]">
                            <h2 className="heading-h8 mb-[24px] font-bold text-primary max-md:mb-[16px] max-md:uppercase max-md:tracking-[0.5px]">
                                {data.orderSummary.title}
                            </h2>

                            <div className="flex flex-1 flex-col gap-[16px] mb-[24px] max-md:gap-[12px] max-md:mb-[16px]">
                                {data.orderSummary.items.map((item, index) => (
                                    <div key={index} className="flex justify-between items-start gap-[16px]">
                                        <span className="body-text text-secondary">{item.label}</span>
                                        <span className="body-text font-medium text-primary text-right">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-border pt-[24px] flex justify-between items-center max-md:pt-[16px]">
                                <span className="text-[18px] font-bold text-primary max-md:text-[16px]">{data.orderSummary.totalLabel}</span>
                                <span className="text-[24px] font-bold text-primary max-md:text-[20px]">{data.orderSummary.total}</span>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact & Payment Details */}
                        <div className="flex flex-col gap-[24px] max-md:gap-[16px]">

                            {/* Contact Details Card */}
                            <div className="flex flex-col rounded-[20px] border border-border bg-white p-[24px] lg:p-[32px] max-md:rounded-[16px] max-md:p-[16px]">
                                <h2 className="heading-h8 mb-[24px] font-bold text-primary max-md:mb-[16px] max-md:uppercase max-md:tracking-[0.5px]">
                                    {data.contactDetails.title}
                                </h2>
                                <div className="flex flex-col gap-[16px] max-md:gap-[12px]">
                                    {data.contactDetails.items.map((item, index) => (
                                        <div key={index} className="flex justify-between items-start gap-[16px]">
                                            <span className="body-text text-secondary">{item.label}</span>
                                            {item.label === "Email" ? (
                                                <a href={`mailto:${item.value}`} className="body-text font-medium text-primary text-right hover:text-forest-green">{item.value}</a>
                                            ) : <span className="body-text font-medium text-primary text-right">{item.value}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cash on Delivery Card (Tinted Background) */}
                            <div className="flex flex-col rounded-[20px] border border-border bg-[#F7F9F7] p-[24px] lg:p-[32px] max-md:rounded-[16px] max-md:p-[16px]">
                                <div className="flex items-center gap-[12px] mb-[16px] max-md:gap-[10px] max-md:mb-[12px]">
                                    <div className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-forest-green text-white max-md:size-[20px]">
                                        <svg className="size-[14px] max-md:size-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="heading-h8 font-bold text-primary">{data.cashOnDelivery.title}</h2>
                                </div>

                                {/* Desktop Description */}
                                <p className="body-text text-secondary mb-[24px] max-md:hidden">
                                    {data.cashOnDelivery.descriptionDesktop}
                                </p>

                                {/* Mobile Description */}
                                <p className="hidden caption text-secondary mb-[16px] max-md:block">
                                    {data.cashOnDelivery.descriptionMobile}
                                </p>

                                {/* Inner Payment Method Box */}
                                <div className="flex flex-col gap-[8px] rounded-[12px] border border-border bg-white p-[16px] mb-[24px] max-md:mb-0 max-md:p-[12px] max-md:flex-row max-md:items-center">
                                    <span className="text-[12px] font-bold uppercase tracking-[0.5px] text-secondary max-md:hidden">
                                        {data.cashOnDelivery.paymentMethodLabel}
                                    </span>
                                    <span className="text-[15px] font-medium text-primary max-md:text-[14px]">
                                        {data.cashOnDelivery.paymentMethodValue}
                                    </span>
                                </div>

                                {/* Desktop Footer Info */}
                                <p className="caption text-secondary max-md:hidden">
                                    {data.cashOnDelivery.footerTextDesktop}
                                    <a href={`mailto:${data.cashOnDelivery.footerEmail}`} className="font-bold text-primary hover:text-forest-green">{data.cashOnDelivery.footerEmail}</a>
                                    {data.cashOnDelivery.footerTextSuffix}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* --- DESKTOP BOTTOM SUMMARY BAR --- */}
                    {/* --- DESKTOP BOTTOM SUMMARY BAR --- */}
                    <div className="mt-[24px] flex min-h-[96px] w-full max-w-[920px] items-center justify-between border-t border-border pt-[24px] max-md:hidden">
                        <p className="body-text text-secondary">
                            {data.bottomBar.agreementText}
                        </p>

                        <Link href={data.bottomBar.confirmButtonlink} className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-forest-green px-[32px] text-[14px] font-bold text-white transition hover:bg-[#1f4733]">
                            {data.bottomBar.confirmButtonText}
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* --- MOBILE BOTTOM SUMMARY AREA --- */}
                    <div className="flex w-full flex-col items-center gap-[16px] px-[20px] pb-[40px] pt-[8px] md:hidden">
                        {/* Notice the "uppercase" class here makes it CONFIRM ORDER automatically! */}
                        <Link href={data.bottomBar.confirmButtonlink} className="inline-flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full bg-forest-green font-['Host_Grotesk'] text-[14px] font-medium uppercase leading-[1.5] tracking-[0.5px] text-white transition hover:bg-[#1f4733]">
                            {data.bottomBar.confirmButtonText}
                            <img src={data.icons.mobileArrowIcon} alt="" className="size-[16px] brightness-0 invert" />
                        </Link>

                        <p className="text-center small text-secondary">
                            {data.cashOnDelivery.footerTextMobile}
                            <a href={`mailto:${data.cashOnDelivery.footerEmail}`} className="font-medium text-primary hover:text-forest-green">{data.cashOnDelivery.footerEmail}</a>
                        </p>
                    </div>

                </div>
            </main>

        </div>
    );
}
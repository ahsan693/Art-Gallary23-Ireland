"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Importing the reusable Header and Footer from your Home page component
import { Header, Footer } from "@/app/components/home/home";

// Importing the Data Layer
import { getCheckoutDetailsData, pickupLocations } from "@/app/lib/data/checkoutDetailsData";

// ==========================================
// CHECKOUT DETAILS COMPONENT
// ==========================================

export default function CheckoutDetailsComponent() {
    const [data, setData] = useState<any>(null);
    const [pickupLocation, setPickupLocation] = useState("kimmage"); // Default selection
    
    // Ref to handle hidden file input
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            const pageData = await getCheckoutDetailsData();
            setData(pageData);
        };
        fetchData();
    }, []);

    // Trigger native file picker
    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    if (!data) return <div className="min-h-screen bg-warm-cream" />;

    return (
        <div className="flex min-h-screen flex-col bg-warm-cream text-primary">
            
            {/* --- DESKTOP HEADER --- */}
            <div className="hidden md:block">
                <Header />
            </div>

            {/* --- MOBILE HEADER --- */}
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
                        <img src={data.icons.mobileBackIcon} alt="Back" className="size-[18px]" />
                    </Link>
                    <p className="font-['Host_Grotesk'] text-[18px] font-bold uppercase leading-[1.4] tracking-[1px] text-[#232323]">
                        {data.mobileHeader.title}
                    </p>
                    <button type="button" aria-label="Cart" className="flex size-[36px] items-center justify-center">
                        <img src={data.icons.mobileBagIcon} alt="Cart" className="size-[20px]" />
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
                            {/* Step 3 of 5 */}
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-forest-green" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                            <div className="h-[4px] w-[32px] rounded-full bg-border" />
                        </div>
                        <span className="body-small font-medium text-secondary">{data.topBar.stepTextDesktop}</span>
                    </div>

                    {/* --- MOBILE TOP PROGRESS BAR --- */}
                    <div className="flex w-full flex-col gap-[8px] px-[20px] pb-[8px] pt-[16px] md:hidden">
                        <div className="flex w-full gap-[6px]">
                            {/* Step 2 of 4 on Mobile */}
                            <div className="h-[4px] flex-1 rounded-full bg-[#295B42]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#295B42]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#D5D5D5]" />
                            <div className="h-[4px] flex-1 rounded-full bg-[#D5D5D5]" />
                        </div>
                        <p className="font-['Host_Grotesk'] text-[12px] font-medium leading-[1.5] text-[#555]">
                            {data.topBar.stepTextMobile}
                        </p>
                    </div>

                    {/* --- PAGE HEADING --- */}
                    <div className="flex w-full max-w-[920px] flex-col gap-[8px] pb-[40px] max-md:px-[20px] max-md:pb-[24px] max-md:pt-[8px]">
                        <h1 className="text-[36px] font-bold leading-[1.1] text-primary sm:text-[40px] max-md:text-[24px] max-md:leading-[1.2]">
                            {data.heading.title}
                        </h1>
                        <p className="body-text text-secondary max-md:text-[14px] max-md:leading-[1.5]">
                            {data.heading.subtitle}
                        </p>
                    </div>

                    {/* --- FORM GRID --- */}
                    <form className="grid w-full max-w-[920px] grid-cols-1 gap-[32px] pb-[24px] lg:grid-cols-2 max-md:gap-[20px] max-md:px-[20px]" onSubmit={(e) => e.preventDefault()}>
                        
                        {/* LEFT COLUMN: Artwork Details */}
                        <div className="flex flex-col gap-[24px] max-md:gap-[16px] max-md:rounded-[16px] max-md:border max-md:border-border max-md:bg-white max-md:p-[16px]">
                            <h2 className="text-[20px] font-bold text-primary max-md:text-[14px] max-md:uppercase max-md:tracking-[0.4px]">
                                {data.form.leftColTitle}
                            </h2>
                            
                            {/* Artwork Description Input */}
                            <div className="flex flex-col gap-[8px] max-md:gap-[4px]">
                                <label className="text-[14px] font-bold text-primary max-md:text-[13px]">{data.form.labels.artworkDesc}</label>
                                <input 
                                    type="text" 
                                    placeholder={data.form.labels.artworkDescPlaceholder} 
                                    className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green max-md:h-[45px] max-md:rounded-[10px] max-md:border-[2px] max-md:bg-[#f9f9f9] max-md:px-[12px] max-md:text-[14px]" 
                                />
                            </div>

                            {/* Special Instructions Textarea */}
                            <div className="flex flex-col gap-[8px] max-md:gap-[4px]">
                                <label className="text-[14px] font-bold text-primary max-md:text-[13px]">{data.form.labels.instructions}</label>
                                <textarea 
                                    placeholder={data.form.labels.instructionsPlaceholder} 
                                    className="h-[120px] w-full resize-y rounded-[8px] border border-border bg-white p-[16px] text-[15px] outline-none transition-colors focus:border-forest-green max-md:h-[87px] max-md:rounded-[10px] max-md:border-[2px] max-md:bg-[#f9f9f9] max-md:p-[12px] max-md:text-[14px]" 
                                />
                            </div>

                            {/* File Upload Box */}
                            <div className="mt-[8px] flex flex-col items-center justify-center gap-[16px] rounded-[16px] border-[2px] border-dashed border-border bg-white p-[32px] text-center transition-colors hover:border-forest-green/50 hover:bg-[#fafafa] max-md:mt-0 max-md:min-h-[193px] max-md:gap-[12px] max-md:rounded-[14px] max-md:p-[24px_16px]">
                                <svg className="size-[32px] text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                
                                <div className="flex flex-col gap-[8px]">
                                    <h3 className="text-[16px] font-bold text-primary max-md:text-[14px] max-md:font-medium">{data.form.upload.title}</h3>
                                    <p className="text-[13px] leading-[1.5] text-secondary max-md:text-[12px] max-md:text-center">
                                        {data.form.upload.subtitle}
                                        <a href={`mailto:${data.form.upload.email}`} className="font-semibold text-forest-green hover:underline">
                                            {data.form.upload.email}
                                        </a>
                                        {data.form.upload.suffix}
                                    </p>
                                </div>

                                {/* Hidden File Input */}
                                <input type="file" ref={fileInputRef} className="hidden" accept=".tiff,.jpg,.jpeg,.pdf" />
                                
                                {/* Trigger Button */}
                                <button 
                                    type="button" 
                                    onClick={handleFileClick}
                                    className="mt-[8px] inline-flex h-[40px] items-center justify-center rounded-full bg-warm-cream px-[24px] text-[14px] font-bold text-primary transition-colors hover:bg-[#ebe5dc] max-md:mt-[4px] max-md:h-[35px] max-md:px-[20px] max-md:text-[13px]"
                                >
                                    {data.form.upload.buttonText}
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact Information */}
                        <div className="flex flex-col gap-[24px] max-md:gap-[20px]">
                            
                            <div className="flex flex-col gap-[16px] max-md:rounded-[16px] max-md:border max-md:border-border max-md:bg-white max-md:p-[16px] lg:contents">
                                <h2 className="text-[20px] font-bold text-primary max-md:text-[14px] max-md:uppercase max-md:tracking-[0.4px]">
                                    {data.form.rightColTitle}
                                </h2>

                                {/* Name Row */}
                                <div className="grid grid-cols-2 gap-[16px] max-md:gap-[12px]">
                                    <div className="flex flex-col gap-[8px] max-md:gap-[4px]">
                                        <label className="text-[14px] font-bold text-primary max-md:text-[13px]">{data.form.labels.firstName}</label>
                                        <input type="text" placeholder="Jane" className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green max-md:h-[45px] max-md:rounded-[10px] max-md:border-[2px] max-md:bg-[#f9f9f9] max-md:px-[12px] max-md:text-[14px]" />
                                    </div>
                                    <div className="flex flex-col gap-[8px] max-md:gap-[4px]">
                                        <label className="text-[14px] font-bold text-primary max-md:text-[13px]">{data.form.labels.lastName}</label>
                                        <input type="text" placeholder="Smith" className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green max-md:h-[45px] max-md:rounded-[10px] max-md:border-[2px] max-md:bg-[#f9f9f9] max-md:px-[12px] max-md:text-[14px]" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-[8px] max-md:gap-[4px]">
                                    <label className="text-[14px] font-bold text-primary max-md:text-[13px]">{data.form.labels.email}</label>
                                    <input type="email" placeholder="jane@example.com" className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green max-md:h-[45px] max-md:rounded-[10px] max-md:border-[2px] max-md:bg-[#f9f9f9] max-md:px-[12px] max-md:text-[14px]" />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-[8px] max-md:gap-[4px]">
                                    <label className="text-[14px] font-bold text-primary max-md:text-[13px]">{data.form.labels.phone}</label>
                                    <input type="tel" placeholder="+353 87 000 0000" className="h-[50px] w-full rounded-[8px] border border-border bg-white px-[16px] text-[15px] outline-none transition-colors focus:border-forest-green max-md:h-[45px] max-md:rounded-[10px] max-md:border-[2px] max-md:bg-[#f9f9f9] max-md:px-[12px] max-md:text-[14px]" />
                                </div>
                            </div>

                            {/* Pickup Location Radios */}
                            <div className="flex flex-col gap-[12px] pt-[8px] max-md:gap-[16px] max-md:rounded-[16px] max-md:border max-md:border-border max-md:bg-white max-md:p-[16px] max-md:pt-[16px]">
                                <label className="text-[14px] font-bold text-primary max-md:text-[14px] max-md:uppercase max-md:tracking-[0.4px]">{data.form.labels.pickupTitle}</label>
                                <div className="flex flex-col gap-[12px]">
                                    {pickupLocations.map((loc) => {
                                        const isSelected = pickupLocation === loc.id;
                                        return (
                                            <button
                                                key={loc.id}
                                                type="button"
                                                onClick={() => setPickupLocation(loc.id)}
                                                className={`flex w-full items-center gap-[16px] rounded-[12px] border-[2px] bg-white p-[16px] text-left transition-all max-md:min-h-[75px] max-md:p-[16px] ${
                                                    isSelected ? "border-primary" : "border-border hover:border-gray-400"
                                                }`}
                                            >
                                                {/* Custom Radio Circle */}
                                                <div className={`flex size-[20px] shrink-0 items-center justify-center rounded-full border-[2px] transition-colors ${
                                                    isSelected ? "border-primary" : "border-gray-300"
                                                }`}>
                                                    {isSelected && <div className="size-[10px] rounded-full bg-primary" />}
                                                </div>
                                                
                                                <div className="flex flex-col gap-[4px]">
                                                    <span className="text-[16px] font-bold text-primary max-md:text-[14px]">{loc.name}</span>
                                                    <span className="text-[13px] text-secondary max-md:text-[12px]">{loc.desc}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* --- DESKTOP BOTTOM SUMMARY BAR --- */}
                    <div className="mt-[24px] flex min-h-[96px] w-full max-w-[920px] items-center justify-between border-t border-border pt-[24px] max-md:hidden">
                        <p className="body-small text-secondary">
                            {data.bottomBar.requiredText}
                        </p>

                        <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-primary px-[32px] text-[14px] font-semibold text-white transition hover:bg-dark-surface">
                            {data.bottomBar.nextButtonText}
                            <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                    {/* --- MOBILE BOTTOM SUMMARY BAR --- */}
                    <div className="flex w-full flex-col gap-[12px] px-[20px] pb-[32px] pt-[16px] md:hidden">
                        <p className="text-center text-[13px] text-secondary">
                            {data.bottomBar.requiredText}
                        </p>
                        <button className="inline-flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full bg-[#232323] font-['Host_Grotesk'] text-[14px] font-medium uppercase leading-[1.5] tracking-[0.5px] text-white">
                            {data.bottomBar.nextButtonText}
                            <img src={data.icons.mobileArrowIcon} alt="" className="size-[16px] brightness-0 invert" />
                        </button>
                    </div>

                </div>
            </main>

            {/* --- DESKTOP FOOTER --- */}
            <div className="hidden md:block">
                <Footer />
            </div>
        </div>
    );
}
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/app/lib/data/footerdata";

type FooterItem = string | { label: string; href: string };

function StarIcon({ className = "size-4" }: { className?: string }) {
  return <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>;
}

function FooterColumn({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div className="flex w-full flex-col items-start lg:w-auto">
      <h3 className="small capitalize font-bold text-white">{title}</h3>
      <ul className="caption mt-[16px] flex flex-col gap-[12px] text-muted sm:mt-[24px] sm:gap-[14px]">
        {items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? undefined : item.href;
          const isPhone = /^\+?[\d\s().-]{7,}$/.test(label);
          const isEmail = label.includes("@");
          const contactHref = isPhone ? `tel:${label.replace(/[^\d+]/g, "")}` : isEmail ? `mailto:${label}` : href;
          const isHighlight = index === 0 && (title === "North side" || title === "South side");
          return <li key={label} className="flex max-w-[260px] items-start gap-[8px] sm:max-w-[200px]">
            {isPhone ? <svg aria-hidden="true" className="mt-[2px] size-[14px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> : null}
            {isEmail ? <svg aria-hidden="true" className="mt-[2px] size-[14px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 0 0-2.25 2.25" /></svg> : null}
            {contactHref ? <a href={contactHref} className={isHighlight ? "font-bold text-white hover:text-white" : "hover:text-white"}>{label}</a> : <span className={isHighlight ? "font-bold text-white" : ""}>{label}</span>}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  return <footer className="flex w-full justify-center bg-black text-white">
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
      <div className="flex w-full items-center justify-between border-b border-dark-surface px-[20px] py-[24px] sm:px-[40px] sm:py-[28px] lg:px-[80px] lg:py-[40px]"><Link href="/" className="flex h-[48px] items-center sm:h-[65px]"><Image src={footerData.logo.src} alt={footerData.logo.alt} width={200} height={48} className="h-[40px] w-auto object-contain sm:h-[48px]" /></Link></div>
      <div className="flex w-full flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:gap-[24px] lg:border-b lg:border-dark-surface lg:px-[80px] lg:py-[56px]">
        <div className="grid w-full grid-cols-3 gap-[16px] border-b border-dark-surface px-[20px] py-[32px] sm:gap-[32px] sm:px-[40px] lg:contents">{footerData.columns.map((column) => <FooterColumn key={column.title} {...column} />)}</div>
        <div className="flex w-full flex-col gap-[28px] border-b border-dark-surface px-[20px] py-[28px] sm:flex-row sm:gap-[40px] sm:px-[40px] lg:contents">{footerData.locations.map((location) => <FooterColumn key={location.title} {...location} />)}</div>
      </div>
      <div className="flex w-full flex-col items-start gap-[16px] px-[20px] py-[24px] sm:gap-[24px] sm:px-[40px] sm:py-[32px] lg:flex-row lg:items-start lg:justify-between lg:px-[80px] lg:pb-[40px] lg:pt-[32px]">
        <div className="caption flex w-full flex-col gap-[8px] text-muted lg:w-[380px]"><p>{footerData.copyright}</p><p>{footerData.description}</p></div>
        <div className="flex flex-row flex-wrap items-center gap-[12px] sm:w-auto"><div className="flex w-max items-center justify-start gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[12px] py-[8px] sm:gap-[10px] sm:px-[16px] sm:py-[10px]"><div className="flex text-gold">{Array.from({ length: 5 }, (_, index) => <StarIcon key={index} className="size-[14px]" />)}</div><div className="small flex flex-col font-medium leading-[1.3]"><span className="text-white">{footerData.rating}</span><span className="text-muted">{footerData.customers}</span></div></div><a href={footerData.reviews.href} className="flex w-max items-center justify-center gap-[8px] rounded-[100px] border border-dark-surface bg-primary px-[12px] py-[8px] transition-all duration-300 hover:border-[#84A59D] hover:bg-primary active:scale-95 sm:gap-[10px] sm:px-[16px] sm:py-[10px]"><svg aria-hidden="true" className="size-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5 0-4.5-4-4.5-9S9.5 3 12 3s4.5 4 4.5 9-2 9-4.5 9Z" /></svg><span className="small font-medium text-white">{footerData.reviews.label}</span></a></div>
      </div>
    </div>
  </footer>;
}
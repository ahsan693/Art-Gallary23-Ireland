"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { headerData } from "@/app/lib/data/headerdata";

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigationItems = [...headerData.navigation, ...headerData.utilityNavigation];

  return (
    <header className={`relative z-50 flex w-full flex-col items-center border-b border-border bg-white ${["/checkout-papersize", "/checkout-details", "/checkout-review", "/checkout-confirmed"].includes(pathname) ? "max-md:hidden" : ""}`}>
      <div className="relative flex w-full justify-center bg-white">
        <nav className="flex h-[72px] w-full max-w-[1440px] items-center justify-between px-[20px] sm:px-[40px] lg:px-[40px]">
          <div className="flex items-center lg:hidden">
            <button aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)} className="flex items-center justify-center p-0 transition-transform duration-300 active:scale-90 hover:text-forest-green active:text-forest-green">
              {isMobileMenuOpen ? <CloseIcon /> : (
                <svg aria-hidden="true" className="h-[22.5px] w-[30px]" fill="none" viewBox="0 0 30 22.5" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" d="M0 2h30M0 11.25h30M0 20.5h20" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
            {headerData.navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`relative flex h-[72px] items-center px-4 button-small transition-colors duration-300 hover:text-forest-green ${pathname === item.href ? "text-forest-green" : "text-primary"}`}>
                {item.name}
                {pathname === item.href ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-forest-green" /> : null}
              </Link>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/" className="flex h-auto w-auto items-center justify-center whitespace-nowrap heading-h8 font-bold uppercase tracking-widest transition-transform duration-300 hover:scale-105 active:scale-95 lg:tracking-normal">
              {headerData.logo}
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3 lg:flex-1 lg:gap-1">
            <div className="hidden items-center gap-1 lg:flex">
              {headerData.utilityNavigation.map((item) => (
                <Link key={item.name} href={item.href} className="flex h-[72px] items-center justify-center px-3 button-small transition-colors duration-300 hover:text-forest-green">
                  {item.name}
                </Link>
              ))}
            </div>
            <span className="hidden h-6 w-px bg-border lg:block" />
            <div className="flex h-[20px] items-center gap-[12px] lg:h-auto lg:gap-1 lg:ml-2 lg:translate-x-1">
              <button aria-label="Cart" className="flex items-center justify-center p-0 transition-all duration-300 hover:bg-[#84A59D]/10 hover:border-[#84A59D] active:scale-90 lg:grid lg:size-10 lg:place-items-center lg:rounded-full lg:border lg:border-border lg:bg-warm-cream">
                <Image src={headerData.icons.cart} alt="" width={20} height={20} className="size-[20px] lg:size-5" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="absolute left-0 top-[72px] z-50 w-full overflow-hidden border-t border-border bg-white shadow-xl lg:hidden">
                <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-[20px] py-[32px] sm:px-[40px]">
                  {navigationItems.map((item) => (
                    <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block origin-left py-3 heading-h9 tracking-tight transition-all duration-300 active:scale-95 active:text-forest-green ${pathname === item.href ? "text-forest-green" : "text-primary hover:text-forest-green"}`}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
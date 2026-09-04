// ==========================================
// DATA LAYER: CHECKOUT PAPER & SIZE PAGE
// ==========================================

import { checkoutIcons } from "@/app/lib/checkoutIcons";

export const paperOptions = [
    {
        id: "art-paper",
        name: "Art Paper",
        desc: "Premium acid-free art paper. Available in multiple GSM weights for fine art reproduction. Ideal for giclée prints.",
        img: "/Print%20Shop%20Checkout/Art%20Paper.png",
        imageAlt: "Art paper print sample",
    },
    {
        id: "satin-photo",
        name: "Satin Photo Paper",
        desc: "Semi-gloss finish with vibrant colour reproduction. Perfect for photographs and high-contrast images.",
        img: "/Print%20Shop%20Checkout/Satin%20Photo%20Paper.png",
        imageAlt: "Satin photo paper print sample",
    },
    {
        id: "matte-photo",
        name: "Matte Photo Paper",
        desc: "Non-reflective finish with rich, deep tones. Ideal for portraits, landscapes, and exhibition prints.",
        img: "/Print%20Shop%20Checkout/Matte%20Photo%20Paper.png",
        imageAlt: "Matte photo paper print sample",
    },
    {
        id: "canvas",
        name: "Canvas",
        desc: "Archival-grade canvas for stretched or framed prints. Museum-quality texture and durability.",
        img: "/Print%20Shop%20Checkout/Canvas.png",
        imageAlt: "Canvas print sample",
    },
];

export const printSizes = [
    { id: "a4", name: "A4", dimensions: "210 × 297 mm", price: 25 },
    { id: "a3", name: "A3", dimensions: "297 × 420 mm", price: 40 },
    { id: "a2", name: "A2", dimensions: "420 × 594 mm", price: 65 },
    { id: "a1", name: "A1", dimensions: "594 × 841 mm", price: 95 },
    { id: "12x16", name: '12" × 16"', dimensions: "305 × 406 mm", price: 50 },
    { id: "20x24", name: '20" × 24"', dimensions: "508 × 610 mm", price: 75 },
];

export const checkoutDefaults = {
    selectedPaper: "satin-photo",
    selectedSize: "20x24",
};

export const getCheckoutPaperSizeData = async () => {
    return {
        icons: {
            mobileBackIcon: checkoutIcons.back,
            mobileBagIcon: checkoutIcons.bag,
            mobileCheckIcon: checkoutIcons.check,
            mobileArrowIcon: checkoutIcons.arrow,
        },
        // 👇 Added Mobile Header Text
        mobileHeader: {
            bannerText: "Cash on Delivery — Pickup at Kimmage or Coalmine",
            title: "Gallery 23",
            cartLabel: "Cart",
        },
        topBar: {
            backText: "Back",
            backLink: "/printshop",
            stepTextDesktop: "Step 2 of 5",
            stepTextMobile: "Step 1 of 4"
        },
        heading: {
            title: "Choose Your Paper & Size",
            subtitle: "Select the paper type and print dimensions."
        },
        paperSection: {
            title: "Paper Type",
            options: paperOptions
        },
        sizeSection: {
            title: "Print Size",
            options: printSizes
        },
        bottomBar: {
            nextButtonText: "Next",
            nextButtonLink: "/checkout-details"
        }
    };
};
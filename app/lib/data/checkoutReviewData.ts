// ==========================================
// DATA LAYER: CHECKOUT REVIEW PAGE
// ==========================================

import { checkoutIcons } from "@/app/lib/checkoutIcons";

export const getCheckoutReviewData = async () => {
    return {
        icons: {
            mobileBackIcon: checkoutIcons.back,
            mobileBagIcon: checkoutIcons.bag,
            mobileArrowIcon: checkoutIcons.arrow,
            paymentCheckIcon: checkoutIcons.check,
            stripeLogo: checkoutIcons.stripe,
            mobileBackAlt: "Back",
            mobileBagAlt: "Cart",
        },
        mobileHeader: {
            bannerText: "Online Payment — Secure checkout via Stripe",
            title: "Gallery 23",
            cartLabel: "Cart",
        },
        topBar: {
            backText: "Back",
            backLink: "/checkout-details",
            stepTextDesktop: "Step 4 of 5",
            stepTextMobile: "Step 3 of 4"
        },
        heading: {
            titleDesktop: "Review Your Order",
            titleMobile: "Review Order",
            descriptionDesktop: "Please check all details before confirming.",
            descriptionMobile: "Check everything before confirming.",
        },
        orderSummary: {
            title: "Order Summary",
            totalLabel: "Total",
            items: [
                { label: "Print Type", value: "Custom Print" },
                { label: "Paper", value: "Art Paper" },
                { label: "Size", value: "A3" },
                { label: "Dimensions", value: "297 × 420 mm" },
                { label: "Description", value: "fdaf" }
            ],
            total: "€55"
        },
        contactDetails: {
            title: "Contact Details",
            items: [
                { label: "Name", value: "@@" },
                { label: "Email", value: "dff@gmail.com" },
                { label: "Phone", value: "fad" },
                { label: "Pickup", value: "Kimmage Gallery" }
            ]
        },
        onlinePayment: {
            title: "Online Payment",
            descriptionDesktop: "Payment is processed securely online via Stripe. Your card will be charged at checkout — €55. No cash needed.",
            descriptionMobile: "Payment is processed securely online via Stripe. Your card will be charged at checkout — €55.",
            paymentMethodLabel: "PAYMENT METHOD",
            footerTextDesktop: "You will receive a payment receipt and order confirmation email at ",
            footerTextMobile: "A payment receipt and confirmation email will be sent to ",
            footerEmail: "dff@gmail.com",
            footerTextSuffix: " with estimated delivery dates."
        },
        bottomBar: {
            agreementText: "By confirming, you agree to pay securely online via Stripe.",
            confirmButtonText: "Confirm Order",
            confirmButtonlink: "/checkout-confirmed"
        }
    };
};
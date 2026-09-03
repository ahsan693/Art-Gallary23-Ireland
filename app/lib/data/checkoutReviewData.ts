// ==========================================
// DATA LAYER: CHECKOUT REVIEW PAGE
// ==========================================

export const getCheckoutReviewData = async () => {
    return {
        // External Figma Icons
        icons: {
            mobileBackIcon: "https://www.figma.com/api/mcp/asset/e704c3a3-0a5f-4fe0-8ac2-ed176653849c.svg",
            mobileBagIcon: "https://www.figma.com/api/mcp/asset/217818e8-ae21-49e3-a3fe-5afa12ea8ef6.svg",
            mobileArrowIcon: "https://www.figma.com/api/mcp/asset/da712e1a-3560-4de1-90fd-31d191491158.svg",
            paymentCheckIcon: "https://www.figma.com/api/mcp/asset/e03ff638-b58e-4597-9849-eee15777c2da.svg",
            stripeLogo: "https://www.figma.com/api/mcp/asset/ecbee59e-a11d-4d91-9ad8-2938859647f3.svg",
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
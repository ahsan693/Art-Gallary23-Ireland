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
            mobileBackAlt: "Back",
            mobileBagAlt: "Cart",
        },
        mobileHeader: {
            bannerText: "Cash on Delivery — Pickup at Kimmage or Coalmine",
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
        cashOnDelivery: {
            title: "Cash on Delivery",
            descriptionDesktop: "Payment is collected in cash when you pick up your order at the gallery. No card or online payment required. Please bring the exact amount — €55.",
            descriptionMobile: "Pay €55 cash when you collect your order in-store. No card payment required.",
            paymentMethodLabel: "PAYMENT METHOD",
            paymentMethodValue: "💵 Cash on Delivery at Pickup",
            footerTextDesktop: "You will receive an order confirmation email at ",
            footerTextMobile: "A confirmation email will be sent to ",
            footerEmail: "dff@gmail.com",
            footerTextSuffix: " with estimated pickup dates."
        },
        bottomBar: {
            agreementText: "By confirming, you agree to pay €55 cash at pickup.",
            confirmButtonText: "Confirm Order",
            confirmButtonlink: "/checkout-confirmed"
        }
    };
};
// ==========================================
// DATA LAYER: CHECKOUT REVIEW PAGE
// ==========================================

export const getCheckoutReviewData = async () => {
    return {
        topBar: {
            backText: "Back",
            backLink: "/checkout-details",
            stepText: "Step 4 of 5"
        },
        heading: {
            title: "Review Your Order",
            subtitle: "Please check all details before confirming."
        },
        orderSummary: {
            title: "Order Summary",
            items: [
                { label: "Print Type", value: "Custom Print" },
                { label: "Paper", value: "Satin Photo Paper" },
                { label: "Size", value: '20" × 24"' },
                { label: "Dimensions", value: "508 × 610 mm" },
                { label: "Description", value: "dsafa" }
            ],
            total: "€75"
        },
        contactDetails: {
            title: "Contact Details",
            items: [
                { label: "Name", value: "dafad dafad" },
                { label: "Email", value: "dd@gmail.com" },
                { label: "Phone", value: "dfda" },
                { label: "Pickup Location", value: "Kimmage Gallery" }
            ]
        },
        cashOnDelivery: {
            title: "Cash on Delivery",
            description: "Payment is collected in cash when you pick up your order at the gallery. No card or online payment required. Please bring the exact amount — €75.",
            paymentMethodLabel: "PAYMENT METHOD",
            paymentMethodValue: "💵 Cash on Delivery at Pickup",
            footerTextPrefix: "You will receive an order confirmation email at ",
            footerEmail: "dd@gmail.com",
            footerTextSuffix: " with estimated pickup dates."
        },
        bottomBar: {
            agreementText: "By confirming, you agree to pay €75 cash at pickup.",
            confirmButtonText: "Confirm Order"
        }
    };
};
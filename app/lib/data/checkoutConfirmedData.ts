// ==========================================
// DATA LAYER: CHECKOUT CONFIRMED PAGE
// ==========================================

export const getCheckoutConfirmedData = async () => {
    return {
        // External Figma Icons
        icons: {
            mobileBackIcon: "https://www.figma.com/api/mcp/asset/e704c3a3-0a5f-4fe0-8ac2-ed176653849c.svg",
            mobileBagIcon: "https://www.figma.com/api/mcp/asset/217818e8-ae21-49e3-a3fe-5afa12ea8ef6.svg",
        },
        mobileHeader: {
            bannerText: "Cash on Delivery — Pickup at Kimmage or Coalmine",
            title: "GALLERY 23",
            backLink: "/"
        },
        orderInfo: {
            title: "Order Confirmed",
            orderId: "G23-150861",
            // Broken down into parts to easily bold/style the dynamic data
            thankYouPrefix: "Thank you, ",
            customerName: "dafad",
            thankYouMiddle: "! Your order has been received. We'll send a confirmation to ",
            customerEmail: "dd@gmail.com",
            thankYouSuffix: " with your pickup details."
        },
        nextSteps: {
            title: "What happens next?",
            steps: [
                "We process your order within 1–2 business days.",
                "You receive an email with your estimated pickup date.",
                "Collect your print at Kimmage Gallery.",
                "Pay €75 cash on delivery when you pick up."
            ]
        },
        contactSupport: {
            prefix: "Questions? Email us at ",
            email: "info@g23.ie",
            middle: " or call ",
            phone: "(555) 123-4567"
        },
        bottomBar: {
            buttonText: "BACK TO GALLERY",
            buttonLink: "/"
        }
    };
};
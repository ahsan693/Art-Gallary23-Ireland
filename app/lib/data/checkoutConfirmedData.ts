// ==========================================
// DATA LAYER: CHECKOUT CONFIRMED PAGE
// ==========================================

import { checkoutIcons } from "@/app/lib/checkoutIcons";

export const getCheckoutConfirmedData = async () => {
    return {
        icons: {
            mobileBackIcon: checkoutIcons.back,
            mobileBagIcon: checkoutIcons.bag,
            mobileBackAlt: "Back",
            mobileBagAlt: "Cart",
        },
        mobileHeader: {
            bannerText: "Cash on Delivery — Pickup at Kimmage or Coalmine",
            title: "GALLERY 23",
            backLink: "/",
            backLabel: "Back",
            cartLabel: "Cart",
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
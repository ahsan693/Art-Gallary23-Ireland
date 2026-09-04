// ==========================================
// DATA LAYER: CHECKOUT DETAILS PAGE
// ==========================================

import { checkoutIcons } from "@/app/lib/checkoutIcons";

export const pickupLocations = [
    {
        id: "kimmage",
        name: "Kimmage",
        desc: "Gallery 23, Kimmage — Mon–Sat 9am–6pm"
    },
    {
        id: "coalmine",
        name: "Coalmine",
        desc: "Gallery 23, Coalmine — Mon–Sat 10am–5pm"
    }
];

export const checkoutDetailsDefaults = {
    pickupLocation: "kimmage",
};

export const getCheckoutDetailsData = async () => {
    return {
        icons: {
            mobileBackIcon: checkoutIcons.back,
            mobileBagIcon: checkoutIcons.bag,
            mobileArrowIcon: checkoutIcons.arrow,
            mobileBackAlt: "Back",
            mobileBagAlt: "Cart",
        },
        // 👇 Added Mobile Header Text
        mobileHeader: {
            bannerText: "Cash on Delivery — Pickup at Kimmage or Coalmine",
            title: "Gallery 23",
            cartLabel: "Cart",
        },
        pickupLocations,
        topBar: {
            backText: "Back",
            backLink: "/checkout-papersize",
            stepTextDesktop: "Step 3 of 5",
            stepTextMobile: "Step 2 of 4"
        },
        heading: {
            title: "Your Details",
            subtitle: "Tell us about your artwork and how to reach you."
        },
        form: {
            leftColTitle: "Artwork Details",
            rightColTitle: "Contact Information",
            labels: {
                artworkDesc: "Artwork / File Description *",
                artworkDescPlaceholder: "e.g. Family portrait, landscape photo, digital illustration...",
                instructions: "Special Instructions",
                instructionsPlaceholder: "Any specific requirements, crop instructions, colour preferences...",
                firstName: "First Name *",
                firstNamePlaceholder: "Jane",
                lastName: "Last Name *",
                lastNamePlaceholder: "Smith",
                email: "Email Address *",
                emailPlaceholder: "jane@example.com",
                phone: "Phone Number *",
                phonePlaceholder: "+353 87 000 0000",
                pickupTitle: "Preferred Pickup Location *",
            },
            upload: {
                title: "Upload Your File",
                subtitle: "TIFF, JPEG, or PDF up to 100MB. You can also email it to ",
                email: "prints@g23.ie",
                suffix: " after ordering.",
                buttonText: "Choose File"
            }
        },
        bottomBar: {
            requiredText: "All fields marked * are required",
            nextButtonText: "Review Order",
            nextButtonLink: "/checkout-review"
        }
    };
};
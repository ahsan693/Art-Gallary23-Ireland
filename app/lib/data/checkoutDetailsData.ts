// ==========================================
// DATA LAYER: CHECKOUT DETAILS PAGE
// ==========================================

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

export const getCheckoutDetailsData = async () => {
    return {
        topBar: {
            backText: "Back",
            backLink: "/checkout-papersize",
            stepText: "Step 3 of 5"
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
                lastName: "Last Name *",
                email: "Email Address *",
                phone: "Phone Number *",
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
            nextButtonText: "Review Order"
        }
    };
};
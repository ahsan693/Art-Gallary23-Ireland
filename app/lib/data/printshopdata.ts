// ==========================================
// DATA LAYER: PRINT SHOP PAGE
// ==========================================

export const printShopImages = {
    hero: "/Printshop/Images/Section1.png",
    howItWorks: "/Printshop/Images/Section3.png",
};

export const getPrintShopData = async () => {
    return {
        hero: {
            badge: "Online Payment Only — Store Pickup at Kimmage or Coalmine",
            title: "Gallery 23 Print Shop — Fine Art & Photo Printing",
            subtitle: "Order gallery-quality giclée prints online for in-store pickup. Upload your own artwork or select from our licensed collection. Professional results on archival papers and canvas.",
            image: printShopImages.hero,
        },
        customPrint: {
            title: "Custom Print",
            description: "Upload your own artwork, photograph, or digital file. We accept TIFF, JPEG, and PDF formats up to 100MB.",
            buttonText: "Start Custom Order",
            // 👇 Updated link right here!
            buttonLink: "/checkout-papersize",
        },
        howItWorks: {
            title: "How it works",
            image: printShopImages.howItWorks,
            steps: [
                {
                    id: 1,
                    title: "Select Print Type",
                    desc: "Choose Custom (upload your file) or Licensed (select artwork by artist name).",
                    maxWidth: "lg:max-w-[227px]",
                },
                {
                    id: 2,
                    title: "Choose Paper & Size",
                    desc: "Pick your preferred paper type and print dimensions. What you like.",
                    maxWidth: "lg:max-w-[192px]",
                },
                {
                    id: 3,
                    title: "Upload & Pay",
                    desc: "Upload high-res file and complete secure online payment. No cash on delivery.",
                    maxWidth: "lg:max-w-[227px]",
                },
                {
                    id: 4,
                    title: "Store Pickup",
                    desc: "Receive email with pickup details. Collect from Kimmage or Coalmine.",
                    maxWidth: "lg:max-w-[227px]",
                }
            ]
        },
        needHelp: {
            title: "Need Help?",
            prefix: "Have questions about printing? ",
            faqText: "Check our FAQ",
            faqLink: "/faq",
            middle: " or contact us at ",
            emailText: "info@g23.ie",
            emailLink: "mailto:info@g23.ie",
        },
        disclaimer: {
            text: "Please Note: All print orders require online payment only — no cash on delivery. Orders are for in-store pickup exclusively. You will receive an order confirmation email with estimated pickup dates."
        }
    };
};
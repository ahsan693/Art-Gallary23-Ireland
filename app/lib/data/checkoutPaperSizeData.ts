// ==========================================
// DATA LAYER: CHECKOUT PAPER & SIZE PAGE
// ==========================================

export const paperOptions = [
    {
        id: "art-paper",
        name: "Art Paper",
        desc: "Premium acid-free art paper. Available in multiple GSM weights for fine art reproduction. Ideal for giclée prints.",
        img: "/Printshop/Images/Section3.png",
    },
    {
        id: "satin-photo",
        name: "Satin Photo Paper",
        desc: "Semi-gloss finish with vibrant colour reproduction. Perfect for photographs and high-contrast images.",
        img: "/Printshop/Images/Section1.png",
    },
    {
        id: "matte-photo",
        name: "Matte Photo Paper",
        desc: "Non-reflective finish with rich, deep tones. Ideal for portraits, landscapes, and exhibition prints.",
        img: "/Printshop/Images/Section3.png",
    },
    {
        id: "canvas",
        name: "Canvas",
        desc: "Archival-grade canvas for stretched or framed prints. Museum-quality texture and durability.",
        img: "/Printshop/Images/Section1.png",
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

export const getCheckoutPaperSizeData = async () => {
    return {
        // 👇 Added External Figma Icons
        icons: {
            mobileBackIcon: "https://www.figma.com/api/mcp/asset/e704c3a3-0a5f-4fe0-8ac2-ed176653849c.svg",
            mobileBagIcon: "https://www.figma.com/api/mcp/asset/217818e8-ae21-49e3-a3fe-5afa12ea8ef6.svg",
            mobileCheckIcon: "https://www.figma.com/api/mcp/asset/36abb49d-4f00-4681-b208-cf6f99222e83.svg",
            mobileArrowIcon: "https://www.figma.com/api/mcp/asset/da712e1a-3560-4de1-90fd-31d191491158.svg",
        },
        // 👇 Added Mobile Header Text
        mobileHeader: {
            bannerText: "Cash on Delivery — Pickup at Kimmage or Coalmine",
            title: "Gallery 23"
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
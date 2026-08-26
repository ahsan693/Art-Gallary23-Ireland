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
        topBar: {
            backText: "Back",
            backLink: "/printshop",
            stepText: "Step 2 of 5"
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
            nextButtonText: "Next"
        }
    };
};
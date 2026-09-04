export type PaymentHeaderData = {
    backLink: string;
    backLabel?: string;
    title?: string;
    cartLabel?: string;
};

export const paymentHeaderIcons = {
    back: "https://www.figma.com/api/mcp/asset/8d78c336-9265-4a1c-929c-984b631e097b.svg",
    bag: "https://www.figma.com/api/mcp/asset/f91a2168-61b7-45c9-ba65-02b10eca74a5.svg",
};

export const paymentHeaderDefaults = {
    backLabel: "Back",
    title: "Gallery 23",
    cartLabel: "Cart",
};

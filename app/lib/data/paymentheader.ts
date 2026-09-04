import { checkoutIcons } from "@/app/lib/checkoutIcons";

export type PaymentHeaderData = {
    backLink: string;
    backLabel?: string;
    title?: string;
    cartLabel?: string;
};

export const paymentHeaderIcons = {
    back: checkoutIcons.back,
    bag: checkoutIcons.bag,
};

export const paymentHeaderDefaults = {
    backLabel: "Back",
    title: "Gallery 23",
    cartLabel: "Cart",
};

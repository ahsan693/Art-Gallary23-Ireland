import Link from "next/link";
import {
    paymentHeaderDefaults,
    paymentHeaderIcons,
    type PaymentHeaderData,
} from "@/app/lib/data/paymentheader";

export default function PaymentHeader({
    backLink,
    backLabel = paymentHeaderDefaults.backLabel,
    title = paymentHeaderDefaults.title,
    cartLabel = paymentHeaderDefaults.cartLabel,
}: PaymentHeaderData) {
    return (
        <div className="flex h-[56px] w-full items-center justify-between border-b border-[#D5D5D5] bg-white px-[16px]">
            <Link
                href={backLink}
                aria-label={backLabel}
                className="-ml-[8px] flex size-[36px] items-center justify-center"
            >
                <img src={paymentHeaderIcons.back} alt={backLabel} className="size-[18px]" />
            </Link>
            <p className="font-['Host_Grotesk'] text-[18px] font-bold uppercase leading-[1.4] tracking-[1px] text-[#232323]">
                {title}
            </p>
            <button type="button" aria-label={cartLabel} className="flex size-[36px] items-center justify-center">
                <img src={paymentHeaderIcons.bag} alt="" className="size-[20px]" />
            </button>
        </div>
    );
}

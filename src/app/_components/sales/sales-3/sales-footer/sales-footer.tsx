import Image from "next/image";
import Link from "next/link";

import { siteProduct } from "@/lib/site-info";
import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
    info: SalesPageType;
};

const SalesFooter = ({ info }: Props) => {
    return (
        <footer className="w-full py-[25px] md:py-[40px] bg-[#fff] border-t-[1px] border-t-[#c8c8c8]">
            <div className="w-full max-w-[1200px] px-4 flex flex-col items-center">
                <Link href="/" className="flex w-[120px] md:w-[142px] mb-[20px] md:mb-[25px]">
                    <Image src={info.logo} width={160} height={160} alt={siteProduct} />
                </Link>
                <div className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#000] tracking-[0.5px]">
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-x-[12px]">
                            <li><Link href="/contact-us" target="_blank">Contact Us</Link></li>
                            <li><Link href="/terms-conditions" target="_blank">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy" target="_blank">Privacy Policy</Link></li>
                            <li><Link href="/shipping-returns" target="_blank">Shipping & Returns</Link></li>
                            <li><Link href="/mobile-terms-conditions" target="_blank">Mobile Terms</Link></li>
                        </ul>
                    </nav>
                    <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center mt-[16px] md:mt-[12px]">
                        <span>&copy; {(new Date()).getFullYear()} {siteProduct}.</span>
                        <span>All Rights Reserved.</span>
                        <span className="md:block md:w-full md:text-center">Owned by Four AM Media</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SalesFooter;

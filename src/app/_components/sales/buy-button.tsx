import Image from "next/image";
import { SalesPageType } from "@/interfaces/salesPage";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

const BuyButton = ({ info }: Props2) => {
  const cta = info.cta;
  return (
    <div className="hidden lg:flex flex-col items-center w-fit z-20">
      <div className="flex p-4 mt-2 ">
        <a href={cta}>
          <button className="bg-[#00c04e] text-[26px]  text-white px-6 py-4 rounded-md flex whitespace-nowrap green-text-shadow animate-grow-shrink items-center hover:transform hover:scale-110 hover:animate-none font-bold ">
            <p>
              {" "}
              Order Now &amp; <span className="text-[#ffe500]">Save 60%</span>
            </p>
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6f7f9340-d6f8-4aa2-0a2f-0627aa510900/public"
              width={10}
              height={10}
              alt="go arrow"
              className="ml-4"
            />
          </button>
        </a>
      </div>
      <div className={`text-[15px] font-bold ${raleway.className}`}>
        Over {info.customerCount} Happy Customers 😃
      </div>
    </div>
  );
};

export default BuyButton;

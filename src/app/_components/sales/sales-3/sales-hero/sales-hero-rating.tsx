import React from "react";
import Image from "next/image";

const SalesHeroRating = () => {
  return (
    <div className="inline-flex items-center gap-[10px] p-[6px_15px] md:p-[7px_15px] border-[1px] border-[#00cb88] rounded-[50px] text-[16px] leading-[16px] md:text-[18px] md:leading-[18px] text-[#000] tracking-[0.5px] font-bold">
      <Image className="-mt-[2px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/01932eb1-82d0-499e-5f72-abb20ffe4900/public" alt="single star" width={26} height={26} />
      Trustpilot
      <Image src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/af3c29ad-3f30-4324-402e-80d91ba72500/public" alt="group of stars" width={100} height={20} />
      Excellent
    </div>
  );
};

export default SalesHeroRating;

import React from "react";

import { ProductType } from "@/app/_components/sales/sales-5/sales-product/types";

type Props = {
  chosenProduct: ProductType;
  item: ProductType;
  handleClick: (item: ProductType) => void;
  isMostPopular: boolean
};

const SalesProductRadio = ({ chosenProduct, item, handleClick, isMostPopular }: Props) => {
  return (
    <div onClick={() => handleClick(item)} className={`relative flex items-center gap-[12px] p-[18px]  border-[2px]  rounded-[10px] ${item.id === chosenProduct.id ? 'bg-[rgba(255,165,0,.1)] border-[rgba(255,165,1)]' : 'bg-[rgba(255,165,0,.02)] border-[rgba(255,165,0,.3)]'} cursor-pointer hover:bg-[rgba(255,165,0,.1)] hover:border-[rgba(255,165,1)]`}>
      {isMostPopular && <p className="absolute -top-[10px] -right-[10px] rotate-[3deg] px-[10px] bg-[#ffa500] rounded-[4px] text-[15px] leading-[24px] text-[#fff] font-bold">Most Popular</p>}
      <span className={`flex w-[15px] h-[15px] border-[2px]  rounded-[50%] ${item.id === chosenProduct.id ? ' bg-[#ffa500] border-[#fff] shadow-[0_0_0_1px_#ffa500]' : 'border-[rgba(255,165,0,.3)]'}`}></span>
      <div className="flex-1 flex flex-col gap-[5px]">
        <p className="text-[16px] leading-[1] font-bold">{item.text}</p>
        <p className="text-[14px] leading-[1]">🎉Christmas {item.savings}% OFF🎉</p>
      </div>
      <div className="flex flex-col items-end gap-[5px]">
        <span className="text-[16px] leading-[1] text-[#ffa500] font-bold">{item.newPrice}</span>
        <span className="text-[14px] leading-[1] line-through">{item.price}</span>
      </div>
    </div>
  );
};

export default SalesProductRadio;
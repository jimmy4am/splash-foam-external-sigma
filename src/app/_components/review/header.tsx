import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const today = new Date();
    return today.toLocaleDateString("en-US", options).toUpperCase();
  };

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full max-w-[1024px] px-4 py-2 ">
        <div className="flex w-1/2 md:w-1/3">
          <a href="/">
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/392612fc-a13b-43dc-369d-38a0a0648300/public"
              alt="CTC Logo"
              width={500}
              height={500}
              className="mt-6 mb-6 hover:opacity-75 cursor-pointer"
            />
          </a>
        </div>
        <div className="flex w-1/2 justify-end items-center  md:hidden py-4">
          {(showDropdown && (
            <XMarkIcon
              className="h-6 w-6 cursor-pointer hover:opacity-75 bg-[#ccc]  rounded-md"
              onClick={() => setShowDropdown(!showDropdown)}
            />
          )) || (
            <Bars3Icon
              className="h-6 w-6 cursor-pointer hover:opacity-75 hover:bg-[#ccc] rounded-md"
              onClick={() => setShowDropdown(!showDropdown)}
            />
          )}
        </div>
        <div className="hidden md:flex w-2/3 justify-end items-center text-[#222] text-[14px]">
          <div className="flex px-4 py-2">
            <a href="/about" className="cursor-pointer hover:opacity-75">
              Who Are We?
            </a>
          </div>
          <div className="flex px-4 py-2">
            <a href="/contact-us" className="cursor-pointer hover:opacity-75">
              Get in Touch
            </a>
          </div>
          <div className="flex px-4 py-2">
            <a
              href="/terms-conditions"
              className="cursor-pointer hover:opacity-75"
            >
              Terms of Use
            </a>
          </div>
          <div className="flex px-4 py-2">
            <a
              href="/privacy-policy"
              className="cursor-pointer hover:opacity-75"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center bg-[#f5f5f5] py-1">
        <div className="flex w-full max-w-[1024px] justify-start items-center px-4 text-sm text-[#333]">
          {formatDate()}
        </div>
      </div>
      {showDropdown && (
        <div className="flex flex-col w-full justify-center bg-[#aaa] items-center text-[#222] text-[14px]">
          <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
            <a
              href="/about"
              className="cursor-pointer hover:opacity-75 w-full text-center"
            >
              Who Are We?
            </a>
          </div>
          <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
            <a href="/contact-us" className="cursor-pointer hover:opacity-75">
              Get in Touch
            </a>
          </div>
          <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
            <a
              href="/terms-conditions"
              className="cursor-pointer hover:opacity-75"
            >
              Terms of Use
            </a>
          </div>
          <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
            <a
              href="/privacy-policy"
              className="cursor-pointer hover:opacity-75"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

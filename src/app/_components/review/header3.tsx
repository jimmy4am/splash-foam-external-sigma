import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";

const Header3 = () => {
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!target) return;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full max-w-[1024px] px-4 py-1 ">
        <div className="flex w-1/2 md:w-1/3">
          <a href="/">
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/392612fc-a13b-43dc-369d-38a0a0648300/public"
              alt="CTC Logo"
              width={300}
              height={300}
              className="mt-6 mb-6 hover:opacity-75 cursor-pointer"
            />
          </a>
        </div>
        <div className="flex relative flex-1 justify-end items-center   py-4">
          <div
            className={`flex hover:text-blue-800 cursor-pointer  rounded-md px-4 py-2 ${
              showDropdown && "text-blue-800"
            }`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-[16px] font-bold">Learn More</span>
            {(showDropdown && (
              <ChevronUpIcon className="h-6 w-6 cursor-pointer hover:opacity-75  rounded-md" />
            )) || (
              <ChevronDownIcon className="h-6 w-6 cursor-pointer hover:opacity-75 hover:bg-[#ccc] rounded-md" />
            )}
          </div>
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="w-full absolute  top-[80px]  flex-col md:w-[200px] justify-start bg-[#fff] shadow-xl border-[#ccc] border-[1px] items-center text-[#222] text-[14px] z-50"
            >
              <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
                <a
                  href="/about"
                  className="cursor-pointer hover:opacity-75 w-full text-center"
                >
                  Who Are We?
                </a>
              </div>
              <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
                <a
                  href="/contact-us"
                  className="cursor-pointer hover:opacity-75 w-full text-center"
                >
                  Get in Touch
                </a>
              </div>
              <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
                <a
                  href="/terms-conditions"
                  className="cursor-pointer hover:opacity-75  w-full text-center"
                >
                  Terms of Use
                </a>
              </div>
              <div className="flex w-full justify-center px-4 py-2 border-b-2 hover:bg-[#ccc]">
                <a
                  href="/privacy-policy"
                  className="cursor-pointer hover:opacity-75  w-full text-center"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header3;

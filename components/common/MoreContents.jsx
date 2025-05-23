"use client";
import Link from "next/link";
import { useState } from "react";

export default function MoreContents() {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 200); // Delay closing by 200ms
  };

  return (
    <div className="relative">
      {/* More Button */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`px-4 py-3 flex items-center rounded-md hover:bg-light-gray hover:bg-opacity-40 text-black font-light transition-colors duration-300 ease-in cursor-pointer ${
          isOpen ? "bg-light-gray bg-opacity-40" : ""
        }`}
      >
        Contents
        <i className="ml-2 text-black text-xs  fas fa-chevron-down"></i>
      </div>

      {/* Popup Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-[400px] p-3 bg-white border border-opacity-20 text-black rounded-lg shadow-lg opacity-100 scale-100 translate-y-0 transition-all duration-300 ease-in-out"
          onMouseEnter={handleMouseEnter} // Keep it open when hovering over popup
          onMouseLeave={handleMouseLeave} // Allow delay before closing
        >
          <ul className="grid grid-cols-1 gap-y-2 relative font-bold">
            <li>
              <Link href={`/assets`} className="custom-hover-contents">
                <div
                  className="h-20 aspect-square bg-cover bg-center bg-no-repeat rounded-md bg-white"
                  style={{
                    backgroundImage: `url(/svgData/icons/service1.svg)`,
                    backgroundSize: "60%",
                  }}
                ></div>
                SVG Icons
              </Link>
            </li>
            <li>
              <Link href={`/assets`} className="custom-hover-contents">
                <div
                  className="h-20 aspect-square bg-cover bg-center bg-no-repeat rounded-md"
                  style={{
                    backgroundImage: `url(/svgData/bg/bg2.svg)`,
                  }}
                ></div>
                SVG Background
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

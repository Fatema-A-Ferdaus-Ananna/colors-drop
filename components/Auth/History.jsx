"use client";
import Link from "next/link";
import { useState } from "react";

export default function History() {
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
        History
        <i className="ml-2 text-black text-xs  fas fa-history"></i>
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
              <Link
                href={`/allSVG`}
                className="custom-hover-contents justify-between"
              >
                <span>
                  <i className="mr-3 text-xs  fas fa-edit"></i>
                  Pinterest SVG Icons
                </span>
                <div
                  className="h-14 aspect-square bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1636044594149-6e2f289c3868?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                  }}
                ></div>
              </Link>
            </li>
            <li>
              <Link
                href={`/allSVG`}
                className="custom-hover-contents justify-between"
              >
                <span>
                  <i className="mr-3 text-xs  fas fa-edit"></i>
                  Beautiful Pink Background
                </span>
                <div
                  className="h-14 aspect-square bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1655111727832-c0ae847813d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                  }}
                ></div>
              </Link>
            </li>
            <li>
              <Link href={`/history`} className="custom-hover-contents">
                <span>
                  <i className="mr-3 text-xs  fas fa-eye"></i>
                  View All Edit History
                </span>
              </Link>
            </li>
            <li>
              <div className="p-3 flex  items-center gap-4 rounded-md text-red-700 hover:text-white hover:bg-red-700  transition-all duration-300 ease-in cursor-pointer ">
                <i className=" text-xs  fas fa-trash"></i>
                Remove All Edit History
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

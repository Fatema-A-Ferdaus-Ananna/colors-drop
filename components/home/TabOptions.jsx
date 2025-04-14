"use client";
import { motion } from "framer-motion";

import { useRef, useState } from "react";

const categories = [
  "Language",
  "Software",
  "Framework",
  "Social Media",
  "Tools",
];

export default function TabOptions() {
  const [active, setActive] = useState("Software");
  const scrollRef = useRef();

  const handleClick = (category, index) => {
    setActive(category);

    const tab = scrollRef.current.children[index];
    const container = scrollRef.current;

    // Get the width of the clicked tab and the container
    const tabWidth = tab.offsetWidth / 2;
    const containerWidth = container.offsetWidth;
    const containerMid = container.offsetWidth / 2;

    console.log(
      "tab width:",
      tab.offsetWidth,
      "container width:",
      container.offsetWidth
    );

    // Get the left position of the tab relative to the container
    const tabLeftPosition = tab.offsetLeft;
    console.log("tab left position:", tab.offsetLeft);

    // Calculate the offset to center the tab within the container
    // const offset = (containerWidth - tabWidth) / 2;
    const offset = (containerWidth - tabWidth) / 2;

    console.log("offset", offset);

    // Calculate the scroll position to center the tab in the visible area
    let scrollPosition = tabLeftPosition - offset;

    // Ensure the scroll position does not exceed the scrollable area
    const maxScroll = container.scrollWidth - containerWidth;
    scrollPosition = Math.min(scrollPosition, maxScroll);

    // Scroll the container to the desired position
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-fit bg-dark-gray bg-opacity-25 rounded-full p-1 shadow-md overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-2  overflow-x-auto hide-scrollbar  whitespace-nowrap"
          style={{ overflowX: "hidden" }}
        >
          {categories.map((category, index) => (
            <div key={category} className="relative flex-shrink-0">
              <button
                onClick={() => handleClick(category, index)}
                className={`px-5 py-2 text-lg rounded-full transition-all relative z-10
                  ${
                    active === category
                      ? "text-black font-semibold"
                      : "text-light-gray"
                  }`}
              >
                {category}
              </button>

              {active === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

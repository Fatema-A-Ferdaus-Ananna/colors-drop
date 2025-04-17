"use client";
import { contents } from "@/data/data";
import { useEffect, useRef, useState } from "react";
import SquareCard from "../Cards/SquareCard";

export default function MoreLikeThis() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;

      setShowLeft(el.scrollLeft > 10);
      setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollByAmount(amount) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  }

  return (
    <div className="relative">
      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="pb-3 flex flex-nowrap gap-4 overflow-x-auto scrollbar-thin custom-scrollbar select-none snap-x snap-mandatory scroll-smooth"
      >
        {contents.map((content) => (
          <SquareCard key={content.id} content={content} fullW={false} />
        ))}
      </div>

      {/* Left arrow */}
      {showLeft && (
        <button
          onClick={() => scrollByAmount(-300)}
          className="absolute -left-5 top-[40%] z-10"
        >
          <i className="w-10 h-10 text-dark-black bg-white drop-shadow-lg fa-solid fa-chevron-left rounded-full flex justify-center items-center"></i>
        </button>
      )}

      {/* Right arrow */}
      {showRight && (
        <button
          onClick={() => scrollByAmount(300)}
          className="absolute -right-5 top-[40%] z-10"
        >
          <i className="w-10 h-10 text-dark-black bg-white drop-shadow-md fa-solid fa-chevron-right rounded-full flex justify-center items-center"></i>
        </button>
      )}
    </div>
  );
}

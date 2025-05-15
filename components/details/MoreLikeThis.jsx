"use client";
import { useEffect, useRef, useState } from "react";
import SquareCard from "../Cards/SquareCard";

export default function MoreLikeThis({ moreLikeThis, modal = false }) {
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
        {moreLikeThis.map((content) => (
          <SquareCard key={content.id} content={content} fullW={false} />
        ))}
      </div>

      {/* Left arrow */}
      {showLeft && (
        <button
          onClick={() => scrollByAmount(-300)}
          className={`${
            modal ? "w-8 h-8 -left-4" : "w-10 h-10 -left-5"
          } text-dark-black bg-white drop-shadow-md absolute top-[40%] z-10 rounded-full flex justify-center items-center`}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      {/* Right arrow */}
      {showRight && (
        <button
          onClick={() => scrollByAmount(300)}
          className={`${
            modal ? "w-8 h-8 -right-4" : "w-10 h-10 -right-5"
          } text-dark-black bg-white drop-shadow-md absolute top-[40%] z-10 rounded-full flex justify-center items-center`}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
}

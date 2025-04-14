// components/common/ScrollMemory.js
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RestoreScroll() {
  const pathname = usePathname();

  // Save scroll position before navigating away
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scroll-pos", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => window.removeEventListener("beforeunload", saveScrollPosition);
  }, []);

  // Restore scroll position only on root/home page
  useEffect(() => {
    const saved = sessionStorage.getItem("scroll-pos");

    // Only restore on homepage
    if (pathname === "/" && saved) {
      window.scrollTo(0, parseInt(saved));
    }
  }, [pathname]);

  return null;
}

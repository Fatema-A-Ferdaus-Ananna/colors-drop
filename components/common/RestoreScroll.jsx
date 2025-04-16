"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function RestoreScroll() {
  const pathname = usePathname();

  // Save scroll position BEFORE leaving the page
  useLayoutEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(
        `scroll-pos-${pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("pagehide", saveScroll);
    return () => {
      saveScroll(); // Save when unmounting too
      window.removeEventListener("pagehide", saveScroll);
    };
  }, [pathname]);

  // Restore scroll AFTER route mounts
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(`scroll-pos-${pathname}`);
    if (saved) {
      window.scrollTo(0, parseInt(saved));
    }
  }, [pathname]);

  return null;
}

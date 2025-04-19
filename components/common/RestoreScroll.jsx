"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function RestoreScroll() {
  const pathname = usePathname();

  // Save scroll position on pagehide/unmount
  useLayoutEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(
        `scroll-pos-${pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("pagehide", saveScroll);
    return () => {
      saveScroll();
      window.removeEventListener("pagehide", saveScroll);
    };
  }, [pathname]);

  // Restore scroll OR scroll to top for `/details/[id]`
  useLayoutEffect(() => {
    const isDetailsPage = pathname?.startsWith("/details/");
    if (isDetailsPage) {
      window.scrollTo(0, 0); // Force scroll to top
    } else {
      const saved = sessionStorage.getItem(`scroll-pos-${pathname}`);
      if (saved) {
        window.scrollTo(0, parseInt(saved));
      }
    }
  }, [pathname]);

  return null;
}

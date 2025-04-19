"use client";
import { clearPreviousPath, getPreviousPath } from "@/lib/navigationState";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const path = getPreviousPath();
  console.log("pervious from path:", path);

  // const onDismiss = useCallback(() => {
  //   const from = getPreviousPath();
  //   clearPreviousPath(); // ✅ cleanup for next time
  //   router.push(from || "/");
  // }, [router]);

  const onDismiss = useCallback(() => {
    //router.back();
    const isDetailsPattern = /^\/details\/[^/]+$/.test(path);

    if (isDetailsPattern) {
      router.push(path || "/");
    } else {
      clearPreviousPath();
      router.push(path || "/");
    }
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onKeyDown]);

  function onHide() {
    onDismiss();
  }

  return (
    <div
      ref={overlay}
      className="fixed h-screen z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 md:px-3 flex justify-center items-center"
      onClick={onClick}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div
        ref={wrapper}
        className="py-3 w-[95%] h-[80%] md:h-[88%] max-h-fit shadow-color-purple shadow-lg flex flex-col rounded-lg relative bg-white"
      >
        {/* Close Icon */}
        <div className="absolute -top-2 -right-2 z-50">
          <button
            className="w-8 h-8 text-dark-black  bg-[#f8f8f8] drop-shadow-md rounded-full flex justify-center items-center"
            onClick={onHide}
          >
            <i className=" fas fa-times"></i>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-2 h-full max-h-fit">{children}</div>
      </div>
    </div>
  );
}

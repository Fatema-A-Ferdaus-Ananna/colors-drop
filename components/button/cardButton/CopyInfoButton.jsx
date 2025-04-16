"use client";

import { useState } from "react";

export default function CopyInfoButton({ assetsInfo, iconSm = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}/assets/${assetsInfo}`;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(url)
        .then(() => showCopied())
        .catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        showCopied(); // ✅ this shows toast, not alert
      }
    } catch (err) {
      console.error("Fallback copy failed", err);
    }

    document.body.removeChild(textarea);
  };

  const showCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <>
      <div className="relative group/copy">
        <button
          onClick={handleCopy}
          className={`${
            iconSm ? "w-8 h-8 md:w-10 md:h-10 text-xs" : "w-10 h-10"
          } bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md`}
        >
          <i
            className={`fas ${
              copied ? "fa-check text-green-700" : "fa-link"
            } text-lg`}
          ></i>
        </button>

        <span
          className={`absolute top-1/2 right-[52px] -translate-y-1/2 hidden group-hover/copy:flex text-white text-nowrap px-4 py-2 rounded shadow-lg z-50 ${
            copied ? "bg-green-700" : "bg-light-black"
          } ${iconSm ? "text-xs md:text-sm" : "text-sm"}`}
        >
          {copied ? "Link Copied" : "Copy Link"}
          <span
            className={`absolute top-1/2 left-full -translate-y-1/2 -ml-1 w-2 h-2 rotate-45 ${
              copied ? "bg-green-700" : "bg-light-black"
            }`}
          ></span>
        </span>
      </div>
    </>
  );
}

//  Tailwind's arbitrary group names like group/copy.

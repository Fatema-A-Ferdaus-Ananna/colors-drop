"use client";

import Development from "@/public/assets/svg/project1.svg";
import Logo from "@/public/favicon.svg";
import Image from "next/image";
import { useState } from "react";
import PortalModal from "../Auth/PortalModal";

export default function DesignEditorNav() {
  const email = "fatema.a.ferdaus@gmail.com";
  const [developerInfoModal, setDeveloperInfoModal] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(() => showCopied())
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
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
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <>
      <h1 className="font-extrabold oswald  text-xl lg:text-lg text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary-dark flex items-center">
        <Image
          width={100}
          height={100}
          alt="logo"
          src={Logo}
          className="mr-1 w-fit h-5 lg:h-4"
        />
        COLORS DROP EDITOR
      </h1>
      <span
        onClick={() => setDeveloperInfoModal(true)}
        className="w-6 h-6 flex justify-center items-center bg-dark-black rounded-full cursor-pointer"
      >
        <i className="fas fa-info text-white text-xs"></i>
      </span>

      {developerInfoModal && (
        <PortalModal>
          <div
            onClick={() => setDeveloperInfoModal(false)}
            className="fixed inset-0 bg-black/30 bg-opacity-25 z-10 w-full h-auto flex justify-center items-center overflow-y-scroll"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="px-5  py-10 m-3 w-full max-w-lg h-fit bg-dark-black rounded-2xl relative flex flex-col gap-8 items-center text-white z-50"
            >
              <span
                onClick={() => setDeveloperInfoModal(false)}
                className="top-3 right-3 md:-top-7 md:-right-7 absolute w-8 h-8 rounded-full bg-white  text-dark-black flex justify-center items-center  transition-all duration-300 ease-in-out cursor-pointer"
              >
                <i className="fas fa-xmark"></i>
              </span>

              <div className="flex flex-col items-center">
                <h2 className="text-xl font-extrabold">Developer Info</h2>
                <div className="text-center text-sm text-gray-300 leading-relaxed mt-2 space-y-1">
                  <p>
                    <span className="font-bold">Name:</span> Fatema-A-Ferdaus
                    (Ananna)
                  </p>
                  <p>
                    <span className="font-bold">Role:</span> Software Engineer
                  </p>
                  <p>
                    <span className="font-bold">Specialties:</span> Responsive
                    Design
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Email:</span>
                    <span id="email-text">fatema.a.ferdaus@gmail.com</span>
                    <button
                      onClick={handleCopy}
                      className="text-sm text-white hover:scale-110 custom-transition"
                      title="Copy email"
                    >
                      {emailCopied && (
                        <span className="mr-1 text-primary text-xs transition-opacity duration-300">
                          Copied!
                        </span>
                      )}
                      <i
                        className={`fas ${
                          emailCopied ? "fa-check text-primary" : "fa-copy"
                        }`}
                      ></i>
                    </button>
                  </p>
                </div>
              </div>

              <div className="flex gap-2  flex-col items-center">
                <h2 className="text-xl font-extrabold">Connect With Me</h2>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-primary hover:scale-110 custom-transition"
                  >
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                  <a
                    href="https://github.com/Fatema-A-Ferdaus-Ananna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary hover:scale-110 custom-transition"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fatema-a-ferdaus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary hover:scale-110 custom-transition"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-sm text-gray-400 flex flex-col items-center">
                <span>
                  {" "}
                  <i className="fa-solid fa-copyright mr-2"></i>
                  2025 All rights reserved.
                </span>
                <div className="flex text-xl font-extrabold text-secondary">
                  Under Development
                  <Image
                    width={30}
                    height={30}
                    alt="i"
                    src={Development}
                    className="ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </PortalModal>
      )}
    </>
  );
}

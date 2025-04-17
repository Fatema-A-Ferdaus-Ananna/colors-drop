"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MoreContents from "../common/MoreContents";
import SearchAssets from "../common/SearchAssets";
import History from "./History";
import PortalModal from "./PortalModal";

export default function AuthButtons() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (showMenuModal) {
      document.documentElement.classList.add("hide-scrollbar");
    } else {
      document.documentElement.classList.remove("hide-scrollbar");
    }
  }, [showMenuModal]);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowSearchModal(false);
      }
    }

    if (showSearchModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchModal]);

  return (
    <>
      <ul className="w-[40%] text-sm gap-3 hidden lg:flex justify-end">
        <li>
          <MoreContents />
        </li>

        <li>
          <History />
        </li>
      </ul>

      <ul className="w-[30%] text-sm gap-5 flex lg:hidden  justify-end items-center">
        <li>
          <button onClick={() => setShowSearchModal(true)}>
            <i className="fas fa-search  text-black text-lg"></i>
          </button>
          {showSearchModal && (
            <div
              ref={modalRef}
              className="px-6 absolute inset-0 bg-white flex justify-center items-center z-10"
            >
              <SearchAssets
                onSetShowSearchModal={setShowSearchModal}
                autoFocus={true}
              />
            </div>
          )}
        </li>
        <li>
          <button onClick={() => setShowMenuModal(!showMenuModal)}>
            <i
              className={`w-10 h-10 text-black text-lg flex justify-center items-center rounded-md transition-all duration-300 ease-in 
      hover:bg-light-gray hover:bg-opacity-40
      ${showMenuModal ? "fas fa-times rotate-180" : "fas fa-bars"}
    `}
            ></i>
          </button>
        </li>
      </ul>

      <PortalModal>
        <div
          id="modal-overlay"
          className={`fixed inset-0 bg-white w-full min-h-screen overflow-y-scroll flex flex-col justify-start z-20 lg:hidden px-8 py-[76px] transform transition-all duration-500 ease-in text-dark-black
            ${
              showMenuModal
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-100 "
            }
          `}
        >
          <div className="py-4 flex flex-col gap-3">
            <h4 className="text-sm font-light text-dark-gray">Assets</h4>
            <ul className="font-bold flex flex-col gap-3">
              <li>
                <Link href={`/assets`} onClick={() => setShowMenuModal(false)}>
                  <i className="fas fa-icons mr-4"></i>
                  SVG Icons
                </Link>
              </li>
              <li>
                <Link href={`/assets`} onClick={() => setShowMenuModal(false)}>
                  <i className="fas fa-square mr-4"></i>
                  SVG Background
                </Link>
              </li>
              <li>
                <Link href={`/history`} onClick={() => setShowMenuModal(false)}>
                  <i className="fas fa-history mr-4"></i>
                  History
                </Link>
              </li>
            </ul>
          </div>
          <hr className="w-full" />
          <div className="py-4 flex flex-col gap-3">
            <h4 className="text-sm font-light text-dark-gray">More</h4>
            <ul className="font-bold flex flex-col gap-3 ">
              <li>
                <Link href={`/allSVG`} onClick={() => setShowMenuModal(false)}>
                  <i className="fas fa-file-alt mr-4"></i>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href={`/allSVG`} onClick={() => setShowMenuModal(false)}>
                  <i className="fas fa-user-shield mr-4"></i>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/allSVG`} onClick={() => setShowMenuModal(false)}>
                  <i className="fas fa-scroll mr-4"></i>
                  License & Contributions
                </Link>
              </li>
            </ul>
          </div>
          <hr className="w-full" />
          <div className="py-4 flex flex-col gap-3">
            <h4 className="text-sm font-light text-dark-gray">
              Connect With Us
            </h4>
            <ul className="font-bold text-4xl flex gap-5">
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/Fatema-A-Ferdaus-Ananna`}
                  onClick={() => setShowMenuModal(false)}
                >
                  <i className="fab fa-github "></i>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.linkedin.com/in/fatema-a-ferdaus/`}
                  onClick={() => setShowMenuModal(false)}
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </PortalModal>
    </>
  );
}

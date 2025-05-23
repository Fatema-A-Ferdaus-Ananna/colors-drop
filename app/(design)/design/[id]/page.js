"use client";

import CanvasEditor from "@/components/design/CanvasEditor";
import DesignEditorNav from "@/components/design/DesignEditorNav";

export default function SVGDesignPage() {
  function handleGeneralExpand() {
    console.log("clicked general section");
  }

  return (
    <>
      <section className="px-3 py-5 lg:px-0  w-full container mx-auto min-h-screen flex flex-col lg:flex-row lg:justify-between  gap-4">
        <div className="w-full px-3 py-3 flex justify-between items-center lg:hidden  bg-[#f1f1f1] rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          <DesignEditorNav />
        </div>

        <div className="lg:w-[73%] lg:min-h-[512px] aspect-square md:aspect-video bg-light-gray rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] flex justify-center items-center  overflow-scroll">
          <CanvasEditor />
        </div>

        <div className="lg:w-[25%] flex flex-col  gap-4 ">
          <div className="w-full px-3 py-3 hidden lg:flex justify-between items-center  bg-white rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            <DesignEditorNav />
          </div>

          <div className="py-3 w-full h-full flex flex-col gap-4 justify-between bg-white rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            <div className="w-full h-full rounded-md ">
              <h1 className="px-3 pb-3 text-dark-black text-lg font-extrabold ">
                Properties
              </h1>

              <div className="px-5 py-1 overflow-y-scroll max-h-[400px] custom-scrollbar-thin">
                <ul className="font-bold flex flex-col gap-3 text-dark-black text-sm">
                  <li
                    onClick={handleGeneralExpand}
                    className="py-2 w-full flex items-center justify-between border-b cursor-pointer"
                  >
                    <span>
                      <i className="fas fa-cog mr-2"></i>
                      General
                    </span>
                    <i className="self-end fa-solid fa-chevron-right"></i>
                  </li>
                  <li className="py-2 w-full flex items-center justify-between border-b cursor-pointer">
                    <span>
                      <i className="fas fa-palette mr-2"></i>
                      Color
                    </span>
                    <i className="self-end fa-solid fa-chevron-right"></i>
                  </li>
                  <li className="py-2 w-full flex items-center justify-between border-b cursor-pointer">
                    <span>
                      <i className="fas fa-expand-arrows-alt mr-2"></i>
                      Size
                    </span>
                    <i className="self-end fa-solid fa-chevron-right"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-3 w-full h-fit flex justify-center  rounded-md">
              <button className="w-full max-w-lg px-12 py-3 bg-gradient-to-r from-primary to-primary/40  rounded-xl text-xl font-semibold text-white outline outline-[4px] outline-[rgba(247,37,133,0.3)] flex justify-center items-center  hover:from-primary-dark hover:to-primary/50">
                Download
                <span className="ml-2 w-8 h-8  flex justify-center items-center bg-white rounded-full drop-shadow-md">
                  <i className="fas fa-download   text-sm text-primary"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

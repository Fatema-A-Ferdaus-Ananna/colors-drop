import SquareCard from "@/components/Cards/SquareCard";
import { contents } from "@/data/data";

export default function AllSVGPage() {
  return (
    <>
      <section className="pt-24 ">
        <div className="px-6 container mx-auto flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium font-sans tracking-tighter bg-clip-text bg-gradient-to-r from-primary-dark to-primary/50 text-transparent w-fit">
              50 Flower Icons
            </h1>
            <p className="mt-3 text-lg text-dark-gray">
              Customize and download 50 free SVG Icons next design projects.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Menu Section */}
      <section className="bg-[#f8f8f8] sticky top-16 z-10 border-b">
        <div className="px-6 pt-3 container mx-auto ">
          <div className="overflow-x-auto hide-scrollbar">
            <ul className="flex items-center gap-6 flex-nowrap text-[16px] font-semibold text-dark-gray whitespace-nowrap">
              <li>All Assets</li>
              <li className="py-4 text-dark-black border-black border-b-2">
                SVG Icons
              </li>
              <li>SVG Background</li>
              <li>Another</li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="p-6 container mx-auto flex flex-col gap-6">
          {/* Scrollable category list */}
          <div className="overflow-x-auto hide-scrollbar">
            <ul className="flex items-center gap-3 flex-nowrap text-xs md:text-sm text-dark-gray whitespace-nowrap">
              <li className="px-3 py-2 bg-dark-black text-white rounded-md md:font-bold font-semibold">
                All
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Social Media
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Software
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Framework
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Programming Language
              </li>
            </ul>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {contents.map((content) => (
              <SquareCard key={content.id} content={content} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

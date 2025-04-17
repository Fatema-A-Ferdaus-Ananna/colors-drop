import { contents } from "@/data/data";
import CTAButton from "../button/CTAButton";
import RectangleCard from "../Cards/RectangleCard";

export default function ContentSectionBG() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-5 py-24 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-4xl text-center font-medium font-sans tracking-tighter text-dark-black">
              Enhance Your Design with Unique SVG Background
            </h1>
            <p className="mt-2 md:text-lg text-center text-dark-gray">
              Try out our simple editor to adjust ratio size.
            </p>
          </div>

          <div className="md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {contents.map((content) => (
              <RectangleCard key={content.id} content={content} />
            ))}
          </div>

          <CTAButton>
            <span className="text-[17px] md:text-xl">Explore Background</span>
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

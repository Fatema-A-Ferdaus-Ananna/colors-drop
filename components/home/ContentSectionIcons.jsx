import { getAllData, getAllSvgIcon } from "@/data/data";
import CTAButton from "../button/CTAButton";
import TwoColCard from "../Cards/TwoColCard";
import TabOptions from "./TabOptions";

export default function ContentSectionIcons() {
  const allSvgData = getAllData();
  const allSvgIcon = getAllSvgIcon(allSvgData);

  return (
    <div className="bg-dark-black">
      <section className="container mx-auto px-5 py-24 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-4xl text-center font-medium font-sans tracking-tighter text-white">
              Enhance Your Design with Unique SVG Icons
            </h1>
            <p className="mt-2 md:text-lg text-center text-light-gray">
              Try out our simple editor to adjust colors and size.
            </p>
          </div>

          <div className="w-full flex  justify-center items-center">
            <TabOptions />
          </div>

          <div className="md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {allSvgIcon.map((content) => (
              <TwoColCard key={content.id} content={content} />
            ))}
          </div>

          <CTAButton>Explore Icons</CTAButton>
        </div>
      </section>
    </div>
  );
}

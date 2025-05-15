import Image from "next/image";
import Link from "next/link";
import CopyInfoButton from "../button/cardButton/CopyInfoButton";
import DetailsButton from "../button/cardButton/DetailsButton";

export default function SquareCard({ content, fullW = true }) {
  return (
    <div
      className={`${
        fullW ? "" : "shrink-0 w-56 snap-start"
      } p-3 aspect-square rounded-lg bg-cover bg-center bg-no-repeat relative group bg-white drop-shadow-md overflow-hidden`}
    >
      <div className="absolute w-full h-full flex justify-center items-center inset-0">
        <Image
          width={1000}
          height={1000}
          alt={content.title}
          src={content.thumbnail}
          className={` ${
            content.type === "icon"
              ? "w-[80%] h-[80%] object-cover"
              : "w-full h-full object-cover"
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-black/5"></div>
      {/* Editable tag */}
      <span className="px-2 py-1 absolute left-2 top-2 bg-light-gray text-dark-black text-xs md:text-[13px] rounded-[4px] transition-opacity duration-300 ">
        Editable
      </span>

      {/* Icons */}
      {/* Icons (hidden by default, shown on hover) */}
      <div className="absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
        <DetailsButton assetsInfo={content.id} iconSm={false} />
        <CopyInfoButton assetsInfo={content.id} iconSm={false} />
      </div>

      {/* Edit & Download Button (hidden by default, shown on hover) */}
      <div className="absolute w-full p-2 bottom-0 left-0 flex justify-center items-center gap-5 opacity-100 lg:opacity-0 text-sm  transition-opacity duration-300 lg:group-hover:opacity-100">
        <Link
          className="w-1/2 px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-black  hover:text-white transition-colors duration-300 ease-in"
          href={`/design/${content.id}`}
        >
          <i className="fas fa-edit"></i>
        </Link>

        <Link
          className="w-1/2 px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-black hover:text-white transition-colors duration-300 ease-in"
          href={"#"}
        >
          <i className="fas fa-download"></i>
        </Link>
      </div>
    </div>
  );
}

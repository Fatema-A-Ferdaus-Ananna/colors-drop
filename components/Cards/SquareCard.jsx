import Link from "next/link";
import CopyInfoButton from "../button/cardButton/CopyInfoButton";
import DetailsButton from "../button/cardButton/DetailsButton";
import EditButton from "../button/cardButton/EditButton";

export default function SquareCard({ content, fullW = true }) {
  return (
    <div
      className={`${
        fullW ? "" : "shrink-0 w-56 snap-start"
      } p-3 aspect-square rounded-lg bg-cover bg-center bg-no-repeat relative group bg-white drop-shadow-md overflow-hidden`}
      style={{
        backgroundImage: `url(${content.thumbnail})`,
        backgroundSize: "60%",
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>
      {/* Editable tag */}
      <span className="px-2 py-1 absolute left-2 top-2 bg-light-gray text-dark-black text-xs md:text-[13px] rounded-[4px] transition-opacity duration-300 ">
        Editable
      </span>

      {/* Icons */}
      <div className="absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
        <DetailsButton assetsInfo={content.id} />
        <CopyInfoButton assetsInfo={content.id} />
        <EditButton assetsInfo={content.id} />
      </div>

      {/* Edit & Download Button */}
      <div className="absolute w-full p-2 bottom-0 left-0 flex justify-center items-center gap-5 opacity-100 lg:opacity-0 text-sm transition-opacity duration-300 lg:group-hover:opacity-100">
        <Link
          className="w-full px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-black hover:text-white transition-colors duration-300 ease-in"
          href={"#"}
        >
          Download
          <i className="ml-2 fas fa-download"></i>
        </Link>
      </div>
    </div>
  );
}

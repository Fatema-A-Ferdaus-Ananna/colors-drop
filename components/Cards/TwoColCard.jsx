import Link from "next/link";
import CopyInfoButton from "../button/cardButton/CopyInfoButton";
import DetailsButton from "../button/cardButton/DetailsButton";
import EditButton from "../button/cardButton/EditButton";

export default function TwoColCard({ content }) {
  return (
    <div
      className="p-3 aspect-square rounded-lg bg-cover bg-center bg-no-repeat relative group bg-white shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${content.thumbnail})`,
        backgroundSize: "60%",
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>
      {/* Editable tag (visible by default, hides on hover) */}
      <span className="px-2 py-1 absolute left-2 top-2 bg-light-gray text-dark-black text-xs md:text-[13px] rounded-[4px] transition-opacity duration-300 ">
        Editable
      </span>

      {/* Icons (hidden by default, shown on hover) */}
      <div className="absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
        <DetailsButton assetsInfo={content.id} iconSm={true} />
        <CopyInfoButton assetsInfo={content.id} iconSm={true} />
        <EditButton assetsInfo={content.id} iconSm={true} />
      </div>

      {/* Edit & Download Button (hidden by default, shown on hover) */}
      <div className="absolute w-full p-2 bottom-0 left-0 flex justify-center items-center gap-5 opacity-100 lg:opacity-0 text-sm  transition-opacity duration-300 lg:group-hover:opacity-100">
        <Link
          className="w-1/2 px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-light-gray transition lg:hidden"
          href={`/design/${content.id}`}
        >
          <span className="hidden md:inline">Edit</span>
          <i className="md:ml-2 fas fa-edit"></i>
        </Link>

        <Link
          className="w-1/2 lg:w-full px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-black hover:text-white transition-colors duration-300 ease-in"
          href={"#"}
        >
          <span className="hidden md:inline">Download</span>
          <i className="md:ml-2 fas fa-download"></i>
        </Link>
      </div>
    </div>
  );
}

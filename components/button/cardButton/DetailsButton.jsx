import Link from "next/link";

export default function DetailsButton({ assetsInfo, iconSm = false }) {
  return (
    <div className="relative group/details">
      <Link
        href={`/assets/${assetsInfo}`}
        className={`${
          iconSm ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10"
        } bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md`}
      >
        <i className="fas fa-info-circle text-lg md:text-xl"></i>
      </Link>
      <span
        className={`absolute top-1/2 right-[52px] -translate-y-1/2 hidden group-hover/details:flex text-white text-nowrap px-4 py-2 rounded shadow-lg z-50 bg-light-black ${
          iconSm ? "text-xs" : "text-sm"
        }`}
      >
        Details
        <span
          className={`absolute top-1/2 left-full -translate-y-1/2 -ml-1 w-2 h-2 rotate-45 bg-light-black`}
        ></span>
      </span>
    </div>
  );
}

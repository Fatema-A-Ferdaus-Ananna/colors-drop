import Link from "next/link";

export default function EditButton({ assetsInfo, iconSm = false }) {
  return (
    <div className="relative group/edit">
      <Link
        href={`/design/${assetsInfo}`}
        className={`${
          iconSm ? "hidden lg:flex lg:w-10 lg:h-10" : "w-10 h-10"
        } bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md`}
      >
        <i className="fas fa-edit text-lg"></i>
      </Link>
      <span
        className={`absolute top-1/2 right-[52px] -translate-y-1/2 hidden group-hover/edit:flex text-white text-nowrap px-4 py-2 rounded shadow-lg text-sm z-50 bg-light-black`}
      >
        Edit
        <span
          className={`absolute top-1/2 left-full -translate-y-1/2 -ml-1 w-2 h-2 rotate-45 bg-light-black`}
        ></span>
      </span>
    </div>
  );
}

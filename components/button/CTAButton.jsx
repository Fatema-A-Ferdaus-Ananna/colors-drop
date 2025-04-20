import Link from "next/link";

export default function CTAButton({ children }) {
  return (
    <Link
      href={`/assets`}
      className="px-12 py-3 bg-gradient-to-r from-secondary to-primary rounded-2xl text-xl font-semibold text-white outline outline-[8px] outline-[rgba(76,201,240,0.1)] flex justify-center items-center gap-5 hover:from-secondary-dark hover:to-primary-dark"
    >
      {children}
      <span className="w-10 h-10  text-lg text-primary bg-white rounded-full flex justify-center items-center drop-shadow-md">
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </Link>
  );
}
// rgba(247,37,133, 1); rgba(76,201,240, 1)

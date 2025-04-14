import Link from "next/link";

export default function CTAButton({ children }) {
  return (
    <Link
      href={`/allSVG`}
      className="px-12 py-3 bg-gradient-to-r from-secondary to-primary rounded-2xl text-xl font-semibold text-white outline outline-[8px] outline-[rgba(202,15,240,0.1)] flex justify-center items-center gap-5 hover:from-secondary-dark hover:to-primary-dark"
    >
      {children}
      <i className="w-10 h-10 fa-solid fa-arrow-right text-lg text-primary bg-white rounded-full flex justify-center items-center drop-shadow-md"></i>
    </Link>
  );
}

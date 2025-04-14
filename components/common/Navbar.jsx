import Logo from "@/public/assets/svg/svgEditorLogo.svg";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "../Auth/AuthButtons";
import SearchAssets from "./SearchAssets";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full px-6 py-3  bg-white flex justify-between items-center gap-10 drop-shadow-sm z-30">
        <div className="w-[60%] h-12 flex justify-start  items-center gap-8">
          <Link href={`/`} className="h-full min-w-28 ">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              quality={100}
              className="object-contain h-full"
            />
          </Link>

          <div className="w-[60%] hidden lg:flex items-center relative">
            <SearchAssets />
          </div>
        </div>
        <AuthButtons />
      </nav>
    </>
  );
}

import Logo from "@/public/assets/svg/svgEditorLogo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-dark-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="">
          <Link href={`/`}>
            <Image width={1000} height={1000} src={Logo} alt="logo" />
          </Link>

          <p className="mt-8 text-sm text-light-gray">
            Creating smooth, responsive, and delightful digital experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Developer Information</h3>
          <ul className="space-y-2 text-light-gray text-sm">
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
              >
                Developer&apos;s Other Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-light-gray text-sm">
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-light-gray text-xl">
            <a
              href="#"
              className="hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-dark-gray text-sm mt-10 border-t border-dark-gray pt-4">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}

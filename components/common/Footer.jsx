import Logo from "@/public/assets/svg/svgEditorLogo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-dark-black text-white pt-20 relative">
      <div className=" mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
        {/* Brand */}
        <div className="w-full  md:w-[30%]">
          <Link href={`/`}>
            <Image
              width={1000}
              height={1000}
              src={Logo}
              alt="logo"
              className="sm:max-w-[250px]"
            />
          </Link>

          <p className="mt-8 text-sm text-light-gray">
            Creating smooth, responsive, and delightful digital experiences.
          </p>
        </div>

        <div className="w-full md:w-[80%] grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Support */}
          <div>
            <h3 className=" font-semibold mb-3">Support & Service</h3>
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
                  Terms & Conditions
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

              <li>
                <a
                  href="#"
                  className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
                >
                  License & Contributions
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className=" font-semibold mb-3">Explore</h3>
            <div className="flex space-x-4 text-light-gray text-3xl">
              <ul className="space-y-2 text-light-gray text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
                  >
                    SVG Icons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
                  >
                    SVG Backgrounds
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className=" font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-light-gray text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
                >
                  About Developer
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

          {/* Social */}
          <div>
            <h3 className=" font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4 text-light-gray text-3xl">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/fatema-a-ferdaus/`}
                className="hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/Fatema-A-Ferdaus-Ananna`}
                className="hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-dark-gray text-sm mt-10 border-t border-dark-gray py-8">
        © {new Date().getFullYear()} Fatema-A-Ferdaus. All rights reserved.{" "}
        <br />
        <span className="text-xs font-bold"> Under Development</span>
      </div>
    </footer>
  );
}

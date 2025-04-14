import Logo from "@/public/assets/svg/svgEditorLogo.svg";
import Image from "next/image";
import Link from "next/link";
import PortalModal from "./PortalModal";

export default function AuthForm({ onSetShowModal }) {
  //   const [showModal, setShowModal] = useState(false);

  //   // Prevent scroll when modal is open
  //   useEffect(() => {
  //     if (showModal) {
  //       document.documentElement.classList.add("hide-scrollbar");
  //     } else {
  //       document.documentElement.classList.remove("hide-scrollbar");
  //     }
  //   }, [showModal]);

  //   <li>
  //   <button
  //     onClick={() => setShowModal(true)}
  //     className="px-8 py-[14px] border border-dark-gray border-opacity-60 hover:border-dark-black rounded-lg text-dark-gray hover:text-dark-black font-semibold custom-transition"
  //   >
  //     Sign in
  //   </button>
  // </li>
  // <li>
  //   <button
  //     onClick={() => setShowModal(true)}
  //     className="px-8 py-[14px] bg-primary rounded-lg text-white font-semibold hover:bg-primary-dark custom-transition"
  //   >
  //     Sign up
  //   </button>
  // </li>

  //   <div>
  //   <h4 className="text-sm font-light text-dark-gray">Get Started</h4>
  //   <button
  //     onClick={() => setShowModal(true)}
  //     className="my-3 py-3 w-full bg-dark-black text-white text-sm font-semibold rounded-lg hover:bg-opacity-85 transition-all duration-300 ease-in-out"
  //   >
  //     Log in
  //   </button>
  // </div>
  // <hr className="w-full" />

  return (
    <PortalModal>
      <div
        onClick={() => onSetShowModal(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm bg-opacity-25 z-40 w-full h-auto flex justify-center items-center overflow-y-scroll"
      >
        <div className="relative w-full md:w-[80%] max-w-6xl min-h-[500px] h-[80%] max-h-[600px] bg-white p-4 rounded-xl shadow-lg flex justify-between items-center gap-8">
          <i className="top-3 right-3 md:top-0 md:-right-10 absolute w-8 h-8 rounded-full fas fa-xmark bg-dark-black bg-opacity-60 text-white flex justify-center items-center hover:bg-opacity-100 transition-all duration-300 ease-in-out cursor-pointer"></i>

          <div
            className="hidden  lg:flex lg:w-[300px] lg:h-full lg:aspect-square xl:w-1/2 rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>

          <div className="p-5 w-full h-full xl:w-1/2  lg:aspect-square flex flex-col  justify-between items-center gap-8 text-center">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={200}
              quality={100}
              className="object-fill w-36"
            />

            <div className="w-full lg:w-[80%] flex flex-col gap-8 items-cente">
              <div>
                <h1 className="text-4xl font-semibold tracking-tighter">
                  Use Our <br /> customizable SVG
                </h1>
                <p className="mt-2 text-dark-gray text-sm">
                  High-quality icons and backgrounds.
                </p>
              </div>

              <div className="w-full flex flex-col items-center gap-3 font-semibold">
                <Link
                  href={`#`}
                  className="py-3 w-full max-w-md bg-primary rounded-lg text-white   hover:bg-primary-dark transition-all duration-300 ease-in-out"
                >
                  <i className="mr-2 p-2 bg-white text-primary fab fa-google rounded-md"></i>
                  Continue With Google
                </Link>
                <Link
                  href={`#`}
                  className="py-3 w-full max-w-md border border-black border-opacity-20 rounded-lg hover:border-opacity-100 transition-all duration-300 ease-in-out"
                >
                  <i className="mr-2 p-2 bg-dark-black text-white fas fa-envelope rounded-md"></i>
                  Continue With Email
                </Link>
              </div>
            </div>
            <div className="text-[13px] text-dark-gray">
              By continuing, you agree to our <br />
              <Link
                href={`#`}
                className="text-secondary hover:underline underline-offset-2"
              >
                Terms & Conditions{" "}
              </Link>{" "}
              and{" "}
              <Link
                href={`#`}
                className="text-secondary hover:underline underline-offset-2"
              >
                {" "}
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PortalModal>
  );
}

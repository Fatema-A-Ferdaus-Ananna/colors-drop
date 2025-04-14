import Link from "next/link";
import CTAButton from "../button/CTAButton";
import TabOptions from "./TabOptions";

export default function ContentSectionIcons() {
  const contents = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1744198275588-06648407b39a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-dark-black">
      <section className="container mx-auto px-5 py-24 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-4xl text-center font-medium font-sans tracking-tighter text-white">
              Enhance Your Design with Unique SVG Icons
            </h1>
            <p className="mt-2 md:text-lg text-center text-light-gray">
              Try out our simple editor to adjust colors and size.
            </p>
          </div>

          <div className="w-full flex  justify-center items-center">
            <TabOptions />
          </div>

          <div className="md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {contents.map((content) => (
              <div
                key={content.id}
                className="p-3 aspect-square rounded-lg bg-cover bg-center relative group bg-gray-800 shadow-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${content.thumbnail})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                {/* Editable tag (visible by default, hides on hover) */}
                <span className="px-2 py-1 absolute left-2 top-2 bg-light-gray text-dark-black text-xs md:text-[13px] rounded-[4px] transition-opacity duration-300 ">
                  Editable
                </span>

                {/* Icons (hidden by default, shown on hover) */}
                <div className="absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                  <Link
                    href={`/${content.id}`}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md"
                  >
                    <i className="fas fa-info-circle text-lg md:text-xl"></i>
                  </Link>
                  <Link
                    href={"#"}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md"
                  >
                    <i className="fas fa-link text-lg"></i>
                  </Link>
                  <Link
                    href={"#"}
                    className="hidden  lg:w-10 lg:h-10 bg-white text-dark-black rounded-[4px] lg:flex justify-center items-center shadow-md"
                  >
                    <i className="fas fa-edit text-lg"></i>
                  </Link>
                </div>

                {/* Edit & Download Button (hidden by default, shown on hover) */}
                <div className="absolute w-full p-2 bottom-0 left-0 flex justify-center items-center gap-5 opacity-100 lg:opacity-0 text-sm  transition-opacity duration-300 lg:group-hover:opacity-100">
                  <Link
                    className="w-1/2 px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-light-gray transition lg:hidden"
                    href={"#"}
                  >
                    <span className="hidden md:inline">Edit</span>
                    <i className="md:ml-2 fas fa-edit"></i>
                  </Link>

                  <Link
                    className="w-1/2 lg:w-full px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-light-gray transition"
                    href={"#"}
                  >
                    <span className="hidden md:inline">Download</span>
                    <i className="md:ml-2 fas fa-download"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <CTAButton>Explore Icons</CTAButton>
        </div>
      </section>
    </div>
  );
}

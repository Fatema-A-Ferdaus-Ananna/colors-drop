import Link from "next/link";
import CTAButton from "../button/CTAButton";

export default function ContentSectionBG() {
  const contents = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0dGVybnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1498612753354-772a30629934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhdHRlcm58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="bg-white">
      <section className="container mx-auto px-5 py-24 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-4xl text-center font-medium font-sans tracking-tighter text-dark-black">
              Enhance Your Design with Unique SVG Background
            </h1>
            <p className="mt-2 md:text-lg text-center text-dark-gray">
              Try out our simple editor to adjust ratio size.
            </p>
          </div>

          <div className="md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {contents.map((content) => (
              <div
                key={content.id}
                className="p-3 aspect-video rounded-lg bg-cover bg-center relative group bg-gray-800 shadow-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${content.thumbnail})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                {/* Editable tag (visible by default, hides on hover) */}
                <span className="px-2 py-1 absolute left-2  top-2 bg-light-gray text-dark-black text-xs md:text-sm rounded-[4px] transition-opacity duration-300 ">
                  Editable
                </span>

                {/* Icons (hidden by default, shown on hover) */}
                <div className="absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                  <Link
                    href={"#"}
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
                </div>

                {/* Edit & Download Button (hidden by default, shown on hover) */}
                <div className="absolute w-full p-2 bottom-0 left-0 flex justify-between items-center gap-5 opacity-100 lg:opacity-0 text-sm md:text-base transition-opacity duration-300 lg:group-hover:opacity-100">
                  <Link
                    className="w-1/2 lg:w-[40%] px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-light-gray transition"
                    href={"#"}
                  >
                    <span>Edit</span>
                    <i className="ml-2 fas fa-edit"></i>
                  </Link>

                  <Link
                    className="w-1/2 lg:w-[60%] px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-light-gray transition"
                    href={"#"}
                  >
                    <span>Download</span>
                    <i className="ml-2 fas fa-download"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <CTAButton>
            <span className="text-[17px] md:text-xl">Explore Background</span>
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

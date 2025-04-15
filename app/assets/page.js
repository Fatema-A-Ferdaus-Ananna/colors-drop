import Link from "next/link";

export default function AllSVGPage() {
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
    <>
      <section className="pt-24 border-b">
        <div className="px-6 container mx-auto flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium font-sans tracking-tighter bg-clip-text bg-gradient-to-r from-primary-dark to-purple-400 text-transparent w-fit">
              50 Flower Icons
            </h1>
            <p className="mt-5 text-lg text-dark-gray">
              Customize and download 50 free SVG Icons next design projects.
            </p>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <ul className="flex items-center gap-6 flex-nowrap text-[16px] font-semibold text-dark-gray whitespace-nowrap ">
              <li>All Assets</li>
              <li className="py-4 text-dark-black border-black border-b-2">
                SVG Icons
              </li>
              <li>SVG Background</li>
              <li>Another</li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pb-24 bg-white">
        <div className="p-6 container mx-auto flex flex-col gap-6">
          <div className="overflow-x-auto hide-scrollbar">
            <ul className="flex items-center gap-3 flex-nowrap text-xs md:text-sm   text-dark-gray whitespace-nowrap ">
              <li className="px-3 py-2 bg-dark-black text-white rounded-md md:font-bold  font-semibold">
                All
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Social Media
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Software
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Framework
              </li>
              <li className="px-3 py-2 bg-[#f8f8f8] text-dark-black rounded-md">
                Programming Language
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {contents.map((content) => (
              <div
                key={content.id}
                className="p-3 aspect-square rounded-lg bg-cover bg-center relative group bg-gray-800 drop-shadow-md overflow-hidden"
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
                    className="w-10 h-10 bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md"
                  >
                    <i className="fas fa-info-circle text-lg md:text-xl"></i>
                  </Link>
                  <Link
                    href={"#"}
                    className="w-10 h-10 bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md"
                  >
                    <i className="fas fa-link text-lg"></i>
                  </Link>
                  <Link
                    href={"#"}
                    className="w-10 h-10 bg-white text-dark-black rounded-[4px] flex justify-center items-center shadow-md"
                  >
                    <i className="fas fa-edit text-lg"></i>
                  </Link>
                </div>

                {/* Edit & Download Button (hidden by default, shown on hover) */}
                <div className="absolute w-full p-2 bottom-0 left-0 flex justify-center items-center gap-5 opacity-100 lg:opacity-0 text-sm  transition-opacity duration-300 lg:group-hover:opacity-100">
                  <Link
                    className="w-full px-4 py-3 bg-white text-dark-black font-semibold rounded-md text-center shadow-md hover:bg-light-gray transition"
                    href={"#"}
                  >
                    Download
                    <i className="ml-2 fas fa-download"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

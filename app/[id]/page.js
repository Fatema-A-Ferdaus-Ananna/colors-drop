import Image from "next/image";
import Link from "next/link";

export default function SingleSVGPage() {
  return (
    <div className="py-[86px] bg-white">
      <section className="container mx-auto px-6 md:px-20  flex flex-col gap-3">
        <div className="py-6 flex flex-col gap-10 lg:flex-row justify-between items-center lg:items-stretch ">
          <div className="w-full md:w-fit flex  items-start">
            <div className="w-full md:w-[400px]  aspect-square rounded-2xl overflow-clip">
              <Image
                width={1000}
                height={1000}
                alt="photo"
                src={`https://images.unsplash.com/photo-1744198275588-06648407b39a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="px-5 py-6 w-full lg:min-w-[400px] bg-light-gray bg-opacity-30 rounded-lg flex flex-col gap-8 items-start">
            <h1 className="text-2xl font-semibold text-dark-black">
              Title Hhaijiajijn jjij
            </h1>
            <div className="w-full  flex flex-col md:flex-row gap-3 text-sm">
              <button className="py-3 w-full md:w-1/2 bg-dark-black text-white font-semibold rounded-lg hover:bg-opacity-90 custom-transition">
                Download
                <i className="ml-3 fas fa-download"></i>
              </button>
              <button className="py-3 w-full md:w-1/2 bg-dark-black text-white font-semibold rounded-lg hover:bg-opacity-90 custom-transition">
                Edit SVG
                <i className="ml-3 fas fa-edit"></i>
              </button>
            </div>

            <div className="w-full flex flex-col gap-3">
              <h2 className="font-semibold">Description</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis a obcaecati dolores, esse assumenda harum. Quasi
                repudiandae aspernatur recusandae pariatur unde, a incidunt,
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur a omnis possimus ullam nisi accusamus suscipit
                dolorem nam ipsa mollitia, illum maiores obcaecati
                necessitatibus dicta magni commodi nemo enim magnam?
              </p>
              <div className="w-full flex gap-3 flex-wrap">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 shadow-md text-dark-gray text-sm rounded-[5px] bg-white"
                  >
                    Icon {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 w-fit text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-secondary-dark">
            More Like This
          </h2>
          <div className="pb-3 flex flex-nowrap gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="shrink-0 p-3 w-56 aspect-square rounded-lg bg-cover bg-center relative group bg-gray-800 shadow-md overflow-hidden"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1744198275588-06648407b39a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
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
                    href={`/`}
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
                    <span>Download</span>
                    <i className="md:ml-2 fas fa-download"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

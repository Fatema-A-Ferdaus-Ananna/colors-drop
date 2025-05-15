import MoreLikeThis from "@/components/details/MoreLikeThis";
import { getAllSvgByType, getDataById } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function SingleSVGPage({ params }) {
  const svgId = params.id;
  const svgDetails = getDataById(svgId);
  const moreLikeThis = getAllSvgByType(svgDetails);

  console.log("svg id", svgId);
  console.log("svg detaile", svgDetails);

  return (
    <div className="py-[86px] bg-white">
      <section className="container mx-auto px-6 md:px-20  flex flex-col gap-3">
        {/* details */}
        <div className="py-6 flex flex-col gap-10 lg:flex-row justify-between items-center lg:items-stretch">
          <div className="w-full md:w-fit flex  items-start">
            <div className="w-full md:w-[400px]  aspect-square rounded-2xl overflow-clip flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                alt={svgDetails.title}
                src={svgDetails.thumbnail}
                className={
                  svgDetails.type === "icon"
                    ? "w-[80%] h-[80%] object-cover"
                    : "w-full  object-cover rounded-lg"
                }
              />
            </div>
          </div>
          <div className="px-5 py-6 w-full lg:min-w-[400px] bg-light-gray bg-opacity-30 rounded-lg flex flex-col gap-8 items-start">
            <h1 className="text-2xl font-semibold text-dark-black">
              {svgDetails.title}
            </h1>
            <div className="w-full  flex flex-col md:flex-row gap-3 text-sm">
              <button className="py-3 w-full md:w-1/2 bg-dark-black text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300 ease-in">
                Download
                <i className="ml-3 fas fa-download"></i>
              </button>
              <Link
                href={`/design/${svgId}`}
                className="py-3 w-full md:w-1/2 bg-dark-black text-white text-center font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300 ease-in"
              >
                Edit SVG
                <i className="ml-3 fas fa-edit"></i>
              </Link>
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

        {/* More */}
        <div>
          <h2 className="mb-3 w-fit text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-secondary-dark">
            More Like This
          </h2>
          <MoreLikeThis moreLikeThis={moreLikeThis} />
        </div>
      </section>
    </div>
  );
}

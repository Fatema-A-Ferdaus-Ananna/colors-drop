"use client";

import { getPreviousPath } from "@/lib/navigationState";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "./Modal";
import MoreLikeThis from "./MoreLikeThis";

export default function DetailsModalSection({ assetInfo }) {
  const pathname = usePathname();
  const previousPath = getPreviousPath();

  console.log("details modal pathmame:", pathname);
  console.log("details modal previous pathmame:", previousPath);
  //const showModal = pathname?.startsWith("/details");

  const isDetailsPage = pathname?.startsWith("/details");

  // Check if this is a modal (i.e., user came *from* another page)
  const isModal = isDetailsPage && pathname !== previousPath;

  // Final flag to show modal
  const showModal = isModal;

  return (
    <>
      {showModal && (
        <Modal>
          <div className="py-4 md:py-16 bg-white rounded-lg scroll-auto">
            <section className="container mx-auto px-3 md:px-20  flex flex-col gap-3">
              {/* details */}
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
                    Title
                  </h1>
                  <div className="w-full  flex flex-col md:flex-row gap-3 text-sm">
                    <button className="py-3 w-full md:w-1/2 bg-dark-black text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300 ease-in">
                      Download
                      <i className="ml-3 fas fa-download"></i>
                    </button>
                    <Link
                      href={`/design/${assetInfo}`}
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
                      Perspiciatis a obcaecati dolores, esse assumenda harum.
                      Quasi repudiandae aspernatur recusandae pariatur unde, a
                      incidunt, Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Consequuntur a omnis possimus ullam nisi
                      accusamus suscipit dolorem nam ipsa mollitia, illum
                      maiores obcaecati necessitatibus dicta magni commodi nemo
                      enim magnam?
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
                <MoreLikeThis modal={true} />
              </div>
            </section>
          </div>
        </Modal>
      )}
    </>
  );
}

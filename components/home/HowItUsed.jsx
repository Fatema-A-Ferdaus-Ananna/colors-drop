import Image from "next/image";

export default function HowItUsed() {
  return (
    <section className="container mx-auto px-5 py-24 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl md:text-4xl text-center font-medium font-sans tracking-tighter text-dark-black">
            <span className="text-dark-gray">SVGs in Action:</span> <br /> Where
            and How They&apos;re Used
          </h1>
          <p className="mt-2 md:text-lg text-center text-dark-gray">
            Learn about the diverse applications of SVGs in web design,
            animations, and user interfaces.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="w-full lg:w-[85%] p-5 md:p-6 lg:p-10 text-dark-black text-center bg-white rounded-2xl flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-8 drop-shadow-md">
            <div className="w-full lg:w-1/2 h-[180px] md:h-[320px]   rounded-2xl overflow-hidden">
              <Image
                height={1000}
                width={1000}
                src="https://images.unsplash.com/photo-1742506261388-4f5a6857d6c4?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                quality={100}
                alt="photo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-start text-lg md:text-2xl text-pretty leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quia quisquam
              recusandae eos. Dicta ea, repellat cumque natus quasi molestiae
              vitae. Delectus facere ipsum officiis dolorem ab debitis iusto
              deleniti assumenda.
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <i className="w-12 h-12 text-white text-xl bg-dark-gray fa-solid fa-chevron-left rounded-full flex justify-center items-center"></i>
          <i className="w-12 h-12 text-white text-xl bg-dark-gray fa-solid fa-chevron-right rounded-full flex justify-center items-center"></i>
        </div>
      </div>
    </section>
  );
}

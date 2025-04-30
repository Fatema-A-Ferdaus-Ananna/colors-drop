import Link from "next/link";

export default function HistoryPage() {
  const contents = [
    {
      id: 1,
      thumbnail: "/svgData/icons/home1.svg",
      title: "Icon Home",
      date: "12-02-2025",
    },
    {
      id: 2,
      thumbnail: "/svgData/icons/service1.svg",
      title: "Icon Service",
      date: "12-02-2025",
    },
    {
      id: 3,
      thumbnail: "/svgData/bg/bg4.svg",
      title: "Blue Gradient Background",
      date: "12-02-2025",
    },
    {
      id: 4,
      thumbnail: "/svgData/bg/bg1.svg",
      title: "White Black Background",
      date: "12-02-2025",
    },
    {
      id: 5,
      thumbnail: "/svgData/icons/viewDetails2.svg",
      title: "Icon Information",
      date: "12-02-2025",
    },
  ];

  return (
    <section className="container mx-auto px-6 md:px-20 py-28 min-h-screen flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold">History</h1>
        <div className="flex gap-5 text-xs md:text-sm text-light-black">
          <button className="hover:text-red-700 transition-all duration-300 ease-in">
            Delete All <i className="ml-1 text-xs  fas fa-trash"></i>
          </button>

          <button className="hover:text-secondary-dark transition-all duration-300 ease-in">
            Sort By
            <i className="ml-1 text-xs fas fa-exchange-alt rotate-90"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {contents.map((con) => (
          <div
            key={con.id}
            className="p-3 flex items-center justify-between gap-4 rounded-md bg-white shadow-md"
          >
            <div className="w-[75%] flex items-center gap-3 text-sm md:text-base font-semibold">
              <div
                className="w-14 aspect-square bg-cover bg-center rounded-md bg-no-repeat  bg-white"
                style={{
                  backgroundImage: `url(${con.thumbnail})`,
                }}
              ></div>
              <span className="w-[70%] flex flex-col">
                <h1 className="text-pretty break-words whitespace-normal">
                  {con.title}
                </h1>
                <p className="text-[10px] md:text-xs font-light text-dark-gray">
                  Date: {con.date}
                </p>
              </span>
            </div>
            <div className="w-[20%] px-2 flex gap-5 text-sm justify-end">
              <Link
                href={`/design/${con.id}`}
                className="text-blue-600 hover:scale-110"
              >
                <i className="fas fa-edit"></i>
              </Link>
              <button className="text-red-700 hover:scale-110">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

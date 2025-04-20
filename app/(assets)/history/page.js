import Link from "next/link";

export default function HistoryPage() {
  const contents = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Icon Youtube",
      date: "12-02-2025",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Icon Instagram",
      date: "12-02-2025",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Icon Twitter",
      date: "12-02-2025",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Icon Figma",
      date: "12-02-2025",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Icon Whatsapp",
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
                className="w-14 aspect-square bg-cover bg-center rounded-md"
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

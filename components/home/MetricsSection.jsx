export default function MetricsSection() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-5 py-24 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="px-4 py-1 text-secondary-dark border border-secondary rounded-full">
              Metrics
            </span>
            <h1 className="text-3xl md:text-4xl  text-center font-medium font-sans tracking-tighter">
              Why Incorporate Colors-Drop <br /> in Your Workflow?
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-light-black text-center">
              <div className="px-8 py-5">
                <h4 className="mb-2 text-lg font-bold tracking-tighter">
                  Instant SVG Color Preview
                </h4>
                You can see how your SVG looks with different colors
                immediately—no need to open heavy design tools.
              </div>

              <div className="px-8 py-5 border-t border-b md:border-t-0 md:border-b-0 md:border-l lg:border-r lg:border-l">
                <h4 className="mb-2 text-lg font-bold tracking-tighter">
                  Easy to Use
                </h4>
                The interface is super simple—just pick your SVG, pick a color,
                and you&apos;re done.
              </div>

              <div className="px-8 py-5">
                <h4 className="mb-2 text-lg font-bold tracking-tighter">
                  Download & Go
                </h4>
                Once you&apos;re happy with the color, you can easily download
                the SVG to use in your project.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

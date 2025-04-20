import CTAButton from "../button/CTAButton";

export default function HeroSection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="px-6 py-32 min-h-fit h-screen max-h-[1080px] flex flex-col justify-start items-center gap-8 text-center">
          <h1 className="text-4xl md:text-6xl  font-medium md:font-semibold tracking-tight ">
            A Marketplace for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary  ">
              Editable SVG Icon
            </span>
          </h1>
          <h2 className="text-lg text-dark-gray ">
            Edit high-quality icons on your web browser.
          </h2>
          <CTAButton>Explore Icons</CTAButton>
        </div>
      </div>
    </>
  );
}

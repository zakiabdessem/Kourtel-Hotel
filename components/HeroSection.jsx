import Image from "next/image";

function HeroSection() {
  return (
    <section className="main-content lg:flex lg:flex-row mt-4">
      {/* Content and Image for medium and larger screens */}

      <div className="flex md:flex-1 flex-col lg:justify-center lg:items-start justify-center items-center mt-8 p-8">
        <h1 className="p-3 text-5xl font-dancing font-semibold text-primary lg:text-left text-center">
          Hotel Kourtel
        </h1>
        <h2 className="p-2 text-2xl lg:text-5xl font-raleway font-bold tracking-wide text-gray-900 lg:text-left text-center">
          Hotel for every moment rich in emotion
        </h2>

        <p className="p-3 my-2 text-lg lg:text-2xl font-raleway font-medium tracking-wide text-gray-900 w-5/6 lg:text-left text-center">
          Every moment feels like the first time in paradise view
        </p>
        <button
          type="button"
          className="p-3 ml-2 text-white bg-primary hover:bg-primary focus:outline-none font-medium text-sm rounded-3xl">
          Book now
        </button>
      </div>

      <div className="md:flex p-4 m-5">
        {/* Responsive Image */}
        <Image
          className="rounded-lg"
          src="/img/main.jfif"
          alt="main-hero-img"
          width={582}
          height={389}
        />
      </div>
    </section>
  );
}

export default HeroSection;

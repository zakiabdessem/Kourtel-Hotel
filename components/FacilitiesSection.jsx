import React from "react";
import Image from "next/image";

function FacilitiesSection() {
  return (
    <section id="services" className="flex flex-col items-center py-5">
      <h1 className="section-title text-black p-4">Our Facilities</h1>
      <h3 className="section-details text-black font-semibold p-4">
        We offer modern 4 Stars hotel facilities for your comfort.
      </h3>
      <div className="flex flex-wrap items-center">
        <div className="flex justify-center  items-center w-1/2 md:w-1/4 p-2">
          <Image
            src="/img/facility 1.svg"
            alt="facility2-wifi"
            width={280}
            height={250}
          />
        </div>
        <div className="flex justify-center  items-center w-1/2 md:w-1/4 p-2">
          <Image
            src="/img/facility 2.svg"
            alt="facility2-wifi"
            width={280}
            height={250}
          />
        </div>
        <div className="flex justify-center  items-center w-1/2 md:w-1/4 p-2">
          <Image
            src="/img/facility 3.svg"
            alt="facility2-wifi"
            width={280}
            height={250}
          />
        </div>
        <div className="flex justify-center items-center w-1/2 md:w-1/4 p-2">
          <Image
            src="/img/facility 4.svg"
            alt="facility2-wifi"
            width={280}
            height={250}
          />
        </div>
      
      </div>
    </section>
  );
}

export default FacilitiesSection;

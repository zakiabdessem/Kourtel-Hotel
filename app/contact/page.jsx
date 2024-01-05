"use client";
import Contact from "../../components/Contact";
import dynamic from "next/dynamic";

// Dynamically import the LeafletMap component with no SSR
const LeafletMapWithNoSSR = dynamic(
  () => import("../../components/Map"), // Adjust the path as needed
  { ssr: false },
);

function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <section className="section-rooms w-full h-screen relative bg-[url('/img/contact-bg.png')] bg-cover bg-center p-16 flex justify-center items-center">
        <div className="color-overlay absolute inset-0 bg-brown-600 bg-opacity-50"></div>
        <div className="content-container absolute inset-0 flex flex-col items-center justify-center">
          <h1 className=" text-white font-mulish font-bold text-5xl">
            Contact Us
          </h1>
          <h3 className="section-details text-white text-md w-2/3 p-5">
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </h3>
        </div>
      </section>
      <Contact />
      <LeafletMapWithNoSSR />
    </div>
  );
}

export default Page;

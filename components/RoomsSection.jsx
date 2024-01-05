"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { useMediaQuery } from "react-responsive";

const roomData = [
  {
    imageUrl: "/img/room-couple.jpeg",
    altText: "Double Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "2 persons",
  },
  {
    imageUrl: "/img/room-double.jpeg",
    altText: "Couple Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "For couples",
  },
  {
    imageUrl: "/img/room-triple.jpeg",
    altText: "Triple Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "3 persons",
  },
  {
    imageUrl: "/img/room-couple.jpeg",
    altText: "Couple Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "1 person",
  },
  {
    imageUrl: "/img/room-couple.jpeg",
    altText: "Couple Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "1 person",
  },
  {
    imageUrl: "/img/room-couple.jpeg",
    altText: "Couple Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "1 person",
  },
  {
    imageUrl: "/img/room-couple.jpeg",
    altText: "Couple Room",
    description: "Television set, Extra sheets and Breakfast",
    size: "1 person",
  },
  // ... add more room objects as needed
];

function RoomsSection() {
  const isMobile = useMediaQuery({ query: `(max-width: 1133px)` });

  return (
    <section
      id="rooms"
      className="section-rooms w-full h-screen relative bg-[url('/img/rooms-bg.png')] bg-cover bg-center p-8">
      <div className="color-overlay absolute inset-0 bg-brown-600 bg-opacity-50"></div>
      <div className="content-container absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="section-title text-white">Luxurious Rooms</h1>
        <div className="border-title bg-white w-32 h-1"></div>
        <h3 className="section-details text-white text-md p-2">
          All rooms are designed for your comfort.
        </h3>

        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper flex justify-center items-center p-5">
          {roomData.map((room, index) => (
            <SwiperSlide key={index}>
              <div className="group room-card bg-white rounded-lg shadow-lg  relative">
                <Image
                  src={room.imageUrl}
                  alt={room.altText}
                  width={385}
                  height={385}
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-sm m-2">
                  <p className="text-xs font-raleway text-center">
                    {room.size}
                  </p>
                </div>
                <div className="p-4 text-left">
                  <p className="font-raleway">{room.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RoomsSection;

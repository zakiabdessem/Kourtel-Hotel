import Image from "next/image";

function FeedbackSection() {
  return (
    <section className="section-rooms p-4">
      <h1 className="section-title text-black p-5">Testimonies</h1>

      <div className="feedCards flex flex-wrap justify-center items-stretch px-5 object-contain">
        {/* Repeat for each feedback card */}

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">2 Mar. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
              />
            </div>
            <p className="text-xs font-raleway ml-6">
              A great hotel, everything is new and very clean, the staff are
              super friendly, professional, and very helpful. I highly recommend
              without hesitation.
            </p>
          </div>
          <div className="p-4 flex items-center">
            <Image
              src="/img/person1.png"
              alt="Person"
              width={42}
              height={42}
            />
            <h3 className="ml-2 text-xs font-poppins font-medium">
              Anthony Bruff
            </h3>
          </div>
        </div>

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">2 Mar. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
                layout="intrinsic"
              />
            </div>
            <p className="text-xs font-raleway ml-6">
              A great hotel, everything is new and very clean, the staff are
              super friendly, professional, and very helpful. I highly recommend
              without hesitation.
            </p>
          </div>
          <div className="p-4 flex items-center">
            <Image
              src="/img/person1.png"
              alt="Person"
              width={42}
              height={42}
              layout="intrinsic"
            />
            <h3 className="ml-2 text-xs font-poppins font-medium">
              Anthony Bruff
            </h3>
          </div>
        </div>

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">2 Mar. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
                layout="intrinsic"
              />
            </div>
            <p className="text-xs font-raleway ml-6">
              A great hotel, everything is new and very clean, the staff are
              super friendly, professional, and very helpful. I highly recommend
              without hesitation.
            </p>
          </div>
          <div className="p-4 flex items-center">
            <Image
              src="/img/person1.png"
              alt="Person"
              width={42}
              height={42}
              layout="intrinsic"
            />
            <h3 className="ml-2 text-xs font-poppins font-medium">
              Anthony Bruff
            </h3>
          </div>
        </div>

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">2 Mar. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
                layout="intrinsic"
              />
            </div>
            <p className="text-xs font-raleway ml-6">
              A great hotel, everything is new and very clean, the staff are
              super friendly, professional, and very helpful. I highly recommend
              without hesitation.
            </p>
          </div>
          <div className="p-4 flex items-center">
            <Image
              src="/img/person1.png"
              alt="Person"
              width={42}
              height={42}
              layout="intrinsic"
            />
            <h3 className="ml-2 text-xs font-poppins font-medium">
              Anthony Bruff
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;

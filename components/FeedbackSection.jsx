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
              <h3 className="text-xs font-poppins font-medium">Last week</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
              />
            </div>
            <p className="text-xs font-raleway ml-6">
            As a frequent business traveler, I appreciate the efficiency and convenience this hotel offers. The high-speed internet is reliable, the business center is well-equipped, and the meeting rooms are perfect for both formal and informal gatherings. It&apos;s my go-to hotel for business trips
            </p>
          </div>
          <div className="p-4 flex items-center">
           
            <h3 className="ml-2 text-xs font-poppins font-medium">
             Chabane a
            </h3>
          </div>
        </div>

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">15 avril. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
              />
            </div>
            <p className="text-xs font-raleway ml-6">
            This hotel exceeded all my expectations! The rooms are spacious, elegantly furnished, and offer stunning views. The staff are exceptionally attentive and always go the extra mile to ensure a comfortable stay. Absolutely worth every penny!
            </p>
          </div>
          <div className="p-4 flex items-center">
           
            <h3 className="ml-2 text-xs font-poppins font-medium">
             Samira C
            </h3>
          </div>
        </div>

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">13 Oct. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
              />
            </div>
            <p className="text-xs font-raleway ml-6">
            I was impressed by the serene ambiance of the hotel. The gardens are beautifully manicured, and there&apos;s a tranquil atmosphere that&apos;s perfect for relaxation. The spa services are top-notch, and the therapists are skilled and professional. A true oasis in the city!
            </p>
          </div>
          <div className="p-4 flex items-center">
           
            <h3 className="ml-2 text-xs font-poppins font-medium">
            Belkandouci M
            </h3>
          </div>
        </div>

        <div className="feedCard bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-poppins font-medium">27 Dec. 2023</h3>
              <Image
                src="/img/rating.svg"
                alt="Rating"
                width={89.68}
                height={13}
                
              />
            </div>
            <p className="text-xs font-raleway ml-6">
            Our family stay at this hotel was remarkable. The kids loved the play area and the pool. The family rooms are well thought out, with plenty of space and amenities tailored for children. The staff were very accommodating to our needs. A fantastic choice for family vacations!
            </p>
          </div>
          <div className="p-4 flex items-center">
           
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

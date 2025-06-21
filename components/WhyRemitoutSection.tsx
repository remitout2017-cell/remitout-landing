import Image from "next/image";
import Award from "./icones/Award";
import PersonStar from "./icones/PersonStar";

export default function WhyRemitoutSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Orange diamond icon placeholder */}
            <div className="w-8 h-8 bg-orange-500 rotate-45 rounded-sm flex items-center justify-center ">
              <div className="w-4 h-4 bg-white rotate-45 rounded-sm"></div>
            </div>
            <h2 className="text-[32px] font-bold text-[#0B090A]">
              Why Remitout?
            </h2>
          </div>
          <p className="text-[#8E8E8E] text-[18px] font-medium">
            See why we are the favourite of thousands
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mb-18">
          {/* RBI-Approved Card */}
          <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[300px] md:h-[403px] group">
            {/* Background Image Placeholder */}
            <Image
              src="/why_remitout_01.webp?height=320&width=400"
              alt="RBI Approved background"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                mixBlendMode: "multiply",
              }}
            ></div>

            {/* Orange Icon Placeholder */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <Award />
            </div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-[22px] font-semibold mb-2">RBI-Approved</h3>
              <p className="text-base text-[#FFFFFF]/60 leading-[19.2px]">
                Your data and funds are protected with industry-leading
                security.
              </p>
            </div>
          </div>

          {/* Unmatched Expertise Card */}
          <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[300px] md:h-[403px] group">
            {/* Background Image Placeholder */}
            <Image
              src="/why_remitout_02.webp??height=320&width=400"
              alt="Unmatched Expertise background"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                mixBlendMode: "multiply",
              }}
            ></div>

            {/* Orange Icon Placeholder */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <PersonStar />
            </div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-[22px] font-semibold mb-2">
                Unmatched Expertise
              </h3>
              <p className="text-base text-[#FFFFFF]/60 leading-[19.2px]">
                Over a decade of excellence in international education.
              </p>
            </div>
          </div>

          {/* Global Network Card */}
          <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[300px] md:h-[403px] group">
            {/* Background Image Placeholder */}
            <Image
              src="/why_remitout_03.webp??height=320&width=400"
              alt="Global Network background"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                mixBlendMode: "multiply",
              }}
            ></div>

            {/* Orange Icon Placeholder */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <PersonStar />
            </div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-[22px] font-semibold mb-2">Global Network</h3>
              <p className="text-base text-[#FFFFFF]/60 leading-[19.2px]">
                Strong partnerships with top universities and institutions
                worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          {" "}
          {/* Add this wrapper if needed */}
          <div className="absolute left-0 right-0  bg-white rounded-2xl py-8 px-6 md:px-10 shadow-sm w-[90%] mx-auto ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Section - 50% width */}
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <div className="w-32 h-22 md:w-18 md:h-18 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src="/cil_book.webp"
                    alt="Avatar"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] md:text-2xl font-medium text-[#363636] mb-1 leading-[28.8px] capitalize tracking-[-1px]">
                    Make The Smart Choice
                  </h3>
                  <p className="text-[#8E8E8E] leading-[25px]">
                    Enroll today to make your admission a breeze
                  </p>
                </div>
              </div>

              {/* Button - 50% width */}
              <div className="w-full md:w-1/2 flex justify-end">
                <button className="w-full md:w-auto bg-[#FF7A00] text-white px-8 py-3 rounded-md font-semibold transition-colors whitespace-nowrap text-2xl">
                  Join the community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

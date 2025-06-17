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
            <div className="w-8 h-8 bg-orange-500 rotate-45 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rotate-45 rounded-sm"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Why Remitout?</h2>
          </div>
          <p className="text-gray-600 text-lg">
            See why we are the favourite of thousands
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {/* RBI-Approved Card */}
          <div className="relative rounded-xl overflow-hidden h-[403px] group">
            {/* Background Image Placeholder */}
            <Image
              src="/why_remitout_01.webp?height=320&width=400"
              alt="RBI Approved background"
              fill
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
              {/* Icon placeholder - replace with your icon */}
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
          <div className="relative rounded-xl overflow-hidden h-[403px] group">
            {/* Background Image Placeholder */}
            <Image
              src="/why_remitout_02.webp??height=320&width=400"
              alt="Unmatched Expertise background"
              fill
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
              {/* Icon placeholder - replace with your icon */}
              <PersonStar />
            </div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-[22px] font-semibold mb-2">
                Unmatched <br />
                Expertise
              </h3>
              <p className="text-base text-[#FFFFFF]/60 leading-[19.2px]">
                Over a decade of excellence in international education.
              </p>
            </div>
          </div>

          {/* Global Network Card */}
          <div className="relative rounded-xl overflow-hidden h-[403px] group">
            {/* Background Image Placeholder */}
            <Image
              src="/why_remitout_03.webp??height=320&width=400"
              alt="Global Network background"
              fill
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
              {/* Icon placeholder - replace with your icon */}
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
          <div className="absolute left-0 right-0  bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Purple diamond icon placeholder */}
                <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rotate-45 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Make The Smart Choice
                  </h3>
                  <p className="text-gray-600">
                    Enroll today to make your admission a breeze
                  </p>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap">
                Join the community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Advisor from "./icones/Advisor";
import Tick from "./icones/Tick";

export default function StudentTrustSection() {
  const features = [
    "Transparent Pricing",
    "Verified KYC Process",
    "RBI-Compliant",
    "Expert Support Team",
    "4.9/5 rated in Google",
    "3608 reviews in Google",
    "StartUp India Recognised",
  ];

  return (
    <section className="bg-[#F5F5FA] pb-22 pt-55 px-2 md:px-8 ">
      <div className="max-w-8xl  md:mx-[10%] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[32px] md:text-4xl  font-semibold text-[#363636] leading-[39.6px] tracking-[-1px] capitalize md:w-[70%]">
                15,000+ Students Already Trust Us —{" "}
                <span className="text-[#45267f]/60 italic">You&apos;re</span>{" "}
                Next
              </h2>
              <p className="text-[#8E8E8E] text-base font-normal leading-[25px] max-w-lg">
                With RemitOut, your educational pursuits and financial matters
                are managed with utmost security and professionalism, allowing
                you to concentrate fully on achieving your academic and career
                goals.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#45267F0A] p-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Tick />
                  </div>
                  <span className="text-[#45267F] text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="bg-[#FF7A00] text-white font-semibold px-6 py-2 text-[16px] rounded-sm md:rounded-lg transition-colors duration-200 cursor-pointer
                      sm:px-12 sm:py-3 sm:text-[20px] w-full"
              >
                Contact to know more
              </button>
            </div>
          </div>

          {/* Right Content - Images and Cards */}
          <div className="relative">
            {/* Main background area */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Top right image - woman with laptop */}
              <div className="absolute top-0 right-1 w-56 h-56 md:w-[352px] md:h-[337px] rounded-lg overflow-hidden shadow-lg ">
                <Image
                  src="/StudentTrust02.webp"
                  alt="Woman working on laptop"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom left image - woman reading */}
              <div className="absolute bottom-[-60px] left-10 w-56 h-56 md:w-[416px] md:h-[337px] rounded-lg overflow-hidden shadow-lg ">
                <Image
                  src="/StudentTrust01.webp?height=256&width=320"
                  alt="Woman reading in library"
                  width={320}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 95% Satisfaction Card */}
              <div className="absolute top-10 left-15 md:left-40 bg-white md:rounded-xl shadow-lg p-6 z-10">
                <div className="text-center">
                  <div className="relative w-22 h-22 mx-auto mb-3">
                    <svg
                      className="w-20 h-20 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="2"
                        strokeDasharray="95, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        95%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-base font-medium text-gray-700">
                    Highly Satisfied
                    <br />
                    Students
                  </p>
                </div>
              </div>

              {/* Experience Advisor Card */}
              <div className="absolute bottom-[-15px] left-[70%] md:right-18 rounded-[7px] bg-[#45267F] shadow-[0_10px_60px_rgba(75,131,252,0.15)] px-6 py-8 text-white z-10 ">
                <div className="text-center">
                  <div className=" mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                    <Advisor />
                  </div>
                  <p className="text-sm font-medium">
                    Experience
                    <br />
                    Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

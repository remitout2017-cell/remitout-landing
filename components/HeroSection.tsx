import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Navbar from "./Navbar";
import Phone from "./icones/Phone";
import Mail from "./icones/Mail";
import FaceBook from "./icones/FaceBook";
import Pinterest from "./icones/Pinterest";
import Insta from "./icones/Insta";
import Tick from "./icones/Tick";
import Image from "next/image";
import Book from "./icones/Book";
import Flight from "./icones/Flight";
import PigMoney from "./icones/PigMoney";

export default function RemitoutLanding() {
  return (
    <div className="min-h-screen bg-white relative z-10">
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex flex-row justify-between md:items-center h-10 p-4 md:px-[131px]">
          {/* Left side: Phone and Email */}
          <div className="flex  gap-4 font-poppins text-sm md:text-lg">
            <div className="flex  gap-1">
              <Phone />
              <span>+91 84519 02017</span>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="hidden sm:flex items-center gap-1">
              <Mail />
              <span>Support@remit.com</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            {/* Connect Us & Social Icons - only on desktop */}
            <div className="hidden sm:flex items-center gap-2 font-poppins text-lg">
              <span>Connect Us</span>
              <FaceBook />
              <Pinterest />
              <Insta />
            </div>

            {/* Login/Register - visible on all views */}
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="flex  gap-2 font-poppins text-sm md:text-lg">
              <a
                href="/login"
                className="underline underline-offset-2 hover:text-gray-200"
              >
                Login
              </a>
              <span className="text-white/50">/</span>
              <a
                href="/register"
                className="underline underline-offset-2 hover:text-gray-200"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 relative">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className=" px-4 py-5 md:px-[131px] ">
        <div className="max-w-8xl ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-[#45267F]/9 rounded-md w-fit p-3 flex items-center space-x-2">
                <div className="w-6 h-6  rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.6694 4.44644C14.836 4.6131 14.9194 4.81548 14.9194 5.05358C14.9194 5.29167 14.836 5.49406 14.6694 5.66072L8.20508 12.125L6.99079 13.3393C6.82413 13.506 6.62175 13.5893 6.38365 13.5893C6.14555 13.5893 5.94317 13.506 5.77651 13.3393L4.56222 12.125L1.33008 8.89287C1.16341 8.7262 1.08008 8.52382 1.08008 8.28572C1.08008 8.04763 1.16341 7.84525 1.33008 7.67858L2.54436 6.46429C2.71103 6.29763 2.91341 6.21429 3.15151 6.21429C3.3896 6.21429 3.59198 6.29763 3.75865 6.46429L6.38365 9.09822L12.2408 3.23215C12.4075 3.06548 12.6098 2.98215 12.8479 2.98215C13.086 2.98215 13.2884 3.06548 13.4551 3.23215L14.6694 4.44644Z"
                      fill="#45267F"
                    />
                  </svg>
                </div>
                <span className="text-[#45267F] text-[21px] leaading-[30px] font-bold">
                  15000+{" "}
                  <span className="text-[#45267F]/70 text-[20px] font-bold leading-[25px]">
                    Students
                  </span>
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-[32px] md:text-[50px] font-bold text-[#363636] tracking-[-1px] capitalize leading-[36px] md:leading-[55px]">
                  Transform Your Future With The{" "}
                  <span className="text-[#45267F]/60 italic">Top Online</span>
                  <br />
                  Education Partner
                </h1>

                <p className="text-[#8E8E8E] text-base md:text-lg leading-[25PX] max-w-lg">
                  Remitout makes outward remittance easy for students,
                  travelers, and businesses. RBI-approved, bank-level security,
                  and zero paperwork hassle.
                </p>
              </div>

              <Button className="bg-[#FF7A00] text-[22px]  text-white px-22 py-6 text-lg font-semibold rounded-md cursor-pointer hover:bg-[#FF7A00] ">
                Enquiry Today
              </Button>
            </div>

            {/* Right Content */}
            <div className="relative h-[92vh] z-[1]">
              {/* Image with overlay and CTA */}
              <div className="w-full h-full overflow-hidden relative ">
                <Image
                  src="/hero_section_banner.webp"
                  alt="Graduate Banner"
                  fill
                  className="object-cover z-5 md:scale-85 "
                />

                {/* Gray radial fade overlay */}
                <Image
                  src="/layer-5.webp"
                  alt="Circle Gradient Overlay"
                  width={800} // adjust size as needed
                  height={800}
                  className="absolute top-45 left-0 z-1 pointer-events-none"
                />
              </div>

              {/* CTA Button */}
              <Button className="absolute top-[50%] right-[6%] bg-[#45267F] hover:bg-[#45267F] text-white text-sm md:text-[20px] font-bold px-6 py-5 rounded-full z-10">
                Join Us Today
              </Button>

              {/* CTA Button */}
              <Button className="absolute top-[32%] right-[60%] bg-white hover:bg-white text-[#45267F] text-sm md:text-[20px] font-bold px-6 py-5 rounded-full z-10">
                <Tick /> Expert Advisors
              </Button>

              {/* Optional: Position testimonial card at the bottom */}
              <Card className="hidden md:absolute bottom-[16%] right-[50%] p-4 bg-white shadow-lg max-w-sm z-10">
                <div className="space-y-3">
                  <p className="text-gray-700 text-xl font-medium">
                    {'"...admission process unbelievably smooth..."'}
                  </p>

                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 text-base bg-white rounded-full flex items-center justify-center">
                      <Image
                        src="/avatar.webp" // replace with your actual avatar path
                        alt="Barbara D. Smith"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="font-semibold  text-[#2B2B2B]">
                      Barbara D. Smith
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="  bg-[#45267F] text-white py-12 -mt-72 md:-mt-0 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Admission Assistance */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#2E175A] rounded-lg flex items-center justify-center flex-shrink-0">
                <Book />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Admission Assistance
                </h3>
                <p className="text-base text-white/70">Expert Guidance</p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#2E175A] rounded-lg flex items-center justify-center flex-shrink-0">
                <Flight />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  International Transfers
                </h3>
                <p className="text-base text-white/70">
                  Global Education Support
                </p>
              </div>
            </div>

            {/* Loan Assistance */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#2E175A] rounded-lg flex items-center justify-center flex-shrink-0">
                <PigMoney />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Loan Assistance</h3>
                <p className="text-base text-white/70">
                  Secure Funding for Your Studies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

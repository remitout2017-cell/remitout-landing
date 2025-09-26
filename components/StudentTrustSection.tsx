"use client";

import Image from "next/image";
import Advisor from "./icones/Advisor";
import Tick from "./icones/Tick";
import { useEffect, useState } from "react";
import { getStudentTrustSectionContent } from "@/lib/route";
import Link from "next/link";

interface TrustData {
  studentCount: number;
  description: string;
  features: { text: string }[];
  satisfactionPercent: number;
  advisorText: string;
  imageTopRight?: { url: string };
  imageBottomLeft?: { url: string };
}

export default function StudentTrustSection() {
  const [data, setData] = useState<TrustData | null>(null);

  useEffect(() => {
    const fetchStudentsTrustSection = async () =>{
      const res = await getStudentTrustSectionContent();
      const jsonData = await res.json();
      setData(jsonData)
    }
    fetchStudentsTrustSection();
  }, []);

  if (!data) return null;

  return (
    <section className="bg-[#F5F5FA] pb-22 pt-42 md:pt-55 px-2 md:px-8  md:mt-0">
      <div className="max-w-8xl md:mx-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-[32px] md:text-4xl font-semibold text-[#363636] leading-[39.6px] tracking-[-1px] capitalize md:w-[70%]">
                {data.studentCount?.toLocaleString()}+ Students Already Trust Us
                — <span className="text-[#45267f]/60 italic">You&apos;re</span>{" "}
                Next
              </h2>
              <p className="text-[#8E8E8E] text-base font-normal leading-[25px] max-w-lg">
                {data.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#45267F0A] p-6">
              {Array.isArray(data.features) &&
                data.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Tick />
                    <span className="text-[#45267F] text-base font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
            </div>

            <div className="pt-4">
              <Link href="/contact-us">
                <button className="bg-[#FF7A00] text-white font-semibold px-6 py-2 text-[16px] rounded-sm md:rounded-lg w-full sm:px-12 sm:py-3 sm:text-[20px] cursor-pointer">
                  Contact to know more
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute top-0 right-0 w-56 h-56 md:w-[352px] md:h-[337px] rounded-md md:rounded-lg overflow-hidden shadow-lg z-10">
              <Image
                src={
                  data.imageTopRight?.url
                    ? `http://localhost:3001/${data.imageTopRight.url}`
                    : "/StudentTrust02.webp"
                }
                alt="Top Right"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[-10px] left-1 w-56 h-56 md:w-[416px] md:h-[337px] rounded-md md:rounded-lg overflow-hidden shadow-lg z-0">
              <Image
                src={
                  data.imageBottomLeft?.url
                    ? `http://localhost:3001/${data.imageBottomLeft.url}`
                    : "/StudentTrust01.webp"
                }
                alt="Top Right"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-15 md:top-5 left-10 md:left-32 bg-white rounded-md md:rounded-xl shadow-lg p-4 md:p-6 z-10">
              <div className="text-center">
                <div className="relative w-16 md:w-22 h-16 md:h-22 mx-auto mb-3">
                  <svg
                    className="md:w-20 md:h-20 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="2"
                      strokeDasharray={`${data.satisfactionPercent}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-2xl  font-bold text-gray-900">
                      {data.satisfactionPercent}%
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

            <div className="absolute bottom-[-15px] left-[70%] right-[2%] md:right-18 bg-[#45267F] shadow-[0_10px_60px_rgba(75,131,252,0.15)] px-6 py-8 text-white z-10 rounded-[7px]">
              <div className="text-center">
                <div className="mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                  <Advisor />
                </div>
                <p className="text-sm font-medium">{data.advisorText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

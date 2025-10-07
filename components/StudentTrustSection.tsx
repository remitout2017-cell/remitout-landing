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
  satisfactionText: string;
  headline: string;
  buttonText: string;
  buttonLink?: string;
}

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API;

export default function StudentTrustSection() {
  const [data, setData] = useState<TrustData | null>(null);

  useEffect(() => {
    const fetchStudentsTrustSection = async () => {
      try {
        const data = await getStudentTrustSectionContent(); 
        setData(data);
      } catch (err) {
        console.error("Failed to fetch Student Trust Section", err);
      }
    };

    fetchStudentsTrustSection();
  }, []);

if (!data) {
    return null; 
  }

  return (
    <section className="bg-[#F5F5FA] pb-16 md:pb-22 pt-32 md:pt-42 lg:pt-55 px-4 md:px-8">
      <div className="max-w-8xl mx-auto lg:mx-[8%] xl:mx-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 xl:gap-32 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-1">
              <h2 className="text-[28px] md:text-[32px] lg:text-4xl font-semibold text-[#363636] leading-[1.2] tracking-[-0.5px] md:tracking-[-1px] capitalize md:w-[85%] lg:w-[70%]">
                {data.headline.replace(
                  "{count}",
                  data.studentCount.toLocaleString()
                )}
              </h2>
              <p className="text-[#8E8E8E] text-[15px] md:text-base font-normal leading-[1.6] max-w-lg pt-2">
                {data.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 bg-[#45267F0A] p-5 md:p-6">
              {Array.isArray(data.features) &&
                data.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 md:space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <Tick />
                    </div>
                    <span className="text-[#45267F] text-[15px] md:text-base font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
            </div>

            <div className="pt-2 md:pt-4">
              <Link href={data.buttonLink || "/contact-us"}>
                <button className="bg-[#FF7A00] text-white font-semibold px-6 py-2.5 text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] rounded-sm md:rounded-lg w-full sm:w-auto sm:px-10 md:px-12 sm:py-3 cursor-pointer hover:bg-[#E66D00] transition-colors">
                  {data.buttonText || "Contact to know more"}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-[380px] md:h-[420px] lg:h-[480px] xl:h-[500px] mt-8 lg:mt-0">
            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-60 lg:w-80 lg:h-72 xl:w-[352px] xl:h-[337px] rounded-md md:rounded-lg overflow-hidden shadow-lg z-10">
              <Image
                src={
                  data.imageTopRight?.url
                    ? `${API_URL}${data.imageTopRight.url}`
                    : "/StudentTrust02.webp"
                }
                alt="Top Right"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 352px"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-60 lg:w-96 lg:h-72 xl:w-[416px] xl:h-[337px] rounded-md md:rounded-lg overflow-hidden shadow-lg z-0">
              <Image
                src={
                  data.imageBottomLeft?.url
                    ? `${API_URL}${data.imageBottomLeft.url}`
                    : "/StudentTrust01.webp"
                }
                alt="Bottom Left"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, (max-width: 1280px) 384px, 416px"
              />
            </div>

            {/* Satisfaction Card */}
            <div className="absolute top-12 md:top-8 lg:top-6 left-8 md:left-20 lg:left-28 xl:left-32 bg-white rounded-md md:rounded-xl shadow-lg p-3.5 md:p-5 lg:p-6 z-20 max-w-[140px] md:max-w-none">
              <div className="text-center">
                <div className="relative w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 mx-auto mb-2 md:mb-3">
                  <svg
                    className="w-full h-full transform -rotate-90"
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
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                      {data.satisfactionPercent}%
                    </span>
                  </div>
                </div>
                <p className="text-[11px] md:text-xs lg:text-sm xl:text-base font-medium text-gray-700 leading-tight">
                  {data.satisfactionText
                    ? data.satisfactionText.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))
                    : "Highly Satisfied\nStudents"}
                </p>
              </div>
            </div>

            {/* Advisor Card */}
            <div className="absolute bottom-0 md:bottom-[-10px] left-[62%] md:left-[65%] lg:left-[68%] right-2 md:right-8 lg:right-10 bg-[#45267F] shadow-[0_10px_60px_rgba(75,131,252,0.15)] px-4 py-6 md:px-5 md:py-7 lg:px-6 lg:py-8 text-white z-20 rounded-[7px] max-w-[140px] md:max-w-none">
              <div className="text-center">
                <div className="mx-auto mb-2 md:mb-3 bg-white/20 rounded-lg flex items-center justify-center w-fit px-2 py-1">
                  <Advisor />
                </div>
                <p className="text-[11px] md:text-xs lg:text-sm font-medium leading-tight">
                  {data.advisorText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Award from "./icones/Award";
import PersonStar from "./icones/PersonStar";
import { getWhyRemitout } from "@/lib/route";
import { getWhyRemitoutCTA } from "@/lib/route";
const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API;

interface Feature {
  id: string;
  title: string;
  description: string;
  image?: { url?: string; alt?: string };
  iconType: "Award" | "PersonStar";
}

export default function WhyRemitoutSection() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [cta, setCTA] = useState<{
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    image?: { url?: string; alt?: string };
  } | null>(null);

  useEffect(() => {
    const fetchCTA = async () => {
      const data = await getWhyRemitoutCTA(); // fetch from payload
      setCTA(data);
    };
    fetchCTA();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWhyRemitout();
      setFeatures(data);
    };

    fetchData();
  }, []);

  const renderIcon = (type: string) => {
    switch (type) {
      case "Award":
        return <Award />;
      case "PersonStar":
        return <PersonStar />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
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
          {features.map((item) => {
            // const imageUrl = item.image?.url?.startsWith("http")
            //   ? item.image.url
            //   : `${item.image?.url}`;

            return (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden h-[300px] md:h-[403px] group"
              >
                <Image
                  src={
                    item.image?.url
                      ? `${API_URL}${item.image.url}`
                      : "/why_remitout_01.webp"
                  }
                  alt={item.image?.alt || item.title}
                  fill
                  unoptimized
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
                <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  {renderIcon(item.iconType)}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-[22px] font-semibold mb-2 h-18 ">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#FFFFFF]/60 leading-[19.2px] h-28">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Dynamic */}
        {cta && (
          <div className="relative">
            <div className="absolute left-0 right-0 bg-white rounded-2xl py-4 md:py-8 px-3 md:px-10 shadow-sm w-[100%] md:w-[90%] md:mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 w-full md:w-1/2">
                  <div className="w-28 h-18 md:w-18 md:h-18 rounded-md md:rounded-xl overflow-hidden flex items-center justify-center bg-white">
                    <Image
                      src={
                        cta.image?.url
                          ? `${API_URL}${cta.image.url}` // add base URL here
                          : "/cil_book.webp"
                      }
                      alt={cta.image?.alt || "CTA Image"}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] md:text-2xl font-medium text-[#363636] mb-1 leading-[28.8px] capitalize tracking-[-1px]">
                      {cta.title}
                    </h3>
                    <p className="text-[#8E8E8E] md:leading-[25px]">
                      {cta.description}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-end">
                  <a
                    href={cta.buttonLink || "#"}
                    className="w-full md:w-auto bg-[#FF7A00] text-white px-8 py-2 md:py-3 rounded-sm md:rounded-md font-semibold transition-colors whitespace-nowrap text-lg md:text-2xl text-center"
                  >
                    {cta.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

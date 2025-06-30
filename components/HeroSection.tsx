"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import Book from "./icones/Book";
import Flight from "./icones/Flight";
import PigMoney from "./icones/PigMoney";
import { getHomePageContent, getNavContactDetails } from "@/lib/route";

// Payload Icon Mapper
const iconMap: Record<string, React.ReactElement> = {
  book: <Book />,
  flight: <Flight />,
  pigMoney: <PigMoney />,
};

interface HomePageData {
  hero: {
    highlight: string;
    title: string;
    description: string;
    ctaText: string;
    image?: { url: string };
    testimonial?: {
      text: string;
      author: string;
      rating: number;
      avatar?: { url: string };
    };
  };
  services: {
    title: string;
    description: string;
    iconType: "book" | "flight" | "pigMoney";
  }[];
}

export default function RemitoutLanding() {
  const [data, setData] = useState<HomePageData | null>(null);
  const [NavContactDetails, setNavContactDetails] = useState<{
    phone: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await getHomePageContent();
      const json = await res.json();
      setData(json);
    };
    const fetchNavContactDetails = async () => {
      const res = await getNavContactDetails();
      const json = await res.json();
      setNavContactDetails(json);
    };
    fetchContent();
    fetchNavContactDetails();
  }, []);

  if (!data) return null;

  const { hero, services } = data;

  return (
    <div className="min-h-screen bg-white relative z-10">
      {/* Topbar */}
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex justify-between md:items-center h-10 p-4 md:px-[131px]">
          <div className="flex gap-4 font-poppins text-sm md:text-lg">
            <div className="flex gap-1">
              <Phone />
              <span>{NavContactDetails?.phone}</span>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="hidden sm:flex items-center gap-1">
              <Mail />
              <span>{NavContactDetails?.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <div className="hidden sm:flex items-center gap-2 font-poppins text-lg">
              <a href="/contact-us" className="underline hover:text-gray-200">
                Contact Us
              </a>
              <FaceBook />
              <Pinterest />
              <Insta />
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="flex gap-2 font-poppins text-sm md:text-lg">
              <a href="/login" className="underline hover:text-gray-200">
                Login
              </a>
              <span className="text-white/50">/</span>
              <a href="/register" className="underline hover:text-gray-200">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="px-4 py-5 md:px-[131px]">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-8xl">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="bg-[#45267F]/9 rounded-md w-fit p-3 flex items-center space-x-2">
              <svg className="w-6 h-6">
                <circle cx="8" cy="8" r="8" fill="#45267F" />
              </svg>
              <span className="text-[#45267F] text-[21px] font-bold">
                {hero.highlight}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-[32px] md:text-[50px] font-bold text-[#363636] tracking-[-1px] capitalize leading-[36px] md:leading-[55px]">
                Transform Your Future With The{" "}
                <span className="text-[#45267F]/60 italic">Top Online</span>
                <br />
                Education Partner
              </h1>
              <p className="text-[#8E8E8E] text-base md:text-lg max-w-lg">
                {hero.description}
              </p>
            </div>

            <Button className="bg-[#FF7A00] text-white text-lg font-semibold px-8 py-4">
              {hero.ctaText}
            </Button>
          </div>

          {/* Hero Image + CTAs */}
          <div className="relative h-[48vh] md:h-[92vh] z-[1]">
            <div className="w-full h-full relative">
              {hero.image?.url && (
                <Image
                  src={`http://localhost:3001/${hero.image.url}`}
                  alt="Hero Banner"
                  fill
                  className="object-cover"
                />
              )}

              <Image
                src="/layer-5.webp"
                alt="Gray Overlay"
                width={800}
                height={800}
                className="absolute top-40 left-0 pointer-events-none"
              />
            </div>

            <Button className="absolute top-[50%] right-[6%] bg-[#45267F] text-white px-6 py-5 rounded-full">
              Join Us Today
            </Button>

            <Button className="absolute top-[32%] right-[60%] bg-white text-[#45267F] px-6 py-5 rounded-full">
              <Tick /> Expert Advisors
            </Button>

            {hero.testimonial && (
              <Card className="hidden md:block absolute bottom-[16%] right-[50%] p-4 bg-white shadow-lg max-w-sm">
                <div className="space-y-3">
                  <p className="text-gray-700 text-xl font-medium">
                    {`"${hero.testimonial.text}"`}
                  </p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: hero.testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {Array.from(
                      { length: 5 - hero.testimonial.rating },
                      (_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                      )
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    {hero.testimonial.avatar?.url && (
                      <Image
                        src={`http://localhost:3001/${hero.testimonial.avatar.url}`}
                        alt={hero.testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <span className="font-semibold text-[#2B2B2B]">
                      {hero.testimonial.author}
                    </span>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#45267F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2E175A] rounded-lg flex items-center justify-center flex-shrink-0">
                  {iconMap[service.iconType]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-base text-white/70">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

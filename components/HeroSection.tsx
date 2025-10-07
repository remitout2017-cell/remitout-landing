"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Navbar from "./Navbar";
import Phone from "./icones/Phone";
import Mail from "./icones/Mail";
import Tick from "./icones/Tick";
import Book from "./icones/Book";
import Flight from "./icones/Flight";
import PigMoney from "./icones/PigMoney";
import { getHomePageContent, getNavContactDetails } from "@/lib/route";
import Link from "next/link";
import VisaAssistance from "./icones/VisaAssistance";
import { fetchFooter } from "@/lib/route";
import SocialLinks from "@/components/SocialLinks";


// Payload Icon Mapper
const iconMap: Record<string, React.ReactElement> = {
  book: <Book />,
  flight: <Flight />,
  pigMoney: <PigMoney />,
  visaAssistance: <VisaAssistance />,
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
    ctaLink?: string;
    heading: string;
    subheading: string;
  };

  services: {
    title: string;
    description: string;
    iconType: "book" | "flight" | "pigMoney" | "visaAssistance";
  }[];
}

export default function RemitoutLanding() {
  const [data, setData] = useState<HomePageData | null>(null);
  const [NavContactDetails, setNavContactDetails] = useState<{
    phone: string;
    email: string;
  } | null>(null);
  const [footerContent, setFooterContent] = useState<{
    socialLinks?: {
      facebook?: string;
      instagram?: string;
      customIcon?: string;
    };
  } | null>(null);

useEffect(() => {
  async function loadFooter() {
    try {
      const data = await fetchFooter(); // already JSON
      setFooterContent(data?.docs?.[0] || {});
    } catch (err) {
      console.error("Failed to load footer content", err);
    }
  }
  loadFooter();
}, []);

  useEffect(() => {
     const fetchContent = async () => {
       try {
         const data = await getHomePageContent(); 
         setData(data);
       } catch (err) {
         console.error("Failed to fetch home page content", err);
       }
     };

   const fetchNavContactDetails = async () => {
     try {
       const contact = await getNavContactDetails();
       setNavContactDetails(contact);
     } catch (err) {
       console.error("Failed to fetch nav contact details", err);
     }
   };

    fetchContent();
    fetchNavContactDetails();
  }, []);

  if (!data) return null;

  const { hero, services } = data;

  return (
    <div className="min-h-screen bg-white relative">
      {/* Topbar */}
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex justify-between md:items-center h-10 p-4 md:px-[131px]">
          <div className="flex gap-4 font-poppins text-sm md:text-lg">
            <div className="flex gap-1">
              <Phone />
              <a
                href={`tel:${NavContactDetails?.phone}`}
                className="hover:underline"
              >
                {NavContactDetails?.phone}
              </a>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="hidden sm:flex items-center gap-1">
              <Mail />
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${NavContactDetails?.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {NavContactDetails?.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <div className="hidden sm:flex items-center gap-2 font-poppins text-lg">
              <a href="/contact-us" className="underline hover:text-gray-200">
                Contact Us
              </a>

              {/* Use Footer SocialLinks */}
              <SocialLinks links={footerContent?.socialLinks || {}} />
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
            <div className="bg-[#45267F]/9  w-fit p-3 flex items-center space-x-2">
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
              {hero?.highlight && (
                <span className="text-[#45267F] text-[21px] font-bold">
                  {hero.highlight}
                </span>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-[32px] md:text-[50px] font-bold text-[#363636] tracking-[-1px] leading-tight md:leading-[60px] space-y-2">
                {hero?.heading && (
                  <span
                    className="block text-[#45267F]"
                    dangerouslySetInnerHTML={{ __html: hero.heading }}
                  />
                )}

                {hero?.subheading && (
                  <span className="block text-[18px] md:text-[20px] font-normal text-[#45267F] mt-4">
                    {hero.subheading}
                  </span>
                )}
              </h1>

              {hero?.description && (
                <p className="text-[#8E8E8E] text-base md:text-lg max-w-lg">
                  {hero.description}
                </p>
              )}
            </div>

            <Link href={hero?.ctaLink || "/contact-us"}>
              <Button className="bg-[#FF7A00] text-white text-lg font-semibold px-20 py-5 cursor-pointer hover:bg-[#FF7A00] md:rounded-none w-full md:w-[60%]">
                {hero?.ctaText ?? "Get Started"}
              </Button>
            </Link>
          </div>

          {/* Hero Image + CTAs */}
          <div className="relative h-[48vh] md:h-[92vh] z-[8]">
            <div className="w-full h-full relative">
              <Image
                src={
                  hero?.image?.url
                    ? `http://localhost:3001/${hero.image.url}`
                    : "/hero_section_banner.webp"
                }
                alt="Hero Banner"
                fill
                className="object-cover z-[7]"
              />
              <Image
                src="/layer-5.webp"
                alt="Gray Overlay"
                width={800}
                height={800}
                className="absolute top-40 left-0 pointer-events-none "
              />
            </div>

            <Button className="absolute top-[50%] right-[6%] bg-[#45267F] text-white px-6 py-5 rounded-full z-[21]">
              Join Us Today
            </Button>

            <Button className="absolute top-[32%] right-[60%] bg-white text-[#45267F] px-6 py-5 rounded-full">
              <Tick /> Expert Advisors
            </Button>

            {hero?.testimonial && (
              <Card className="hidden md:block absolute bottom-[16%] right-[50%] p-4 bg-white shadow-lg max-w-sm z-[21]">
                <div className="space-y-3">
                  <p className="text-gray-700 text-xl font-medium">
                    {`"${hero.testimonial.text}"`}
                  </p>
                  <div className="flex items-center space-x-1">
                    {hero.testimonial?.rating &&
                      Array.from(
                        { length: hero.testimonial.rating },
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    {hero.testimonial?.rating &&
                      Array.from(
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
      <section className="bg-[#45267F] text-white py-12 relative z-[20]">
        <div className="max-w-8xl px-6 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services?.length > 0 &&
              services.map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#2E175A] rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-4">
                    {iconMap[service.iconType]}
                  </div>

                  {/* Text */}
                  <div className="max-w-xs sm:max-w-none mt-3 sm:mt-0">
                    <h3 className="text-xl font-semibold mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
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

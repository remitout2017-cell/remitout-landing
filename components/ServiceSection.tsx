"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GetServices } from "@/lib/route";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: { text: string }[];
  image: {
    url: string;
    alt?: string;
  };
  buttonText?: string;
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetServices();
      setServices(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white w-full pb-0 md:pb-39">
      <section className="py-5 md:py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold md:text-4xl text-[#363636] mb-4">
            Our <span className="hidden text-[#45267f99] italic">Remittance</span>{" "}
            Services
          </h2>
          <p className="text-[#8E8E8E] text-[18px] max-w-2xl mx-auto">
            Send money abroad for education, travel, medical, and more — 100%
            RBI-compliant and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {services.map((service, index) => {
            const imageUrl = service.image?.url?.startsWith("http")
              ? service.image.url
              : `${service.image?.url}`;
            const isEvenRow = Math.floor(index / 2) % 2 === 0; // Determine if it's an even or odd row

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Image */}
                <div
                  className={`${
                    isEvenRow ? "order-1 md:order-1" : "order-1 md:order-2"
                  } bg-white rounded-[6px] shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]`}
                >
                  <Image
                    src={
                      service.image?.url
                        ? `http://localhost:3001/${imageUrl}`
                        : "/service_section02.webp"
                    }
                    alt={service.image?.alt || service.title}
                    width={200}
                    height={250}
                    unoptimized
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div
                  className={`${
                    isEvenRow ? "order-2 md:order-2" : "order-2 md:order-1"
                  } bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[300px]`}
                >
                  <h3 className="text-2xl font-semibold text-[#363636] mb-4">
                    {service.title}{" "}
                    {service.subtitle && (
                      <span className="text-[#45267f]/60 italic font-medium">
                        {service.subtitle}
                      </span>
                    )}
                  </h3>
                  <div className="space-y-1 mb-6 flex-1">
                    {service.description?.map((desc, i) => (
                      <p
                        key={i}
                        className="text-[#8E8E8E] text-base leading-relaxed"
                      >
                        {desc.text}
                      </p>
                    ))}
                  </div>
                  <Link
                    href="/contact-us"
                    className="flex items-center gap-2 text-[#FF7A00] font-medium text-base hover:text-[#FF7A00] transition-colors cursor-pointer"
                  >
                    {service.buttonText || "Contact to Know more"}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

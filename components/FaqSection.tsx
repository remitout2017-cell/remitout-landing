"use client";

import React, { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { getAllFaqs } from "@/lib/route";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const categories = [
  { id: "pre-departure", label: "Pre-Departure Assistance" },
  { id: "visa", label: "Visa Guidance" },
  { id: "loan", label: "Loan Assistance" },
  { id: "career", label: "Career Counseling" },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number>(-1);
  const [activeCategory, setActiveCategory] = useState("pre-departure");
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const data = await getAllFaqs();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
      }
    }
    loadFaqs();
  }, []);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white ">
      <div className="px-4  md:max-w-4xl md:mx-auto md:px-6 md:py-16">
        <div className="text-center mb-8 md:mb-12 mt-12">
          <h1 className="text-[32px] font-bold md:text-4xl mb-3 md:mb-4 text-black leading-tight">
            Frequently <span className="text-[#45267F]/60 italic">Asked</span>{" "}
            Questions
          </h1>
          <p className="text-[#8E8E8E] text-base text-[18px] md:text-lg">
            We have got you covered.
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex gap-2 md:flex-wrap md:justify-center md:gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-[16px] bg-[#45267f17] md:px-6 md:py-3 rounded-md border transition-all duration-200 text-sm md:text-base whitespace-nowrap flex-shrink-0 text-[#45267F] cursor-pointer ${
                  category.id === activeCategory
                    ? "border-purple-500 bg-[#45267F17]/9 text-purple-700"
                    : "border-gray-300 bg-[#45267F0A] text-[#1A1A1A]/70 hover:border-purple-500 hover:text-purple-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {filteredFaqs.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className="border border-gray-200 bg-[#F7F7FB] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 text-left flex items-start justify-between hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-[#363636] text-[18px] font-medium text-base md:text-lg pr-3 md:pr-4 leading-tight md:leading-[21px] md:tracking-[-1px] capitalize">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 mt-1 md:mt-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#6F25CE]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#6F25CE]" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-4 md:pb-5"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  } px-4 md:px-6`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#2B2B2B]/60 leading-[20px] font-normal text-[16px] text-sm md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

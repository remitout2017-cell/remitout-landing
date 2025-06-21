"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Is The Money Transfer Service RBI-Compliant And Secure?",
    answer:
      "Yes, all our transfers strictly follow RBI regulations. We use bank-grade encryption and verified KYC processes to ensure your funds are transferred securely and transparently.",
  },
  {
    question:
      "What Fees Does RemitOut Charge For Transfers And Loan Assistance?",
    answer:
      "Our fee structure is transparent and competitive. Transfer fees vary based on the amount and destination, while loan assistance fees are clearly outlined during the application process.",
  },
  {
    question: "Can RemitOut Help Me With Education Loans?",
    answer:
      "Yes, we provide comprehensive education loan assistance including application guidance, documentation support, and connecting you with the best lenders for your needs.",
  },
  {
    question:
      "How Long Does It Take For The Transferred Funds To Reach The Recipient?",
    answer:
      "Transfer times vary by destination and method. Typically, transfers are completed within 1-3 business days, with some instant transfer options available for select destinations.",
  },
  {
    question: "How Does RemitOut Assist With University Admissions?",
    answer:
      "We provide end-to-end university admission support including application guidance, document preparation, visa assistance, and pre-departure orientation to ensure a smooth transition.",
  },
];

const categories = [
  { id: "pre-departure", label: "Pre-Departure Assistance", active: true },
  { id: "visa", label: "Visa Guidance", active: false },
  { id: "loan", label: "Loan Assistance", active: false },
  { id: "career", label: "Career Counseling", active: false },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState("pre-departure");

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="px-4 py-8 md:max-w-4xl md:mx-auto md:px-6 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 mt-12">
          <h1 className="text-[32px] font-bold md:text-4xl mb-3 md:mb-4 text-black leading-tight">
            Frequently <span className="text-[#45267F]/60 italic">Asked</span>{" "}
            Questions
          </h1>
          <p className="text-[#8E8E8E] text-base text-[18px] md:text-lg">
            We have got you covered.
          </p>
        </div>

        {/* Category Tabs - Mobile optimized */}
        <div className="mb-8 md:mb-12">
          <div className="flex gap-2 md:flex-wrap md:justify-center md:gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-[16px] bg-[#45267f17] md:px-6 md:py-3 rounded-md border transition-all duration-200 text-sm md:text-base whitespace-nowrap flex-shrink-0 text-[#45267F] ${
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

        {/* FAQ Items - Mobile optimized */}
        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className="border border-gray-200 bg-[#F7F7FB] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 text-left flex items-start justify-between hover:bg-gray-50/50 transition-colors duration-200"
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

                {/* Smooth transition section */}
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

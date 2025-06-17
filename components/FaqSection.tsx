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
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Frequently <span className="text-[#45267F]/60 italic">Asked</span>{" "}
            Questions
          </h1>
          <p className="text-[#8E8E8E] text-lg">We have got you covered.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-200 text-[#1A1A1A]/70 ${
                category.id === activeCategory
                  ? "border-purple-500 bg-[#45267F17]/9 text-purple-700 cursor-pointer"
                  : "border-border  bg-[#45267F0A] text-muted-foreground hover:border-purple-500 hover:text-purple-700 cursor-pointer"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={index}
                className="border border-border bg-[#F7F7FB] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-[#363636] font-medium text-lg pr-4 md:leading-[21px] md:tracking-[-1px] capitalize">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
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
                      ? "grid-rows-[1fr] opacity-100 py-5"
                      : "grid-rows-[0fr] opacity-0 py-0"
                  } px-6`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#2B2B2B]/60 leading-[20px] text-base ">
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

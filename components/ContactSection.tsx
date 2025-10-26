"use client";

import React, { useState } from "react";
import { submitGetInTouchForm} from "@/lib/route"
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      acceptTerms: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitGetInTouchForm(formData);
      alert("✅ Thank you for contacting us!");
      setFormData({
        name: "",
        email: "",
        message: "",
        acceptTerms: false,
      });

      if (typeof window !== "undefined" && window?.gtag) {
        window?.gtag("event", "lead_submit", {
          event_category: "contact us form",
          event_label: "contact us",
          value: 1,
        });
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("❌ Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pb-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-4xl font-bold mb-2 text-black">
            Get In{" "}
            <span className="text-[#4526FF]/60 md:text-black italic md:not-italic">
              Touch
            </span>
          </h2>
          <p className=" text-[#8E8E8E]">We have got you covered.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 hidden md:flex justify-center lg:justify-end">
            <div className="relative w-[500px] h-[600px]">
              <div className="absolute top-[60%] left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full z-0" />
              <div className="absolute top-[60%] left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div
                  className="w-full h-full rounded-full bg-gradient-to-b from-transparent to-white opacity-90"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255,255,255,0) 10%, rgba(255,255,255,1) 90%)",
                  }}
                />
              </div>
              <Image
                src="/contact_Banner.webp"
                alt="Graduate student"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="relative z-20 w-[500px] h-auto"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2 text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2 text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2 text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 cursor-pointer"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-900">
                    I accept the{" "}
                    <Link href="#" className="text-black underline">
                      Terms
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#FF7A00] cursor-pointer text-white text-xl md:text-[22px] font-bold py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

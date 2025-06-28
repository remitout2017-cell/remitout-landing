"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Phone from "@/components/icones/Phone";
import Mail from "@/components/icones/Mail";
import FaceBook from "@/components/icones/FaceBook";
import Pinterest from "@/components/icones/Pinterest";
import Insta from "@/components/icones/Insta";
import { Enquiry } from "@/lib/route";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCountryCode: "+91",
    phoneNumber: "",
    serviceInterestedIn: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    serviceInterestedIn: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {
      fullName: formData.fullName ? "" : "Name is required.",
      email: formData.email ? "" : "Email is required.",
      phoneNumber: formData.phoneNumber ? "" : "Phone number is required.",
      serviceInterestedIn: formData.serviceInterestedIn
        ? ""
        : "Please select a service.",
      message: formData.message ? "" : "Message is required.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await Enquiry(formData);
      alert("✅ Thank you! Your enquiry was submitted.");
      setFormData({
        fullName: "",
        email: "",
        phoneCountryCode: "+91",
        phoneNumber: "",
        serviceInterestedIn: "",
        message: "",
      });
      setErrors({
        fullName: "",
        email: "",
        phoneNumber: "",
        serviceInterestedIn: "",
        message: "",
      });
    } catch (error) {
      console.error("Frontend error:", error);
      alert("❌ Submission failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex justify-between h-10 p-4 md:px-[131px]">
          <div className="flex gap-4 font-poppins text-sm md:text-lg">
            <div className="flex gap-1">
              <Phone />
              <span>+91 84519 02017</span>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="hidden sm:flex gap-1">
              <Mail />
              <span>Support@remit.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2 font-poppins text-lg">
              <span>Connect Us</span>
              <FaceBook />
              <Pinterest />
              <Insta />
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="flex gap-2 font-poppins text-sm md:text-lg">
              <Link href="/login" className="underline hover:text-gray-200">
                Login
              </Link>
              <span className="text-white/50">/</span>
              <Link href="/register" className="underline hover:text-gray-200">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="z-20 relative">
        <Navbar />
      </div>

      <main className="flex-grow max-w-8xl m-4 md:mr-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="hidden md:block relative w-full">
            <div className="absolute inset-0 top-40 left-20 z-1 mt-[10%] mb-10">
              <Image
                src="/RegisterBannerBackground.webp"
                alt="Background Banner"
                fill
                className="object-cover scale-120"
              />
            </div>
            <div className="relative z-10">
              <Image
                src="/RegisterBanner.webp"
                alt="Smiling graduate woman"
                width={600}
                height={700}
                className="w-full object-contain rounded-lg scale-90"
                priority
              />
            </div>
          </div>

          {/* Right form */}
          <div className="w-full md:w-[80%] mx-auto bg-white p-3 md:px-10 md:py-9 md:rounded-2xl shadow-lg">
            <h1 className="text-[32px] md:text-4xl text-center font-semibold mb-6 text-[#363636] pt-9 md:pt-0">
              Register With{" "}
              <span className="text-[#45267F]/60 italic font-medium">Us</span>{" "}
              Today
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="text-[#45267F] font-medium"
                >
                  Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#45267F]"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-[#45267F] font-medium">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#45267F]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="text-[#45267F] font-medium"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <select
                    name="phoneCountryCode"
                    value={formData.phoneCountryCode}
                    onChange={handleChange}
                    className="rounded-l-lg border border-gray-300 px-4 py-3 bg-white"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 border border-l-0 border-gray-300 px-4 py-3 rounded-r-lg focus:ring-2 focus:ring-[#45267F]"
                    placeholder="Enter Phone Number"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="serviceInterestedIn"
                  className="text-[#45267F] font-medium"
                >
                  Service Interested In
                </label>
                <select
                  name="serviceInterestedIn"
                  value={formData.serviceInterestedIn}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#45267F]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="consultation">Consultation</option>
                  <option value="money-transfer">Money Transfer</option>
                  <option value="business-services">Business Services</option>
                  <option value="other">Other</option>
                </select>
                {errors.serviceInterestedIn && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.serviceInterestedIn}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-[#45267F] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#45267F]"
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-[#45267F] border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-[#5B4C77]">
                  I agree to all the{" "}
                  <Link href="/terms" className="underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-[22px] bg-[#FF7A00] text-white font-semibold py-3 rounded-lg hover:bg-[#e96e00] transition cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

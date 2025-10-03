"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Phone from "@/components/icones/Phone";
import Mail from "@/components/icones/Mail";
import FaceBook from "@/components/icones/FaceBook";
import Pinterest from "@/components/icones/Pinterest";
import Insta from "@/components/icones/Insta";
import { Enquiry } from "@/lib/route";
import Footer from "@/components/Footer"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remitout - Contact Us",
  description:
    "Get in touch with Remitout for assistance with education loans, study abroad admissions, and remittance services. Reach out today!",
  openGraph: {
    title: "Remitout - Contact Us",
    description:
      "Contact Remitout for queries about education loans, admissions, and remittance services.",
    url: "https://www.remitout.com/contact-us",
    siteName: "Remitout",
  },
};


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

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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
      email: (() => {
        if (!formData.email) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email))
          return "Please enter a valid email.";
        return "";
      })(),
      phoneNumber: (() => {
        if (!formData.phoneNumber) return "Phone number is required.";
        const digitsOnly = formData.phoneNumber.replace(/\D/g, "");
        if (digitsOnly.length !== 10)
          return "Phone number must be exactly 10 digits.";
        return "";
      })(),
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
      // Show success notification
      setNotification({
        type: "success",
        message: "Thank you! Your enquiry was submitted successfully.",
      });
      // Clear form
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

      // Hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000);

    } catch (error) {
      console.error("Frontend error:", error);

      setNotification({
        type: "error",
        message: "Submission failed. Please try again.",
      });

      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex flex-row justify-between md:items-center h-10 p-4 md:px-[131px]">
          {/* Left side: Phone and Email */}
          <div className="flex  gap-4 font-poppins text-sm md:text-lg">
            <div className="flex  gap-1">
              <Phone />
              <span>+91 84519 02017</span>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="hidden sm:flex items-center gap-1">
              <Mail />
              <span>support@remitout.com</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            {/* Connect Us & Social Icons - only on desktop */}
            <div className="hidden sm:flex items-center gap-2 font-poppins text-lg">
              <a
                href="/contact-us"
                className="underline underline-offset-2 hover:text-gray-200"
              >
                Contact Us
              </a>
              <FaceBook />
              <Pinterest />
              <Insta />
            </div>

            {/* Login/Register - visible on all views */}
            {/* <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="flex  gap-2 font-poppins text-sm md:text-lg">
              <a
                href="/login"
                className="underline underline-offset-2 hover:text-gray-200"
              >
                Login
              </a>
              <span className="text-white/50">/</span>
              <a
                href="/register"
                className="underline underline-offset-2 hover:text-gray-200"
              >
                Register
              </a>
            </div> */}
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
                className="object-cover scale-110"
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

            {notification && (
              <div
                className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg text-white ${
                  notification.type === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {notification.message}
              </div>
            )}

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
      {/* Footer */}
      {/* <div className="md:h-[71px] bg-[#45267F] z-10 flex flex-col md:flex-row items-center justify-between py-4 md:px-40"> */}
      {/* Left: Copyright */}
      {/* <div className=" text-lg leading-[39px] text-[#E9E8EA] mb-2 md:mb-0">
          ©Remitout@2025
        </div> */}

      {/* Right: Support | Help */}
      {/* <div className="flex  items-center gap-4 text-[#E9E8EA] text-base font-semibold">
          <span className="hover:underline cursor-pointer">Support</span>
          <div className="h-4 w-px bg-[#E9E8EA]"></div>
          <span className="hover:underline cursor-pointer">Help</span>
        </div> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}

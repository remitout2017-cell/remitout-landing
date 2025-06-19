"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Play, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter registration logic here
    console.log("Registering email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#251446] text-white">
      <div className=" px-2 py-8  md:p-12 md:max-w-8xl md:mx-32">
        {/* Contact Information */}
        <div className="bg-[#45267F] rounded-xl p-6 m-2 md:m-0 mb-10 md:mb-10">
          <div className="flex flex-col md:flex-row md:justify-around gap-8">
            {/* Office Address */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#4C2A9E]" />
              </div>
              <div className=" flex flex-col gap-2 md:gap-0">
                <h3 className="text-sm font-bold leading-3.5 tracking-[-0.2] font-Inter">
                  Office Address
                </h3>
                <p className="text-lg font-semibold font-kumbh">
                  4648 Rocky Road PA, 1920
                </p>
              </div>
            </div>

            {/* Send Email */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                <Mail className="h-6 w-6 text-[#4C2A9E]" />
              </div>
              <div className=" flex flex-col gap-2 md:gap-0">
                <h3 className="text-sm font-bold leading-3.5 tracking-[-0.2] font-Inter">
                  Send Email
                </h3>
                <p className="text-lg font-semibold font-kumbh ">
                  contact@example.com
                </p>
              </div>
            </div>

            {/* Call Emergency */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                <Phone className="h-6 w-6 text-[#4C2A9E]" />
              </div>
              <div className=" flex flex-col gap-2 md:gap-0">
                <h3 className="text-sm font-bold leading-3.5 tracking-[-0.2] font-Inter">
                  Call Emergency
                </h3>
                <p className="text-lg font-semibold font-kumbh ">
                  +88 0123 654 99
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-22 m-4 md:m-0">
          {/* Video Section */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/FooterBanner.webp" 
                alt="Video Thumbnail"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 cursor-pointer">
                  <Play className="h-6 w-6 text-[#4C2A9E] fill-[#4C2A9E]" />
                </div>
              </div>
            </div>

            {/* Social Media - Desktop */}
            <div className="mt-8 hidden md:flex gap-5">
              <p className="mb-4">Follow on</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-80">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-base md:text-lg font-bold mb-4 md:mb-9  ">
              Register to our Newsletter
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full px-4 py-3 rounded-xl bg-[#3D2280] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A3D]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#e86c30] text-white font-bold py-3 px-4 rounded-md transition duration-300 text-xl  leading-[30px] tracking-[0.6px] cursor-pointer"
              >
                Register
              </button>
            </form>

            {/* Social Media - Mobile */}
            <div className="mt-8 flex gap-2.5 justify-center md:hidden">
              <p className="mb-4 text-lg">Follow Us</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-80">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links - Desktop */}
          <div className="hidden lg:block order-3">
            <h2 className="text-xl font-bold mb-6">Quick Links</h2>
            <nav className="space-y-4 font-poppins text-base leading-6 text-[#D8D8D8CC]/80">
              <Link href="#" className="block hover:text-[#FF7A3D]">
                Our services
              </Link>
              <Link href="#" className="block hover:text-[#FF7A3D]">
                Testimonials
              </Link>
              <Link href="#" className="block hover:text-[#FF7A3D]">
                FAQs
              </Link>
              <Link href="#" className="block hover:text-[#FF7A3D]">
                Contact us
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation Links */}
          <div className="md:hidden order-3 border-t border-[#4C2A9E] pt-4">
            <nav className="space-y-4 text-xl">
              <Link
                href="#"
                className="block text-center py-2 border-b border-[#4C2A9E]"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-center py-2 border-b border-[#4C2A9E]"
              >
                Our Services
              </Link>
              <Link
                href="#"
                className="block text-center py-2 border-b border-[#4C2A9E]"
              >
                Testimonials
              </Link>
              <Link href="#" className="block text-center py-2">
                FAQs
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#4C2A9E] text-center md:text-left">
          <p className="font-kumbh leading-7 text-[#D8D8D8] text-base">
            © 2024 Copyrights by Life designer. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

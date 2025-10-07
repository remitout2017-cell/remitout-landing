"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { fetchFooter, submitNewsletter } from "@/lib/route";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [footerContent, setFooterContent] = useState<{
    officeAddress: string;
    email: string;
    phone: string;
    videoLink?: string;
    image?: {
      url: string;
      alt?: string;
    };
    socialLinks?: {
      facebook?: string;
      instagram?: string;
      additionalLinks?: {
        label: string;
        icon?: { url: string; alt?: string };
        link: string;
      }[];
    };
  }>({
    officeAddress: "",
    email: "",
    phone: "",
  });

  const gmailLink = (email: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;


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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const json = await submitNewsletter({ email });

    if (json?.success) {
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail(""); // Clear input
    } else {
      setMessage("Something went wrong. Please try again later.");
    }

    // Hide message after 4 seconds
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };
  

  return (
    <footer className="bg-[#251446] text-white">
      <div className="px-2 py-8 md:p-12 md:max-w-8xl md:mx-32">
        {/* Contact Info */}
        {/* Web Version - unchanged */}
        <div className="hidden md:block bg-[#45267F] rounded-xl p-6 m-2 md:m-0 mb-10">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 text-center md:text-left">
            {/* Office Address */}
            <div className="flex-1 max-w-xs md:max-w-md mx-auto">
              <ContactItem
                icon={<MapPin className="text-[#4C2A9E]" />}
                title="Office Address"
                content={footerContent.officeAddress || "Updating..."}
              />
            </div>

            {/* Email */}
            <div className="flex-1 max-w-xs mx-auto">
              <ContactItem
                icon={<Mail className="text-[#4C2A9E]" />}
                title="Send Email"
                content={
                  footerContent.email ? (
                    <a
                      href={gmailLink(footerContent.email)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-200"
                    >
                      {footerContent.email}
                    </a>
                  ) : (
                    "Updating..."
                  )
                }
              />
            </div>

            {/* Phone */}
            <div className="flex-1 max-w-xs mx-auto">
              <ContactItem
                icon={<Phone className="text-[#4C2A9E]" />}
                title="Emergency Contact"
                content={footerContent.phone || "Updating..."}
              />
            </div>
          </div>
        </div>

        {/* Mobile Version - new layout */}
        <div className="block md:hidden bg-[#45267F] rounded-xl p-4 m-2 mb-10 space-y-6 text-center">
          {/* Office Address */}
          <div className="flex flex-col items-center gap-2">
            <MapPin className=" text-3xl" />
            <h4 className="text-white font-semibold text-lg">Office Address</h4>
            <p className="text-white text-sm">
              {footerContent.officeAddress || "Updating..."}
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-2">
            <Mail className="text-3xl" />
            <h4 className="text-white font-semibold text-lg">Send Email</h4>
            {footerContent.email ? (
              <a
                href={
                  footerContent.email ? gmailLink(footerContent.email) : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm underline hover:text-gray-200"
              >
                {footerContent.email || "Updating..."}
              </a>
            ) : (
              <p className="text-white text-sm">Updating...</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-2">
            <Phone className=" text-3xl" />
            <h4 className="text-white font-semibold text-lg">Call Emergency</h4>
            {footerContent.phone ? (
              <a
                href={`tel:${footerContent.phone}`}
                className="text-white text-sm underline hover:text-gray-200"
              >
                {footerContent.phone}
              </a>
            ) : (
              <p className="text-white text-sm">Updating...</p>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 m-4 md:m-0 pt-0 md:pt-10">
          {/* Video + Social */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden">
              {/* {footerContent.videoImage?.url && footerContent.videoLink ? ( */}
              <a
                href={footerContent.videoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={
                    footerContent.image?.url
                      ? `http://localhost:3001/${footerContent.image.url}`
                      : "/logo1.svg"
                  }
                  alt={footerContent.image?.alt || "Thumbnail"}
                  width={350}
                  height={200}
                  className="w-[350px] h-[200px] rounded-lg object-contain"
                />
              </a>
              {/* ) : (
                <div className="w-full h-[300px] bg-gray-300 rounded-lg" />
              )} */}
            </div>

            <div className="mt-4 md:hidden text-center flex justify-center gap-2">
              <p className="mb-3 text-lg">Follow Us</p>
              <SocialLinks links={footerContent.socialLinks || {}} />
            </div>

            <div className="mt-8 hidden md:flex gap-5 items-center">
              <p className="mb-0">Follow on</p>
              <SocialLinks links={footerContent.socialLinks || {}} />
            </div>
          </div>

          {/* Newsletter */}
          <div className="hidden md:block md:invisible order-1 md:order-2">
            <h2 className="text-base md:text-lg font-bold mb-4 md:mb-9">
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
                className="w-full bg-[#FF7A00] hover:bg-[#e86c30] text-white font-bold py-3 px-4 rounded-md transition duration-300 text-xl leading-[30px] tracking-[0.6px] cursor-pointer"
              >
                Register
              </button>
            </form>
            {message && (
              <p className="text-green-500 font-medium text-sm md:text-base mt-2">
                {message}
              </p>
            )}
          </div>

          {/* Quick Links - Desktop */}
          <div className="hidden lg:flex flex-col items-center order-3 ">
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

          {/* Quick Links - Mobile */}
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

        <div className="mt-12 pt-6 border-t border-[#4C2A9E] flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="font-kumbh leading-7 text-[#D8D8D8] text-base">
            © 2025 Copyright by Remitout. All Rights Reserved
          </p>
          <div className="flex gap-4 text-sm text-[#D8D8D8]">
            <Link href="/privacy-policy" className="hover:text-[#FF7A3D]">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/termsofuse" className="hover:text-[#FF7A3D]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white rounded-full p-3 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-2 md:gap-0">
        <h3 className="text-sm font-bold font-Inter">{title}</h3>
        <p className="text-lg font-semibold font-kumbh">{content}</p>
      </div>
    </div>
  );
}


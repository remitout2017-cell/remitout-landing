"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import {
  Footer as fetchFooterContent,
  Newsletter as submitNewsletter,
} from "@/lib/route";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [footerContent, setFooterContent] = useState<{
    officeAddress: string;
    email: string;
    phone: string;
    videoUrl?: string;
    videoLink?: string;
    videoImage?: {
      url: string;
      alt?: string;
    };
    socialLinks?: {
      facebook?: string;
      instagram?: string;
      customIcon?: string;
    };
  }>({
    officeAddress: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    async function loadFooter() {
      const res = await fetchFooterContent();
      const json = await res.json();
      setFooterContent(json?.docs?.[0] || {});
    }
    loadFooter();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await submitNewsletter(
      new Request("", {
        body: JSON.stringify({ email }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );

    const json = await res.json();

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
        <div className="bg-[#45267F] rounded-xl p-6 m-2 md:m-0 mb-10">
          <div className="flex flex-col md:flex-row md:justify-around gap-8">
            <ContactItem
              icon={<MapPin className="h-6 w-6 text-[#4C2A9E]" />}
              title="Office Address"
              content={footerContent.officeAddress || "Updating..."}
            />
            <ContactItem
              icon={<Mail className="h-6 w-6 text-[#4C2A9E]" />}
              title="Send Email"
              content={footerContent.email || "Updating..."}
            />
            <ContactItem
              icon={<Phone className="h-6 w-6 text-[#4C2A9E]" />}
              title="Call Emergency"
              content={footerContent.phone || "Updating..."}
            />
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
                    footerContent.videoImage?.url
                      ? `http://localhost:3001/${footerContent.videoImage.url}`
                      : "/Footer_Banner.jpg"
                  }
                  alt={footerContent.videoImage?.alt || "Video thumbnail"}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#4C2A9E] fill-[#4C2A9E]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
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
          <div className="invisible order-1 md:order-2">
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

        <div className="mt-12 pt-6 border-t border-[#4C2A9E] text-center md:text-left">
          <p className="font-kumbh leading-7 text-[#D8D8D8] text-base">
            © 2025 Copyrights by Remitout. All Rights Reserved
          </p>
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
  content: string;
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

function SocialLinks({
  links,
}: {
  links: { facebook?: string; instagram?: string; customIcon?: string };
}) {
  return (
    <div className="flex gap-4 justify-center">
      {links?.facebook && (
        <Link
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Facebook className="h-6 w-6" />
        </Link>
      )}
      {links?.instagram && (
        <Link
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Instagram className="h-6 w-6" />
        </Link>
      )}
      {links?.customIcon && (
        <Link
          href={links.customIcon}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
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
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </Link>
      )}
    </div>
  );
}

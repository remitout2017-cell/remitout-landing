"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocateFixedIcon, Mail, Menu, Phone, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white/35 shadow-[0_2px_8px_0px_#F3F0F7] backdrop-blur-md">
      <div className="flex items-center justify-between md:px-[131px] px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/remitout_logo.webp"
            alt="Remitout Logo"
            width={138}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-base items-center space-x-8">
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Our Services
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            FAQs
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Schedule Call
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-1 h-screen bg-white md:hidden overflow-y-auto px-4 pb-6 pt-6">
          <div className="flex items-start space-x-2"></div>
          {/* Close Button */}
          <div className="flex justify-between">
            <Image
              src="/remitout_logo.webp"
              alt="Remitout Logo"
              width={138}
              height={48}
              className="object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-gray-600"
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 mt-4">
            <Link
              href="#"
              className="block bg-white border-b px-4 py-3 text-[#45267F] font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block bg-white border-b px-4 py-3 text-[#45267F] font-medium"
            >
              Our Services
            </Link>
            <Link
              href="#"
              className="block bg-white border-b px-4 py-3 text-[#45267F] font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="block bg-white border-b px-4 py-3 text-[#45267F] font-medium"
            >
              FAQs
            </Link>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">
              Register With <span className="italic text-[#A593E0]">Us</span>{" "}
              Today
            </h2>
            <button className="mt-12 w-full bg-[#FF7A00] text-white font-semibold py-3 rounded-[6px] text-lg">
              Contact Us
            </button>
          </div>

          {/* Contact Info Box */}
          <div className="mt-10 bg-[#401C78] text-white p-6 rounded-[6px] space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-white text-[#401C78] rounded-full p-2">
                <LocateFixedIcon />
              </div>
              <div>
                <p className="text-sm font-bold text-[#ffffffd9]">
                  Office Address
                </p>
                <p className="text-[19px] text-[#fff]">
                  4648 Rocky Road PA, 1920
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white text-[#401C78] rounded-full p-2">
                <Mail />
              </div>
              <div>
                <p className="text-sm font-bold text-[#ffffffd9]">Send Email</p>
                <p className="text-[19px] text-[#fff]">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white text-[#401C78] rounded-full p-2">
                <Phone />
              </div>
              <div>
                <p className="text-sm font-bold text-[#ffffffd9]">
                  Call Emergency
                </p>
                <p className="text-[19px] text-[#fff]">+88 0123 654 99</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

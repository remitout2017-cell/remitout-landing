"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Our Services</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Testimonials</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Schedule Call</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 pb-6">
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Our Services</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Testimonials</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">Schedule Call</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

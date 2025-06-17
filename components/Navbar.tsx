import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white/35 shadow-[0_2px_8px_0px_#F3F0F7] flex items-center justify-between  md:px-[131px] py-4  backdrop-blur-md">
      <div className="flex items-center space-x-2">
        {/* Replace /logo.png with your actual logo path */}
        <Image
          src="/remitout_logo.webp"
          alt="Remitout Logo"
          width={138}
          height={48}
          className="object-contain"
        />
      </div>

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
    </nav>
  );
}

export default Navbar
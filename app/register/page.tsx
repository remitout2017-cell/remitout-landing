import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Phone from "@/components/icones/Phone";
import Mail from "@/components/icones/Mail";
import FaceBook from "@/components/icones/FaceBook";
import Pinterest from "@/components/icones/Pinterest";
import Insta from "@/components/icones/Insta";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-50">
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex flex-col sm:flex-row justify-between items-center h-10 px-[131px]">
          {/* Left side: Phone and Email */}
          <div className="flex items-center gap-4 font-poppins text-lg">
            <div className="flex items-center gap-1">
              <Phone />
              <span>+91 84519 02017</span>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="flex items-center gap-1">
              <Mail />
              <span>Support@remit.com</span>
            </div>
          </div>

          {/* Right side: Social & Login */}
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <div className="flex items-center gap-2 font-poppins text-lg">
              <span>Connect Us</span>
              {/* Replace emojis with icons if you're using Heroicons or FontAwesome */}
              <FaceBook />
              <Pinterest />
              <Insta />
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="flex items-center gap-2 font-poppins text-lg">
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
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Links */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-8xl mr-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full">
            {/* Background banner (custom image or color block) */}
            <div className="absolute inset-0 top-40 left-20 z-1 mt-[10%] mb-10">
              <Image
                src="/RegisterBannerBackground.webp"
                alt="Background Banner"
                fill
                className="object-cover scale-120"
              />
            </div>

            {/* Foreground Image */}
            <div className="relative z-10">
              <Image
                src="/RegisterBanner.webp"
                alt="Smiling graduate woman in cap and gown giving thumbs up"
                width={600}
                height={700}
                className="w-full h-auto object-contain rounded-lg scale-90"
                priority
              />
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="w-[80%] ml-auto mb-auto mt-10 bg-white px-10 py-9 rounded-2xl shadow-lg">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Register With <span className="text-purple-600">Us</span> Today
              </h1>
            </div>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-l-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none">
                      <option value="+91">+ 91</option>
                      <option value="+1">+ 1</option>
                      <option value="+44">+ 44</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              {/* Service Interested In */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service interested in
                </label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white">
                    <option value="">Enter Message</option>
                    <option value="consultation">Consultation</option>
                    <option value="money-transfer">Money Transfer</option>
                    <option value="business-services">Business Services</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Enter Message"
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to all the{" "}
                  <Link
                    href="/terms"
                    className="text-purple-600 hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3B1D6E] text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-light">©Remitout@2025</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/support"
                className="text-lg font-semibold leading-[35px]  transition-colors"
              >
                Support
              </Link>

              <Link
                href="/help"
                className="text-lg font-semibold leading-[35px]  transition-colorss"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

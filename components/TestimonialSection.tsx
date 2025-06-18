"use client";

import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

const testimonials = [
  // First set of testimonials
  [
    {
      id: 1,
      text: "RemitOut made my admission process abroad so smooth and stress-free. Their team guided me at every step, and the money transfer was instant and secure. Highly recommend!",
      name: "Barbara D. Smith",
      rating: 4,
      avatar: "/avatar.webp",
    },
    {
      id: 2,
      text: "RemitOut made my admission process abroad so smooth and stress-free. Their team guided me at every step, and the money transfer was instant and secure. Highly recommend!",
      name: "Barbara D. Smith",
      rating: 4,
      avatar: "/avatar.webp",
    },
    {
      id: 3,
      text: "RemitOut made my admission process abroad so smooth and stress-free. Their team guided me at every step, and the money transfer was instant and secure. Highly recommend!",
      name: "Barbara D. Smith",
      rating: 4,
      avatar: "/avatar.webp",
    },
  ],
  // Second set of testimonials
  [
    {
      id: 4,
      text: "Amazing service! The process was seamless and the support team was incredibly helpful throughout my journey. Would definitely use RemitOut again.",
      name: "John M. Wilson",
      rating: 5,
      avatar: "/avatar.webp",
    },
    {
      id: 5,
      text: "Fast, reliable, and trustworthy. RemitOut made my international payments hassle-free. The rates were competitive and the service was excellent.",
      name: "Sarah K. Johnson",
      rating: 4,
      avatar: "/avatar.webp",
    },
    {
      id: 6,
      text: "Outstanding experience with RemitOut. Their platform is user-friendly and the customer service is top-notch. Highly recommended for students!",
      name: "Michael R. Davis",
      rating: 5,
      avatar: "/avatar.webp",
    },
  ],
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-orange-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="relative h-[74vh] mb-10 md:mb-[20%]">
      {/* Background container with max-width and centering */}
      <div className="max-w-8xl mx-4 md:mx-28 h-full relative overflow-hidden rounded-2xl">
        {/* Background image */}
        <Image
          src="/TestimonialBanner.webp"
          alt="Students studying together"
          fill
          className="object-cover rounded-2xl"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 rounded-2xl" />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-20 shadow-lg"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-orange-500" />
          ) : (
            <Play className="w-6 h-6 text-orange-500 ml-1" />
          )}
        </button>

        {/* Heading */}
        <div className="absolute  top-20 md:left-[20%] transform -translate-x-1/2 z-20 px-4  max-w-4xl">
          <h2 className="text-4xl font-semibold text-white leading-[39px] capitalize tracking-[-1px]">
            What Our Students Are <br />
            Saying — <span className="text-[#FF7A00] italic">Voices</span> Of
            Confidence
          </h2>
        </div>
      </div>

      {/* ✅ Carousel Container - overlaps half of background */}
      <div className="hidden md:absolute bottom-[-30%] left-1/2 transform -translate-x-1/2 w-full px-4 z-30 ">
        <div className="max-w-7xl mx-auto">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonialSet, setIndex) => (
                <div key={setIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonialSet.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                      >
                        {/* Quote */}
                        <div className="mb-6">
                          <svg
                            className="w-8 h-8 text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium">
                          {testimonial.text}
                        </p>

                        {/* Avatar + Name + Stars */}
                        <div className="flex justify-between gap-4">
                          {/* Avatar */}
                          <div className="flex items-center gap-2">
                            <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                            <h4 className="font-bold text-gray-900 text-lg mb-1">
                                {testimonial.name}
                            </h4>
                          </div>

                          {/* Name + Stars (aligned to the right) */}
                          <div className="flex ">
                            <div className="flex items-center">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-3 mt-12 justify-start">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 bg-[#FF7A00]"
                    : "w-4 bg-[#DDDDDD]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

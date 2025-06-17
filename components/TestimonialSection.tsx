"use client";
import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "RemitOut made my admission process abroad so smooth and stress-free. Their team guided me at every step, and the money transfer was quick and secure. Highly recommend!",
    name: "Barbara D. Smith",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    text: "RemitOut made my admission process abroad so smooth and stress-free. Their team guided me at every step, and the money transfer was quick and secure. Highly recommend!",
    name: "Barbara D. Smith",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    text: "RemitOut made my admission process abroad so smooth and stress-free. Their team guided me at every step, and the money transfer was quick and secure. Highly recommend!",
    name: "Barbara D. Smith",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

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
        className={`text-sm ${i < rating ? "text-amber-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/students-bg.png"
          alt="Students studying"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                What Our Students Are
                <br />
                Saying — <span className="text-amber-500">Voices</span> Of
                Confidence
              </h2>
            </div>

            {/* Right Side - Testimonials */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {testimonial.text}
                        </p>

                        <div className="flex items-center gap-3">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-1 mt-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-amber-500"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

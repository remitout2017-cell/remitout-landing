"use client";

import { useEffect, useState } from "react";
// import { Play, Pause } from "lucide-react";
import Image from "next/image";
import { Testimonials } from "@/lib/route";

type Testimonial = {
  id?: string;
  text: string;
  name: string;
  rating: number;
  avatar?: {
    url?: string;
  };
};


const groupTestimonials = (
  items: Testimonial[],
  size: number
): Testimonial[][] => {
  const grouped = [];
  for (let i = 0; i < items.length; i += size) {
    grouped.push(items.slice(i, i + size));
  }
  return grouped;
};

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const data = await Testimonials();
      const records = data.docs?.[0]?.testimonials || [];
      setTestimonials(records);
    } catch (err) {
      console.error("Error fetching testimonials", err);
    }
  };

  fetchTestimonials();
}, []);


  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const grouped = groupTestimonials(testimonials, cardsPerSlide);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % grouped.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, grouped.length]);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);
  console.log("playpause",togglePlayPause)

 const renderStars = (rating: number | string) => {
   const numericRating = Number(rating) || 0;
   return Array.from({ length: 5 }, (_, i) => (
     <span
       key={i}
       className={`text-lg ${
         i < numericRating ? "text-orange-400" : "text-gray-300"
       }`}
     >
       ★
     </span>
   ));
 };

  return (
    <div className="relative h-[74vh] mb-55 md:mb-[10%]">
      <div className="max-w-8xl mx-4 md:mx-28 h-full relative overflow-hidden rounded-2xl">
        <Image
          src="/TestimonialBannerNew.webp"
          alt="Indian students abroad using Remitout for education loans"
          fill
          className="object-cover rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 rounded-2xl" />

        {/* <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:top-8 sm:right-8 sm:left-auto sm:translate-x-0 w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-20 shadow-lg"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-orange-500" />
          ) : (
            <Play className="w-6 h-6 text-orange-500 ml-1" />
          )}
        </button> */}

        <div className="absolute top-20 left-0 right-0 w-full z-20 px-4 md:px-20">
          <div className="text-[32px] md:text-4xl font-semibold text-white leading-[39px] capitalize tracking-[-1px]">
            What Our Students Are <br />
            Saying — <span className="text-[#FF7A00] italic">Voices</span> Of
            Confidence
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute bottom-[-30%] left-1/2 transform -translate-x-1/2 w-full px-4 z-30">
        <div className="max-w-7xl w-[90%] md:w-[80%] mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {grouped.map((group, index) => (
                <div key={index} className="w-full flex-shrink-0 flex md:gap-6">
                  {group.map((testimonial, i) => (
                    <div
                      key={testimonial.id || i}
                      className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300  md:m-0"
                    >
                      <div className="mb-6">
                        <svg
                          className="w-8 h-8 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium line-clamp-4 md:line-clamp-none">
                        {testimonial.text}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              testimonial.avatar?.url
                                ? `http://66.116.196.83:5000$${testimonial.avatar.url}`
                                : "/avatar.webp"
                            }
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />

                          <h4 className="font-bold text-gray-900 text-lg mb-1">
                            {testimonial.name}
                          </h4>
                        </div>
                        <div>{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mt-12 justify-start">
            {grouped.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-20 bg-[#FF7A00]"
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

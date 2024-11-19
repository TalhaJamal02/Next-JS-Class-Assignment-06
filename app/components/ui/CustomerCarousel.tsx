"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Stephen Kenubo",
    role: "Software Developer",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/Images/team3.png",
  },
  {
    name: "James Nduku",
    role: "Scrum Master",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/Images/team1.png",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/Images/team6.png",
  },
  {
    name: "Alice Brown",
    role: "Product Manager",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/Images/team4.png",
  },
  {
    name: "John Doe",
    role: "Backend Engineer",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/Images/team5.png",
  },
  {
    name: "Erick Kipkemboi",
    role: "Frontend Developer",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/Images/team2.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 slides

  const totalSlides = testimonials.length;

  // Adjust slidesToShow based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 320) {
        setSlidesToShow(1); // Show 1 card on mobile
      } else {
        setSlidesToShow(3); // Show 3 cards on larger screens
      }
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideWidth = 100 / slidesToShow; // Adjust slide width dynamically

  // Controls for sliding
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto p-6">
      {/* Carousel Wrapper */}

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            width: window.innerWidth < 1253 ? `${totalSlides * slideWidth}%` : '',
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-none "
              style={{ flex: `0 0 ${slideWidth}%`, width: `${slideWidth}%` }}
            >
              <div className="border border-black p-6 shadow-lg bg-white sm:w-[362px] w-[242px]   flex flex-col justify-between overflow-x-hidden">
                {/* Stars Rating Image */}
                <Image
                  src="/Images/Stars5.svg"
                  alt="5 Star Rating"
                  height={18}
                  width={116}
                  className="mb-4"
                />

                {/* Feedback Text */}
                <p className="text-gray-800 mb-4">{item.feedback}</p>

                {/* Profile Section */}
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={48}
                    width={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls at the Bottom */}
      <div></div>

      <div className="absolute  top-[20rem] mt-12 sm:mt-0 left-0 right-0 flex justify-between items-center">
        <div className="flex space-x-2 mx-3 ">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-3 mx-3 ">
          <button
            className="border text-[16px] border-black rounded-full p-2 hover:bg-gray-100"
            onClick={prevSlide}
          >
            <span>
              <Image
                src={"/Images/Left.svg"}
                alt=""
                height={16}
                width={16}
              />
            </span>
          </button>
          <button
            className="border border-black text-[16px] rounded-full p-2 hover:bg-gray-100"
            onClick={nextSlide}
          >
            <span>
              <Image
                src={"/Images/Right.svg"}
                alt=""
                height={16}
                width={16}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

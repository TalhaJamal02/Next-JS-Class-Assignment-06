"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const navLinks = ["Home", "Courses", "Services", "Achievement", "About Us", "Testimonial"];

  return (
    <div className="h-[72px] border-b border-[#676767] px-[64px] flex items-center justify-between z-10 relative">
      <div className="flex flex-row items-center gap-4">
        <Image src="/Images/Logo.png" alt="Logo" width={32} height={30} />
        <h1 className="font-bold text-[25px] leading-[30px]">Ddsgnr</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href="#"
            className={`${link === "Home" ? "border-b border-black pb-2 -mb-[0.6rem] text-black" : "text-black"} transition`}
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="border border-black py-2 px-[20px] rounded-[5px] hover:bg-black hover:text-white transition">
          Login
        </button>
        <button className="bg-black text-white py-2 px-[20px] rounded-[5px] hover:bg-gray-800 transition">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden flex items-center justify-center cursor-pointer"
        onClick={toggleMenu}
        role="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-[#bfbfbf] shadow-xl rounded-b-2xl z-20 transition-all ease-in-out duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✖
        </button>
        <nav className="flex flex-col items-start py-4 gap-3 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href="#"
              className="text-black py-2 px-4 hover:bg-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-4 py-4">
          <button className="border border-black py-2 px-[20px] rounded-[5px] hover:bg-black hover:text-white transition">
            Login
          </button>
          <button className="bg-black text-white py-2 px-[20px] rounded-[5px] hover:bg-gray-800 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;


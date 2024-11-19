import Image from 'next/image';
import React from 'react';

function CompaniesPage() {
  const logos = [
    { src: '/Images/Logo1.png', alt: 'Logo 1' },
    { src: '/Images/Logo2.png', alt: 'Logo 2' },
    { src: '/Images/Logo3.png', alt: 'Logo 3' },
    { src: '/Images/Logo4.png', alt: 'Logo 4' },
    { src: '/Images/Logo5.png', alt: 'Logo 5' },
    { src: '/Images/Logo6.png', alt: 'Logo 6' },
  ];

  return (
    <div className="w-full py-[40px] md:py-[80px] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-4 md:px-16 mt-16">
      {/* Right Side */}
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 className="font-bold leading-[33px] text-[20px] md:text-[24px] w-full md:w-[320px]">
          Trusted by 2000+ companies worldwide.
        </h1>
      </div>

      {/* Left Side */}
      <div className="w-full md:w-auto flex flex-wrap gap-4 justify-center md:justify-start">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={123}
            height={38}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default CompaniesPage;

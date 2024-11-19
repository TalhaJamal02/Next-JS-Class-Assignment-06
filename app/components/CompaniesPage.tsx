import Image from 'next/image'
import React from 'react'

function CompaniesPage() {
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
        <Image
          src="/Images/Logo1.png"
          alt="logo1"
          width={123}
          height={38}
          className="object-contain"
        />
        <Image
          src="/Images/Logo2.png"
          alt="logo2"
          width={123}
          height={38}
          className="object-contain"
        />
        <Image
          src="/Images/Logo3.png"
          alt="logo3"
          width={123}
          height={38}
          className="object-contain"
        />
        <Image
          src="/Images/Logo4.png"
          alt="logo4"
          width={123}
          height={38}
          className="object-contain"
        />
        <Image
          src="/Images/Logo5.png"
          alt="logo5"
          width={123}
          height={38}
          className="object-contain"
        />
        <Image
          src="/Images/Logo6.png"
          alt="logo6"
          width={123}
          height={38}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default CompaniesPage
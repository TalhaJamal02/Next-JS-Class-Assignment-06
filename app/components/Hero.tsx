import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between md:pl-3">
      {/* Left Side */}
      <div className="lg:w-[500px] flex justify-center flex-col gap-8 text-left p-6">
        <h1 className="font-bold text-[40px] leading-[40px] md:text-[56px] md:leading-[67px]">
          Learn new skills online with ease
        </h1>
        <p className="text-[18px] leading-[27px] md:text-[18px] md:leading-[27px]">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>

        <div className="flex flex-row gap-4 pt-4">
          <button
            className="p-3 rounded-[5px] bg-black md:w-full text-white w-1/2 hover:bg-gray-800 transition"
            aria-label="Start learning now"
          >
            Start learning now
          </button>
          <button
            className="p-3 border border-black rounded-[5px] bg-transparent text-black md:w-full w-1/2 hover:bg-black hover:text-white transition"
            aria-label="Explore available courses"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/Images/HeroImage.png"
          alt="Illustration of a student learning online"
          width={640}
          height={900}
          className="object-cover w-[90%] md:w-[640px]"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;

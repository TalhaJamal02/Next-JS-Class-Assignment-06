import Image from "next/image"

function OurTeam() {
  return (
      <div className=" h-[100%] pb-16 pt-16">

        <div className=" text-center mt-44 sm:mt-0">
          <h1 className=" font-bold text-[48px] leading-[57px]">Our team</h1>
          <p className=" text-lg leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className=" w-full text-center flex flex-col items-center justify-center mt-20">
              <Image
                src={"/Images/team1.png"}
                alt="Team1"
                height={80}
                width={80}
                className="object-cover"
              />
              <h1 className="font-semibold text-[20px] leading-[30px] mt-7">James Nduku</h1>
              <p className="text-lg leading-[27px]">Marketing Coordinator</p>
              <div className="flex gap-4 mt-5">
                <Image
                  src={"/Images/LinkedIn.svg"}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Twitter.svg"}
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Dribble.svg"}
                  alt="Dribble"
                  height={24}
                  width={24}
                />
              </div>
            </div>

            <div className=" w-full text-center flex flex-col items-center justify-center mt-20">
              <Image
                src={"/Images/team2.png"}
                alt="Team2"
                height={80}
                width={80}
                className="object-cover"
              />
              <h1 className="font-semibold text-[20px] leading-[30px] mt-7">Joseph Munyambu</h1>
              <p className="text-lg leading-[27px] ">Nursing Assistant</p>
              <div className="flex gap-4 mt-5">
                <Image
                  src={"/Images/LinkedIn.svg"}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Twitter.svg"}
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Dribble.svg"}
                  alt="Dribble"
                  height={24}
                  width={24}
                />
              </div>
            </div>

            <div className=" w-full text-center flex flex-col items-center justify-center mt-20">
              <Image
                src={"/Images/team3.png"}
                alt="Team2"
                height={80}
                width={80}
                className="object-cover"
              />
              <h1 className="font-semibold text-[20px] leading-[30px] mt-7">Joseph Ngumbau</h1>
              <p className="text-lg leading-[27px] ">Medical Assistant</p>
              <div className="flex gap-4 mt-5">
                <Image
                  src={"/Images/LinkedIn.svg"}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Twitter.svg"}
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Dribble.svg"}
                  alt="Dribble"
                  height={24}
                  width={24}
                />
              </div>
            </div>

            <div className=" w-full text-center sm:flex flex-col items-center justify-center mt-16 hidden">
              <Image
                src={"/Images/team4.png"}
                alt="Team2"
                height={80}
                width={80}
                className="object-cover"
              />
              <h1 className="font-semibold text-[20px] leading-[30px] mt-7">Erick Kipkemboi</h1>
              <p className="text-lg leading-[27px] ">Web Designer</p>
              <div className="flex gap-4 mt-5">
                <Image
                  src={"/Images/LinkedIn.svg"}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Twitter.svg"}
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Dribble.svg"}
                  alt="Dribble"
                  height={24}
                  width={24}
                />
              </div>
            </div>

            <div className=" w-full text-center hidden sm:flex flex-col items-center justify-center mt-16">
              <Image
                src={"/Images/team5.png"}
                alt="Team2"
                height={80}
                width={80}
                className="object-cover"
              />
              <h1 className="font-semibold text-[20px] leading-[30px] mt-7">Stephen Kerubo</h1>
              <p className="text-lg leading-[27px] ">President of Sales</p>
              <div className="flex gap-4 mt-5">
                <Image
                  src={"/Images/LinkedIn.svg"}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Twitter.svg"}
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Dribble.svg"}
                  alt="Dribble"
                  height={24}
                  width={24}
                />
              </div>
            </div>

            <div className=" w-full text-center hidden sm:flex flex-col items-center justify-center mt-16">
              <Image
                src={"/Images/team6.png"}
                alt="Team2"
                height={80}
                width={80}
                className="object-cover"
              />
              <h1 className="font-semibold text-[20px] leading-[30px] mt-7">John Leboo</h1>
              <p className="text-lg leading-[27px] ">Dog Trainer</p>
              <div className="flex gap-4 mt-5">
                <Image
                  src={"/Images/LinkedIn.svg"}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Twitter.svg"}
                  alt="Twitter"
                  height={24}
                  width={24}
                />
                <Image
                  src={"/Images/Dribble.svg"}
                  alt="Dribble"
                  height={24}
                  width={24}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default OurTeam
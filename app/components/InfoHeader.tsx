import Image from "next/image"

function InfoHeader() {
  return (
    <div className=" hidden h-[54px] py-3 border-b border-[#676767] px-[62px] bg-[#F7F7F7] lg:flex lg:justify-between lg:items-center ">
      <div className="flex flex-row items-center gap-4 text-black">
        <span>Phone Number: 956 742 455 678</span>
        <svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="30" x2="0.5" stroke="#676767" />
        </svg>
        <span>Email: info@ddsgnr.com</span>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Image src="/Images/Facebook.svg" alt="Facebook" height={15} width={15} />
        <Image src="/Images/Instagram.svg" alt="Instagram" height={15} width={15} />
        <Image src="/Images/Twitter.svg" alt="Twitter" height={15} width={15} />
        <Image src="/Images/LinkedIn.svg" alt="LinkedIn" height={15} width={15} />
      </div>
    </div>
  )
}

export default InfoHeader
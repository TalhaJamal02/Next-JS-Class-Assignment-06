import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-left mb-6 md:mb-0">
              <h4 className="text-lg font-semibold leading-[27px]">
                Subscribe to our newsletter
              </h4>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <form className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className=" max-w-full md:w-[265px] p-3 border border-black rounded-lg mb-4 md:mb-0 md:mr-4"
                required
              />
              <button
                type="submit"
                className="bg-white border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={"/Images/Logo.png"}
              alt="Ddsgnr Logo"
              width={32}
              height={30}
              className="object-cover mb-2"
            />
            <h1 className="text-2xl font-bold text-black">Ddsgnr</h1>
          </div>

          {/* Column 1 */}
          <div className=" my-4 sm:my-0">
            <h5 className="font-semibold text-black">Courses</h5>
            <ul className="mt-4 space-y-2">
              <li><Link href="">Business</Link></li>
              <li><Link href="">Development</Link></li>
              <li><Link href="">Technology</Link></li>
              <li><Link href="">Design</Link></li>
              <li><Link href="">Programming</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className=" my-4 sm:my-0">
            <h5 className="font-semibold text-black">Resources</h5>
            <ul className="mt-4 space-y-2">
              <li><Link href="">Career</Link></li>
              <li><Link href="">Resume</Link></li>
              <li><Link href="">Learning</Link></li>
              <li><Link href="">Interview Preparation</Link></li>
              <li><Link href="">Jobs</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className=" my-4 sm:my-0">
            <h5 className="font-semibold text-black">About Us</h5>
            <ul className="mt-4 space-y-2">
              <li><Link href="">Contact</Link></li>
              <li><Link href="">Help/Support</Link></li>
              <li><Link href="">FAQ</Link></li>
              <li><Link href="">Terms and Conditions</Link></li>
              <li><Link href="">Partners</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-[#676767] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="flex flex-wrap items-center space-x-4 mb-4 md:mb-0">
              <p className="text-sm md:text-base leading-[21px]">2023 Ddsgnr. All rights reserved.</p>
              <Link href="" className="underline text-sm leading-[21px] md:text-base">
                Privacy Policy
              </Link>
              <Link href="" className="underline text-sm leading-[21px] md:text-base">
                Terms of Service
              </Link>
              <Link href="" className="underline text-sm leading-[21px] md:text-base">
                Cookies Settings
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Link href="" aria-label="Facebook">
                <Image src={"/Images/Facebook.svg"} alt="Facebook" width={20} height={20} />
              </Link>
              <Link href="" aria-label="Instagram">
                <Image src={"/Images/Instagram.svg"} alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="" aria-label="Twitter">
                <Image src={"/Images/Twitter.svg"} alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="" aria-label="LinkedIn">
                <Image src={"/Images/LinkedIn.svg"} alt="LinkedIn" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

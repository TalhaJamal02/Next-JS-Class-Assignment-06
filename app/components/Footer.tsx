import Image from "next/image";
import Link from "next/link";

const socialMediaLinks = [
  { href: "#", src: "/Images/Facebook.svg", alt: "Facebook", label: "Facebook" },
  { href: "#", src: "/Images/Instagram.svg", alt: "Instagram", label: "Instagram" },
  { href: "#", src: "/Images/Twitter.svg", alt: "Twitter", label: "Twitter" },
  { href: "#", src: "/Images/LinkedIn.svg", alt: "LinkedIn", label: "LinkedIn" },
];

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
                aria-label="Email Address"
                type="email"
                placeholder="Enter your email"
                className="max-w-full md:w-[265px] p-3 border border-black rounded-lg mb-4 md:mb-0 md:mr-4"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to Newsletter"
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

          {/* Links Columns */}
          {[
            {
              heading: "Courses",
              links: ["Business", "Development", "Technology", "Design", "Programming"],
            },
            {
              heading: "Resources",
              links: ["Career", "Resume", "Learning", "Interview Preparation", "Jobs"],
            },
            {
              heading: "About Us",
              links: ["Contact", "Help/Support", "FAQ", "Terms and Conditions", "Partners"],
            },
          ].map((column, index) => (
            <div key={index} className="my-4 sm:my-0">
              <h5 className="font-semibold text-black">{column.heading}</h5>
              <ul className="mt-4 space-y-2">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href="#" className="hover:underline hover:text-gray-700 transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-[#676767] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="flex flex-wrap items-center space-x-4 mb-4 md:mb-0">
              <p className="text-sm md:text-base leading-[21px]">
                2023 Ddsgnr. All rights reserved.
              </p>
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((link, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="underline text-sm leading-[21px] md:text-base hover:text-gray-700"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {socialMediaLinks.map((media, index) => (
                <Link key={index} href={media.href} aria-label={media.label}>
                  <Image src={media.src} alt={media.alt} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

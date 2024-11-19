import Image from 'next/image';

interface Course {
  category: string;
  imageSrc: string;
  title: string;
}

const CourseCard: React.FC<Course> = ({ category, imageSrc, title }) => (
  <div className=" max-w-[380px] mx-auto sm:mx-0 rounded-[5px] shadow-md bg-[#F7F7F7] p-3">
    <div className=" overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={416}
        height={400}
        className="object-cover"
      />
    </div>
    <div className="flex justify-between items-center mt-4">
      <span className="font-semibold text-sm leading-[21px] ">{category}</span>
      <span className="flex items-center gap-2">
        <Image src="/Images/Star.svg" alt="Star" width={24} height={24} />
        5.0
      </span>
    </div>

    <div className="flex flex-col gap-4 mt-4">
      <h1 className="font-bold text-2xl leading-[33px]">{title}</h1>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

      <div className="flex items-center justify-between">
        <button className="border border-black py-2 px-[20px] rounded-[5px] hover:bg-black hover:text-white transition">
          Enroll Now
        </button>
        <p className="font-bold text-lg">$400</p>
      </div>
    </div>
  </div>
);

export default CourseCard;

import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  coursesCount: string | number;
  imageSrc: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({ title, description, coursesCount, imageSrc, altText }) => {
  return (
    <div className="w-full max-w-[410px] h-auto p-4 rounded-[5px] bg-[#F7F7F7] shadow-md flex items-center">
      {/* Image Section */}
      <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-md mr-4">
        <Image
          src={imageSrc}
          alt={altText}
          height={48}
          width={48}
          className="object-contain"
        />
      </div>
      {/* Text Section */}
      <div>
        <h3 className="font-semibold text-xl leading-[30px]">{title}</h3>
        <p className="text-lg leading-[27px]">{`${coursesCount}+`} {description}</p>
      </div>

      
    </div>
  );
};

export default Card;

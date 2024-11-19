import React from 'react';
import Card from './ui/CoursesCategoryCard';

const coursesCategories = [
  { title: "Design & Development", imageSrc: "/Images/icon1.svg" },
  { title: "Marketing", imageSrc: "/Images/icon2.svg" },
  { title: "Development", imageSrc: "/Images/icon3.svg" },
  { title: "Communication", imageSrc: "/Images/icon4.svg" },
  { title: "Digital Marketing", imageSrc: "/Images/icon5.svg" },
  { title: "Self Development", imageSrc: "/Images/icon6.svg" },
  { title: "Business", imageSrc: "/Images/icon7.svg" },
  { title: "Finance", imageSrc: "/Images/icon8.svg" },
  { title: "Consulting", imageSrc: "/Images/icon9.svg" },
];

function CoursesCategory() {
  return (
    <div className="w-full h-full pb-16 pt-16">
      {/* Header Section */}
      <div className="text-center py-16 md:py-28 px-4 md:px-16">
        <h1 className="font-bold text-3xl md:text-[48px] leading-tight md:leading-[57px] pb-6">
          Explore Courses By Category
        </h1>
        <p className="text-base md:text-lg leading-[27px]">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Cards Section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {coursesCategories.map((course, index) => (
            <div
              key={index}
              className={`${
                index > 2 ? 'hidden sm:block' : ''
              }`} // Show only the first 3 cards on small screens
            >
              <Card
                title={course.title}
                description="Courses Available"
                coursesCount={50}
                imageSrc={course.imageSrc}
                altText={`${course.title} Icon`}
              />
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="flex items-center justify-center mt-12">
          <button
            className="border border-black rounded-md py-3 px-6 hover:bg-gray-100 transition"
            aria-label="View all courses by category"
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesCategory;

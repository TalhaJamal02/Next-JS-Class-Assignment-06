import React from 'react';
import CourseCard from './ui/CourseCard';

function Courses() {
  const courses = [
    { title: 'UX/UI Design 201', category: 'Design', imageSrc: '/Images/courseImg1.png' },
    { title: 'Introduction to Python', category: 'Programming', imageSrc: '/Images/courseImg2.png' },
    { title: 'Data Analysis for Beginners', category: 'Business', imageSrc: '/Images/courseImg3.png' },
    { title: 'Art Specialization', category: 'Art', imageSrc: '/Images/courseImg4.png', hiddenOnMobile: true },
    { title: 'Rule of Law', category: 'Law', imageSrc: '/Images/courseImg5.png', hiddenOnMobile: true },
    { title: 'Introduction to Webflow', category: 'Tech', imageSrc: '/Images/courseImg6.png', hiddenOnMobile: true },
  ];

  return (
    <div className="h-full pb-16 pt-16 w-full">
      {/* Header Section */}
      <div className="text-center py-12">
        <h1 className="font-bold text-[56px] leading-[67px]">Courses</h1>
        <p className="mt-6 text-lg">Your Ultimate Guide to learning</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-row items-center justify-center gap-4 mt-8">
        {['Popular', 'Recommended', 'Best Price'].map((tab, index) => (
          <p
            key={index}
            className={`py-2 px-4 border-b-2 ${
              index === 0 ? 'border-[#676767]' : ''
            } text-lg font-medium cursor-pointer hover:text-gray-700`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {courses.map((course, index) => (
          <div key={index} className={`${course.hiddenOnMobile ? 'hidden sm:block' : ''}`}>
            <CourseCard title={course.title} category={course.category} imageSrc={course.imageSrc} />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center my-12">
        <button
          className="border border-black rounded-[5px] py-2 px-6 text-lg font-medium hover:bg-gray-200 transition-all"
          aria-label="View all courses"
        >
          View All Courses
        </button>
      </div>
    </div>
  );
}

export default Courses;

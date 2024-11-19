import React from 'react'
import CourseCard from './ui/CourseCard';


function Courses() {
  return (
    <div className=' h-[100%] pb-16 pt-16 w-full'>
      {/* Header Section */}
      <div className='text-center py-12'>
        <h1 className='font-bold text-[56px] leading-[67px]'>Courses</h1>
        <p className='mt-6 text-lg'>Your Ultimate Guide to learning</p>
      </div>

      {/* Navigation Tabs */}
      <div className='flex flex-row items-center justify-center gap-4 mt-8'>
        <p className='py-2 px-4 border-b-2 border-[#676767] text-lg font-medium cursor-pointer hover:text-black'>
          Popular
        </p>
        <p className='py-2 px-4 text-lg font-medium cursor-pointer hover:text-black'>
          Recommended
        </p>
        <p className='py-2 px-4 text-lg font-medium cursor-pointer hover:text-black'>
          Best Price
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {/* First 3 cards always visible */}
        <CourseCard
          title='UX/UI Design 201'
          category='Design'
          imageSrc='/Images/courseImg1.png'
        />
        <CourseCard
          title='Introduction to Python'
          category='Programming'
          imageSrc='/Images/courseImg2.png'
        />
        <CourseCard
          title='Data Analysis for Beginners'
          category='Business'
          imageSrc='/Images/courseImg3.png'
        />
        {/* Cards hidden on mobile */}
        <div className="hidden sm:block">
          <CourseCard
            title='Art Specialization'
            category='Art'
            imageSrc='/Images/courseImg4.png'
          />
        </div>
        <div className="hidden sm:block">
          <CourseCard
            title='Rule of Law'
            category='Law'
            imageSrc='/Images/courseImg5.png'
          />
        </div>
        <div className="hidden sm:block">
          <CourseCard
            title='Introduction to Webflow'
            category='Tech'
            imageSrc='/Images/courseImg6.png'
          />
        </div>
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center my-12">
        <button className="border border-black rounded-[5px] py-2 px-6 text-lg font-medium hover:bg-gray-200 transition-all">
          View All Courses
        </button>
      </div>
    </div>
  )
}

export default Courses;
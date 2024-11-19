import React from 'react'
import Carousel from './ui/CustomerCarousel'

function CustomerTestimonial() {
  return (
    <div>
      <div className=' h-full pb-16 pt-16 '>
        <div className=" text-center p-4 mt-16 sm:0">
          <h1 className=' font-bold text-[48px] leading-[57px]'>Customer testimonials</h1>
          <p className=' mt-6 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Carousel />
      </div>
    </div>
  )
}

export default CustomerTestimonial

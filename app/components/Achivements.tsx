
function Achivements() {
  return (
    <div className="w-full h-[100%] pb-16 pt-16 mb-16 flex flex-col items-center justify-center px-6 space-y-8">
      {/* Header Section */}
      <div className="text-center max-w-2xl mt-40 sm:mt-0">
        <h2 className="font-bold text-4xl sm:text-[48px] leading-tight mt-6">
          Our Achievements
        </h2>
        <p className=" text-[18px] leading-[27px] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-[40px] leading-tight">+200</h1>
          <p className=" mt-2">Courses</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-[40px] leading-tight">50k</h1>
          <p className="mt-2">Mentor</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-[40px] leading-tight">270k</h1>
          <p className="mt-2">Students</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-[40px] leading-tight">100+</h1>
          <p className="mt-2">Recognition</p>
        </div>
      </div>
    </div>

  )
}

export default Achivements
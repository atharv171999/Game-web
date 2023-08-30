import React from 'react'
import '../App.css'
import Gallery1 from '../Images/gallery-img-1.jpg'
import Gallery2 from '../Images/gallery-img-2.jpg'
import Gallery3 from '../Images/gallery-img-3.jpg'
import Gallery4 from '../Images/gallery-img-4.jpg'

const Gallery = () => {
  return (
  <>
   <div className="scroll-bar w-[100%] mt-[6rem] md:mt-[10rem] gap-x-4 lg:gap-x-8 p-[10px] lg:p-[40px] snap-x mx-auto snap-mandatory flex pb-[31px]">
    <div className=" w-[95%] md:w-[70%] lg:w-[50%] snap-center flex-shrink-0  flex items-center justify-center ">
      <img className='w-[100%] rounded-[4px] ' src={Gallery1} alt="" />
    </div>
    <div className="w-[95%] md:w-[70%] lg:w-[50%] snap-start   flex-shrink-0  flex items-center justify-center ">
      <img className='w-[100%] rounded-[4px] ' src={Gallery2} alt="" />
    </div>
    <div className="w-[95%] md:w-[70%] lg:w-[50%] snap-start   flex-shrink-0  flex items-center justify-center ">
      <img className='w-[100%] rounded-[4px] ' src={Gallery3} alt="" />
    </div>
    <div className="w-[95%] md:w-[70%] lg:w-[50%] snap-start  flex-shrink-0 flex items-center justify-center ">
      <img className='w-[100%] rounded-[4px] ' src={Gallery4} alt="" />
    </div>
</div>
  </>
  )
}

export default Gallery
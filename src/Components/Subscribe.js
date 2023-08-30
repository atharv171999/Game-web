import React from 'react'
import '../App.css'
import Prizeimg from '../Images/newsletter-img.png'

const Subscribe = () => {
  return (
    <section>
        <div className='px-[15px] mt-44'>
            <div className='newsletter-card mx-auto flex flex-col lg:flex-row items-center px-[25px] py-[50px] rounded-[12px] sm:w-[32rem] md:w-[42rem] lg:w-[59rem] xl:w-[67rem] xl:py-[75px] '>
                <div className='flex flex-col md:flex-row items-center md:space-x-10 lg:space-x-7 md:w-[25rem] md:mx-auto mb-9 lg:mb-0 lg:w-[25rem] xl:w-[32rem]'>
                    <img className='w-[105px]' src={Prizeimg} alt="" />
                    <h2 className=' text-center md:text-left font-bold text-white text-[30px] xl:text-[40px]  tracking-tighter font-[oswald]'>SUBSCRIBER TO OUR NEWSLETTER</h2>
                </div>
                <div className='flex flex-col md:relative md:flex-row w-[100%] items-center md:items-baseline lg:w-[26rem]'>
                    <input type='email' placeholder='YOUR EMAIL ADDRESS' className=' input text-white border-[1px] border-white bg-[#00000033] mb-[15px] lg:mb-0 w-[100%]  py-[12px] px-[25px] ' />
                    <button className='btn md:absolute md:right-[0px] mx-auto text-[#ff8605] py-[11.5px] px-[34px] focus:bg-[#1f2029] focus:text-white bg-white text-[18px] font-bold font-[oswald]'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Subscribe
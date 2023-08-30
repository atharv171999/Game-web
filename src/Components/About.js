import React from "react";
import "../App.css";

import Mcharac from "../Images/about-img.png";
import Charac1 from "../Images/character-1.png";
import Charac2 from "../Images/character-2.png";
import Charac3 from "../Images/character-3.png";
import { ArrowForwardCircleOutline } from 'react-ionicons'

const About = () => {
  return (
    <>
      <div className=" w-full px-3  top-[66rem] lg:top-[71rem] xl:top-[65.5rem]">
        <div className=" pt-[140px] xl:w-[74rem] xl:mx-auto xl:-space-x-4  flex flex-col space-y-10 xl:space-y-0 xl:flex-row-reverse">
          <figure className=" relative sm:w-[24rem] mx-auto  ">
          <img
            className=" w-img xl:ml-1 z-10 sm:w-[25rem] xl:w-[24.5rem]  sm:mx-auto md:w-[27rem] "
            src={Mcharac}
            alt=""
            />
            <img
            className="  z-0 absolute top-[7rem] right-[23.1rem] hidden md:block w-[150px] h-[150px]"
            src={Charac1}
            alt=""
          />
          <img
            className=" absolute top-[4.5rem] right-[4.5rem] hidden sm:block w-[150px] h-[210px] "
            src={Charac2}
            alt=""
          />
          <img className="absolute -top-1 -right-[7.3rem] hidden md:block w-[130px]" src={Charac3} alt="" />
            </figure>
          <div className=" sm:w-[34rem] md:w-[42rem] xl:h-[24rem] xl:w-[37rem] space-y-4 px-3 py-10 text-left sm:mx-auto sm:px-[2.5rem] sm:py-[4rem] xl: xl:ml-3 bg-[#1f2029]">
            <p className="font-[oswald] text-[#ff8605] -tracking-[1px] font-bold">
              FIND TEAM MEMBER
            </p>
            <h2 className="font-[oswald] -tracking-[3px] font-bold text-4xl sm:text-5xl  text-white">
              EXPERIENCE JUST FOR GAMERS{" "}
              <span className="text-[#ff8605]">OFFER</span>
            </h2>
            <p className=" text-white ">
              0 Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat,
              eros pede varius nisi, condimentum viverra felis nunc et lorem. In
              auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam
              lobortis.
            </p>
            <p className=" text-white flex flex-row items-center gap-x-2"> <ArrowForwardCircleOutline
  color={'#ff8605'} 
  title={""}
  height="30px"
  width="30px"
/> Will sharpen your brain and focus</p>
          </div>
        </div>
          
        </div>
    </>
  );
};

export default About;

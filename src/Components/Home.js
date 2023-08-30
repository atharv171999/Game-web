import React from "react";
import "../App.css";
import Banner from "../Images/hero-banner.jpg";
import "../Fonts/REFAULT.woff";
import "../index.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Home = () => {
  return (
    <>
      <div className="">
        <img
          src={Banner}
          alt=""
          className=" h-[52.5rem] xl:h-[45.9rem] w-[100rem] object-cover"
        />
      </div>
      <div className=" z-0 absolute -space-y-2 md:-space-y-8 xl:-space-y- xl:top-[23.8rem] inset-x-0 top-[25rem] text-white font-semibold text-center">
        <p className=" font-[Oswald] tracking-[0.6rem] text-xl md:text-2xl md:tracking-[1.5rem] ">
          THE SEASON 8
        </p>
        <h1
          className=" text-[54px] font-[REFAULT] sm:text-[7rem] md:text-[9rem] xl:text-[150px]"
          style={
            {
              // fontFamily: "REFAULT",
            }
          }
        > 
          STEAM
        </h1>
        <div className=" flex flex-col items-center font-bold text-white text-xl  sm:flex-row  sm:justify-center">
          <button className="btn focus:bg-[#1f2029] focus:text-white bg-[#ff8605] items-center   px-[34px] py-[13px] ">
            WATCH LIVE 
            <PlayCircleIcon className="ml-2 mb-1"/>
          </button>
          <button className=" focus:text-[#ff8605] w-[13rem] py-[0.8rem]">DREAM MAKING</button>
        </div>
      </div>
    </>
  );
};

export default Home;

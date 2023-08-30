import React from "react";
import "../App.css";
import Prize from "../Images/prize-.png";
import Win1 from "../Images/winner-img-1.png";
import Win2 from "../Images/winner-img-2.png";

const Tournament = () => {
  return (
    <>
      <div className="px-8 mt-32">
        <div className=" lg:w-[62rem] xl:w-[75rem] mx-auto flex flex-col lg:flex-row items-center justify-between  ">
          <div className=" flex flex-col items-center  lg:text-left lg:w-[310px] text-center lg:items-start ">
            <p className="text-[#ff8605] font-bold font-[oswald] ">CHECK OUT OUR NEXT</p>
            <h2 className=" font-bold text-[30px] -tracking-[2px] text-white mb-4 font-[oswald]">
              GAMING TOURNAMENTS !
            </h2>
            <p className="-tracking-[0.7px] text-white mb-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              rerum illum minus ipsa eos.
            </p>
            <button className="focus:bg-[#1f2029] focus:text-white -tracking-[1px] text-[20px] lg:text-[16px] w-max mx-auto lg:mx-0 btn py-[13px] px-[34px] font-[oswald] bg-[#ff8605] text-white font-bold ">
              JOIN WITH US
            </button>
          </div>
          <div className=" flex flex-col items-center mt-[2.5rem] ">
            <h2 className=" font-[oswald] -tracking-[2px] font-bold text-white text-[30px] mb-2">
              PRIZE POOL
            </h2>
            <div className="-tracking-[2px] text-[26px] font-[oswald] bg-[#ff8605] px-[42px] py-[8px] rounded-[50px] ">
              $80000
            </div>
            <img src={Prize} alt="" />
          </div>
          <div className="py-[45px] px-[40px] bg-[#1f2029] mt-12 lg:mt-0 rounded-[4px] w-[100%] sm:w-[38rem] lg:w-[18rem] sm:w-none">
            <div className="flex flex-col items-center ">
              <h2 className=" font-[oswald] -tracking-[2px] text-center text-[30px] font-bold text-white mb-6">
                LAST WINNERS
              </h2>
              <div className="flex gap-x-6  lg:gap-x-2">
                <div className="flex flex-col items-center">
                  <img className=" w-[90px] h-auto mb-4" src={Win1} alt="" />
                  <h3 className=" -tracking-[1.5px] font-bold bg-[#ff8605] py-[6px] px-[10px] rounded-[4px] text-white">
                    1ST PLACE
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <img className=" w-[90px] h-auto mb-4" src={Win2} alt="" />
                  <h3 className=" -tracking-[1.5px] font-bold bg-[#ff8605] py-[6px] px-[10px] rounded-[4px] text-white">
                    2ND PLACE
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tournament;

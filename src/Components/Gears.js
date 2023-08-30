import React from "react";
import "../App.css";
import Gear1 from "../Images/gears-img-1.png";
import Gear2 from "../Images/gears-img-2.png";
import Gear3 from "../Images/gears-img-3.png";
import { TimeOutline, ShareSocialOutline, HeartOutline } from "react-ionicons";

const Gears = () => {
  return (
    <div className="pt-[150px]">
      <div className=" items-center  w-[100%] sm:w-[33rem] md:w-[100%] sm:mx-auto p-[15px]  text-white ">
        <h2 className="font-[oswald] text-center font-bold text-[34px] sm:text-[45px]  text-white mb-[15px]">
          CHECK OUR GEARS
        </h2>
        <div className="flex flex-col items-center mb-[65px]">
          <div className=" w-[150px] h-[5px] bg-[#ff8605] rounded-b-[25%] "></div>
          <div className=" w-[30px] h-[4px] bg-[#ff8605]  rounded-b-[25%] "></div>
        </div>
        <ul className="  grid md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:w-[42rem] md:mx-auto lg:w-[59rem] xl:w-[68rem] md:gap-10 lg:gap-12 ">
          <li className=" md:mx-auto ">
            <div className=" md:w-[20rem] lg:w-[28rem] xl:w-[20rem] space-y-7 ">
              <div className=" relative card-img w-[100%] ">
                <a className="w-[100%] " href="/">
                  <img
                    className=" pt-[15%] w-[45%] mx-auto "
                    src={Gear1}
                    alt=""
                  />
                </a>
                <button className=" absolute top-[28%] right-[10%] pl-1 md:top-20 md:right-5 text-[20px] border-2 border-[#3f3f46] focus:border-[#ff8605] rounded-[50%] w-[9%] h-[11%] md:w-[45px] md:h-[45px]  ">
                  <ShareSocialOutline
                    color={"#ff8605"}
                    title={""}
                    height="30px"
                    width="30px"
                  />
                </button>
                <div className=" absolute top-[5%] right-[10%] md:top-2 md:right-4 text-[14px] flex items-center flex-row gap-2 ">
                  <div>
                    <TimeOutline
                      color={"#ff8605"}
                      title={""}
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <span className=" text-[#ff8605] font-[oswald]">IN 4 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className=" text-[22px] font-bold font-[oswald]">HEADPHONE</h3>
                  <p className="font-[oswald]">E-SPORTS</p>
                </div>
                <div className=" text-[22px] font-bold font-[oswald]">$18</div>
              </div>
              <div className="flex justify-between">
                <button className="btn focus:bg-[#1f2029] focus:text-white text-[18px] font-bold font-[oswald] py-[18px] px-[20px] bg-[#ff8605]">
                  + ADD TO CART
                </button>
                <button className="btn-like focus:bg-[#ff8605] bg-[#1f2029]  py-[18px] px-[20px] ">
                  <HeartOutline
                    color={"#ff8605"}
                    title={""}
                    height="25px"
                    width="25px"
                  />
                </button>
              </div>
            </div>
          </li>
          <li className=" md:mx-auto">
            <div className="md:w-[20rem] lg:w-[28rem] xl:w-[20rem] space-y-7">
              <div className=" relative card-img w-[100%] ">
                <a className="w-[100%] " href="/">
                  <img
                    className=" pt-[25%] w-[45%] mx-auto "
                    src={Gear2}
                    alt=""
                  />
                </a>
                <button className=" absolute top-[28%] right-[10%] pl-1 md:top-20 md:right-5 text-[20px] border-2 border-[#3f3f46] focus:border-[#ff8605] rounded-[50%] w-[9%] h-[11%] md:w-[45px] md:h-[45px]  ">
                  <ShareSocialOutline
                    color={"#ff8605"}
                    title={""}
                    height="30px"
                    width="30px"
                  />
                </button>
                <div className=" absolute top-[5%] right-[10%] md:top-2 md:right-4 text-[14px] flex items-center flex-row gap-2 ">
                  <div>
                    <TimeOutline
                      color={"#ff8605"}
                      title={""}
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <span className=" text-[#ff8605] font-[oswald]">IN 4 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className=" text-[22px] font-bold font-[oswald]">CONTROLLER</h3>
                  <p className="font-[oswald]">E-SPORTS</p>
                </div>
                <div className=" text-[22px] font-bold font-[oswald]">$29</div>
              </div>
              <div className="flex justify-between">
                <button className="btn focus:bg-[#1f2029] focus:text-white text-[18px] font-bold py-[18px] px-[20px] bg-[#ff8605] font-[oswald]">
                  + ADD TO CART
                </button>
                <button className="btn-like focus:bg-[#ff8605] bg-[#1f2029]  py-[18px] px-[20px] ">
                  <HeartOutline
                    color={"#ff8605"}
                    title={""}
                    height="25px"
                    width="25px"
                  />
                </button>
              </div>
            </div>
          </li>
          <li className=" md:mx-auto">
            <div className="md:w-[20rem] lg:w-[28rem] xl:w-[20rem] space-y-7">
              <div className="relative card-img w-[100%] ">
                <a className="w-[100%] " href="/">
                  <img
                    className=" pt-[19%] w-[45%] mx-auto "
                    src={Gear3}
                    alt=""
                  />
                </a>
                <button className=" absolute top-[28%] right-[10%] md:top-20 md:right-5 text-[20px] border-2 border-[#3f3f46] focus:border-[#ff8605] pl-1 rounded-[50%] w-[9%] h-[11%] md:w-[45px] md:h-[45px]  ">
                  <ShareSocialOutline
                    color={"#ff8605"}
                    title={""}
                    height="30px"
                    width="30px"
                  />
                </button>
                <div className=" absolute top-[5%] right-[10%] md:top-2 md:right-4 text-[14px] flex items-center flex-row gap-2 ">
                  <div>
                    <TimeOutline
                      color={"#ff8605"}
                      title={""}
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <span className=" text-[#ff8605] font-[oswald]">IN 4 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div>
                  <h3 className=" text-[22px] font-bold font-[oswald]">GAMING MASK</h3>
                  <p className="font-[oswald]">E-SPORTS</p>
                </div>
                <div className=" text-[22px] font-bold font-[oswald]">$45</div>
              </div>
              <div className="flex justify-between">
                <button className="font-[oswald] btn focus:bg-[#1f2029] focus:text-white text-[18px] font-bold py-[18px] px-[20px] bg-[#ff8605] ">
                  + ADD TO CART
                </button>
                <button className="btn-like focus:bg-[#ff8605] bg-[#1f2029]  py-[18px] px-[20px] ">
                  <HeartOutline
                    color={"#ff8605"}
                    title={""}
                    height="25px"
                    width="25px"
                  />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gears;

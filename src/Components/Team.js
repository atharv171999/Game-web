import React from "react";
import '../App.css'
import Member1 from "../Images/team-member-1.png";
import Member2 from "../Images/team-member-2.png";
import Member3 from "../Images/team-member-3.png";
import Member4 from "../Images/team-member-4.png";
import Member6 from "../Images/team-member-6.png";
import Member7 from "../Images/team-member-7.png";
import Member8 from "../Images/team-member-8.png";
import Member9 from "../Images/team-member-9.png";
import Member10 from "../Images/team-member-10.png";
import Member11 from "../Images/team-member-11.png";
import Member12 from "../Images/team-member-12.png";
import InsertLinkIcon from '@mui/icons-material/InsertLink';


const Team = () => {
  return (
    <div className=" pt-[150px] ">
      <div className="flex flex-col items-center w-[86%] lg:w-fit xl:w-[1200px] mx-auto p-[15px]">
        <h2 className=" text-[45px] font-bold text-white text-center pb-[15px] font-[oswald]">ACTIVE TEAM MEMBERS</h2>
        <div className="flex flex-col items-center mb-[65px]">
          <div className=" w-[150px] h-[5px] bg-[#ff8605] rounded-b-[25%] "></div>
          <div className=" w-[30px] h-[4px] bg-[#ff8605]  rounded-b-[25%] "></div>
        </div>
        <ul className="flex flex-wrap justify-center gap-[20px] sm:gap-[30px] pb-[70px] ">
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%] w-[130px]">
            <a className=" relative " href="/">
              <img className="  w-[100%]" src={Member1} alt="" />
              <div className=" absolute top-[45%] right-[40%] ">
                <InsertLinkIcon className=" w-12" />
              </div>
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%] w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member2} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%] w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member3} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member4} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member6} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member7} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member8} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member9} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member10} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member11} alt="" />
            </a>
          </li>
          <li className="hover:border-[3px] border-[#ff8605] hover:opacity-50 rounded-[50%]  w-[130px]">
            <a href="/">
              <img className=" w-[100%]" src={Member12} alt="" />
            </a>
          </li>
        </ul>
        <button className="btn focus:bg-[#1f2029] focus:text-white bg-[#ff8605] py-[13px] px-[34px] text-white text-[18px] font-bold font-[oswald] ">VIEW ALL MEMBERS</button>
      </div>
    </div>
  );
};

export default Team;

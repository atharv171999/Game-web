import React, { useEffect, useState } from "react";
import "../App.css";
import Logo from "../Images/gamex.svg";
import { SearchOutline, LogInOutline, CloseOutline, Home } from "react-ionicons";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Navbar = (open) => {
  const [isActive, setIsActive] = useState(false);

  // <=============== Use Effects ============

  useEffect(() => {
    let body = document.querySelector("body");
    if (isActive) {
      body.classList.add("active-sc");
      // Remove scroll from body
    } else {
      // Add scroll to body
      body.classList.remove("active-sc");
    }
  }, [isActive]);

  // <============= Helper functions =======

  const openBar = () => {
    setIsActive(true);
  };

  const closeBar = () => {
    setIsActive(false);
  };

  const start = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  };

  const goAbout = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  const goTournament = () => {
    window.scrollTo({
      top: 1400,
      behavior: "smooth",
    });
  };
  const goTeams = () => {
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });
  };
  const goGears = () => {
    window.scrollTo({
      top: 3250,
      behavior: "smooth",
    });
  };

  const sideAbout = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };
  const sideTournament = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    });
  };
  const sideTeams = () => {
    window.scrollTo({
      top: 3550,
      behavior: "smooth",
    });
  };
  const sideGears = () => {
    window.scrollTo({
      top: 4500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" sticky z-20 top-0 drop-shadow-2xl h-24 flex justify-between px-4 bg-[#1f2029] md:hidden ">
        <div className=" my-auto bg-[#1f2029] ">
          <img onClick={start} src={Logo} alt="" />
        </div>
        <div
          onClick={openBar}
          className=" w-8 flex flex-col h-fit my-auto bg-[#1f2020]"
        >
          <div className="  h-1 my-0.5 rounded-lg bg-white"></div>
          <div className="  h-1 my-0.5 rounded-lg bg-white"></div>
          <div className="  h-1 my-0.5 rounded-lg bg-white"></div>
        </div>
      </div>
      <div className=" z-20 hidden sticky top-0 md:block">
        <div className="slanted-1 absolute top-0 left-0 w-40 h-28 xl:h-32 bg-[#1f2029]"></div>
        <div className="slanted-2 absolute top-0 right-0 w-40 h-28 xl:h-32 bg-[#1f2029]"></div>
      </div>
      <div className=" z-20 hidden sticky top-0 drop-shadow-2xl md:block bg-[#1f2029] lg:hidden">
        <div className=" h-24 flex justify-between px-4 w-[43rem] md:mx-auto bg-[#1f2029]">
          <div className=" my-auto bg-[#1f2029] ">
            <img onClick={start} src={Logo} alt="" />
          </div>
          <div
            onClick={openBar}
            className="w-8 flex flex-col bg-[#1f2029] place-content-center"
          >
            <div className=" h-1 my-0.5 rounded-lg bg-white"></div>
            <div className=" h-1 my-0.5 rounded-lg bg-white"></div>
            <div className=" h-1 my-0.5 rounded-lg bg-white"></div>
          </div>
        </div>
        <div className=" z-20 sticky inset-x-0 hidden md:block">
          <div className="slanted-1 absolute top-0 left-0 w-40 h-28 xl:h-32 bg-[#1f2029]"></div>
          <div className="slanted-2 absolute top-0 right-0 w-40 h-28 xl:h-32 bg-[#1f2029]"></div>
        </div>
      </div>
      <div className=" z-20 hidden sticky top-0 drop-shadow-2xl lg:block  bg-[#1f2029]">
        <div className="flex flex-row gap-x-8 xl:gap-x-20 justify-center  xl:space-x-12  h-[5.7rem] xl:h-28 items-center bg-[#1f2029]">
          <div>
            <img onClick={start} src={Logo} alt="" />
          </div>
          <div className="  font-bold text-sm  flex justify-center  h-full text-white ">
            <div
              onClick={goHome}
              className=" font-[oswald] hover:-skew-x-12 px-6 py-9 xl:py-12 hover:border-b-[7px] border-[#ff8605] hover:bg-[#1b1c22] hover:text-[#ff8605]  "
            >
              HOME
            </div>
            <div
              onClick={goAbout}
              className=" font-[oswald] hover:-skew-x-12 px-6 py-9 xl:py-12 hover:border-b-[7px] border-[#ff8605] hover:bg-[#1b1c22] hover:text-[#ff8605] "
            >
              ABOUT
            </div>
            <div
              onClick={goTournament}
              className=" font-[oswald] hover:-skew-x-12 px-6 py-9 xl:py-12 hover:border-b-[7px] border-[#ff8605] hover:bg-[#1b1c22] hover:text-[#ff8605]  "
            >
              TOURNAMENT
            </div>
            <div
              onClick={goTeams}
              className=" font-[oswald] hover:-skew-x-12 px-6 py-9 xl:py-12 hover:border-b-[7px] border-[#ff8605] hover:bg-[#1b1c22] hover:text-[#ff8605] "
            >
              TEAM
            </div>
            <div
              onClick={goGears}
              className=" font-[oswald] hover:-skew-x-12 px-6 py-9 xl:py-12 hover:border-b-[7px] border-[#ff8605] hover:bg-[#1b1c22] hover:text-[#ff8605]  "
            >
              GEARS
            </div>
            <div className=" font-[oswald] hover:-skew-x-12 px-6 py-9 xl:py-12 hover:border-b-[7px] border-[#ff8605] hover:bg-[#1b1c22] hover:text-[#ff8605] ">
              CONTACT
            </div>
          </div>
          <div className="  flex flex-row gap-3">
            <div className="flex flex-row">
              <button className=" h-10 w-10 bg-[#1f2029]">
                <SearchOutline
                  color={"#fdfcfc"}
                  title={""}
                  height="70%"
                  width="70%"
                />
              </button>
              <div className="w-2 h-10 bg-[#141419]"></div>
            </div>
            <div className="flex w-[6.5rem] h-10">
              <div className="w-[6rem] h-10 bg-[#262831]">
                <div className=" flex  items-center text-sm text-white font-semibold">
                  <div className=" w-[40px] h-[39px] ">
                    <LogInOutline
                      color={"#fdfcfc"}
                      title={""}
                      height="100%"
                      width="80%"
                    />
                  </div>
                  <span className="font-[oswald]" >LOG-IN</span>
                </div>
              </div>
              <div className=" w-1 h-full bg-[#ff8605]"></div>
            </div>
          </div>
        </div>
        <div className=" z-20 sticky top-0 hidden md:block">
          <div className="slanted-1 absolute top-0 left-0 w-40 h-28 xl:h-32 bg-[#1f2029]"></div>
          <div className="slanted-2 absolute top-0 right-0 w-40 h-28 xl:h-32 bg-[#1f2029]"></div>
        </div>
      </div>
      {/* <============== Sidebar ===================> */}
      <section
        className={`lg:hidden trans-form bg-[#1b1c22] z-20  ${
          isActive ? "block" : "hidden"
        }`}
      >
        <div className=" flex flex-row justify-between items-center border-b-2 border-[#ffffff1a] p-[25px] ">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <button onClick={closeBar} className=" text-[25px] w-[40px] h-[40px] ">
          <CloseOutline
  color={'#ffffff'} 
  title={""}
  height="100%"
  width="100%"
/>
          </button>
        </div>
        <ul>
          <li onClick={goHome} className=" focus:text-[#ff8605] text-white font-bold text-[15px] border-b-2 border-[#ffffff1a] px-[25px] py-[10px] ">
            HOME
          </li>
          <li onClick={sideAbout} className=" focus:text-[#ff8605] text-white font-bold text-[15px] border-b-2 border-[#ffffff1a] px-[25px] py-[10px] ">
            ABOUT
          </li>
          <li onClick={sideTournament} className=" focus:text-[#ff8605] text-white font-bold text-[15px] border-b-2 border-[#ffffff1a] px-[25px] py-[10px] ">
          TOURNAMENT
          </li>
          <li onClick={sideTeams} className=" focus:text-[#ff8605] text-white font-bold text-[15px] border-b-2 border-[#ffffff1a] px-[25px] py-[10px] ">
            TEAMS   
          </li>
          <li onClick={sideGears} className=" focus:text-[#ff8605] text-white font-bold text-[15px] border-b-2 border-[#ffffff1a] px-[25px] py-[10px] ">
            GEARS
          </li>
          <li className=" focus:text-[#ff8605] text-white font-bold text-[15px] border-b-2 border-[#ffffff1a] px-[25px] py-[10px] ">
            CONTACT
          </li>
        </ul>
        <ul className="  flex flex-row justify-center gap-x-4 p-[25px]">
          <li>
            <a  href="/">
              <TwitterIcon className="twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <InstagramIcon className="instagram" />
            </a>
          </li>
          <li>
            <a href="/">
              <GitHubIcon className="github" />
            </a>
          </li>
          <li>
            <a href="/">
              <YouTubeIcon className="youtube" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;

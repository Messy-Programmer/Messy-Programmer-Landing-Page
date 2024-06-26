import React, { useEffect } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StaticImage } from "gatsby-plugin-image";
import LetsTalk from "../ui/letstalk";

const NavBar = () => {
  let prevScrollPos = window.scrollY;
  let nav: HTMLElement | null;
  useEffect(() => {
    nav = document.getElementById("nav");
  });
  window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      nav!.style.top = "0rem";
    } else {
      nav!.style.top = "-7rem";
    }
    prevScrollPos = currentScrollPos;
  };
  return (
    <nav
      id="nav"
      className=" fixed top-0 w-full bg-gradient-to-b from-[#030503] via-[#03050354] z-[60] sm:py-4 transition-all backdrop-blur-sm"
    >
      <div className="flex justify-between items-center px-2 py-2">
        <div className="log">
          <StaticImage
            src="../../images/messyProgrammerLogo.png"
            alt="messyProgrammerLogo"
            className=" text-slate-100 font-medium it w-48"
            placeholder="blurred"
            layout="constrained"
            loading="eager"
            quality={100}
          />
        </div>
        {/* <button
          onClick={() => {
            scrollTo("#contact");
          }}
          className=" text-slate-100 rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-3"
        >
          Let's talk
        </button> */}
        <LetsTalk
          text={"Book Appointment"}
          className={
            " text-slate-100 text-xs rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-3"
          }
        />
      </div>
    </nav>
  );
};
export default NavBar;

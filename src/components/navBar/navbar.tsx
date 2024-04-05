import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
  return (
    <nav className=" absolute top-0 w-full bg-gradient-to-b from-[#061906] from-2% via-[#06190642]">
      <div className="flex justify-between items-center px-2 py-2">
        <div className="log">
          <StaticImage
            src="../../images/messyProgrammerLogo.png"
            alt="messyProgrammerLogo"
            className=" text-slate-100 font-medium it w-48"
          />
        </div>
        <Link
          to="/"
          className=" text-slate-100 rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-3"
        >
          Let's talk
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;

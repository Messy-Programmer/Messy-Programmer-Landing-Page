import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav>
      <div className=" bg-green-800 flex justify-between items-center px-2 py-2">
        <div className="log">
          <h1 className=" text-slate-100 font-medium it">Messy programmer</h1>
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

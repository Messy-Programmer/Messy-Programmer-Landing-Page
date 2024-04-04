import React from "react";
const Footer = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black relative flex items-center justify-center bg-[#0d260d]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gradient-to-r from-[#051505] from-5% via-[rgba(74,114,74,0)] to-[#051505] to-100%"></div>
      <div>
        <div className=" flex items-center text-center">
          <h2 className=" text-slate-100  ">
            Start Delivering better customer outcomes today.
          </h2>
          <h2>messy programmer logo</h2>
          <div>
            <i>icon</i>
            <i>icon</i>
            <i>icon</i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

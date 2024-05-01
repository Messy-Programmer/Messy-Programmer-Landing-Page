import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import logo from "../../images/logoCircle.png";
const Loading = () => {
  return (
    <div>
      <div className="h-screen bg-[#051405] flex justify-center items-center text-center flex-col gap-3">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="animate"
          className="dark:bg-black bg-transparent text-white flex items-center"
        >
          <img src={logo} alt="logo" width={"100px"} />
        </HoverBorderGradient>
        <code className="text-slate-100 flex gap-3">
          Loading
          <span className="loader">
            <span className="dot"></span> <span className="dot"></span>{" "}
            <span className="dot"></span>
          </span>
        </code>
      </div>
    </div>
  );
};

export default Loading;

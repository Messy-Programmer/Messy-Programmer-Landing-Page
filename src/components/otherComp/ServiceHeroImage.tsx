import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function ServiceHeroImageComponent() {
  return (
    <div className="overflow-hidden pt-20 bg-black">
      {/* bottom div will be the green circle */}
      <div className=" bg-gradient-to-r from-[#097809] to-[#0ca10c] rounded-full size-[19rem] relative overflow-visible">
        <StaticImage
          src="../../images/human.png"
          alt="human"
          className=" absolute -top-[30%]"
        />
        {/* bottom div contains the ellipse */}
        <div className="w-[20rem] absolute  -bottom-[30%]">
          <svg
            width="auto"
            height="247"
            viewBox="0 0 493 247"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M246.5 0C110.362 0 0 110.362 0 246.5H493C493 110.362 382.638 0 246.5 0Z"
              fill="#041404"
            />
          </svg>
        </div>
        {/* bottom div contains the book now  */}
        <div className="text-slate-100 bg-gradient-to-b from-[#40a5fd] to-[#7dff7d] w-[5rem] h-[11rem] flex flex-col items-center justify-evenly rounded-full absolute right-[37%] bottom-0">
          <div className="text-center">
            <h1>Book</h1>
            <h1>Now</h1>
          </div>
          <div className="border-2 border-white px-1 py-2 rounded-xl">
            <svg
              width="10"
              height="43"
              viewBox="0 0 10 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 38.25L4.75 42M4.75 42L1 38.25M4.75 42V1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeroImageComponent;

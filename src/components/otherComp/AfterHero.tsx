import { StaticImage } from "gatsby-plugin-image";
import { BackgroundBeams } from "../ui/background-beam";
import React from "react";

const AfterHero = () => {
  return (
    <div className=" relative bg-gradient-to-b from-[#0d270d] to-[#051405] md:inline-block px-3 pb-12 lg:py-24 lg:px-12 w-full -z-10">
      <div>
        <div className="flex lg:gap-12 xl:max-w-[70rem] xl:mx-auto">
          <div>
            <StaticImage
              src="../../images/projectConsole.png"
              alt=""
              placeholder="blurred"
              layout="constrained"
              loading="eager"
              quality={100}
            />
          </div>
          <div className="mt-8">
            <StaticImage
              src="../../images/projectDev.png"
              alt="example"
              placeholder="blurred"
              layout="constrained"
              loading="eager"
              quality={100}
            />
          </div>
          <div className="mt-16 flex flex-col lg:gap-3 xl:gap-4">
            <StaticImage
              src="../../images/projectCode.png"
              alt="example"
              placeholder="blurred"
              layout="constrained"
              loading="eager"
              quality={100}
            />
            <StaticImage
              src="../../images/projectTerminal.png"
              alt="example"
              placeholder="blurred"
              layout="constrained"
              loading="eager"
              quality={100}
            />
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
export default AfterHero;

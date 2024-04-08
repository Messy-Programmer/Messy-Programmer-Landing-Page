import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { IoMail } from "react-icons/io5";
import { BackgroundBeams } from "../ui/background-beam";

const HeroText = () => {
  return (
    <>
      <div className="z-50 mt-24 absolute top-0 sm:mt-[10rem] w-full lg:mt-[15rem]">
        <div className="flex flex-col max-w-[904px] text-center sm:text-start sm:pl-7 sm:max-w-[48rem] lg:max-w-[58rem] lg:pl-[5rem]">
          <div className="w-full text-[1.7rem] font-medium max-md:max-w-full gradient-txt sm:text-4xl md:text-5xl lg:text-6xl lg:leading-loose">
            Your Success Story,
          </div>
          <div className="flex gap-5 flex-col px-5 mt-3 sm:px-0 sm:flex-row">
            <div className="flex gap-2 items-center justify-center px-5 py-2.5 my-auto text-sm font-semibold text-green-400 rounded-3xl bg-zinc-900">
              <IoMail className="text-lg" />
              <div className="my-auto">contact@messyprogrammer.in</div>
            </div>
            <div className="text-[1.7rem] font-medium max-md:max-w-full gradient-txt sm:text-4xl md:text-5xl lg:text-6xl">
              Our Tech Expertise
            </div>
          </div>
          <div className="mt-3.5 w-full text-sm px-4 leading-6 md:leading-9 text-slate-100 max-md:max-w-full sm:px-0 lg:text-[1.2rem]">
            Messy Programmer is your trusted partner for top-notch IT services
            at affordable prices. With a focus on quality and affordability, we
            specialize in providing a wide range of IT solutions tailored to
            meet your business needs.
          </div>
          <div className="text-slate-100 mt-5 flex gap-1.5 justify-center sm:justify-start">
            <Link
              to="/"
              className="rounded-2xl max-md:px-5 bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-3"
            >
              Contact Us
            </Link>
            <Link
              to=""
              className="rounded-2xl bg-neutral-800/65 py-2 px-3 max-md:px-5"
            >
              Explore Services
            </Link>
          </div>
        </div>
        {/* hero text end */}
        {/* tab images for mobile  */}
        <div className="relative pt-20 sm:mb-20 sm:px-7 lg:hidden">
          <div className="flex ">
            <div>
              <StaticImage src="../../images/projectConsole.png" alt="" />
            </div>
            <div className=" pt-10 sm:pt-0">
              <StaticImage src="../../images/projectDev.png" alt="" />
            </div>
            <div className="flex flex-col pt-20 sm:pt-0">
              <StaticImage src="../../images/projectCode.png" alt="" />
              <StaticImage src="../../images/projectTerminal.png" alt="" />
            </div>
          </div>
        </div>
        {/* tab images for mobile end */}
      </div>
      {/* hero image for tab n desktop */}
      <div className="hidden absolute sm:inline-block sm:top-[20%] sm:right-0 sm:w-[8rem] sm:z-10 lg:right-[10rem] lg:w-[11rem] xl:right-[20%] xl:w-[17rem] xl:h-[22rem]">
        <StaticImage
          className="w-full h-full"
          src="../../images/LogoVector.png"
          alt="logo"
        />
      </div>
      {/* hero image for tab n desktop end */}
      <div className="absolute z-10 top-[10%] left-[10%] w-[8rem]">
        <StaticImage src="../../images/LogoVector.png" alt="logo" />
      </div>
      <div className="absolute z-10 w-[9rem] bottom-[10%] left-[20%]">
        <StaticImage src="../../images/LogoVector.png" alt="logo" />
      </div>
    </>
  );
};
export default HeroText;

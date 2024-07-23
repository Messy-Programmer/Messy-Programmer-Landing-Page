import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { IoMail } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";
const HeroText = () => {
  return (
    <>
      <div className="z-50 mt-36 absolute top-0 sm:mt-[15rem] w-full lg:mt-[15rem] 3xl:mt-[30rem]">
        <div className="flex flex-col max-w-[904px] text-center sm:text-start sm:pl-7 sm:max-w-[48rem] lg:max-w-[58rem] lg:pl-[5rem] 2xl:max-w-[70rem] 3xl:max-w-[120rem]">
          <div className="w-full text-4xl font-bold max-md:max-w-full gradient-txt sm:text-4xl md:text-5xl lg:text-6xl lg:leading-loose 2xl:text-7xl 2xl:leading-[6rem] 3xl:text-9xl 3xl:leading-[9rem]">
            Your Success Story,
          </div>
          <div className="flex gap-5 flex-col px-5 mt-3 sm:px-0 sm:flex-row">
            <div className="flex gap-2 items-center justify-center px-5 py-2.5 my-auto text-sm font-semibold text-green-400 rounded-3xl bg-zinc-900 3xl:text-3xl">
              <IoMail className="text-lg 3xl:text-3xl" />
              <div className="my-auto">contact@messyprogrammer.in</div>
            </div>
            <div className="text-4xl font-medium max-md:max-w-full gradient-txt sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-9xl">
              Our Tech Expertise
            </div>
          </div>
          <div className="mt-3.5 w-full text-sm font-extralight px-4 leading-6 md:leading-9 text-slate-100 max-md:max-w-full sm:px-0 lg:text-[1.2rem] 2xl:pr-56 3xl:text-[2rem] 3xl:leading-[3rem] 3xl:pr-60">
            Messy Programmer is your trusted partner for top-notch IT services
            at affordable prices. With a focus on quality and affordability, we
            specialize in providing a wide range of IT solutions tailored to
            meet your business needs.
          </div>
          <div className="text-slate-100 mt-5 flex gap-1.5 justify-center sm:justify-start">
            <button
              onClick={() => {
                scrollTo("#footer", "center");
              }}
              className="rounded-2xl max-md:px-5 bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-3"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollTo("#explore-service")}
              className="rounded-2xl bg-neutral-800/65 py-2 px-3 max-md:px-5"
            >
              Explore Services
            </button>
          </div>
        </div>
        {/* hero text end */}
      </div>
      {/* hero image for tab n desktop */}
      <div className="hidden absolute sm:inline-block sm:top-[20%] sm:right-0 sm:w-[8rem] sm:z-10 lg:right-[10rem] lg:w-[11rem] xl:right-[20%] xl:w-[17rem] xl:h-[20rem] 2xl:w-[20rem] 2xl:h-[25rem] 3xl:h-[40rem] 3xl:w-[35rem]">
        <StaticImage
          className="w-full h-full"
          src="../../images/heroLogo.png"
          alt="logo"
          placeholder="blurred"
          layout="constrained"
          loading="eager"
          quality={100}
        />
      </div>
      {/* hero image for tab n desktop end */}
      <div className="absolute z-10 top-[10%] left-[10%] w-[8rem] 3xl:w-[11rem]">
        <StaticImage
          className="w-full h-full"
          src="../../images/heroLogo.png"
          alt="logo"
          placeholder="blurred"
          layout="constrained"
          loading="eager"
          quality={100}
        />
      </div>
      <div className="absolute z-10 w-[9rem] bottom-[10%] left-[20%] 3xl:w-[13rem]">
        <StaticImage
          className="w-full h-full"
          src="../../images/heroLogo.png"
          alt="logo"
          placeholder="blurred"
          layout="constrained"
          loading="eager"
          quality={100}
        />
      </div>
    </>
  );
};
export default HeroText;

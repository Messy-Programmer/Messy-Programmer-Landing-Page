import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { IoMail } from "react-icons/io5";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar></NavBar>
      <BackgroundGradientAnimation>
        <div className="z-50 mt-24 absolute top-0 sm:mt-[10rem] w-full">
          <div className="flex flex-col max-w-[904px] text-center sm:text-start sm:pl-7 sm:max-w-[45rem] lg:max-w-[50rem]">
            <div className="w-full text-[1.7rem] font-medium max-md:max-w-full gradient-txt sm:text-4xl lg:text-5xl lg:leading-loose">
              Your Success Story,
            </div>
            <div className="flex gap-5 flex-col px-5 mt-3 sm:px-0 sm:flex-row">
              <div className="flex gap-2 items-center justify-center px-5 py-2.5 my-auto text-sm font-semibold text-green-400 rounded-3xl bg-zinc-900">
                <IoMail className="text-lg" />
                <div className="my-auto">contact@messyprogrammer.in</div>
              </div>
              <div className="text-[1.7rem] font-medium max-md:max-w-full gradient-txt sm:text-4xl lg:text-5xl">
                Our Tech Expertise
              </div>
            </div>
            <div className="mt-3.5 w-full text-sm px-4 leading-6 md:leading-9 text-white max-md:max-w-full sm:px-0">
              Messy Programmer is your trusted partner for top-notch IT services
              at affordable prices. With a focus on quality and affordability,
              we specialize in providing a wide range of IT solutions tailored
              to meet your business needs.
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
          <div className="mt-[2rem] lg:hidden">
            <div className="flex justify-around pt-6 sm:justify-center sm:gap-3 w-full">
              <StaticImage
                className="w-[6rem] h-[12rem]  sm:w-[10rem] sm:h-[20rem]"
                src="../images/tab-img1.png"
                alt="lorem"
              />
              <StaticImage
                className="w-[8rem] h-[12rem] mt-12 sm:w-[12rem] sm:h-[16rem] sm:mt-0"
                src="../images/tab-img2.png"
                alt=""
              />
              <StaticImage
                className=" w-[6rem] h-[12rem] mt-24 sm:mt-0 sm:w-[10rem] sm:h-[20rem]"
                src="../images/tab-img1.png"
                alt=""
              />
            </div>
          </div>
          {/* tab images for mobile end */}
        </div>
        {/* hero image for tab n desktop */}
        <div className="hidden absolute sm:inline-block sm:top-[20%] sm:right-0 sm:w-[8rem] sm:z-10 lg:right-[10rem] lg:w-[11rem]">
          <StaticImage src="../images/LogoVector.png" alt="logo" />
        </div>
        {/* hero image for tab n desktop end */}
      </BackgroundGradientAnimation>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

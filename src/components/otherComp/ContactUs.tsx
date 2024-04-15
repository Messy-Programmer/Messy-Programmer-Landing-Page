import * as React from "react";
import { SignupFormDemo } from "./FormComp";
import { IoMail } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "gatsby";
import { Spotlight } from "../ui/Spotlight";
const ContactUs = () => {
  return (
    <div className="bg-[#051405] xl:py-40 ">
      {/* down div contains the whole context  */}
      <div className="text-slate-100 text-center px-4">
        <h1 className="text-3xl gradient-txt font-medium sm:text-4xl xl:text-7xl xl:p-5">
          Did you just said TECH!
        </h1>
        <p className="text-sm font-extralight mt-4 xl:text-lg xl:font-light">
          Ready to take your business to the next level? Contact us today to
          discuss your project requirements and get started!
        </p>
      </div>
      <div className="px-4 sm:flex sm:flex-col sm:items-center lg:flex-row lg:gap-6 xl:max-w-[80rem] xl:mx-auto xl:mt-10">
        {/* first item  */}
        <div
          id="first-item"
          className="rounded-xl border-2 border-[#1b321b] p-8 relative mt-5 bg-grid-black sm:w-[50%]"
        >
          <Spotlight
            className="top-[2rem] w-[40rem] left-[6rem] md:left-[1rem] md:-top-[1rem] sm:w-[60rem] lg:w-[60rem]"
            fill="green"
          />

          <div className="z-10 relative">
            <div className="text-slate-100">
              <h1 className="gradient-txt font-medium text-lg">
                Contact Information
              </h1>
              <p className="text-[.7rem]">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="flex gap-2 items-center justify-start text-slate-100 mt-5">
              <IoMail className="text-lg" />
              <div className=" font-extralight text-sm">
                contact@messyprogrammer.in
              </div>
            </div>
            <div className="flex justify-start gap-2 md:px-0 md:gap-1 mt-3">
              <FaBuilding className="text-slate-100" />
              <p className="text-slate-100 font-extralight text-xs md:w-[14rem]">
                CoochBihar, West Bengal, India
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-8 md:mt-[30px] md:justify-start">
              <Link to="#" className="text-white text-xl">
                <TiSocialLinkedin />
              </Link>
              <Link to="#" className="text-white text-xl">
                <TiSocialInstagram />
              </Link>
              <Link to="#" className="text-white text-xl">
                <TiSocialFacebookCircular />
              </Link>
              <Link to="#" className="text-white text-xl">
                <TiSocialYoutube />
              </Link>
            </div>
            <div className="mt-4">
              <StaticImage src="../../images/contactImage.png" alt="" />
            </div>
          </div>
          <div className="z-0 absolute inset-0 contact-bg rounded-xl"></div>
        </div>
        {/* second item */}
        <div id="second-item" className="mt-4 sm:w-[50%]">
          <div className="rounded-xl border-2 border-[#1b321b] p-2 bg-gradient-to-br from-[#0c240c] to-[#081a08] xl:p-0">
            <SignupFormDemo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

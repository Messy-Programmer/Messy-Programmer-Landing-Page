import * as React from "react";
import { IoMail } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { Spotlight } from "../ui/Spotlight";
import BookMeeting from "../ui/bookmeeting";
const ContactUs = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-[#0d270d] to-[#051405] xl:py-40 "
    >
      {/* down div contains the whole context  */}
      <div className="text-slate-100 text-center px-4">
        <h1 className="text-3xl gradient-txt font-medium sm:text-4xl xl:text-6xl xl:p-5">
          Unlock Your Project's Potential with a Free Discovery Meeting
        </h1>
        <p className="text-sm font-extralight mt-4 xl:text-sm xl:font-light">
          Join us for a free session to discuss your project ideas and
          requirements. Share your vision, receive expert feedback, and get a
          clear roadmap to bring your ideas to life
        </p>
      </div>
      <div className="px-4 sm:flex sm:flex-col sm:items-center lg:flex-row lg:gap-6 xl:max-w-[80rem] xl:mx-auto xl:mt-10">
        {/* first item  */}
        <div
          id="first-item"
          className="rounded-xl border-2 border-[#1b321b] p-8 relative mt-5 bg-grid-black sm:w-[50%] lg:p-16 xl:p-[2.5rem]"
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
              <a
                target="blank"
                href="https://www.linkedin.com/company/messyprogrammer"
                className="text-white text-xl"
              >
                <TiSocialLinkedin />
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/messyprogrammer/"
                className="text-white text-xl"
              >
                <TiSocialInstagram />
              </a>
              <a
                target="blank"
                href="http://facebook.com/mssyprogrammer"
                className="text-white text-xl"
              >
                <TiSocialFacebookCircular />
              </a>
              <a
                target="blank"
                href="https://www.youtube.com/@messyprogrammer"
                className="text-white text-xl"
              >
                <TiSocialYoutube />
              </a>
            </div>
            <div className="mt-4">
              <StaticImage
                src="../../images/contactImage.png"
                alt="contact-us"
                placeholder="blurred"
                layout="constrained"
                loading="eager"
                quality={100}
              />
            </div>
          </div>
          <div className="z-0 absolute inset-0 contact-bg rounded-xl"></div>
        </div>
        {/* second item */}
        <div id="second-item" className="mt-4 sm:w-[50%] h-full">
          {/* <SignupFormDemo /> */}
          <BookMeeting />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

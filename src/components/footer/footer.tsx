import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaBuilding } from "react-icons/fa";

const Footer = () => (
  <div className="bg-[#051405] py-14">
    <div className="w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black relative flex items-center justify-center bg-[#0d260d] md:justify-around">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gradient-to-r from-[#051505] from-1% via-[rgba(74,114,74,0)] via-800% to-[#051505] to-99%"></div>
      <div>
        {/* this is main footer context container */}
        <div className="flex text-center px-3 flex-col mt-12 mb-14 items-center md:flex-row md:text-left md:items-start md:justify-between md:gap-8 md:pr-0">
          <div className="z-10 md:flex-[.8] ">
            <h2 className="text-slate-100 text-xl sm:text-lg">
              Start Delivering better customer outcomes today
            </h2>
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="messyProgrammerLogo"
              className="z-10 mt-8 w-48 md:mt-[30px]"
              placeholder="blurred"
              layout="constrained"
              loading="eager"
              quality={100}
            />
            {/* icon section  */}
            <div className="flex justify-center gap-2 mt-8 md:mt-[30px] md:justify-start">
              <Link
                target="blank"
                to="https://www.linkedin.com/company/messyprogrammer"
                className="text-white text-xl"
              >
                <TiSocialLinkedin />
              </Link>
              <Link
                target="blank"
                to="https://www.instagram.com/messyprogrammer/"
                className="text-white text-xl"
              >
                <TiSocialInstagram />
              </Link>
              <Link
                target="blank"
                to="http://facebook.com/mssyprogrammer"
                className="text-white text-xl"
              >
                <TiSocialFacebookCircular />
              </Link>
              <Link
                target="blank"
                to="https://www.youtube.com/@messyprogrammer"
                className="text-white text-xl"
              >
                <TiSocialYoutube />
              </Link>
            </div>
          </div>
          {/* this is link section  */}
          <div className="flex flex-col gap-5 mt-5 sm:mt-0 sm:gap-7">
            <Link
              to="/privacypolicy"
              target="_blank"
              className="text-slate-100"
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsandcondition/"
              target="_blank"
              className="text-slate-100"
            >
              Terms & Conditions
            </Link>
            <Link to="/" target="_blank" className="text-slate-100">
              Copyright Notice
            </Link>
          </div>
          {/* this is the contact us section  */}
          <div className="relative mt-16 md:mt-0">
            <p className="text-[#1E951E] text-sm font-normal z-10">
              CONTACT US
            </p>
            <div className="flex flex-col">
              <Link
                to="mailto:contact@messyprogrammer.in"
                className="text-[#1E951E] text-sm font-bold z-10 mt-5"
              >
                contact@messyprogrammer.in
              </Link>
              <Link
                to="tel:+91 86176 38628"
                className="text-[#1E951E] text-sm font-bold z-10"
              >
                +91 86176 38628
              </Link>
            </div>
            <div className="flex justify-center px-9 mt-5 sm:items-center md:px-0 md:gap-1 ">
              <FaBuilding className="text-slate-100 sm:h-8" />
              <p className="text-slate-100 text-xs sm:text-[.7rem] sm:leading-3 md:w-[14rem]">
                Vaoal More, Koch Bihar, West Bengal, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;

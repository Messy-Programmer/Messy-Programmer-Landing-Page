import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
const WhyUs = () => {
  return (
    <div className="bg-[#051405] py-14 xl:py-[13rem]">
      <div className="sm:flex sm:items-center lg:px-16 xl:max-w-[85rem] xl:mx-auto xl:px-0 xl:gap-8">
        {/* bottom div is item one */}
        <div className="relative px-2 py-5 sm:w-[45%]">
          <StaticImage src="../../images/whyUs.png" alt="" />
        </div>
        {/* bottom div is item two */}
        <div className="px-5 text-slate-100 sm:w-[55%] xl:pr-[5rem]">
          <h1 className="text-3xl mt-2 lg:text-4xl xl:text-5xl">
            Why choosing us?
          </h1>
          <p className="text-sm font-extralight mt-4 leading-7 xl:text-base xl:leading-9">
            Quality IT services often come at a high cost, while low-cost
            alternatives can compromise on quality, leaving businesses
            struggling. At Messy Programmer, we bridge this gap by offering
            premium IT services at reasonable prices. How do we do it? By
            strategically setting up our business infrastructure in locations
            with lower living costs, we reduce our operational expenses. This
            enables us to deliver high-quality services without breaking the
            bank for our clients.
          </p>
          <div className="flex mt-4 justify-start">
            <Link
              to="#contact"
              className=" rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-4"
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyUs;

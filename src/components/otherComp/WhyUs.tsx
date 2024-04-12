import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
const WhyUs = () => {
  return (
    <div className="bg-[#051405] py-14">
      <div id="ex-7">
        {/* bottom div is item one */}
        <div className="relative px-2 py-5">
          <StaticImage src="../../images/exploreService7.png" alt="" />
        </div>
        {/* bottom div is item two */}
        <div className="px-5 text-slate-100">
          <h1 className="text-3xl mt-2">Tech Consultancy</h1>
          <p className="text-sm font-extralight mt-4">
            Leverage our expertise and industry insights to make informed
            technology decisions. Whether it's choosing the right tech stack or
            optimizing your IT infrastructure, we're here to help.
          </p>
          <div className="flex mt-4 justify-start">
            <Link
              to="/"
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

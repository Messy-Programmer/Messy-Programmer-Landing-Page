import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const ExploreService = () => {
  return (
    <div id="explore-service" className="bg-[#051405] py-20">
      {/* this div will contain the context  */}
      <div className="sm:px-6 ">
        <div className="text-slate-100 text-center px-1">
          <h1 className="text-3xl gradient-txt font-medium sm:text-4xl lg:text-5xl xl:text-7xl">
            Explore Services
          </h1>
          <p className="font-extralight mt-4 xl:font-light xl:text-lg">
            Browse through 8+ Tech Services and find the one that fits your
            needs.
          </p>
        </div>
        <div className="flex flex-col gap-20 mt-12 sm:mt-20 xl:items-center">
          <div
            id="ex-1"
            className="sm:flex sm:items-center sm:flex-row-reverse xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService1.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 rounded-md xl:mr-[12rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Simple landing pages to complex e-commerce platforms
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Website Development
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                From simple landing pages to complex e-commerce platforms, we
                design and develop stunning websites that captivate your
                audience and drive results.
              </p>
            </div>
          </div>

          <div
            id="ex-3"
            className="sm:flex sm:items-center  xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService3.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[20rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Custom internal business applications
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Custom Internal Business Application Development
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Boost efficiency and productivity with custom internal business
                applications tailored to your unique workflows and requirements.
              </p>
            </div>
          </div>
          <div
            id="ex-2"
            className="sm:flex sm:items-center sm:flex-row-reverse xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService2.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[20rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Custom web app development services
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Web App Development
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Harness the power of web technologies with our custom web app
                development services. We create intuitive and scalable web
                applications that streamline your business processes.
              </p>
            </div>
          </div>
          <div
            id="ex-4"
            className="sm:flex sm:items-center xl:max-w-[80.75rem]  xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService4.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[22rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Bespoke business automation tools
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Business Automation Tool Development
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Automate repetitive tasks and streamline operations with our
                bespoke business automation tools. Say goodbye to manual
                processes and hello to efficiency.
              </p>
            </div>
          </div>
          <div
            id="ex-5"
            className="sm:flex sm:items-center sm:flex-row-reverse xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService5.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[27rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  IOS mobile applications
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                IOS Mobile App Development
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Elevate your productivity with our intuitive iOS app, designed
                to streamline your tasks and boost efficiency. Experience
                boundless entertainment options with our cutting-edge iOS app,
                offering effortless access to captivating content for endless
                enjoyment.
              </p>
            </div>
          </div>
          <div
            id="ex-6"
            className="sm:flex sm:items-center xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService6.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[25rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Android mobile applications
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Android Mobile App Development
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Reach your customers on the go with our mobile app development
                services. We build user-friendly and feature-rich mobile
                applications that enhance your brand presence.
              </p>
            </div>
          </div>
          <div
            id="ex-7"
            className="sm:flex sm:items-center sm:flex-row-reverse xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService7.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[28rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Business workflows
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Business Workflow Design & Implementation
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Optimize your business workflows for maximum efficiency and
                effectiveness. Our experts analyze your processes and design
                tailored solutions to drive growth.
              </p>
            </div>
          </div>
          <div
            id="ex-8"
            className="sm:flex sm:items-center xl:max-w-[80.75rem] xl:gap-16"
          >
            {/* bottom div is item one */}
            <div className="relative px-10 py-16 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/Polygon.png" alt="" />
              <div className=" absolute size-[7rem] bottom-[33%] left-[33%] lg:size-[9rem] xl:left-[11.25rem]">
                <StaticImage src="../../images/logoCircle.png" alt="logo" />
              </div>
              {/* down div is 1st image  */}
              <div className="absolute size-[5.5rem] lg:size-[8.5rem] bottom-[68%] left-[38%] lg:bottom-[70%] lg:left-[37%]">
                <StaticImage src="../../images/icon.png" alt="" />
              </div>
              <div className="absolute size-[5.5rem] lg:size-[8.5rem] bottom-[46%] left-[3%]">
                <StaticImage src="../../images/icon.png" alt="" />
              </div>
              <div className="absolute size-[5.5rem] lg:size-[8.5rem] bottom-[46%] left-[70%]">
                <StaticImage src="../../images/icon.png" alt="" />
              </div>
              <div className="absolute size-[5.5rem] lg:size-[8.5rem] bottom-[11%] left-[13%] lg:bottom-[6%]">
                <StaticImage src="../../images/icon.png" alt="" />
              </div>
              <div className="absolute size-[5.5rem] lg:size-[8.5rem] bottom-[11%] left-[60%] lg:bottom-[6%]">
                <StaticImage src="../../images/icon.png" alt="" />
              </div>
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[17rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Skilled professionals to meet your needs
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Dedicated Tech Team for Your Business
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Scale your development team quickly and cost-effectively with
                our dedicated tech team services. From project management to
                coding, we provide skilled professionals to meet your needs.
              </p>
            </div>
          </div>
          <div
            id="ex-9"
            className="sm:flex sm:items-center sm:flex-row-reverse xl:max-w-[80.75rem] xl:gap-40"
          >
            {/* bottom div is item one */}
            <div className="relative px-2 py-5 sm:w-[50%] xl:w-[40%]">
              <StaticImage src="../../images/exploreService9.png" alt="" />
            </div>
            {/* bottom div is item two */}
            <div className="px-5 text-slate-100 sm:w-[50%] sm:px-2 xl:w-[55%]">
              <div className="text-xs bg-gradient-to-r from-[#004500] to-[#286528] py-1 px-2 mr-[5rem] rounded-md xl:mr-[20rem]">
                <p className=" text-[10px] font-extralight xl:text-base">
                  Choosing the right tech stack with us
                </p>
              </div>
              <h1 className="text-3xl mt-2 gradient-txt sm:font-medium lg:text-5xl">
                Tech Consultancy
              </h1>
              <p className="text-sm font-extralight mt-4 xl:text-base xl:leading-8 tracking-wider">
                Leverage our expertise and industry insights to make informed
                technology decisions. Whether it's choosing the right tech stack
                or optimizing your IT infrastructure, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

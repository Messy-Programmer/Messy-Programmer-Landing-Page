import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import LetsTalk from "./letstalk";
const BookMeeting = () => {
  return (
    <div className="bg-grid-black border-[#1b321b] border-2 rounded-xl relative z-5 lg:py-7 xl:py-6">
      <div className="flex gap-3 h-full flex-col  text-start leading-5 lg:gap-0 lg:px-8 z-10 relative text-slate-100 p-8">
        <p className="gradient-txt lg:mb-10 xl:mb-14">BOOK YOUR FIRST</p>
        <h2 className="gradient-txt font-medium text-4xl lg:font-extrabold lg:text-6xl">
          Appointment
        </h2>
        <h2 className="text-4xl lg:font-extrabold lg:mb-14 lg:text-6xl">
          Free
        </h2>
        <p className="text-[.7rem] gradient-txt text-center lg:text-xs lg:font-semibold lg:mb-10 xl:mb-14">
          You will receive a confirmation message after submitting the form, and
          our executive will get back to you within a day to confirm the
          meeting.
        </p>
        <div className="flex w-full justify-center">
          <LetsTalk
            text={"BOOK APPOINTMENT"}
            className={
              " text-slate-100 text-xs align-middle rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-3 w-[17rem] lg:min-w-[25rem] xl:min-w-[30rem]"
            }
          />
        </div>
      </div>
      <div className="z-0 absolute inset-0 contact-bg rounded-xl"></div>
    </div>
  );
};
export default BookMeeting;

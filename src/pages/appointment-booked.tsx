import React from "react";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import submitGif from "../images/Submit-gif.gif";
const SubmitPage = () => {
  return (
    <div
      id="container-SubmitPage"
      className="submit-bg py-10 2xl:flex 2xl:justify-center 2xl:items-center xl:py-20 "
    >
      <div id="inner-container" className="text-slate-100 xl:px-60 lg:px-32">
        <div id="gif">
          <div className="flex justify-center">
            <img
              src={submitGif}
              alt="gif"
              className="size-24 p-4 bg-green-700/20 rounded-full"
            />
          </div>
        </div>
        <div id="heading-submit" className="text-center px-2 mb-8">
          <h1 className="gradient-txt text-4xl font-semibold mb-4">
            Your booking has been submitted
          </h1>
          <p className="font-extralight text-sm">
            Messy Programmer still needs to confirm or reject the bookings.
          </p>
        </div>
        <div
          id="grid-box"
          className="border-2 rounded-2xl border-t-[#2E4F2E] border-l-[#2E4F2E] border-b-[#112311] border-r-[#112311] px-4 py-4 gap-4 mx-2 mb-8 relative z-0 bg-grid-black overflow-hidden"
        >
          <div className="submit-bg1 z-20 h-full w-full absolute inset-0"></div>
          <div className="submit-bg2 z-10 h-full w-full absolute inset-0"></div>
          <table className="table-auto z-40 relative border-separate sm:mx-auto sm:border-spacing-x-4 sm:border-spacing-y-4 lg:border-spacing-x-6 lg:border-spacing-y-8">
            <tbody>
              <tr>
                <td className="align-top">
                  <HiMiniQuestionMarkCircle className="size-5 inline mr-2" />
                  What
                </td>
                <td>
                  Discovery meeting between Messy Programmer and Suman Das
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <IoCalendar className="size-5 inline mr-2" />
                  When
                </td>
                <td>
                  Tuesday, July 23, 2024 17:00 - 17:30 (India Standard Time)
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <MdPeopleAlt className="size-5 inline mr-2" />
                  Who
                </td>
                <td>
                  Messy Programmer
                  <p>meet@messyprogrammer.in</p>
                  <p>Suman Das</p>
                  <p>test@gmail.com</p>
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <FaLocationDot className="size-5 inline mr-2" />
                  Where
                </td>
                <td>
                  Web conferencing details to follow in the confirmation email.
                </td>
              </tr>
              <tr>
                <td className="flex">
                  <FaExclamationCircle className="size-5 inline mr-2" />
                  Additional notes
                </td>
                <td className="align-top">additional note</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>Project Requirements</td>
              </tr>
              <tr>
                <td>+91 8989898989</td>
                <td>test project requirement</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="make-changes" className="text-center">
          <p className="mb-5">Need to make a change?</p>
          <div className="flex justify-center gap-8 ">
            <a href="#" className="px-4 py-1 rounded-full bg-gray-800">
              Reschedule
            </a>
            <a href="#">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubmitPage;

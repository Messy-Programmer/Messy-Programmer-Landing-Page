import React, { useEffect, useState } from "react";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import submitGif from "../images/Submit-gif.gif";
import { SparklesCore } from "../components/ui/sparkles";
const SubmitPage = () => {
  const [email, setEmail] = useState<string | null>("");
  const [istStartTime, setStartTime] = useState<string | null>("");
  const [istEndTime, setEndTime] = useState<string | null>("");
  function convertToIST(utcTime: any) {
    const utcDate = new Date(utcTime);
    const offset = utcDate.getTimezoneOffset() * 60000;
    const istTime = new Date(
      utcDate.getTime() + offset + (5 * 60 + 30) * 60000
    );
    const options = { timeZone: "Asia/Kolkata", hour12: true };
    return istTime.toLocaleString("en-US", options);
  }
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const startTime = params?.get("startTime");
    const endTime = params?.get("endTime");
    setEmail(params.get("email"));
    const IstStart = convertToIST(startTime);
    const IstEnd = convertToIST(endTime);
    setStartTime(IstStart);
    setEndTime(IstEnd);
    console.log("s-time", startTime);
  });

  return (
    <>
      <div className="h-screen relative w-full bg-[#051405] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.7}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#39AC39"
          />
        </div>
        <div
          id="container-SubmitPage"
          className="submit-bg py-10 2xl:flex 2xl:justify-center 2xl:items-center xl:py-20 3xl:py-[50rem] 3xl:w-full sm:h-full sm:w-full"
        >
          <div
            id="inner-container"
            className="text-slate-100 xl:px-60 lg:px-32"
          >
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
              className="border-2 rounded-2xl border-t-[#2E4F2E] border-l-[#2E4F2E] border-b-[#112311] border-r-[#112311] px-4 py-4 gap-4 mx-2 mb-8 relative z-0 bg-grid-black overflow-hidden sm:mx-14 xl:mx-20"
            >
              <div className="submit-bg1 z-20 h-full w-full absolute inset-0"></div>
              <div className="submit-bg2 z-10 h-full w-full absolute inset-0"></div>
              <table className="table-auto z-40 relative border-separate border-spacing-x-2 border-spacing-y-2  sm:mx-auto sm:border-spacing-x-8 sm:border-spacing-y-4 lg:border-spacing-x-6 lg:border-spacing-y-8 xl:border-spacing-x-16">
                <tbody>
                  <tr>
                    <td className="align-top font-semibold">
                      <HiMiniQuestionMarkCircle className="size-5 inline mr-2" />
                      What
                    </td>
                    <td className="font-extralight">
                      Discovery meeting between Messy Programmer and Suman Das
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top flex font-semibold">
                      <IoCalendar className="size-5 inline mr-2" />
                      When
                    </td>
                    <td className="font-extralight">
                      Starts -{" "}
                      <span className="text-lime-500"> {istStartTime}</span>{" "}
                      End- <span className="text-red-400"> {istEndTime}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top flex font-semibold">
                      <FaLocationDot className="size-5 inline mr-2" />
                      Where
                    </td>
                    <td className="font-extralight">
                      Google meet link will be sent to your confirmation email-{" "}
                      <span className="text-lime-500">{email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex font-semibold"></td>
                    <td className="font-extralight text-right text-lime-500 hover:text-lime-300 transition duration-300">
                      <a href="/">← Back to Home</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubmitPage;

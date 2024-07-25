import React from "react";
import LetsTalk from "../ui/letstalk";
const AppointMent = () => {
  return (
    <div id="container-Appointment" className="my-24 lg:mx-16">
      <div id="heading" className=" sm:px-10 lg:px-28">
        <div className="text-slate-100 text-center px-2 mb-14 xl:px-48">
          <h1 className="gradient-txt font-semibold text-5xl mb-4 sm:leading-[3.5rem] z-40">
            Every Idea is different
          </h1>
          <p className="font-extralight z-40">
            Join us for a free session to discuss your project ideas and
            requirements. Share your vision, receive expert feedback, and get a
            clear roadmap to bring your ideas to life
          </p>
        </div>
      </div>
      <div id="grid-box" className="px-2 sm:px-4">
        <div className="text-slate-100 px-2 py-6 flex flex-col items-center text-center rounded-xl border-2 border-t-green-900/55 border-l-green-950/55 border-r-green-950/35 border-b-green-950/35 sm:py-10 lg:px-28 xl:px-60 bg-grid-black relative z-0">
          <p className="font-extralight z-40">BOOK YOUR FIRST</p>
          <h1 className="text-5xl gradient-txt font-semibold z-40">
            Appointment Free
          </h1>
          <p className="font-extralight py-8 z-40">
            You will receive a confirmation mail after booking an appointment.
            Once confirmed, you can join using the shared meeting link on the
            selected date and time.
          </p>
          <LetsTalk
            text={"Book Appointment"}
            className={
              "text-slate-100 rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-3 px-3 lg:px-6 w-52 z-50"
            }
          />
          {/* layer 1  */}
          <div className="absolute appointment-bg inset-0 w-full z-[3] h-full"></div>
          <div className="absolute appointment-bg1 inset-0 w-full z-[2] h-full"></div>
        </div>
      </div>
    </div>
  );
};
export default AppointMent;

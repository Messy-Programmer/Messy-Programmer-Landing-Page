import React from "react";
import LetsTalk from "../ui/letstalk";
const BookAppointment = () => {
  return (
    <div className="fixed bottom-3 right-2 sm:bottom-8 sm:right-5 z-50 ">
      <LetsTalk
        text={"Book Free Appointment"}
        className={"bg-[#050f05] py-2 px-4 rounded-2xl text-lime-100"}
      />
    </div>
  );
};
export default BookAppointment;

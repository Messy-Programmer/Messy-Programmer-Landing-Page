import * as React from "react";

function StatsComponent() {
  return (
    <div className="bg-[#051405]">
      {/* down this will be container for whole section  */}
      <div>
        {/* bottom div for first container  */}
        <div id="first-continer">
          <div>
            <div className=" rounded-full border-[1px] border-[#FFFFFF] text-slate-100 px-8 py-5 text-center">
              Working History 📜
            </div>
            <h1 className="gradient-txt text-4xl">
              Explore Our Impressive Stats
            </h1>
            <p className="gradient-both-txt">
              We take pride in our commitment to excellence and our dedication
              to our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatsComponent;

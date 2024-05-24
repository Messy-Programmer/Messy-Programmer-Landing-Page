import { motion } from "framer-motion";
import { Link } from "gatsby";
import * as React from "react";
import { AnimatedCounter } from "../ui/countup";

const StatsComponent = () => {
  return (
    <div className="bg-[#051405] lg:flex justify-center">
      {/* down this will be container for whole section  */}
      <div className="text-center sm:flex sm:text-left sm:px-10 sm:py-32 lg:max-w-[750px] xl:max-w-[70rem] xl:gap-14">
        {/* down div for first container  */}
        <div id="first-container">
          <div className="pt-[7rem] px-9 sm:pt-0 ">
            <div className=" rounded-full border-[1px] border-[#FFFFFF] py-2 text-center mx-6 sm:w-[12rem] sm:mx-0">
              <p className="text-slate-100">Working History 📜</p>
            </div>
            <h1 className="gradient-txt text-4xl px-4 mt-8 sm:pl-0 xl:text-7xl">
              Explore Our Impressive Stats
            </h1>
            <p className="text-slate-100 mb-8 mt-5 xl:text-lg xl:font-light">
              We take pride in our commitment to excellence and our dedication
              to our success.
            </p>
            <Link
              to="/"
              className="rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 px-4 py-2 text-slate-100"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* down div is for number card container */}
        <div className="flex flex-col items-center gap-4 mt-16 sm:mt-0">
          {/* first two card container */}
          <div className="gap-4 flex flex-col sm:flex-row">
            <motion.div
              className="text-slate-100 size-[12rem] bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center flex flex-col justify-center rounded-xl border-[1.5px] border-t-[#284528] border-l-[#284528] border-b-[#112311] border-r-[#112311] [--tx-from:9rem] [--tx-to:0rem] sm:[--tx-from:15rem] sm:[--tx-to:0rem]"
              initial={{ x: "var(--tx-from)", opacity: 0 }}
              whileInView={{ x: "var(--tx-to)", opacity: 1 }}
            >
              <div className="gradient-txt text-6xl mb-2">
                <AnimatedCounter from={0} to={100} />+
              </div>
              <h2>Completed Projects</h2>
            </motion.div>
            <motion.div
              className="text-slate-100 size-[12rem] bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center flex flex-col justify-center rounded-xl border-[1.5px] border-t-[#284528] border-l-[#284528] border-b-[#112311] border-r-[#112311] [--tx-from:-9rem] [--tx-to:0rem] sm:[--tx-from:10rem] sm:[--tx-to:0rem]"
              initial={{ x: "var(--tx-from)", opacity: 0 }}
              whileInView={{ x: "var(--tx-to)", opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="gradient-txt text-6xl mb-2">
                <AnimatedCounter from={0} to={200} />+
              </div>
              <h2>Completed Projects</h2>
            </motion.div>
          </div>
          {/* last two card container */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.div
              className="text-slate-100 size-[12rem] bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center flex flex-col justify-center rounded-xl border-[1.5px] border-t-[#284528] border-l-[#284528] border-b-[#112311] border-r-[#112311] [--tx-from:9rem] [--tx-to:0rem] sm:[--tx-from:15rem] sm:[--tx-to:0rem]"
              initial={{ x: "var(--tx-from)", opacity: 0 }}
              whileInView={{ x: "var(--tx-to)", opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="gradient-txt text-6xl mb-2">
                <AnimatedCounter from={0} to={300} />+
              </div>
              <h2>Completed Projects</h2>
            </motion.div>
            <motion.div
              className="text-slate-100 size-[12rem] bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center flex flex-col justify-center rounded-xl border-[1.5px] border-t-[#284528] border-l-[#284528] border-b-[#112311] border-r-[#112311] [--tx-from:-9rem] [--tx-to:0rem] sm:[--tx-from:10rem] sm:[--tx-to:0rem]"
              initial={{ x: "var(--tx-from)", opacity: 0 }}
              whileInView={{ x: "var(--tx-to)", opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="gradient-txt text-6xl mb-2">
                <AnimatedCounter from={0} to={400} />+
              </div>
              <h2>Completed Projects</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsComponent;

import React, { ReactNode, useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useMeasure from "react-use-measure";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";

export function InfiniteMovingImage() {
  let [myDiv, { width }] = useMeasure();
  let xTranslate = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;
    controls = animate(xTranslate, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      // repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  });
  return (
    <div className="pb-[4rem] relative">
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 flex gap-12 h-[4rem] bg-lime-600 items-center justify-center w-[50rem]"
          ref={myDiv}
          style={{ x: xTranslate }}
        >
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
          <div className="">
            <StaticImage
              src="../../images/messyProgrammerLogo.png"
              alt="logo"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

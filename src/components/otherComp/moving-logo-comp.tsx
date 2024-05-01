"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingLogo } from "../ui/moving-logo";
import dps from "../../images/dps.png";
import TheStreamers from "../../images/TheStreamers.png";
import AdultFamilyHomes from "../../images/AdultFamilyHomes.png";
import DreamDesignLabs from "../../images/DreamDesignLabs.png";

export function InfiniteMovingLogoComp() {
  return (
    <div className="h-[10rem] flex flex-col antialiased bg-[#051405] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingLogo items={imageLink} direction="right" speed="slow" />
    </div>
  );
}

const imageLink = [
  { img: dps, link: "github.com", name: "DPS" },
  { img: TheStreamers, link: "github.com", name: "TheStreamers" },
  { img: AdultFamilyHomes, link: "github.com", name: "AdultFamilyHomes" },
  { img: DreamDesignLabs, link: "github.com", name: "DreamDesignLabs" },
];

import React from "react";
import { InfiniteMovingLogo } from "../ui/moving-logo";
import dps from "../../images/dps.png";
import TheStreamers from "../../images/TheStreamers.png";
import AdultFamilyHomes from "../../images/AdultFamilyHomes.png";
import DreamDesignLabs from "../../images/DreamDesignLabs.png";
import SaaSiest from "../../images/saasiestjobs.png";
import Legal from "../../images/Legal_Intake_Pros.png";
import Sperse from "../../images/Sperse.png";
import Chargekeep from "../../images/ChargeKeepLogoLarge.png";
import Linka from "../../images/Linka-Transparent-Logotype-2.png";
import Upgrade from "../../images/upgrade.png";
import Alpha from "../../images/Alpha.png";
import Click from "../../images/Click.webp";
import Fuel from "../../images/fuelchef.png";
import Policymakr from "../../images/policy.png";

export function InfiniteMovingLogoComp() {
  return (
    <div className="h-[11rem] sm:h-[20rem] flex flex-col antialiased items-center justify-center relative overflow-hidden z-0 mt-9">
      <h2 className="text-slate-100 text-5xl gradient-txt font-semibold lg:text-5xl xl:text-7xl mb-5">
        Our Partners
      </h2>
      <InfiniteMovingLogo items={imageLink} direction="right" speed="slow" />
    </div>
  );
}

const imageLink = [
  { img: dps, link: "https://www.dpsjhansi.in/", name: "DPS" },
  { img: TheStreamers, link: "github.com", name: "The Streamers" },
  { img: AdultFamilyHomes, link: "github.com", name: "Adult Family Homes" },
  {
    img: DreamDesignLabs,
    link: "https://dreamdesignlabs.com/",
    name: "Dream Design Labs",
  },
  {
    img: SaaSiest,
    link: "https://saasiestjobs.com/",
    name: "SaaSiest Jobs",
  },
  {
    img: Legal,
    link: "https://www.legalintakepros.com/",
    name: "Legal Intake Pros",
  },

  {
    img: Sperse,
    link: "https://www.sperse.com/",
    name: "Sperse",
  },

  {
    img: Chargekeep,
    link: "https://www.chargekeep.com/",
    name: "Chargekeep",
  },
  {
    img: Linka,
    link: "http://linka.ai/",
    name: "Linka",
  },
  {
    img: Upgrade,
    link: "https://upgrade.chat/",
    name: "Upgrade.chat",
  },
  {
    img: Alpha,
    link: "https://alphacyclesmiami.com/",
    name: "Alpha Cycles",
  },
  {
    img: Click,
    link: "https://www.clickmidas.com.br/",
    name: "Click Midas",
  },
  {
    img: Fuel,
    link: "https://fuelchef.com/",
    name: "Fuel Chef",
  },
  {
    img: Policymakr,
    link: "https://www.policymakr.com/",
    name: "Policymakr",
  },
];

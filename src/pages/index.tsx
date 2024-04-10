import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import HeroText from "../components/otherComp/heroText";
import { BackgroundBeams } from "../components/ui/background-beam";
import { StaticImage } from "gatsby-plugin-image";
import { InfiniteMovingLogoComp } from "../components/otherComp/moving-logo-comp";
import StatsComponent from "../components/otherComp/ourStats";
import { EverVaultCardComp } from "../components/otherComp/EverVaultCardComp";
import MyComponent from "../components/otherComp/text";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar></NavBar>
      <BackgroundGradientAnimation>
        <HeroText />
      </BackgroundGradientAnimation>
      <div className="hidden relative bg-gradient-to-b from-[#0d270d] to-[#051405] md:inline-block py-24 px-20">
        <div className="flex">
          <div>
            <StaticImage src="../images/projectConsole.png" alt="" />
          </div>
          <div className="">
            <StaticImage src="../images/projectDev.png" alt="" />
          </div>
          <div className="flex flex-col ">
            <StaticImage src="../images/projectCode.png" alt="" />
            <StaticImage src="../images/projectTerminal.png" alt="" />
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <InfiniteMovingLogoComp />
      <StatsComponent />
      {/* <EverVaultCardComp /> */}
      <MyComponent />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

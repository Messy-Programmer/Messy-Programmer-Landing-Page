import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

import HeroText from "../components/otherComp/heroText";
import { BackgroundBeams } from "../components/ui/background-beam";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar></NavBar>
      <BackgroundGradientAnimation>
        <HeroText />
      </BackgroundGradientAnimation>
      <div className="relative hidden md:inline-block bg-gradient-to-b from-[#0d270d] to-[#051405] mix-blend-multiply">
        <div className="flex py-36 px-20 w-[full] lg:px-24 lg:py-40">
          <div>
            <StaticImage src="../images/projectConsole.png" alt="" />
          </div>
          <div>
            <StaticImage src="../images/projectDev.png" alt="" />
          </div>
          <div className="flex flex-col">
            <StaticImage src="../images/projectCode.png" alt="" />
            <StaticImage src="../images/projectTerminal.png" alt="" />
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

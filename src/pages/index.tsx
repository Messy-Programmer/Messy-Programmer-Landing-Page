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
import { ExploreService } from "../components/otherComp/ExploreService";
import { TabsDemo } from "../components/otherComp/TabComp";
import WhyUs from "../components/otherComp/WhyUs";
import { Testimonials } from "../components/otherComp/Testimonial";
import ContactUs from "../components/otherComp/ContactUs";
import Loading from "../components/otherComp/Loading";
import { useState, useEffect } from "react";
const IndexPage: React.FC<PageProps> = () => {
  const delay = 5;
  const [IsLoading, SetLoading] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => SetLoading(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  });

  if (IsLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden">
      <NavBar></NavBar>
      <BackgroundGradientAnimation>
        <HeroText />
      </BackgroundGradientAnimation>
      <div className="hidden relative bg-gradient-to-b from-[#0d270d] to-[#051405] md:inline-block py-24 px-20 w-full -z-10">
        <div>
          <div className="flex lg:gap-12 xl:max-w-[70rem] xl:mx-auto">
            <div>
              <StaticImage src="../images/projectConsole.png" alt="" />
            </div>
            <div className="">
              <StaticImage src="../images/projectDev.png" alt="" />
            </div>
            <div className="flex flex-col lg:gap-3 xl:gap-4">
              <StaticImage src="../images/projectCode.png" alt="" />
              <StaticImage src="../images/projectTerminal.png" alt="" />
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <InfiniteMovingLogoComp />
      <StatsComponent />
      <EverVaultCardComp />
      <ExploreService />
      <TabsDemo />
      <WhyUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

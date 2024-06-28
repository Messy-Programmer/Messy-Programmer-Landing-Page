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
import { getCalApi } from "@calcom/embed-react";
import LetsTalk from "../components/ui/letstalk";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
const IndexPage: React.FC<PageProps> = () => {
  const delay = 5;
  let timer1: NodeJS.Timeout;
  const [IsLoading, SetLoading] = useState(true);
  useEffect(() => {
    timer1 = setTimeout(() => SetLoading(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  });

  if (IsLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden">
      <NavBar />
      <BackgroundGradientAnimation>
        <HeroText />
      </BackgroundGradientAnimation>
      <div className=" relative bg-gradient-to-b from-[#0d270d] to-[#051405] md:inline-block px-3 pb-12 lg:py-24 lg:px-12 w-full -z-10">
        <div>
          <div className="flex lg:gap-12 xl:max-w-[70rem] xl:mx-auto">
            <div>
              <StaticImage
                src="../images/projectConsole.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                loading="eager"
                quality={100}
              />
            </div>
            <div className="mt-8">
              <StaticImage
                src="../images/projectDev.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                loading="eager"
                quality={100}
              />
            </div>
            <div className="mt-16 flex flex-col lg:gap-3 xl:gap-4">
              <StaticImage
                src="../images/projectCode.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                loading="eager"
                quality={100}
              />
              <StaticImage
                src="../images/projectTerminal.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                loading="eager"
                quality={100}
              />
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
      <div className="fixed bottom-3 right-2 sm:bottom-8 sm:right-5 z-50 ">
        <LetsTalk
          text={"Book Free Appointment"}
          className={" text-xs bg-[#050f05] py-2 px-4 rounded-xl text-lime-100"}
        />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <link
      rel="icon"
      type="image/x-icon"
      href="../image/logoCircle.png"
      data-gatsby-head="true"
    ></link>
    <meta
      property="og:image"
      content="https://messyprogrammer.in/../images/LogoVector1.png"
    />
    <meta
      property="og:image:secure_url"
      content="https://messyprogrammer.in/"
    />
    <meta
      name="description"
      content="Messy Programmer is your trusted partner for top-notch IT services at affordable prices. With a focus on quality and affordability, we specialize in providing a wide range of IT solutions tailored to meet your business needs."
    />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    <meta name="author" content="MessyProgrammer" />
    <meta name="theme-color" content="#051405" />
    <title>Messy Programmer</title>
  </>
);

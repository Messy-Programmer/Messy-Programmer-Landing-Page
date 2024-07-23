import * as React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { type HeadFC, type PageProps } from "gatsby";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import HeroText from "../components/otherComp/heroText";
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
import BookAppointment from "../components/otherComp/BookAppointment";
import logo from "../images/logo-transparent.png";
import $ from "jquery";
const IndexPage: React.FC<PageProps> = () => {
  const delay = 5;
  let timer1: NodeJS.Timeout;
  let timer2: NodeJS.Timeout;
  let hash: string;
  if (typeof window !== "undefined") {
    hash = window.location.hash;
  }
  const [IsLoading, SetLoading] = useState(true);
  useEffect(() => {
    timer1 = setTimeout(() => SetLoading(false), delay * 1000);
    if (hash) {
      timer2 = setTimeout(() => {
        $("html, body").animate({ scrollTop: $(hash)?.offset()?.top });
      }, 1000);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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
      <ContactUs />
      <InfiniteMovingLogoComp />
      <StatsComponent />
      <EverVaultCardComp />
      <ExploreService />
      <TabsDemo />
      <WhyUs />
      <Testimonials />
      <Footer />
      <BookAppointment />
      <div>
        <FloatingWhatsApp
          phoneNumber="+919933924693"
          accountName="Messy Programmer"
          avatar={logo}
          chatMessage="Whats your idea!"
          allowClickAway={true}
          className="[--w-bottom:4.6rem] sm:[--w-bottom:6rem] [--w-right:.5rem] sm:[--w-right:1.3rem]"
          buttonClassName="size-14 bg-gradient-to-tr from-green-700 to-lime-500"
          buttonStyle={{
            bottom: "var(--w-bottom)",
            right: "var(--w-right)",
          }}
          notification={false}
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

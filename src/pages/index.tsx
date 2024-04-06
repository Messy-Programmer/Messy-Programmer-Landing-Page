import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { PinContainer } from "../components/ui/3d-pin";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar></NavBar>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/20 filter-none">
            Gradients X Animations
          </p>
          <p>hi</p>
        </div>
      </BackgroundGradientAnimation>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

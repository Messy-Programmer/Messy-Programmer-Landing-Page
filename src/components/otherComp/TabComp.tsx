import React from "react";
import { Tabs } from "../ui/tabs";
import { StaticImage } from "gatsby-plugin-image";

export function TabsDemo() {
  const tabs = [
    {
      title: "Web App",
      value: "webapp",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-slate-100  bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center">
          <p className="text-xg font-semibold gradient-txt mt-4">
            Web App Development
          </p>
          <p className="text-xs font-light mt-3">
            Full-stack development, SEO optimization, and rigorous testing
            ensure functional websites.
          </p>
          <StaticImage
            src="../../images/web-app-demo.png"
            alt=""
            className="mt-6"
          />
        </div>
      ),
    },
    {
      title: "Automation",
      value: "automation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-slate-100  bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center">
          <p className="text-xg font-semibold gradient-txt mt-4">Automation</p>
          <p className="text-xs font-light mt-3">
            perform tasks with minimal human intervention, improving efficiency,
            accuracy, and consistency
          </p>
          <StaticImage
            src="../../images/automation-demo.png"
            alt=""
            className="mt-6"
            placeholder="blurred"
            layout="constrained"
            loading="eager"
            quality={100}
          />
        </div>
      ),
    },
    {
      title: "Android Dev",
      value: "android",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-slate-100  bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center">
          <p className="text-xg font-semibold gradient-txt mt-4">
            Android development
          </p>
          <p className="text-xs font-light mt-3">
            user interfaces, implementing functionality, testing for performance
            and compatibility, and deploying the app on the Google Play Store
            for users to download.
          </p>
          <StaticImage
            src="../../images/android-development.png"
            alt=""
            className="mt-6"
            placeholder="blurred"
            layout="constrained"
            loading="eager"
            quality={100}
          />
        </div>
      ),
    },
    {
      title: "IOS Dev",
      value: "ios",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-slate-100  bg-gradient-to-br from-[#0c240c] to-[#081a08] text-center">
          <p className="text-xg font-semibold gradient-txt mt-4">
            IOS development
          </p>
          <p className="text-xs font-light mt-3">
            We provide enhance product quality, safety, efficiency, and
            interoperability on a global scale
          </p>
          <StaticImage
            src="../../images/ios-development.png"
            alt=""
            className="mt-6"
            placeholder="blurred"
            layout="constrained"
            loading="eager"
            quality={100}
          />
        </div>
      ),
    },
  ];

  return (
    <div id="this is tab" className="px-5 pb-40 pt-24 bg-[#051405]">
      <div className="text-center text-slate-100">
        <h1 className="gradient-txt text-4xl font-medium xl:text-7xl">
          We shine here
        </h1>
        <p className="text-xs mb-8 mt-4 xl:text-base">
          Full-stack development, SEO optimization, and rigorous testing ensure
          functional websites.
        </p>
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

import React from "react";
import { Tabs } from "../ui/tabs";
import { StaticImage } from "gatsby-plugin-image";

export function TabsDemo() {
  const tabs = [
    {
      title: "Test",
      value: "test",
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
            src="../../images/exploreService1.png"
            alt=""
            className="mt-6"
          />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <StaticImage src="../../images/icon.png" alt="" />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <StaticImage src="../../images/icon.png" alt="" />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <StaticImage src="../../images/icon.png" alt="" />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <StaticImage src="../../images/icon.png" alt="" />
        </div>
      ),
    },
  ];

  return (
    <div id="this is tab" className="px-5 pb-40 pt-24 bg-[#051405]">
      <div className="text-center text-slate-100">
        <h1 className="gradient-text text-4xl">Web App Development</h1>
        <p className="text-xs mb-8 mt-4">
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

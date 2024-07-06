import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

const CopyrightNotice = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-screen relative w-full bg-[#051405] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.7}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#39AC39"
        />
      </div>
      <div>
        <div className=" text-slate-100 [&>h2]:text-xl  [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-8 [&>p]:text-xs py-8 px-8 lg:px-32 xl:px-56">
          <h1 className="text-3xl font-bold text-center mb-10">
            Copyright Notice
          </h1>
          <p>
            <span>
              &copy; {currentYear} Messy Programmer. All rights reserved.
            </span>
          </p>

          <p>
            The content, design, graphics, and other materials on this website
            are protected by copyright law and may not be reproduced,
            distributed, transmitted, displayed, or otherwise used without the
            prior written permission of Messy Programmer.
          </p>

          <p>
            This website serves as a landing page for Messy Programmer and does
            not necessarily represent the provision of our main services. Our
            main services are provided directly to clients through other means.
          </p>

          <p>
            Any unauthorized use of the materials on this website may violate
            copyright, trademark, and other applicable laws and could result in
            legal consequences.
          </p>

          <p>
            For inquiries regarding the use of materials from this website or to
            inquire about our services, please contact us at{" "}
            <a href="mailto:contact@messyprogrammer.in">
              contact@messyprogrammer.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightNotice;

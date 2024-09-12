import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

const TermsAndConditions = () => {
  return (
    <div className="h-full relative w-full bg-[#051405] flex flex-col items-center justify-center overflow-hidden rounded-md">
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
            Terms & Conditions
          </h1>

          <h2>Introduction</h2>
          <p>
            Welcome to Messy Programmer! These terms and conditions govern your
            use of our website and the services offered through it. By accessing
            or using our website, you agree to comply with these terms and
            conditions in full. If you disagree with any part of these terms,
            you must not use our website.
          </p>

          <h2>Service Description</h2>
          <p>
            Messy Programmer provides IT services including but not limited to
            web development, software development, mobile application
            development, and IT consulting. This website serves as a landing
            page for contacting Messy Programmer. The main services provided by
            Messy Programmer are delivered directly to clients through other
            means. By using this website, you agree that it is intended solely
            for informational purposes and for contacting Messy Programmer.
          </p>

          <h2>License to Use Website</h2>
          <p>
            You are hereby granted a limited license to access and use this
            website solely for the purpose of contacting Messy Programmer. This
            license does not include the right to use the website for any other
            commercial purposes.
          </p>

          <h2>User Responsibilities</h2>
          <p>
            You agree to use our services only for lawful purposes and in a
            manner consistent with all applicable laws and regulations. You are
            responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
          </p>

          <h2>Payment Terms</h2>
          <p>
            Payment for services provided by Messy Programmer shall be made in
            accordance with the terms outlined in the service agreement between
            Messy Programmer and the client.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All intellectual property rights in the services provided by Messy
            Programmer, including but not limited to software code, designs, and
            documentation, shall remain the property of Messy Programmer unless
            otherwise agreed upon in writing.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Messy Programmer shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly, arising out of
            your use of our services.
          </p>

          <p>
            While Messy Programmer endeavors to provide accurate and up-to-date
            information on this website, we make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the website or the information, products, services, or related
            graphics contained on the website for any purpose.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Messy Programmer, its
            officers, partners, directors, employees, and agents, from and
            against any and all claims, damages, obligations, losses,
            liabilities, costs, or debt, and expenses (including but not limited
            to attorney's fees) arising from your use of our services.
          </p>

          <h2>Termination</h2>
          <p>
            Messy Programmer reserves the right to terminate or suspend access
            to our services at any time, without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach
            these terms and conditions.
          </p>

          <h2>Governing Law & Jurisdiction</h2>
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of INDIA, and any disputes relating to
            these terms and conditions shall be subject to the exclusive
            jurisdiction of the courts located in Coochbehar.
          </p>

          <h2>Changes to Terms & Conditions</h2>
          <p>
            Messy Programmer reserves the right to modify or replace these terms
            and conditions at any time. Any changes will be effective
            immediately upon posting on our website. Your continued use of our
            website and services after any such changes constitutes your
            acceptance of the new terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

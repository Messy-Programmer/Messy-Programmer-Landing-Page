import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
const PrivacyPolicy = () => {
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
        <div>
          <div className=" text-slate-100 [&>h2]:text-xl  [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-8 [&>p]:text-xs py-8 px-8 lg:px-32 xl:px-56">
            <h1 className="text-3xl font-bold text-center mb-10">
              Privacy Policy
            </h1>

            <h2>Introduction</h2>
            <p>
              Messy Programmer ("we" or "us") is committed to protecting the
              privacy and security of your personal information. This privacy
              policy outlines how we collect, use, and protect the information
              you provide to us when you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              Any personal information collected through this website, such as
              through contact forms, is used solely for the purpose of
              responding to inquiries and communication with users. We do not
              collect personal information for the provision of Messy
              Programmer's main services, which are provided directly to clients
              through other means.
            </p>

            <h2>Use of Information</h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you, to process
              payments, and to comply with legal obligations.
            </p>
            <p>
              We may also use your information to send you promotional materials
              and other communications that may be of interest to you, but you
              can opt out of receiving these communications at any time.
            </p>

            <h2>Access to Third-Party Credentials</h2>
            <p>
              In order to provide certain services, Messy Programmer may require
              access to your credentials for third-party applications and
              services, such as email accounts, API keys, or other
              authentication tokens.
            </p>

            <h2>Data Retention</h2>
            <p>
              Personal information collected through this website is retained
              only for as long as necessary to respond to inquiries and
              communication with users. We do not store personal information
              collected through this website for the provision of Messy
              Programmer's main services.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You may also have the right to restrict or object to
              certain types of processing of your personal information.
            </p>
            <p>
              If you wish to exercise any of these rights, please contact us
              using the contact information provided below.
            </p>

            <h2>Changes to Privacy Policy</h2>
            <p>
              We reserve the right to modify or update this privacy policy at
              any time. Any changes will be effective immediately upon posting
              on our website. We encourage you to review this privacy policy
              periodically for any updates.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this privacy policy or
              our privacy practices, please contact us at{" "}
              <a
                href="mailto:contact@messyprogrammer.in"
                className="text-lime-500"
              >
                contact@messyprogrammer.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

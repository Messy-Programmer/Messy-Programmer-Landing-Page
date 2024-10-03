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
        <div className=" text-slate-100 [&>h2]:text-xl  [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-8 [&>h3]:pb-1 [&>h3]:font-semibold [&>p]:text-sm [&>p]:pb-4 py-8 px-8 lg:px-32 xl:px-56">
          <h1 className="text-3xl font-bold text-center mb-10">
            Refund & Cancellation Policy
          </h1>

          <h2>Refund & Cancellation Policy</h2>
          <p>
            At Messy Programmer, we prioritize client satisfaction and strive to
            deliver high-quality software solutions. However, we understand that
            circumstances may arise where a refund or cancellation is necessary.
            Please review the following policy regarding refunds and
            cancellations for our services.
          </p>

          <h2>1. Cancellation of Services</h2>
          <h3>&nbsp;&nbsp;* Before Project Commencement:</h3>
          <p>
            If a client wishes to cancel a project before any work has begun, a
            full refund of any payments made will be processed, excluding any
            administrative or consultation fees.
          </p>
          <h3>&nbsp;&nbsp;* During Project Development:</h3>
          <p>
            If the project is canceled after work has commenced, the client will
            be billed for the work completed up to the date of cancellation. A
            detailed breakdown of hours worked and services rendered will be
            provided.
          </p>
          <h3>&nbsp;&nbsp;* After Project Completion:</h3>
          <p>
            Once a project is completed and delivered, cancellations are no
            longer accepted.
          </p>
          <h2>2. Refund Policy</h2>
          <h3>&nbsp;&nbsp;* Deposits/Advance Payments:</h3>
          <p>
            All deposits or advance payments are non-refundable unless a
            cancellation request is made before the commencement of the project,
            as outlined in the "Cancellation of Services" section.
          </p>
          <h3>&nbsp;&nbsp;* Project Delay Refund:</h3>
          <p>
            If we fail to meet mutually agreed-upon project timelines without
            prior notification, clients are entitled to request a refund for
            incomplete deliverables.
          </p>
          <h3>&nbsp;&nbsp;* Post-Delivery Refund:</h3>
          <p>
            Due to the nature of custom software development, we do not offer
            refunds once the software has been delivered and accepted by the
            client.
          </p>
          <h3>&nbsp;&nbsp;* Change of Mind:</h3>
          <p>
            No refunds will be provided in cases where the client changes their
            mind after the project has been initiated or delivered.
          </p>

          <h2>3. Termination by Messy Programmer</h2>
          <p>
            In rare instances where Messy Programmer may need to cancel a
            project due to unforeseen circumstances, we will provide a full
            refund of any payments made. Clients will also be given all work
            completed up to the point of cancellation.
          </p>

          <h2>4. Scope Changes and Adjustments</h2>
          <p>
            If the client requests a change in the project scope after the
            initial agreement, additional charges may apply. Cancellation or
            refunds will not be provided in such cases, and the adjusted costs
            will be billed accordingly.
          </p>

          <h2>5. Warranty & Maintenance</h2>
          <p>
            &nbsp;&nbsp;* We offer a limited warranty for all completed software
            projects, where any bugs or issues reported within 30 days of
            delivery will be fixed at no additional cost. Refunds will not be
            applicable under the warranty.
          </p>
          <p>
            &nbsp;&nbsp;* Maintenance contracts may be cancelled with 30 days’
            notice, but refunds will be provided only for unused months of
            prepaid maintenance services.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            If the project involves third-party services, platforms, or
            integrations, we are not responsible for refunding any third-party
            service fees
          </p>

          <h2>7. Dispute Resolution</h2>
          <p>
            In the event of any dispute regarding payments, cancellations, or
            refunds, we encourage clients to contact us directly to resolve the
            issue. We will make reasonable efforts to reach a fair and amicable
            resolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

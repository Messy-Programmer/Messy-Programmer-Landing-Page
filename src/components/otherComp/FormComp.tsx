"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import { IconMailUp } from "@tabler/icons-react";

export function SignupFormDemo() {
  const [isSubmit, setSubmit] = useState(false);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const delay = 4;
    let timer: NodeJS.Timeout;
    let timer1: NodeJS.Timeout;

    timer = setTimeout(() => {
      setSubmit(false);
    }, delay * 1000);

    timer1 = setTimeout(() => {
      setError(false);
    }, delay * 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let frm = document.getElementsByName("form")[0];
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const key = "AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI";
    const token = "sn1su9Y62ezUqHupQSoUqZXuql04_BGS3ju0m_fihR0";
    let url = `https://chat.googleapis.com/v1/spaces/AAAA7L5QnB4/messages?key=${key}&token=${token}`;
    const header = {
      "Content-Type": "application/json",
    };
    const data = {
      text: `𝐍𝐚𝐦𝐞: ${name}\n𝐄𝐦𝐚𝐢𝐥:${email}\n𝐍𝐮𝐦𝐛𝐞𝐫: ${phone}\n𝐌𝐞𝐬𝐬𝐚𝐠𝐞: ${message}`,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
      });
      setSubmit(true);
    } catch (err) {
      if (err) {
        setError(true);
      }
    } finally {
      frm.reset();
    }
  };
  return (
    <div className=" relative max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 lg:p-0 xl:p-8 xl:max-w-[35rem] shadow-input ">
      {isSubmit && (
        <SubmitMessage msg="Your query is submitted" color="text-lime-500" />
      )}
      {isError && (
        <SubmitMessage
          msg={`Something went wrong. Please try again`}
          color="text-red-500"
        />
      )}
      <form name="form" className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="FullName"> Full Name</Label>
            <Input id="name" placeholder="Type Your name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="Phone"> Phone Number </Label>
            <Input id="phone" placeholder="Number" type="Number" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 relative">
          <Label htmlFor="textarea">Your message</Label>
          <textarea
            className="flex w-full border-none bg-[#0e270e] dark:bg-zinc-800 text-slate-100 shadow-input rounded-md px-3 py-2 text-sm  file:border-2 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-[#1b371b] dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 h-[7rem]"
            id="message"
            placeholder="Enter your message"
          />
          <BottomGradient />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-green-700 to-lime-500 w-full text-white rounded-xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Query &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-lime-100 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-green-300 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

type SubmitProp = {
  msg: string;
  color: string;
};
const SubmitMessage = ({ msg, color }: SubmitProp) => {
  return (
    <div className="absolute bg-white/0 w-auto inset-0 z-40 rounded-lg backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#051405] border-2 border-lime-950 rounded-xl flex items-center flex-col px-6 sm:px-14 py-12">
        <IconMailUp stroke={2} size={50} className={color} />
        <h3 className="text-slate-100">{msg}</h3>
      </div>
    </div>
  );
};

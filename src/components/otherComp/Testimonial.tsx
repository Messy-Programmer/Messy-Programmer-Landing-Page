import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import icon from "../../images/icon.png";
import stars from "../../images/stars.png";

export function Testimonials() {
  return (
    <div className="bg-[#051405]">
      <div className="text-slate-100 text-center pt-8">
        <h1 className="gradient-txt text-3xl xl:text-7xl font-medium">
          What Our Clients Are Saying
        </h1>
        <p className="text-base xl:mt-6">
          Our mission is to empower companies with the Tech!
        </p>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#051405] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    title: "Title",
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Name",
    from: "from",
    img: icon,
    rating: stars,
  },
];

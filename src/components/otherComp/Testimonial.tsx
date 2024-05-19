import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
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
    title: "Fiverr",
    quote:
      "Almost 10 projects with Suman and he always delivered before the due date!, Very good communication and execution as always!",
    name: "hollyopk",
    from: "Brazil",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6c381f7f5636287b7446d72d9ba29fe9-1547489298164/f57638ef-dc76-48a2-9a3a-31c2f5a2bcec.jpg",
    rating: stars,
  },
  {
    title: "Fiverr",
    quote:
      "Always a pleasure to work with. Gets the job done quickly and effectively.",
    name: "richdifeo",
    from: "United States",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d914c3b913dff9031848b715702c1e46-1576856911247/04749695-8e8b-44c3-9f40-a2d7d7cb1889.jpg",
    rating: stars,
  },
  {
    title: "Fiverr",
    quote:
      "Suman was a game-changer! His ingenious solution, quick implementation, and creative thinking exceeded my expectations. I highly recommend him for any programming needs. Thank you, Suman!",
    name: "pyramking",
    from: "United States",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/14e6163c4b1e57da59311ba1a21afaf2-1576343010258/0dc44265-d60d-4953-aae3-c713ca6feac9.jpeg",
    rating: stars,
  },
  {
    title: "Fiverr",
    quote:
      "Very cooperative, quick in response and quick in delivery. Fast and high quality work. Do not look anywhere else!",
    name: "felix_merkle",
    from: "Germany",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/56cd41cd7ad010d1001ec7a72e1841af-1688680989286/66389f78-58ed-4794-8026-6202995953c6.png",
    rating: stars,
  },
  {
    title: "Fiverr",
    quote:
      "As always, Suman was reactive, quick to understand and adapt to our needs and also quick to deliver.",
    name: "policymakr",
    from: "United States",
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/932ac591a7ac44dbcb8f24d0be3b3c5b-1463021011677931109.1429281/BD29C452-14A5-4B18-A07D-E11AD82B0F84",
    rating: stars,
  },
];

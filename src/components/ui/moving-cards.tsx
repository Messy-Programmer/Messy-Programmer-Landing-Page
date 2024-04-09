import { StaticImage } from "gatsby-plugin-image";
import React from "react";
interface CardProps {
  image: {
    link: string;
    alt: string;
  };
  key: number;
}
const MovingCards: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative overflow-hidden bg-black text-black w-5">
     hi
    </div>
  );
};
export default MovingCards;

import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

const ScrollEffect = ({ arrowColor }) => {
  return (
    <div
      className={`absolute right-5 ${
        arrowColor ? arrowColor : "text-black bottom-0 p-4 "
      } `}
    >
      <BsArrowDownCircleFill className="text-4xl animate-bounce " />
    </div>
  );
};

export default ScrollEffect;

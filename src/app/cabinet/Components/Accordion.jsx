'use client';
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = ({ items, inside = false }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div
        key={index}
        className={`border border-black mb-[30px] border-t  rounded ${
          (inside && "bg-[#038FF7] text-[#fff]") || "bg-white"
        }`}
      >
        <div
          onClick={() => onTitleClick(index)}
          className="cursor-pointer flex justify-between items-center p-4 "
        >
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <div className="ml-2">
            {isActive ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
        <div
          className={`p-4 ${
            isActive ? "block transition-all duration-300" : "hidden"
          }`}
        >
          <div className="mt-2">{item.content}</div>
        </div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;

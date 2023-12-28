"use client";
// components/Accordion.js
import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="md:w-[70%] m-auto">
        {items.map((item, index) => (
          <div key={index} className="border-b-custom overflow-hidden md:p-4">
            <div
              className={`p-4 cursor-pointer md:flex grid grid-cols-[auto,25px] items-center justify-between `}
              onClick={() => toggleAccordion(index)}
            >
              <span className="md:text-[20px] text-[16px] font-400">{item.title}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openIndex === index && (
              <div className="p-4 text-[#ACACAC]">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

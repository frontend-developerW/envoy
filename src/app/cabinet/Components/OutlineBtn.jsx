'use client';
import React from "react";

function OutlineBtn({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#ffffff] hover:bg-[#038FF7]  transition hover:text-white border-solid border rounded-[6px] border-black text-[18px] p-[8px] ${className}`}
    >
      {text}
    </button>
  );
}

export default OutlineBtn;

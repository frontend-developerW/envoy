"use client";
import React from "react";

function BlueBtn({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-[#038FF7] hover:bg-[#074677] hover:border-white transition text-white border-solid border rounded-[6px] border-black text-[18px] p-[8px] `}
    >
      {text}
    </button>
  );
}

export default BlueBtn;

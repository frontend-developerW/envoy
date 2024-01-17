"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { unicalChange } from "@/app/app/action/counterSlice";
const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const langtype = useSelector((state) => state.counter.lang);
  const dispatch = useDispatch();
  const toggleLangSwitcher = (e) => {
    dispatch(unicalChange(e));
    setIsOpen(!isOpen);
  };
  const openLangSwitcher = () => {
    setIsOpen(!isOpen);
  };
  const langs = {
    en: {
      title: "English",
      image: "/cabinet/images/us.png",
    },
    ru: {
      title: "Русский",
      image: "/cabinet/images/ru.webp",
    },
  };
  return (
    <div className="flex flex-col gap-[8px] items-start">
      <button onClick={openLangSwitcher} className="flex items-center gap-2 ">
        <img className="w-[20px]" src={langs[langtype].image} alt="" />{" "}
        {langs[langtype].title}
        <IoIosArrowDown />
      </button>
      {isOpen && (
        <div className="flex flex-col gap-[8px] pl-[10px] cursor-pointer">
          <p onClick={() => toggleLangSwitcher("en")}>English</p>
          <p onClick={() => toggleLangSwitcher("ru")}>Русский</p>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;

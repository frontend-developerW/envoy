"use client";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { toRus, toEng } from "../../app/action/counterSlice";
function SwitchLang() {
  const [langDrop, setLangDrop] = useState(false);
  const dispatch = useDispatch();
  const currentLocale = useSelector((state) => state.counter.lang);
  return (
    <div className="relative">
      {currentLocale === "ru" ? (
        <button
          className="flex items-center gap-2"
          onClick={() => setLangDrop(!langDrop)}
        >
          <img className="w-[25px] rounded-full" src="/ru.png" alt="" /> Рус
          <IoIosArrowDown />
        </button>
      ) : (
        <button
          className="flex items-center gap-2"
          onClick={() => setLangDrop(!langDrop)}
        >
          <img className="w-[25px] rounded-full" src="/us.png" alt="" /> Eng
          <IoIosArrowDown />
        </button>
      )}
      {langDrop && (
        <div className="absolute top-[40px]">
          {currentLocale === "ru" ? (
            <button
              className="flex gap-2"
              onClick={() => {
                dispatch(toEng());
                setLangDrop(false);
              }}
            >
              <img className="w-[25px] rounded-full" src="/us.png" alt="" /> Eng
            </button>
          ) : (
            <button
              className="flex gap-2"
              onClick={() => {
                dispatch(toRus());
                setLangDrop(false);
              }}
            >
              <img className="w-[25px] rounded-full" src="/ru.png" alt="" /> Рус
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SwitchLang;

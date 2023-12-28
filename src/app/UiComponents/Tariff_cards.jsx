"use client";
import React, { useState } from "react";
import Card from "./ElementComponents/Card";
import { tariff_cards }  from "./components/constatns.js";
import RangeInput from "./ElementComponents/InputRange";

function Tariff_cards({ t }) {
  const frist_card = tariff_cards[1];
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="grid md:grid-cols-3 p-2 bg-[#F2F4F6] md:w-[50%] w-[80%] m-[auto] my-[70px]">
        {[0, 1, 2].map((item, i) => (
          <button
          key={i}
            onClick={() => setActive(item)}
            className={`p-[10px] rounded-[8px] ${active == item && "bg-white"}`}
          >
            {t[`create_tarif_${item +1}`]}
          </button>
        ))}
        
      </div>
      <div className="tariff_cards grid md:grid-cols-3 md:gap-[32px] gap-4 grid-cols-1 md:w-[65%] m-auto">
        {tariff_cards[active].map((card, index) => (
          <Card key={index} {...card} t={t}/>
        ))}
      </div>
      <div className="create_tariff grid md:grid-cols-3 gap-4 my-[100px] bg-white rounded-[12px] border-solid border overflow-hidden">
        <div className="create_section bg-blue-500 p-4 py-8 text-white">
          <p className="text-[28px] mb-[30px] w-[80%]">
            {t["create_tarif_title"]}
          </p>
          <button className="outliners mt-4">{t["create_tarif"]}</button>
        </div>
        <div className="flex flex-col p-4 gap-[20px] py-8">
          <button className="outliners text-[14px]">
            {t["create_tarif_1"]}
          </button>
          <button className="outliners text-[14px]">
            {t["create_tarif_2"]}
          </button>
          <button className="outliners text-[14px]">
            {t["create_tarif_3"]}
          </button>
          <p className="text-[16px] md:uppercase font-[600]">
            {t["range_title"]}
          </p>
          <RangeInput gb={t["gb"]} />
        </div>
        <div className="p-8 px-10">
          <Card {...frist_card} t={t}/>
        </div>
      </div>
    </>
  );
}

export default Tariff_cards;

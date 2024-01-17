"use client";
import React, { useState, useEffect } from "react";
import Card from "./ElementComponents/Card";
import { tariff_cards } from "./components/constatns.js";
import RangeInput from "./ElementComponents/InputRange";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Tariff_cards({ t }) {
  // const frist_card = tariff_cards[1];
  const [active, setActive] = useState(0);
  const [rangeValue, setRangeValue] = useState(25);
  const [tabValues, setTabValues] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/resident-static/") {
      setActive(1);
    } else if (pathname === "/mobile-proxy/") {
      setActive(2);
    }else{
      setActive(0);
    }
  }, []);

  const tabs = [
    {
      id: 0,
      name: t["create_tarif_1"],
      value: 4,
    },
    {
      id: 1,
      name: t["create_tarif_2"],
      value: 2,
    },
    {
      id: 2,
      name: t["create_tarif_3"],
      value: 5,
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 p-2 bg-[#F2F4F6] md:w-[60%] w-[80%] m-[auto] my-[70px] gap-2">
        {[0, 1, 2].map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item)}
            className={`p-[10px] rounded-[8px] ${
              active == item && "bg-white"
            } hover:bg-white transition duration-300 hover:shadow-lg`}
          >
            {t[`create_tarif_${item + 1}`]}
          </button>
        ))}
      </div>
      <div className="tariff_cards grid md:grid-cols-3 md:gap-[32px] gap-4 grid-cols-1 md:w-[65%] m-auto">
        {tariff_cards[active].map((card, index) => (
          <Card key={index} {...card} t={t} />
        ))}
      </div>
      <div className="create_tariff grid md:grid-cols-3 gap-4 my-[100px] bg-white rounded-[12px] border-solid border overflow-hidden">
        <div className="create_section bg-blue-500 p-4 py-8 text-white">
          <p className="text-[28px] mb-[30px] w-[80%]">
            {t["create_tarif_title"]}
          </p>
          <Link href={"/register"}>
            <button className="outliners mt-4">{t["create_tarif"]}</button>
          </Link>
        </div>
        <div className="flex flex-col p-4 gap-[20px] py-8 md:items-stretch items-center">
          {/* <button className="outliners text-[14px] w-full">
            {t["create_tarif_1"]}
          </button>
          <button className="outliners text-[14px] w-full">
            {t["create_tarif_2"]}
          </button> */}
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setTabValues(tab.id)}
              className={`border border-black border-solid p-[10px] uppercase font-semibold rounded-full text-[14px] w-full ${
                tabValues == tab.id && "bg-blue-500 text-white "
              }`}
            >
              {tab.name}
            </button>
          ))}
          <p className="text-[16px] md:uppercase font-[600]">
            {t["range_title"]}
          </p>
          <RangeInput
            gb={t["gb"]}
            setValue={setRangeValue}
            value={rangeValue}
          />
        </div>
        <div className="p-8 px-10">
          <Card
            name="Базовый"
            price={rangeValue / tabs?.[tabValues]?.value}
            perprice={`$2.6/ГБ`}
            currency="USD"
            features={[
              "Выбор страны/города",
              "Выбор провайдера",
              "24/7 поддержка",
              "Этические IP-адрес",
            ]}
            button="ПОДПИСАТЬСЯ"
            button_color="black_btn"
            t={t}
          />
        </div>
      </div>
    </>
  );
}

export default Tariff_cards;

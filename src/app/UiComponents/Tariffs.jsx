import React from "react";
import Tariff_cards from "./Tariff_cards";

function Tariffs({t}) { 
  return (
    <div className="tariffs">
      <h1 className="title_section text-4xl font-bold md:my-12 my-6">{t['plans']}</h1>
      <h2 className="text-lg font-semibold mb-4 uppercase">{t["allplans"]}</h2>
      <div className="plan_cards grid md:grid-cols-4 gap-4 my-[50px]">
        <div className="gap-[10px] bg-[#fff] border-solid cursor-pointer border border-[#000] flex items-center p-4 border border-gray-300 rounded transition duration-300 hover:shadow-lg">
          <img src="/vercel.svg" alt="" />
          <p>{t["plan1"]}</p>
        </div>
        <div className="gap-[10px] bg-[#fff] border-solid cursor-pointer border border-[#000] flex items-center p-4 border border-gray-300 rounded transition duration-300 hover:shadow-lg">
          <img src="/vercel.svg" alt="" />
          <p>{t["plan2"]}</p>
        </div>
        <div className="gap-[10px] bg-[#fff] border-solid cursor-pointer border border-[#000] flex items-center p-4 border border-gray-300 rounded transition duration-300 hover:shadow-lg">
          <img src="/vercel.svg" alt="" />
          <p>{t["plan3"]}</p>
        </div>
        <div className="gap-[10px] bg-[#fff] border-solid cursor-pointer border border-[#000] flex items-center p-4 border border-gray-300 rounded transition duration-300 hover:shadow-lg">
          <img src="/vercel.svg" alt="" />
          <p>{t["plan4"]}</p>
        </div>
      </div>
      <Tariff_cards t={t}/>
    </div>
  );
}

export default Tariffs;

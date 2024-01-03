import React from "react";
import { clients_logo } from "./components/constatns.js";
import Link from "next/link.js";

function DynamicBanner({ t }) {
  return (
    <>
      <div className="banner flex justify-between items-center md:p-4 md:flex-row flex-col-reverse">
        <div className="banner_text md:w-2/3 w-full md:py-[120px]">
          <h1 className="md:text-[48px] text-[32px] font-[500]  mb-4 md:mt-0 mt-[20px] text-[#1D2026]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sit?
          </h1>
          <p className="md:text-[24px] text-[20px] leading-[22px] text-[#676D7E] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, nulla?
          </p>
          <Link href={"/register"}>
            <button className="bg-black text-white rounded-[30px] px-[20px] py-[10px] mt-[20px]">
              {t["try_free"]}
            </button>
          </Link>
          <img
            src="/banner_logo.png"
            alt=""
            className="mt-4 md:w-auto w-[80%]"
          />
        </div>
        <div className="banner_img md:w-1/3 w-full">
          <img src="/dynamic.png" alt="" className=" relative md:-top-[90px]" />
        </div>
      </div>
      <div className="clients">
        <p className="title_clients my-8 text-[20px]">{t["more1500"]}</p>
        <div className="grid_clients grid md:grid-cols-5 grid-cols-2 gap-10 mt-4">
          {clients_logo.map((item, index) => {
            return (
              <div key={index} className="logo flex items-center gap-2">
                <img src={item.img} alt={item.name} className="w-10 h-10" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DynamicBanner;

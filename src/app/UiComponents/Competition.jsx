import Link from "next/link";
import React from "react";

function Competition({ t }) {
  return (
    <div className="competition">
      <div className="md:grid grid-cols-[2fr,1fr] flex flex-col-reverse  overflow-hidden border-solid border bg-white rounded-[12px]">
        <div className="grid md:grid-cols-2  gap-4 md:p-10 p-5">
          <div className="column flex flex-col p-4 border border-gray-300 rounded">
            <img src="/integration.svg" alt="" className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold mb-2">
              {t["integration_title"]}
            </h3>
            <p className="text-sm text-[#ACACAC] text-[16px] md:w-[70%] leading-[23px]">
              {t["integration_subtitle"]}
            </p>
          </div>
          <div className="column flex flex-col p-4 border border-gray-300 rounded">
            <img src="/currency.svg" alt="" className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold mb-2">{t["comp_pricing"]}</h3>
            <p className="text-sm text-[#ACACAC] text-[16px] md:w-[70%] leading-[23px]">
              {t["comp_pricing_subtitle"]}
            </p>
          </div>
          <div className="column flex flex-col p-4 border border-gray-300 rounded">
            <img src="/global.svg" alt="" className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold mb-2"> {t["global_title"]}</h3>
            <p className="text-sm text-[#ACACAC] text-[16px] md:w-[70%] leading-[23px]">
              {t["global_subtitle"]}
            </p>
          </div>
          <div className="column flex flex-col p-4 border border-gray-300 rounded">
            <img src="/proxy.svg" alt="" className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold mb-2">
              {" "}
              {t["proxies_title"]}
            </h3>
            <p className="text-sm text-[#ACACAC] text-[16px] md:w-[70%] leading-[23px]">
              {t["proxies_subtitle"]}
            </p>
          </div>
        </div>
        <div className="bg-[#AA70E6] p-4 text-right text-[#fff] pl-[20%]">
          <h3 className="text-xl font-semibold mb-2 text-[24px]">
            {t["comp"]}
          </h3>
          <p className="text-[20px]">{t["comp_subtitle"]}</p>
          <Link href={"/login"}>
            <button className="outliners mt-4">{t["comp_button"]}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Competition;

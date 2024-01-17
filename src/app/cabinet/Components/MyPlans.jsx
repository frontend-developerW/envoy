import React from "react";

import Link from "next/link";
import OutlineBtn from "./OutlineBtn";
import BlueBtn from "./BlutBtn";
// import { useLang } from "../redux/selectors";
function MyPlans({ langs }) {
  //   const langs = useLang();
  const lang = langs.cabinet.myPlansWords;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <h1 className="text-[32px] font-bold mb-[30px]">{lang.myPlans}</h1>
      <div className="grid md:grid-cols-3 md:overflow-hidden md:bg-white md:border-solid md:border-black md:border w-full max-w-[550px] md:rounded-[10px] mb-[30px] md:gap-0 gap-2">
        <button className="p-[7px] md:bg-transparent bg-white md:rounded-[0px] md:border-none border border-black rounded text-[18px] font-[500] hover:bg-[#038FF7] hover:text-[#fff] transition">
          {lang.dynamic}
        </button>
        <button className="p-[7px] md:bg-transparent bg-white md:rounded-[0px] md:border-none border border-black rounded text-[18px] font-[500] hover:bg-[#038FF7] hover:text-[#fff] transition">
          {lang.statistical}
        </button>
        <button className="p-[7px] md:bg-transparent bg-white md:rounded-[0px] md:border-none border border-black rounded text-[18px] font-[500] hover:bg-[#038FF7] hover:text-[#fff] transition">
          {lang.mobile}
        </button>
      </div>
      <div className="grid md:rounded-[10px] md:p-[20px] md:bg-white md:border-solid md:border border-black">
        <div className="flex justify-between items-center mb-[10px] border-solid border border-black rounded-[5px] p-[10px] md:bg-transparent bg-white">
          <p className="text-[18px] flex items-center gap-[10px] font-[500]">
            <img src={"/cabinet/images/arrowplan.svg"} alt="" /> 542 - NEBULA
            SET
          </p>
          <Link href={"./no-active"}>
            <OutlineBtn
              text={lang.notActive}
              className={"rounded-[5px] md:min-w-[190px] md:w-auto w-[34vw]"}
            />
          </Link>
        </div>
        <div className="flex justify-between items-center border-solid border border-white p-[10px] ">
          <p className="text-[18px] flex items-center gap-[10px] font-[500]">
            <img src={"/cabinet/images/arrowplan.svg"} alt="" /> 542 - NEBULA
            SET
          </p>
          <Link href="./tarif">
            <BlueBtn
              text={lang.active}
              className={"rounded-[5px] md:min-w-[190px] md:w-auto w-[34vw]"}
            />
          </Link>
        </div>
      </div>
      <div className="md:flex grid justify-between items-center rounded-[10px] md:p-[20px] p-[15px]   bg-white border-solid border border-black mt-[30px]">
        <p className="text-[18px] flex items-center gap-[10px] font-[500]">
          {lang.emptyProxyList}
        </p>
        <Link href={"./buy-proxy"}>
          <BlueBtn
            text={lang.buyNow}
            className={"rounded-[5px] md:min-w-[190px] min-w-[160px]"}
          />
        </Link>
      </div>
    </div>
  );
}

export default MyPlans;

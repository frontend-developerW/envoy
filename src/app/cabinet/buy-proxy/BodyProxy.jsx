import React from "react";
import Link from "next/link";
import OutlineBtn from "../Components/OutlineBtn";
function BodyProxy({ langs }) {
  const lang = langs.cabinet.myPlansWords;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <h1 className="text-[32px] font-bold mb-[30px]">{lang.proxy}</h1>
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
      <div className="rounded-[10px] md:p-[20px] p-[15px]   bg-white border-solid border border-black w-full">
        <div className="card relative border-solid border border-black md:p-6 p-2 py-12 rounded-[12px] bg-[#FBFBFC] flex flex-col items-center text-center max-w-[270px]">
          <p className="type_tariff md:text-xl text-x font-bold text-blue-500 uppercase">
            Starter
          </p>
          <h1 className="price_tariff md:text-[50px] text-[40px] font-[600] mt-2">
            <sup className="text-[20px] relative md:-top-[30px] -top-[20px]">
              $
            </sup>
            30
          </h1>
          <p className="text-[#ACACAC] md:my-[10px]">{lang.preMonth}</p>

          <div className="mt-4 w-full text-left">
            <div className="grid grid-cols-[20px,auto] w-full items-center gap-4">
              <img src={"/cabinet/images/check.svg"} alt="" />
              <p className="text-[#ACACAC] md:my-[10px]">
                1 {lang.traffic} {lang.gb}
              </p>
            </div>
            <div className="grid grid-cols-[20px,auto] w-full items-center gap-4">
              <img src={"/cabinet/images/check.svg"} alt="" />
              <p className="text-[#ACACAC] md:my-[10px]">1000 {lang.ports}</p>
            </div>
            <div className="grid grid-cols-[20px,auto] w-full items-center gap-4">
              <img src={"/cabinet/images/check.svg"} alt="" />
              <p className="text-[#ACACAC] md:my-[10px]">
                {lang.protocols} HTTP(S)/SOCKS 4/5
              </p>
            </div>
          </div>
          <p className="text-[#ACACAC] md:my-[10px]">$5/{lang.gb}</p>
          <h3 className="font-[500]">{lang.have_prome}?</h3>
          <input
            type="text"
            className="w-full my-[10px] border border-black border-solid rounded-full p-[5px] px-[10px] outline-none"
            placeholder={lang.enter_prome}
          />
          <Link href={"./"} className="w-full">
            <OutlineBtn text={lang.buy} className={"w-full rounded-[60px]"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BodyProxy;

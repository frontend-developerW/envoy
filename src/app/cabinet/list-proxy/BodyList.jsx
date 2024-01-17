import React from "react";
import OutlineBtn from "../Components/OutlineBtn";
function BodyPeriod({ langs }) {
  const lang = langs.cabinet.tarif;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <div className="flex items-center mb-[30px]  justify-between">
        <h1 className="text-[32px] font-bold ">{lang.listProxy}</h1>
        <div className="flex">
          <OutlineBtn
            text={
              <div className="flex items-center">
                <span className="mr-[10px]">{lang.copy}</span>
                <img src={"/cabinet/images/copy.png"} alt="" />
              </div>
            }
          />
          <button className="text-[18px] font-[500] ml-[30px] md:flex hidden items-center gap-3">
            {lang.addProxy}
            <img src={"/cabinet/images/plus.png"} alt="" />
          </button>
        </div>
      </div>
      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <div className="flex gap-3 flex-col">
          <button className="text-[18px] font-[500] md:hidden flex items-center justify-center gap-3">
            {lang.addProxy}
            <img src={"/cabinet/images/plus.png"} alt="" />
          </button>
          <p className="md:text-[20px] text-[16px] border border-black rounded md:p-[15px] p-[5px]">
            Lorem ipsum dolor sit amet consectetur. Et in nulla id mollis sit ac
            in adipiscing.
          </p>
          <p className="md:text-[20px] text-[16px] md:p-[15px] p-[5px]">
            Lorem ipsum dolor sit amet consectetur. Et in nulla id mollis sit ac
            in adipiscing.
          </p>
          <p className="md:text-[20px] text-[16px] border border-black rounded md:p-[15px] p-[5px]">
            Lorem ipsum dolor sit amet consectetur. Et in nulla id mollis sit ac
            in adipiscing.
          </p>
          <p className="md:text-[20px] text-[16px] md:p-[15px] p-[5px]">
            Lorem ipsum dolor sit amet consectetur. Et in nulla id mollis sit ac
            in adipiscing.
          </p>
          <p className="md:text-[20px] text-[16px] border border-black rounded md:p-[15px] p-[5px]">
            Lorem ipsum dolor sit amet consectetur. Et in nulla id mollis sit ac
            in adipiscing.
          </p>
          <p className="md:text-[20px] text-[16px] md:p-[15px] p-[5px]">
            Lorem ipsum dolor sit amet consectetur. Et in nulla id mollis sit ac
            in adipiscing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyPeriod;

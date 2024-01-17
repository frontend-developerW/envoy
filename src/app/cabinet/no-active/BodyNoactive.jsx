import React from "react";
import BlueBtn from "../Components/BlutBtn";
import OutlineBtn from "../Components/OutlineBtn";
function BodyNoactive({ langs }) {
  const lang = langs.cabinet.tarif;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
       

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[32px] font-bold mb-[30px]">{lang.listProxy}</h1>
        <div className="text-[20px] border border-black rounded p-[15px] md:flex justify-between items-center">
          <p>
            {lang.expiryDate} 2023-10-21.
          </p>
          <BlueBtn text={lang.buyNow} className={"px-[20px] py-[5px] md:mt-0 mt-[20px]"} />
        </div>
        <div className="text-[20px] border border-black rounded p-[15px] flex justify-between flex-col items-start gap-4  mt-[30px]">
          <p className="text-[20px] font-[600]">{lang.deleteTarif}</p>
          <OutlineBtn text={lang.deleteTarif + "?"} className={"px-[20px] py-[5px] font-[600] mb-[60px]"} />
        </div>
      </div>
    </div>
  );
}

export default BodyNoactive;

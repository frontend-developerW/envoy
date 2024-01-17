import React from "react";
import BlueBtn from "../Components/BlutBtn";
function BodyBalance({ langs }) {
  const lang = langs.cabinet.profileBalance;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <div className="flex gap-[30px]">
        <h1 className="text-[32px] font-bold mb-[30px]">
          {lang.balance_profile}
        </h1>
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">{lang.information}</h1>
        <div className="grid md:grid-cols-4 gap-[45px]">
          <div className="flex flex-col gap-3">
            <span className="text-[18px] text-[#00000052]">
              {lang.your_balance}
            </span>
            <h1 className="text-[50px] font-bold text-[#038FF7] leading-[50px]">
              $ 0
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[18px] font-[600] whitespace-nowrap">
              {lang.please_specify_amount}
            </span>
            <input
              type="text"
              className="border md:mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[18px] font-[600]">
              {lang.payment_method}
            </span>
            <select
              name=""
              id=""
              className="border md:mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] font-[600]"
            >
              <option value="">Cryptomus</option>
            </select>
          </div>
          <div className="flex items-center">
            <BlueBtn text={"Пополнить"} className={"px-[30px] md:mt-[20px]"} />
          </div>
        </div>
      </div>
      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">{lang.transaction}</h1>
        <div className="grid gap-[10px]">
          <div className="grid grid-cols-6 text-center text-gray-600">
            <span>ID</span>
            <span>{lang.date}</span>
            <span>{lang.amount}</span>
            <span>{lang.currency}</span>
            <span>{lang.payment_method_} </span>
            <span>{lang.status}</span>
          </div>
          <div className="md:grid flex justify-between px-[10px] grid-cols-6 text-center text-white bg-[#038FF7] border border-black md:py-[20px] py-[5px] rounded-full text-[16px] font-[600]">
            <span>ID</span>
            <span>234</span>
            <span>30$</span>
            <span>Tron</span>
            <span>Cryptomus </span>
            <span className="text-[#F4A900]">&#x2191;Waiting </span>
          </div>
          <div className="md:grid flex justify-between px-[10px] grid-cols-6 text-center md:py-[20px] py-[5px] text-[16px] font-[600]">
            <span>ID</span>
            <span>234</span>
            <span>30$</span>
            <span>Tron</span>
            <span>Cryptomus </span>
            <span className="text-[#0A9E5C]">↓Succes </span>
          </div>
        </div>
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">
          {lang.available_payment_methods}
        </h1>
        <div className="border border-black p-[15px] rounded-[10px] bg-[#038FF7] max-w-[350px] flex items-center gap-[10px]">
          <div className="bg-[#AA70E6] p-[35px] rounded-[8px]">
            <img src={"/cabinet/images/cryptomus.svg"} alt="" />
          </div>
          <h1 className="text-[20px] font-[600] text-[#fff] text-center">
            Cryptomus
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BodyBalance;

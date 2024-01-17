import React from "react";
import BlueBtn from "../Components/BlutBtn";
import OutlineBtn from "../Components/OutlineBtn";
import Link from "next/link";
function BodyTarif({ langs }) {
  const lang = langs.cabinet.tarif;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <div className="flex gap-[30px]">
        <h1 className="text-[32px] font-bold mb-[30px]">{lang.tariff}</h1>
        <h1 className="text-[32px] font-bold mb-[30px] text-[#038FF7]">
          Starter
        </h1>
      </div>
      <div className="grid rounded-[10px] md:p-[40px] p-[20px] bg-white border-solid border border-black">
        <h1 className="text-[24px] font-[600]">{lang.trafficStatistics} </h1>
        <h1 className="text-[20px] font-[600]">
          {lang.expiryDate}
          <span className="text-[#038FF7]"> 2023-12-22</span>
        </h1>
        <div className="flex justify-between mt-[15px] mb-[10px] md:w-auto w-[95%]">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
        <div className="relative">
          <div className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] md:-bottom-[30px] -bottom-[26px] rounded-full bg-[#038FF7] absolute -left-[10px]  z-[40] border border-black"></div>
        </div>
        <div className="grid grid-cols-4 md:w-full w-[95%] border border-black rounded-[8px] overflow-hidden md:relative">
          <div className="border border-solid border-black py-[10px] border-l-[transparent] border-b-[transparent] border-t-[transparent]"></div>
          <div className="border border-solid border-black py-[10px] border-l-[transparent] border-b-[transparent] border-t-[transparent]"></div>
          <div className="border border-solid border-black py-[10px] border-l-[transparent] border-b-[transparent] border-t-[transparent]"></div>
          <div className="border border-solid border-black py-[10px] border-l-[transparent] border-b-[transparent] border-t-[transparent]"></div>
        </div>

        <div className="flex md:gap-10 mt-[50px]">
          <div className="flex relative md:left-0 -left-[25px]">
            <div className="relative h-[110%] -top-[5%] md:w-[25px] w-[17px] bg-[#038FF7] rounded-full md:left-[20px] left-[10px] border border-black"></div>
            <OutlineBtn
              text={
                <span>
                  {lang.used}: <b className="font-[500]">0 GB</b>
                </span>
              }
              className={"md:pl-[30px] pl-[17px]  whitespace-nowrap"}
            />
          </div>
          <div className="flex relative md:left-0 -left-[25px]">
            <div className="relative h-[110%] -top-[5%] md:w-[25px] w-[17px] bg-[#fff] rounded-full md:left-[20px] left-[10px] border border-black"></div>
            <OutlineBtn
              text={
                <span>
                  {lang.exist}: <b className="font-[500]">10 GB</b>
                </span>
              }
              className={"md:pl-[30px] pl-[17px] whitespace-nowrap"}
            />
          </div>
        </div>
      </div>

      {/* create_prxy */}
      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">{lang.createProxy}</h1>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.listName}</span>
          <input
            type="text"
            className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.authenticationVia}</span>
          <select
            name=""
            id=""
            className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          >
            <option value="">
              {lang.login}/{lang.password}
            </option>
          </select>
        </div>
        <div className="md:flex gap-3 w-full">
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.login}</span>
            <input
              type="text"
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.password}</span>
            <input
              type="text"
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.location}</span>
          <select
            name=""
            id=""
            className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          >
            <option value="">Кастом</option>
          </select>
        </div>
        <div className="md:flex gap-3 w-full">
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.country}</span>
            <select
              name=""
              id=""
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            >
              <option value="">{lang.country}</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.region}</span>
            <select
              name=""
              id=""
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            >
              <option value="">{lang.region}</option>
            </select>
          </div>
        </div>

        <div className="md:flex gap-3 w-full">
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.city}</span>
            <select
              name=""
              id=""
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            >
              <option value="">{lang.city}</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">ISP</span>
            <select
              name=""
              id=""
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            >
              <option value=""> ISP</option>
            </select>
          </div>
        </div>

        <div className="md:flex gap-3 w-full">
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.rotationPeriod}</span>
            <select
              name=""
              id=""
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            >
              <option value="">Без ротации</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span className="text-[18px]">{lang.proxyFormat}</span>
            <select
              name=""
              id=""
              className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            >
              <option value="">login:password@host:port</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.numberOfPorts}</span>
          <input
            type="text"
            className="bg-[#F6F6F6] border mb-[20px] border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
            placeholder="1-1000"
          />
        </div>
        <div className="flex gap-3">
          <Link href="/cabinet/list-proxy">
            <BlueBtn text={lang.create} className={"px-[20px]"} />
          </Link>
          <BlueBtn text="API TOOLS" className={"bg-[#AA70E6] px-[20px]"} />
        </div>
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <div className="flex mb-[30px] items-center gap-[20px] ">
          <h1 className="text-[24px] font-[600] whitespace-nowrap">
            {lang.listProxy}
          </h1>
          <input
            type="search"
            placeholder={lang.search}
            name=""
            id=""
            className="outline-none border border-[#0000005e] p-[5px] rounded md:w-auto w-full"
          />
        </div>
        <div className="flex justify-between items-center mb-[10px] border-solid border border-black rounded-[10px] p-[5px] px-[10px]">
          <p className="text-[18px] flex items-center gap-[10px] font-[500]">
            <img src={'/cabinet/images/arrowplan.svg'} alt="" /> 542 - NEBULA SET
          </p>
          <button>
            <img src={'/cabinet/images/box.svg'} alt="" />
          </button>
        </div>

        <BlueBtn text={lang.create} className={"px-[20px] mt-[30px]"} />
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">
          {lang.deleteTariff}
        </h1>
        <div className="flex gap-3">
          <BlueBtn text={lang.yes} className={"md:px-[80px] px-[40px]"} />
          <BlueBtn
            text={lang.no}
            className={"bg-[#AA70E6] md:px-[80px] px-[40px]"}
          />
        </div>
      </div>
    </div>
  );
}

export default BodyTarif;

import React from "react";
import BlueBtn from "../Components/BlutBtn";
function BodyReferal({ langs }) {
  const lang = langs.cabinet.referal_words;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <div className="flex items-center   justify-between">
        <h1 className="text-[32px] font-bold mb-[30px]">{lang.title}</h1>
      </div>
      <div className="md:grid grid-cols-[6fr,4fr] gap-[30px]">
        <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
          <div className="grid grid-cols-2 text-left">
            <p className="text-[#0007] text-[18px]">{lang.incoming}</p>
            <BlueBtn
              className={
                " md:min-w-0 min-w-[200px] relative md:right-0 right-3"
              }
              text={
                <div className="flex items-center">
                  <span className="md:mr-[10px] text-left text-[18px] ">
                    {lang.reward}
                  </span>
                  <h1 className="md:text-[32px] text-[24px] relative font-bold">
                    10%
                  </h1>
                </div>
              }
            />
          </div>
          <h1 className="text-[50px] font-bold text-[#038FF7]">10 $</h1>
          <p className="text-[18px] font-semibold mt-[30px]">{lang.time}</p>
        </div>
        <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
          <h1 className="text-[24px] font-bold">{lang.link}</h1>
          <div className="border border-black rounded p-[10px] mt-[20px] flex items-center justify-between">
            <input
              type="text"
              defaultValue={"http://proxyma.io/asdgvaas"}
              disabled
              className="bg-white text-[18px] w-full max-w-[235px]"
            />
            <button>
              <img src={"/cabinet/images/copy.png"} alt="" />
            </button>
          </div>
          <p className="mt-[30px]">
            Lorem ipsum dolor sit amet consectetur. Turpis enim velit sed
            blandit in integer diam viverra volutpat.
          </p>
        </div>
      </div>
      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[30px]">
        <h1 className="text-[24px] font-bold">{lang.invited}</h1>
        <div className="flex gap-[30px] items-center bg-[#038FF7] md:p-[20px] p-[15px]   rounded-[10px] border border-black mt-[30px]">
          <img
            src={"/cabinet/images/people.png"}
            className="w-[100px]"
            alt=""
          />
          <div className="flex flex-col items-center text-[#fff] text-[18px]">
            <h1 className="text-[32px] font-bold">0</h1>
            <p>{lang.total}</p>
          </div>
        </div>
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[30px]">
        <h1 className="text-[24px] font-bold">{lang.from_referral}</h1>
        <div className="flex justify-between mt-[20px] md:px-[20px] text-[#00000081]">
          <span>{lang.id}</span>
          <span>{lang.total_income}</span>
          <span>{lang.reg_date}</span>
        </div>
        <div className="bg-[#038FF7] md:p-[15px] p-[5px] md:text-[20px] text-[16px] font-semibold border border-black mt-[10px] text-center text-[#fff] rounded-full">
          {lang.no_income}
        </div>
      </div>
    </div>
  );
}

export default BodyReferal;

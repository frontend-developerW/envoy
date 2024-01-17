import React from "react";
import BlueBtn from "../Components/BlutBtn";
function BodyProfile({ langs }) {
  const lang = langs.cabinet.profileWords;
  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <div className="flex gap-[30px]">
        <h1 className="text-[32px] font-bold mb-[30px]">{lang.profile}</h1>
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">{lang.info}</h1>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.email}</span>
          <input
            type="email"
            placeholder="E-mail"
            className="border mb-[20px] border-solid border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          />
        </div>
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">{lang.set_pass}</h1>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.set_newpass}</span>
          <input
            type="password"
            placeholder="*******"
            className="border mb-[20px] border-solid border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.confirm_pass}</span>
          <input
            type="password"
            placeholder="*******"
            className="border mb-[20px] border-solid border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          />
        </div>
        <BlueBtn text={lang.save} className={"px-[30px]"} />
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px]">
        <h1 className="text-[24px] font-[600] mb-[30px]">Telegram</h1>
        <div className="flex flex-col gap-3">
          <span className="text-[18px]">{lang.your_user}</span>
          <input
            type="text"
            placeholder="@Telegram_tag"
            className="border mb-[20px] border-solid border-black rounded-[8px] text-[16px] p-[12px] px-[25px] font-[600]"
          />
        </div>

        <BlueBtn text={lang.save} className={"px-[30px]"} />
      </div>
    </div>
  );
}

export default BodyProfile;

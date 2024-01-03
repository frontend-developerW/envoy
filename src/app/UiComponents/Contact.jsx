import Link from "next/link";
import React from "react";

function Contact({ t }) {
  return (
    <div className="border-solid border rounded-[11px] my-[100px] md:grid flex flex-col-reverse grid-cols-[75fr,45fr] overflow-hidden">
      <div className="bg-white">
        <div className="md:p-[46px] p-[30px] md:w-[80%] m-auto flex flex-col gap-[20px] items-start">
          <h1 className="text-[32px] font-500">{t["form_title"]}</h1>
          <input
            type="text"
            placeholder={t["name"]}
            className="text-[16px] w-full border-solid border rounded-[7px] p-[16px] px-[18px] bg-[#F7F6F9]"
          />
          <input
            type="text"
            placeholder={t["mail"]}
            className="text-[16px] w-full border-solid border rounded-[7px] p-[16px] px-[18px] bg-[#F7F6F9]"
          />
          <textarea
            cols="30"
            rows="5"
            className="text-[16px] w-full border-solid border rounded-[7px] p-[16px] px-[18px] bg-[#F7F6F9]"
          ></textarea>
          <button className="border-solid border border-[#000] rounded-full p-[13px] px-[40px] text-white bg-[#0A9E5C] ">
            {t["send"]}
          </button>
        </div>
      </div>
      <div className="bg-[#0A9E5C] md:p-[50px] p-[25px] flex flex-col md:items-end items-start">
        <h1 className="text-white md:text-right text-[24px] font-[700] mb-[30px]">
          {t["proxy_server"]}
        </h1>
        <Link href={"/register"}
          className="bg-black text-white rounded-[30px] px-[20px] py-[10px] mb-[30px]"
        >
          {t["start_now"]}
        </Link>
        <p className="text-white text-[16px] mb-[20px]">{t["left_question"]}</p>
        <button className="bg-white text-black border border-solid rounded-[30px] px-[20px] py-[10px] flex items-center gap-[10px]">
          <p>Telegram</p>
          <img src="/telegram.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Contact;

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function HowToUse({ t }) {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between md:items-center  font-bold my-12 mt-[100px]">
        <h1 className="text-[32px] flex items-center gap-[10px]">
          <img src="/folder.svg" alt="" className="md:block hidden" />
          {t["how_use_clients"]}
        </h1>
        <Link href="/blog">
          <button className="text-[18px] flex items-center gap-5">
            {t.all_articles} <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 items-center gap-[16px]">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Link
            href="/blog/1"
            key={index}
            className=" border-solid border border-[#DDDDDD] bg-white rounded-[8px] overflow-hidden card hover:shadow-lg transition duration-500 ease-in-out cursor-pointer"
          >
            <iframe
              className="w-[100%] h-[141px]"
              src="https://www.youtube.com/embed/j9-Y0KWVJ1k?si=sMXpK4bq3v6kFbHq"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="p-[16px] md:pb-[30px] pb-[20px]">
              <p className="md:mb-[45px] mb-[20px]">Lorem ipsum</p>
              <div className="flex gap-[10px]">
                <img src="/clock.svg" alt="" />
                <p className="text-[#676D7E]">14 min.</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HowToUse;

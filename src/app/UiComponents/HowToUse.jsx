import Link from "next/link";
import React from "react";

function HowToUse({ t }) {
  return (
    <div>
      <h1 className="text-[32px] font-bold my-12 mt-[100px] flex items-center gap-[10px]">
        <img src="/folder.svg" alt="" className="md:block hidden" />
        {t["how_use_clients"]}
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 items-center gap-[16px]">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Link
            href="/blog/1"
            key={index}
            className=" border-solid border border-[#DDDDDD] bg-white rounded-[8px] overflow-hidden card hover:shadow-lg transition duration-500 ease-in-out cursor-pointer"
          >
            <iframe
              className="w-[100%] h-[141px]"
              src="https://www.youtube.com/embed/-rl0B0r3urk?si=VD7rk6Xy2FF2f3fO"
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

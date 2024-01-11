import React from "react";
import { popular_usage } from "./components/constatns.js";
import Link from "next/link.js";
import { FaArrowRight } from "react-icons/fa6";

function PopularVariants({ t, allVariants = false }) {
  return (
    <div className="popular_variants">
      <div className="flex md:items-center md:justify-between  font-bold mt-[100px] mb-[50px] md:flex-row flex-col  md:gap-0 gap-4">
        <h1 className="title _section text-3xl">{t["popular_variant"]}</h1>
        {!allVariants && (
          <Link href="/use-cases">
            <button className="text-[18px] flex items-center gap-5">
              {t.all_cases} <FaArrowRight />
            </button>
          </Link>
        )}
      </div>
      <div className="grid_popular grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
        {popular_usage.map((item, index) => (
          <Link
            href={"/monitoring"}
            key={index}
            className="popular_item flex flex-col items-center bg-white p-4 rounded-md border border-gray-300 transition duration-500 ease-in-out transform hover:shadow-lg hover:scale-105"
          >
            <img src={item.img} alt="" className="w-12 h-12 mb-2" />
            <p className="text-center">{t[item.name]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularVariants;

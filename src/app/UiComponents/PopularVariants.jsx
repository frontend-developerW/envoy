import React from "react";
import { popular_usage } from "./components/constatns.js";
import Link from "next/link.js";

function PopularVariants({ t }) {
  return (
    <div className="popular_variants">
      <h1 className="text-3xl font-bold mb-[50px]">{t["popular_variant"]}</h1>
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

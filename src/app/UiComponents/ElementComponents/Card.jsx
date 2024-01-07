import React from "react";

function Card({
  type,
  price,
  features,
  date,
  perprice,
  description,
  button,
  button_type,
  t
}) {

  return (
    <div className="card relative border-solid border border-black md:p-6 p-2 py-12 rounded-[12px] bg-[#FBFBFC] flex flex-col items-center text-center">
      {description && (
        <p className="comment_card absolute top-0 -mt-7 px-2 py-1 border-solid border border-black bg-white text-black text-center rounded w-[70%] md:text-[16px] text-[12px]">
          {description}
        </p>
      )}
      <p className="type_tariff md:text-xl text-x font-bold text-blue-500 uppercase pt-3">
        Starter
      </p>
      <h1 className="price_tariff md:text-[50px] text-[40px] font-bold mt-2">
        <sup className="text-[20px] relative md:-top-[30px] -top-[20px] -right-[10px]">
          $
        </sup>{" "}
        {price}
      </h1>
      <p className="text-[#ACACAC] md:my-[10px]">{t["monthly"]}</p>

      <div className="features_tariff mt-4">
        {features?.map((feature, index) => (
          <div className="feature_tariff flex items-center gap-2" key={index}>
            <img src="/check.svg" alt="" className="w-4 h-4" />
            <p className="text-[#ACACAC] md:my-[10px]">{feature}</p>
          </div>
        ))}
      </div>
      <p className="text-[#ACACAC] md:my-[10px]">{perprice}</p>
      <button className="outliners mt-4">{t['buy']}</button>
    </div>
  );
}

export default Card;

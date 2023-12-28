import React from "react";
import { type_of_payment }  from "./components/constatns.js";

function PaymentType({t}) { 
  return (
    <div>
      <h1 className="text-[32px] font-bold my-12 mt-[100px] ">
       {t['payment_method']}
      </h1>
      <div className="md:p-[86px] p-[20px] border-solid border border-[#DDD] bg-gradient-to-b from-white via-white to-transparent border-b-none rounded-[11px] grid md:grid-cols-2 justify-between gap-x-[200px] gap-y-[60px]">
        {type_of_payment.map((item, i) => (
          <div className="grid grid-cols-[1fr,4fr] items-center gap-[20px]" key={i}>
            <div className="flex justify-end">
              <img src={item.image} alt="" />
            </div>
            <div className="flex flex-col">
              <b>{t[item.title]}</b>
              <p>{t[item.description]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentType;

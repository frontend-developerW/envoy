import React from "react";

function Cancellation({ t }) {
  return (
    <div className="w-[80%]">
      <h1 className="mt-[50px] mb-[30px] text-[32px] font-[600]">
        {t["policy_cancel"]}
      </h1>
      2023.01.01
      <div className="flex flex-col gap-4">
        <h4 className="text-[18px] font-[600]">{t["cancel_title_1"]}</h4>
        <p className="text-[18px] font-[400]">{t["cancel_subtitle_1"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cancel_title_2"]}</h4>
        <p className="text-[18px] font-[400]">{t["cancel_subtitle_2"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cancel_title_3"]}</h4>
        <p className="text-[18px] font-[400]">{t["cancel_subtitle_3"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cancel_title_4"]}</h4>
        <p className="text-[18px] font-[400]">{t["cancel_subtitle_4"]}</p>
         <br />
        <br />
      </div>
    </div>
  );
}

export default Cancellation;

import React from "react";

function AgreementBody({ t }) {
  return (
    <div className="w-[80%]">
      <h1 className="mt-[50px] mb-[30px] text-[32px] font-[600]">
        {t["policy_agree"]}
      </h1>
      2023.01.01
      <div className="flex flex-col gap-4">
        <h4 className="text-[18px] font-[600]">{t["sla_title_1"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_1"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_2"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_2"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_3"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_3"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_4"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_4"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_6"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_6"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_7"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_7"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_8"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_8"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["sla_title_9"]}</h4>
        <p className="text-[18px] font-[400]">{t["sla_subtitle_9"]}</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default AgreementBody;

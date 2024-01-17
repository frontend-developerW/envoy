import React from "react";

function TermsBody({ t }) {
  return (
    <div className="w-[80%]">
      <h1 className="mt-[50px] mb-[30px] text-[32px] font-[600]">
        {t["termsofuse"]}
      </h1>
      2023.01.01
      <div className="flex flex-col gap-4">
        <h4 className="text-[18px] font-[600]">{t["terms_title_1"]}</h4>
        <p className="text-[18px] font-[400]">{t["terms_subtitle_1"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["terms_title_2"]}</h4>
        <p className="text-[18px] font-[400]">{t["terms_subtitle_2"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["terms_title_3"]}</h4>
        <p className="text-[18px] font-[400]">{t["terms_subtitle_3"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["terms_title_4"]}</h4>
        <p className="text-[18px] font-[400]">{t["terms_subtitle_4"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["terms_title_5"]}</h4>
        <p className="text-[18px] font-[400]">{t["terms_subtitle_5"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["terms_title_6"]}</h4>
        <p className="text-[18px] font-[400]">{t["terms_subtitle_6"]}</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default TermsBody;

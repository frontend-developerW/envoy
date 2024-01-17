import React from "react";

function CookieBody({ t }) {
  return (
    <div className="w-[80%]">
      <h1 className="mt-[50px] mb-[30px] text-[32px] font-[600]">
        {t["policy_file"]}
      </h1>
      2023.01.01
      <div className="flex flex-col gap-4">
        <h4 className="text-[18px] font-[600]">{t["cookie_title_1"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_1"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_2"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_2"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_3"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_3"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_4"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_4"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_5"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_5"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_6"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_6"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_7"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_7"]}</p>
        <br />
        <h4 className="text-[18px] font-[600]">{t["cookie_title_8"]}</h4>
        <p className="text-[18px] font-[400]">{t["cookie_subtitle_8"]}</p>
        <br />
      </div>
    </div>
  );
}

export default CookieBody;

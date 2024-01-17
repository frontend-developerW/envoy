import React from "react";

function PrivacyBody({ t }) {
  return (
    <div className="w-[80%]">
      <h1 className="mt-[50px] mb-[30px] text-[32px] font-[600]">
        {t["policy"]}
      </h1>
      <p>{t["privacy_subtitle_1"]}</p>
      <b className="text-[20px] font-[600]">{t["privacy_title_1"]}</b> <br />
      <br />
      <p>{t["privacy_subtitle_2"]}</p>
      <b className="text-[20px] font-[600]">{t["privacy_title_2"]}</b> <br />
      <br />
      <p>{t["privacy_subtitle_3"]}</p>
      <b className="text-[20px] font-[600]">{t["privacy_title_3"]}</b> <br />
      <br />
      <p>{t["privacy_subtitle_4"]}</p>
      <b className="text-[20px] font-[600]">{t["privacy_title_4"]}</b> <br />
      <br />
      <p>{t["privacy_subtitle_5"]}</p>
      <b className="text-[20px] font-[600]">{t["privacy_title_5"]}</b> <br />
      <br />
      <p>{t["privacy_subtitle_6"]}</p>
      <b className="text-[20px] font-[600]">{t["privacy_title_6"]}</b> <br />
      <br />
      <p>{t["privacy_subtitle_7"]}</p>
      <br />
    </div>
  );
}

export default PrivacyBody;

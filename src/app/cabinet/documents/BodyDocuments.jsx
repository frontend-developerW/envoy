'use client';
import React, { useState } from "react";
import TermsBody from "./documents/Terms";
import PrivacyBody from "./documents/Privacy";
import CookieBody from "./documents/Cookie";
import AgreementBody from "./documents/Agreement";

const BodyDocuments = ({langs}) => {
  const [tab, setTab] = useState(0);
  const lang = langs.cabinet.documents_text;
  const tabs = [
    { title: langs.cabinet.termsofuse, content: <TermsBody t={lang} /> },
    { title: langs.cabinet.policy, content: <PrivacyBody t={lang} /> },
    {
      title: langs.cabinet.policy_file,
      content: <CookieBody t={lang} />,
    },
    {
      title: langs.cabinet.policy_agree,
      content: <AgreementBody t={lang} />,
    },
  ];

  return (
    <div className="md:p-[50px] p-[15px] py-[30px] w-full">
      <h1 className="text-[32px] font-bold mb-[30px]">
        {langs.cabinet.documents}
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        {tabs.map((item, i) => (
          <button
            onClick={() => setTab(i)}
            key={i}
            className={[
              " transition  border-solid border rounded-[6px] border-black text-[18px] p-[8px] ",
              tab === i && " bg-[#038FF7]  text-white",
            ]}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="md:p-[40px] p-[20px] bg-white border-solid border border-black rounded-[10px] mt-[20px] text-[18px]">
        <h1 className="text-[25px] font-bold mb-[30px]">{tabs[tab].title}</h1>
        {tabs[tab].content}
      </div>
    </div>
  );
};

export default BodyDocuments;

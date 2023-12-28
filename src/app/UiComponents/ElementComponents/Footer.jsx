import React from "react";

function Footer({ t }) {
  return (
    <div className="grid md:grid-cols-[2fr,2fr,1fr,2fr]">
      <div className="flex flex-col gap-[15px] justify-start">
        <a href="#">{t["create_tarif_1"]}</a>
        <a href="#">{t["create_tarif_2"]}</a>
        <a href="#">{t["create_tarif_3"]}</a>
      </div>
      <div className="flex flex-col gap-[15px] justify-start">
        <a href="#">{t["proxy_usage"]}</a>
        <a href="#">{t["countries"]}</a>
        <a href="#">{t["prices"]}</a>
        <a href="#">{t["help"]}</a>
        <a href="#">{t["blog"]}</a>
        <a href="#">{t["refferal_title"]}</a>
      </div>
      <div className="flex flex-col gap-[15px] justify-start">
        <a href="#">{t["chatbot"]}</a>
        <a href="#">{t["feedback_contact"]}</a>
      </div>
      <div className="flex flex-col gap-[15px] justify-start">
        <a href="#">{t["social"]}</a>
        <div className="flex items-center gap-[10px]">
          <a href="#">
            <img src="/telegram.svg" className="h-[30px]" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.svg" className="h-[30px]" alt="" />
          </a>
          <a href="#">
            <img src="/vk.svg" className="h-[30px]" alt="" />
          </a>
          <a href="#">
            <img src="/4star.svg" className="h-[30px]" alt="" />
          </a>
        </div>
        <a href="#">{t["policy"]}</a>
        <a href="#">{t["termsofuse"]}</a>
        <a href="#">{t["policy_file"]}</a>
        <a href="#">{t["policy_cancel"]}</a>
        <a href="#">{t["policy_agree"]}</a>
      </div>
    </div>
  );
}

export default Footer;

import Link from "next/link";
import React from "react";

function Footer({ t }) {
  return (
    <div className="grid md:grid-cols-[2fr,2fr,1fr,2fr]">
      <div className="flex flex-col gap-[15px] justify-start">
        <Link href="/residental">{t["create_tarif_1"]}</Link>
        <Link href="/resident-static">{t["create_tarif_2"]}</Link>
        <Link href="/mobile-proxy">{t["create_tarif_3"]}</Link>
      </div>
      <div className="flex flex-col gap-[15px] justify-start">
        <Link href="#">{t["proxy_usage"]}</Link>
        <Link href="/proxy-countries">{t["countries"]}</Link>
        <Link href="/tarif_plans">{t["prices"]}</Link>
        <Link href="/help">{t["help"]}</Link>
        <Link href="/blog">{t["blog"]}</Link>
        <Link href="#">{t["refferal_title"]}</Link>
      </div>
      <div className="flex flex-col gap-[15px] justify-start">
        <Link href="/">{t["chatbot"]}</Link>
        <Link href="/contact">{t["feedback_contact"]}</Link>
      </div>
      <div className="flex flex-col gap-[15px] justify-start">
        <Link href="#">{t["social"]}</Link>
        <div className="flex items-center gap-[10px]">
          <Link href="#">
            <img src="/telegram.svg" className="h-[30px]" alt="" />
          </Link>
          <Link href="#">
            <img src="/youtube.svg" className="h-[30px]" alt="" />
          </Link>
          <Link href="#">
            <img src="/vk.svg" className="h-[30px]" alt="" />
          </Link>
          <Link href="#">
            <img src="/4star.svg" className="h-[30px]" alt="" />
          </Link>
        </div>
        <Link href="/privacy">{t["policy"]}</Link>
        <Link href="/terms">{t["termsofuse"]}</Link>
        <Link href="/cookie">{t["policy_file"]}</Link>
        <Link href="/cancellation">{t["policy_cancel"]}</Link>
        <Link href="/agreement">{t["policy_agree"]}</Link>
      </div>
    </div>
  );
}

export default Footer;

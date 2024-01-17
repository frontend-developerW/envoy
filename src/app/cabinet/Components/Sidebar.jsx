"use client";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { IoIosLogOut } from "react-icons/io";
import { useSelector } from "react-redux";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import Navbar from "./Navbar";
// import LangSwitcher from "./LanguageSwitcher";
function Sidebar({ t, currentPage }) {
  //   const { lang } = useLang();
  const lang = t.cabinet;
  const sidebarItems = [
    {
      icon: "/cabinet/images/proxy.svg",
      text: lang.proxy,
      link: "/cabinet/buy-proxy",
      title: lang.purchases,
    },
    {
      icon: "/cabinet/images/profile.svg",
      text: lang.profile,
      link: "/cabinet/profile",
      title: lang.user,
    },
    {
      icon: "/cabinet/images/plans.svg",
      text: lang.myPlans,
      link: "/cabinet/",
    },

    {
      icon: "/cabinet/images/balance.svg",
      text: lang.balance,
      link: "/cabinet/balance",
    },
    {
      icon: "/cabinet/images/referal.svg",
      text: lang.referralProgram,
      link: "/cabinet/referal",
    },
    {
      icon: "/cabinet/images/free_period.svg",
      text: lang.free_period,
      link: "/cabinet/free-period",
    },

    {
      icon: "/cabinet/images/faq.svg",
      text: lang.faq,
      link: "/cabinet/faq",
      title: lang.information,
    },
    {
      icon: "/cabinet/images/documents.svg",
      text: lang.documents,
      link: "/cabinet/documents",
    },
  ];

  console.log(lang);
  const [activeBar, setActiveBar] = useState(false);
  return (
    <div className="md:flex cabinet">
      <div
        className={`transition-all ${
          !activeBar ? "w-[4vw] min-w-[0px]" : "w-[24vw] min-w-[290px]"
        }`}
      >
        <div
          className={`z-[90] transition-all w-[20%] min-w-[290px] bg-[#0C1432] text-[#fff] fixed top-0  h-screen md:p-[20px] p-[15px]   overflow-y-scroll ${
            !activeBar ? "md:-left-[16vw] -left-[100%]" : "left-0"
          }`}
        >
          <div className="flex justify-between text-[32px] mb-[40px]">
            <p className="text-[16px]">
              API KEY :
              <span className="opacity-60 block">10Lngz5oabAmYjdH</span> Doc
            </p>
            <button onClick={() => setActiveBar(!activeBar)}>☰</button>
          </div>
          <div className="flex flex-col gap-[20px] w-[80%]">
            {
              // eslint-disable-next-line array-callback-return
              sidebarItems.map((item, i) => (
                <div key={i}>
                  <p className="mb-[10px] opacity-50">{item?.title}</p>
                  <Link
                    key={i}
                    href={item.link}
                    className="flex items-center gap-[10px]"
                  >
                    {item.icon && <img src={item.icon} alt="" />}
                    <span>{item.text}</span>
                  </Link>
                </div>
              ))
            }
            {/* <span>Язык</span> */}
            <LangSwitcher />
            <Link href="/" className="flex items-center gap-2">
              <IoIosLogOut className="text-[22px]" />
              {lang.logout}
            </Link>
            <div className="flex gap-2 items-center">
              <img src="/cabinet/images/telegram.svg" alt="" />
              <p>{lang.join_telegram}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Navbar setActiveBar={setActiveBar} lang={lang} />
       {currentPage}
      </div>
    </div>
  );
}

export default Sidebar;

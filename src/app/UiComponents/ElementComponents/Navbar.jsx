"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toRus, toEng } from "../../app/action/counterSlice";

function Navbar({ t }) {
  const [activeNav, setActiveNav] = useState(false);
  const dispatch = useDispatch();
  const currentLocale = useSelector((state) => state.counter.lang);

  return (
    <div className="pb-[70px]">
      <div className="fixed top-0 left-0 w-full md:p-[30px] md:py-[20px] py-[0px] z-[99] bg-[#F3F7FE]">
        <nav className="container">
          <div className="md:hidden flex items-center justify-between p-[20px_0px]">
            <button className="text-[30px]" onClick={() => setActiveNav(true)}>
              ☰
            </button>

            <div className="flex items-center gap-[20px]">
              <Link href="/login" className="text-black ">
                {t["login"]}
              </Link>
              <Link
                href="/register"
                className="bg-black text-white rounded-[30px] px-[20px] py-[10px]"
              >
                {t["registration"]}
              </Link>
            </div>
          </div>
          <ul
            className={`flex items-center justify-between list-none text-[20px] md:static absolute md:bg-transparent bg-[#fff] md:flex-row flex-col md:p-0 p-[40px_20px] md:gap-auto gap-[10px] w-full left-0 ${
              activeNav ? "top-0" : "-top-[200vh]"
            }`}
          >
            <li className="md:hidden absolute top-[20px] right-[20px]">
              <button onClick={() => setActiveNav(false)}>&times;</button>
            </li>
            <li>
              <Link href="/">
                <h1 className="text-2xl font-bold">Primesox</h1>
              </Link>
            </li>
            <li>
              <div class="dropdown">
                <Link href="/residental" className="dropdown-button">
                  {t["residential"]}
                </Link>
                <div class="dropdown-content">
                  <Link href="/monitoring">{t["popular_1"]}</Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/proxy-countries">{t["countries"]}</Link>
            </li>
            <li>
              <Link href="/tarif_plans">{t["prices"]}</Link>
            </li>
            <li>
              <Link href="/blog">{t["helpful"]}</Link>
            </li>
            <li>
              <Link href="/help">{t["help"]}</Link>
            </li>
            <li className="flex flex-col gap-[10px] text-[20px]">
              {/* <LanguageChanger /> */}
              {/* <div class="dropdown">
                <button
                  className="dropdown-button"
                  onClick={() => dispatch(toRus())}
                >
                  <img src="/ru.png" alt="" />
                </button>
                <div class="dropdown-content">
                  <button onClick={() => dispatch(toEng())}>
                    <img src="/en.png" alt="" />
                  </button>
                </div>
              </div> */}
              {currentLocale === "ru" ? (
                <button onClick={() => dispatch(toEng())}>
                  <img src="/en.png" alt="" />
                </button>
              ) : (
                <button
                  className="dropdown-button"
                  onClick={() => dispatch(toRus())}
                >
                  <img src="/ru.png" alt="" />
                </button>
              )}
            </li>
            <li className="md:block hidden">
              <Link href="/login" className="text-black ">
                {t["login"]}
              </Link>
            </li>
            <li className="md:block hidden">
              <Link
                href="/register"
                className="bg-black text-white rounded-[30px] px-[20px] py-[10px]"
              >
                {t["registration"]}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

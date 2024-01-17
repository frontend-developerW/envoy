import React from "react";
import Link from "next/link";
import BlueBtn from "./BlutBtn";
function Navbar({ setActiveBar, lang }) {
  return (
    <div className=" p-[30px] pb-0 md:px-[50px] px-[20px]">
      <img
        src={"/cabinet/images/logo.svg"}
        alt=""
        className="md:hidden block m-auto mb-5"
      />
      <div className="md:grid flex grid-cols-3 justify-between items-center">
        <button
          onClick={() => setActiveBar(true)}
          className="text-[#000] md:hidden text-[30px]"
        >
          ☰
        </button>
        <img
          src={"/cabinet/images/logo.svg"}
          alt=""
          className="md:block hidden"
        />
        <div className="md:m-auto">
          <Link href="/cabinet/balance">
            <BlueBtn
              text={`${lang.balance} $0`}
              className={"md:min-w-[190px]"}
            />
          </Link>
        </div>
        <div className="flex justify-end items-center gap-2">
          <b>i995@gmail.com</b>
          <BlueBtn text={<img src={"/cabinet/images/logout.svg"} className="p-[2px]" />} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

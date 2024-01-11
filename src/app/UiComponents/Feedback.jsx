import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Feedback({ t, allComments = false }) {
  let arr = allComments ? [1, 2, 3, 4, 5, 6] : [1, 2, 3];
  return (
    <div>
      <div className="flex md:items-center md:justify-between  font-bold mt-[100px] mb-[50px] md:flex-row flex-col md:gap-0 gap-4">
        <h1 className="title_section text-3xl">{t["feedback"]}</h1>
        {!allComments && (
          <Link href="/all-comments">
            <button className="text-[18px] flex items-center gap-5">
              {t.all_comments} <FaArrowRight />
            </button>
          </Link>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-[30px]">
        {arr.map((item, index) => (
          <div
            key={index}
            className="card p-[40px] pb-[80px] rounded-[12px] border-solid border border-[#E7E8EC] bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://visafoto.com/img/source355x388.jpg"
                  alt=""
                  className="w-[38px] h-[38px] object-cover rounded-full relative z-10 border-solid border-4 border-white"
                />
                <img
                  src="https://i.pinimg.com/originals/62/f2/4a/62f24a7905a11e40c134c76eea2df4be.jpg"
                  alt=""
                  className="w-[38px] h-[38px] object-cover rounded-full relative -left-4 border-solid border-4 border-white"
                />
                <p className="text-[#676D7E] truncate ">Lorem ipsum</p>
              </div>
              <p className="text-[#676D7E] truncate ">Lorem ipsum</p>
            </div>
            <div className="flex mt-2 justify-between mb-2">
              <div className="flex ">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <img src="/star.svg" alt="" key={index} />
                ))}
              </div>
              <div className="flex items-center gap-[5px]">
                <p>Россия</p>
                <img src="/location.svg" alt="" />
              </div>
            </div>
            <b>Lorem ipsum</b>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim adLorem ipsum
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;

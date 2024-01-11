'use client'
import React from 'react'
import Navbar from './UiComponents/ElementComponents/Navbar'
import { useSelector } from 'react-redux'
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
function notfound() {
  const t = useSelector((state) => state.counter.value)

  return (
    <div>
      <Navbar t={t} />
      <div className="flex item-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#000] dark:text-white mt-[20px] md:text-[300px] md:leading-[300px]">
            404
          </h1>
          <p className="text-[48px] font-medium ">
            {t['not_found']}
          </p>
          <p className="text-[16px] font-medium w-[50%] m-auto">
            {t['not_found_text']}
          </p>
          <div className="mt-6">
            <button> 
              <Link
                href="/"
                className="px-7 py-3 text-sm font-medium text-white transition-colors duration-200 transform bg-black rounded-full hover:bg-gray-700 flex items-start justify-center gap-2"
              >
              Go back home <MdOutlineArrowOutward />
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default notfound
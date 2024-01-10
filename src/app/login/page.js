'use client'
import { useSelector, useDispatch } from 'react-redux'


import RighOfLogin from '../UiComponents/RightOfLogin'
import Link from 'next/link'

const Login = () => {
  
  const t = useSelector((state) => state.counter.value)

  return (
    <>
      <main>
        <div className="flex w-full">
          <div className="bg-white md:h-screen md:w-[40%] md:min-w-[560px] min-w-[350px]">
            <div className="flex flex-col md:p-[80px] md:pt-[40px] md:pb-[10px] p-[25px] pr-0">
              <h1 className='text-[32px] font-bold leading-[50px]'>
                {t['welcome']}
              </h1>
              <p className='text-[20px] md:leading-[30px] leading-[22px] text-[#676D7E] md:w-[80%]'> {t['sub_welcome']}
              </p>

            </div>
            <div className="md:px-[80px] p-[25px] md:pt-0 pt-[20px] flex flex-col">
              <button className="flex items-center justify-center gap-[10px] p-[17px] border-solid border border-[#D9D9D9] rounded shadow-lg">
                <img src="/google.png" alt="" />
                <span className='text-[16px] font-[600]'>{t['google']}</span>
              </button>
              <div className="border-solid border-t-none border my-[20px] border-[#E7E8EC]"></div>
              <input type="email" required placeholder={t['mail']} className='p-[14px] border-solid border border-[#D9D9D9] rounded shadow text-[16px] outline-none mb-[35px]' />
              <input type="password" required placeholder={t['password']} className='p-[14px] border-solid border border-[#D9D9D9] rounded shadow text-[16px] outline-none' />
              <a href="#" className='mt-[10px] underline text-[#038FF7]'>{t['forget']}</a>
              <button className="flex items-center justify-center gap-[10px] p-[12px] mt-[20px] border-solid border border-[#D9D9D9] rounded shadow-lg bg-[#038FF7]">
                <span className='text-[20px] font-[600] text-[#fff]'>{t['login']}</span>
              </button>
              <div className="border-solid border-t-none border my-[40px] border-[#E7E8EC]"></div>
              <p className='text-[#828A9E]'>{t['no_account']}
                <Link href="/register" className='mt-[10px] underline text-[#038FF7]'>{t['registration']} </Link>
              </p>

            </div>
          </div>
          <RighOfLogin type={'login'} t={t} />
        </div>
      </main>
    </>
  )
}

export default Login


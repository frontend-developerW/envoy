
'use client'
import { useSelector, useDispatch } from 'react-redux'
import RighOfLogin from '../UiComponents/RightOfLogin'
import Link from 'next/link'

const Register = () => {
  const t = useSelector((state) => state.counter.value)
  
  return (
    <>
      <main>
        <div className="flex w-full">
          <div className="bg-white md:w-[40%] md:min-w-[560px] min-w-[350px]">
            <div className="flex flex-col md:p-[80px] p-[25px] pr-0">
              <h1 className='md:text-[48px] text-[32px] font-bold leading-[50px]'>
                {t['welcome']}
              </h1>
              <p className='md:text-[24px] text-[20px] md:leading-[30px] leading-[22px] text-[#676D7E] md:w-[80%]'> {t['sub_welcome']}
              </p>

            </div>
            <div className="md:p-[80px] p-[25px] pt-[20px] flex flex-col">
              <button className="flex items-center justify-center gap-[10px] p-[17px] border-solid border border-[#D9D9D9] rounded shadow-lg">
                <img src="/google.png" alt="" />
                <span className='text-[16px] font-[600]'>{t['google']}</span>
              </button>
              <div className="border-solid border-t-none border my-[40px] border-[#E7E8EC]"></div>
              <input type="email" required placeholder={t['name']} className='p-[14px] border-solid border border-[#D9D9D9] rounded shadow text-[16px] outline-none mb-[35px]' />
              <input type="email" required placeholder={t['mail']} className='p-[14px] border-solid border border-[#D9D9D9] rounded shadow text-[16px] outline-none mb-[35px]' />
              <input type="password" required placeholder={t['password']} className='p-[14px] border-solid border border-[#D9D9D9] rounded shadow text-[16px] outline-none' />
              <button className="flex items-center justify-center gap-[10px] p-[12px] mt-[20px] border-solid border border-[#D9D9D9] rounded shadow-lg bg-[#038FF7]">
                <span className='text-[20px] font-[600] text-[#fff]'>{t['registration']}</span>
              </button>
              <div className="border-solid border-t-none border my-[40px] border-[#E7E8EC]"></div>
              <p className='text-[#828A9E] mb-[10px]'> {t['with_account']}
                <Link href="/login" className='mt-[10px] underline text-[#038FF7]'>{t['login']} </Link>
              </p>
              <p className='text-[#828A9E] text-[12px]'>{t['agree_policy']} <br /> <a href="#" className='mt-[10px] underline text-[#038FF7]'> {t['p_p']}   </a></p>

            </div>
          </div>
          <RighOfLogin type={'registration'} t={t} />
        </div>
      </main>
    </>
  )
}

export default Register


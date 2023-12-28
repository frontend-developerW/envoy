'use client'
import Tariffs from '../../UiComponents/Tariffs'
import Footer from '../../UiComponents/ElementComponents/Footer'
import Navbar from '../../UiComponents/ElementComponents/Navbar'
import { useSelector, useDispatch } from 'react-redux'

const BlogItem = () => {
  const t = useSelector((state) => state.counter.value)
  return (
    <div className='container'>
      <main>
        <Navbar t={t} />
        <h1 className="text-[32px] font-bold my-6 mt-[100px] flex items-center gap-[10px]">
          {t['how_use_clients']}
        </h1>
        <div className="p-[20px]">
          <iframe className='w-full md:h-[820px] rounded-[30px] overflow-hidden' src="https://www.youtube.com/embed/ysNDDrG9PtI?si=Cd5RU1evS_bob7Mu" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <div className="bg-white p-10 rounded-[20px] m-[20px]">
          <h1 className='text-[22px] font-[600]'>Lorem ipsum dolor sit amet, consectetuer adip Blog Post </h1>
          <p className='text-[16px] text-[#ACACAC] mt-[20px] w-[90%] leading-[32px]'>Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adsectetuer adipLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adsectetuer adip</p>
        </div>
        <Tariffs t={t} />
        <Footer t={t} />
      </main>
    </div>
  )
}

export default BlogItem

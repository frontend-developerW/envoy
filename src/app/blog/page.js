'use client'
import Tariffs from '../UiComponents/Tariffs'
import HowToUse from '../UiComponents/HowToUse'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import { useSelector, useDispatch } from 'react-redux'
 
const Blog = () => {
  const t = useSelector((state) => state.counter.value)

  return (
    <div className='container'>
      <main>
        <Navbar t={t} />
        <HowToUse t={t} />
        <Tariffs t={t} />
        {/* <Contact t={t} /> */}
        <Footer t={t} />
      </main>
    </div>
  )
}

export default Blog


